import { serverFetch } from "@/lib/api";
import { FALLBACK_CATEGORIES, SITE_URL } from "@/data/constants";
import { fetchAllProducts } from "@/lib/catalog";

export default async function sitemap() {
  const staticRoutes = [
    { url: `${SITE_URL}/`, changeFrequency: "daily", priority: 1 },
    { url: `${SITE_URL}/category/all`, changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE_URL}/track-order`, changeFrequency: "monthly", priority: 0.3 },
    ...["about", "contact", "faq", "shipping-delivery", "warranty-support", "privacy-policy", "terms", "refund-policy"].map((path) => ({
      url: `${SITE_URL}/${path}`,
      changeFrequency: "monthly",
      priority: 0.4,
    })),
  ];

  const categoriesData = await serverFetch("/categories");
  const categories = Array.isArray(categoriesData) && categoriesData.length
    ? categoriesData
    : FALLBACK_CATEGORIES;

  const categoryRoutes = categories.map((c) => ({
    url: `${SITE_URL}/category/${c.slug}`,
    changeFrequency: "daily",
    priority: 0.8,
  }));

  // The API caps one request at 100 products, so "?limit=500" silently
  // dropped everything past the first 100 - read the whole catalog instead.
  const products = await fetchAllProducts();
  const productRoutes = products.map((p) => ({
    url: `${SITE_URL}/product/${p.slug}`,
    lastModified: p.updatedAt ? new Date(p.updatedAt) : undefined,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes];
}
