import Link from "next/link";
import ProductCard from "./ProductCard";
import Slider from "./Slider";
import Reveal from "@/animations/Reveal";

/**
 * "New Arrivals" - the real most-recently-added active products
 * (createdAt desc, productController's own default sort - see the
 * "sort=newest" query below, which isn't a recognized SORTERS key so it
 * falls through to that default). No invented "added this week" dates.
 */
export default function NewArrivals({ products }) {
  if (!products?.length) return null;

  return (
    <Reveal as="section" className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="font-heading text-xl font-bold text-white">
            New <span className="text-cyan-400">Arrivals</span>
          </h2>
          <p className="mt-1 text-sm text-[var(--text-secondary)]">Fresh tech. Just landed.</p>
        </div>
        {/* filter=new mirrors this section's own isNewArrival flag
            (productController's newArrival=true query param) - previously
            this linked to plain /category/all with no filter/sort at all. */}
        <Link href="/category/all?filter=new" className="shrink-0 text-sm text-cyan-300 hover:underline">
          View all →
        </Link>
      </div>

      <Slider label="new arrivals">
        {products.map((p, i) => (
          <div
            key={p._id}
            className="stagger-item w-[220px] shrink-0 snap-start"
            style={{ "--stagger-delay": `${i * 60}ms` }}
          >
            <ProductCard product={p} cornerBadge="NEW" />
          </div>
        ))}
      </Slider>
    </Reveal>
  );
}
