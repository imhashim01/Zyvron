const express = require("express");
const categories = require("../controllers/categoryController");
const { protect, requireAdmin } = require("../middleware/auth");
const { validate } = require("../middleware/validate");
const { mirrorImages } = require("../middleware/cloudinaryImages");
const categoryValidators = require("../validators/categoryValidators");

const router = express.Router();

router.get("/", categories.list);
router.post(
  "/",
  protect,
  requireAdmin,
  categoryValidators.create,
  validate,
  mirrorImages(["image"], "categories"),
  categories.create
);
router.put(
  "/:id",
  protect,
  requireAdmin,
  categoryValidators.update,
  validate,
  mirrorImages(["image"], "categories"),
  categories.update
);
router.delete("/:id", protect, requireAdmin, categoryValidators.idParam, validate, categories.remove);

module.exports = router;
