const cloudinary = require("../config/cloudinary");
const { cloudinaryConfigured } = require("../utils/cloudinaryUpload");

// Cloudinary's SDK accepts a Buffer only via its streaming uploader, not the
// plain uploader.upload() used elsewhere for remote URLs - that one expects a
// path/URL/base64 string, not raw bytes. Wrapping upload_stream in a Promise
// lets this read like the rest of the upload helpers (await -> secure_url).
function uploadBufferToCloudinary(buffer, folder) {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: `zyvron/${folder}`, resource_type: "image" },
      (err, result) => {
        if (err) reject(err);
        else resolve(result.secure_url);
      }
    );
    stream.end(buffer);
  });
}

const FOLDER_NAME = /^[a-z0-9_-]+$/i;

/**
 * POST /api/uploads/images - admin-only. Accepts one or more image files
 * (multipart/form-data, field name "files") and uploads each straight to
 * Cloudinary from memory, returning the hosted URLs. This is what lets the
 * admin panel's product-photo picker take real files from the admin's
 * computer (drag-and-drop or a file browser) instead of requiring a URL to
 * already exist somewhere - the mirror-on-save flow in cloudinaryUpload.js
 * only ever fetched from a URL, it never accepted uploaded bytes.
 */
async function uploadImages(req, res, next) {
  try {
    const files = req.files || [];
    if (!files.length) return res.status(400).json({ message: "No files were uploaded" });

    if (!cloudinaryConfigured()) {
      return res.status(503).json({
        message:
          "Image hosting isn't configured yet - add CLOUDINARY_CLOUD_NAME/API_KEY/API_SECRET to server/.env.",
      });
    }

    const folder = FOLDER_NAME.test(req.query.folder || "") ? req.query.folder : "products";
    const urls = await Promise.all(files.map((file) => uploadBufferToCloudinary(file.buffer, folder)));
    res.status(200).json({ urls });
  } catch (err) {
    next(err);
  }
}

module.exports = { uploadImages };
