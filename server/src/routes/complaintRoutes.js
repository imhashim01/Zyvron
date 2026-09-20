const express = require("express");
const rateLimit = require("express-rate-limit");
const complaints = require("../controllers/complaintController");
const { validate } = require("../middleware/validate");
const complaintValidators = require("../validators/complaintValidators");

const router = express.Router();

const complaintLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 20, standardHeaders: true, legacyHeaders: false });

router.post("/", complaintLimiter, complaintValidators.create, validate, complaints.create);

module.exports = router;
