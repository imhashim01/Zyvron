/** Strips everything but digits, matching the old site's loose phone comparison. */
function normalizePhone(phone) {
  return String(phone || "").replace(/\D/g, "");
}

module.exports = { normalizePhone };
