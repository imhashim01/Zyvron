const { body, param, query } = require("express-validator");

const create = [
  body("items").isArray({ min: 1 }).withMessage("items must be a non-empty array"),
  body("items.*.productId").isMongoId().withMessage("each item needs a valid productId"),
  body("items.*.quantity").optional().isInt({ min: 1 }).withMessage("quantity must be a positive integer"),
  body("customer.name").trim().notEmpty().withMessage("customer name is required").isLength({ max: 100 }),
  body("customer.phone").trim().notEmpty().withMessage("customer phone is required").isLength({ max: 20 }),
  body("customer.city").trim().notEmpty().withMessage("customer city is required").isLength({ max: 100 }),
  body("customer.address").trim().notEmpty().withMessage("customer address is required").isLength({ max: 500 }),
  body("customer.email").optional({ checkFalsy: true }).trim().isEmail().withMessage("customer email must be valid"),
  body("couponCode").optional({ checkFalsy: true }).trim().isLength({ max: 40 }),
];

const track = [
  param("orderNumber").trim().notEmpty(),
  query("phone").trim().notEmpty().withMessage("phone is required to track an order"),
];

const updateStatus = [
  param("id").isMongoId(),
  body("status").isIn(["pending", "accepted", "rejected", "dispatched", "delivered"]).withMessage("invalid status"),
];

const idParam = [param("id").isMongoId()];

module.exports = { create, track, updateStatus, idParam };
