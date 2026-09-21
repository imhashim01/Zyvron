import Link from "next/link";
import ProductCard from "./ProductCard";
import FlashCountdown from "./FlashCountdown";
import FlashDealsSlider from "./FlashDealsSlider";
import CategoryIcon from "./CategoryIcon";

export default function FlashDeals({ products }) {
  if (!products.length) return null;

  // Shared deadline: the soonest-ending item drives the section's urgency.
  const endsAt = products
    .map((p) => p.flashSaleEndsAt)
    .filter(Boolean)
    .sort()[0];

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-4">
          <h2 className="flex items-center gap-2 font-heading text-xl font-bold text-white">
            <CategoryIcon name="bolt" className="h-5 w-5 text-cyan-300" />
            Flash Sale
          </h2>
          <FlashCountdown endsAt={endsAt} />
        </div>
        <Link href="/category/all?filter=flash" className="text-sm text-cyan-300 hover:underline">
          View all →
        </Link>
      </div>

      <FlashDealsSlider>
        {products.map((p) => (
          <div key={p._id} className="w-[220px] shrink-0 snap-start">
            <ProductCard product={p} ribbon />
          </div>
        ))}
      </FlashDealsSlider>
    </section>
  );
}
