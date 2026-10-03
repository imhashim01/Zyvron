import { Suspense } from "react";
import { serverFetch } from "@/lib/api";
import { CATEGORY_GROUPS, CATEGORY_META, FALLBACK_CATEGORIES } from "@/data/constants";
import CategoryFilters from "@/components/CategoryFilters";
import ProductCard from "@/components/ProductCard";
import WishlistGrid from "@/components/WishlistGrid";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/data/constants";

async function getCategories() {
  const data = await serverFetch("/categories");
  return Array.isArray(data) && data.length ? data : FALLBACK_CATEGORIES;
}

async function getBrands() {
  const data = await serverFetch("/brands");
  return Array.isArray(data) ? data : [];
}

// See lib/api.js's serverFetch comment - lowered from 3600s so admin-panel
// product changes show up on the storefront within about a minute.
export const revalidate = 60;

// Page title for a category slug. Reads the live category list first (so
// categories added later - Earbuds, Powerbanks, Chargers, ... - get their own
// real name instead of the generic "Products" the old CATEGORY_META-only
// lookup produced), then falls back to the static metadata.
function categoryName(slug, categories) {
  if (slug === "all") return "All Products";
  if (CATEGORY_GROUPS[slug]) return CATEGORY_GROUPS[slug].name;
  return categories.find((c) => c.slug === slug)?.name || CATEGORY_META[slug]?.name || "Products";
}

// Same orderings as productController's SORTERS (+ the in-memory "discount"
// sort and the controller's default createdAt-desc), used only to merge the
// separately fetched member categories of a group back into one list.
function sortProducts(list, sort) {
  const discount = (p) => (p.compareAtPrice ? (p.compareAtPrice - p.price) / p.compareAtPrice : 0);
  const byCreated = (a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
  const comparators = {
    "price-low": (a, b) => a.price - b.price,
    "price-high": (a, b) => b.price - a.price,
    rating: (a, b) => (b.rating || 0) - (a.rating || 0),
    popular: (a, b) => (b.reviewsCount || 0) - (a.reviewsCount || 0),
    discount: (a, b) => discount(b) - discount(a),
  };
  return [...list].sort(comparators[sort] || byCreated);
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const categories = await getCategories();
  const name = categoryName(slug, categories);
  return {
    title: name,
    description: `Shop ${name} at Zyvron Tech Accessories — premium quality, cash on delivery, free shipping over Rs. 3,000.`,
    alternates: { canonical: `${SITE_URL}/category/${slug}` },
  };
}

export default async function CategoryPage({ params, searchParams }) {
  const { slug } = await params;
  const sp = await searchParams;
  const filter = sp?.filter;

  const [categories, brands] = await Promise.all([getCategories(), getBrands()]);

  if (filter === "wishlist") {
    return (
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <h1 className="mb-4 font-heading text-2xl font-bold text-white">My Wishlist</h1>
        <Suspense>
          <CategoryFilters categories={categories} brands={brands} currentSlug={slug} />
        </Suspense>
        <WishlistGrid />
      </div>
    );
  }

  // Category (from the route), the "View all" filter (flash/bestseller/new
  // - each mirrors a homepage section's own real flag/query so the "View
  // all" link actually shows the same set, not just a re-sorted list), and
  // the brand dropdown all combine (AND together) rather than being
  // mutually exclusive, so e.g. Best Sellers within one category+brand is
  // possible even though nothing in the UI builds that combination yet.
  const baseQuery = {
    limit: "24",
    ...(sp?.search ? { search: sp.search } : {}),
    ...(sp?.sort ? { sort: sp.sort } : {}),
    ...(sp?.brand && sp.brand !== "all" ? { brand: sp.brand } : {}),
    ...(filter === "flash"
      ? { flashSale: "true" }
      : filter === "bestseller"
      ? { bestSeller: "true" }
      : filter === "new"
      ? { newArrival: "true" }
      : {}),
  };

  async function fetchProducts(categorySlug) {
    const query = categorySlug ? { ...baseQuery, category: categorySlug } : baseQuery;
    const data = await serverFetch(`/products?${new URLSearchParams(query).toString()}`);
    return data?.products || [];
  }

  // A group (e.g. "Gaming & Vlogging Accessories") is the union of several
  // real categories: fetch each member with the exact same filters, then
  // merge and re-sort. Any other slug is a single category (or "all").
  const group = CATEGORY_GROUPS[slug];
  const products = group
    ? sortProducts((await Promise.all(group.members.map((member) => fetchProducts(member)))).flat(), sp?.sort)
    : await fetchProducts(slug !== "all" ? slug : null);

  const name = categoryName(slug, categories);
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name, item: `${SITE_URL}/category/${slug}` },
    ],
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <JsonLd data={breadcrumbJsonLd} />
      <h1 className="mb-4 font-heading text-2xl font-bold text-white">{name}</h1>
      <Suspense>
        <CategoryFilters categories={categories} brands={brands} currentSlug={slug} />
      </Suspense>

      {products.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p._id} product={p} />
          ))}
        </div>
      ) : (
        <p className="text-white/50">No products found. Try a different search or filter.</p>
      )}
    </div>
  );
}
