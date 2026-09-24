/* eslint-disable no-console */
require("dotenv").config();
const mongoose = require("mongoose");
const { mongoUri } = require("../config/env");
const Product = require("../models/Product");
const Review = require("../models/Review");
const User = require("../models/User");

/**
 * One-time cleanup for the old soft-delete behavior. Earlier,
 * productController.remove() only set isActive:false instead of actually
 * deleting the document - and since every product listing (including the
 * admin panel's own) filters isActive:true, a "deleted" product became
 * invisible in the UI while still sitting in MongoDB forever, with no way
 * to actually remove it. remove() now hard-deletes going forward (see
 * productController.js) - this script clears out anything already stuck
 * from before that fix. Safe to run more than once: once there are no
 * isActive:false products left, it's a no-op.
 */
async function run() {
  await mongoose.connect(mongoUri);
  console.log("[cleanup:inactive-products] connected");

  const inactive = await Product.find({ isActive: false }).select("_id title");
  if (inactive.length === 0) {
    console.log("[cleanup:inactive-products] nothing to clean up - no leftover inactive products found.");
    await mongoose.disconnect();
    return;
  }

  const ids = inactive.map((p) => p._id);
  console.log(`[cleanup:inactive-products] removing ${ids.length} leftover product(s):`);
  inactive.forEach((p) => console.log(`  - ${p.title} (${p._id})`));

  const [productResult, reviewResult, userResult] = await Promise.all([
    Product.deleteMany({ _id: { $in: ids } }),
    Review.deleteMany({ product: { $in: ids } }),
    User.updateMany({}, { $pull: { cart: { product: { $in: ids } }, wishlist: { $in: ids } } }),
  ]);

  console.log(
    `[cleanup:inactive-products] done - removed ${productResult.deletedCount} product(s), ` +
      `${reviewResult.deletedCount} orphaned review(s), and cleaned stale cart/wishlist ` +
      `entries from ${userResult.modifiedCount} user account(s).`
  );

  await mongoose.disconnect();
}

run().catch((err) => {
  console.error("[cleanup:inactive-products] failed", err);
  process.exit(1);
});
