const express = require("express");
const wishlist = require("../controllers/wishlistController");
const { protect } = require("../middleware/auth");
const { validate } = require("../middleware/validate");
const wishlistValidators = require("../validators/wishlistValidators");

const router = express.Router();

// Same reasoning as cartRoutes.js — this is account-scoped sync, so every
// route here requires a signed-in user.
router.use(protect);

router.get("/", wishlist.getWishlist);
router.put("/", wishlistValidators.idsBody, validate, wishlist.replaceWishlist);
router.post("/merge", wishlistValidators.idsBody, validate, wishlist.mergeWishlist);

module.exports = router;
