const express = require("express");
const brands = require("../controllers/brandController");
const { protect, requireAdmin } = require("../middleware/auth");
const { validate } = require("../middleware/validate");
const { mirrorImages } = require("../middleware/cloudinaryImages");
const brandValidators = require("../validators/brandValidators");

const router = express.Router();

router.get("/", brands.list);
router.post(
  "/",
  protect,
  requireAdmin,
  brandValidators.create,
  validate,
  mirrorImages(["logo"], "brands"),
  brands.create
);
router.put(
  "/:id",
  protect,
  requireAdmin,
  brandValidators.update,
  validate,
  mirrorImages(["logo"], "brands"),
  brands.update
);
router.delete("/:id", protect, requireAdmin, brandValidators.idParam, validate, brands.remove);

module.exports = router;
