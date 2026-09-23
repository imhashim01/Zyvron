/* eslint-disable no-console */
require("dotenv").config();
const mongoose = require("mongoose");
const { mongoUri } = require("../config/env");
const Category = require("../models/Category");
const Product = require("../models/Product");
const { slugifyTitle } = require("../controllers/productController");
const { slugify: slugifyCategory } = require("../controllers/categoryController");

// Ported verbatim from the old script.js PRODUCTS array (script.js:2-384).
// Old boolean `inStock` -> stock: 50 (true) / 0 (false). Old `discount` string
// is now computed from compareAtPrice/price via Product.discountLabel, so it's dropped here.
const OLD_PRODUCTS = [
  {
    id: "anc-air-pods-smart-led-display-earbuds-white",
    title: "A9 Pro True Wireless Earbuds with ANC & Touch Screen Display",
    category: "Audio & Speakers",
    price: 3499,
    compareAtPrice: 4399,
    rating: 4.8,
    reviews: 64,
    image: "https://placehold.co/1200x1200/0a1f2e/22d3ee?font=montserrat&text=Audio%20%26%20Speakers%0APlaceholder%20Image",
    images: [
      "https://placehold.co/1200x1200/0a1f2e/22d3ee?font=montserrat&text=Audio%20%26%20Speakers%0APlaceholder%20Image%201",
      "https://placehold.co/1200x1200/0a1f2e/22d3ee?font=montserrat&text=Audio%20%26%20Speakers%0APlaceholder%20Image%202",
      "https://placehold.co/1200x1200/0a1f2e/22d3ee?font=montserrat&text=Audio%20%26%20Speakers%0APlaceholder%20Image%203",
    ],
    badge: "Hot Deal",
    features: [
      "Active Noise Cancellation (ANC & ENC)",
      "Full Color Touch Screen Display Case",
      "Deep Bass & Crystal-Clear Treble",
      "Long Battery Life with Quick Charge",
      "Bluetooth 5.0 Stable Low-Latency Link",
    ],
    tags: ["earbuds", "audio", "anc", "touch screen", "gadgets"],
    colors: [
      { name: "Black", hex: "#111318" },
      { name: "White", hex: "#f5f5f5" },
    ],
    inStock: true,
    isFlashSale: true,
  },
  {
    id: "bt-2301-g-lamp-multifunctional-wireless-lamp",
    title: "BT-2301 G Multifunctional Wireless Lamp & RGB Speaker",
    category: "Audio & Speakers",
    price: 3250,
    compareAtPrice: 4999,
    rating: 4.9,
    reviews: 42,
    image: "https://placehold.co/1200x1200/0a1f2e/22d3ee?font=montserrat&text=Audio%20%26%20Speakers%0APlaceholder%20Image",
    images: [
      "https://placehold.co/1200x1200/0a1f2e/22d3ee?font=montserrat&text=Audio%20%26%20Speakers%0APlaceholder%20Image%201",
      "https://placehold.co/1200x1200/0a1f2e/22d3ee?font=montserrat&text=Audio%20%26%20Speakers%0APlaceholder%20Image%202",
      "https://placehold.co/1200x1200/0a1f2e/22d3ee?font=montserrat&text=Audio%20%26%20Speakers%0APlaceholder%20Image%203",
    ],
    badge: "Trending",
    description:
      "Upgrade your bedside or workspace with the iconic G-shaped atmosphere lamp featuring dynamic RGB music sync, built-in wireless fast charging pad, and rich Bluetooth audio.",
    features: [
      "Multifunctional RGB Ambient Lighting",
      "Integrated Fast Wireless Phone Charger",
      "High-Fidelity Bluetooth Speaker",
      "Rechargeable Built-in Battery",
      "Modern G-Shape Aesthetic Decor",
    ],
    tags: ["lamp", "rgb", "speaker", "charger", "gadgets"],
    inStock: true,
    isFlashSale: true,
  },
  {
    id: "12-hd-mobile-screen-magnifier-foldable-phone-cinema-stand",
    title: "12” HD Mobile Screen Magnifier – Foldable Cinema Stand",
    category: "Mobile Accessories",
    price: 1409,
    compareAtPrice: 1999,
    rating: 4.6,
    reviews: 33,
    image: "https://placehold.co/1200x1200/0a1f2e/22d3ee?font=montserrat&text=Mobile%20Accessories%0APlaceholder%20Image",
    images: [
      "https://placehold.co/1200x1200/0a1f2e/22d3ee?font=montserrat&text=Mobile%20Accessories%0APlaceholder%20Image%201",
      "https://placehold.co/1200x1200/0a1f2e/22d3ee?font=montserrat&text=Mobile%20Accessories%0APlaceholder%20Image%202",
      "https://placehold.co/1200x1200/0a1f2e/22d3ee?font=montserrat&text=Mobile%20Accessories%0APlaceholder%20Image%203",
    ],
    badge: "Sale",
    description:
      "Turn your phone into a mini cinema anytime, anywhere! This 12-inch optical HD screen magnifier enlarges your smartphone display for movies, video calls, and gaming.",
    features: [
      "12-inch 3D HD Curved Optical Magnification",
      "Relieves Eye Strain & Blue Light Stress",
      "Foldable, Slim & Portable Design",
      "Universal Compatibility with All Smartphones",
    ],
    tags: ["screen magnifier", "cinema stand", "mobile accessories"],
    inStock: true,
    isFlashSale: true,
  },
  {
    id: "zyvron-elite-titanium-anc-earbuds-pro-max",
    title: "Zyvron Elite Pro Max – Titanium Wireless Earbuds with Hi-Res ANC",
    category: "Audio & Speakers",
    price: 5499,
    compareAtPrice: 7299,
    rating: 4.9,
    reviews: 17,
    image: "https://placehold.co/1200x1200/0a1f2e/22d3ee?font=montserrat&text=Audio%20%26%20Speakers%0APlaceholder%20Image",
    images: [
      "https://placehold.co/1200x1200/0a1f2e/22d3ee?font=montserrat&text=Audio%20%26%20Speakers%0APlaceholder%20Image%201",
      "https://placehold.co/1200x1200/0a1f2e/22d3ee?font=montserrat&text=Audio%20%26%20Speakers%0APlaceholder%20Image%202",
      "https://placehold.co/1200x1200/0a1f2e/22d3ee?font=montserrat&text=Audio%20%26%20Speakers%0APlaceholder%20Image%203",
    ],
    badge: "Premium",
    description:
      "Our flagship earbuds, engineered for listeners who want nothing but the best. A titanium-finished case, Hi-Res certified drivers, and studio-grade ANC deliver a genuinely premium listening experience for daily wear.",
    features: [
      "Hi-Res Certified Titanium Drivers",
      "Studio-Grade Active Noise Cancellation",
      "Premium Titanium-Finish Charging Case",
      "Wireless Qi Charging Support",
      "Bluetooth 5.3 with Multipoint Pairing",
    ],
    tags: ["earbuds", "audio", "premium", "titanium", "anc", "flagship"],
    inStock: true,
    isFlashSale: false,
    isFeatured: true,
  },
  {
    id: "k8-type-c-wireless-lavalier-microphone-portable-audio-video",
    title: "K8 Type-C Wireless Lavalier Lapel Microphone",
    category: "Audio & Speakers",
    price: 1969,
    compareAtPrice: 2999,
    rating: 4.8,
    reviews: 45,
    image: "https://placehold.co/1200x1200/0a1f2e/22d3ee?font=montserrat&text=Audio%20%26%20Speakers%0APlaceholder%20Image",
    images: [
      "https://placehold.co/1200x1200/0a1f2e/22d3ee?font=montserrat&text=Audio%20%26%20Speakers%0APlaceholder%20Image%201",
      "https://placehold.co/1200x1200/0a1f2e/22d3ee?font=montserrat&text=Audio%20%26%20Speakers%0APlaceholder%20Image%202",
      "https://placehold.co/1200x1200/0a1f2e/22d3ee?font=montserrat&text=Audio%20%26%20Speakers%0APlaceholder%20Image%203",
    ],
    badge: "Sale",
    description:
      "Plug & play wireless clip-on mic with 20m barrier-free transmission and intelligent noise reduction. Ideal for interviews, TikTok, Instagram reels, and live streams.",
    features: [
      "Plug & Play Auto Pairing – No App Required",
      "20-Meter Barrier-Free Wireless Range",
      "Smart DSP Noise Cancellation Chip",
      "Omni-Directional 360° Sound Pickup",
    ],
    tags: ["mic", "wireless mic", "k8 mic", "gadgets"],
    inStock: true,
    isFlashSale: true,
  },
  {
    id: "portable-bluetooth-speaker-waterproof",
    title: "Portable Waterproof Bluetooth Speaker – Deep Bass Sound",
    category: "Audio & Speakers",
    price: 2899,
    compareAtPrice: 3699,
    rating: 4.7,
    reviews: 38,
    image: "https://placehold.co/1200x1200/0a1f2e/22d3ee?font=montserrat&text=Audio%20%26%20Speakers%0APlaceholder%20Image",
    images: [
      "https://placehold.co/1200x1200/0a1f2e/22d3ee?font=montserrat&text=Audio%20%26%20Speakers%0APlaceholder%20Image%201",
      "https://placehold.co/1200x1200/0a1f2e/22d3ee?font=montserrat&text=Audio%20%26%20Speakers%0APlaceholder%20Image%202",
      "https://placehold.co/1200x1200/0a1f2e/22d3ee?font=montserrat&text=Audio%20%26%20Speakers%0APlaceholder%20Image%203",
    ],
    badge: "Top Rated",
    description:
      "Take your music anywhere with this compact waterproof Bluetooth speaker. Delivers punchy deep bass and crystal-clear highs, with a rugged, premium-grade build that shrugs off splashes, dust, and everyday knocks.",
    features: [
      "IPX6 Waterproof Rugged Build",
      "12-Hour Rechargeable Battery",
      "Deep Bass Dual Driver Sound",
      "Bluetooth 5.0 Stable Connection",
      "Built-In Mic for Hands-Free Calls",
    ],
    tags: ["speaker", "bluetooth speaker", "audio", "waterproof", "gadgets"],
    inStock: true,
    isFlashSale: false,
  },
  {
    id: "premium-wireless-headphones-over-ear",
    title: "Premium Over-Ear Wireless Headphones with Deep Bass",
    category: "Audio & Speakers",
    price: 4299,
    compareAtPrice: 5499,
    rating: 4.8,
    reviews: 52,
    image: "https://placehold.co/1200x1200/0a1f2e/22d3ee?font=montserrat&text=Audio%20%26%20Speakers%0APlaceholder%20Image",
    images: [
      "https://placehold.co/1200x1200/0a1f2e/22d3ee?font=montserrat&text=Audio%20%26%20Speakers%0APlaceholder%20Image%201",
      "https://placehold.co/1200x1200/0a1f2e/22d3ee?font=montserrat&text=Audio%20%26%20Speakers%0APlaceholder%20Image%202",
      "https://placehold.co/1200x1200/0a1f2e/22d3ee?font=montserrat&text=Audio%20%26%20Speakers%0APlaceholder%20Image%203",
    ],
    badge: "Bestseller",
    description:
      "Immerse yourself in rich, room-filling sound with these premium over-ear wireless headphones. Soft cushioned ear cups and a foldable design make them perfect for long listening sessions on the move or at your desk.",
    features: [
      "Over-Ear Cushioned Comfort Fit",
      "40-Hour Extended Battery Life",
      "Deep Bass & Clear Treble Drivers",
      "Foldable Travel-Friendly Design",
      "Bluetooth 5.3 Low-Latency Pairing",
    ],
    tags: ["headphones", "wireless headphones", "audio", "gadgets"],
    inStock: true,
    isFlashSale: true,
  },
  {
    id: "smart-fitness-watch-amoled",
    title: "Smart Fitness Watch – AMOLED Display & Heart Rate Tracker",
    category: "Smart Wearables",
    price: 3999,
    compareAtPrice: 5299,
    rating: 4.6,
    reviews: 47,
    image: "https://placehold.co/1200x1200/0a1f2e/22d3ee?font=montserrat&text=Smart%20Wearables%0APlaceholder%20Image",
    images: [
      "https://placehold.co/1200x1200/0a1f2e/22d3ee?font=montserrat&text=Smart%20Wearables%0APlaceholder%20Image%201",
      "https://placehold.co/1200x1200/0a1f2e/22d3ee?font=montserrat&text=Smart%20Wearables%0APlaceholder%20Image%202",
      "https://placehold.co/1200x1200/0a1f2e/22d3ee?font=montserrat&text=Smart%20Wearables%0APlaceholder%20Image%203",
    ],
    badge: "Hot Deal",
    description:
      "Track your fitness goals in style with this smartwatch featuring a vivid AMOLED display, round-the-clock heart rate monitoring, and multi-sport tracking modes — all with a battery that lasts for days.",
    features: [
      "Vivid AMOLED Touch Display",
      "24/7 Heart Rate & SpO2 Monitor",
      "Multi-Sport Tracking Modes",
      "7-Day Battery Life",
      "Water Resistant Design",
    ],
    tags: ["smartwatch", "fitness watch", "wearable", "gadgets"],
    inStock: true,
    isFlashSale: true,
  },
  {
    id: "rgb-wireless-gaming-mouse",
    title: "RGB Wireless Gaming Mouse – High Precision Sensor",
    category: "Gaming & PC Accessories",
    price: 2299,
    compareAtPrice: 2999,
    rating: 4.7,
    reviews: 29,
    image: "https://placehold.co/1200x1200/0a1f2e/22d3ee?font=montserrat&text=Gaming%20%26%20PC%20Accessories%0APlaceholder%20Image",
    images: [
      "https://placehold.co/1200x1200/0a1f2e/22d3ee?font=montserrat&text=Gaming%20%26%20PC%20Accessories%0APlaceholder%20Image%201",
      "https://placehold.co/1200x1200/0a1f2e/22d3ee?font=montserrat&text=Gaming%20%26%20PC%20Accessories%0APlaceholder%20Image%202",
      "https://placehold.co/1200x1200/0a1f2e/22d3ee?font=montserrat&text=Gaming%20%26%20PC%20Accessories%0APlaceholder%20Image%203",
    ],
    badge: "New Arrival",
    description:
      "Gain the competitive edge with this RGB wireless gaming mouse. A high-precision sensor, low-latency wireless connection, and customizable lighting make it a favorite among gamers who demand accuracy and style.",
    features: [
      "High-Precision Optical Sensor",
      "Low-Latency 2.4GHz Wireless",
      "Customizable RGB Lighting",
      "Ergonomic Grip Design",
      "Long-Lasting Rechargeable Battery",
    ],
    tags: ["gaming mouse", "mouse", "gaming", "pc accessories", "gadgets"],
    inStock: true,
    isFlashSale: false,
  },
  {
    id: "rgb-gaming-keyboard-mouse-combo",
    title: "RGB Backlit Gaming Keyboard & Mouse Combo Setup",
    category: "Gaming & PC Accessories",
    price: 3499,
    compareAtPrice: 4499,
    rating: 4.8,
    reviews: 33,
    image: "https://placehold.co/1200x1200/0a1f2e/22d3ee?font=montserrat&text=Gaming%20%26%20PC%20Accessories%0APlaceholder%20Image",
    images: [
      "https://placehold.co/1200x1200/0a1f2e/22d3ee?font=montserrat&text=Gaming%20%26%20PC%20Accessories%0APlaceholder%20Image%201",
      "https://placehold.co/1200x1200/0a1f2e/22d3ee?font=montserrat&text=Gaming%20%26%20PC%20Accessories%0APlaceholder%20Image%202",
      "https://placehold.co/1200x1200/0a1f2e/22d3ee?font=montserrat&text=Gaming%20%26%20PC%20Accessories%0APlaceholder%20Image%203",
    ],
    badge: "Gamer's Pick",
    description:
      "Level up your gaming setup with this RGB backlit keyboard and mouse combo. Built for speed and durability, it brings a full esports-grade lighting experience to your desk.",
    features: [
      "Full RGB Backlit Illumination",
      "Anti-Ghosting Key Rollover",
      "Durable Spill-Resistant Build",
      "Matching RGB Gaming Mouse Included",
      "Plug & Play USB Connection",
    ],
    tags: ["gaming keyboard", "keyboard", "gaming", "pc accessories", "gadgets", "rgb"],
    inStock: true,
    isFlashSale: false,
  },
  {
    id: "zyvron-titanium-ultra-always-on-amoled-smartwatch",
    title: "Zyvron Titanium Ultra – Always-On AMOLED Smartwatch",
    category: "Smart Wearables",
    price: 6999,
    compareAtPrice: 9499,
    rating: 4.8,
    reviews: 14,
    image: "https://placehold.co/1200x1200/0a1f2e/22d3ee?font=montserrat&text=Smart%20Wearables%0APlaceholder%20Image",
    images: [
      "https://placehold.co/1200x1200/0a1f2e/22d3ee?font=montserrat&text=Smart%20Wearables%0APlaceholder%20Image%201",
      "https://placehold.co/1200x1200/0a1f2e/22d3ee?font=montserrat&text=Smart%20Wearables%0APlaceholder%20Image%202",
      "https://placehold.co/1200x1200/0a1f2e/22d3ee?font=montserrat&text=Smart%20Wearables%0APlaceholder%20Image%203",
    ],
    badge: "Premium",
    description:
      "Our top-of-the-line smartwatch for those who want a flagship look and feel. A durable titanium-style case, an always-on AMOLED display, and complete health tracking make it a true daily-wear statement piece.",
    features: [
      "Always-On Vivid AMOLED Display",
      "Durable Titanium-Style Case",
      "Continuous Heart Rate & SpO2 Tracking",
      "Built-In GPS & 100+ Sport Modes",
      "Up to 10-Day Battery Life",
    ],
    tags: ["smartwatch", "premium", "titanium", "wearable", "flagship"],
    inStock: true,
    isFlashSale: false,
    isFeatured: true,
  },
  {
    id: "zyvron-mech-pro-hotswap-mechanical-keyboard",
    title: "Zyvron Mech Pro – Hot-Swappable RGB Mechanical Keyboard",
    category: "Gaming & PC Accessories",
    price: 5299,
    compareAtPrice: 6999,
    rating: 4.9,
    reviews: 9,
    image: "https://placehold.co/1200x1200/0a1f2e/22d3ee?font=montserrat&text=Gaming%20%26%20PC%20Accessories%0APlaceholder%20Image",
    images: [
      "https://placehold.co/1200x1200/0a1f2e/22d3ee?font=montserrat&text=Gaming%20%26%20PC%20Accessories%0APlaceholder%20Image%201",
      "https://placehold.co/1200x1200/0a1f2e/22d3ee?font=montserrat&text=Gaming%20%26%20PC%20Accessories%0APlaceholder%20Image%202",
      "https://placehold.co/1200x1200/0a1f2e/22d3ee?font=montserrat&text=Gaming%20%26%20PC%20Accessories%0APlaceholder%20Image%203",
    ],
    badge: "Premium",
    description:
      "A true premium mechanical keyboard for enthusiasts. Hot-swappable switches, per-key RGB, and a solid aluminum-top frame bring a genuine desktop-flagship feel to your setup.",
    features: [
      "Hot-Swappable Mechanical Switches",
      "Per-Key Customizable RGB Lighting",
      "Aluminum-Top Frame Construction",
      "Doubleshot PBT Keycaps",
      "Detachable USB-C Cable",
    ],
    tags: ["gaming keyboard", "mechanical keyboard", "premium", "rgb", "hot-swappable"],
    inStock: true,
    isFlashSale: false,
    isFeatured: true,
  },
  {
    id: "zyvron-magcharge-pro-3in1-wireless-charging-stand",
    title: "Zyvron MagCharge Pro – 3-in-1 Premium Wireless Charging Stand",
    category: "Mobile Accessories",
    price: 3999,
    compareAtPrice: 5299,
    rating: 4.7,
    reviews: 12,
    image: "https://placehold.co/1200x1200/0a1f2e/22d3ee?font=montserrat&text=Mobile%20Accessories%0APlaceholder%20Image",
    images: [
      "https://placehold.co/1200x1200/0a1f2e/22d3ee?font=montserrat&text=Mobile%20Accessories%0APlaceholder%20Image%201",
      "https://placehold.co/1200x1200/0a1f2e/22d3ee?font=montserrat&text=Mobile%20Accessories%0APlaceholder%20Image%202",
      "https://placehold.co/1200x1200/0a1f2e/22d3ee?font=montserrat&text=Mobile%20Accessories%0APlaceholder%20Image%203",
    ],
    badge: "Premium",
    description:
      "Charge your phone, smartwatch, and earbuds together on one elegant stand. A premium matte-finish build keeps your nightstand or desk tidy while charging up to three devices at once.",
    features: [
      "3-in-1 Simultaneous Wireless Charging",
      "15W Fast Charging for Phones",
      "Dedicated Watch & Earbuds Charging Zones",
      "Premium Matte-Finish Aluminum Build",
      "Universal Qi Compatibility",
    ],
    tags: ["wireless charger", "charging stand", "premium", "mobile accessories"],
    inStock: true,
    isFlashSale: false,
    isFeatured: true,
  },
];

