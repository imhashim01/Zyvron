/* eslint-disable no-console */
require("dotenv").config();
const mongoose = require("mongoose");
const { mongoUri, admin } = require("../config/env");
const User = require("../models/User");

async function run() {
  if (!admin.password) {
    console.warn("[seed:admin] ADMIN_PASSWORD is not set in .env - skipping admin creation.");
    return;
  }

  await mongoose.connect(mongoUri);
  console.log("[seed:admin] connected");

  const existing = await User.findOne({ email: admin.email.toLowerCase() });
  if (existing) {
    if (existing.role !== "admin") {
      existing.role = "admin";
      await existing.save();
      console.log(`[seed:admin] Promoted existing user ${admin.email} to admin.`);
    } else {
      console.log(`[seed:admin] Admin ${admin.email} already exists - nothing to do.`);
    }
  } else {
    await User.create({
      name: admin.name,
      email: admin.email,
      password: admin.password,
      role: "admin",
      isEmailVerified: true,
    });
    console.log(`[seed:admin] Created admin account ${admin.email}`);
  }

  await mongoose.disconnect();
}

run().catch((err) => {
  console.error("[seed:admin] failed", err);
  process.exit(1);
});
