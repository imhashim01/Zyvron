"use client";

import { useEffect, useState } from "react";

/**
 * Heading + "Ask AI Assistant" + "Compare Products" toolbar for the all-products
 * view - one line on desktop/tablet, stacked on mobile. Neither AI assistant
 * nor product comparison have a real backend in this rebuild yet, so both
 * show an honest "coming soon" notice, same pattern as FloatingActions.
 */
export default function ProductsToolbar({ title }) {
  const [notice, setNotice] = useState(null);

  useEffect(() => {
    if (!notice) return;
    const timer = setTimeout(() => setNotice(null), 2500);
    return () => clearTimeout(timer);
  }, [notice]);

  return (
    <div className="mb-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="font-heading text-2xl font-bold text-white">{title}</h1>
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setNotice("AI Assistant coming soon")}
            className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-white/80 transition hover:bg-white/10"
          >
            🤖 Ask AI Assistant
          </button>
          <button
            type="button"
            onClick={() => setNotice("Compare Products coming soon")}
            className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-white/80 transition hover:bg-white/10"
          >
            ⇅ Compare Products
          </button>
        </div>
      </div>
      {notice && <p className="mt-2 text-xs text-cyan-300">{notice}</p>}
    </div>
  );
}
