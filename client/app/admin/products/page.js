"use client";

import { useEffect, useState } from "react";
import { apiJson } from "@/lib/api";
import { formatPKR } from "@/lib/format";
import { CATEGORY_META } from "@/lib/constants";

const EMPTY_FORM = {
  title: "",
  category: "audio-speakers",
  price: "",
  compareAtPrice: "",
  image: "",
  badge: "",
  description: "",
  stock: "10",
  isFlashSale: false,
};

export default function AdminProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [form, setForm] = useState(EMPTY_FORM);
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  async function load() {
    setLoading(true);
    try {
      const data = await apiJson("/products?limit=200");
      setProducts(data?.products || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  function startAdd() {
    setForm(EMPTY_FORM);
    setEditingId(null);
    setShowForm(true);
  }

  function startEdit(p) {
    setForm({
      title: p.title,
      category: p.category,
      price: p.price,
      compareAtPrice: p.compareAtPrice || "",
      image: p.image || "",
      badge: p.badge || "",
      description: p.description || "",
      stock: p.stock ?? 0,
      isFlashSale: !!p.isFlashSale,
    });
    setEditingId(p._id);
    setShowForm(true);
  }

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    const payload = {
      ...form,
      price: Number(form.price),
      compareAtPrice: form.compareAtPrice ? Number(form.compareAtPrice) : undefined,
      stock: Number(form.stock),
    };
    try {
      if (editingId) {
        await apiJson(`/products/${editingId}`, { method: "PUT", body: JSON.stringify(payload) });
      } else {
        await apiJson("/products", { method: "POST", body: JSON.stringify(payload) });
      }
      setShowForm(false);
      load();
    } catch (err) {
      setError(err.message);
    }
  }

  async function onDelete(id) {
    if (!confirm("Delete this product?")) return;
    try {
      await apiJson(`/products/${id}`, { method: "DELETE" });
      load();
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-heading text-lg font-bold text-white">
          Products ({products.length})
        </h2>
        <button
          onClick={startAdd}
          className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-bold text-black hover:bg-cyan-300"
        >
          + Add Product
        </button>
      </div>

      {error && <p className="mb-4 text-sm text-red-400">{error}</p>}

      {showForm && (
        <form onSubmit={onSubmit} className="mb-6 grid gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-5 sm:grid-cols-2">
          <input
            required
            placeholder="Title"
            value={form.title}
            onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-cyan-400 focus:outline-none"
          />
          <select
            value={form.category}
            onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white focus:border-cyan-400 focus:outline-none"
          >
            {Object.entries(CATEGORY_META).map(([slug, meta]) => (
              <option key={slug} value={slug} className="bg-[#05060a]">
                {meta.name}
              </option>
            ))}
          </select>
          <input
            required
            type="number"
            placeholder="Price"
            value={form.price}
            onChange={(e) => setForm((f) => ({ ...f, price: e.target.value }))}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-cyan-400 focus:outline-none"
          />
          <input
            type="number"
            placeholder="Compare-at price (optional)"
            value={form.compareAtPrice}
            onChange={(e) => setForm((f) => ({ ...f, compareAtPrice: e.target.value }))}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-cyan-400 focus:outline-none"
          />
          <input
            placeholder="Image URL"
            value={form.image}
            onChange={(e) => setForm((f) => ({ ...f, image: e.target.value }))}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-cyan-400 focus:outline-none sm:col-span-2"
          />
          <input
            placeholder="Badge (e.g. Hot Deal)"
            value={form.badge}
            onChange={(e) => setForm((f) => ({ ...f, badge: e.target.value }))}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-cyan-400 focus:outline-none"
          />
          <input
            required
            type="number"
            placeholder="Stock"
            value={form.stock}
            onChange={(e) => setForm((f) => ({ ...f, stock: e.target.value }))}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-cyan-400 focus:outline-none"
          />
          <textarea
            placeholder="Description"
            value={form.description}
            onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
            rows={2}
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-cyan-400 focus:outline-none sm:col-span-2"
          />
          <label className="flex items-center gap-2 text-sm text-white/70">
            <input
              type="checkbox"
              checked={form.isFlashSale}
              onChange={(e) => setForm((f) => ({ ...f, isFlashSale: e.target.checked }))}
            />
            Flash Sale
          </label>
          <div className="flex gap-3 sm:col-span-2">
            <button type="submit" className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-bold text-black hover:bg-cyan-300">
              {editingId ? "Save Changes" : "Create Product"}
            </button>
            <button type="button" onClick={() => setShowForm(false)} className="rounded-full border border-white/20 px-5 py-2 text-sm text-white hover:border-cyan-300">
              Cancel
            </button>
          </div>
        </form>
      )}

      {loading ? (
        <p className="text-white/50">Loading products…</p>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/5 text-white/60">
              <tr>
                <th className="p-3">Title</th>
                <th className="p-3">Category</th>
                <th className="p-3">Price</th>
                <th className="p-3">Stock</th>
                <th className="p-3"></th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p._id} className="border-t border-white/10 text-white/80">
                  <td className="p-3">{p.title}</td>
                  <td className="p-3">{CATEGORY_META[p.category]?.name || p.category}</td>
                  <td className="p-3">{formatPKR(p.price)}</td>
                  <td className="p-3">{p.stock ?? "-"}</td>
                  <td className="p-3 text-right">
                    <button onClick={() => startEdit(p)} className="mr-3 text-cyan-300 hover:underline">
                      Edit
                    </button>
                    <button onClick={() => onDelete(p._id)} className="text-red-400 hover:underline">
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
