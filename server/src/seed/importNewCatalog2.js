/* eslint-disable no-console */
/**
 * One-time import: "NEW CATALOG 2" - 11 new accessory products (mounts,
 * speakers, tripods, a wireless mic) from 27 AI-generated packaging/product
 * renders Mohammad supplied in NEW CATALOG 2.zip (folders "NO 1".."NO 12",
 * "NO 11" was empty).
 *
 * UNLIKE every RONIN import before this one, Mohammad did NOT supply a
 * price list this time. He asked (2026-10-02): "add these items all but
 * enter the stock of 10 and about pricing enter the price currently in
 * market running". So:
 *
 *   - PRICES below are researched current Pakistani retail-market prices,
 *     not a wholesale cost sheet. 5 of the 11 have a solid public price
 *     anchor (an identical or near-identical product actually listed for
 *     sale); the other 6 are reasoned market-comparable estimates based on
 *     similar products in the same category, because no exact listing for
 *     that specific item turned up. See the `priceConfidence` note on each
 *     product below. REVIEW THESE before you rely on them - they're a
 *     starting point, not a quote from your supplier.
 *   - STOCK is set to 10 on every product (Mohammad's explicit instruction
 *     this time) - NOT the stock: 0 "needs review first" convention used
 *     in every RONIN import. That means these are immediately purchasable
 *     the moment this script finishes, at the researched price above.
 *   - Brand/model identification was done by reading the text visible
 *     directly on the packaging renders (box text, printed model codes) -
 *     there was no spreadsheet to cross-reference this time either.
 *
 * One naming judgment call worth flagging: "NO 5" (a tripod) reads as
 * "ICUN IC-7864" on its packaging, while "NO 8" (the wireless mic) reads as
 * "ICON K35" - visually similar but printed as two distinct brand names, so
 * they're imported as two separate brands (ICUN and ICON) rather than
 * assumed to be a typo of one or the other.
 *
 * Run this yourself, from the server/ folder, after `npm install`:
 *   node src/seed/importNewCatalog2.js
 *   (or: npm run import:new-catalog-2)
 *
 * It reads your own server/.env for Cloudinary + MongoDB credentials -
 * nothing is hard-coded here, and this script has never been run against
 * your database from anywhere but your own machine.
 */
require("dotenv").config();
const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const { mongoUri } = require("../config/env");
const cloudinary = require("../config/cloudinary");
const { cloudinaryConfigured } = require("../utils/cloudinaryUpload");
const Category = require("../models/Category");
const Brand = require("../models/Brand");
const Product = require("../models/Product");
const { slugifyTitle } = require("../controllers/productController");
const { slugify: slugifyCategory } = require("../controllers/categoryController");
const { slugify: slugifyBrand } = require("../controllers/brandController");

const ASSETS_DIR = path.join(__dirname, "import-assets", "new-catalog-2");

// "Mobile Accessories" and "Audio & Speakers" already exist in your catalog
// (from seedProducts.js) - $setOnInsert means re-running this is a no-op
// for them, it never overwrites anything you've since edited in the admin
// panel. "Camera & Vlogging Accessories" is the one genuinely new category
// this batch needs (tripods + wireless mic don't fit anywhere else).
const CATEGORIES = [
  { key: "mobile", name: "Mobile Accessories", icon: "smartphone" },
  { key: "audio", name: "Audio & Speakers", icon: "headphones" },
  { key: "camera", name: "Camera & Vlogging Accessories", icon: "camera" },
];

// Brands this batch needs. OCTO/Jmary/SOVO/ICUN/ICON are all new brands in
// your catalog (none of these showed up in the RONIN imports) - created via
// $setOnInsert same as every brand before. 2 products are unbranded
// (brand: null) because no company name appears anywhere on their render.
const BRANDS = ["OCTO", "Jmary", "SOVO", "ICUN", "ICON"];

