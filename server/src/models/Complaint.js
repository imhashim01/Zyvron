const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema(
  {
    orderNumber: { type: String, required: true },
    message: { type: String, required: true },
    status: { type: String, enum: ["open", "closed"], default: "open" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Complaint", complaintSchema);
