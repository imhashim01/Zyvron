const express = require("express");
const subscribers = require("../controllers/subscriberController");

const router = express.Router();

router.post("/", subscribers.create);

module.exports = router;
