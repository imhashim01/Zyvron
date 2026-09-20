const jwt = require("jsonwebtoken");
const { jwt: jwtConfig } = require("../config/env");
const User = require("../models/User");

function getBearerToken(req) {
  const header = req.headers.authorization || "";
  if (header.startsWith("Bearer ")) return header.slice(7);
  return null;
}

/** Requires a valid access token. Attaches req.user (Mongoose doc, no password). */
async function protect(req, res, next) {
  try {
    const token = getBearerToken(req);
    if (!token) return res.status(401).json({ message: "Not authenticated" });
    const payload = jwt.verify(token, jwtConfig.accessSecret);
    const user = await User.findById(payload.sub);
    if (!user) return res.status(401).json({ message: "Not authenticated" });
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
}

/** Optional auth: attaches req.user if a valid token is present, but never blocks the request. */
async function attachUserIfPresent(req, res, next) {
  try {
    const token = getBearerToken(req);
    if (!token) return next();
    const payload = jwt.verify(token, jwtConfig.accessSecret);
    const user = await User.findById(payload.sub);
    if (user) req.user = user;
  } catch (err) {
    // ignore invalid/expired token on optional-auth routes
  }
  next();
}

function requireAdmin(req, res, next) {
  if (!req.user || req.user.role !== "admin") {
    return res.status(403).json({ message: "Admin access required" });
  }
  next();
}

module.exports = { protect, attachUserIfPresent, requireAdmin };
