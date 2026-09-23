const Order = require("../models/Order");
const Product = require("../models/Product");

const REVENUE_STATUSES = ["accepted", "dispatched", "delivered"];
const LOW_STOCK_THRESHOLD = 5;
const RECENT_ORDERS_LIMIT = 8;
const TOP_PRODUCTS_LIMIT = 5;
const LOW_STOCK_LIMIT = 10;

/**
 * Admin dashboard landing summary: revenue, order counts by status, recent
 * orders, best-selling products, and a low-stock alert list. Everything is
 * computed live from Order/Product - nothing is cached or pre-aggregated,
 * since the catalog/order volume here doesn't yet justify that complexity.
 */
async function summary(req, res, next) {
  try {
    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);

    const [statsFacet, recentOrders, topProducts, lowStock, totalOrders] = await Promise.all([
      Order.aggregate([
        {
          $facet: {
            byStatus: [{ $group: { _id: "$status", count: { $sum: 1 } } }],
            allTimeRevenue: [
              { $match: { status: { $in: REVENUE_STATUSES } } },
              { $group: { _id: null, total: { $sum: "$total" } } },
            ],
            last30DaysRevenue: [
              { $match: { status: { $in: REVENUE_STATUSES }, createdAt: { $gte: thirtyDaysAgo } } },
              { $group: { _id: null, total: { $sum: "$total" } } },
            ],
          },
        },
      ]),
      Order.find().sort({ createdAt: -1 }).limit(RECENT_ORDERS_LIMIT).select("orderNumber customer.name total status createdAt"),
      Order.aggregate([
        { $match: { status: { $ne: "rejected" } } },
        { $unwind: "$items" },
        {
          $group: {
            _id: "$items.product",
            title: { $first: "$items.title" },
            image: { $first: "$items.image" },
            unitsSold: { $sum: "$items.quantity" },
            revenue: { $sum: { $multiply: ["$items.price", "$items.quantity"] } },
          },
        },
        { $sort: { unitsSold: -1 } },
        { $limit: TOP_PRODUCTS_LIMIT },
      ]),
      Product.find({ isActive: true, stock: { $lte: LOW_STOCK_THRESHOLD } })
        .sort({ stock: 1 })
        .limit(LOW_STOCK_LIMIT)
        .select("title stock image"),
      Order.countDocuments(),
    ]);

    const facet = statsFacet[0] || { byStatus: [], allTimeRevenue: [], last30DaysRevenue: [] };

    const ordersByStatus = { pending: 0, accepted: 0, dispatched: 0, delivered: 0, rejected: 0 };
    for (const row of facet.byStatus) {
      if (row._id in ordersByStatus) ordersByStatus[row._id] = row.count;
    }

    res.status(200).json({
      revenue: {
        allTime: facet.allTimeRevenue[0]?.total || 0,
        last30Days: facet.last30DaysRevenue[0]?.total || 0,
      },
      orders: {
        total: totalOrders,
        ...ordersByStatus,
      },
      recentOrders,
      topProducts: topProducts.map((p) => ({
        productId: p._id,
        title: p.title,
        image: p.image,
        unitsSold: p.unitsSold,
        revenue: p.revenue,
      })),
      lowStock,
      lowStockThreshold: LOW_STOCK_THRESHOLD,
    });
  } catch (err) {
    next(err);
  }
}

module.exports = { summary };
