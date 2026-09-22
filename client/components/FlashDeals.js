import Link from "next/link";
import ProductCard from "./ProductCard";
import FlashCountdown from "./FlashCountdown";
import Slider from "./Slider";
import Reveal from "./Reveal";

export default function FlashDeals({ products }) {
  if (!products.length) return null;

  // Shared deadline: the soonest-ending item drives the section's urgency.
  const endsAt = products
    .map((p) => p.flashSaleEndsAt)
    .filter(Boolean)
    .sort()[0];

  return (
    <Reveal
      as="section"
      className="relative mx-auto max-w-7xl overflow-hidden rounded-[24px] border px-4 py-8 sm:px-6"
      style={{
        borderColor: "rgba(0,195,255,0.28)",
        background:
          "radial-gradient(circle at 78% 15%, rgba(125,30,210,.13), transparent 38%), linear-gradient(120deg, #061722, #060d18 48%, #11091f)",
      }}
    >
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="font-heading text-xl font-bold text-white">
            Flash Deals &amp; <span className="text-cyan-400">Top Discounts</span>
          </h2>
          <p className="mt-1 text-sm text-white/50">Limited Stock • Up to 50% Off</p>
          <div className="mt-3">
            <FlashCountdown endsAt={endsAt} />
          </div>
        </div>
        <Link href="/category/all?filter=flash" className="shrink-0 text-sm text-cyan-300 hover:underline">
          View all →
        </Link>
      </div>

      <Slider label="flash deals">
        {products.map((p, i) => (
          <div
            key={p._id}
            className="stagger-item w-[220px] shrink-0 snap-start"
            style={{ "--stagger-delay": `${i * 60}ms` }}
          >
            <ProductCard product={p} ribbon />
          </div>
        ))}
      </Slider>
    </Reveal>
  );
}
