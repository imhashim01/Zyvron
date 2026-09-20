const express = require("express");
const rateLimit = require("express-rate-limit");
const orders = require("../controllers/orderController");
const { protect, attachUserIfPresent } = require("../middleware/auth");
const { validate } = require("../middleware/validate");
const orderValidators = require("../validators/orderValidators");

const router = express.Router();

const trackLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 30, standardHeaders: true, legacyHeaders: false });

router.post("/", attachUserIfPresent, orderValidators.create, validate, orders.create);
router.get("/track/:orderNumber", trackLimiter, orderValidators.track, validate, orders.track);
router.get("/mine", protect, orders.mine);

module.exports = router;
