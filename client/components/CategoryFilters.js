"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/lib/cartContext";

const SORTS = [
  { value: "popular", label: "Most Popular" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "discount", label: "Biggest Discount" },
  { value: "rating", label: "Top Rated" },
];

export default function CategoryFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { wishlist } = useCart();
  const [search, setSearch] = useState(searchParams.get("search") || "");

  const isWishlist = searchParams.get("filter") === "wishlist";

  function goto(slug, extra = {}) {
    const params = new URLSearchParams(searchParams.toString());
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
    if (search.trim()) params.set("search", search.trim());
    else params.delete("search");
    router.push(`${pathname}?${params.toString()}`);
  }

  function onSortChange(e) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", e.target.value);
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <form onSubmit={onSearchSubmit} className="flex w-full max-w-sm gap-2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search this category…"
          className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-cyan-400"
        />
        <button
          type="submit"
          className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20"
        >
          Search
        </button>
      </form>

      <div className="flex items-center gap-2">
        <button
          onClick={() => goto("all", { filter: "wishlist" })}
          className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
            isWishlist ? "bg-cyan-400 text-black" : "bg-white/5 text-white/70 hover:bg-white/10"
          }`}
        >
          ♥ Wishlist ({wishlist.length})
        </button>

        <select
          defaultValue={searchParams.get("sort") || "popular"}
          onChange={onSortChange}
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white focus:border-cyan-400"
        >
          {SORTS.map((s) => (
            <option key={s.value} value={s.value} className="bg-[#05060a]">
              {s.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
