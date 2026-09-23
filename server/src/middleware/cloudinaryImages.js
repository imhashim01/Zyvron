const { mirrorImageFields } = require("../utils/cloudinaryUpload");

/**
 * Express middleware factory: before the route's controller runs, replaces
 * any external image URL in the given req.body field(s) - e.g. a Google
 * Images link pasted into the admin form - with a copy hosted on our own
 * Cloudinary account, so the value actually saved to Mongo is always our
 * own stable URL rather than someone else's server. Mounted after
 * express-validator's `validate` in the route chain, so by the time this
 * runs the body has already passed shape/type checks; this step doesn't
 * care whether the string is "your own URL" or "a URL to go mirror" - only
 * whether it needs mirroring at all.
 *
 * `fields` - body field name(s) to check, e.g. ["image", "images"].
 * `folder` - Cloudinary subfolder to file the upload under, e.g. "products".
 */
function mirrorImages(fields, folder) {
  return async function mirrorImagesMiddleware(req, res, next) {
    try {
      await mirrorImageFields(req.body, fields, folder);
      next();
    } catch (err) {
      next(err);
    }
  };
}

module.exports = { mirrorImages };
