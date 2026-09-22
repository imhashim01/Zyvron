export const SITE_NAME = "Zyvron Tech Accessories";
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");
export const FREE_SHIPPING_THRESHOLD = 3000;
export const SHIPPING_FEE = 199;

// Support WhatsApp number (Pakistan), in wa.me's required international
// format: no leading 0, no "+", country code prepended.
export const WHATSAPP_NUMBER = "923362345622";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const SUPPORT_EMAIL = "zyvron.official@gmail.com";

// Fallback category metadata (icon + display name + lifestyle photo + a short
// tagline for the featured-collections card) keyed by slug, used to decorate
// categories fetched from the API and as a last resort if the API is
// unreachable when rendering the home page category row. Categories without
// a tagline fall back to showing their real product count instead.
export const CATEGORY_META = {
  "audio-and-speakers": {
    name: "Audio & Speakers",
    icon: "headphones",
    image: "https://images.unsplash.com/photo-1507878566509-a0dbe19677a5?w=600&q=80&auto=format&fit=crop",
    tagline: "Premium Sound. Higher Vibes.",
  },
  "smart-wearables": {
    name: "Smart Wearables",
    icon: "watch",
    image: "https://images.unsplash.com/photo-1617043983671-adaadcaa2460?w=600&q=80&auto=format&fit=crop",
    tagline: "Track. Health. Lifestyle.",
  },
  "gaming-and-pc-accessories": {
    name: "Gaming & PC Accessories",
    icon: "gamepad",
    image: "https://images.unsplash.com/photo-1598662779094-110c2bad80b5?w=600&q=80&auto=format&fit=crop",
  },
  "mobile-accessories": {
    name: "Mobile Accessories",
    icon: "phone",
    image: "https://images.unsplash.com/photo-1737882171913-f4ced0ce73d8?w=600&q=80&auto=format&fit=crop",
    tagline: "Connect. Protect. Enhance.",
  },
};

export const FALLBACK_CATEGORIES = Object.entries(CATEGORY_META).map(([slug, meta]) => ({
  _id: slug,
  slug,
  name: meta.name,
  icon: meta.icon,
  image: meta.image,
}));
