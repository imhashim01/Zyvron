/* eslint-disable no-console */
/**
 * One-time import: RONIN wholesale Car Chargers, Clip-On Chargers and Wall
 * Chargers.
 *
 * Source data: RONIN_CarCharger_ZYVRON_Image_Groups.xlsx (Mohammad's own
 * spreadsheet, built from RONIN's wholesale rate list dated 01-Sep-2026
 * pages 8-10, cross-referenced against the 31 AI-generated renders in
 * "ZYVRON CAR CHARGER AND MOB.zip"). Unlike the earlier headphones/
 * neckbands/powerbanks import, this spreadsheet's own "ZYVRON Image Groups"
 * sheet is titled "Rechecked Image Groups" and pairs every one of the 31
 * images to a specific wholesale SKU with no confidence tiering - every
 * group was independently re-verified here against the actual renders
 * (visible "RONIN" branding, "AUTO-ID 2.4A" / "20W" / "30W" / "PD30W/QC18W"
 * printed text, the Lightning connector's "RONIN" imprint, and the 8-port
 * tower's C1-C4/A1-A4 layout + matching rear nameplate) before writing this
 * script, so every match below is confirmed, not guessed.
 *
 * Run this yourself, from the server/ folder, after `npm install`:
 *   node src/seed/importRoninChargers.js
 *   (or: npm run import:ronin-chargers)
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
 * review pricing and set real stock.
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
const ASSETS_DIR = "ronin-chargers";

// Single new category for this run. All 10 products below - clip-on
// battery boosters, a car cigarette-lighter charger, wall chargers and a
// desktop charging station - are all, literally, RONIN chargers (the
// source price list itself is titled "Clip & Car Chargers + related
// Chargers"), so one category keeps the storefront simple rather than
// splintering into Car Chargers / Wall Chargers / Clip Chargers. Same
// $setOnInsert pattern as every earlier RONIN import - re-running this
// script never overwrites a category you've since customized in the admin
// panel. Mention it to Mohammad if he'd rather split it later.
const CATEGORY = { name: "Chargers", icon: "battery-charging" };

const PRODUCTS = [
  {
    fileSlug: "ronin-clip-666-android",
    code: "R-666",
    title: "RONIN R-666 Clip-On Battery Charger (Android)",
    price: 419,
    features: "2.4Amp Output, Anti Rust Connector, Over Voltage Protection, Keychain Loop, Crocodile Clips",
  },
  {
    fileSlug: "ronin-clip-666-2in1",
    code: "R-666",
    title: "RONIN R-666 2-in-1 Clip-On Charger (Android & Type-C)",
    price: 499,
    features: "3.0Amp Output, Anti Rust Connector, Over Voltage Protection, Micro-USB + Type-C Tips, Crocodile Clips",
  },
  {
    fileSlug: "ronin-clip-777-android",
    code: "R-777",
    title: "RONIN R-777 Clip-On Battery Charger (Android)",
    price: 399,
    features: "2.4Amp Total Output, Anti Rust Connectors, Crocodile Clips",
  },
  {
    fileSlug: "ronin-car-2505",
    code: "R-2505",
    title: "RONIN R-2505 Car Charger",
    price: 875,
    features: "Quick Charge 18W Max, 48W Max Output, Carbon-Fibre Finish, Dual Port",
  },
  {
    fileSlug: "ronin-wall-615-android",
    code: "R-615",
    title: "RONIN R-615 Wall Charger (Android)",
    price: 599,
    features: "2.4 Amp, Auto-ID Feature, Over Voltage Protection, Dual USB Port, Braided Micro-USB Cable Included",
  },
  {
    fileSlug: "ronin-wall-615-typec",
    code: "R-615",
    title: "RONIN R-615 Wall Charger (Type-C)",
    price: 629,
    features: "3.0Amp, Auto-ID Feature, Over Voltage Protection, Dual USB Port, Braided Type-C Cable Included",
  },
  {
    fileSlug: "ronin-wall-615-iphone",
    code: "R-615",
    title: "RONIN R-615 Wall Charger (iPhone)",
    price: 659,
    features: "2.4 Amp, Auto-ID Feature, Over Voltage Protection, Dual USB Port, Braided Lightning Cable Included",
  },
  {
    fileSlug: "ronin-gan-6025",
    code: "R-6025",
    title: "RONIN R-6025 GaN Wall Charger (20W)",
    price: 1145,
    features: "20W GaN, PD20W + QC18W Ports, Compact Dual Port",
    dockOnly: true,
  },
  {
    fileSlug: "ronin-gan-6030",
    code: "R-6030",
    title: "RONIN R-6030 GaN Wall Charger (30W)",
    price: 1449,
    features: "30W GaN, PD30W + QC18W Ports, Compact Dual Port",
    dockOnly: true,
  },
  {
    fileSlug: "ronin-station-6040",
    code: "R-6040",
    title: "RONIN R-6040 8-in-1 Desktop Charging Station (140W)",
    price: 6795,
    features: "140W Max Total Output, 8 Ports (4x USB-C + 4x USB-A), Up to 65W Single-Port Output",
    dockOnly: true,
  },
];

// 7 more SKUs on RONIN's own wholesale price list (pages 8-10) have no
// candidate photo anywhere in the 31-image set, so nothing was created for
// them - they were never in scope for this run, not a failure.
const SKIPPED_SKUS = [
  "R-666 | Charger (Type-C) - wholesale Rs 459",
  "R-666 | 45W Charger (Type-C) - wholesale Rs 549",
  "R-6050 | Charger (20W Max, *Only Dock) - wholesale Rs 895",
  "R-6055 | Charger (2.4amp Auto ID, *Only Dock) - wholesale Rs 435",
  "R-6060 | Charger (GaN 33W, Super VOOC, *Only Dock) - wholesale Rs 1695",
  "R-6065 | Charger (GaN 65W, PD+QC+AFC, *Only Dock) - wholesale Rs 2745",
  "R-6070 | Wizard X (45W, Super VOOC, PD/QC, GaN, AFC, *Only Dock) - wholesale Rs 1845",
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

// Same numeric-sort-not-lexical-sort, fully-anchored-pattern approach as the
// earlier RONIN imports: image 10 must not sort before image 2, and
// "ronin-gan-6025" must not accidentally swallow a near-miss slug.
function imageFilesFor(fileSlug) {
  const dir = path.join(ASSETS_ROOT, ASSETS_DIR);
  const pattern = new RegExp(`^${escapeRegex(fileSlug)}-(\\d+)\\.png$`, "i");
  return fs
    .readdirSync(dir)
    .map((f) => ({ f, match: f.match(pattern) }))
    .filter((entry) => entry.match)
    .sort((a, b) => parseInt(a.match[1], 10) - parseInt(b.match[1], 10))
    .map((entry) => path.join(dir, entry.f));
}

async function run() {
  const dir = path.join(ASSETS_ROOT, ASSETS_DIR);
  if (!fs.existsSync(dir)) {
    console.error(`[import:ronin-chargers] Missing folder: ${dir}`);
    console.error("[import:ronin-chargers] The product photos should already be here - nothing to import without them.");
    process.exit(1);
  }

  if (!cloudinaryConfigured()) {
    console.error(
      "[import:ronin-chargers] Cloudinary isn't configured - add CLOUDINARY_CLOUD_NAME/API_KEY/API_SECRET to server/.env and try again."
    );
    process.exit(1);
  }

  await mongoose.connect(mongoUri);
  console.log("[import:ronin-chargers] connected to MongoDB");

  const categorySlug = slugifyCategory(CATEGORY.name);
  const category = await Category.findOneAndUpdate(
    { slug: categorySlug },
    { $setOnInsert: { name: CATEGORY.name, slug: categorySlug, icon: CATEGORY.icon, image: "", order: 99 } },
    { upsert: true, new: true }
  );
  console.log(`[import:ronin-chargers] category ready: ${category.name} (${category._id})`);

  // Same RONIN brand every earlier import uses - $setOnInsert means this is
  // a no-op if it already exists.
  const brandSlug = slugifyBrand("RONIN");
  const brand = await Brand.findOneAndUpdate(
    { slug: brandSlug },
    { $setOnInsert: { name: "RONIN", slug: brandSlug, logo: "", order: 99 } },
    { upsert: true, new: true }
  );
  console.log(`[import:ronin-chargers] brand ready: ${brand.name} (${brand._id})`);

  let created = 0;
  let updated = 0;
  const failures = [];

  for (const item of PRODUCTS) {
    try {
      const files = imageFilesFor(item.fileSlug);
      if (!files.length) {
        failures.push(`${item.title} (${item.code}): no image files found matching "${item.fileSlug}-*.png"`);
        continue;
      }

      console.log(`[import:ronin-chargers] uploading ${files.length} photo(s) for ${item.title}...`);
      const urls = [];
      for (const file of files) {
        // Sequential on purpose: keeps upload order deterministic (urls[0]
        // must stay the cover shot) and avoids firing dozens of uploads at
        // once.
        // eslint-disable-next-line no-await-in-loop
        const url = await uploadFileToCloudinary(file, `products/${ASSETS_DIR}`);
        urls.push(url);
      }

      const slug = slugifyTitle(item.fileSlug);
      const featuresList = item.features
        .split(",")
        .map((f) => f.trim())
        .filter(Boolean);

      const dockNote = item.dockOnly
        ? " Sold as charger/dock only - no cable included in the box."
        : "";

      const doc = {
        title: item.title,
        slug,
        category: category._id,
        brand: brand._id,
        price: item.price,
        image: urls[0],
        images: urls.slice(1),
        description: `${item.title} by RONIN (model ${item.code}). ${item.features}.${dockNote}`,
        features: featuresList,
        tags: ["chargers", "ronin", "car charger", "wall charger"],
        stock: 0,
        isActive: true,
      };

      const existed = await Product.exists({ slug });
      await Product.findOneAndUpdate({ slug }, doc, { upsert: true, new: true });
      if (existed) updated += 1;
      else created += 1;
      console.log(`[import:ronin-chargers] ${existed ? "updated" : "created"}: ${doc.title}`);
    } catch (err) {
      failures.push(`${item.title} (${item.code}): ${err.message}`);
    }
  }

  console.log("\n[import:ronin-chargers] ---------------------------------------------");
  console.log(`[import:ronin-chargers] done - ${created} created, ${updated} updated, ${failures.length} failed`);
  if (failures.length) {
    console.log("[import:ronin-chargers] failures:");
    failures.forEach((f) => console.log(`  - ${f}`));
  }
  console.log(`[import:ronin-chargers] ${SKIPPED_SKUS.length} RONIN SKU(s) skipped - no candidate photo in this image set:`);
  SKIPPED_SKUS.forEach((s) => console.log(`  - ${s}`));
  console.log(
    "[import:ronin-chargers] IMPORTANT: imported prices are RONIN's WHOLESALE cost, not your retail price. " +
      "Every product was created with isActive: true (visible/editable in your admin panel) but " +
      "stock: 0 (not purchasable) until you review pricing and set real stock."
  );
  console.log("[import:ronin-chargers] ---------------------------------------------\n");

  await mongoose.disconnect();
}

run().catch((err) => {
  console.error("[import:ronin-chargers] failed", err);
  process.exit(1);
});
