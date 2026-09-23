const { body } = require("express-validator");

// Shared by PUT / (replace) and POST /merge — both take the same { ids } shape.
const idsBody = [
  body("ids").isArray().withMessage("ids must be an array"),
  body("ids.*").isMongoId().withMessage("each id must be a valid product id"),
];

module.exports = { idsBody };
