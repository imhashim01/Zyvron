import Image from "next/image";
import Link from "next/link";
import Reveal from "@/animations/Reveal";

// The three promo cards under the homepage, in display order. Each one is
// tied to a real category slug - the headline/eyebrow is just framing copy,
// and `label` is the word shown in "Shop <label> →" (so the Audio & Speakers
// category can read simply "Speakers" here without renaming the category
// everywhere else in the store).
const LIFESTYLE_BLOCKS = [
  {
    slug: "earbuds",
    label: "Earbuds",
    eyebrow: "FOR EVERYDAY AUDIO",
    headline: "Your soundtrack, wherever you go.",
  },
  {
    slug: "audio-and-speakers",
    label: "Speakers",
    eyebrow: "FOR GOOD VIBES",
    headline: "Big sound, pocket-sized.",
  },
  {
    slug: "powerbanks",
    label: "Powerbanks",
    eyebrow: "FOR ALL-DAY POWER",
    headline: "Charge on the move.",
  },
];

/**
 * Up to 3 promotional blocks (Earbuds, Speakers, Powerbanks), each tied to a
 * real category that has real in-stock products and a real product image to
 * show - a category that doesn't exist yet, has no stock, or has no
 * representative image is simply skipped rather than filled in with a guess.
 */
export default function LifestyleBlocks({ categories = [], counts = {}, topProductByCategory = {} }) {
  const blocks = [];
  for (const block of LIFESTYLE_BLOCKS) {
    const category = categories.find((c) => c.slug === block.slug);
    if (!category) continue;
    if ((counts[block.slug] ?? 0) <= 0) continue;
    const rep = topProductByCategory[block.slug];
    if (!rep?.image) continue;
    blocks.push({ ...block, product: rep });
  }

  if (blocks.length === 0) return null;

  return (
    <Reveal as="section" className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className={`grid gap-4 ${blocks.length >= 2 ? "sm:grid-cols-2" : ""} ${blocks.length >= 3 ? "lg:grid-cols-3" : ""}`}>
        {blocks.map(({ slug, label, eyebrow, headline, product }) => (
          <Link
            key={slug}
            href={`/category/${slug}`}
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
                Shop {label} →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Reveal>
  );
}
