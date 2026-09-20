const express = require("express");
const orders = require("../controllers/orderController");
const { protect, attachUserIfPresent } = require("../middleware/auth");

const router = express.Router();

router.post("/", attachUserIfPresent, orders.create);
router.get("/track/:orderNumber", orders.track);
router.get("/mine", protect, orders.mine);

module.exports = router;
