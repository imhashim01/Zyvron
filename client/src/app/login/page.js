"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@/store/authContext";
import { Input } from "@/components/ui/Input";
import Logo from "@/components/ui/Logo";
import Reveal from "@/animations/Reveal";

const TRUST_POINTS = [
  { icon: "🚚", text: "Free delivery over Rs. 3,000" },
  { icon: "💵", text: "Cash on delivery, nationwide" },
  { icon: "🛡️", text: "7-day replacement warranty" },
  { icon: "📦", text: "Live order tracking" },
];

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="4.5" y="10.5" width="15" height="10" rx="2.5" />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" strokeLinecap="round" />
    </svg>
  );
}

function EyeIcon({ off }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      {off ? (
        <>
          <path
            d="M3 3l18 18M10.6 10.7a3 3 0 0 0 4.2 4.2M6.5 6.7C4.3 8.1 2.7 10 2 12c1.6 3.9 5.6 7 10 7 1.6 0 3.1-.4 4.5-1.1M9.9 4.2A10.8 10.8 0 0 1 12 4c4.4 0 8.4 3.1 10 7-.5 1.2-1.2 2.4-2.1 3.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      ) : (
        <>
          <path d="M2 12c1.6-3.9 5.6-7 10-7s8.4 3.1 10 7c-1.6 3.9-5.6 7-10 7s-8.4-3.1-10-7Z" strokeLinejoin="round" />
          <circle cx="12" cy="12" r="3" />
        </>
      )}
    </svg>
  );
}

function Spinner() {
  return (
    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3.5" />
      <path className="opacity-90" fill="currentColor" d="M4 12a8 8 0 0 1 8-8V0C5.4 0 0 5.4 0 12h4Z" />
    </svg>
  );
}

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
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
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-16">
      <Reveal>
        <div
          className="relative grid overflow-hidden rounded-[28px] border lg:grid-cols-[1.05fr_1fr]"
          style={{
            borderColor: "rgba(0, 195, 255, 0.22)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.024), 0 20px 60px rgba(0,0,0,0.35), 0 0 50px rgba(0,229,255,0.045)",
          }}
        >
          {/* Brand panel — same radial-glow treatment as the homepage hero, hidden on small screens */}
          <div
            className="relative hidden flex-col justify-between overflow-hidden p-10 lg:flex"
            style={{
              background:
                "radial-gradient(circle at 15% 15%, rgba(176,38,255,0.16), transparent 42%), radial-gradient(circle at 90% 0%, rgba(0, 153, 255, 0.12), transparent 40%), linear-gradient(135deg, #061522 0%, #040b15 55%, #08091a 100%)",
            }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-50"
              style={{
                backgroundImage:
                  "radial-gradient(1.5px 1.5px at 10% 20%, #7fe8ff, transparent), radial-gradient(1.5px 1.5px at 80% 12%, #c99bff, transparent), radial-gradient(1px 1px at 40% 75%, #7fe8ff, transparent), radial-gradient(1px 1px at 65% 88%, #7fe8ff, transparent), radial-gradient(1.5px 1.5px at 92% 55%, #c99bff, transparent), radial-gradient(1px 1px at 25% 48%, #7fe8ff, transparent)",
              }}
            />
            <div
              aria-hidden="true"
              className="animate-float-slow pointer-events-none absolute -left-16 top-10 h-64 w-64 rounded-full blur-3xl"
              style={{ background: "radial-gradient(circle, rgba(176,38,255,0.22), transparent 70%)" }}
            />
            <div
              aria-hidden="true"
              className="animate-float-slow delay-2 pointer-events-none absolute -right-10 bottom-10 h-56 w-56 rounded-full blur-3xl"
              style={{ background: "radial-gradient(circle, rgba(0,229,255,0.18), transparent 70%)" }}
            />

            <div className="relative">
              <Logo size="md" />
              <h2 className="mt-10 max-w-xs font-heading text-3xl font-black leading-[1.15] text-white">
                Your account, <span className="text-cyan-400">your orders</span>, all in one place.
              </h2>
              <p className="mt-4 max-w-xs text-sm text-white/60">
                Login to track deliveries, manage your wishlist, and check out faster next time.
              </p>
            </div>

            <ul className="relative space-y-3">
              {TRUST_POINTS.map((point) => (
                <li
                  key={point.text}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/75"
                >
                  <span aria-hidden="true" className="text-lg">
                    {point.icon}
                  </span>
                  {point.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Form panel */}
          <div className="relative bg-[#05060a] px-6 py-10 sm:px-10 sm:py-14">
            <div className="mb-8 flex justify-center lg:hidden">
              <Logo size="md" />
            </div>

            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Account Access</span>
            <h1 className="mt-2 font-heading text-2xl font-black text-white sm:text-3xl">Welcome back</h1>
            <p className="mt-2 text-sm text-white/60">Login with your email and password to continue.</p>

            <form onSubmit={onSubmit} className="mt-8 space-y-5">
              <Input
                required
                type="email"
                label="Email"
                placeholder="you@example.com"
                autoComplete="email"
                icon={<MailIcon />}
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              />

              <div>
                <Input
                  required
                  type={showPassword ? "text" : "password"}
                  label="Password"
                  placeholder="••••••••"
                  autoComplete="current-password"
                  icon={<LockIcon />}
                  value={form.password}
                  onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
                  trailing={
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                      className="rounded-full p-1.5 text-white/40 transition hover:text-cyan-300"
                    >
                      <EyeIcon off={showPassword} />
                    </button>
                  }
                />
                <div className="mt-2 flex justify-end">
                  <Link href="/forgot-password" className="text-xs font-semibold text-white/50 hover:text-cyan-300">
                    Forgot password?
                  </Link>
                </div>
              </div>

              {error && (
                <div className="flex items-start gap-2 rounded-xl border border-red-400/30 bg-red-400/10 p-3 text-sm text-red-300">
                  <span aria-hidden="true">⚠️</span>
                  <span>{error}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="shimmer-sweep relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl px-6 py-3.5 text-sm font-extrabold uppercase tracking-wide text-[#03101a] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,217,255,0.4)] active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                style={{ background: "linear-gradient(90deg, #00e5ff, #a855f7)" }}
              >
                {loading ? (
                  <>
                    <Spinner /> Signing in…
                  </>
                ) : (
                  "Login"
                )}
              </button>
            </form>

            <div className="my-7 flex items-center gap-4">
              <span className="h-px flex-1 bg-white/10" />
              <span className="text-xs font-semibold uppercase tracking-wide text-white/30">New here?</span>
              <span className="h-px flex-1 bg-white/10" />
            </div>

            <Link
              href="/register"
              className="flex w-full items-center justify-center rounded-2xl border border-white/15 bg-white/5 py-3.5 text-sm font-bold text-white transition hover:border-cyan-400/50 hover:bg-white/10 active:scale-[0.98]"
            >
              Create an account
            </Link>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
