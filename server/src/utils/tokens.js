const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const { jwt: jwtConfig } = require("../config/env");

function signAccessToken(user) {
  return jwt.sign({ sub: user._id.toString(), role: user.role }, jwtConfig.accessSecret, {
    expiresIn: jwtConfig.accessExpires,
  });
}

function signRefreshToken(user) {
  return jwt.sign({ sub: user._id.toString() }, jwtConfig.refreshSecret, {
    expiresIn: jwtConfig.refreshExpires,
  });
}

function verifyRefreshToken(token) {
  return jwt.verify(token, jwtConfig.refreshSecret);
}

function refreshCookieOptions() {
  const isProd = process.env.NODE_ENV === "production";
  return {
    httpOnly: true,
    secure: isProd,
    // The frontend and backend are two separate Vercel projects on two
    // different domains, so a browser sees /auth/refresh as a cross-site
    // request. A SameSite=Lax cookie is only sent on top-level navigation,
    // never on a cross-site fetch()/XHR - so in production this must be
    // "none" or the refresh cookie silently never arrives. SameSite=None
    // requires Secure, which is already tied to isProd above, so this is
    // safe. Locally (same-origin :3000 -> :5000 is still same-site for
    // cookie purposes) "lax" is kept, since "none" without HTTPS is
    // rejected by browsers on plain http://localhost.
    sameSite: isProd ? "none" : "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000,
    path: "/",
  };
}

function generateRawToken() {
  return crypto.randomBytes(32).toString("hex");
}

function hashToken(rawToken) {
  return crypto.createHash("sha256").update(rawToken).digest("hex");
}

module.exports = {
  signAccessToken,
  signRefreshToken,
  verifyRefreshToken,
  refreshCookieOptions,
  generateRawToken,
  hashToken,
};
