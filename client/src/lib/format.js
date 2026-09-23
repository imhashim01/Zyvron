export function formatPKR(amount) {
  const n = Number(amount);
  if (!Number.isFinite(n)) return "Rs. 0";
  return `Rs. ${n.toLocaleString("en-PK")}`;
}

export const STATUS_LABELS = {
  pending: "Pending",
  accepted: "Approved",
  rejected: "Rejected",
  dispatched: "Dispatched",
  delivered: "Delivered",
};

export const STATUS_ORDER = ["pending", "accepted", "dispatched", "delivered"];

export function discountPercent(price, compareAtPrice) {
  if (!compareAtPrice || compareAtPrice <= price) return null;
  return Math.round(((compareAtPrice - price) / compareAtPrice) * 100);
}
