"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/store/cartContext";

export default function ProductActions({ product }) {
  const { addToCart, startBuyNow, wishlist, toggleWishlist } = useCart();
  const router = useRouter();
  const [qty, setQty] = useState(1);
  const [color, setColor] = useState(product.colors?.[0]?.name || null);
  const [added, setAdded] = useState(false);
  const outOfStock = (product.stock ?? 1) <= 0;
  const isWishlisted = wishlist.includes(product._id);

  function handleAddToCart() {
    addToCart(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  function handleBuyNow() {
    startBuyNow(product, qty);
    router.push("/checkout");
  }

  return (
    <div className="space-y-5">
      {product.colors?.length > 0 && (
        <div>
          <p className="mb-2 text-sm font-semibold text-white/70">Color</p>
          <div className="flex gap-2">
            {product.colors.map((c) => (
              <button
                key={c.name}
                onClick={() => setColor(c.name)}
                title={c.name}
                className={`h-8 w-8 rounded-full border-2 ${
                  color === c.name ? "border-cyan-400" : "border-white/20"
                }`}
                style={{ backgroundColor: c.hex }}
              />
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center gap-4">
        <div className="flex items-center rounded-full border border-white/15">
          <button
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="px-3 py-2 text-white/70 hover:text-white"
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="w-8 text-center text-sm font-semibold">{qty}</span>
          <button
            onClick={() => setQty((q) => q + 1)}
            className="px-3 py-2 text-white/70 hover:text-white"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        <button
          onClick={() => toggleWishlist(product._id)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 hover:border-cyan-400"
          aria-label="Toggle wishlist"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill={isWishlisted ? "#00D9FF" : "none"}
            stroke={isWishlisted ? "#00D9FF" : "currentColor"}
            strokeWidth="1.8"
          >
            <path d="M20.8 8.6c0-2.6-2.1-4.6-4.7-4.6-1.6 0-3 .8-3.9 2-.9-1.2-2.3-2-3.9-2-2.6 0-4.7 2-4.7 4.6 0 1.1.4 2.1 1 2.9L12 20l7.4-8.5c.6-.8 1-1.8 1-2.9Z" />
          </svg>
        </button>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          disabled={outOfStock}
          onClick={handleAddToCart}
          className="flex-1 rounded-full border border-cyan-400 py-3 text-sm font-bold text-cyan-300 transition hover:bg-cyan-400/10 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {added ? "Added ✓" : outOfStock ? "Out of Stock" : "Add to Cart"}
        </button>
        <button
          disabled={outOfStock}
          onClick={handleBuyNow}
          className="flex-1 rounded-full bg-cyan-400 py-3 text-sm font-bold text-black transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}
