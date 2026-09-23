const { body, param } = require("express-validator");

const create = [
  body("name").trim().notEmpty().withMessage("name is required").isLength({ max: 100 }),
  body("logo").optional({ checkFalsy: true }).trim().isLength({ max: 500 }),
  body("order").optional().isInt(),
];

const update = [
  param("id").isMongoId(),
  body("name").optional().trim().notEmpty().isLength({ max: 100 }),
  body("logo").optional({ checkFalsy: true }).trim().isLength({ max: 500 }),
  body("order").optional().isInt(),
];

const idParam = [param("id").isMongoId()];

module.exports = { create, update, idParam };
