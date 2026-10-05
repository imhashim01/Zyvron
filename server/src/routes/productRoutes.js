const express = require("express");
const rateLimit = require("express-rate-limit");
const products = require("../controllers/productController");
const reviews = require("../controllers/reviewController");
const { protect, requireAdmin, attachUserIfPresent } = require("../middleware/auth");
const { validate } = require("../middleware/validate");
const { mirrorImages } = require("../middleware/cloudinaryImages");
const productValidators = require("../validators/productValidators");
const reviewValidators = require("../validators/reviewValidators");

const router = express.Router();

// Reviews are open to guests, so cap them per visitor to keep spam out.
const reviewLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 5, standardHeaders: true, legacyHeaders: false });

router.get("/", products.list);
router.get("/:slug", products.getBySlug);
router.post(
  "/",
  protect,
  requireAdmin,
  productValidators.create,
  validate,
  mirrorImages(["image", "images"], "products"),
  products.create
);
router.put(
  "/:id",
  protect,
  requireAdmin,
  productValidators.update,
  validate,
  mirrorImages(["image", "images"], "products"),
  products.update
);
router.delete("/:id", protect, requireAdmin, productValidators.idParam, validate, products.remove);

router.get("/:productId/reviews", reviews.listForProduct);
router.post("/:productId/reviews", reviewLimiter, attachUserIfPresent, reviewValidators.create, validate, reviews.create);

module.exports = router;
