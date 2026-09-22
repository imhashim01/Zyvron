"use client";

import { useEffect, useState } from "react";
import { WHATSAPP_URL } from "@/lib/constants";

/**
 * Fixed bottom-right stack: support chat, scroll-to-top.
 * bottom-20 (mobile) clears the mobile-bottom-bar the way the reference site's
 * own stack does; bottom-6 on larger screens where there is no bottom bar.
 */
export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShowTop(window.scrollY > 400);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToTop() {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  }

  return (
    <div className="fixed bottom-20 right-4 z-30 flex flex-col items-end gap-2.5 sm:bottom-6 sm:right-6">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="flex h-[50px] w-[50px] items-center justify-center rounded-2xl text-white shadow-xl transition active:scale-95"
        style={{
          background: "rgb(16, 185, 129)",
          border: "2px solid rgba(255,255,255,0.12)",
          boxShadow: "0 10px 30px rgba(16,185,129,0.25)",
        }}
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.4-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z"
          />
        </svg>
      </a>

      <button
        type="button"
        aria-label="Scroll to top"
        onClick={scrollToTop}
        className={`flex h-[42px] w-[42px] items-center justify-center rounded-full bg-neutral-900 text-white shadow-xl transition hover:bg-black active:scale-95 ${
          showTop ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
}
