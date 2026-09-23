const Brand = require("../models/Brand");

function slugify(name) {
  return String(name)
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

async function list(req, res, next) {
  try {
    const brands = await Brand.find().sort({ order: 1, name: 1 });
    res.status(200).json(brands);
  } catch (err) {
    next(err);
  }
}

async function create(req, res, next) {
  try {
    const { name, logo, order } = req.body;
    if (!name) return res.status(400).json({ message: "name is required" });
    const brand = await Brand.create({ name, slug: slugify(name), logo, order });
    res.status(201).json(brand);
  } catch (err) {
    next(err);
  }
}

async function update(req, res, next) {
  try {
    const { name, logo, order } = req.body;
    const patch = { logo, order };
    if (name) {
      patch.name = name;
      patch.slug = slugify(name);
    }
    const brand = await Brand.findByIdAndUpdate(req.params.id, patch, { new: true });
    if (!brand) return res.status(404).json({ message: "Brand not found" });
    res.status(200).json(brand);
  } catch (err) {
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    const brand = await Brand.findByIdAndDelete(req.params.id);
    if (!brand) return res.status(404).json({ message: "Brand not found" });
    res.status(200).json({ message: "Brand deleted" });
  } catch (err) {
    next(err);
  }
}

module.exports = { list, create, update, remove, slugify };
