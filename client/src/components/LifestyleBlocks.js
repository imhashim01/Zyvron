import Image from "next/image";
import Link from "next/link";
import Reveal from "@/animations/Reveal";

// Honest framings for the categories Zyvron actually stocks - not the
// generic "FOR CREATORS" example from the brief, since there's no
// camera/content-creation category in the real catalog. Order here is the
// order blocks render in, first match per category slug/name wins.
const LIFESTYLE_MATCHERS = [
  { test: /gaming|pc/i, eyebrow: "FOR GAMERS", headline: "Low latency. Zero distractions." },
  { test: /audio|speaker|earbud|headphone/i, eyebrow: "FOR EVERYDAY AUDIO", headline: "Your soundtrack, wherever you go." },
  { test: /wearable|watch/i, eyebrow: "FOR YOUR LIFESTYLE", headline: "Track it. Wear it. Live in it." },
  { test: /mobile|phone/i, eyebrow: "FOR EVERYDAY TECH", headline: "Power your day." },
];

/**
 * Up to 3 promotional blocks, each tied to a real category that has real
 * products and a real product image to show - a category with no matching
 * framing, no stock, or no representative image is simply skipped rather
 * than filled in with a guess.
 */
export default function LifestyleBlocks({ categories, counts = {}, topProductByCategory = {} }) {
  const blocks = [];
  for (const cat of categories) {
    if (blocks.length >= 3) break;
    if ((counts[cat.slug] ?? 0) <= 0) continue;
    const rep = topProductByCategory[cat.slug];
    if (!rep?.image) continue;
    const haystack = `${cat.name || ""} ${cat.slug || ""}`;
    const match = LIFESTYLE_MATCHERS.find((m) => m.test.test(haystack));
    if (!match) continue;
    blocks.push({ ...match, category: cat, product: rep });
  }

  if (blocks.length === 0) return null;

  return (
    <Reveal as="section" className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className={`grid gap-4 ${blocks.length >= 2 ? "sm:grid-cols-2" : ""} ${blocks.length >= 3 ? "lg:grid-cols-3" : ""}`}>
        {blocks.map(({ eyebrow, headline, category, product }) => (
          <Link
            key={category.slug}
            href={`/category/${category.slug}`}
            className="group relative block aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
          >
            <Image
              src={product.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to top, rgba(4,8,15,0.92) 20%, rgba(4,8,15,0.35) 55%, transparent 80%)",
              }}
            />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="text-[11px] font-black uppercase tracking-widest text-cyan-300">{eyebrow}</p>
              <h3 className="mt-1 font-heading text-lg font-bold text-white">{headline}</h3>
              <span className="mt-2 inline-block text-xs font-semibold text-[var(--text-secondary)] group-hover:text-cyan-300">
                Shop {category.name} →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Reveal>
  );
}
