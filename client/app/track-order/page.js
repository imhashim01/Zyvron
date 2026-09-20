"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { apiJson } from "@/lib/api";
import { formatPKR, STATUS_LABELS, STATUS_ORDER } from "@/lib/format";
import ComplaintForm from "@/components/ComplaintForm";

function TrackOrderInner() {
  const searchParams = useSearchParams();
  const [orderNumber, setOrderNumber] = useState(searchParams.get("order") || "");
  const [phone, setPhone] = useState("");
  const [order, setOrder] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const pollRef = useRef(null);

  async function lookup(e) {
    e?.preventDefault();
    if (!orderNumber.trim() || !phone.trim()) {
      setError("Enter both your tracking number and phone number.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const data = await apiJson(
        `/orders/track/${encodeURIComponent(orderNumber.trim())}?phone=${encodeURIComponent(phone.trim())}`
      );
      setOrder(data.order || data);
    } catch (err) {
      setError(err.message || "Order not found. Check your tracking number and phone.");
      setOrder(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!order) return;
    pollRef.current = setInterval(async () => {
      try {
        const data = await apiJson(
          `/orders/track/${encodeURIComponent(orderNumber.trim())}?phone=${encodeURIComponent(phone.trim())}`
        );
        setOrder(data.order || data);
      } catch {
        // keep showing last known status on a transient failure
      }
    }, 15000);
    return () => clearInterval(pollRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [order?.orderNumber]);

  const stageIndex = order ? STATUS_ORDER.indexOf(order.status) : -1;
  const isRejected = order?.status === "rejected";

  return (
    <div className="mx-auto max-w-2xl px-4 py-14 sm:px-6">
      <h1 className="mb-6 font-heading text-2xl font-bold text-white">Track Your Order</h1>
      <form onSubmit={lookup} className="mb-8 flex flex-col gap-3 sm:flex-row">
        <input
          value={orderNumber}
          onChange={(e) => setOrderNumber(e.target.value)}
          placeholder="Tracking number (e.g. TP-123456)"
          className="flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-cyan-400"
        />
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone number used at checkout"
          className="flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-cyan-400"
        />
        <button
          type="submit"
          disabled={loading}
          className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold text-black hover:bg-cyan-300"
        >
          {loading ? "Searching…" : "Track"}
        </button>
      </form>

      {error && <p className="mb-6 text-sm text-red-400">{error}</p>}

      {order && (
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <div className="mb-4 flex items-center justify-between">
            <span className="font-mono font-bold text-cyan-300">{order.orderNumber}</span>
            <span className="text-sm text-white/50">Total: {formatPKR(order.total)}</span>
          </div>

          {isRejected ? (
            <p className="rounded-lg bg-red-500/10 p-4 text-sm font-semibold text-red-400">
              This order was rejected. Please contact support if you have questions.
            </p>
          ) : (
            <div className="flex items-center justify-between">
              {STATUS_ORDER.map((s, i) => (
                <div key={s} className="flex flex-1 flex-col items-center text-center">
                  <div
                    className={`mb-2 h-3 w-3 rounded-full ${
                      i <= stageIndex ? "bg-cyan-400" : "bg-white/15"
                    }`}
                  />
                  <span className={`text-xs ${i <= stageIndex ? "text-white" : "text-white/40"}`}>
                    {STATUS_LABELS[s]}
                  </span>
                </div>
              ))}
            </div>
          )}

          <ComplaintForm orderNumber={order.orderNumber} />
        </div>
      )}
    </div>
  );
}

export default function TrackOrderPage() {
  return (
    <Suspense>
      <TrackOrderInner />
    </Suspense>
  );
}
