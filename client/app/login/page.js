"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@/lib/authContext";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const user = await login(form.email, form.password);
      router.push(user?.role === "admin" ? "/admin" : "/account");
    } catch (err) {
      setError(err.message || "Invalid email or password.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-md px-4 py-16 sm:px-6">
      <h1 className="mb-6 font-heading text-2xl font-bold text-white">Login</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <input
          required
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-cyan-400"
        />
        <input
          required
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
          className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-cyan-400"
        />
        {error && <p className="text-sm text-red-400">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-full bg-cyan-400 py-3 text-sm font-bold text-black hover:bg-cyan-300 disabled:opacity-60"
        >
          {loading ? "Signing in…" : "Login"}
        </button>
      </form>
      <div className="mt-4 flex justify-between text-sm text-white/60">
        <Link href="/forgot-password" className="hover:text-cyan-300">
          Forgot password?
        </Link>
        <Link href="/register" className="hover:text-cyan-300">
          Create an account
        </Link>
      </div>
    </div>
  );
}
