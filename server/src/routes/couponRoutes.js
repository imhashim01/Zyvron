const express = require("express");
const coupons = require("../controllers/couponController");

const router = express.Router();

router.post("/validate", coupons.validate);

module.exports = router;
