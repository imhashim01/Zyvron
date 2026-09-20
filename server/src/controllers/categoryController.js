const Category = require("../models/Category");

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
    const categories = await Category.find().sort({ order: 1, name: 1 });
    res.status(200).json(categories);
  } catch (err) {
    next(err);
  }
}

async function create(req, res, next) {
  try {
    const { name, icon, order } = req.body;
    if (!name) return res.status(400).json({ message: "name is required" });
    const category = await Category.create({ name, slug: slugify(name), icon, order });
    res.status(201).json(category);
  } catch (err) {
    next(err);
  }
}

async function update(req, res, next) {
  try {
    const { name, icon, order } = req.body;
    const patch = { icon, order };
    if (name) {
      patch.name = name;
      patch.slug = slugify(name);
    }
    const category = await Category.findByIdAndUpdate(req.params.id, patch, { new: true });
    if (!category) return res.status(404).json({ message: "Category not found" });
    res.status(200).json(category);
  } catch (err) {
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) return res.status(404).json({ message: "Category not found" });
    res.status(200).json({ message: "Category deleted" });
  } catch (err) {
    next(err);
  }
}

module.exports = { list, create, update, remove, slugify };
