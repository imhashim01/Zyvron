"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { apiJson } from "@/lib/api";
import { useAuth } from "./authContext";
import { FREE_SHIPPING_THRESHOLD, SHIPPING_FEE } from "@/data/constants";

const CartContext = createContext(null);
const CART_KEY = "zyvron_cart";
const WISHLIST_KEY = "zyvron_wishlist";
const BUY_NOW_KEY = "zyvron_buy_now";
// Which account's data zyvron_cart/zyvron_wishlist currently hold: null means
// "nobody's yet" (a guest cart, safe to fold into whichever account signs in
// next); otherwise it's that account's id. This is what lets two different
// accounts share one browser without one account's cart leaking into the
// other's — see the sync effect below.
const CART_OWNER_KEY = "zyvron_cart_owner";

const PUSH_DEBOUNCE_MS = 600;

function readJSON(key, fallback) {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function writeJSON(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // storage unavailable (private mode, quota) — cart just won't persist
  }
}

export function CartProvider({ children }) {
  const { user, isAuthenticated, loading: authLoading } = useAuth();
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [buyNowItem, setBuyNowItem] = useState(null);
  const [hydrated, setHydrated] = useState(false);
  const [ownerId, setOwnerId] = useState(null);

  // Guards against the sync effect re-running for the same account, and
  // against the push-to-server effects firing while a sync is in flight
  // (which would otherwise race the merge/fetch response).
  const lastSyncedUserRef = useRef(undefined);
  const syncingRef = useRef(false);

  useEffect(() => {
    setCart(readJSON(CART_KEY, []));
    setWishlist(readJSON(WISHLIST_KEY, []));
    setBuyNowItem(readJSON(BUY_NOW_KEY, null));
    setOwnerId(readJSON(CART_OWNER_KEY, null));
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) writeJSON(CART_KEY, cart);
  }, [cart, hydrated]);

  useEffect(() => {
    if (hydrated) writeJSON(WISHLIST_KEY, wishlist);
  }, [wishlist, hydrated]);

  useEffect(() => {
    if (hydrated) writeJSON(BUY_NOW_KEY, buyNowItem);
  }, [buyNowItem, hydrated]);

  useEffect(() => {
    if (hydrated) writeJSON(CART_OWNER_KEY, ownerId);
  }, [ownerId, hydrated]);

  // Cross-device sync: runs once whenever the signed-in account changes
  // (login, logout, or switching accounts on this browser) — not on every
  // cart/wishlist edit, which is handled by the push effects further down.
  useEffect(() => {
    if (!hydrated || authLoading) return;
    const currentUserId = user?.id || null;
    if (lastSyncedUserRef.current === currentUserId) return;
    lastSyncedUserRef.current = currentUserId;

    if (!currentUserId) return; // signed out — local cart just stays local

    let cancelled = false;
    syncingRef.current = true;

    (async () => {
      // Local data already belongs to this exact account (e.g. a page
      // refresh while still logged in) — just pull the latest, in case
      // another device changed it since. Otherwise this is either a fresh
      // guest cart (never associated with an account) or a different
      // account's leftover cart on a shared browser; only the former is
      // safe to fold in — an account must never inherit another account's
      // cart just because they used the same browser.
      const sameAccount = ownerId === currentUserId;
      const isGuestCart = ownerId === null;

      const cartPromise = sameAccount || !isGuestCart || cart.length === 0
        ? apiJson("/cart").catch(() => null)
        : apiJson("/cart/merge", {
            method: "POST",
            body: JSON.stringify({
              items: cart.map((item) => ({ product: item.product._id, quantity: item.quantity })),
            }),
          }).catch(() => null);

      const wishlistPromise = sameAccount || !isGuestCart || wishlist.length === 0
        ? apiJson("/wishlist").catch(() => null)
        : apiJson("/wishlist/merge", { method: "POST", body: JSON.stringify({ ids: wishlist }) }).catch(() => null);

      const [cartData, wishlistData] = await Promise.all([cartPromise, wishlistPromise]);
      if (cancelled) return;

      let succeeded = false;
      if (cartData) {
        setCart(cartData.items || []);
        succeeded = true;
      }
      if (wishlistData) {
        setWishlist(wishlistData.ids || []);
        succeeded = true;
      }
      // Only claim ownership once something actually round-tripped to the
      // server — if the API was unreachable, leave the owner tag as-is so a
      // future reload retries the sync instead of silently going stale.
      if (succeeded) setOwnerId(currentUserId);
      syncingRef.current = false;
    })();

    return () => {
      cancelled = true;
    };
    // Intentionally excludes `cart`/`wishlist`: this should only re-run when
    // the signed-in account changes, reading whatever cart/wishlist happen
    // to hold at that moment — not every time they change.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hydrated, authLoading, user?.id, ownerId]);

  // Push local changes up to the account once it's synced (ownerId matches
  // the signed-in user), debounced so rapid quantity clicks don't spam the API.
  useEffect(() => {
    if (!hydrated || syncingRef.current) return;
    if (!user?.id || ownerId !== user.id) return;
    const timer = setTimeout(() => {
      apiJson("/cart", {
        method: "PUT",
        body: JSON.stringify({
          items: cart.map((item) => ({ product: item.product._id, quantity: item.quantity })),
        }),
      }).catch(() => {});
    }, PUSH_DEBOUNCE_MS);
    return () => clearTimeout(timer);
  }, [cart, hydrated, user?.id, ownerId]);

  useEffect(() => {
    if (!hydrated || syncingRef.current) return;
    if (!user?.id || ownerId !== user.id) return;
    const timer = setTimeout(() => {
      apiJson("/wishlist", { method: "PUT", body: JSON.stringify({ ids: wishlist }) }).catch(() => {});
    }, PUSH_DEBOUNCE_MS);
    return () => clearTimeout(timer);
  }, [wishlist, hydrated, user?.id, ownerId]);

  const addToCart = useCallback((product, quantity = 1) => {
    setCart((prev) => {
      const idx = prev.findIndex((item) => item.product._id === product._id);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = { ...next[idx], quantity: next[idx].quantity + quantity };
        return next;
      }
      return [...prev, { product, quantity }];
    });
  }, []);

  const updateQuantity = useCallback((productId, quantity) => {
    setCart((prev) =>
      prev.map((item) =>
        item.product._id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  }, []);

  const removeFromCart = useCallback((productId) => {
    setCart((prev) => prev.filter((item) => item.product._id !== productId));
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const toggleWishlist = useCallback((productId) => {
    setWishlist((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  }, []);

  const startBuyNow = useCallback((product, quantity = 1) => {
    setBuyNowItem({ product, quantity });
  }, []);

  const clearBuyNow = useCallback(() => setBuyNowItem(null), []);

  const subtotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
    [cart]
  );
  const count = useMemo(() => cart.reduce((sum, item) => sum + item.quantity, 0), [cart]);

  const checkoutItems = buyNowItem ? [buyNowItem] : cart;
  const checkoutSubtotal = buyNowItem
    ? buyNowItem.product.price * buyNowItem.quantity
    : subtotal;

  const isFreeShipping = checkoutSubtotal >= FREE_SHIPPING_THRESHOLD || checkoutItems.length === 0;
  const shippingFee = isFreeShipping ? 0 : SHIPPING_FEE;
  const freeShippingRemaining = Math.max(0, FREE_SHIPPING_THRESHOLD - checkoutSubtotal);
  const freeShippingProgress = Math.min(
    100,
    Math.round((checkoutSubtotal / FREE_SHIPPING_THRESHOLD) * 100)
  );

  const value = {
    cart,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    count,
    wishlist,
    toggleWishlist,
    buyNowItem,
    startBuyNow,
    clearBuyNow,
    checkoutItems,
    checkoutSubtotal,
    isFreeShipping,
    shippingFee,
    freeShippingRemaining,
    freeShippingProgress,
    FREE_SHIPPING_THRESHOLD,
    SHIPPING_FEE,
    hydrated,
    isAuthenticated,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
