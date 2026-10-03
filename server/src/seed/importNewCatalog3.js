/* eslint-disable no-console */
/**
 * One-time import: "Zyvron NEW CATALOG" - 8 new products (a bike phone
 * holder, a ring light, 3 wireless mics and 3 wired mice) from 20
 * AI-generated product/packaging renders Mohammad supplied in
 * "Zyvron NEW CATALOG.zip" (folders "NO 1".."NO 8", one product per folder).
 *
 * Same brief as the previous batch (NEW CATALOG 2, 2026-10-02): no price
 * list was supplied, so
 *
 *   - PRICES are researched/estimated current Pakistani retail prices, NOT a
 *     supplier quote. Only 3 have a partial public anchor (K8 mic: listed
 *     around Rs 1,600-2,000; HP M10: a "copy edition" listed at Rs 900; MJ33
 *     ring light: Rs 1,350 dropship wholesale, comparable retail ring lights
 *     Rs 1,755-3,500). The other 5 are reasoned estimates from comparable
 *     products because no Pakistani listing for that exact item turned up -
 *     see `priceConfidence` on each product. REVIEW THESE before relying on
 *     them.
 *   - STOCK is 10 on every product (the standing instruction for the NEW
 *     CATALOG batches), not the stock: 0 used in the RONIN imports - so
 *     these are purchasable the moment the script finishes.
 *   - Brand/model was read off the text visible on the packaging renders
 *     (box text, printed model codes, barcodes' PN labels).
 *
 * Brand note: the renders show real third-party brand names (BOYA, HP, Acer,
 * Great Wall). They are listed under the brand printed on the packaging, and
 * descriptions deliberately don't say "original" or "genuine" - how you
 * label stock you didn't source from an authorised distributor is your call.
 *
 * Run this yourself, from the server/ folder, after `npm install`:
 *   node src/seed/importNewCatalog3.js
 *   (or: npm run import:new-catalog-3)
 *
 * It reads your own server/.env for Cloudinary + MongoDB credentials -
 * nothing is hard-coded here.
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

const ASSETS_DIR = path.join(__dirname, "import-assets", "new-catalog-3");

// All three categories already exist (or are created by earlier runs):
// "Mobile Accessories" and "Gaming & PC Accessories" come from seedProducts.js,
// "Camera & Vlogging Accessories" from importNewCatalog2.js. $setOnInsert means
// whichever one is missing gets created and whichever exists is left exactly
// as you've edited it in the admin panel - so this script also works if you
// run it before importNewCatalog2.js.
const CATEGORIES = [
  { key: "mobile", name: "Mobile Accessories", icon: "smartphone" },
  { key: "camera", name: "Camera & Vlogging Accessories", icon: "camera" },
  { key: "pc", name: "Gaming & PC Accessories", icon: "gamepad" },
];

// OCTO already exists from importNewCatalog2.js ($setOnInsert = no-op then).
// BOYA, Acer, HP and Great Wall are new. The K8 mic and the MJ33 ring light
// carry no company name on their packaging, so they stay brand: null.
const BRANDS = ["OCTO", "BOYA", "Acer", "HP", "Great Wall"];

const PRODUCTS = [
  // ---- Mobile Accessories (1) ----
  {
    category: "mobile",
    brand: "OCTO",
    fileSlug: "octo-magna-hold-bike-holder",
    title: "OCTO Magna Hold Bike & Motorcycle Phone Holder (OC-MH006)",
    price: 1899,
    priceConfidence: "ESTIMATED - reasoned from comparable bike/motorcycle phone holders; no exact listing found",
    features: "360 Degree Rotation, Telescopic Adjustment, Silicone Protection, Handlebar Clamp Mount, Universal Phone Fit",
    tags: ["bike phone holder", "motorcycle mount", "mobile accessories"],
  },

  // ---- Camera & Vlogging Accessories (5) ----
  {
    category: "camera",
    brand: null,
    fileSlug: "mj33-rgb-ring-light",
    title: "MJ33 RGB LED Soft Ring Light with Tripod Stand",
    price: 2299,
    priceConfidence: "PARTIAL ANCHOR - MJ33 listed Rs 1,350 dropship wholesale; comparable retail ring lights Rs 1,755-3,500",
    features: "RGB Colour Modes, Stepless Dimming, 360 Degree Rotating Pan Tilt, Phone Holder, USB Powered, Soft Eye-Friendly Light",
    tags: ["ring light", "rgb ring light", "vlogging", "camera accessories"],
  },
  {
    category: "camera",
    brand: "BOYA",
    fileSlug: "boya-by-mw9-wireless-mic",
    title: "BOYA BY-MW9 Wireless Live Microphone",
    price: 3499,
    priceConfidence: "ESTIMATED - no Pakistani listing found for the BY-MW9; reasoned from comparable dual wireless lavalier kits (Rs 3,900-4,900)",
    features: "Dual Wireless Microphones, Plug and Play Receiver, 20 Meter Wireless Reception, Clear Timbre, Highly Sensitive, Furry Windscreens Included",
    tags: ["wireless mic", "lavalier mic", "vlogging", "camera accessories"],
  },
  {
    category: "camera",
    brand: "BOYA",
    fileSlug: "boya-by-mw10-wireless-mic",
    title: "BOYA BY-MW10 Wireless Microphone System with Charging Case",
    price: 4499,
    priceConfidence: "ESTIMATED - no Pakistani listing found for the BY-MW10; reasoned from comparable dual wireless kits with charging case",
    features: "Dual Clip-On Wireless Microphones, Charging Case, Type-C Plug and Play Receiver, Suited to Live Shows, Interviews and Vlogs",
    tags: ["wireless mic", "lavalier mic", "vlogging", "camera accessories"],
  },
  {
    category: "camera",
    brand: null,
    fileSlug: "k8-wireless-microphone",
    title: "K8 Wireless Lavalier Microphone (Type-C)",
    price: 1799,
    priceConfidence: "PARTIAL ANCHOR - K8 wireless mics listed Rs 1,600-2,000 in Pakistan",
    features: "Type-C Plug and Play Receiver, 20 Meter Wireless Reception, HD Sound, Omnidirectional Pick-up, Compact and Portable, Clip and Charging Cable Included",
    tags: ["wireless mic", "lavalier mic", "vlogging", "camera accessories"],
  },

  // ---- Gaming & PC Accessories (3) ----
  {
    category: "pc",
    brand: "Acer",
    fileSlug: "acer-omw214-wired-mouse",
    title: "Acer OMW214 USB Wired Mouse",
    price: 1199,
    priceConfidence: "ESTIMATED - no Pakistani listing found for the OMW214; reasoned from comparable basic wired office mice",
    features: "USB Plug and Play, Optical Sensor, 3 Buttons, 1.35m Cable, Ergonomic Design, Durable Switches",
    tags: ["wired mouse", "usb mouse", "office mouse", "pc accessories"],
  },
  {
    category: "pc",
    brand: "HP",
    fileSlug: "hp-m10-wired-mouse",
    title: "HP M10 USB Wired Mouse",
    price: 1299,
    priceConfidence: "PARTIAL ANCHOR - an HP M10 'copy edition' is listed at Rs 900 in Pakistan; priced above that as the standard HP-branded retail estimate",
    features: "USB Plug and Play, 1000 DPI Optical Sensor, 3 Buttons, Left and Right Hand Use, Works Without a Mousepad",
    tags: ["wired mouse", "usb mouse", "office mouse", "pc accessories"],
  },
  {
    category: "pc",
    brand: "Great Wall",
    fileSlug: "great-wall-cs10-wired-mouse",
    title: "Great Wall CS10 Fashion Business Wired Mouse",
    price: 799,
    priceConfidence: "ESTIMATED - no Pakistani listing found for the CS10; reasoned from entry-level wired office mice",
    features: "Wired USB Office Mouse, 3 Buttons, 1.5m Cable, Lightweight 77g Build",
    tags: ["wired mouse", "usb mouse", "office mouse", "pc accessories"],
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

// One automatic retry per image: the RONIN headphones/neckbands import lost
// a product to a one-off Cloudinary 502, and re-running the whole script
// just to recover from that is a nuisance.
async function uploadWithRetry(filePath, folder) {
  try {
    return await uploadFileToCloudinary(filePath, folder);
  } catch (err) {
    console.log(`[import:new-catalog-3] upload hiccup (${err.message}) - retrying once: ${path.basename(filePath)}`);
    return uploadFileToCloudinary(filePath, folder);
  }
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Numeric sort (image 10 must not sort before image 2) and a fully-anchored
// pattern so "hp-m10-wired-mouse" can't swallow a near-miss slug.
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
    console.error(`[import:new-catalog-3] Missing folder: ${ASSETS_DIR}`);
    console.error("[import:new-catalog-3] The product photos should already be here - nothing to import without them.");
    process.exit(1);
  }

  if (!cloudinaryConfigured()) {
    console.error(
      "[import:new-catalog-3] Cloudinary isn't configured - add CLOUDINARY_CLOUD_NAME/API_KEY/API_SECRET to server/.env and try again."
    );
    process.exit(1);
  }

  await mongoose.connect(mongoUri);
  console.log("[import:new-catalog-3] connected to MongoDB");

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
    console.log(`[import:new-catalog-3] category ready: ${doc.name} (${doc._id})`);
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
    console.log(`[import:new-catalog-3] brand ready: ${doc.name} (${doc._id})`);
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

      console.log(`[import:new-catalog-3] uploading ${files.length} photo(s) for ${item.title}... [${item.priceConfidence}]`);
      const urls = [];
      for (const file of files) {
        // Sequential on purpose: keeps upload order deterministic (urls[0]
        // must stay the cover shot).
        // eslint-disable-next-line no-await-in-loop
        const url = await uploadWithRetry(file, "products/new-catalog-3");
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
      console.log(`[import:new-catalog-3] ${existed ? "updated" : "created"}: ${doc.title}`);
    } catch (err) {
      failures.push(`${item.title}: ${err.message}`);
    }
  }

  console.log("\n[import:new-catalog-3] ---------------------------------------------");
  console.log(`[import:new-catalog-3] done - ${created} created, ${updated} updated, ${failures.length} failed`);
  if (failures.length) {
    console.log("[import:new-catalog-3] failures (safe to just re-run this script - it upserts by slug):");
    failures.forEach((f) => console.log(`  - ${f}`));
  }
  console.log(
    "[import:new-catalog-3] IMPORTANT: no price list was supplied for this batch. Only 3 of 8 prices have a partial " +
      "public anchor; the other 5 are reasoned estimates (see the priceConfidence note printed above each upload). " +
      "Review and adjust before relying on them."
  );
  console.log(
    "[import:new-catalog-3] NOTE: stock is 10 on every product (not 0) - all 8 are purchasable as soon as this finishes."
  );
  console.log(
    "[import:new-catalog-3] NOTE: BOYA / HP / Acer / Great Wall are real third-party brands printed on the packaging " +
      "renders. Descriptions don't claim 'original' or 'genuine' - label your stock accurately."
  );
  console.log("[import:new-catalog-3] ---------------------------------------------\n");

  await mongoose.disconnect();
}

run().catch((err) => {
  console.error("[import:new-catalog-3] failed", err);
  process.exit(1);
});
