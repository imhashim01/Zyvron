const express = require("express");
const cart = require("../controllers/cartController");
const { protect } = require("../middleware/auth");
const { validate } = require("../middleware/validate");
const cartValidators = require("../validators/cartValidators");

const router = express.Router();

// Cross-device cart sync is an account feature — every route here requires a
// signed-in user. A signed-out visitor's cart stays purely client-side
// (localStorage), exactly as it already worked before this file existed.
router.use(protect);

router.get("/", cart.getCart);
router.put("/", cartValidators.itemsBody, validate, cart.replaceCart);
router.post("/merge", cartValidators.itemsBody, validate, cart.mergeCart);

module.exports = router;
