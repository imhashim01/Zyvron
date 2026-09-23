const cloudinary = require("../config/cloudinary");
const env = require("../config/env");

// Already-hosted-on-Cloudinary URLs must never be re-uploaded: editing a
// product that already has a Cloudinary image and saving again (with the
// same URL still sitting in the field) would otherwise re-fetch and
// duplicate the asset on every single save.
function isCloudinaryUrl(url) {
  return typeof url === "string" && /\bres\.cloudinary\.com\//.test(url);
}

// Anything else that looks like a real http(s) URL is treated as "external"
// and gets mirrored into our own Cloudinary account. A relative path
// (e.g. "/uploads/x.jpg"), an empty string, or a non-string value is left
// completely alone - there's nothing to fetch.
function isExternalUrl(value) {
  return typeof value === "string" && /^https?:\/\//i.test(value.trim()) && !isCloudinaryUrl(value);
}

function cloudinaryConfigured() {
  return Boolean(env.cloudinary.cloudName && env.cloudinary.apiKey && env.cloudinary.apiSecret);
}

/**
 * Uploads a single remote image URL to Cloudinary and returns the resulting
 * secure_url. Cloudinary fetches the URL itself server-side - the image
 * bytes never pass through this server. Returns the original value
 * unchanged when there is nothing to do (already a Cloudinary URL, empty,
 * relative, not a string) or when Cloudinary isn't configured yet, and also
 * falls back to the original value on any upload failure (unreachable URL,
 * blocked by the source host, Cloudinary quota, etc) - a bad image URL
 * should never block saving the product/category/brand itself.
 */
async function mirrorImageUrl(value, folder) {
  if (!isExternalUrl(value)) return value;
  if (!cloudinaryConfigured()) {
    console.warn(
      "[cloudinary] CLOUDINARY_CLOUD_NAME/API_KEY/API_SECRET not set in server/.env - " +
        `leaving external image URL as-is: ${value}`
    );
    return value;
  }
  try {
    const result = await cloudinary.uploader.upload(value, {
      folder: `zyvron/${folder}`,
      resource_type: "image",
    });
    return result.secure_url;
  } catch (err) {
    console.warn(`[cloudinary] Failed to mirror image URL, saving as typed instead: ${value} (${err.message})`);
    return value;
  }
}

/**
 * Mutates `body` in place: for each field name in `fields`, replaces an
 * external image URL with its mirrored Cloudinary URL. A field's value can
 * be a single string (e.g. "image", "logo") or an array of strings (e.g.
 * "images") - both shapes are handled the same way. A field that's absent,
 * already a Cloudinary URL, or not a URL at all is left untouched.
 */
async function mirrorImageFields(body, fields, folder) {
  await Promise.all(
    fields.map(async (field) => {
      const value = body[field];
      if (Array.isArray(value)) {
        body[field] = await Promise.all(value.map((v) => mirrorImageUrl(v, folder)));
      } else if (value !== undefined) {
        body[field] = await mirrorImageUrl(value, folder);
      }
    })
  );
}

module.exports = { mirrorImageUrl, mirrorImageFields, isExternalUrl, isCloudinaryUrl, cloudinaryConfigured };
