const { body, param } = require("express-validator");

const create = [
  param("productId").isMongoId(),
  body("name").trim().notEmpty().withMessage("name is required").isLength({ max: 100 }),
  body("rating").isInt({ min: 1, max: 5 }).withMessage("rating must be between 1 and 5"),
  body("comment").trim().notEmpty().withMessage("comment is required").isLength({ max: 2000 }),
];

const markHelpful = [
  param("id").isMongoId(),
  body("voterKey").optional({ checkFalsy: true }).trim().isLength({ max: 200 }),
];

module.exports = { create, markHelpful };
