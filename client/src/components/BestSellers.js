import Link from "next/link";
import ProductCard from "./ProductCard";
import Slider from "./Slider";
import Reveal from "@/animations/Reveal";

/**
 * "Best Sellers" - ranked by reviewsCount (the real, stored signal closest
 * to "most people are engaging with this"; there's no separate units-sold
 * field in the schema). Out-of-stock items are filtered out by the caller
 * before this ever receives them, so nothing unavailable is promoted here.
 */
export default function BestSellers({ products }) {
  if (!products?.length) return null;

  return (
    <Reveal as="section" className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="font-heading text-xl font-bold text-white">
            🔥 Best <span className="text-cyan-400">Sellers</span>
          </h2>
          <p className="mt-1 text-sm text-[var(--text-secondary)]">
            The tech everyone&apos;s adding to their setup.
          </p>
        </div>
        {/* filter=bestseller mirrors this section's own isBestSeller flag
            (productController's bestSeller=true query param), so "View
            all" shows the same flagged products shown here - not just
            everything re-sorted by popularity, which is a different,
            broader set. */}
        <Link href="/category/all?filter=bestseller" className="shrink-0 text-sm text-cyan-300 hover:underline">
          View all →
        </Link>
      </div>

      <Slider label="best sellers" autoplay>
        {products.map((p, i) => (
          <div
            key={p._id}
            className="stagger-item w-[220px] shrink-0 snap-start"
            style={{ "--stagger-delay": `${i * 60}ms` }}
          >
            <ProductCard product={p} />
          </div>
        ))}
      </Slider>
    </Reveal>
  );
}
