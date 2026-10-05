import Link from "next/link";

// Page numbers to show: always the first and last page, the current page and
// one neighbour each side, with "…" where pages are skipped. Near either end
// the window widens to four pages so the strip doesn't jump in width.
function visiblePages(current, total) {
  const keep = new Set([1, total, current - 1, current, current + 1]);
  if (current <= 3) [2, 3, 4].forEach((n) => keep.add(n));
  if (current >= total - 2) [total - 1, total - 2, total - 3].forEach((n) => keep.add(n));

  const pages = [...keep].filter((n) => n >= 1 && n <= total).sort((a, b) => a - b);
  const out = [];
  pages.forEach((n, i) => {
    if (i > 0 && n - pages[i - 1] > 1) out.push("gap");
    out.push(n);
  });
  return out;
}

function Chevron({ direction }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <path d={direction === "prev" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"} />
    </svg>
  );
}

const BASE = "inline-flex h-10 items-center justify-center rounded-full text-sm font-semibold transition";
const IDLE = "bg-[var(--surface-card)] text-[var(--text-secondary)] hover:bg-white/10 hover:text-white";

/**
 * Numbered page links for a product list. Plain <Link>s to ?page=N (the page
 * is a server component), so it works without JavaScript, every page has its
 * own shareable URL, and the category / brand / sort / search / filter in the
 * query string are carried across every link untouched.
 *
 * `query` is the current query string as a plain object (without `page`).
 */
export default function Pagination({ basePath, query = {}, page, totalPages, totalItems, pageSize }) {
  if (totalPages <= 1) return null;

  const hrefFor = (n) => {
    const params = new URLSearchParams(query);
    params.delete("page");
    if (n > 1) params.set("page", String(n));
    const qs = params.toString();
    return qs ? `${basePath}?${qs}` : basePath;
  };

  const from = (page - 1) * pageSize + 1;
  const to = Math.min(page * pageSize, totalItems);

  return (
    <nav aria-label="Product pages" className="mt-10 flex flex-col items-center gap-3">
      <p className="text-xs text-[var(--text-muted)]">
        Showing {from}–{to} of {totalItems} products
      </p>

      <ul className="flex flex-wrap items-center justify-center gap-1.5">
        <li>
          {page > 1 ? (
            <Link href={hrefFor(page - 1)} rel="prev" className={`${BASE} gap-1 px-3 max-sm:min-w-10 ${IDLE}`}>
              <Chevron direction="prev" />
              <span className="sr-only sm:not-sr-only">Previous</span>
            </Link>
          ) : (
            <span aria-disabled="true" className={`${BASE} gap-1 px-3 max-sm:min-w-10 cursor-not-allowed bg-[var(--surface-card)] text-white/25`}>
              <Chevron direction="prev" />
              <span className="sr-only sm:not-sr-only">Previous</span>
            </span>
          )}
        </li>

        {visiblePages(page, totalPages).map((item, i) =>
          item === "gap" ? (
            <li key={`gap-${i}`} aria-hidden="true" className="px-1 text-[var(--text-muted)]">
              …
            </li>
          ) : (
            <li key={item}>
              {item === page ? (
                <span aria-current="page" className={`${BASE} min-w-10 bg-cyan-400 px-3 text-black`}>
                  {item}
                </span>
              ) : (
                <Link href={hrefFor(item)} aria-label={`Page ${item}`} className={`${BASE} min-w-10 px-3 ${IDLE}`}>
                  {item}
                </Link>
              )}
            </li>
          )
        )}

        <li>
          {page < totalPages ? (
            <Link href={hrefFor(page + 1)} rel="next" className={`${BASE} gap-1 px-3 max-sm:min-w-10 ${IDLE}`}>
              <span className="sr-only sm:not-sr-only">Next</span>
              <Chevron direction="next" />
            </Link>
          ) : (
            <span aria-disabled="true" className={`${BASE} gap-1 px-3 max-sm:min-w-10 cursor-not-allowed bg-[var(--surface-card)] text-white/25`}>
              <span className="sr-only sm:not-sr-only">Next</span>
              <Chevron direction="next" />
            </span>
          )}
        </li>
      </ul>
    </nav>
  );
}
