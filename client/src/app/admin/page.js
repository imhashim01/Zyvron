"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { apiJson } from "@/lib/api";
import { formatPKR, STATUS_LABELS } from "@/lib/format";
import Card from "@/components/ui/Card";

function StatCard({ label, value, hint }) {
  return (
    <Card className="p-5">
      <p className="text-xs font-semibold uppercase tracking-widest text-white/50">{label}</p>
      <p className="mt-2 font-heading text-2xl font-black text-white">{value}</p>
      {hint && <p className="mt-1 text-xs text-white/40">{hint}</p>}
    </Card>
  );
}

export default function AdminDashboardPage() {
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;
    apiJson("/admin/summary")
      .then((data) => {
        if (!cancelled) setSummary(data);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) return <p className="text-white/50">Loading dashboard…</p>;
  if (error) return <p className="text-sm text-red-400">{error}</p>;
  if (!summary) return null;

  const { revenue, orders, recentOrders, topProducts, lowStock } = summary;

  return (
    <div className="space-y-8">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Revenue (all time)" value={formatPKR(revenue.allTime)} hint="Accepted, dispatched & delivered orders" />
        <StatCard label="Revenue (last 30 days)" value={formatPKR(revenue.last30Days)} />
        <StatCard label="Total Orders" value={orders.total} />
        <StatCard label="Pending Orders" value={orders.pending} hint={orders.pending > 0 ? "Needs review" : "All caught up"} />
      </div>

      <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {["pending", "accepted", "dispatched", "delivered", "rejected"].map((status) => (
          <Card key={status} className="p-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/50">{STATUS_LABELS[status]}</p>
            <p className="mt-1 font-heading text-xl font-bold text-white">{orders[status] ?? 0}</p>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="p-5">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-heading text-lg font-bold text-white">Recent Orders</h2>
            <Link href="/admin/orders" className="text-sm text-cyan-300 hover:underline">
              View all
            </Link>
          </div>
          {recentOrders.length === 0 ? (
            <p className="text-sm text-white/50">No orders yet.</p>
          ) : (
            <div className="space-y-3">
              {recentOrders.map((o) => (
                <div key={o._id} className="flex items-center justify-between border-b border-white/5 pb-3 last:border-0 last:pb-0">
                  <div>
                    <p className="font-mono text-sm font-semibold text-cyan-300">{o.orderNumber}</p>
                    <p className="text-xs text-white/50">{o.customer?.name}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-white">{formatPKR(o.total)}</p>
                    <p className="text-xs text-white/40">{STATUS_LABELS[o.status] || o.status}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>

        <Card className="p-5">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-heading text-lg font-bold text-white">Top Products</h2>
            <Link href="/admin/products" className="text-sm text-cyan-300 hover:underline">
              Manage products
            </Link>
          </div>
          {topProducts.length === 0 ? (
            <p className="text-sm text-white/50">No sales yet.</p>
          ) : (
            <div className="space-y-3">
              {topProducts.map((p) => (
                <div key={p.productId} className="flex items-center justify-between border-b border-white/5 pb-3 last:border-0 last:pb-0">
                  <p className="text-sm text-white/80">{p.title}</p>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-white">{p.unitsSold} sold</p>
                    <p className="text-xs text-white/40">{formatPKR(p.revenue)}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>

      <Card className={`p-5 ${lowStock.length > 0 ? "border-amber-400/30 bg-amber-400/[0.04]" : ""}`}>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-heading text-lg font-bold text-white">
            Low Stock Alert{lowStock.length > 0 ? ` (${lowStock.length})` : ""}
          </h2>
          <Link href="/admin/products" className="text-sm text-cyan-300 hover:underline">
            Manage products
          </Link>
        </div>
        {lowStock.length === 0 ? (
          <p className="text-sm text-white/50">Nothing is running low right now.</p>
        ) : (
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {lowStock.map((p) => (
              <div key={p._id} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
                <p className="truncate text-sm text-white/80">{p.title}</p>
                <span className={`ml-2 shrink-0 text-sm font-bold ${p.stock === 0 ? "text-red-400" : "text-amber-300"}`}>
                  {p.stock === 0 ? "Out of stock" : `${p.stock} left`}
                </span>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}
