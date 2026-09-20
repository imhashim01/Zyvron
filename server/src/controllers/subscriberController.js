const Subscriber = require("../models/Subscriber");

async function create(req, res, next) {
  try {
    const { phone } = req.body;
    if (!phone) return res.status(400).json({ message: "phone is required" });
    const subscriber = await Subscriber.create({ phone, source: "footer_newsletter" });
    res.status(201).json(subscriber);
  } catch (err) {
    next(err);
  }
}

async function list(req, res, next) {
  try {
    const subscribers = await Subscriber.find().sort({ createdAt: -1 });
    res.status(200).json(subscribers);
  } catch (err) {
    next(err);
  }
}

module.exports = { create, list };
