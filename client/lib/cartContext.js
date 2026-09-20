"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { FREE_SHIPPING_THRESHOLD, SHIPPING_FEE } from "./constants";

const CartContext = createContext(null);
const CART_KEY = "zyvron_cart";
const WISHLIST_KEY = "zyvron_wishlist";
const BUY_NOW_KEY = "zyvron_buy_now";

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
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [buyNowItem, setBuyNowItem] = useState(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setCart(readJSON(CART_KEY, []));
    setWishlist(readJSON(WISHLIST_KEY, []));
    setBuyNowItem(readJSON(BUY_NOW_KEY, null));
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
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
