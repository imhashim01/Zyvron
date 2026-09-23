const mongoose = require("mongoose");
const Product = require("../models/Product");

function serializeWishlist(user) {
  return { ids: (user.wishlist || []).map((id) => String(id)) };
}

/** Dedupes, drops malformed ids, and drops ids that aren't a real, active product. */
async function normalizeIds(rawIds) {
  const ids = [...new Set((Array.isArray(rawIds) ? rawIds : []).map(String))].filter((id) =>
    mongoose.isValidObjectId(id)
  );
  if (ids.length === 0) return [];

  const activeProducts = await Product.find({ _id: { $in: ids }, isActive: true }).select("_id");
  const activeIds = new Set(activeProducts.map((p) => String(p._id)));
  return ids.filter((id) => activeIds.has(id));
}

async function getWishlist(req, res, next) {
  try {
    res.status(200).json(serializeWishlist(req.user));
  } catch (err) {
    next(err);
  }
}

/** Replaces the account's wishlist outright with whatever this device now has. */
async function replaceWishlist(req, res, next) {
  try {
    req.user.wishlist = await normalizeIds(req.body.ids);
    await req.user.save();
    res.status(200).json(serializeWishlist(req.user));
  } catch (err) {
    next(err);
  }
}

/**
 * Unions a device's local wishlist into the account's server-side wishlist.
 * Intended for the one-time sync right after login/register.
 */
async function mergeWishlist(req, res, next) {
  try {
    const incoming = await normalizeIds(req.body.ids);
    const merged = new Set((req.user.wishlist || []).map(String));
    incoming.forEach((id) => merged.add(id));
    req.user.wishlist = [...merged];
    await req.user.save();
    res.status(200).json(serializeWishlist(req.user));
  } catch (err) {
    next(err);
  }
}

module.exports = { getWishlist, replaceWishlist, mergeWishlist };