const CATEGORY_ICONS = {
  "Audio & Speakers": "headphones",
  "Smart Wearables": "watch",
  "Gaming & PC Accessories": "gamepad",
  "Mobile Accessories": "smartphone",
};

async function run() {
  await mongoose.connect(mongoUri);
  console.log("[seed:products] connected");

  const categoryNames = [...new Set(OLD_PRODUCTS.map((p) => p.category))];
  const categoryByName = {};
  for (let i = 0; i < categoryNames.length; i += 1) {
    const name = categoryNames[i];
    const slug = slugifyCategory(name);
    const category = await Category.findOneAndUpdate(
      { slug },
      { name, slug, icon: CATEGORY_ICONS[name] || "grid", order: i },
      { upsert: true, new: true }
    );
    categoryByName[name] = category;
  }
  console.log(`[seed:products] ${categoryNames.length} categories ready`);

  // A single shared deadline for every flash-sale product, so the homepage's
  // countdown reflects one real "sale window" rather than a fake per-render timer.
  const flashSaleEndsAt = new Date(Date.now() + 18 * 60 * 60 * 1000);

  let created = 0;
  let updated = 0;
  for (const old of OLD_PRODUCTS) {
    const slug = slugifyTitle(old.id);
    const doc = {
      title: old.title,
      slug,
      category: categoryByName[old.category]._id,
      price: old.price,
      compareAtPrice: old.compareAtPrice,
      rating: old.rating,
      reviewsCount: old.reviews,
      image: old.image,
      images: old.images,
      badge: old.badge,
      description: old.description || "",
      features: old.features || [],
      tags: old.tags || [],
      colors: old.colors || [],
      stock: old.inStock ? 50 : 0,
      isFlashSale: !!old.isFlashSale,
      flashSaleEndsAt: old.isFlashSale ? flashSaleEndsAt : null,
      isFeatured: !!old.isFeatured,
      isActive: true,
    };
    const existed = await Product.exists({ slug });
    await Product.findOneAndUpdate({ slug }, doc, { upsert: true, new: true });
    if (existed) updated += 1;
    else created += 1;
  }

  console.log(`[seed:products] done - ${created} created, ${updated} updated`);
  await mongoose.disconnect();
}

run().catch((err) => {
  console.error("[seed:products] failed", err);
  process.exit(1);
});
