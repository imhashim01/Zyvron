"use client";

import { useEffect, useState } from "react";
import { apiJson, getApiBase, getAccessToken } from "@/lib/api";
import { formatPKR, STATUS_LABELS } from "@/lib/format";

const FILTERS = ["all", "pending", "accepted", "dispatched", "rejected", "delivered"];
const ACTIONS = {
  pending: [["accepted", "Accept"], ["rejected", "Reject"]],
  accepted: [["dispatched", "Dispatch"], ["rejected", "Reject"]],
  dispatched: [["delivered", "Delivered"]],
  rejected: [],
  delivered: [],
};

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function load(status) {
    setLoading(true);
    try {
      const qs = status && status !== "all" ? `?status=${status}` : "";
      const data = await apiJson(`/admin/orders${qs}`);
      setOrders(Array.isArray(data) ? data : data?.orders || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load(filter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  async function updateStatus(id, status) {
    try {
      await apiJson(`/admin/orders/${id}/status`, {
        method: "PATCH",
        body: JSON.stringify({ status }),
      });
      load(filter);
    } catch (err) {
      setError(err.message);
    }
  }

  async function deleteOrder(id) {
    if (!confirm("Permanently delete this order?")) return;
    try {
      await apiJson(`/admin/orders/${id}`, { method: "DELETE" });
      load(filter);
    } catch (err) {
      setError(err.message);
    }
  }

  async function exportCsv() {
    try {
      const res = await fetch(`${getApiBase()}/admin/orders/export.csv`, {
        headers: { Authorization: `Bearer ${getAccessToken()}` },
        credentials: "include",
      });
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "orders.csv";
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      setError("Couldn't export orders.");
    }
  }

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold ${
                filter === f ? "bg-cyan-400 text-black" : "bg-white/5 text-white/70 hover:bg-white/10"
              }`}
            >
              {f === "all" ? "All" : STATUS_LABELS[f]}
            </button>
          ))}
        </div>
        <button onClick={exportCsv} className="rounded-full border border-white/20 px-4 py-2 text-sm text-white hover:border-cyan-300">
          Export CSV
        </button>
      </div>

      {error && <p className="mb-4 text-sm text-red-400">{error}</p>}

      {loading ? (
        <p className="text-white/50">Loading orders…</p>
      ) : orders.length === 0 ? (
        <p className="text-white/50">No orders in this filter.</p>
      ) : (
        <div className="space-y-3">
          {orders.map((o) => (
            <div key={o._id} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="font-mono font-bold text-cyan-300">{o.orderNumber}</span>{" "}
                  <span className="ml-2 rounded-full bg-white/10 px-2 py-0.5 text-xs">
                    {STATUS_LABELS[o.status] || o.status}
                  </span>
                </div>
                <span className="font-semibold text-white">{formatPKR(o.total)}</span>
              </div>
              <p className="text-sm text-white/60">
                {o.customer?.name} · {o.customer?.phone} · {o.customer?.city}
              </p>
              <p className="text-xs text-white/40">{o.customer?.address}</p>
              <div className="mt-3 flex gap-2">
                {(ACTIONS[o.status] || []).map(([status, label]) => (
                  <button
                    key={status}
                    onClick={() => updateStatus(o._id, status)}
                    className="rounded-full bg-cyan-400/20 px-3 py-1 text-xs font-semibold text-cyan-300 hover:bg-cyan-400/30"
                  >
                    {label}
                  </button>
                ))}
                <button
                  onClick={() => deleteOrder(o._id)}
                  className="rounded-full px-3 py-1 text-xs font-semibold text-red-400 hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
