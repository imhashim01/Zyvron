const { body, param } = require("express-validator");

const register = [
  body("name").trim().notEmpty().withMessage("name is required").isLength({ max: 100 }),
  body("email").trim().isEmail().withMessage("a valid email is required").normalizeEmail(),
  body("password").isLength({ min: 6 }).withMessage("password must be at least 6 characters"),
  body("phone").optional({ checkFalsy: true }).trim().isLength({ max: 20 }),
];

const login = [
  body("email").trim().isEmail().withMessage("a valid email is required").normalizeEmail(),
  body("password").notEmpty().withMessage("password is required"),
];

const forgotPassword = [body("email").optional({ checkFalsy: true }).trim().isEmail().normalizeEmail()];

const resetPassword = [
  param("token").isString().isLength({ min: 10 }),
  body("password").isLength({ min: 6 }).withMessage("password must be at least 6 characters"),
];

module.exports = { register, login, forgotPassword, resetPassword };
