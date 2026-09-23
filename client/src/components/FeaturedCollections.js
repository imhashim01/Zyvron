import Image from "next/image";
import Link from "next/link";
import { CATEGORY_META } from "@/data/constants";
import Reveal from "@/animations/Reveal";

function CollectionCard({ href, image, name, tagline, count }) {
  return (
    <Link
      href={href}
      className="group relative block aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-[0_18px_40px_rgba(0,217,255,0.18)]"
    >
      <Image
        src={image}
        alt=""
        fill
        sizes="(min-width: 1024px) 25vw, 50vw"
        className="object-cover transition duration-500 group-hover:scale-110"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(4,8,15,0.92) 12%, rgba(4,8,15,0.2) 55%, transparent 78%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{ boxShadow: "inset 0 0 0 1px rgba(0,229,255,0.5)" }}
      />
      <div className="absolute inset-x-0 bottom-0 p-4">
        <h3 className="font-heading text-base font-bold text-white">{name}</h3>
        <p className="mt-0.5 text-xs text-white/60">
          {tagline || `${count} Item${count === 1 ? "" : "s"}`}
        </p>
      </div>
    </Link>
  );
}

export default function FeaturedCollections({ categories, totalCount = 0, counts = {} }) {
  return (
    <Reveal as="section" className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="mb-5 flex items-end justify-between">
        <div>
          <h2 className="font-heading text-xl font-black uppercase tracking-tight text-white sm:text-2xl">
            Featured <span className="text-cyan-400">Collections</span>
          </h2>
          <p className="mt-1 text-sm text-white/50">Shop by curated lifestyle categories</p>
        </div>
        <Link href="/category/all" className="shrink-0 text-sm text-cyan-300 hover:underline">
          View All ({totalCount}) →
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {categories.map((cat, i) => {
          const meta = CATEGORY_META[cat.slug];
          return (
            <div key={cat.slug} className="stagger-item" style={{ "--stagger-delay": `${i * 80}ms` }}>
              <CollectionCard
                href={`/category/${cat.slug}`}
                image={cat.image || meta?.image}
                name={cat.name || meta?.name}
                tagline={meta?.tagline}
                count={counts[cat.slug] ?? 0}
              />
            </div>
          );
        })}
      </div>
    </Reveal>
  );
}