const PRODUCTS = [
  // ---- Mobile Accessories (3) ----
  {
    category: "mobile",
    brand: "OCTO",
    fileSlug: "octo-mountra-car-mount",
    title: "OCTO Mountra Car Phone Mount",
    price: 1299,
    priceConfidence: "ESTIMATED - reasoned market-comparable for a basic dashboard/vent phone mount; no exact listing found",
    features: "360 Degree Rotation, One-Hand Grip Release, Dashboard and Vent Mount, Universal Phone Fit",
    tags: ["phone mount", "car accessory", "mobile accessories"],
  },
  {
    category: "mobile",
    brand: "OCTO",
    fileSlug: "octo-stabi-lock-mount",
    title: "OCTO Stabi Lock Magnetic Car Mount",
    price: 1799,
    priceConfidence: "ESTIMATED - reasoned market-comparable for a locking magnetic car mount; no exact listing found",
    features: "Magnetic Lock Mechanism, Stable Vent Mount, One-Hand Attach and Release, Universal Phone Fit",
    tags: ["car mount", "magnetic mount", "mobile accessories"],
  },
  {
    category: "mobile",
    brand: "Jmary",
    fileSlug: "jmary-magnetic-car-holder",
    title: "Jmary Magnetic Car Holder",
    price: 999,
    priceConfidence: "ESTIMATED - reasoned market-comparable for an entry-level magnetic car holder; no exact listing found",
    features: "Strong Magnetic Grip, Vent Mount, Compact Design, Universal Phone Fit",
    tags: ["car holder", "magnetic mount", "mobile accessories"],
  },

  // ---- Audio & Speakers (5) ----
  {
    category: "audio",
    brand: "SOVO",
    fileSlug: "sovo-revolv-speaker",
    title: "SOVO Revolv Portable Bluetooth Speaker",
    price: 4999,
    priceConfidence: "RESEARCHED - comparable SOVO portable speaker (SBS-516) listed around Rs 5,399; priced slightly below as a comparable estimate",
    features: "Bluetooth Wireless Playback, Rich Bass Output, Portable Build, Rechargeable Battery",
    tags: ["bluetooth speaker", "portable speaker", "audio"],
  },
  {
    category: "audio",
    brand: null,
    fileSlug: "astronaut-x808-speaker",
    title: "Astronaut X-808 Wireless Bluetooth Speaker",
    price: 1549,
    priceConfidence: "RESEARCHED - exact match found for this astronaut-design X-808 speaker listed around Rs 1,549",
    features: "Astronaut Novelty Design, Bluetooth Wireless Playback, LED Light Effect, USB Rechargeable",
    tags: ["bluetooth speaker", "novelty speaker", "audio"],
  },
  {
    category: "audio",
    brand: null,
    fileSlug: "mini-cylindrical-speaker",
    title: "Mini Cylindrical Bluetooth Speaker",
    price: 1499,
    priceConfidence: "ESTIMATED - reasoned market-comparable for an unbranded compact cylindrical Bluetooth speaker; no exact listing found",
    features: "Bluetooth Wireless Playback, Compact Cylindrical Build, USB Rechargeable",
    tags: ["bluetooth speaker", "mini speaker", "audio"],
  },
  {
    category: "audio",
    brand: "OCTO",
    fileSlug: "octo-musicpro-400-bass",
    title: "OCTO Music Pro 400 BASS+ Speaker",
    price: 2499,
    priceConfidence: "ESTIMATED - reasoned market-comparable for a mid-tier bass-focused Bluetooth speaker; no exact listing found",
    features: "BASS+ Enhanced Bass, Bluetooth Wireless Playback, Rechargeable Battery",
    tags: ["bluetooth speaker", "bass speaker", "audio"],
  },
  {
    category: "audio",
    brand: "OCTO",
    fileSlug: "octo-musicpro-350",
    title: "OCTO Music Pro 350 Speaker",
    price: 2199,
    priceConfidence: "ESTIMATED - reasoned market-comparable, priced below the Music Pro 400 BASS+ as the lower model in the same OCTO speaker line; no exact listing found",
    features: "Bluetooth Wireless Playback, Clear Sound Output, Rechargeable Battery",
    tags: ["bluetooth speaker", "audio"],
  },

  // ---- Camera & Vlogging Accessories (3) ----
  {
    category: "camera",
    brand: "ICUN",
    fileSlug: "icun-ic7864-tripod",
    title: "ICUN IC-7864 Tripod Stand",
    price: 2950,
    priceConfidence: "RESEARCHED - exact match found for this ICUN IC-7864 tripod listed around Rs 2,950",
    features: "Adjustable Height, Phone Clip Mount, Lightweight Travel Build, Non-Slip Feet",
    tags: ["tripod", "vlogging", "camera accessories"],
  },
  {
    category: "camera",
    brand: "Jmary",
    fileSlug: "jmary-kp2207-tripod",
    title: "Jmary KP-2207 Tripod Stand",
    price: 3200,
    priceConfidence: "RESEARCHED - exact match found for this Jmary KP-2207 tripod listed around Rs 3,200",
    features: "Adjustable Height, Phone Clip Mount, Lightweight Travel Build, Non-Slip Feet",
    tags: ["tripod", "vlogging", "camera accessories"],
  },
  {
    category: "camera",
    brand: "ICON",
    fileSlug: "icon-k35-wireless-mic",
    title: "ICON K35 Wireless Microphone",
    price: 1999,
    priceConfidence: "RESEARCHED - exact match found for this ICON K35 wireless mic listed around Rs 1,999",
    features: "Wireless Clip-On Lavalier Mic, Plug and Play, Noise Reduction, Rechargeable",
    tags: ["wireless mic", "vlogging", "camera accessories"],
  },
];

