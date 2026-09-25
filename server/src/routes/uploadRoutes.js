const express = require("express");
const multer = require("multer");
const { protect, requireAdmin } = require("../middleware/auth");
const uploads = require("../controllers/uploadController");

// Memory storage: files never touch this server's disk - they're held in
// RAM just long enough to stream straight into Cloudinary (see
// uploadController.uploadImages), which matters on hosts like Vercel where
// the filesystem is read-only/ephemeral anyway.
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 8 * 1024 * 1024, files: 10 },
  fileFilter: (req, file, cb) => {
    if (/^image\/(jpeg|png|webp|gif|avif)$/i.test(file.mimetype)) cb(null, true);
    else cb(new Error("Only JPEG, PNG, WEBP, GIF, or AVIF images are allowed"));
  },
});

// multer's own errors (file too large, too many files, rejected type) throw
// synchronously inside its middleware rather than landing in req/res the
// normal way - calling it manually here (instead of handing
// `upload.array(...)` straight to router.post) lets us turn those into a
// plain 400 with a message the admin panel can show, instead of falling
// through to the generic 500 in errorHandler.js.
function uploadImagesMiddleware(req, res, next) {
  upload.array("files", 10)(req, res, (err) => {
    if (!err) return next();
    const message =
      err.code === "LIMIT_FILE_SIZE"
        ? "Each photo must be smaller than 8MB"
        : err.code === "LIMIT_FILE_COUNT" || err.code === "LIMIT_UNEXPECTED_FILE"
          ? "You can upload up to 10 photos at a time"
          : err.message || "Upload failed";
    res.status(400).json({ message });
  });
}

const router = express.Router();

router.post("/images", protect, requireAdmin, uploadImagesMiddleware, uploads.uploadImages);

module.exports = router;
