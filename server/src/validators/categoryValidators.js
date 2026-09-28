const { body, param } = require("express-validator");

// Same convention as Brand's `logo` field: a 500-char cap rejects raw
// base64 image data (a data: URI runs to thousands of characters) - only a
// hosted image *link* belongs here. Every rule below carries its own
// .withMessage() so a failure explains itself instead of falling back to
// express-validator's generic "Invalid value" - which is exactly what
// happened before this fix: `icon` is meant to hold a short icon *keyword*
// (e.g. "headphones"), but a ~100+ character Cloudinary image URL pasted
// into it silently failed the old, message-less 50-char cap. `image` is the
// field to use for an actual photo URL - it's shown as the category's tile
// photo on the storefront homepage.
const IMAGE_MESSAGE =
  "image must be an image URL of 500 characters or fewer (e.g. https://example.com/photo.jpg) - not an uploaded file or base64 image data";
const ICON_MESSAGE =
  "icon must be a short icon keyword of 50 characters or fewer (e.g. headphones, watch, gamepad, phone) - paste a photo URL into the image field instead";

const create = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("name is required")
    .isLength({ max: 100 })
    .withMessage("name must be 100 characters or fewer"),
  body("icon").optional({ checkFalsy: true }).trim().isLength({ max: 50 }).withMessage(ICON_MESSAGE),
  body("image").optional({ checkFalsy: true }).trim().isLength({ max: 500 }).withMessage(IMAGE_MESSAGE),
  body("order").optional().isInt().withMessage("order must be a whole number"),
];

const update = [
  param("id").isMongoId(),
  body("name")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("name cannot be empty")
    .isLength({ max: 100 })
    .withMessage("name must be 100 characters or fewer"),
  body("icon").optional({ checkFalsy: true }).trim().isLength({ max: 50 }).withMessage(ICON_MESSAGE),
  body("image").optional({ checkFalsy: true }).trim().isLength({ max: 500 }).withMessage(IMAGE_MESSAGE),
  body("order").optional().isInt().withMessage("order must be a whole number"),
];

const idParam = [param("id").isMongoId()];

module.exports = { create, update, idParam };
