import Link from "next/link";
import { serverFetch } from "@/lib/api";
import { FALLBACK_CATEGORIES } from "@/lib/constants";
import Hero from "@/components/Hero";
import FeaturedCollections from "@/components/FeaturedCollections";
import FlashDeals from "@/components/FlashDeals";
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
  const categories = await getCategories();
  // Catalog is small (see productController's own "catalog is small" note),
  // so one unpaginated fetch + client-side tally is both simpler and far
  // less load than a separate count request per category.
  const [flashSale, popular, allActive] = await Promise.all([
    getProducts({ flashSale: "true", limit: "8" }),
    getProducts({ sort: "popular", limit: "8" }),
    getProducts({ limit: "100" }),
  ]);
  const totalCount = allActive.length;
  const counts = {};
  for (const p of allActive) {
    const slug = p.category?.slug;
    if (slug) counts[slug] = (counts[slug] || 0) + 1;
  }

  return (
    <div className="pt-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Hero />
      </div>

      <FeaturedCollections categories={categories} totalCount={totalCount} counts={counts} />

      <FlashDeals products={flashSale} />

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
