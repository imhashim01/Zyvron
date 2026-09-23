"use client";

import { useEffect, useState } from "react";
import { apiJson } from "@/lib/api";

const EMPTY_FORM = { name: "", logo: "", order: "0" };

export default function AdminBrandsPage() {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [form, setForm] = useState(EMPTY_FORM);
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  async function load() {
    setLoading(true);
    try {
      const data = await apiJson("/brands");
      setBrands(data || []);
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

  function startEdit(b) {
    setForm({ name: b.name, logo: b.logo || "", order: String(b.order ?? 0) });
    setEditingId(b._id);
    setShowForm(true);
  }

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    const payload = { name: form.name, logo: form.logo, order: Number(form.order) || 0 };
    try {
      if (editingId) {
        await apiJson(`/brands/${editingId}`, { method: "PUT", body: JSON.stringify(payload) });
      } else {
        await apiJson("/brands", { method: "POST", body: JSON.stringify(payload) });
      }
      setShowForm(false);
      load();
    } catch (err) {
      setError(err.message);
    }
  }

  async function onDelete(id) {
    if (!confirm("Delete this brand? Any products still assigned to it will keep the reference but won't show a brand name until reassigned.")) return;
    try {
      await apiJson(`/brands/${id}`, { method: "DELETE" });
      load();
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-heading text-lg font-bold text-white">Brands ({brands.length})</h2>
        <button
          onClick={startAdd}
          className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-bold text-black hover:bg-cyan-300"
        >
          + Add Brand
        </button>
      </div>

      {error && <p className="mb-4 text-sm text-red-400">{error}</p>}

      {showForm && (
        <form onSubmit={onSubmit} className="mb-6 grid gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-5 sm:grid-cols-2">
          <input
            required
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-cyan-400"
          />
          <div>
            <input
              placeholder="Logo URL (optional) - any link works, auto-hosted on save"
              value={form.logo}
              onChange={(e) => setForm((f) => ({ ...f, logo: e.target.value }))}
              className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-cyan-400"
            />
          </div>
          <input
            type="number"
            placeholder="Display order"
            value={form.order}
            onChange={(e) => setForm((f) => ({ ...f, order: e.target.value }))}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-cyan-400"
          />
          <div className="flex gap-3 sm:col-span-2">
            <button type="submit" className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-bold text-black hover:bg-cyan-300">
              {editingId ? "Save Changes" : "Create Brand"}
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="rounded-full border border-white/20 px-5 py-2 text-sm text-white hover:border-cyan-300"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {loading ? (
        <p className="text-white/50">Loading brands…</p>
      ) : brands.length === 0 ? (
        <p className="text-white/50">No brands yet — add one to get started.</p>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/5 text-white/60">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Slug</th>
                <th className="p-3">Logo</th>
                <th className="p-3">Order</th>
                <th className="p-3"></th>
              </tr>
            </thead>
            <tbody>
              {brands.map((b) => (
                <tr key={b._id} className="border-t border-white/10 text-white/80">
                  <td className="p-3">{b.name}</td>
                  <td className="p-3 text-white/50">{b.slug}</td>
                  <td className="p-3">
                    {b.logo ? (
                      <img src={b.logo} alt={b.name} className="h-6 w-auto object-contain" />
                    ) : (
                      "-"
                    )}
                  </td>
                  <td className="p-3">{b.order ?? 0}</td>
                  <td className="p-3 text-right">
                    <button onClick={() => startEdit(b)} className="mr-3 text-cyan-300 hover:underline">
                      Edit
                    </button>
                    <button onClick={() => onDelete(b._id)} className="text-red-400 hover:underline">
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
