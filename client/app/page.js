import Link from "next/link";
import { serverFetch } from "@/lib/api";
import { CATEGORY_META, FALLBACK_CATEGORIES } from "@/lib/constants";
import CategoryIcon from "@/components/CategoryIcon";
import ProductCard from "@/components/ProductCard";

export const revalidate = 3600;

async function getCategories() {
  const data = await serverFetch("/categories");
  return Array.isArray(data) && data.length ? data : FALLBACK_CATEGORIES;
}

async function getProducts(params) {
  const qs = new URLSearchParams(params).toString();
  const data = await serverFetch(`/products?${qs}`);
  return data?.products || [];
}

export default async function HomePage() {
  const [categories, flashSale, popular] = await Promise.all([
    getCategories(),
    getProducts({ flashSale: "true", limit: "8" }),
    getProducts({ sort: "popular", limit: "8" }),
  ]);

  return (
    <div>
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-[#0a1a22] to-[#05060a] px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-300">
            Premium Gadgets &amp; Smart Tech
          </p>
          <h1 className="font-heading text-3xl font-bold text-white sm:text-5xl">
            Wireless Audio, Smartwatches &amp; Gaming Gear — Delivered Nationwide
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Cash on delivery &amp; free shipping on orders over Rs. 3,000. Real reviews, fast
            dispatch, and a store that stands behind every order.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/category/all"
              className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold text-black hover:bg-cyan-300"
            >
              Shop All Products
            </Link>
            <Link
              href="/track-order"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white hover:border-cyan-300"
            >
              Track My Order
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <h2 className="mb-6 font-heading text-xl font-bold text-white">Shop by Category</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center transition hover:border-cyan-400/40 hover:bg-white/[0.06]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-300">
                <CategoryIcon name={cat.icon || CATEGORY_META[cat.slug]?.icon} className="h-6 w-6" />
              </span>
              <span className="text-sm font-semibold text-white/90">
                {cat.name || CATEGORY_META[cat.slug]?.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {flashSale.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="flex items-center gap-2 font-heading text-xl font-bold text-white">
              <CategoryIcon name="bolt" className="h-5 w-5 text-cyan-300" />
              Flash Sale
            </h2>
            <Link href="/category/all?filter=flash" className="text-sm text-cyan-300 hover:underline">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {flashSale.map((p) => (
              <ProductCard key={p._id} product={p} />
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-heading text-xl font-bold text-white">Popular Right Now</h2>
          <Link href="/category/all" className="text-sm text-cyan-300 hover:underline">
            View all →
          </Link>
        </div>
        {popular.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {popular.map((p) => (
              <ProductCard key={p._id} product={p} />
            ))}
          </div>
        ) : (
          <p className="text-white/50">
            Products will appear here once the catalog is loaded.
          </p>
        )}
      </section>
    </div>
  );
}
