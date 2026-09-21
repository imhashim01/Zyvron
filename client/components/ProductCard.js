"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/cartContext";
import { discountPercent, formatPKR } from "@/lib/format";
import StarRating from "./StarRating";

export default function ProductCard({ product, ribbon = false }) {
  const { addToCart, startBuyNow, wishlist, toggleWishlist } = useCart();
  const router = useRouter();
  const pct = discountPercent(product.price, product.compareAtPrice);
  const isWishlisted = wishlist.includes(product._id);
  const outOfStock = (product.stock ?? 1) <= 0;

  function handleBuyNow() {
    startBuyNow(product, 1);
    router.push("/checkout");
  }

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-cyan-400/40 hover:bg-white/[0.06]">
      <button
        type="button"
        onClick={() => toggleWishlist(product._id)}
        aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur transition hover:bg-black/70"
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

      {ribbon && pct ? (
        <span
          className="absolute left-3 top-3 z-10 rounded-md px-2.5 py-1 text-[11px] font-black text-white shadow"
          style={{
            background: "linear-gradient(90deg, #ff21a0, #704cff)",
            boxShadow: "0 5px 15px rgba(190,40,220,0.2)",
          }}
        >
          {pct}% OFF
        </span>
      ) : (
        product.badge && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-cyan-400 px-2.5 py-1 text-[11px] font-bold text-black">
            {product.badge}
          </span>
        )
      )}

      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative aspect-square w-full bg-white/5">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.title}
              fill
              sizes="(max-width: 640px) 50vw, 25vw"
              className="object-cover transition duration-300 group-hover:scale-105"
            />
          ) : null}
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-1.5 p-4">
        <span className="text-[11px] uppercase tracking-wide text-cyan-300/80">
          {product.category?.name || product.category}
        </span>
        <Link href={`/product/${product.slug}`}>
          <h3 className="line-clamp-2 text-sm font-semibold text-white/90 hover:text-cyan-300">
            {product.title}
          </h3>
        </Link>
        <StarRating rating={product.rating} count={product.reviewsCount} />
        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-lg font-bold text-white">{formatPKR(product.price)}</span>
          {product.compareAtPrice > product.price && (
            <span className="text-xs text-white/40 line-through">
              {formatPKR(product.compareAtPrice)}
            </span>
          )}
          {pct && <span className="text-xs font-semibold text-emerald-400">{pct}% OFF</span>}
        </div>

        {outOfStock ? (
          <button
            type="button"
            disabled
            className="mt-2 w-full rounded-full bg-white/10 py-2 text-sm font-bold text-white/40"
          >
            Out of stock
          </button>
        ) : (
          <div className="mt-2 flex gap-2">
            <button
              type="button"
              onClick={() => addToCart(product, 1)}
              aria-label="Add to cart"
              title="Add to cart"
              className="flex flex-1 items-center justify-center gap-1.5 rounded-full border border-cyan-400/50 py-2 text-xs font-bold text-cyan-300 transition hover:bg-cyan-400/10 sm:flex-none sm:px-3"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M3 3h2l2.4 12.4a2 2 0 0 0 2 1.6h8.4a2 2 0 0 0 2-1.6L22 8H6" />
                <circle cx="9" cy="20" r="1.4" />
                <circle cx="17" cy="20" r="1.4" />
              </svg>
              <span className="hidden sm:inline">Add to Cart</span>
            </button>
            <button
              type="button"
              onClick={handleBuyNow}
              className="flex-1 rounded-full bg-cyan-400 py-2 text-xs font-bold text-black transition hover:bg-cyan-300"
            >
              Buy Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
