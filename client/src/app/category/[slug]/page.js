import { Suspense } from "react";
import { serverFetch } from "@/lib/api";
import { CATEGORY_META } from "@/data/constants";
import CategoryFilters from "@/components/CategoryFilters";
import ProductCard from "@/components/ProductCard";
import WishlistGrid from "@/components/WishlistGrid";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/data/constants";

export const revalidate = 3600;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const name = slug === "all" ? "All Products" : CATEGORY_META[slug]?.name || "Products";
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

  if (filter === "wishlist") {
    return (
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <h1 className="mb-4 font-heading text-2xl font-bold text-white">My Wishlist</h1>
        <Suspense>
          <CategoryFilters />
        </Suspense>
        <WishlistGrid />
      </div>
    );
  }

  const query = {
    limit: "24",
    ...(sp?.search ? { search: sp.search } : {}),
    ...(sp?.sort ? { sort: sp.sort } : {}),
    ...(filter === "flash" ? { flashSale: "true" } : slug !== "all" ? { category: slug } : {}),
  };
  const qs = new URLSearchParams(query).toString();
  const data = await serverFetch(`/products?${qs}`);
  const products = data?.products || [];

  const name = slug === "all" ? "All Products" : CATEGORY_META[slug]?.name || "Products";
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
        <CategoryFilters />
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
