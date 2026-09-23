const mongoose = require("mongoose");

const colorSchema = new mongoose.Schema(
  { name: String, hex: String },
  { _id: false }
);

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true, index: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
    brand: { type: mongoose.Schema.Types.ObjectId, ref: "Brand", default: null },
    price: { type: Number, required: true, min: 0 },
    compareAtPrice: { type: Number, min: 0 },
    rating: { type: Number, default: 4.5, min: 0, max: 5 },
    reviewsCount: { type: Number, default: 0 },
    image: { type: String, required: true },
    images: { type: [String], default: [] },
    badge: { type: String, default: "" },
    description: { type: String, default: "" },
    features: { type: [String], default: [] },
    tags: { type: [String], default: [], index: true },
    colors: { type: [colorSchema], default: [] },
    stock: { type: Number, default: 0, min: 0 },
    isFlashSale: { type: Boolean, default: false },
    flashSaleEndsAt: { type: Date, default: null },
    isFeatured: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

productSchema.index({ title: "text", tags: "text", description: "text" });

productSchema.virtual("inStock").get(function inStock() {
  return this.stock > 0;
});

productSchema.virtual("discountLabel").get(function discountLabel() {
  if (!this.compareAtPrice || this.compareAtPrice <= this.price) return null;
  const pct = Math.round(((this.compareAtPrice - this.price) / this.compareAtPrice) * 100);
  return `${pct}% OFF`;
});

productSchema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("Product", productSchema);
