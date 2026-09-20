const express = require("express");
const rateLimit = require("express-rate-limit");
const coupons = require("../controllers/couponController");
const { validate } = require("../middleware/validate");
const couponValidators = require("../validators/couponValidators");

const router = express.Router();

const validateLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 30, standardHeaders: true, legacyHeaders: false });

router.post("/validate", validateLimiter, couponValidators.validateCode, validate, coupons.validate);

module.exports = router;
