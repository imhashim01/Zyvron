const Coupon = require("../models/Coupon");

function computeDiscount(coupon, subtotal) {
  if (coupon.type === "percent") return Math.round(subtotal * (coupon.value / 100));
  return Math.min(coupon.value, subtotal);
}

/** Shared validation used by both the public /validate endpoint and order creation. Never mutates. */
async function checkCoupon(code, subtotal) {
  if (!code) return { valid: false, message: "No coupon code provided" };
  const coupon = await Coupon.findOne({ code: String(code).toUpperCase() });
  if (!coupon) return { valid: false, message: "Coupon not found" };
  if (!coupon.active) return { valid: false, message: "Coupon is not active" };
  if (coupon.expiresAt && coupon.expiresAt < new Date()) return { valid: false, message: "Coupon has expired" };
  if (coupon.usedCount >= coupon.usageLimit) return { valid: false, message: "Coupon usage limit reached" };
  if (coupon.minOrderAmount && subtotal < coupon.minOrderAmount) {
    return { valid: false, message: `Minimum order amount is Rs. ${coupon.minOrderAmount}` };
  }
  const discount = computeDiscount(coupon, subtotal);
  return { valid: true, coupon, discount };
}

async function validate(req, res, next) {
  try {
    const { code, subtotal } = req.body;
    const result = await checkCoupon(code, Number(subtotal) || 0);
    if (!result.valid) return res.status(200).json({ valid: false, message: result.message });
    res.status(200).json({
      valid: true,
      type: result.coupon.type,
      value: result.coupon.value,
      discount: result.discount,
    });
  } catch (err) {
    next(err);
  }
}

async function list(req, res, next) {
  try {
    const coupons = await Coupon.find().sort({ createdAt: -1 });
    res.status(200).json(coupons);
  } catch (err) {
    next(err);
  }
}

async function create(req, res, next) {
  try {
    const coupon = await Coupon.create(req.body);
    res.status(201).json(coupon);
  } catch (err) {
    next(err);
  }
}

async function update(req, res, next) {
  try {
    const coupon = await Coupon.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!coupon) return res.status(404).json({ message: "Coupon not found" });
    res.status(200).json(coupon);
  } catch (err) {
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    const coupon = await Coupon.findByIdAndDelete(req.params.id);
    if (!coupon) return res.status(404).json({ message: "Coupon not found" });
    res.status(200).json({ message: "Coupon deleted" });
  } catch (err) {
    next(err);
  }
}

module.exports = { validate, list, create, update, remove, checkCoupon };
