"use client";

import { useEffect, useState } from "react";
import { apiJson } from "@/lib/api";

const EMPTY_FORM = { code: "", type: "percent", value: "", minOrderAmount: "", usageLimit: "" };

export default function AdminCouponsPage() {
  const [coupons, setCoupons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [form, setForm] = useState(EMPTY_FORM);
  const [showForm, setShowForm] = useState(false);

  async function load() {
    setLoading(true);
    try {
      const data = await apiJson("/admin/coupons");
      setCoupons(Array.isArray(data) ? data : data?.coupons || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    try {
      await apiJson("/admin/coupons", {
        method: "POST",
        body: JSON.stringify({
          ...form,
          code: form.code.toUpperCase(),
          value: Number(form.value),
          minOrderAmount: form.minOrderAmount ? Number(form.minOrderAmount) : undefined,
          usageLimit: form.usageLimit ? Number(form.usageLimit) : undefined,
        }),
      });
      setForm(EMPTY_FORM);
      setShowForm(false);
      load();
    } catch (err) {
      setError(err.message);
    }
  }

  async function toggleActive(c) {
    try {
      await apiJson(`/admin/coupons/${c._id}`, {
        method: "PUT",
        body: JSON.stringify({ active: !c.active }),
      });
      load();
    } catch (err) {
      setError(err.message);
    }
  }

  async function remove(id) {
    if (!confirm("Delete this coupon?")) return;
    try {
      await apiJson(`/admin/coupons/${id}`, { method: "DELETE" });
      load();
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-heading text-lg font-bold text-white">Coupons</h2>
        <button onClick={() => setShowForm((s) => !s)} className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-bold text-black hover:bg-cyan-300">
          + Add Coupon
        </button>
      </div>

      {error && <p className="mb-4 text-sm text-red-400">{error}</p>}

      {showForm && (
        <form onSubmit={onSubmit} className="mb-6 grid gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-5 sm:grid-cols-2">
          <input
            required
            placeholder="Code (e.g. WELCOME10)"
            value={form.code}
            onChange={(e) => setForm((f) => ({ ...f, code: e.target.value }))}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-cyan-400"
          />
          <select
            value={form.type}
            onChange={(e) => setForm((f) => ({ ...f, type: e.target.value }))}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white focus:border-cyan-400"
          >
            <option value="percent" className="bg-[#05060a]">Percent off</option>
            <option value="fixed" className="bg-[#05060a]">Fixed amount off</option>
          </select>
          <input
            required
            type="number"
            placeholder="Value"
            value={form.value}
            onChange={(e) => setForm((f) => ({ ...f, value: e.target.value }))}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-cyan-400"
          />
          <input
            type="number"
            placeholder="Min order amount (optional)"
            value={form.minOrderAmount}
            onChange={(e) => setForm((f) => ({ ...f, minOrderAmount: e.target.value }))}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-cyan-400"
          />
          <input
            type="number"
            placeholder="Usage limit (optional)"
            value={form.usageLimit}
            onChange={(e) => setForm((f) => ({ ...f, usageLimit: e.target.value }))}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-cyan-400"
          />
          <button type="submit" className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-bold text-black hover:bg-cyan-300 sm:col-span-2">
            Create Coupon
          </button>
        </form>
      )}

      {loading ? (
        <p className="text-white/50">Loading coupons…</p>
      ) : coupons.length === 0 ? (
        <p className="text-white/50">No coupons yet.</p>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/5 text-white/60">
              <tr>
                <th className="p-3">Code</th>
                <th className="p-3">Discount</th>
                <th className="p-3">Used</th>
                <th className="p-3">Status</th>
                <th className="p-3"></th>
              </tr>
            </thead>
            <tbody>
              {coupons.map((c) => (
                <tr key={c._id} className="border-t border-white/10 text-white/80">
                  <td className="p-3 font-mono">{c.code}</td>
                  <td className="p-3">{c.type === "percent" ? `${c.value}%` : `Rs. ${c.value}`}</td>
                  <td className="p-3">{c.usedCount || 0}{c.usageLimit ? ` / ${c.usageLimit}` : ""}</td>
                  <td className="p-3">{c.active ? "Active" : "Inactive"}</td>
                  <td className="p-3 text-right">
                    <button onClick={() => toggleActive(c)} className="mr-3 text-cyan-300 hover:underline">
                      {c.active ? "Disable" : "Enable"}
                    </button>
                    <button onClick={() => remove(c._id)} className="text-red-400 hover:underline">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
