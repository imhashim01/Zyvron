"use client";

import { useState } from "react";
import { apiJson } from "@/lib/api";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    try {
      const data = await apiJson("/auth/forgot-password", {
        method: "POST",
        body: JSON.stringify({ email }),
      });
      setMessage(data.message || "If that email exists, a reset link has been sent.");
      setStatus("success");
    } catch (err) {
      setMessage(err.message || "Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  return (
    <div className="mx-auto max-w-md px-4 py-16 sm:px-6">
      <h1 className="mb-2 font-heading text-2xl font-bold text-white">Forgot Password</h1>
      <p className="mb-6 text-sm text-white/60">
        Enter your account email and we&apos;ll send you a link to reset your password.
      </p>
      {status === "success" ? (
        <p className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-sm text-emerald-300">
          {message}
        </p>
      ) : (
        <form onSubmit={onSubmit} className="space-y-4">
          <input
            required
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-cyan-400"
          />
          {status === "error" && <p className="text-sm text-red-400">{message}</p>}
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full rounded-full bg-cyan-400 py-3 text-sm font-bold text-black hover:bg-cyan-300 disabled:opacity-60"
          >
            {status === "loading" ? "Sending…" : "Send Reset Link"}
          </button>
        </form>
      )}
    </div>
  );
}
