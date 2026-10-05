import { Suspense } from "react";
import { serverFetch } from "@/lib/api";
import { CATEGORY_GROUPS, CATEGORY_META, FALLBACK_CATEGORIES } from "@/data/constants";
import { PRODUCTS_PER_PAGE, fetchAllProducts, resolvePage, sortProducts } from "@/lib/catalog";
import CategoryFilters from "@/components/CategoryFilters";
import Pagination from "@/components/Pagination";
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

export async function generateMetadata({ params, searchParams }) {
  const { slug } = await params;
  const sp = await searchParams;
  const categories = await getCategories();
  const name = categoryName(slug, categories);
  // Page 2+ of a list is its own page for search engines (its own canonical),
  // page 1 keeps the plain category URL.
  const pageNumber = parseInt(Array.isArray(sp?.page) ? sp.page[0] : sp?.page, 10);
  const pageSuffix = pageNumber > 1 ? `?page=${pageNumber}` : "";
  return {
    title: pageNumber > 1 ? `${name} - Page ${pageNumber}` : name,
    description: `Shop ${name} at Zyvron Tech Accessories — premium quality, cash on delivery, free shipping all over Pakistan.`,
    alternates: { canonical: `${SITE_URL}/category/${slug}${pageSuffix}` },
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
  // Sort and page are applied below, over the whole matching list.
  const baseQuery = {
    ...(sp?.search ? { search: sp.search } : {}),
    ...(sp?.brand && sp.brand !== "all" ? { brand: sp.brand } : {}),
    ...(filter === "flash"
      ? { flashSale: "true" }
      : filter === "bestseller"
      ? { bestSeller: "true" }
      : filter === "new"
      ? { newArrival: "true" }
      : {}),
  };

  // A group (e.g. "Gaming & Vlogging Accessories") is the union of several
  // real categories: fetch every member with the exact same filters and
  // merge. Any other slug is a single category (or "all").
  const group = CATEGORY_GROUPS[slug];
  const categorySlugs = group ? group.members : [slug !== "all" ? slug : null];
  const matching = (
    await Promise.all(
      categorySlugs.map((categorySlug) =>
        fetchAllProducts(categorySlug ? { ...baseQuery, category: categorySlug } : baseQuery)
      )
    )
  ).flat();

  // One deterministic order over the full list, then one page of it. The
  // previous version only ever asked the API for the first 24 products and
  // had nowhere to go after them.
  const sorted = sortProducts(matching, sp?.sort);
  const totalPages = Math.max(1, Math.ceil(sorted.length / PRODUCTS_PER_PAGE));
  const page = resolvePage(sp?.page, totalPages);
  const products = sorted.slice((page - 1) * PRODUCTS_PER_PAGE, page * PRODUCTS_PER_PAGE);

  // Current query string minus the page number, for the pagination links.
  const linkQuery = {};
  for (const [key, value] of Object.entries(sp || {})) {
    if (key === "page") continue;
    const single = Array.isArray(value) ? value[0] : value;
    if (single) linkQuery[key] = single;
  }

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
        <>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {products.map((p) => (
              <ProductCard key={p._id} product={p} />
            ))}
          </div>
          <Pagination
            basePath={`/category/${slug}`}
            query={linkQuery}
            page={page}
            totalPages={totalPages}
            totalItems={sorted.length}
            pageSize={PRODUCTS_PER_PAGE}
          />
        </>
      ) : (
        <p className="text-white/50">No products found. Try a different search or filter.</p>
      )}
    </div>
  );
}
