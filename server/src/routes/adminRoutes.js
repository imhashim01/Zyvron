const express = require("express");
const orders = require("../controllers/orderController");
const coupons = require("../controllers/couponController");
const subscribers = require("../controllers/subscriberController");
const complaints = require("../controllers/complaintController");
const { protect, requireAdmin } = require("../middleware/auth");
const { validate } = require("../middleware/validate");
const orderValidators = require("../validators/orderValidators");
const couponValidators = require("../validators/couponValidators");

const router = express.Router();

router.use(protect, requireAdmin);

router.get("/orders", orders.adminList);
router.get("/orders/export.csv", orders.exportCsv);
router.patch("/orders/:id/status", orderValidators.updateStatus, validate, orders.updateStatus);
router.delete("/orders/:id", orderValidators.idParam, validate, orders.remove);

router.get("/coupons", coupons.list);
router.post("/coupons", couponValidators.create, validate, coupons.create);
router.put("/coupons/:id", couponValidators.update, validate, coupons.update);
router.delete("/coupons/:id", couponValidators.idParam, validate, coupons.remove);

router.get("/subscribers", subscribers.list);
router.get("/complaints", complaints.list);

module.exports = router;
