import Image from "next/image";
import Link from "next/link";
import { CATEGORY_META } from "@/data/constants";
import Reveal from "@/animations/Reveal";

function CollectionCard({ href, image, name, tagline, count }) {
  return (
    <Link
      href={href}
      className="group relative block aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-[0_18px_40px_rgba(0,217,255,0.18)] max-sm:aspect-square"
    >
      {image ? (
        <Image
          src={image}
          alt=""
          fill
          sizes="(min-width: 1024px) 25vw, 50vw"
          className="object-cover transition duration-500 group-hover:scale-110"
        />
      ) : (
        // A category with real stock but no fallback artwork in
        // CATEGORY_META and no admin-set image yet (e.g. a brand-new
        // category created outside the original 4, such as one added by a
        // bulk-import script) - a plain brand-gradient tile instead of
        // crashing next/image with an undefined src.
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 30% 20%, rgba(0,217,255,0.18), transparent 55%), linear-gradient(135deg, #0a1a28, #0b1220)",
          }}
        />
      )}
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
      {/* The text block carries its own dark backing, so it is always as tall
          as the words on it - whatever the photo behind is (a near-white
          speaker shot, a busy product box, a purple phone) and however many
          lines a long name or tagline wraps to. The full-card fade above can
          only guess where the text will land, which is why light and busy
          photos used to wash the words out. */}
      <div
        className="absolute inset-x-0 bottom-0 px-3 pb-3 pt-14 sm:p-4 sm:pt-12"
        style={{
          background:
            "linear-gradient(to top, rgba(4,8,15,0.96) 0%, rgba(4,8,15,0.9) 50%, rgba(4,8,15,0.55) 80%, transparent 100%)",
        }}
      >
        <h3 className="font-heading text-sm font-bold leading-snug text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.75)] sm:text-base">
          {name}
        </h3>
        <p className="mt-0.5 text-[11px] leading-snug text-[var(--text-secondary)] [text-shadow:0_1px_6px_rgba(0,0,0,0.75)] sm:text-xs">
          {tagline || `${count} Item${count === 1 ? "" : "s"}`}
        </p>
        {/* Hover hint: invisible until hover, so on touch screens it only
            ever took up empty space (pushing the text up) - hidden there. */}
        <span className="mt-1 inline-flex items-center gap-1 text-[11px] font-semibold text-cyan-300 opacity-0 transition duration-300 group-hover:opacity-100 max-sm:hidden">
          Explore →
        </span>
      </div>
    </Link>
  );
}

// Only categories that actually have active products are shown - never a
// prominently-displayed empty category. `counts` is the real per-category
// tally computed from the live product list in page.js.
export default function FeaturedCollections({ categories, totalCount = 0, counts = {} }) {
  const withStock = categories.filter((cat) => (counts[cat.slug] ?? 0) > 0);
  if (withStock.length === 0) return null;

  return (
    <Reveal as="section" className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div id="explore-zyvron" className="mb-5 flex scroll-mt-24 items-end justify-between">
        <div>
          <h2 className="font-heading text-xl font-black uppercase tracking-tight text-white sm:text-2xl">
            Explore <span className="text-cyan-400">Zyvron</span>
          </h2>
          <p className="mt-1 text-sm text-[var(--text-secondary)]">
            Everything you need to upgrade your everyday tech.
          </p>
        </div>
        <Link href="/category/all" className="shrink-0 text-sm text-cyan-300 hover:underline">
          View All ({totalCount}) →
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {withStock.map((cat, i) => {
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
