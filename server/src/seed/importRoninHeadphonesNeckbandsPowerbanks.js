/* eslint-disable no-console */
/**
 * One-time import: RONIN wholesale Headphones, Neckbands and Powerbanks.
 *
 * Source data: RONIN_Wholesale_Master.xlsx (Mohammad's own spreadsheet,
 * built from RONIN's wholesale rate list dated 01-Sep-2026 plus a re-check
 * of the 58 AI-generated renders in "ZYVRON HEADSET NECK BANDS POWER
 * BANKS.zip"). Unlike the earbuds import, most of these image-to-SKU
 * pairings are the spreadsheet's own LOW-confidence guesses or ambiguous
 * between two SKUs - only 2 of 16 are a confirmed match (visible logo /
 * visible spec feature), 4 more are a reasonable spec/colour match, and the
 * remaining 10 are the sheet's best guess with no vendor confirmation.
 * Mohammad reviewed this breakdown and asked to import all of them anyway
 * (2026-09-30) rather than only the confident ones - see MATCH_CONFIDENCE
 * below for which is which, and the run summary this script prints.
 *
 * Run this yourself, from the server/ folder, after `npm install`:
 *   node src/seed/importRoninHeadphonesNeckbandsPowerbanks.js
 *   (or: npm run import:ronin-hnp)
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
 * review pricing, set real stock, and - for the LOW-confidence ones below -
 * confirm the photo actually matches what you're selling.
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

const ASSETS_ROOT = path.join(__dirname, "import-assets");

// Three categories this run creates/reuses. Same $setOnInsert pattern as
// importRoninEarbuds.js - re-running this script never overwrites a
// category you've since customized in the admin panel.
const CATEGORIES = [
  { key: "headphones", name: "Headphones", icon: "headphones", assetsDir: "ronin-headphones" },
  { key: "neckbands", name: "Neckbands", icon: "headphones", assetsDir: "ronin-neckbands" },
  { key: "powerbanks", name: "Powerbanks", icon: "battery-charging", assetsDir: "ronin-powerbanks" },
];

// Each entry's `confidence` mirrors the "Match Confidence" column in the
// ZYVRON Image Inventory sheet: HIGH = confirmed by visible logo/spec text,
// MEDIUM = spec or colour reasonably consistent, LOW = the sheet's best
// guess only - "verify against physical samples or request labelled
// photos from RONIN before publishing" (the sheet's own words). Mohammad
// asked to import LOW-confidence items too; this field is kept on each
// product only as a comment for future-you, not written to the database.
const PRODUCTS = [
  // ---- Headphones (RONIN wholesale, dated 01-Sep-2026) ----
  {
    category: "headphones",
    fileSlug: "ronin-hp-1500",
    code: "R-1500",
    title: "RONIN R-1500 Over-Ear Headphones",
    price: 3695,
    features: "8 Hours Music Time, Stereo Sound, Dual Device Connectivity",
    confidence: "LOW - guessed navy-blue colourway, not vendor-confirmed",
  },
  {
    category: "headphones",
    fileSlug: "ronin-hp-1505",
    code: "R-1505",
    title: "RONIN R-1505 Over-Ear Headphones",
    price: 3895,
    features: "10 Hours Music Time, Dual Device Connectivity, Soft Wearing Comfort",
    confidence: "LOW - guessed cream/beige colourway, not vendor-confirmed",
  },
  {
    category: "headphones",
    fileSlug: "ronin-hp-1510",
    code: "R-1510",
    title: "RONIN R-1510 Over-Ear Headphones",
    price: 3195,
    features: "10 Hours Music Time, Stereo Sound, Light Weight",
    confidence: "LOW - sheet flagged this image cluster ambiguous between R-1505 and R-1510; assigned here since R-1505 already has its own cluster",
  },
  {
    category: "headphones",
    fileSlug: "ronin-hp-1515",
    code: "R-1515",
    title: "RONIN R-1515 Gaming Headphones",
    price: 6795,
    features: "25ms Low Latency Gaming, Heavy Bass, 40mm Speaker Driver",
    confidence: "MEDIUM - gaming headset design (boom mic + USB dongle) matches the gaming spec",
  },
  {
    category: "headphones",
    fileSlug: "ronin-hp-1520",
    code: "R-1520",
    title: "RONIN R-1520 ANC Headphones",
    price: 4495,
    features: "ANC, 40mm Speaker Driver, Gaming Mode, Dual Device Connectivity",
    confidence: "MEDIUM - ANC control pod visible on the render matches the ANC spec",
  },
  {
    category: "headphones",
    fileSlug: "ronin-hp-1525-rap",
    code: "R-1525",
    title: "RONIN Rap Over-Ear Headphones",
    price: 2995,
    features: "40mm Driver, BT 6.0, Dual Device Connectivity",
    confidence: "HIGH - \"RAP\" is embossed on the headband and legible in the render",
  },

  // ---- Neckbands (RONIN wholesale, dated 01-Sep-2026) ----
  {
    category: "neckbands",
    fileSlug: "ronin-nb-3505-rage",
    code: "R-3505",
    title: "RONIN Rage Neckband Earphones",
    price: 2295,
    features: "Premium Matt Finish, Ergonomic Fit, 10mm Speaker Driver, 12 Hours Music Time",
    confidence: "LOW - guessed pairing, not vendor-confirmed",
  },
  {
    category: "neckbands",
    fileSlug: "ronin-nb-3510-cord",
    code: "R-3510",
    title: "RONIN Cord Neckband Earphones",
    price: 2895,
    features: "Silicon Band, ENC, 12 Hours Music Time, Magnetic Buds, 10m Operating Range",
    confidence: "LOW - guessed pairing (two separate image clusters both guessed this SKU); not vendor-confirmed",
  },
  {
    category: "neckbands",
    fileSlug: "ronin-nb-3515-ocean",
    code: "R-3515",
    title: "RONIN Ocean Neckband Earphones",
    price: 4295,
    features: "Silicon Band, ENC, 150 Hours Music Time, Magnetic Buds, Bass Mode",
    confidence: "MEDIUM - blue silicone band + earhook buds match the colour/spec",
  },

  // ---- Powerbanks (RONIN wholesale, dated 01-Sep-2026) ----
  {
    category: "powerbanks",
    fileSlug: "ronin-pb-4020",
    code: "R-4020",
    title: "RONIN R-4020 Power Bank (10000mAh)",
    price: 3249,
    features: "18W Type-C Lightning Output, 22.5W Hyper Charge",
    confidence: "LOW - guessed pairing, not vendor-confirmed",
  },
  {
    category: "powerbanks",
    fileSlug: "ronin-pb-4025",
    code: "R-4025",
    title: "RONIN R-4025 Power Bank (20000mAh)",
    price: 4595,
    features: "18W Type-C Lightning Output, 22.5W Hyper Charge",
    confidence: "LOW - sheet flagged this image cluster ambiguous between R-4025 and R-4040; same photos used for both (see R-4040 below) until you can tell them apart",
  },
  {
    category: "powerbanks",
    fileSlug: "ronin-pb-4030-mini",
    code: "R-4030",
    title: "RONIN Mini Power Bank (10000mAh)",
    price: 4095,
    features: "22.5W Type-C Cable Output, 20W Type-C Port PD Output",
    confidence: "LOW - guessed pairing, not vendor-confirmed",
  },
  {
    category: "powerbanks",
    fileSlug: "ronin-pb-4040-mini",
    code: "R-4040",
    title: "RONIN Mini Power Bank (20000mAh)",
    price: 6195,
    features: "35W Type-C Cable Output, 27W Lightning Cable Output",
    confidence: "LOW - shares its photo cluster with R-4025 above; the sheet could not tell these two apart from the image alone",
  },
  {
    category: "powerbanks",
    fileSlug: "ronin-pb-4060-magsafe",
    code: "R-4060",
    title: "RONIN MagSafe Power Bank (10000mAh)",
    price: 4695,
    features: "15W Magsafe Wireless Charging, 22.5W Max Output",
    confidence: "HIGH - magnetic charging pad + phone-back shot matches the MagSafe spec",
  },
  {
    category: "powerbanks",
    fileSlug: "ronin-pb-4065",
    code: "R-4065",
    title: "RONIN R-4065 Power Bank (10000mAh)",
    price: 3595,
    features: "PD Fast Charging, 22.5W Max Output",
    confidence: "LOW - guessed pairing, not vendor-confirmed",
  },
  {
    category: "powerbanks",
    fileSlug: "ronin-pb-4070",
    code: "R-4070",
    title: "RONIN R-4070 Power Bank (20000mAh)",
    price: 5595,
    features: "Attached Type-C & iOS Cable, 22.5W Max Output",
    confidence: "MEDIUM - attached-cable design matches the spec; exact colour unconfirmed",
  },
];

// R-4055 is the one SKU from this wholesale sheet that gets skipped, even
// though Mohammad asked to import every guessed match. It's a different
// situation from the LOW-confidence items above: the spreadsheet's own
// Image Inventory tab has no candidate image for R-4055 at all - not even
// a guess - so there's nothing to pair it with. A product needs `image`
// (required by the schema) and there is no photo, confident or not, to
// put there.
const SKIPPED_SKUS = [
  "R-4055 | Powerbank (30000 mAh) (wholesale Rs 8795) - no candidate image anywhere in the 58-image set",
];

// 2 of the 27 image clusters (images #44 and #47 - a black and a white
// "folding AC-plug + powerbank" wedge design) don't correspond to ANY SKU
// on the RONIN wholesale list - the spreadsheet flags this explicitly.
// Not imported because there is no product to attach them to.
const UNMATCHABLE_IMAGE_CLUSTERS = 2;

// 9 more clusters (19 images: headphone clusters at raw image #7, #16, #20;
// neckband cluster at #31; powerbank clusters at #37, #39, #42, #43+#45,
// #55) show a product the spreadsheet itself could not even guess a SKU
// for ("Unclear - single angle only" / "no confident match"). Left unused
// for the same reason - no SKU to attach them to.
const UNGUESSABLE_IMAGE_CLUSTERS = 9;
const UNGUESSABLE_IMAGE_COUNT = 9;

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
// importRoninEarbuds.js: image 10 must not sort before image 2, and
// "ronin-pb-4030-mini" must not accidentally swallow "ronin-pb-4030-mini-x"
// style near-miss slugs.
function imageFilesFor(assetsDir, fileSlug) {
  const dir = path.join(ASSETS_ROOT, assetsDir);
  const pattern = new RegExp(`^${escapeRegex(fileSlug)}-(\\d+)\\.png$`, "i");
  return fs
    .readdirSync(dir)
    .map((f) => ({ f, match: f.match(pattern) }))
    .filter((entry) => entry.match)
    .sort((a, b) => parseInt(a.match[1], 10) - parseInt(b.match[1], 10))
    .map((entry) => path.join(dir, entry.f));
}

async function run() {
  for (const cat of CATEGORIES) {
    const dir = path.join(ASSETS_ROOT, cat.assetsDir);
    if (!fs.existsSync(dir)) {
      console.error(`[import:ronin-hnp] Missing folder: ${dir}`);
      console.error("[import:ronin-hnp] The product photos should already be here - nothing to import without them.");
      process.exit(1);
    }
  }

  if (!cloudinaryConfigured()) {
    console.error(
      "[import:ronin-hnp] Cloudinary isn't configured - add CLOUDINARY_CLOUD_NAME/API_KEY/API_SECRET to server/.env and try again."
    );
    process.exit(1);
  }

  await mongoose.connect(mongoUri);
  console.log("[import:ronin-hnp] connected to MongoDB");

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
    console.log(`[import:ronin-hnp] category ready: ${doc.name} (${doc._id})`);
  }

  // Same RONIN brand the earbuds import uses - $setOnInsert means this is a
  // no-op if it already exists.
  const brandSlug = slugifyBrand("RONIN");
  const brand = await Brand.findOneAndUpdate(
    { slug: brandSlug },
    { $setOnInsert: { name: "RONIN", slug: brandSlug, logo: "", order: 99 } },
    { upsert: true, new: true }
  );
  console.log(`[import:ronin-hnp] brand ready: ${brand.name} (${brand._id})`);

  let created = 0;
  let updated = 0;
  const failures = [];
  const assetsDirByCategory = Object.fromEntries(CATEGORIES.map((c) => [c.key, c.assetsDir]));

  for (const item of PRODUCTS) {
    try {
      const assetsDir = assetsDirByCategory[item.category];
      const files = imageFilesFor(assetsDir, item.fileSlug);
      if (!files.length) {
        failures.push(`${item.title} (${item.code}): no image files found matching "${item.fileSlug}-*.png"`);
        continue;
      }

      console.log(`[import:ronin-hnp] uploading ${files.length} photo(s) for ${item.title}... [${item.confidence}]`);
      const urls = [];
      for (const file of files) {
        // Sequential on purpose: keeps upload order deterministic (urls[0]
        // must stay the cover shot) and avoids firing dozens of uploads at
        // once.
        // eslint-disable-next-line no-await-in-loop
        const url = await uploadFileToCloudinary(file, `products/${assetsDir}`);
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
        brand: brand._id,
        price: item.price,
        image: urls[0],
        images: urls.slice(1),
        description: `${item.title} by RONIN (model ${item.code}). ${item.features}.`,
        features: featuresList,
        tags: [item.category, "ronin", item.category === "headphones" ? "headphones" : item.category === "neckbands" ? "neckband" : "power bank"],
        stock: 0,
        isActive: true,
      };

      const existed = await Product.exists({ slug });
      await Product.findOneAndUpdate({ slug }, doc, { upsert: true, new: true });
      if (existed) updated += 1;
      else created += 1;
      console.log(`[import:ronin-hnp] ${existed ? "updated" : "created"}: ${doc.title}`);
    } catch (err) {
      failures.push(`${item.title} (${item.code}): ${err.message}`);
    }
  }

  console.log("\n[import:ronin-hnp] ---------------------------------------------");
  console.log(`[import:ronin-hnp] done - ${created} created, ${updated} updated, ${failures.length} failed`);
  if (failures.length) {
    console.log("[import:ronin-hnp] failures:");
    failures.forEach((f) => console.log(`  - ${f}`));
  }
  console.log(`[import:ronin-hnp] ${SKIPPED_SKUS.length} RONIN SKU skipped - no candidate photo at all:`);
  SKIPPED_SKUS.forEach((s) => console.log(`  - ${s}`));
  console.log(
    `[import:ronin-hnp] ${UNMATCHABLE_IMAGE_CLUSTERS} image clusters left unused - they don't match any RONIN SKU on the price list.`
  );
  console.log(
    `[import:ronin-hnp] ${UNGUESSABLE_IMAGE_CLUSTERS} more image clusters (${UNGUESSABLE_IMAGE_COUNT} images) left unused - the source spreadsheet couldn't even guess a SKU for them.`
  );
  console.log(
    "[import:ronin-hnp] REMINDER: most of these image-to-SKU pairings are unverified guesses, not vendor-confirmed " +
      "(2 of 16 are confirmed, 4 are a reasonable match, 10 are a best guess only - see the confidence note printed " +
      "above each upload, or MATCH_CONFIDENCE comments in this file). Verify against physical samples or RONIN's own " +
      "labelled photos before you rely on these for customer-facing listings."
  );
  console.log(
    "[import:ronin-hnp] IMPORTANT: imported prices are RONIN's WHOLESALE cost, not your retail price. " +
      "Every product was created with isActive: true (visible/editable in your admin panel) but " +
      "stock: 0 (not purchasable) until you review pricing, set real stock, and confirm the photos."
  );
  console.log("[import:ronin-hnp] ---------------------------------------------\n");

  await mongoose.disconnect();
}

run().catch((err) => {
  console.error("[import:ronin-hnp] failed", err);
  process.exit(1);
});
