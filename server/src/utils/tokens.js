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
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
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
