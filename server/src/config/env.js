require("dotenv").config();

function required(name, fallback) {
  const value = process.env[name];
  if (value === undefined || value === "") {
    if (fallback !== undefined) return fallback;
    console.warn(`[env] Missing env var ${name} - using empty string. Set it in server/.env`);
    return "";
  }
  return value;
}

module.exports = {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || "development",
  mongoUri: required("MONGODB_URI", "mongodb://localhost:27017/zyvron"),
  jwt: {
    accessSecret: required("JWT_ACCESS_SECRET", "dev-access-secret"),
    accessExpires: process.env.JWT_ACCESS_EXPIRES || "15m",
    refreshSecret: required("JWT_REFRESH_SECRET", "dev-refresh-secret"),
    refreshExpires: process.env.JWT_REFRESH_EXPIRES || "7d",
  },
  smtp: {
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT || 465),
    user: process.env.SMTP_USER || "",
    pass: process.env.SMTP_PASS || "",
    from: process.env.EMAIL_FROM || "Zyvron Tech Accessories <no-reply@zyvron.com>",
  },
  clientUrl: process.env.CLIENT_URL || "http://localhost:3000",
  admin: {
    email: process.env.ADMIN_EMAIL || "admin@zyvron.com",
    password: process.env.ADMIN_PASSWORD || "",
    name: process.env.ADMIN_NAME || "Zyvron Admin",
  },
};
