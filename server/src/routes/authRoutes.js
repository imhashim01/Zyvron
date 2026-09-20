const express = require("express");
const rateLimit = require("express-rate-limit");
const auth = require("../controllers/authController");
const { protect } = require("../middleware/auth");
const { validate } = require("../middleware/validate");
const authValidators = require("../validators/authValidators");

const router = express.Router();

const authLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 30, standardHeaders: true, legacyHeaders: false });

router.post("/register", authLimiter, authValidators.register, validate, auth.register);
router.post("/login", authLimiter, authValidators.login, validate, auth.login);
router.post("/refresh", auth.refresh);
router.post("/logout", auth.logout);
router.post("/forgot-password", authLimiter, authValidators.forgotPassword, validate, auth.forgotPassword);
router.post("/reset-password/:token", authLimiter, authValidators.resetPassword, validate, auth.resetPassword);
router.get("/me", protect, auth.me);

module.exports = router;
