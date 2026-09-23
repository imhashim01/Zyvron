"use client";

import { useEffect, useRef, useState } from "react";

const arrowStyle = {
  background: "rgba(9,17,27,0.85)",
  border: "1px solid rgba(117,174,255,0.28)",
  color: "rgb(234,246,255)",
};

/**
 * Generic horizontal slider: scroll-snap track + prev/next arrows. Used for
 * Flash Deals, "You May Also Like", and the footer testimonials panel so
 * they all share one implementation instead of three copies.
 *
 * The arrows auto-hide whenever the track already fits without overflowing
 * (measured, not guessed) - showing dead arrows that can't scroll anything
 * is worse than showing none.
 */
export default function Slider({ children, label = "items" }) {
  const trackRef = useRef(null);
  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    function check() {
      setCanScroll(track.scrollWidth > track.clientWidth + 4);
    }
    check();
    const observer = new ResizeObserver(check);
    observer.observe(track);
    window.addEventListener("resize", check);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", check);
    };
  }, [children]);

  function scrollByCards(direction) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector(":scope > *");
    const step = card ? card.getBoundingClientRect().width + 16 : track.clientWidth * 0.8;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  }

  return (
    <div>
      {canScroll && (
        <div className="mb-4 flex justify-end gap-2">
          <button
            type="button"
            onClick={() => scrollByCards(-1)}
            aria-label={`Previous ${label}`}
            className="flex h-10 w-9 items-center justify-center rounded-xl transition hover:bg-white/10"
            style={arrowStyle}
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scrollByCards(1)}
            aria-label={`Next ${label}`}
            className="flex h-10 w-9 items-center justify-center rounded-xl transition hover:bg-white/10"
            style={arrowStyle}
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
      <div
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-1"
      >
        {children}
      </div>
    </div>
  );
}
