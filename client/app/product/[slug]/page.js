import { notFound } from "next/navigation";
import { serverFetch } from "@/lib/api";
import { SITE_URL } from "@/lib/constants";
import { discountPercent, formatPKR } from "@/lib/format";
import ProductGallery from "@/components/ProductGallery";
import ProductActions from "@/components/ProductActions";
import ReviewsSection from "@/components/ReviewsSection";
import ProductCard from "@/components/ProductCard";
import StarRating from "@/components/StarRating";
import JsonLd from "@/components/JsonLd";

export const revalidate = 3600;

async function getProduct(slug) {
  const data = await serverFetch(`/products/${slug}`);
  return data?.product || data || null;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) return { title: "Product" };
  return {
    title: product.title,
    description: product.description || `Buy ${product.title} at Zyvron Tech Accessories.`,
    alternates: { canonical: `${SITE_URL}/product/${slug}` },
    openGraph: {
      title: product.title,
      description: product.description,
      images: product.image ? [{ url: product.image }] : undefined,
    },
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) notFound();

  const relatedData = await serverFetch(
    `/products?category=${encodeURIComponent(product.category?.slug || "")}&limit=5`
  );
  const related = (relatedData?.products || []).filter((p) => p._id !== product._id).slice(0, 4);

  const pct = discountPercent(product.price, product.compareAtPrice);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    image: product.images?.length ? product.images : [product.image],
    description: product.description,
    sku: product._id,
    offers: {
      "@type": "Offer",
      priceCurrency: "PKR",
      price: product.price,
      availability:
        (product.stock ?? 1) > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      url: `${SITE_URL}/product/${product.slug}`,
    },
    ...(product.reviewsCount > 0
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: product.rating,
            reviewCount: product.reviewsCount,
          },
        }
      : {}),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: product.category?.name,
        item: `${SITE_URL}/category/${product.category?.slug}`,
      },
      { "@type": "ListItem", position: 3, name: product.title, item: `${SITE_URL}/product/${product.slug}` },
    ],
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <JsonLd data={productJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <div className="grid gap-10 md:grid-cols-2">
        <ProductGallery images={product.images} title={product.title} />

        <div>
          <p className="mb-1 text-sm font-semibold uppercase tracking-wide text-cyan-300">
            {product.category?.name}
          </p>
          <h1 className="mb-2 font-heading text-2xl font-bold text-white sm:text-3xl">
            {product.title}
          </h1>
          <div className="mb-4">
            <StarRating rating={product.rating} count={product.reviewsCount} />
          </div>
          <div className="mb-6 flex items-baseline gap-3">
            <span className="text-3xl font-bold text-white">{formatPKR(product.price)}</span>
            {product.compareAtPrice > product.price && (
              <span className="text-lg text-white/40 line-through">
                {formatPKR(product.compareAtPrice)}
              </span>
            )}
            {pct && <span className="font-semibold text-emerald-400">{pct}% OFF</span>}
          </div>

          {product.description && (
            <p className="mb-6 text-white/60">{product.description}</p>
          )}

          <ProductActions product={product} />

          {product.features?.length > 0 && (
            <ul className="mt-8 space-y-2">
              {product.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                  {f}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <ReviewsSection productId={product._id} />

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="mb-6 font-heading text-xl font-bold text-white">You Might Also Like</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p._id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
