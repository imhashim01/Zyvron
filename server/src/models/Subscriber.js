const mongoose = require("mongoose");

const subscriberSchema = new mongoose.Schema(
  {
    phone: { type: String, required: true },
    source: { type: String, default: "footer_newsletter" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Subscriber", subscriberSchema);
