const User = require("../models/User");
const {
  signAccessToken,
  signRefreshToken,
  verifyRefreshToken,
  refreshCookieOptions,
  generateRawToken,
  hashToken,
} = require("../utils/tokens");
const { sendWelcomeEmail, sendResetPasswordEmail } = require("../utils/sendEmail");
const { clientUrl } = require("../config/env");

function issueSession(res, user) {
  const accessToken = signAccessToken(user);
  const refreshToken = signRefreshToken(user);
  res.cookie("refreshToken", refreshToken, refreshCookieOptions());
  return accessToken;
}

async function register(req, res, next) {
  try {
    const { name, email, password, phone } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "name, email and password are required" });
    }
    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing) return res.status(409).json({ message: "An account with this email already exists" });

    const user = await User.create({ name, email, password, phone });
    const accessToken = issueSession(res, user);

    sendWelcomeEmail(user).catch(() => {});

    res.status(201).json({ user: user.toSafeJSON(), accessToken });
  } catch (err) {
    next(err);
  }
}

async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: "email and password are required" });

    const user = await User.findOne({ email: email.toLowerCase() }).select("+password");
    if (!user) return res.status(401).json({ message: "Invalid email or password" });

    const match = await user.comparePassword(password);
    if (!match) return res.status(401).json({ message: "Invalid email or password" });

    const accessToken = issueSession(res, user);
    res.status(200).json({ user: user.toSafeJSON(), accessToken });
  } catch (err) {
    next(err);
  }
}

async function refresh(req, res, next) {
  try {
    const token = req.cookies?.refreshToken;
    if (!token) return res.status(401).json({ message: "No refresh token" });

    const payload = verifyRefreshToken(token);
    const user = await User.findById(payload.sub);
    if (!user) return res.status(401).json({ message: "Invalid refresh token" });

    const accessToken = signAccessToken(user);
    res.status(200).json({ accessToken });
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired refresh token" });
  }
}

async function logout(req, res) {
  res.clearCookie("refreshToken", { ...refreshCookieOptions(), maxAge: undefined });
  res.status(200).json({});
}

async function forgotPassword(req, res, next) {
  try {
    const { email } = req.body;
    const genericMessage = { message: "If an account exists for that email, a reset link has been sent." };
    if (!email) return res.status(200).json(genericMessage);

    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) return res.status(200).json(genericMessage);

    const rawToken = generateRawToken();
    user.resetPasswordToken = hashToken(rawToken);
    user.resetPasswordExpires = new Date(Date.now() + 60 * 60 * 1000);
    await user.save();

    const resetUrl = `${clientUrl}/reset-password/${rawToken}`;
    sendResetPasswordEmail(user, resetUrl).catch(() => {});

    res.status(200).json(genericMessage);
  } catch (err) {
    next(err);
  }
}

async function resetPassword(req, res, next) {
  try {
    const { token } = req.params;
    const { password } = req.body;
    if (!password) return res.status(400).json({ message: "password is required" });

    const hashed = hashToken(token);
    const user = await User.findOne({
      resetPasswordToken: hashed,
      resetPasswordExpires: { $gt: new Date() },
    }).select("+resetPasswordToken +resetPasswordExpires");

    if (!user) return res.status(400).json({ message: "Reset link is invalid or has expired" });

    user.password = password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    res.status(200).json({ message: "Password has been reset. You can now log in." });
  } catch (err) {
    next(err);
  }
}

async function me(req, res) {
  res.status(200).json({ user: req.user.toSafeJSON() });
}

module.exports = { register, login, refresh, logout, forgotPassword, resetPassword, me };
