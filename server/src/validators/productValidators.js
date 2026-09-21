const { body, param } = require("express-validator");

const baseFields = [
  body("price").optional().isFloat({ min: 0 }).withMessage("price must be a positive number"),
  body("compareAtPrice").optional({ checkFalsy: true }).isFloat({ min: 0 }),
  body("stock").optional().isInt({ min: 0 }).withMessage("stock must be a non-negative integer"),
  body("category").optional().isMongoId().withMessage("category must be a valid id"),
  body("image").optional().trim().notEmpty(),
  body("images").optional().isArray(),
  body("features").optional().isArray(),
  body("tags").optional().isArray(),
  body("colors").optional().isArray(),
  body("isFlashSale").optional().isBoolean(),
  body("flashSaleEndsAt").optional({ checkFalsy: true }).isISO8601(),
  body("isActive").optional().isBoolean(),
];

const create = [
  body("title").trim().notEmpty().withMessage("title is required").isLength({ max: 200 }),
  body("category").isMongoId().withMessage("a valid category is required"),
  body("price").isFloat({ min: 0 }).withMessage("price must be a positive number"),
  body("image").trim().notEmpty().withMessage("image is required"),
  ...baseFields,
];

const update = [param("id").isMongoId(), body("title").optional().trim().notEmpty().isLength({ max: 200 }), ...baseFields];

const idParam = [param("id").isMongoId()];

module.exports = { create, update, idParam };
