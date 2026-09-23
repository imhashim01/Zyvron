"use client";

import { useEffect, useState } from "react";
import { apiJson } from "@/lib/api";

export default function AdminSubscribersPage() {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiJson("/admin/subscribers")
      .then((data) => setSubscribers(Array.isArray(data) ? data : data?.subscribers || []))
      .catch(() => setSubscribers([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h2 className="mb-4 font-heading text-lg font-bold text-white">
        Newsletter Subscribers ({subscribers.length})
      </h2>
      {loading ? (
        <p className="text-white/50">Loading…</p>
      ) : subscribers.length === 0 ? (
        <p className="text-white/50">No subscribers yet.</p>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/5 text-white/60">
              <tr>
                <th className="p-3">Phone</th>
                <th className="p-3">Source</th>
                <th className="p-3">Subscribed</th>
              </tr>
            </thead>
            <tbody>
              {subscribers.map((s) => (
                <tr key={s._id} className="border-t border-white/10 text-white/80">
                  <td className="p-3">{s.phone}</td>
                  <td className="p-3">{s.source}</td>
                  <td className="p-3">{new Date(s.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
