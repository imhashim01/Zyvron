"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@/lib/authContext";
import { useCart } from "@/lib/cartContext";

export default function Header() {
  const { count } = useCart();
  const { user, isAdmin, logout } = useAuth();
  const router = useRouter();
  const [query, setQuery] = useState("");

  function onSearch(e) {
    e.preventDefault();
    const q = query.trim();
    router.push(q ? `/category/all?search=${encodeURIComponent(q)}` : "/category/all");
  }

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#05060a]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image src="/zyvron-icon.png" alt="Zyvron" width={32} height={32} className="rounded" />
          <span className="hidden font-heading text-lg font-bold text-white sm:block">
            Zyvron
          </span>
        </Link>

        <form onSubmit={onSearch} className="hidden flex-1 items-center md:flex">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search wireless earbuds, smartwatches, gaming gear…"
            className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-cyan-400 focus:outline-none"
          />
        </form>

        <nav className="ml-auto flex items-center gap-3 text-sm text-white/80">
          <Link href="/track-order" className="hidden hover:text-cyan-300 sm:block">
            Track Order
          </Link>

          {user ? (
            <div className="flex items-center gap-3">
              {isAdmin && (
                <Link href="/admin" className="hidden hover:text-cyan-300 sm:block">
                  Admin
                </Link>
              )}
              <Link href="/account" className="hover:text-cyan-300">
                {user.name?.split(" ")[0] || "Account"}
              </Link>
              <button
                type="button"
                onClick={() => logout().then(() => router.push("/"))}
                className="hover:text-cyan-300"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link href="/login" className="hover:text-cyan-300">
              Login
            </Link>
          )}

          <Link
            href="/cart"
            className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
            aria-label="Cart"
          >
            <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M3 3h2l2.4 12.4a2 2 0 0 0 2 1.6h8.4a2 2 0 0 0 2-1.6L22 8H6" />
              <circle cx="9" cy="20" r="1.4" />
              <circle cx="17" cy="20" r="1.4" />
            </svg>
            {count > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-cyan-400 text-[11px] font-bold text-black">
                {count}
              </span>
            )}
          </Link>
        </nav>
      </div>

      <form onSubmit={onSearch} className="border-t border-white/10 px-4 py-2 md:hidden">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products…"
          className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-cyan-400 focus:outline-none"
        />
      </form>
    </header>
  );
}
