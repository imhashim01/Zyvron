export const SITE_NAME = "Zyvron Tech Accessories";
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");
export const FREE_SHIPPING_THRESHOLD = 3000;
export const SHIPPING_FEE = 199;

// Fallback category metadata (icon + display name + lifestyle photo) keyed by
// slug, used to decorate categories fetched from the API and as a last
// resort if the API is unreachable when rendering the home page category row.
export const CATEGORY_META = {
  "audio-speakers": {
    name: "Audio & Speakers",
    icon: "headphones",
    image: "https://images.unsplash.com/photo-1507878566509-a0dbe19677a5?w=400&q=80&auto=format&fit=crop",
  },
  "smart-wearables": {
    name: "Smart Wearables",
    icon: "watch",
    image: "https://images.unsplash.com/photo-1617043983671-adaadcaa2460?w=400&q=80&auto=format&fit=crop",
  },
  "gaming-pc-accessories": {
    name: "Gaming & PC Accessories",
    icon: "gamepad",
    image: "https://images.unsplash.com/photo-1598662779094-110c2bad80b5?w=400&q=80&auto=format&fit=crop",
  },
  "mobile-accessories": {
    name: "Mobile Accessories",
    icon: "phone",
    image: "https://images.unsplash.com/photo-1737882171913-f4ced0ce73d8?w=400&q=80&auto=format&fit=crop",
  },
};

// Used for the "All Products" tile at the front of the featured-collections row.
export const ALL_PRODUCTS_IMAGE =
  "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?auto=format&fit=crop&w=400&q=80";

export const FALLBACK_CATEGORIES = Object.entries(CATEGORY_META).map(([slug, meta]) => ({
  _id: slug,
  slug,
  name: meta.name,
  icon: meta.icon,
  image: meta.image,
}));
