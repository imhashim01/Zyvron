const Order = require("../models/Order");
const Product = require("../models/Product");
const Coupon = require("../models/Coupon");
const { generateOrderNumber } = require("../utils/orderNumber");
const { normalizePhone } = require("../utils/phone");
const { checkCoupon } = require("./couponController");
const { sendOrderConfirmationEmail, sendOrderStatusEmail } = require("../utils/sendEmail");

const FREE_SHIPPING_THRESHOLD = 3000;
const SHIPPING_FEE = 199;

/** Atomically claims `quantity` units of stock, only succeeding if enough stock is still available. */
async function claimStock(productId, quantity) {
  return Product.findOneAndUpdate(
    { _id: productId, isActive: true, stock: { $gte: quantity } },
    { $inc: { stock: -quantity } },
    { new: true }
  );
}

async function releaseStock(claims) {
  await Promise.all(
    claims.map((claim) => Product.updateOne({ _id: claim.productId }, { $inc: { stock: claim.quantity } }))
  );
}

/** Atomically claims one use of a coupon, only succeeding if it is still under its usage limit. */
async function claimCoupon(couponId) {
  return Coupon.findOneAndUpdate(
    { _id: couponId, $expr: { $lt: ["$usedCount", "$usageLimit"] } },
    { $inc: { usedCount: 1 } },
    { new: true }
  );
}

async function releaseCoupon(couponId) {
  await Coupon.updateOne({ _id: couponId }, { $inc: { usedCount: -1 } });
}

async function create(req, res, next) {
  const claimedStock = [];
  let claimedCouponId = null;
  try {
    const { items, customer, couponCode } = req.body;

    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: "items must be a non-empty array" });
    }
    if (!customer || !customer.name || !customer.phone || !customer.city || !customer.address) {
      return res.status(400).json({ message: "customer name, phone, city and address are required" });
    }

    // Re-price every item from the live catalog, and atomically claim its stock so two concurrent
    // orders can never both succeed against the last unit. Anything already claimed is released if a
    // later step in this order fails.
    const orderItems = [];
    for (const line of items) {
      const quantity = Math.max(1, parseInt(line.quantity, 10) || 1);
      const product = await claimStock(line.productId, quantity);
      if (!product) {
        const existing = await Product.findById(line.productId);
        await releaseStock(claimedStock);
        if (!existing || !existing.isActive) {
          return res.status(400).json({ message: `Product ${line.productId} is not available` });
        }
        return res.status(400).json({ message: `Insufficient stock for ${existing.title}` });
      }
      claimedStock.push({ productId: product._id, quantity });
      orderItems.push({
        product: product._id,
        title: product.title,
        image: product.image,
        price: product.price,
        quantity,
      });
    }

    const subtotal = orderItems.reduce((sum, i) => sum + i.price * i.quantity, 0);

    let discount = 0;
    let appliedCoupon = null;
    if (couponCode) {
      const result = await checkCoupon(couponCode, subtotal);
      if (!result.valid) {
        await releaseStock(claimedStock);
        return res.status(400).json({ message: result.message });
      }
      const claimed = await claimCoupon(result.coupon._id);
      if (!claimed) {
        await releaseStock(claimedStock);
        return res.status(400).json({ message: "Coupon usage limit reached" });
      }
      claimedCouponId = claimed._id;
      discount = result.discount;
      appliedCoupon = claimed;
    }

    const shippingFee = subtotal - discount >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
    const total = Math.max(0, subtotal - discount) + shippingFee;

    const orderNumber = await generateOrderNumber();

    let userId = null;
    if (req.user) userId = req.user._id;

    let order;
    try {
      order = await Order.create({
        orderNumber,
        user: userId,
        customer: {
          name: customer.name,
          phone: customer.phone,
          email: customer.email || (req.user ? req.user.email : undefined),
          city: customer.city,
          address: customer.address,
        },
        items: orderItems,
        subtotal,
        discount,
        couponCode: appliedCoupon ? appliedCoupon.code : null,
        shippingFee,
        total,
        status: "pending",
      });
    } catch (createErr) {
      await releaseStock(claimedStock);
      if (claimedCouponId) await releaseCoupon(claimedCouponId);
      throw createErr;
    }

    sendOrderConfirmationEmail(order).catch(() => {});

    res.status(201).json({ order });
  } catch (err) {
    next(err);
  }
}

async function track(req, res, next) {
  try {
    const { orderNumber } = req.params;
    const { phone } = req.query;
    const order = await Order.findOne({ orderNumber });
    if (!order) return res.status(404).json({ message: "Order not found" });

    if (!phone || normalizePhone(order.customer.phone) !== normalizePhone(phone)) {
      return res.status(403).json({ message: "Phone number does not match this order" });
    }

    res.status(200).json({
      orderNumber: order.orderNumber,
      status: order.status,
      statusHistory: order.statusHistory,
      items: order.items,
      subtotal: order.subtotal,
      discount: order.discount,
      shippingFee: order.shippingFee,
      total: order.total,
      customer: order.customer,
      createdAt: order.createdAt,
    });
  } catch (err) {
    next(err);
  }
}

async function mine(req, res, next) {
  try {
    const orders = await Order.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (err) {
    next(err);
  }
}

async function adminList(req, res, next) {
  try {
    const { status } = req.query;
    const filter = {};
    if (status && status !== "all") filter.status = status;
    const orders = await Order.find(filter).sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (err) {
    next(err);
  }
}

async function updateStatus(req, res, next) {
  try {
    const { status } = req.body;
    if (!Order.STATUSES.includes(status)) {
      return res.status(400).json({ message: `status must be one of: ${Order.STATUSES.join(", ")}` });
    }
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });

    order.status = status;
    order.statusHistory.push({ status, changedAt: new Date() });
    await order.save();

    sendOrderStatusEmail(order).catch(() => {});

    res.status(200).json(order);
  } catch (err) {
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.status(200).json({ message: "Order deleted" });
  } catch (err) {
    next(err);
  }
}

function csvEscape(value) {
  const str = String(value ?? "");
  if (/[",\n]/.test(str)) return `"${str.replace(/"/g, '""')}"`;
  return str;
}

async function exportCsv(req, res, next) {
  try {
    const { status } = req.query;
    const filter = {};
    if (status && status !== "all") filter.status = status;
    const orders = await Order.find(filter).sort({ createdAt: -1 });

    const headers = [
      "Order Number",
      "Date",
      "Status",
      "Customer Name",
      "Phone",
      "Address",
      "City",
      "Items",
      "Subtotal",
      "Discount",
      "Coupon",
      "Total",
      "Payment Method",
      "Customer Email",
    ];

    const rows = orders.map((o) => [
      o.orderNumber,
      o.createdAt.toISOString(),
      o.status,
      o.customer.name,
      o.customer.phone,
      o.customer.address,
      o.customer.city,
      o.items.map((i) => `${i.title} x${i.quantity}`).join("; "),
      o.subtotal,
      o.discount,
      o.couponCode || "",
      o.total,
      o.paymentMethod,
      o.customer.email || "",
    ]);

    const csv = [headers, ...rows].map((row) => row.map(csvEscape).join(",")).join("\n");

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=orders.csv");
    res.status(200).send(csv);
  } catch (err) {
    next(err);
  }
}

module.exports = { create, track, mine, adminList, updateStatus, remove, exportCsv };
