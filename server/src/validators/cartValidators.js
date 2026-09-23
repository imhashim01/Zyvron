const { body } = require("express-validator");

// Shared by PUT / (replace) and POST /merge — both take the same { items } shape.
const itemsBody = [
  body("items").isArray().withMessage("items must be an array"),
  body("items.*.product").isMongoId().withMessage("each item needs a valid product id"),
  body("items.*.quantity").isInt({ min: 1 }).withMessage("quantity must be a positive integer"),
];

module.exports = { itemsBody };
