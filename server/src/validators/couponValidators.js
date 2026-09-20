const { body, param } = require("express-validator");

const validateCode = [
  body("code").trim().notEmpty().withMessage("code is required").isLength({ max: 40 }),
  body("subtotal").optional().isFloat({ min: 0 }),
];

const create = [
  body("code").trim().notEmpty().withMessage("code is required").isLength({ max: 40 }),
  body("type").isIn(["percent", "fixed"]).withMessage("type must be percent or fixed"),
  body("value").isFloat({ min: 0 }).withMessage("value must be a positive number"),
  body("minOrderAmount").optional().isFloat({ min: 0 }),
  body("usageLimit").optional().isInt({ min: 1 }),
  body("expiresAt").optional({ checkFalsy: true }).isISO8601(),
  body("active").optional().isBoolean(),
];

const update = [
  param("id").isMongoId(),
  body("code").optional().trim().notEmpty().isLength({ max: 40 }),
  body("type").optional().isIn(["percent", "fixed"]),
  body("value").optional().isFloat({ min: 0 }),
  body("minOrderAmount").optional().isFloat({ min: 0 }),
  body("usageLimit").optional().isInt({ min: 1 }),
  body("expiresAt").optional({ checkFalsy: true }).isISO8601(),
  body("active").optional().isBoolean(),
];

const idParam = [param("id").isMongoId()];

module.exports = { validateCode, create, update, idParam };
