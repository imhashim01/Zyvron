const express = require("express");
const orders = require("../controllers/orderController");
const coupons = require("../controllers/couponController");
const subscribers = require("../controllers/subscriberController");
const complaints = require("../controllers/complaintController");
const { protect, requireAdmin } = require("../middleware/auth");

const router = express.Router();

router.use(protect, requireAdmin);

router.get("/orders", orders.adminList);
router.get("/orders/export.csv", orders.exportCsv);
router.patch("/orders/:id/status", orders.updateStatus);
router.delete("/orders/:id", orders.remove);

router.get("/coupons", coupons.list);
router.post("/coupons", coupons.create);
router.put("/coupons/:id", coupons.update);
router.delete("/coupons/:id", coupons.remove);

router.get("/subscribers", subscribers.list);
router.get("/complaints", complaints.list);

module.exports = router;
