"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/store/cartContext";
import { CATEGORY_GROUPS } from "@/data/constants";
import CategoryIcon from "./CategoryIcon";

const SORTS = [
  { value: "popular", label: "Most Popular" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "discount", label: "Biggest Discount" },
  { value: "rating", label: "Top Rated" },
];

// Labels for the "View all" filter a homepage section deep-links with
// (?filter=flash/bestseller/new) - shown as a clearable pill so it's
// obvious the filter actually applied, not just guessed at.
const FILTER_LABELS = {
  flash: "Flash Deals",
  bestseller: "Best Sellers",
  new: "New Arrivals",
};

export default function CategoryFilters({ categories = [], brands = [], currentSlug = "all" }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { wishlist } = useCart();
  const [search, setSearch] = useState(searchParams.get("search") || "");

  const activeFilter = searchParams.get("filter");
  const isWishlist = activeFilter === "wishlist";
  const activeFilterLabel = FILTER_LABELS[activeFilter];

  function goto(slug, extra = {}) {
    const params = new URLSearchParams(searchParams.toString());
    // Any change of category / filter starts again from the first page.
    params.delete("page");
    Object.entries(extra).forEach(([k, v]) => {
      if (v == null || v === "") params.delete(k);
      else params.set(k, v);
    });
    if (extra.filter === undefined) params.delete("filter");
    router.push(`/category/${slug}${params.toString() ? `?${params.toString()}` : ""}`);
  }

  function onSearchSubmit(e) {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    params.delete("page");
    if (search.trim()) params.set("search", search.trim());
    else params.delete("search");
    router.push(`${pathname}?${params.toString()}`);
  }

  function onSortChange(e) {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("page");
    params.set("sort", e.target.value);
    router.push(`${pathname}?${params.toString()}`);
  }

  function onCategoryChange(e) {
    goto(e.target.value);
  }

  // Brand stays a plain query param (unlike category, which is the route's
  // own slug) so it can combine with whichever category page is already
  // open, exactly like sort/search do.
  function onBrandChange(e) {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("page");
    if (e.target.value === "all") params.delete("brand");
    else params.set("brand", e.target.value);
    router.push(`${pathname}?${params.toString()}`);
  }

  function clearFilter() {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("page");
    params.delete("filter");
    router.push(`${pathname}${params.toString() ? `?${params.toString()}` : ""}`);
  }

  return (
    <div className="mb-6 flex flex-col gap-3">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <form onSubmit={onSearchSubmit} className="flex w-full max-w-sm gap-2">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search this category…"
            className="w-full rounded-full border border-white/10 bg-[var(--surface-card)] px-4 py-2 text-sm text-white placeholder:text-[var(--text-muted)] focus:border-cyan-400"
          />
          <button
            type="submit"
            className="rounded-full bg-[var(--surface-2)] px-4 py-2 text-sm font-semibold text-white hover:bg-white/20"
          >
            Search
          </button>
        </form>

        <button
          onClick={() => goto("all", { filter: "wishlist" })}
          className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-semibold transition sm:self-auto ${
            isWishlist ? "bg-cyan-400 text-black" : "bg-[var(--surface-card)] text-[var(--text-secondary)] hover:bg-white/10"
          }`}
        >
          <CategoryIcon name="heart" className="h-3.5 w-3.5" />
          Wishlist ({wishlist.length})
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <select
          value={currentSlug}
          onChange={onCategoryChange}
          className="rounded-full border border-white/10 bg-[var(--surface-card)] px-4 py-2 text-sm text-white focus:border-cyan-400"
        >
          <option value="all" className="bg-[var(--background)]">
            All Categories
          </option>
          {categories.map((c) => (
            <option key={c.slug} value={c.slug} className="bg-[var(--background)]">
              {c.name}
            </option>
          ))}
          {/* Combined storefront collections (see CATEGORY_GROUPS) - listed
              too so the dropdown shows the right entry while one is open. */}
          {Object.entries(CATEGORY_GROUPS).map(([groupSlug, group]) => (
            <option key={groupSlug} value={groupSlug} className="bg-[var(--background)]">
              {group.name}
            </option>
          ))}
        </select>

        {brands.length > 0 && (
          <select
            value={searchParams.get("brand") || "all"}
            onChange={onBrandChange}
            className="rounded-full border border-white/10 bg-[var(--surface-card)] px-4 py-2 text-sm text-white focus:border-cyan-400"
          >
            <option value="all" className="bg-[var(--background)]">
              All Brands
            </option>
            {brands.map((b) => (
              <option key={b.slug} value={b.slug} className="bg-[var(--background)]">
                {b.name}
              </option>
            ))}
          </select>
        )}

        <select
          defaultValue={searchParams.get("sort") || "popular"}
          onChange={onSortChange}
          className="rounded-full border border-white/10 bg-[var(--surface-card)] px-4 py-2 text-sm text-white focus:border-cyan-400"
        >
          {SORTS.map((s) => (
            <option key={s.value} value={s.value} className="bg-[var(--background)]">
              {s.label}
            </option>
          ))}
        </select>

        {activeFilterLabel && (
          <button
            onClick={clearFilter}
            className="flex items-center gap-1.5 rounded-full bg-cyan-400 px-4 py-1.5 text-sm font-semibold text-black"
            title="Clear this filter"
          >
            Showing: {activeFilterLabel} ✕
          </button>
        )}
      </div>
    </div>
  );
}
