"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { apiJson } from "@/lib/api";

export default function ResetPasswordPage() {
  const { token } = useParams();
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("idle");

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }
    setStatus("loading");
    try {
      await apiJson(`/auth/reset-password/${token}`, {
        method: "POST",
        body: JSON.stringify({ password }),
      });
      setStatus("success");
      setTimeout(() => router.push("/login"), 2000);
    } catch (err) {
      setError(err.message || "This reset link is invalid or has expired.");
      setStatus("idle");
    }
  }

  return (
    <div className="mx-auto max-w-md px-4 py-16 sm:px-6">
      <h1 className="mb-6 font-heading text-2xl font-bold text-white">Reset Password</h1>
      {status === "success" ? (
        <p className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-sm text-emerald-300">
          Password reset! Redirecting you to login…
        </p>
      ) : (
        <form onSubmit={onSubmit} className="space-y-4">
          <input
            required
            type="password"
            placeholder="New password"
            minLength={8}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-cyan-400"
          />
          <input
            required
            type="password"
            placeholder="Confirm new password"
            minLength={8}
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-cyan-400"
          />
          {error && <p className="text-sm text-red-400">{error}</p>}
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full rounded-full bg-cyan-400 py-3 text-sm font-bold text-black hover:bg-cyan-300 disabled:opacity-60"
          >
            {status === "loading" ? "Resetting…" : "Reset Password"}
          </button>
        </form>
      )}
    </div>
  );
}
