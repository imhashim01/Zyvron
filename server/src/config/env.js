// Explicit path (rather than relying on dotenv's cwd-relative default) so this
// loads server/.env correctly regardless of the working directory the process
// was launched from.
require("dotenv").config({ path: require("path").join(__dirname, "../../.env") });

// On some Windows machines Node's own resolver (separate from the OS's, which
// tools like nslookup/curl use) reports only 127.0.0.1 as a DNS server with
// nothing listening there, so every lookup - including the SRV/TXT records an
// `mongodb+srv://` URI needs - fails with ECONNREFUSED even though the machine
// otherwise has working internet access. Pointing Node at public resolvers
// directly sidesteps that broken default without touching any OS/network
// settings. This runs here, rather than in config/db.js, so every entry
// point that connects to MongoDB (the server and both seed scripts) is
// covered - they all require this module first for MONGODB_URI anyway.
require("dns").setServers(["8.8.8.8", "1.1.1.1"]);

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
  // Where the "a customer just placed an order" notification email goes.
  // Separate from admin.email above, which is the seeded admin's *login*
  // address - the two don't have to be the same inbox.
  orderNotifyEmail: process.env.ORDER_NOTIFY_EMAIL || "zyvron.official@gmail.com",
  // Used to auto-mirror any external image URL (Google Images, etc.) pasted
  // into an admin form into our own Cloudinary account - see
  // utils/cloudinaryUpload.js. Get these from the Cloudinary dashboard
  // (cloudinary.com -> Dashboard, after creating a free account) and put
  // them in server/.env; left blank, image URLs are just saved as typed.
  cloudinary: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME || "",
    apiKey: process.env.CLOUDINARY_API_KEY || "",
    apiSecret: process.env.CLOUDINARY_API_SECRET || "",
  },
};
