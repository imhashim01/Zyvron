const mongoose = require("mongoose");
const Product = require("../models/Product");

function serializeCart(user) {
  // A populated cart entry whose product no longer resolves (deleted, or
  // deactivated after match:{isActive:true} below) comes back with
  // product === null — drop those rather than showing a broken row.
  const items = (user.cart || [])
    .filter((item) => item.product)
    .map((item) => ({ product: item.product, quantity: item.quantity }));
  return { items };
}

/**
 * Normalizes a client-supplied items array into a deduped, valid list:
 * collapses duplicate product ids (summing their quantities), drops
 * malformed ids, and drops ids that don't match a real, active product —
 * so a stale/removed product a device still has locally can never be
 * written back into the account cart.
 */
async function normalizeItems(rawItems) {
  const merged = new Map();
  for (const raw of Array.isArray(rawItems) ? rawItems : []) {
    const id = String(raw?.product || "");
    if (!mongoose.isValidObjectId(id)) continue;
    const qty = Math.max(1, Math.floor(Number(raw?.quantity)) || 1);
    merged.set(id, (merged.get(id) || 0) + qty);
  }
  if (merged.size === 0) return [];

  const ids = [...merged.keys()];
  const activeProducts = await Product.find({ _id: { $in: ids }, isActive: true }).select("_id");
  const activeIds = new Set(activeProducts.map((p) => String(p._id)));

  return ids.filter((id) => activeIds.has(id)).map((id) => ({ product: id, quantity: merged.get(id) }));
}

async function populateAndRespond(res, user) {
  const populated = await user.populate({ path: "cart.product", match: { isActive: true } });
  res.status(200).json(serializeCart(populated));
}

async function getCart(req, res, next) {
  try {
    await populateAndRespond(res, req.user);
  } catch (err) {
    next(err);
  }
}

/** Replaces the account's cart outright with whatever this device now has. */
async function replaceCart(req, res, next) {
  try {
    req.user.cart = await normalizeItems(req.body.items);
    await req.user.save();
    await populateAndRespond(res, req.user);
  } catch (err) {
    next(err);
  }
}

/**
 * Folds a device's local cart into the account's server-side cart (summing
 * quantities for any product both sides already have), rather than
 * overwriting one with the other. Intended for the one-time sync right
 * after login/register, when the device may have built up a cart before
 * signing in.
 */
async function mergeCart(req, res, next) {
  try {
    const incoming = await normalizeItems(req.body.items);
    const existing = new Map((req.user.cart || []).map((i) => [String(i.product), i.quantity]));
    for (const { product, quantity } of incoming) {
      existing.set(product, (existing.get(product) || 0) + quantity);
    }
    req.user.cart = [...existing.entries()].map(([product, quantity]) => ({ product, quantity }));
    await req.user.save();
    await populateAndRespond(res, req.user);
  } catch (err) {
    next(err);
  }
}

module.exports = { getCart, replaceCart, mergeCart };
