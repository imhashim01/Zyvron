"use client";

import { useEffect, useRef, useState } from "react";
import { apiJson, apiUpload } from "@/lib/api";
import { formatPKR } from "@/lib/format";

const EMPTY_FORM = {
  title: "",
  category: "",
  brand: "",
  price: "",
  compareAtPrice: "",
  photos: [],
  badge: "",
  description: "",
  stock: "10",
  isFlashSale: false,
  isFeatured: false,
};

export default function AdminProductsPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [form, setForm] = useState(EMPTY_FORM);
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [urlInput, setUrlInput] = useState("");
  const fileInputRef = useRef(null);

  async function load() {
    setLoading(true);
    try {
      const [productsData, categoriesData, brandsData] = await Promise.all([
        apiJson("/products?limit=200"),
        apiJson("/categories"),
        apiJson("/brands"),
      ]);
      setProducts(productsData?.products || []);
      setCategories(categoriesData || []);
      setBrands(brandsData || []);
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
    setForm({ ...EMPTY_FORM, category: categories[0]?._id || "" });
    setEditingId(null);
    setUrlInput("");
    setShowForm(true);
  }

  function startEdit(p) {
    // The cover (`image`) and the rest of the gallery (`images`) are two
    // separate fields on the Product document (see Product.js / the PDP's
    // galleryImages logic) - the admin form flattens them into one ordered
    // "photos" array with the cover always first, so editing/reordering is
    // one simple list instead of two disconnected fields.
    const photos = [p.image, ...(p.images || [])].filter(Boolean);
    setForm({
      title: p.title,
      category: p.category?._id || p.category,
      brand: p.brand?._id || p.brand || "",
      price: p.price,
      compareAtPrice: p.compareAtPrice || "",
      photos,
      badge: p.badge || "",
      description: p.description || "",
      stock: p.stock ?? 0,
      isFlashSale: !!p.isFlashSale,
      isFeatured: !!p.isFeatured,
    });
    setEditingId(p._id);
    setUrlInput("");
    setShowForm(true);
  }

  async function handleFiles(fileList) {
    const files = Array.from(fileList || []).filter((f) => f.type.startsWith("image/"));
    if (!files.length) return;
    setUploading(true);
    setError("");
    try {
      const body = new FormData();
      files.forEach((f) => body.append("files", f));
      const data = await apiUpload("/uploads/images?folder=products", body);
      const urls = data?.urls || [];
      setForm((f) => ({ ...f, photos: [...f.photos, ...urls] }));
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
    }
  }

  function addPhotoUrl() {
    const url = urlInput.trim();
    if (!url) return;
    setForm((f) => ({ ...f, photos: [...f.photos, url] }));
    setUrlInput("");
  }

  function removePhoto(index) {
    setForm((f) => ({ ...f, photos: f.photos.filter((_, i) => i !== index) }));
  }

  function makeCoverPhoto(index) {
    setForm((f) => {
      const photos = [...f.photos];
      const [chosen] = photos.splice(index, 1);
      return { ...f, photos: [chosen, ...photos] };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    if (!form.photos.length) {
      setError("Add at least one product photo before saving.");
      return;
    }
    const { photos, ...rest } = form;
    const payload = {
      ...rest,
      image: photos[0],
      images: photos.slice(1),
      brand: form.brand || undefined,
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
    if (!confirm("Permanently delete this product? This removes it from the database and cannot be undone.")) return;
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
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-cyan-400"
          />
          <select
            required
            value={form.category}
            onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white focus:border-cyan-400"
          >
            <option value="" disabled className="bg-[#05060a]">
              Select a category
            </option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id} className="bg-[#05060a]">
                {cat.name}
              </option>
            ))}
          </select>
          <select
            value={form.brand}
            onChange={(e) => setForm((f) => ({ ...f, brand: e.target.value }))}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white focus:border-cyan-400"
          >
            <option value="" className="bg-[#05060a]">
              No brand
            </option>
            {brands.map((b) => (
              <option key={b._id} value={b._id} className="bg-[#05060a]">
                {b.name}
              </option>
            ))}
          </select>
          <input
            required
            type="number"
            placeholder="Price"
            value={form.price}
            onChange={(e) => setForm((f) => ({ ...f, price: e.target.value }))}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-cyan-400"
          />
          <input
            type="number"
            placeholder="Compare-at price (optional)"
            value={form.compareAtPrice}
            onChange={(e) => setForm((f) => ({ ...f, compareAtPrice: e.target.value }))}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-cyan-400"
          />

          <div className="sm:col-span-2">
            <label className="mb-1.5 block text-xs font-semibold text-white/70">
              Product Photos {form.photos.length > 0 ? `(${form.photos.length})` : ""}
            </label>

            <div
              onClick={() => fileInputRef.current?.click()}
              onDragOver={(e) => {
                e.preventDefault();
                setDragActive(true);
              }}
              onDragLeave={() => setDragActive(false)}
              onDrop={(e) => {
                e.preventDefault();
                setDragActive(false);
                handleFiles(e.dataTransfer.files);
              }}
              className={`cursor-pointer rounded-xl border border-dashed p-5 text-center text-sm transition ${
                dragActive ? "border-cyan-400 bg-cyan-400/5" : "border-white/15 bg-white/[0.02] hover:border-white/30"
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={(e) => {
                  handleFiles(e.target.files);
                  e.target.value = "";
                }}
              />
              {uploading ? (
                <p className="text-white/60">Uploading…</p>
              ) : (
                <p className="text-white/50">
                  Drag &amp; drop photos here, or <span className="text-cyan-300">click to browse</span>
                  <br />
                  <span className="text-xs text-white/30">
                    First photo is the cover image. JPEG/PNG/WEBP, up to 8MB each.
                  </span>
                </p>
              )}
            </div>

            <div className="mt-2 flex gap-2">
              <input
                placeholder="...or paste an image URL"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addPhotoUrl();
                  }
                }}
                className="flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white placeholder:text-white/40 focus:border-cyan-400"
              />
              <button
                type="button"
                onClick={addPhotoUrl}
                className="rounded-full border border-white/20 px-4 py-2 text-xs text-white hover:border-cyan-300"
              >
                Add
              </button>
            </div>

            {form.photos.length > 0 && (
              <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-6">
                {form.photos.map((src, i) => (
                  <div
                    key={src + i}
                    className="group relative aspect-square overflow-hidden rounded-lg border border-white/10 bg-white/5"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt={`Photo ${i + 1}`} className="h-full w-full object-cover" />
                    {i === 0 && (
                      <span className="absolute left-1 top-1 rounded bg-cyan-400 px-1.5 py-0.5 text-[10px] font-bold text-black">
                        Cover
                      </span>
                    )}
                    <button
                      type="button"
                      onClick={() => removePhoto(i)}
                      aria-label="Remove photo"
                      className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-black/70 text-xs text-white opacity-0 transition group-hover:opacity-100"
                    >
                      ×
                    </button>
                    {i !== 0 && (
                      <button
                        type="button"
                        onClick={() => makeCoverPhoto(i)}
                        className="absolute inset-x-0 bottom-0 bg-black/70 py-0.5 text-[10px] font-semibold text-white opacity-0 transition group-hover:opacity-100"
                      >
                        Make cover
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <input
            placeholder="Badge (e.g. Hot Deal)"
            value={form.badge}
            onChange={(e) => setForm((f) => ({ ...f, badge: e.target.value }))}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-cyan-400"
          />
          <input
            required
            type="number"
            placeholder="Stock"
            value={form.stock}
            onChange={(e) => setForm((f) => ({ ...f, stock: e.target.value }))}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-cyan-400"
          />
          <textarea
            placeholder="Description"
            value={form.description}
            onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
            rows={2}
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-cyan-400 sm:col-span-2"
          />
          <label className="flex items-center gap-2 text-sm text-white/70">
            <input
              type="checkbox"
              checked={form.isFlashSale}
              onChange={(e) => setForm((f) => ({ ...f, isFlashSale: e.target.checked }))}
            />
            Flash Sale
          </label>
          <label className="flex items-center gap-2 text-sm text-white/70">
            <input
              type="checkbox"
              checked={form.isFeatured}
              onChange={(e) => setForm((f) => ({ ...f, isFeatured: e.target.checked }))}
            />
            Featured (Homepage Hero)
          </label>
          <div className="flex gap-3 sm:col-span-2">
            <button
              type="submit"
              disabled={uploading}
              className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-bold text-black hover:bg-cyan-300 disabled:opacity-50"
            >
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
                <th className="p-3"></th>
                <th className="p-3">Title</th>
                <th className="p-3">Category</th>
                <th className="p-3">Brand</th>
                <th className="p-3">Price</th>
                <th className="p-3">Stock</th>
                <th className="p-3"></th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p._id} className="border-t border-white/10 text-white/80">
                  <td className="p-3">
                    {p.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={p.image} alt="" className="h-10 w-10 rounded-lg object-cover" />
                    ) : (
                      <div className="h-10 w-10 rounded-lg bg-white/5" />
                    )}
                  </td>
                  <td className="p-3">{p.title}</td>
                  <td className="p-3">{p.category?.name || "-"}</td>
                  <td className="p-3">{p.brand?.name || "-"}</td>
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
