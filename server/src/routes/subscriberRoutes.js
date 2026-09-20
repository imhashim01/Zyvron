const express = require("express");
const rateLimit = require("express-rate-limit");
const subscribers = require("../controllers/subscriberController");
const { validate } = require("../middleware/validate");
const subscriberValidators = require("../validators/subscriberValidators");

const router = express.Router();

const subscribeLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 20, standardHeaders: true, legacyHeaders: false });

router.post("/", subscribeLimiter, subscriberValidators.create, validate, subscribers.create);

module.exports = router;