function uploadFileToCloudinary(filePath, folder) {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: `zyvron/${folder}`, resource_type: "image" },
      (err, result) => {
        if (err) reject(err);
        else resolve(result.secure_url);
      }
    );
    stream.end(fs.readFileSync(filePath));
  });
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Same numeric-sort-not-lexical-sort, fully-anchored-pattern approach as
// every RONIN import before this one: image 10 must not sort before image
// 2, and "octo-musicpro-350" must not accidentally swallow a near-miss slug
// like "octo-musicpro-350-extra".
function imageFilesFor(fileSlug) {
  const pattern = new RegExp(`^${escapeRegex(fileSlug)}-(\\d+)\\.png$`, "i");
  return fs
    .readdirSync(ASSETS_DIR)
    .map((f) => ({ f, match: f.match(pattern) }))
    .filter((entry) => entry.match)
    .sort((a, b) => parseInt(a.match[1], 10) - parseInt(b.match[1], 10))
    .map((entry) => path.join(ASSETS_DIR, entry.f));
}

async function run() {
  if (!fs.existsSync(ASSETS_DIR)) {
    console.error(`[import:new-catalog-2] Missing folder: ${ASSETS_DIR}`);
    console.error("[import:new-catalog-2] The product photos should already be here - nothing to import without them.");
    process.exit(1);
  }

  if (!cloudinaryConfigured()) {
    console.error(
      "[import:new-catalog-2] Cloudinary isn't configured - add CLOUDINARY_CLOUD_NAME/API_KEY/API_SECRET to server/.env and try again."
    );
    process.exit(1);
  }

  await mongoose.connect(mongoUri);
  console.log("[import:new-catalog-2] connected to MongoDB");

  const categoryDocs = {};
  for (const cat of CATEGORIES) {
    const slug = slugifyCategory(cat.name);
    // eslint-disable-next-line no-await-in-loop
    const doc = await Category.findOneAndUpdate(
      { slug },
      { $setOnInsert: { name: cat.name, slug, icon: cat.icon, image: "", order: 99 } },
      { upsert: true, new: true }
    );
    categoryDocs[cat.key] = doc;
    console.log(`[import:new-catalog-2] category ready: ${doc.name} (${doc._id})`);
  }

  const brandDocs = {};
  for (const name of BRANDS) {
    const slug = slugifyBrand(name);
    // eslint-disable-next-line no-await-in-loop
    const doc = await Brand.findOneAndUpdate(
      { slug },
      { $setOnInsert: { name, slug, logo: "", order: 99 } },
      { upsert: true, new: true }
    );
    brandDocs[name] = doc;
    console.log(`[import:new-catalog-2] brand ready: ${doc.name} (${doc._id})`);
  }

  let created = 0;
  let updated = 0;
  const failures = [];

  for (const item of PRODUCTS) {
    try {
      const files = imageFilesFor(item.fileSlug);
      if (!files.length) {
        failures.push(`${item.title}: no image files found matching "${item.fileSlug}-*.png"`);
        continue;
      }

      console.log(`[import:new-catalog-2] uploading ${files.length} photo(s) for ${item.title}... [${item.priceConfidence}]`);
      const urls = [];
      for (const file of files) {
        // Sequential on purpose: keeps upload order deterministic (urls[0]
        // must stay the cover shot) and avoids firing dozens of uploads at
        // once.
        // eslint-disable-next-line no-await-in-loop
        const url = await uploadFileToCloudinary(file, `products/new-catalog-2`);
        urls.push(url);
      }

      const slug = slugifyTitle(item.fileSlug);
      const featuresList = item.features
        .split(",")
        .map((f) => f.trim())
        .filter(Boolean);

      const doc = {
        title: item.title,
        slug,
        category: categoryDocs[item.category]._id,
        brand: item.brand ? brandDocs[item.brand]._id : null,
        price: item.price,
        image: urls[0],
        images: urls.slice(1),
        description: `${item.title}. ${item.features}.`,
        features: featuresList,
        tags: item.tags,
        stock: 10,
        isActive: true,
      };

      const existed = await Product.exists({ slug });
      await Product.findOneAndUpdate({ slug }, doc, { upsert: true, new: true });
      if (existed) updated += 1;
      else created += 1;
      console.log(`[import:new-catalog-2] ${existed ? "updated" : "created"}: ${doc.title}`);
    } catch (err) {
      failures.push(`${item.title}: ${err.message}`);
    }
  }

  console.log("\n[import:new-catalog-2] ---------------------------------------------");
  console.log(`[import:new-catalog-2] done - ${created} created, ${updated} updated, ${failures.length} failed`);
  if (failures.length) {
    console.log("[import:new-catalog-2] failures:");
    failures.forEach((f) => console.log(`  - ${f}`));
  }
  console.log(
    "[import:new-catalog-2] IMPORTANT: no price list was supplied for this batch. 5 of 11 prices have a solid " +
      "public market anchor (an identical or near-identical product actually listed for sale); the other 6 are " +
      "reasoned market-comparable estimates (see the priceConfidence note printed above each upload, or in this " +
      "file). Review and adjust before relying on these for customer-facing listings."
  );
  console.log(
    "[import:new-catalog-2] NOTE: unlike every RONIN import before this one, stock was set to 10 (not 0) on every " +
      "product per your instruction - these are immediately purchasable at the price above as soon as this finishes."
  );
  console.log(
    "[import:new-catalog-2] NOTE: \"ICUN IC-7864\" (tripod) and \"ICON K35\" (mic) were imported as two separate " +
      "brands - they read as distinct printed names on the packaging, not the same brand misspelled."
  );
  console.log("[import:new-catalog-2] ---------------------------------------------\n");

  await mongoose.disconnect();
}

run().catch((err) => {
  console.error("[import:new-catalog-2] failed", err);
  process.exit(1);
});
