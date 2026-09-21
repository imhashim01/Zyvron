import Image from "next/image";
import Link from "next/link";
import { ALL_PRODUCTS_IMAGE, CATEGORY_META } from "@/lib/constants";

/** Ring gradient + double outline lifted verbatim from the reference site's "All Products" tile. */
const RING_STYLE = {
  background: "linear-gradient(to top right, #00e5ff, #b026ff)",
  boxShadow: "0 0 0 2px #fff, 0 0 0 4px #00e5ff",
};

function Thumb({ href, image, label, active }) {
  return (
    <Link href={href} className="group flex w-[78px] shrink-0 flex-col items-center gap-2 snap-start">
      <span
        className="block h-16 w-16 shrink-0 rounded-full p-[2px] transition-transform group-active:scale-95"
        style={active ? RING_STYLE : undefined}
      >
        <span
          className={`block h-full w-full overflow-hidden rounded-full bg-white/5 ${
            active ? "" : "border border-cyan-400/20"
          }`}
        >
          <Image
            src={image}
            alt=""
            width={64}
            height={64}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
          />
        </span>
      </span>
      <span
        className={`line-clamp-1 text-center text-xs font-semibold ${
          active ? "text-cyan-300" : "text-white/80"
        }`}
      >
        {label}
      </span>
    </Link>
  );
}

export default function FeaturedCollections({ categories }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="mb-5 flex items-end justify-between">
        <div>
          <h2 className="font-heading text-xl font-bold text-white">
            Featured <span className="text-cyan-400">Collections</span>
          </h2>
          <p className="mt-1 text-sm text-white/50">Shop by curated lifestyle categories</p>
        </div>
        <Link href="/category/all" className="shrink-0 text-sm text-cyan-300 hover:underline">
          View All →
        </Link>
      </div>

      <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto py-1">
        <Thumb href="/category/all" image={ALL_PRODUCTS_IMAGE} label="All Products" active />
        {categories.map((cat) => (
          <Thumb
            key={cat.slug}
            href={`/category/${cat.slug}`}
            image={cat.image || CATEGORY_META[cat.slug]?.image || ALL_PRODUCTS_IMAGE}
            label={cat.name || CATEGORY_META[cat.slug]?.name}
          />
        ))}
      </div>
    </section>
  );
}
