const express = require("express");
const rateLimit = require("express-rate-limit");
const reviews = require("../controllers/reviewController");
const { validate } = require("../middleware/validate");
const reviewValidators = require("../validators/reviewValidators");

const router = express.Router();

const helpfulLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 60, standardHeaders: true, legacyHeaders: false });

router.patch("/:id/helpful", helpfulLimiter, reviewValidators.markHelpful, validate, reviews.markHelpful);

module.exports = router;
