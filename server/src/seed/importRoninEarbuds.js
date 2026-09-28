/* eslint-disable no-console */
/**
 * One-time import: RONIN wholesale earbuds catalog.
 *
 * Source data: RONIN_Earbuds_and_ZYVRON_Image_Groups.xlsx (Mohammad's own
 * spreadsheet, built from RONIN's wholesale rate list plus a re-check of the
 * 76 AI-generated renders in "ZYVRON FINAL IMAGES ALL BUDS.zip"). Only the
 * 16 SKUs that have a confidently-matched photo group are imported here -
 * see SKIPPED_SKUS below and the run summary this script prints.
 *
 * Run this yourself, from the server/ folder, after `npm install`:
 *   node src/seed/importRoninEarbuds.js
 *   (or: npm run import:ronin-earbuds)
 *
 * It reads your own server/.env for Cloudinary + MongoDB credentials -
 * nothing is hard-coded here, and this script has never been run against
 * your database from anywhere but your own machine.
 *
 * IMPORTANT - the prices below are RONIN's WHOLESALE cost, not a retail
 * price. Every product is created with isActive: true (so it shows up in
 * your admin panel - the admin panel and the public storefront both read
 * the same isActive-filtered endpoint, so isActive: false would hide these
 * from you too) but stock: 0, so nothing is actually purchasable until you
 * review pricing and set real stock yourself.
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

const ASSETS_DIR = path.join(__dirname, "import-assets", "ronin-earbuds");

// The 16 RONIN SKUs with a confidently-matched photo group. Name/code/price
// /features come straight from the "RONIN Earbuds Price List" sheet; which
// images belong to which product comes from the "ZYVRON Image Groups" sheet
// in RONIN_Earbuds_and_ZYVRON_Image_Groups.xlsx. fileSlug matches the
// filenames already copied into ./import-assets/ronin-earbuds/
// (e.g. ronin-mashion-1.png, ronin-mashion-2.png, ...).
const PRODUCTS = [
  { fileSlug: "ronin-mashion", code: "R-190", name: "Mashion", price: 3395, features: "05 Hours Playtime, LED Display, 13mm Speaker Driver" },
  { fileSlug: "ronin-mashion-pro", code: "R-7140", name: "Mashion Pro", price: 3595, features: "Software Based Earbuds, 5 Hours Music Time" },
  { fileSlug: "ronin-mystique", code: "R-7010", name: "Mystique", price: 4295, features: "13mm Speaker, Digital Display, ANC + ENC Mode" },
  { fileSlug: "ronin-dominator", code: "R-7035", name: "Dominator", price: 5595, features: "40ms Low Latency Gaming, Premium Metallic Case" },
  { fileSlug: "ronin-snap", code: "R-7070", name: "Snap", price: 3595, features: "Swipe n Play Button Case, Half-In Ear Design" },
  { fileSlug: "ronin-iron-edge", code: "R-7090", name: "Iron Edge", price: 6595, features: "40ms Low Latency, 360° Spin Rugged Heavy Metal, Gaming Mode" },
  { fileSlug: "ronin-lucid", code: "R-7135", name: "Lucid", price: 4695, features: "Dual Device Connectivity, ENC, 80 Hours Standby Time" },
  { fileSlug: "ronin-reactor-x", code: "R-7095", name: "Reactor X", price: 5995, features: "28ms Industry's Lowest Latency, ANC, ENC & Gaming Mode" },
  { fileSlug: "ronin-vector", code: "R-7120", name: "Vector", price: 4495, features: "ANC & ENC, Digital Display, Crystal Clear Calling" },
  { fileSlug: "ronin-nox", code: "R-7080", name: "NOX", price: 4695, features: "Software Based Earbuds, Dual Connectivity, ANC & ENC" },
  { fileSlug: "ronin-clutch-pro", code: "R-7165", name: "Clutch Pro", price: 5195, features: "Transparent Finish, Dedicated Gaming Mode, BT 6.0, ENC" },
  { fileSlug: "ronin-eclipse", code: "R-7065", name: "Eclipse", price: 5495, features: "App Controlled, Hyper ANC and ENC, 80 Hours Total Battery Backup" },
  { fileSlug: "ronin-pebble", code: "R-7130", name: "Pebble", price: 4995, features: "ANC & ENC, Stereo Sound, 13mm Speaker Driver" },
  { fileSlug: "ronin-scroll", code: "R-7160", name: "Scroll", price: 4995, features: "ANC+ENC, Smart Scroll, Dual Device Connectivity, 6 Hrs Music Time" },
  { fileSlug: "ronin-earflip", code: "R-7150", name: "Earflip", price: 4895, features: "Open Wearable Stereo, ENC, Bluetooth 6.0, 13mm Driver" },
  { fileSlug: "ronin-glacier", code: "R-7110", name: "Glacier", price: 4495, features: "Wireless Charging Earbuds, Dual Device Connectivity, 13mm Speaker Driver" },
];

// SKUs from the same RONIN price list that have NO confidently-matched
// photo anywhere in the 76-image set. Intentionally not imported - a
// product with no real photo to show would just get a placeholder, and
// that's worse than not listing it at all.
const SKIPPED_SKUS = [
  "R-520 | Dynasty (wholesale Rs 4095)",
  "R-740 | Vivid (wholesale Rs 3495)",
  "R-7075 | Vesper (wholesale Rs 4695)",
  "R-7085 | VOX (wholesale Rs 4995)",
  "R-7105 | Warrior (wholesale Rs 4695)",
  "R-7115 | Evolve (wholesale Rs 3495)",
  "R-7125 | Mist Pro (wholesale Rs 4395)",
  "R-7145 | Glaze (wholesale Rs 4595)",
];

// 8 of the 25 photo groups in the spreadsheet (19 images total) had no
// confident match to any RONIN SKU - those images were never copied into
// import-assets/, so there's nothing for this script to do with them.
const UNIDENTIFIED_IMAGE_GROUPS = 8;
const UNIDENTIFIED_IMAGE_COUNT = 19;

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

// This product's image files, in order (ronin-mashion-1.png, -2.png, ...),
// sorted numerically rather than lexically so image 10 doesn't sort before
// image 2. The pattern is fully anchored (^slug-<digits>.png$) rather than
// a startsWith() prefix check - "ronin-mashion" is itself a prefix of
// "ronin-mashion-pro", so a loose prefix match would wrongly pull
// ronin-mashion-pro's photos into the plain "Mashion" product.
// The first matched file becomes the product's cover `image`; the rest
// become its `images` gallery - see client/.../product/[slug]/page.js,
// which builds the gallery as [product.image, ...product.images].
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
    console.error(`[import:ronin] Missing folder: ${ASSETS_DIR}`);
    console.error("[import:ronin] The product photos should already be here - nothing to import without them.");
    process.exit(1);
  }

  if (!cloudinaryConfigured()) {
    console.error(
      "[import:ronin] Cloudinary isn't configured - add CLOUDINARY_CLOUD_NAME/API_KEY/API_SECRET to server/.env and try again."
    );
    process.exit(1);
  }

  await mongoose.connect(mongoUri);
  console.log("[import:ronin] connected to MongoDB");

  // $setOnInsert (not a plain upsert doc) so re-running this script never
  // overwrites a category/brand you've since customized in the admin panel.
  const categorySlug = slugifyCategory("Earbuds");
  const category = await Category.findOneAndUpdate(
    { slug: categorySlug },
    { $setOnInsert: { name: "Earbuds", slug: categorySlug, icon: "headphones", image: "", order: 99 } },
    { upsert: true, new: true }
  );
  console.log(`[import:ronin] category ready: ${category.name} (${category._id})`);

  const brandSlug = slugifyBrand("RONIN");
  const brand = await Brand.findOneAndUpdate(
    { slug: brandSlug },
    { $setOnInsert: { name: "RONIN", slug: brandSlug, logo: "", order: 99 } },
    { upsert: true, new: true }
  );
  console.log(`[import:ronin] brand ready: ${brand.name} (${brand._id})`);

  let created = 0;
  let updated = 0;
  const failures = [];

  for (const item of PRODUCTS) {
    try {
      const files = imageFilesFor(item.fileSlug);
      if (!files.length) {
        failures.push(`${item.name} (${item.code}): no image files found matching "${item.fileSlug}-*.png"`);
        continue;
      }

      console.log(`[import:ronin] uploading ${files.length} photo(s) for ${item.name}...`);
      const urls = [];
      for (const file of files) {
        // Sequential on purpose: keeps upload order deterministic (urls[0]
        // must stay the cover shot) and avoids firing 57 uploads at once.
        // eslint-disable-next-line no-await-in-loop
        const url = await uploadFileToCloudinary(file, "products/ronin-earbuds");
        urls.push(url);
      }

      const slug = slugifyTitle(item.fileSlug);
      const featuresList = item.features
        .split(",")
        .map((f) => f.trim())
        .filter(Boolean);

      const doc = {
        title: `RONIN ${item.name} True Wireless Earbuds`,
        slug,
        category: category._id,
        brand: brand._id,
        price: item.price,
        image: urls[0],
        images: urls.slice(1),
        description: `${item.name} true wireless earbuds by RONIN (model ${item.code}). ${item.features}.`,
        features: featuresList,
        tags: ["earbuds", "ronin", "wireless earbuds", "bluetooth", "tws"],
        stock: 0,
        isActive: true,
      };

      const existed = await Product.exists({ slug });
      await Product.findOneAndUpdate({ slug }, doc, { upsert: true, new: true });
      if (existed) updated += 1;
      else created += 1;
      console.log(`[import:ronin] ${existed ? "updated" : "created"}: ${doc.title}`);
    } catch (err) {
      failures.push(`${item.name} (${item.code}): ${err.message}`);
    }
  }

  console.log("\n[import:ronin] ---------------------------------------------");
  console.log(`[import:ronin] done - ${created} created, ${updated} updated, ${failures.length} failed`);
  if (failures.length) {
    console.log("[import:ronin] failures:");
    failures.forEach((f) => console.log(`  - ${f}`));
  }
  console.log(`[import:ronin] ${SKIPPED_SKUS.length} RONIN SKUs skipped - no matching photo in the image set:`);
  SKIPPED_SKUS.forEach((s) => console.log(`  - ${s}`));
  console.log(
    `[import:ronin] ${UNIDENTIFIED_IMAGE_GROUPS} photo groups (${UNIDENTIFIED_IMAGE_COUNT} images) were left unused - no confident match to a RONIN SKU.`
  );
  console.log(
    "[import:ronin] IMPORTANT: imported prices are RONIN's WHOLESALE cost, not your retail price. " +
      "Every product was created with isActive: true (visible/editable in your admin panel) but " +
      "stock: 0 (not purchasable) until you review pricing and set real stock."
  );
  console.log("[import:ronin] ---------------------------------------------\n");

  await mongoose.disconnect();
}

run().catch((err) => {
  console.error("[import:ronin] failed", err);
  process.exit(1);
});
