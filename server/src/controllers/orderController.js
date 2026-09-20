const Order = require("../models/Order");
const Product = require("../models/Product");
const Coupon = require("../models/Coupon");
const { generateOrderNumber } = require("../utils/orderNumber");
const { normalizePhone } = require("../utils/phone");
const { checkCoupon } = require("./couponController");
const { sendOrderConfirmationEmail, sendOrderStatusEmail } = require("../utils/sendEmail");

const FREE_SHIPPING_THRESHOLD = 3000;
const SHIPPING_FEE = 199;

async function create(req, res, next) {
  try {
    const { items, customer, couponCode } = req.body;

    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: "items must be a non-empty array" });
    }
    if (!customer || !customer.name || !customer.phone || !customer.city || !customer.address) {
      return res.status(400).json({ message: "customer name, phone, city and address are required" });
    }

    // Re-price every item from the live catalog - never trust client-submitted prices/totals.
    const orderItems = [];
    const stockUpdates = [];
    for (const line of items) {
      const product = await Product.findById(line.productId);
      if (!product || !product.isActive) {
        return res.status(400).json({ message: `Product ${line.productId} is not available` });
      }
      const quantity = Math.max(1, parseInt(line.quantity, 10) || 1);
      if (product.stock < quantity) {
        return res.status(400).json({ message: `Insufficient stock for ${product.title}` });
      }
      orderItems.push({
        product: product._id,
        title: product.title,
        image: product.image,
        price: product.price,
        quantity,
      });
      stockUpdates.push({ productId: product._id, quantity });
    }

    const subtotal = orderItems.reduce((sum, i) => sum + i.price * i.quantity, 0);

    let discount = 0;
    let appliedCoupon = null;
    if (couponCode) {
      const result = await checkCoupon(couponCode, subtotal);
      if (!result.valid) return res.status(400).json({ message: result.message });
      discount = result.discount;
      appliedCoupon = result.coupon;
    }

    const shippingFee = subtotal - discount >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
    const total = Math.max(0, subtotal - discount) + shippingFee;

    const orderNumber = await generateOrderNumber();

    let userId = null;
    if (req.user) userId = req.user._id;

    const order = await Order.create({
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

    // Decrement stock (best-effort, sequential - catalog/order volume is small).
    for (const update of stockUpdates) {
      await Product.updateOne({ _id: update.productId }, { $inc: { stock: -update.quantity } });
    }

    if (appliedCoupon) {
      await Coupon.updateOne({ _id: appliedCoupon._id }, { $inc: { usedCount: 1 } });
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
