import Link from "next/link";
import { serverFetch } from "@/lib/api";
import { FALLBACK_CATEGORIES } from "@/lib/constants";
import HeroCarousel from "@/components/hero/HeroCarousel";
import TrustBar from "@/components/TrustBar";
import FeaturedCollections from "@/components/FeaturedCollections";
import FlashDeals from "@/components/FlashDeals";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import StickyShopBar from "@/components/StickyShopBar";

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
  const [flashSale, popular, allActive, featured, topRated] = await Promise.all([
    getProducts({ flashSale: "true", limit: "8" }),
    getProducts({ sort: "popular", limit: "8" }),
    getProducts({ limit: "100" }),
    getProducts({ featured: "true", limit: "6" }),
    getProducts({ sort: "rating", limit: "4" }),
  ]);
  const totalCount = allActive.length;
  const counts = {};
  for (const p of allActive) {
    const slug = p.category?.slug;
    if (slug) counts[slug] = (counts[slug] || 0) + 1;
  }

  // No isFeatured products yet (a fresh catalog before anyone's flagged one)?
  // Fall back to real flash-sale items, then the top sellers - always real
  // products, never an invented placeholder.
  const heroSlides = (featured.length ? featured : flashSale.length ? flashSale : popular).slice(
    0,
    6
  );

  return (
    <div className="pt-4">
      {heroSlides.length > 0 && (
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <HeroCarousel slides={heroSlides} />
        </div>
      )}

      <TrustBar />

      <FeaturedCollections categories={categories} totalCount={totalCount} counts={counts} />

      {topRated.length > 0 && (
        <Reveal as="section" className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="font-heading text-xl font-bold text-white">
                Loved by <span className="text-cyan-400">Customers</span>
              </h2>
              <p className="mt-1 text-sm text-white/50">Our highest-rated products, real reviews</p>
            </div>
            <Link href="/category/all?sort=rating" className="text-sm text-cyan-300 hover:underline">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {topRated.map((p, i) => (
              <div key={p._id} className="stagger-item" style={{ "--stagger-delay": `${i * 60}ms` }}>
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </Reveal>
      )}

      <FlashDeals products={flashSale} />

      <Reveal as="section" className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-heading text-xl font-bold text-white">Popular Right Now</h2>
          <Link href="/category/all" className="text-sm text-cyan-300 hover:underline">
            View all →
          </Link>
        </div>
        {popular.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {popular.map((p, i) => (
              <div key={p._id} className="stagger-item" style={{ "--stagger-delay": `${i * 60}ms` }}>
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-white/50">
            Products will appear here once the catalog is loaded.
          </p>
        )}
      </Reveal>

      <StickyShopBar />
    </div>
  );
}
