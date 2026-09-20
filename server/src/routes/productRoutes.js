const express = require("express");
const products = require("../controllers/productController");
const reviews = require("../controllers/reviewController");
const { protect, requireAdmin, attachUserIfPresent } = require("../middleware/auth");

const router = express.Router();

router.get("/", products.list);
router.get("/:slug", products.getBySlug);
router.post("/", protect, requireAdmin, products.create);
router.put("/:id", protect, requireAdmin, products.update);
router.delete("/:id", protect, requireAdmin, products.remove);

router.get("/:productId/reviews", reviews.listForProduct);
router.post("/:productId/reviews", attachUserIfPresent, reviews.create);

module.exports = router;
