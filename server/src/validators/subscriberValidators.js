const { body } = require("express-validator");

const create = [
  body("phone")
    .trim()
    .notEmpty()
    .withMessage("phone is required")
    .matches(/^[0-9+\-\s()]{7,20}$/)
    .withMessage("phone must be a valid phone number"),
];

module.exports = { create };
