const Complaint = require("../models/Complaint");

async function create(req, res, next) {
  try {
    const { orderNumber, message } = req.body;
    if (!orderNumber || !message) return res.status(400).json({ message: "orderNumber and message are required" });
    const complaint = await Complaint.create({ orderNumber, message, status: "open" });
    res.status(201).json(complaint);
  } catch (err) {
    next(err);
  }
}

async function list(req, res, next) {
  try {
    const complaints = await Complaint.find().sort({ createdAt: -1 });
    res.status(200).json(complaints);
  } catch (err) {
    next(err);
  }
}

module.exports = { create, list };
