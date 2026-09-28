import { serverFetch } from "@/lib/api";
import { FALLBACK_CATEGORIES } from "@/data/constants";
import HeroCarousel from "@/features/hero/HeroCarousel";
import TrustBar from "@/components/TrustBar";
import FeaturedCollections from "@/components/FeaturedCollections";
import BestSellers from "@/components/BestSellers";
import NewArrivals from "@/components/NewArrivals";
import FlashDeals from "@/components/FlashDeals";
import ShopByNeed from "@/components/ShopByNeed";
import FeaturedSpotlight from "@/components/FeaturedSpotlight";
import WhyZyvron from "@/components/WhyZyvron";
import LifestyleBlocks from "@/components/LifestyleBlocks";
import Testimonials from "@/components/Testimonials";
import NewsletterWhatsAppCTA from "@/components/NewsletterWhatsAppCTA";
import StickyShopBar from "@/components/StickyShopBar";

// Matches lib/api.js's serverFetch default - see the comment there for why
// this was lowered from 3600s (was causing the homepage to keep showing
// stale/deleted products for up to an hour after an admin-panel change).
export const revalidate = 60;

async function getCategories() {
  const data = await serverFetch("/categories");
  return Array.isArray(data) && data.length ? data : FALLBACK_CATEGORIES;
}

async function getProducts(params) {
  const qs = new URLSearchParams(params).toString();
  const data = await serverFetch(`/products?${qs}`);
  return data?.products || [];
}

// A product is only promoted (hero, Best Sellers, New Arrivals, Flash
// Deals, Featured Spotlight, Lifestyle Blocks) while it's actually in
// stock. ProductCard's own disabled "Out of stock" button state is
// untouched everywhere else in the app (category pages, search, etc.) -
// this only decides what the homepage actively pushes.
function inStock(product) {
  return (product.stock ?? 1) > 0;
}

export default async function HomePage() {
  const categories = await getCategories();

  // Catalog is small (see productController's own "catalog is small" note),
  // so one unpaginated fetch + client-side tally/ranking is both simpler and
  // far less load than a separate request per section.
  const [flashSale, bestSellers, newArrivals, allActive, featuredList] = await Promise.all([
    getProducts({ flashSale: "true", limit: "10" }),
    getProducts({ sort: "popular", limit: "10" }),
    // "newest" isn't a recognized sort key in productController's SORTERS
    // map, so it legitimately falls through to the controller's own real
    // default sort (createdAt: -1) - genuine "just added" order, no
    // invented "new" dates.
    getProducts({ sort: "newest", limit: "10" }),
    getProducts({ limit: "100" }),
    getProducts({ featured: "true", limit: "1" }),
  ]);

  const totalCount = allActive.length;
  const counts = {};
  for (const p of allActive) {
    const slug = p.category?.slug;
    if (slug) counts[slug] = (counts[slug] || 0) + 1;
  }

  const flashSaleInStock = flashSale.filter(inStock);
  const bestSellersInStock = bestSellers.filter(inStock);
  const newArrivalsInStock = newArrivals.filter(inStock);
  const featuredProduct = featuredList.filter(inStock)[0] || null;
  const inStockActive = allActive.filter(inStock);

  // Best real product per category (rating, then reviewsCount, as
  // tie-breakers) - reused for both the hero, so it's never dominated by a
  // single product/category the way a sparse isFeatured flag alone could
  // leave it, and for the lifestyle blocks below.
  const topProductByCategory = {};
  for (const p of inStockActive) {
    const slug = p.category?.slug;
    if (!slug) continue;
    const current = topProductByCategory[slug];
    if (
      !current ||
      (p.rating || 0) > (current.rating || 0) ||
      ((p.rating || 0) === (current.rating || 0) && (p.reviewsCount || 0) > (current.reviewsCount || 0))
    ) {
      topProductByCategory[slug] = p;
    }
  }
  const diversifiedHero = categories.map((cat) => topProductByCategory[cat.slug]).filter(Boolean);
  const heroFallback = flashSaleInStock.length ? flashSaleInStock : bestSellersInStock;
  const heroSlides = (diversifiedHero.length ? diversifiedHero : heroFallback).slice(0, 6);

  return (
    <div className="pt-4">
      {heroSlides.length > 0 && (
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <HeroCarousel slides={heroSlides} />
        </div>
      )}

      <TrustBar />

      <FeaturedCollections categories={categories} totalCount={totalCount} counts={counts} />

      <BestSellers products={bestSellersInStock} />

      <NewArrivals products={newArrivalsInStock} />

      <FlashDeals products={flashSaleInStock} />

      <ShopByNeed categories={categories} counts={counts} />

      <FeaturedSpotlight product={featuredProduct} />

      <WhyZyvron />

      <LifestyleBlocks categories={categories} counts={counts} topProductByCategory={topProductByCategory} />

      <Testimonials />

      <NewsletterWhatsAppCTA />

      <StickyShopBar />
    </div>
  );
}
