"use client";

import { useEffect, useState } from "react";
import { WHATSAPP_URL } from "@/lib/constants";

/**
 * Fixed bottom-right stack: support chat, AI assistant, scroll-to-top.
 * bottom-20 (mobile) clears the mobile-bottom-bar the way the reference site's
 * own stack does; bottom-6 on larger screens where there is no bottom bar.
 *
 * The AI assistant has no backend yet in this rebuild, so it surfaces an
 * honest "coming soon" notice instead of a dead link or a fake working
 * feature - swap in a real destination once one exists.
 */
export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  const [notice, setNotice] = useState(null);

  useEffect(() => {
    function onScroll() {
      setShowTop(window.scrollY > 400);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!notice) return;
    const timer = setTimeout(() => setNotice(null), 2500);
    return () => clearTimeout(timer);
  }, [notice]);

  function scrollToTop() {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  }

  return (
    <div className="fixed bottom-20 right-4 z-30 flex flex-col items-end gap-2.5 sm:bottom-6 sm:right-6">
      {notice && (
        <div className="mr-1 rounded-xl border border-white/10 bg-[#0a1424] px-3 py-2 text-xs font-semibold text-white shadow-xl">
          {notice}
        </div>
      )}

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
        aria-label="Ask AI Assistant"
        onClick={() => setNotice("AI Assistant coming soon")}
        className="relative flex h-[46px] w-[46px] items-center justify-center rounded-full text-white shadow-xl transition active:scale-95"
        style={{
          background: "linear-gradient(145deg, #8b5cf6, #4f46e5)",
          boxShadow: "0 10px 30px rgba(99,102,241,0.3)",
        }}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
          <path d="M12 2l1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8L12 2Zm7 10 .9 2.6L22.5 15.5l-2.6.9L19 19l-.9-2.6-2.6-.9 2.6-.9L19 12Z" />
        </svg>
        <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-cyan-400 ring-2 ring-[#05060a]" />
      </button>

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
