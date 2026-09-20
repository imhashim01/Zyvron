"use client";

import { useEffect, useState } from "react";
import { apiJson } from "@/lib/api";

export default function AdminComplaintsPage() {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiJson("/admin/complaints")
      .then((data) => setComplaints(Array.isArray(data) ? data : data?.complaints || []))
      .catch(() => setComplaints([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h2 className="mb-4 font-heading text-lg font-bold text-white">
        Complaints ({complaints.length})
      </h2>
      {loading ? (
        <p className="text-white/50">Loading…</p>
      ) : complaints.length === 0 ? (
        <p className="text-white/50">No complaints yet.</p>
      ) : (
        <div className="space-y-3">
          {complaints.map((c) => (
            <div key={c._id} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <div className="mb-1 flex items-center justify-between">
                <span className="font-mono font-semibold text-cyan-300">{c.orderNumber}</span>
                <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs">{c.status}</span>
              </div>
              <p className="text-sm text-white/70">{c.message}</p>
              <p className="mt-1 text-xs text-white/40">{new Date(c.createdAt).toLocaleString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
