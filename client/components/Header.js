"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@/lib/authContext";
import { useCart } from "@/lib/cartContext";
import { FREE_SHIPPING_THRESHOLD } from "@/lib/constants";

const NAV_LINKS = [
  { href: "/category/audio-and-speakers", label: "Audio & Speakers" },
  { href: "/category/smart-wearables", label: "Smart Wearables" },
  { href: "/category/gaming-and-pc-accessories", label: "Gaming & PC" },
];

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" strokeLinecap="round" />
    </svg>
  );
}

export default function Header({ productCount }) {
  const { count } = useCart();
  const { user, isAdmin, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [query, setQuery] = useState("");

  function onSearch(e) {
    e.preventDefault();
    const q = query.trim();
    router.push(q ? `/category/all?search=${encodeURIComponent(q)}` : "/category/all");
  }

  const isAllCatalog = pathname === "/" || pathname === "/category/all";
  const searchPlaceholder = productCount ? `Search ${productCount}+ products…` : "Search products…";

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#05060a]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image src="/zyvron-icon.png" alt="Zyvron" width={32} height={32} className="rounded" />
          <span className="hidden font-heading text-lg font-bold text-white sm:block">
            Zyvron Tech Accessories
          </span>
        </Link>

        <form onSubmit={onSearch} className="hidden flex-1 items-center md:flex">
          <div className="relative w-full">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/50">
              <SearchIcon />
            </span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={searchPlaceholder}
              className="w-full rounded-full border border-white/10 bg-white/5 py-2 pl-10 pr-4 text-sm text-white placeholder:text-white/40 focus:border-cyan-400"
            />
          </div>
        </form>

        <nav className="ml-auto flex items-center gap-3 text-sm text-white/80">
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

      <div className="hidden border-t border-white/10 md:block">
        <div className="mx-auto flex max-w-7xl items-center gap-6 px-4 py-2.5 text-sm font-semibold text-white/70 sm:px-6">
          <Link
            href="/category/all"
            className={`flex items-center gap-2 pb-0.5 ${
              isAllCatalog ? "border-b-2 border-cyan-400 text-white" : "hover:text-white"
            }`}
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
            </svg>
            All Catalog
          </Link>

          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="whitespace-nowrap hover:text-white">
              {link.label}
            </Link>
          ))}

          <Link href="/category/all?filter=flash" className="whitespace-nowrap text-amber-400 hover:text-amber-300">
            ⚡ Flash Sale
          </Link>
          <Link href="/about" className="whitespace-nowrap hover:text-white">
            About
          </Link>
          <Link href="/contact" className="whitespace-nowrap hover:text-white">
            Contact
          </Link>
          <Link href="/track-order" className="whitespace-nowrap hover:text-white">
            📦 Track Order
          </Link>

          <div className="ml-auto hidden shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/5 py-1.5 pl-2 pr-4 xl:flex">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-500/20 text-violet-300">
              ✦
            </span>
            <span className="leading-tight">
              <span className="block text-[11px] font-bold text-white">
                FREE DELIVERY OVER RS. {FREE_SHIPPING_THRESHOLD.toLocaleString()}
              </span>
              <span className="block text-[10px] font-normal text-white/50">
                NATIONWIDE • FAST &amp; RELIABLE
              </span>
            </span>
          </div>
        </div>
      </div>

      <form onSubmit={onSearch} className="border-t border-white/10 px-4 py-2 md:hidden">
        <div className="relative w-full">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/50">
            <SearchIcon />
          </span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={searchPlaceholder}
            className="w-full rounded-full border border-white/10 bg-white/5 py-2 pl-10 pr-4 text-sm text-white placeholder:text-white/40 focus:border-cyan-400"
          />
        </div>
      </form>
    </header>
  );
}
