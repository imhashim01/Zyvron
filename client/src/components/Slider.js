"use client";

import { useEffect, useRef, useState } from "react";

const arrowStyle = {
  background: "rgba(9,17,27,0.85)",
  border: "1px solid rgba(117,174,255,0.28)",
  color: "rgb(234,246,255)",
};

// How far one "step" moves: exactly one card (plus the 16px gap) when the
// track has cards, otherwise 80% of the visible width.
function stepFor(track) {
  const card = track.querySelector(":scope > *");
  return card ? card.getBoundingClientRect().width + 16 : track.clientWidth * 0.8;
}

/**
 * Generic horizontal slider: scroll-snap track + prev/next arrows. Used for
 * Best Sellers, Flash Deals, "You May Also Like", and the footer testimonials
 * panel so they all share one implementation instead of several copies.
 *
 * The arrows auto-hide whenever the track already fits without overflowing
 * (measured, not guessed) - showing dead arrows that can't scroll anything
 * is worse than showing none.
 *
 * `autoplay` (opt-in, used by Best Sellers and Flash Deals) advances one card
 * every `autoplayMs`, rewinds to the start after the last card, and stands
 * down whenever it would be annoying: while the pointer is over the slider,
 * while anything inside it has keyboard focus, for a few seconds after a
 * touch, while the browser tab is hidden, and always for visitors who ask
 * for reduced motion.
 */
export default function Slider({ children, label = "items", autoplay = false, autoplayMs = 3500 }) {
  const trackRef = useRef(null);
  const pausedRef = useRef(false);
  const touchTimerRef = useRef(null);
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

  useEffect(() => {
    if (!autoplay || !canScroll) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const track = trackRef.current;
    if (!track) return undefined;

    const id = setInterval(() => {
      if (pausedRef.current || document.hidden) return;
      const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
      if (atEnd) track.scrollTo({ left: 0, behavior: "smooth" });
      else track.scrollBy({ left: stepFor(track), behavior: "smooth" });
    }, autoplayMs);

    return () => clearInterval(id);
  }, [autoplay, autoplayMs, canScroll]);

  useEffect(() => () => clearTimeout(touchTimerRef.current), []);

  function scrollByCards(direction) {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * stepFor(track), behavior: "smooth" });
  }

  function pause() {
    pausedRef.current = true;
  }

  function resume() {
    pausedRef.current = false;
  }

  function onTouchStart() {
    clearTimeout(touchTimerRef.current);
    pause();
  }

  function onTouchEnd() {
    // Give the visitor a few seconds with their thumb off before moving on.
    clearTimeout(touchTimerRef.current);
    touchTimerRef.current = setTimeout(resume, 5000);
  }

  return (
    <div
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocus={pause}
      onBlur={resume}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onTouchCancel={onTouchEnd}
    >
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
