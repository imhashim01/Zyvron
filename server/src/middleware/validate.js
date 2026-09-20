const { validationResult } = require("express-validator");

/** Runs after a chain of express-validator checks; short-circuits with 400 on the first failures found. */
function validate(req, res, next) {
  const errors = validationResult(req);
  if (errors.isEmpty()) return next();
  return res.status(400).json({ message: errors.array()[0].msg, errors: errors.array() });
}

module.exports = { validate };
