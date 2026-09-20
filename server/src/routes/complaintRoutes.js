const express = require("express");
const complaints = require("../controllers/complaintController");

const router = express.Router();

router.post("/", complaints.create);

module.exports = router;
