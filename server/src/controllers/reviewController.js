const Review = require("../models/Review");
const Product = require("../models/Product");

async function recomputeProductRating(productId) {
  const reviews = await Review.find({ product: productId });
  const reviewsCount = reviews.length;
  const rating = reviewsCount === 0 ? 4.5 : reviews.reduce((sum, r) => sum + r.rating, 0) / reviewsCount;
  await Product.updateOne({ _id: productId }, { rating: Math.round(rating * 10) / 10, reviewsCount });
}

async function listForProduct(req, res, next) {
  try {
    const reviews = await Review.find({ product: req.params.productId }).sort({ createdAt: -1 });
    res.status(200).json(reviews);
  } catch (err) {
    next(err);
  }
}

async function create(req, res, next) {
  try {
    const { name, rating, comment } = req.body;
    if (!name || !rating || !comment) {
      return res.status(400).json({ message: "name, rating and comment are required" });
    }
    const product = await Product.findById(req.params.productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    const review = await Review.create({
      product: product._id,
      user: req.user ? req.user._id : null,
      name,
      rating,
      comment,
    });

    await recomputeProductRating(product._id);

    res.status(201).json({ review });
  } catch (err) {
    next(err);
  }
}

async function markHelpful(req, res, next) {
  try {
    const { voterKey } = req.body;
    const review = await Review.findById(req.params.id);
    if (!review) return res.status(404).json({ message: "Review not found" });

    const key = voterKey || req.ip;
    if (review.helpfulVoters.includes(key)) {
      return res.status(200).json({ helpfulCount: review.helpfulCount, alreadyVoted: true });
    }

    review.helpfulVoters.push(key);
    review.helpfulCount += 1;
    await review.save();

    res.status(200).json({ helpfulCount: review.helpfulCount, alreadyVoted: false });
  } catch (err) {
    next(err);
  }
}

module.exports = { listForProduct, create, markHelpful };
