import Link from "next/link";
import Reveal from "@/animations/Reveal";
import CategoryIcon from "./CategoryIcon";

// Maps a real category's name/slug to a friendly "shop by need" framing.
// Keyword-matched, not a hardcoded category list - a category that doesn't
// match any keyword still gets a card (falls back to its own real name), so
// nothing here can silently hide a real category or invent one that doesn't
// exist in the catalog.
const NEED_MATCHERS = [
  { test: /audio|speaker|earbud|headphone/i, icon: "headphones", label: "For Music" },
  { test: /gaming|pc/i, icon: "gamepad", label: "For Gaming" },
  { test: /wearable|watch/i, icon: "watch", label: "For Your Lifestyle" },
  { test: /mobile|phone/i, icon: "phone", label: "For Your Phone" },
  { test: /power|charg|cable/i, icon: "bolt", label: "For Power" },
];

function frameCategory(category) {
  const haystack = `${category.name || ""} ${category.slug || ""}`;
  const match = NEED_MATCHERS.find((m) => m.test.test(haystack));
  if (match) return { icon: match.icon, label: match.label };
  return { icon: "wrench", label: `For ${category.name}` };
}

/**
 * "Find Your Tech" - one card per real category that actually has active
 * products (categories with zero products are filtered out by the caller),
 * each linking to that category's real catalog page. No invented buckets.
 */
export default function ShopByNeed({ categories, counts = {} }) {
  const withStock = categories.filter((c) => (counts[c.slug] ?? 0) > 0);
  if (withStock.length === 0) return null;

  return (
    <Reveal as="section" className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="mb-6">
        <h2 className="font-heading text-xl font-bold text-white sm:text-2xl">Find Your Tech</h2>
        <p className="mt-1 text-sm text-[var(--text-secondary)]">
          Shop the catalog by what you actually need it for.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {withStock.map((cat, i) => {
          const { icon, label } = frameCategory(cat);
          const count = counts[cat.slug] ?? 0;
          return (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="stagger-item group flex flex-col gap-2 rounded-2xl border border-white/[0.12] bg-[var(--surface-card)] p-5 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-[var(--surface-2)]"
              style={{ "--stagger-delay": `${i * 70}ms` }}
            >
              <CategoryIcon name={icon} className="h-7 w-7 text-cyan-300" />
              <span className="font-heading text-sm font-bold text-white">{label}</span>
              <span className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
                <CategoryIcon name={cat.icon} className="h-3.5 w-3.5" />
                {cat.name} · {count} item{count === 1 ? "" : "s"}
              </span>
            </Link>
          );
        })}
      </div>
    </Reveal>
  );
}
