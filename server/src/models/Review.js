const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true, index: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
    name: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true },
    helpfulCount: { type: Number, default: 0 },
    helpfulVoters: { type: [String], default: [] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", reviewSchema);
