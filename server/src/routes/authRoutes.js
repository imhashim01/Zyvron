const express = require("express");
const rateLimit = require("express-rate-limit");
const auth = require("../controllers/authController");
const { protect } = require("../middleware/auth");

const router = express.Router();

const authLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 30, standardHeaders: true, legacyHeaders: false });

router.post("/register", authLimiter, auth.register);
router.post("/login", authLimiter, auth.login);
router.post("/refresh", auth.refresh);
router.post("/logout", auth.logout);
router.post("/forgot-password", authLimiter, auth.forgotPassword);
router.post("/reset-password/:token", authLimiter, auth.resetPassword);
router.get("/me", protect, auth.me);

module.exports = router;
