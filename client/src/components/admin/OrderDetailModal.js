"use client";

import CloseButton from "@/components/ui/CloseButton";
import Button from "@/components/ui/Button";
import { formatPKR, STATUS_LABELS } from "@/lib/format";
import { printOrderReceipt } from "@/lib/receipt";

function formatDateTime(value) {
  if (!value) return "";
  try {
    return new Date(value).toLocaleString("en-PK", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return "";
  }
}

/**
 * Full order detail view for the admin Orders tab - everything the order
 * list's compact card leaves out (full item list, cost breakdown, status
 * history), plus the Print Receipt action. Reads entirely off the order
 * object the admin orders list already fetches (GET /api/admin/orders
 * returns full Order documents), so this needs no extra API call.
 */
export default function OrderDetailModal({ order, onClose }) {
  if (!order) return null;

  const items = Array.isArray(order.items) ? order.items : [];

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-white/10 bg-[#0b1220] p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <p className="font-mono text-lg font-bold text-cyan-300">{order.orderNumber}</p>
            <p className="text-xs text-white/50">{formatDateTime(order.createdAt)}</p>
          </div>
          <CloseButton onClick={onClose} />
        </div>

        <span className="mb-4 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">
          {STATUS_LABELS[order.status] || order.status}
        </span>

        <div className="mb-4 rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <h3 className="mb-2 text-sm font-bold text-white/90">Customer</h3>
          <p className="text-sm text-white/70">{order.customer?.name}</p>
          <p className="text-sm text-white/70">
            {order.customer?.phone}
            {order.customer?.email ? ` · ${order.customer.email}` : ""}
          </p>
          <p className="text-sm text-white/70">{order.customer?.city}</p>
          <p className="text-sm text-white/50">{order.customer?.address}</p>
        </div>

        <div className="mb-4 rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <h3 className="mb-2 text-sm font-bold text-white/90">Items ({items.length})</h3>
          <div className="space-y-2">
            {items.map((item, i) => (
              <div key={i} className="flex items-center justify-between gap-3 text-sm">
                <div className="text-white/70">
                  {item.title} <span className="text-white/40">x{item.quantity}</span>
                </div>
                <div className="shrink-0 text-white/80">{formatPKR(item.price * item.quantity)}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm">
          <div className="flex justify-between text-white/60">
            <span>Subtotal</span>
            <span>{formatPKR(order.subtotal)}</span>
          </div>
          {order.discount > 0 && (
            <div className="flex justify-between text-emerald-400">
              <span>Discount{order.couponCode ? ` (${order.couponCode})` : ""}</span>
              <span>-{formatPKR(order.discount)}</span>
            </div>
          )}
          <div className="flex justify-between text-white/60">
            <span>Shipping</span>
            <span>{order.shippingFee ? formatPKR(order.shippingFee) : "Free"}</span>
          </div>
          <div className="mt-2 flex justify-between border-t border-white/10 pt-2 text-base font-bold text-white">
            <span>Total</span>
            <span>{formatPKR(order.total)}</span>
          </div>
          <p className="mt-2 text-xs text-white/40">Payment: {order.paymentMethod || "COD"}</p>
        </div>

        {order.statusHistory?.length > 0 && (
          <div className="mb-5 rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <h3 className="mb-2 text-sm font-bold text-white/90">Status History</h3>
            <div className="space-y-1">
              {order.statusHistory.map((h, i) => (
                <div key={i} className="flex justify-between text-xs text-white/50">
                  <span>{STATUS_LABELS[h.status] || h.status}</span>
                  <span>{formatDateTime(h.changedAt)}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-3">
          <Button variant="primary" onClick={() => printOrderReceipt(order)}>
            Print Receipt
          </Button>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}
