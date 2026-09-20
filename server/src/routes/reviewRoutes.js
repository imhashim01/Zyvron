const express = require("express");
const reviews = require("../controllers/reviewController");

const router = express.Router();

router.patch("/:id/helpful", reviews.markHelpful);

module.exports = router;
