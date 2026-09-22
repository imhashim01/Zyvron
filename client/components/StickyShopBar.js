"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/**
 * Mobile-only low-friction path to purchase: appears once someone scrolls
 * past the hero (not immediately, so it doesn't compete with the hero's own
 * CTAs), stays out of the way otherwise.
 */
export default function StickyShopBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > window.innerHeight * 0.8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-30 border-t border-white/10 bg-[#05060a]/95 px-4 py-3 backdrop-blur transition-transform duration-300 sm:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <Link
        href="/category/all"
        className="flex w-full items-center justify-center rounded-full py-3 text-sm font-extrabold uppercase tracking-wide text-[#03101a]"
        style={{ background: "linear-gradient(90deg, #00e5ff, #a855f7)" }}
      >
        Shop All Products →
      </Link>
    </div>
  );
}
