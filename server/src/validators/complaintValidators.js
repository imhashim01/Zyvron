const { body, param } = require("express-validator");

const create = [
  body("orderNumber").trim().notEmpty().withMessage("orderNumber is required").isLength({ max: 40 }),
  body("message").trim().notEmpty().withMessage("message is required").isLength({ max: 2000 }),
];

const updateStatus = [
  param("id").isMongoId(),
  body("status").isIn(["open", "closed"]).withMessage("status must be open or closed"),
];

module.exports = { create, updateStatus };
