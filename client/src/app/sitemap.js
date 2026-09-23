import { serverFetch } from "@/lib/api";
import { FALLBACK_CATEGORIES, SITE_URL } from "@/data/constants";

export default async function sitemap() {
  const staticRoutes = [
    { url: `${SITE_URL}/`, changeFrequency: "daily", priority: 1 },
    { url: `${SITE_URL}/category/all`, changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE_URL}/track-order`, changeFrequency: "monthly", priority: 0.3 },
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

  const productsData = await serverFetch("/products?limit=500");
  const productRoutes = (productsData?.products || []).map((p) => ({
    url: `${SITE_URL}/product/${p.slug}`,
    lastModified: p.updatedAt ? new Date(p.updatedAt) : undefined,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes];
}
