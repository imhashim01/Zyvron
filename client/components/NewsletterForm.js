"use client";

import { useState } from "react";
import { apiJson } from "@/lib/api";

export default function NewsletterForm() {
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("idle");

  async function onSubmit(e) {
    e.preventDefault();
    if (!/^0[0-9]{10}$/.test(phone.trim())) {
      setStatus("invalid");
      return;
    }
    setStatus("loading");
    try {
      await apiJson("/subscribers", {
        method: "POST",
        body: JSON.stringify({ phone: phone.trim(), source: "footer_newsletter" }),
      });
      setStatus("success");
      setPhone("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-2 sm:flex-row">
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="03XXXXXXXXX"
        className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-cyan-400 sm:w-56"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-bold text-black hover:bg-cyan-300"
      >
        {status === "loading" ? "Subscribing…" : "Subscribe"}
      </button>
      {status === "success" && <span className="text-xs text-emerald-400">Subscribed!</span>}
      {status === "invalid" && (
        <span className="text-xs text-red-400">Enter a valid 11-digit phone number.</span>
      )}
      {status === "error" && (
        <span className="text-xs text-red-400">Couldn&apos;t subscribe right now.</span>
      )}
    </form>
  );
}
