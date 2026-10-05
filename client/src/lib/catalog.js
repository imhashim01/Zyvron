import { serverFetch } from "@/lib/api";

// Products shown per page on the catalogue / category pages. 24 divides evenly
// into the grid's 2 / 3 / 4 columns, so no page ends on a half-empty row.
export const PRODUCTS_PER_PAGE = 24;

// The API caps a single /products request at 100 items (productController's
// Math.min(100, limit)), so the full catalogue is read in chunks of 100. The
// page ceiling is only a safety stop against a runaway response.
const API_PAGE_SIZE = 100;
const MAX_API_PAGES = 10;

/**
 * Every active product matching `query` (category / brand / search / flags),
 * not just the first API page. The catalogue and category pages used to ask
 * for a single page of 24 and then simply stopped, which is why there was no
 * way to reach product 25 onwards. The catalogue is small (see
 * productController's own note), and each request is cached for the same 60s
 * as every other storefront fetch, so reading it whole and paginating here is
 * both simple and exact: it also lets a combined group (Gaming & Vlogging)
 * be sorted and paginated as one list instead of one list per member.
 */
export async function fetchAllProducts(query = {}) {
  const url = (page) =>
    `/products?${new URLSearchParams({ ...query, limit: String(API_PAGE_SIZE), page: String(page) }).toString()}`;

  const first = await serverFetch(url(1));
  if (!first) return [];

  const list = [...(first.products || [])];
  const pages = Math.min(first.pages || 1, MAX_API_PAGES);
  if (pages > 1) {
    const rest = await Promise.all(Array.from({ length: pages - 1 }, (_, i) => serverFetch(url(i + 2))));
    for (const chunk of rest) list.push(...(chunk?.products || []));
  }

  // A product edited between two chunk requests could otherwise appear twice.
  const seen = new Set();
  return list.filter((p) => {
    if (seen.has(p._id)) return false;
    seen.add(p._id);
    return true;
  });
}

// Same orderings as productController's SORTERS (+ the in-memory "discount"
// sort and the controller's default createdAt-desc). Ties always fall back to
// newest-first and then _id, so the order is fully deterministic - the same
// product can never show on two pages, or be skipped between them, just
// because several products share a rating or review count.
export function sortProducts(list, sort) {
  const discount = (p) => (p.compareAtPrice ? (p.compareAtPrice - p.price) / p.compareAtPrice : 0);
  const byCreated = (a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
  const byId = (a, b) => String(b._id).localeCompare(String(a._id));
  const primary = {
    "price-low": (a, b) => a.price - b.price,
    "price-high": (a, b) => b.price - a.price,
    rating: (a, b) => (b.rating || 0) - (a.rating || 0),
    popular: (a, b) => (b.reviewsCount || 0) - (a.reviewsCount || 0),
    discount: (a, b) => discount(b) - discount(a),
  }[sort];
  return [...list].sort((a, b) => (primary ? primary(a, b) : 0) || byCreated(a, b) || byId(a, b));
}

// Reads ?page= defensively: anything missing, non-numeric or below 1 is page
// 1, and a page past the end (e.g. a stale link after the catalogue shrank)
// lands on the last real page instead of an empty grid.
export function resolvePage(rawPage, totalPages) {
  const n = parseInt(Array.isArray(rawPage) ? rawPage[0] : rawPage, 10);
  if (!Number.isFinite(n) || n < 1) return 1;
  return Math.min(n, Math.max(1, totalPages));
}
