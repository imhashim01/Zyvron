"use client";

import { useState } from "react";
import { apiJson } from "@/lib/api";

export default function ComplaintForm({ orderNumber }) {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle");

  async function onSubmit(e) {
    e.preventDefault();
    if (!message.trim()) return;
    setStatus("loading");
    try {
      await apiJson("/complaints", {
        method: "POST",
        body: JSON.stringify({ orderNumber, message: message.trim() }),
      });
      setStatus("success");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return <p className="mt-4 text-sm text-emerald-400">Thanks — we&apos;ve received your message and will follow up.</p>;
  }

  return (
    <form onSubmit={onSubmit} className="mt-4">
      <p className="mb-2 text-sm font-semibold text-white/70">Have an issue with this order?</p>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Describe the issue…"
          className="flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-cyan-400 focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20"
        >
          {status === "loading" ? "Sending…" : "Submit"}
        </button>
      </div>
      {status === "error" && <p className="mt-1 text-xs text-red-400">Couldn&apos;t send that — try again.</p>}
    </form>
  );
}
