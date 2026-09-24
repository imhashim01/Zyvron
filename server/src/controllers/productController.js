const Product = require("../models/Product");
const Category = require("../models/Category");
const Review = require("../models/Review");
const User = require("../models/User");

function slugifyTitle(title) {
  return String(title)
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// An empty-string brand (the admin form's "No brand" option) would otherwise
// fail Mongoose's ObjectId cast on create/update - normalize it to null,
// which is what "no brand" actually means in the schema.
function normalizeBrand(body) {
  if (body.brand === "") body.brand = null;
}

const SORTERS = {
  popular: { reviewsCount: -1 },
  "price-low": { price: 1 },
  "price-high": { price: -1 },
  rating: { rating: -1 },
};

async function list(req, res, next) {
  try {
    const { category, search, sort, page = 1, limit = 20, ids, flashSale, featured } = req.query;
    const filter = { isActive: true };

    if (flashSale === "true") filter.isFlashSale = true;
    if (featured === "true") filter.isFeatured = true;

    if (ids) {
      const idList = String(ids)
        .split(",")
        .map((id) => id.trim())
        .filter(Boolean);
      filter._id = { $in: idList };
    }

    if (category && category !== "all") {
      const categoryDoc = await Category.findOne({ slug: category });
      if (categoryDoc) filter.category = categoryDoc._id;
      else filter.category = null; // unknown category slug -> no results
    }

    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
        { tags: { $regex: search, $options: "i" } },
      ];
    }

    const pageNum = Math.max(1, parseInt(page, 10) || 1);
    const limitNum = Math.max(1, Math.min(100, parseInt(limit, 10) || 20));

    let query = Product.find(filter).populate("category", "name slug").populate("brand", "name slug logo");

    if (sort === "discount") {
      // discount % isn't stored, so pull then sort in memory (catalog is small)
      const all = await query;
      const sorted = all.sort((a, b) => {
        const discA = a.compareAtPrice ? (a.compareAtPrice - a.price) / a.compareAtPrice : 0;
        const discB = b.compareAtPrice ? (b.compareAtPrice - b.price) / b.compareAtPrice : 0;
        return discB - discA;
      });
      const total = sorted.length;
      const paged = sorted.slice((pageNum - 1) * limitNum, pageNum * limitNum);
      return res.status(200).json({ products: paged, total, page: pageNum, pages: Math.ceil(total / limitNum) });
    }

    const sortSpec = SORTERS[sort] || { createdAt: -1 };
    const total = await Product.countDocuments(filter);
    const products = await query
      .sort(sortSpec)
      .skip((pageNum - 1) * limitNum)
      .limit(limitNum);

    res.status(200).json({ products, total, page: pageNum, pages: Math.ceil(total / limitNum) });
  } catch (err) {
    next(err);
  }
}

async function getBySlug(req, res, next) {
  try {
    const product = await Product.findOne({ slug: req.params.slug, isActive: true })
      .populate("category", "name slug")
      .populate("brand", "name slug logo");
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json({ product });
  } catch (err) {
    next(err);
  }
}

async function create(req, res, next) {
  try {
    const body = req.body;
    if (!body.slug && body.title) body.slug = slugifyTitle(body.title);
    normalizeBrand(body);
    const product = await Product.create(body);
    res.status(201).json(product);
  } catch (err) {
    next(err);
  }
}

async function update(req, res, next) {
  try {
    const body = req.body;
    if (body.title && !body.slug) body.slug = slugifyTitle(body.title);
    normalizeBrand(body);
    const product = await Product.findByIdAndUpdate(req.params.id, body, { new: true });
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    // A real delete, not a soft-deactivate: this used to just flip
    // isActive to false, which left the document sitting in MongoDB
    // forever with no admin UI to see or manage it (every product listing,
    // admin included, always filters isActive:true) - that's exactly the
    // "I deleted it but it's still in MongoDB" mismatch Mohammad hit.
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    // Clean up everything that pointed at it, so nothing is left dangling:
    // reviews have no product left to belong to, and a stale cart/wishlist
    // entry would otherwise sit in a customer's account indefinitely (every
    // read already filters it out via an isActive/existence check, but
    // there's no reason to leave the dead reference behind).
    await Promise.all([
      Review.deleteMany({ product: product._id }),
      User.updateMany({}, { $pull: { cart: { product: product._id }, wishlist: product._id } }),
    ]);

    res.status(200).json({ message: "Product permanently deleted" });
  } catch (err) {
    next(err);
  }
}

module.exports = { list, getBySlug, create, update, remove, slugifyTitle };
