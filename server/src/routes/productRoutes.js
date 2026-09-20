const express = require("express");
const products = require("../controllers/productController");
const reviews = require("../controllers/reviewController");
const { protect, requireAdmin, attachUserIfPresent } = require("../middleware/auth");
const { validate } = require("../middleware/validate");
const productValidators = require("../validators/productValidators");
const reviewValidators = require("../validators/reviewValidators");

const router = express.Router();

router.get("/", products.list);
router.get("/:slug", products.getBySlug);
router.post("/", protect, requireAdmin, productValidators.create, validate, products.create);
router.put("/:id", protect, requireAdmin, productValidators.update, validate, products.update);
router.delete("/:id", protect, requireAdmin, productValidators.idParam, validate, products.remove);

router.get("/:productId/reviews", reviews.listForProduct);
router.post("/:productId/reviews", attachUserIfPresent, reviewValidators.create, validate, reviews.create);

module.exports = router;
