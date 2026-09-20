"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { apiJson } from "@/lib/api";
import { useAuth } from "@/lib/authContext";
import { formatPKR, STATUS_LABELS } from "@/lib/format";

export default function AccountPage() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();
  const [orders, setOrders] = useState([]);
  const [ordersLoading, setOrdersLoading] = useState(true);

  useEffect(() => {
    if (!loading && !user) router.push("/login");
  }, [loading, user, router]);

  useEffect(() => {
    if (!user) return;
    apiJson("/orders/mine")
      .then((data) => setOrders(Array.isArray(data) ? data : data?.orders || []))
      .catch(() => setOrders([]))
      .finally(() => setOrdersLoading(false));
  }, [user]);

  if (loading || !user) return null;

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold text-white">My Account</h1>
          <p className="text-sm text-white/50">
            {user.name} · {user.email}
          </p>
        </div>
        <button
          onClick={() => logout().then(() => router.push("/"))}
          className="rounded-full border border-white/20 px-4 py-2 text-sm text-white hover:border-cyan-300"
        >
          Logout
        </button>
      </div>

      <h2 className="mb-4 font-heading text-lg font-bold text-white">Order History</h2>
      {ordersLoading ? (
        <p className="text-white/50">Loading orders…</p>
      ) : orders.length === 0 ? (
        <p className="text-white/50">
          No orders yet.{" "}
          <Link href="/category/all" className="text-cyan-300 hover:underline">
            Start shopping →
          </Link>
        </p>
      ) : (
        <div className="space-y-3">
          {orders.map((o) => (
            <Link
              key={o.orderNumber}
              href={`/track-order?order=${o.orderNumber}`}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:border-cyan-400/40"
            >
              <div>
                <p className="font-mono font-semibold text-cyan-300">{o.orderNumber}</p>
                <p className="text-xs text-white/40">{new Date(o.createdAt).toLocaleDateString()}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-white">{formatPKR(o.total)}</p>
                <p className="text-xs text-white/50">{STATUS_LABELS[o.status] || o.status}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
