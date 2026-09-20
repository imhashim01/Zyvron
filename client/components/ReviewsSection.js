"use client";

import { useEffect, useState } from "react";
import { apiJson } from "@/lib/api";
import StarRating from "./StarRating";

function getVoterKey() {
  if (typeof window === "undefined") return "";
  let key = window.localStorage.getItem("zyvron_voter_key");
  if (!key) {
    key = `v_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    window.localStorage.setItem("zyvron_voter_key", key);
  }
  return key;
}

export default function ReviewsSection({ productId }) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ name: "", rating: 5, comment: "" });
  const [submitting, setSubmitting] = useState(false);
  const [votedIds, setVotedIds] = useState([]);

  useEffect(() => {
    try {
      setVotedIds(JSON.parse(window.localStorage.getItem("zyvron_helpful_voted") || "[]"));
    } catch {
      setVotedIds([]);
    }
  }, []);

  useEffect(() => {
    let cancelled = false;
    apiJson(`/products/${productId}/reviews`)
      .then((data) => {
        if (!cancelled) setReviews(Array.isArray(data) ? data : data?.reviews || []);
      })
      .catch(() => {
        if (!cancelled) setReviews([]);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [productId]);

  async function onSubmit(e) {
    e.preventDefault();
    if (!form.name.trim() || !form.comment.trim()) return;
    setSubmitting(true);
    try {
      const created = await apiJson(`/products/${productId}/reviews`, {
        method: "POST",
        body: JSON.stringify(form),
      });
      setReviews((prev) => [created.review || created, ...prev]);
      setForm({ name: "", rating: 5, comment: "" });
    } catch {
      // surfaced implicitly by the form staying filled
    } finally {
      setSubmitting(false);
    }
  }

  async function markHelpful(id) {
    if (votedIds.includes(id)) return;
    try {
      await apiJson(`/reviews/${id}/helpful`, {
        method: "PATCH",
        body: JSON.stringify({ voterKey: getVoterKey() }),
      });
      setReviews((prev) =>
        prev.map((r) => (r._id === id ? { ...r, helpfulCount: (r.helpfulCount || 0) + 1 } : r))
      );
      const next = [...votedIds, id];
      setVotedIds(next);
      window.localStorage.setItem("zyvron_helpful_voted", JSON.stringify(next));
    } catch {
      // ignore
    }
  }

  return (
    <div className="mt-16">
      <h2 className="mb-6 font-heading text-xl font-bold text-white">Customer Reviews</h2>

      <form onSubmit={onSubmit} className="mb-8 space-y-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
        <p className="text-sm font-semibold text-white/80">Write a review</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            placeholder="Your name"
            className="flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-cyan-400 focus:outline-none"
          />
          <select
            value={form.rating}
            onChange={(e) => setForm((f) => ({ ...f, rating: Number(e.target.value) }))}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white focus:border-cyan-400 focus:outline-none"
          >
            {[5, 4, 3, 2, 1].map((n) => (
              <option key={n} value={n} className="bg-[#05060a]">
                {n} Star{n > 1 ? "s" : ""}
              </option>
            ))}
          </select>
        </div>
        <textarea
          value={form.comment}
          onChange={(e) => setForm((f) => ({ ...f, comment: e.target.value }))}
          placeholder="Share your experience with this product…"
          rows={3}
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-cyan-400 focus:outline-none"
        />
        <button
          type="submit"
          disabled={submitting}
          className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-bold text-black hover:bg-cyan-300"
        >
          {submitting ? "Submitting…" : "Submit Review"}
        </button>
      </form>

      {loading ? (
        <p className="text-white/50">Loading reviews…</p>
      ) : reviews.length === 0 ? (
        <p className="text-white/50">No reviews yet — be the first to review this product.</p>
      ) : (
        <div className="space-y-4">
          {reviews.map((r) => (
            <div key={r._id} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <div className="mb-1 flex items-center justify-between">
                <span className="font-semibold text-white/90">{r.name}</span>
                <StarRating rating={r.rating} />
              </div>
              <p className="text-sm text-white/60">{r.comment}</p>
              <button
                onClick={() => markHelpful(r._id)}
                disabled={votedIds.includes(r._id)}
                className="mt-2 text-xs font-semibold text-cyan-300 hover:underline disabled:cursor-not-allowed disabled:text-white/30"
              >
                👍 Helpful ({r.helpfulCount || 0})
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
