import Image from "next/image";
import Link from "next/link";
import Reveal from "@/animations/Reveal";
import StarRating from "./StarRating";
import { discountPercent, formatPKR } from "@/lib/format";

/**
 * Full-width "Product Spotlight" - built from one real isFeatured product
 * (admin-flagged). Renders nothing if no product is currently featured,
 * rather than guessing one - this section only exists when there's a real
 * product behind it.
 */
export default function FeaturedSpotlight({ product }) {
  if (!product) return null;
  const pct = discountPercent(product.price, product.compareAtPrice);

  return (
    <Reveal as="section" className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div
        className="relative overflow-hidden rounded-[28px] border"
        style={{
          borderColor: "rgba(0,195,255,0.24)",
          background:
            "radial-gradient(circle at 85% 20%, rgba(139,92,246,0.14), transparent 45%), radial-gradient(circle at 10% 90%, rgba(0,217,255,0.1), transparent 45%), linear-gradient(135deg, #0a1a28 0%, #071321 55%, #0b1220 100%)",
        }}
      >
        <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-2 lg:items-center lg:gap-10 lg:p-14">
          <div className="relative order-2 aspect-square w-full overflow-hidden rounded-3xl border border-white/10 lg:order-1">
            {product.image && (
              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            )}
          </div>

          <div className="order-1 lg:order-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-1.5 text-[11px] font-black uppercase tracking-widest text-cyan-300">
              Featured Tech
            </span>

            <h2 className="mt-5 font-heading text-2xl font-black leading-tight text-white sm:text-3xl">
              {product.title}
            </h2>

            {product.description && (
              <p className="mt-4 max-w-lg text-sm text-[var(--text-secondary)] sm:text-base">
                {product.description}
              </p>
            )}

            {product.features?.length > 0 && (
              <ul className="mt-5 space-y-2">
                {product.features.slice(0, 4).map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <span aria-hidden="true" className="mt-0.5 text-cyan-400">
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-5 flex items-center gap-3">
              <StarRating rating={product.rating} count={product.reviewsCount} />
            </div>

            <div className="mt-3 flex items-center gap-3">
              <span className="neon-text-cyan text-2xl font-bold text-white">
                {formatPKR(product.price)}
              </span>
              {product.compareAtPrice > product.price && (
                <span className="text-sm text-[var(--text-muted)] line-through">
                  {formatPKR(product.compareAtPrice)}
                </span>
              )}
              {pct && <span className="text-sm font-semibold text-emerald-400">{pct}% OFF</span>}
            </div>

            <Link
              href={`/product/${product.slug}`}
              className="neon-cyan-active-hover mt-7 inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-7 py-3.5 text-sm font-extrabold uppercase tracking-wide text-black transition hover:bg-cyan-300 active:scale-95"
            >
              Explore Product →
            </Link>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
