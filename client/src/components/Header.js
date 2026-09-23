"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useAuth } from "@/store/authContext";
import { useCart } from "@/store/cartContext";
import { FREE_SHIPPING_THRESHOLD } from "@/data/constants";

const NAV_LINKS = [
  { href: "/category/all", label: "All Catalog", match: (p) => p === "/" || p === "/category/all" },
  { href: "/category/audio-and-speakers", label: "Audio & Speakers" },
  { href: "/category/smart-wearables", label: "Smart Wearables" },
  { href: "/category/gaming-and-pc-accessories", label: "Gaming & PC" },
  { href: "/category/all?filter=flash", label: "⚡ Flash Sale", accent: true },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/track-order", label: "📦 Track Order" },
];

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" strokeLinecap="round" />
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Rendered via a portal straight into document.body - the header has
 * backdrop-blur, and any ancestor with a filter/backdrop-filter/transform
 * becomes the containing block for position:fixed descendants, which would
 * otherwise shrink this overlay down to the header's own height instead of
 * the full viewport.
 */
function MobileSidebar({ open, onClose, pathname }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return createPortal(
    <div
      aria-hidden={!open}
      className={`fixed inset-0 z-50 transition-opacity duration-300 md:hidden ${
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div onClick={onClose} className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={`absolute inset-y-0 left-0 flex w-[80%] max-w-xs flex-col border-r border-white/10 bg-[#05060a] transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <span className="flex items-center gap-2">
            <Image src="/zyvron-icon.png" alt="Zyvron" width={28} height={28} className="rounded" />
            <span className="font-heading text-base font-bold text-white">Zyvron</span>
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-8 w-8 items-center justify-center rounded-full text-white/70 hover:bg-white/10 hover:text-white"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4">
          {NAV_LINKS.map((link) => {
            const isActive = link.match ? link.match(pathname) : pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-xl px-3 py-2.5 text-sm font-semibold transition ${
                  link.accent
                    ? "text-amber-400 hover:bg-amber-400/10"
                    : isActive
                    ? "bg-cyan-400/10 text-cyan-300"
                    : "text-white/80 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-white/10 px-5 py-4 text-xs text-white/50">
          Free delivery over Rs. {FREE_SHIPPING_THRESHOLD.toLocaleString()} • Nationwide COD
        </div>
      </div>
    </div>,
    document.body
  );
}

export default function Header({ productCount }) {
  const { count } = useCart();
  const { user, isAdmin, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the sidebar whenever the route changes, and on Escape.
  useEffect(() => setMenuOpen(false), [pathname]);
  useEffect(() => {
    if (!menuOpen) return;
    function onKey(e) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function onSearch(e) {
    e.preventDefault();
    const q = query.trim();
    router.push(q ? `/category/all?search=${encodeURIComponent(q)}` : "/category/all");
  }

  const searchPlaceholder = productCount ? `Search ${productCount}+ products…` : "Search products…";

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#05060a]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6">
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white/80 transition hover:bg-white/10 hover:text-white md:hidden"
        >
          <HamburgerIcon />
        </button>

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
              className="w-full rounded-full border border-cyan-400/40 bg-white/5 py-2 pl-10 pr-4 text-sm text-white placeholder:text-white/40 focus:border-cyan-400"
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
          {NAV_LINKS.map((link) => {
            const isActive = link.match ? link.match(pathname) : pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap pb-0.5 transition ${
                  link.accent
                    ? "text-amber-400 hover:text-amber-300"
                    : isActive
                    ? "border-b-2 border-cyan-400 text-white"
                    : "hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
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
            className="w-full rounded-full border border-cyan-400/40 bg-white/5 py-2 pl-10 pr-4 text-sm text-white placeholder:text-white/40 focus:border-cyan-400"
          />
        </div>
      </form>

      <MobileSidebar open={menuOpen} onClose={() => setMenuOpen(false)} pathname={pathname} />
    </header>
  );
}
