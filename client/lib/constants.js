export const SITE_NAME = "Zyvron Tech Accessories";
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");
export const FREE_SHIPPING_THRESHOLD = 3000;
export const SHIPPING_FEE = 199;

// Fallback category metadata (icon + display name) keyed by slug, used to
// decorate categories fetched from the API and as a last resort if the API
// is unreachable when rendering the home page category grid.
export const CATEGORY_META = {
  "audio-speakers": { name: "Audio & Speakers", icon: "headphones" },
  "smart-wearables": { name: "Smart Wearables", icon: "watch" },
  "gaming-pc-accessories": { name: "Gaming & PC Accessories", icon: "gamepad" },
  "mobile-accessories": { name: "Mobile Accessories", icon: "phone" },
};

export const FALLBACK_CATEGORIES = Object.entries(CATEGORY_META).map(([slug, meta]) => ({
  _id: slug,
  slug,
  name: meta.name,
  icon: meta.icon,
}));
