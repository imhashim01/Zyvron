const { body, param } = require("express-validator");

// The 500-char cap on `logo` exists to reject raw base64 image data (a
// data: URI runs to thousands of characters) - only a hosted image *link*
// belongs here, same as Products/Categories. Every rule below carries its
// own .withMessage() so a failure explains itself instead of falling back
// to express-validator's generic "Invalid value".
const LOGO_MESSAGE =
  "logo must be an image URL of 500 characters or fewer (e.g. https://example.com/logo.png) - not an uploaded file or base64 image data";

const create = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("name is required")
    .isLength({ max: 100 })
    .withMessage("name must be 100 characters or fewer"),
  body("logo").optional({ checkFalsy: true }).trim().isLength({ max: 500 }).withMessage(LOGO_MESSAGE),
  body("order").optional().isInt().withMessage("order must be a whole number"),
];

const update = [
  param("id").isMongoId(),
  body("name").optional().trim().notEmpty().isLength({ max: 100 }).withMessage("name must be 100 characters or fewer"),
  body("logo").optional({ checkFalsy: true }).trim().isLength({ max: 500 }).withMessage(LOGO_MESSAGE),
  body("order").optional().isInt().withMessage("order must be a whole number"),
];

const idParam = [param("id").isMongoId()];

module.exports = { create, update, idParam };
