const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const rateLimit = require("express-rate-limit");

const { clientUrl, nodeEnv } = require("./config/env");
const { notFound, errorHandler } = require("./middleware/errorHandler");

const authRoutes = require("./routes/authRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const couponRoutes = require("./routes/couponRoutes");
const orderRoutes = require("./routes/orderRoutes");
const adminRoutes = require("./routes/adminRoutes");
const subscriberRoutes = require("./routes/subscriberRoutes");
const complaintRoutes = require("./routes/complaintRoutes");
const cartRoutes = require("./routes/cartRoutes");
const wishlistRoutes = require("./routes/wishlistRoutes");
const brandRoutes = require("./routes/brandRoutes");
const uploadRoutes = require("./routes/uploadRoutes");

const app = express();

// Both Vercel (in front of the serverless function) and most other hosts
// (Render, Railway, ...) sit this app behind a reverse proxy that terminates
// TLS and forwards the real client IP via X-Forwarded-For. Without this,
// express-rate-limit below can't safely trust that header (it validates the
// proxy chain and throws ERR_ERL_UNEXPECTED_X_FORWARDED_FOR otherwise), and
// req.ip/req.secure would reflect the proxy, not the visitor. "1" trusts
// exactly one hop, matching a single reverse proxy in front of this app.
app.set("trust proxy", 1);

// crossOriginResourcePolicy must be relaxed to "cross-origin": the frontend
// (localhost:3000) and this API (localhost:5000) are different origins by the
// browser's definition (different port), so helmet's default same-origin CORP
// header silently blocks every fetch from the client with a generic "Failed
// to fetch" - this is a separate browser mechanism from CORS below, and the
// `cors` middleware alone does not turn it off.
app.use(helmet({ crossOriginResourcePolicy: { policy: "cross-origin" } }));
app.use(cors({ origin: clientUrl, credentials: true }));
app.use(express.json());
app.use(cookieParser());
if (nodeEnv !== "test") app.use(morgan(nodeEnv === "production" ? "combined" : "dev"));

const apiLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 300, standardHeaders: true, legacyHeaders: false });
app.use("/api", apiLimiter);

app.get("/api/health", (req, res) => res.status(200).json({ status: "ok" }));

app.use("/api/auth", authRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/coupons", couponRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/subscribers", subscriberRoutes);
app.use("/api/complaints", complaintRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/wishlist", wishlistRoutes);
app.use("/api/brands", brandRoutes);
app.use("/api/uploads", uploadRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
