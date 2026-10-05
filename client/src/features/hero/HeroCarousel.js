"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useCart } from "@/store/cartContext";
import { discountPercent, formatPKR } from "@/lib/format";
import StarRating from "@/components/StarRating";

const AUTO_ADVANCE_MS = 5500;

export default function HeroCarousel({ slides }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);
  const { addToCart } = useCart();

  useEffect(() => {
    if (paused || slides.length <= 1) return undefined;
    const timer = setTimeout(() => {
      setActiveIndex((i) => (i + 1) % slides.length);
    }, AUTO_ADVANCE_MS);
    return () => clearTimeout(timer);
  }, [activeIndex, paused, slides.length]);

  function goTo(i) {
    setActiveIndex(((i % slides.length) + slides.length) % slides.length);
  }

  function onTouchStart(e) {
    setPaused(true);
    touchStartX.current = e.touches[0].clientX;
  }

  function onTouchEnd(e) {
    const startX = touchStartX.current;
    touchStartX.current = null;
    setPaused(false);
    if (startX == null) return;
    const deltaX = e.changedTouches[0].clientX - startX;
    if (Math.abs(deltaX) < 40) return;
    goTo(activeIndex + (deltaX < 0 ? 1 : -1));
  }

  function handleAddToCart(slide) {
    addToCart(slide, 1);
  }

  return (
    <section
      className="relative overflow-hidden rounded-[24px] border sm:rounded-[30px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      style={{
        borderColor: "rgba(0, 195, 255, 0.28)",
        // Visibility pass: lightened the gradient's base stops slightly (was
        // #061522/#040b15/#08091a) so the hero reads as its own distinct
        // surface rather than nearly matching the page background behind it.
        background:
          "radial-gradient(circle at 15% 15%, rgba(176,38,255,0.14), transparent 42%), radial-gradient(circle at 90% 0%, rgba(0, 153, 255, 0.1), transparent 40%), linear-gradient(135deg, #0a1d2e 0%, #071321 55%, #0b1220 100%)",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.024), 0 15px 45px rgba(0,0,0,0.2), 0 0 40px rgba(0,229,255,0.05)",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(1.5px 1.5px at 10% 20%, #7fe8ff, transparent), radial-gradient(1.5px 1.5px at 80% 12%, #c99bff, transparent), radial-gradient(1px 1px at 40% 75%, #7fe8ff, transparent), radial-gradient(1px 1px at 65% 88%, #7fe8ff, transparent), radial-gradient(1.5px 1.5px at 92% 55%, #c99bff, transparent), radial-gradient(1px 1px at 25% 48%, #7fe8ff, transparent), radial-gradient(1px 1px at 55% 30%, #7fe8ff, transparent)",
        }}
      />
      <div
        aria-hidden="true"
        className="animate-float-slow pointer-events-none absolute -left-16 top-0 h-72 w-72 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(176,38,255,0.16), transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="animate-float-slow delay-2 pointer-events-none absolute -right-10 bottom-0 h-64 w-64 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(0,229,255,0.13), transparent 70%)" }}
      />

      {/* Phones only (below sm): the active product's photo fills the top of
          the card and fades into the card's dark background, with the text
          sitting on the dark part below it - so the very first screen shows
          something to buy instead of only a block of text. The photo never
          sits directly behind the headline, so it stays readable over any
          picture. Only the active slide and its two neighbours are mounted,
          so a swipe cross-fades without loading every slide's photo up
          front. From sm up the hero is text-only (the product picture tile
          was removed at the owner's request). */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[70%] sm:hidden"
        style={{
          // The photo itself fades out into whatever is behind it (the card's
          // own background) - no colour band, so there is no visible edge
          // where the photo ends and the text area begins.
          WebkitMaskImage: "linear-gradient(to bottom, #000 35%, transparent 92%)",
          maskImage: "linear-gradient(to bottom, #000 35%, transparent 92%)",
        }}
      >
        {slides.map((slide, i) => {
          const count = slides.length;
          const near = i === activeIndex || i === (activeIndex + 1) % count || i === (activeIndex - 1 + count) % count;
          if (!near) return null;
          return (
            <Image
              key={slide._id}
              src={slide.image}
              alt=""
              fill
              sizes="100vw"
              className={`object-cover transition-opacity duration-700 ${i === activeIndex ? "opacity-100" : "opacity-0"}`}
              style={{ objectPosition: "center" }}
            />
          );
        })}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(5,10,18,0.35) 0%, rgba(5,10,18,0) 22%)" }}
        />
      </div>

      {/* One centred column on every screen size - the product picture tile
          that used to sit to the right of the text has been removed, so
          there is no second grid column to leave empty. */}
      <div className="relative grid gap-6 px-6 pb-8 pt-10 max-sm:flex max-sm:min-h-[680px] max-sm:flex-col max-sm:justify-end max-sm:pb-6 max-sm:pt-8 sm:gap-8 sm:px-10 sm:pt-14 lg:pt-16">
        <div className="text-center max-sm:w-full max-sm:min-w-0 sm:mx-auto sm:w-full sm:max-w-3xl">
          {/* Constant brand header - the H1 is Zyvron's own headline, not a
              single product's title, so the hero reads as a brand statement
              rather than a rotating single-product ad. */}
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[11px] font-black uppercase tracking-wide text-white max-sm:hidden"
            style={{ background: "linear-gradient(90deg, #00c6ff, #a855f7)" }}
          >
            NEXT-GEN TECH FOR EVERYDAY LIFE
          </span>

          <h1 className="mt-5 font-heading text-3xl font-black leading-[1.08] tracking-tight text-white max-sm:mt-0 max-sm:[text-shadow:0_2px_14px_rgba(0,0,0,0.65)] sm:text-5xl">
            Technology That Moves With You.
          </h1>

          <p className="mx-auto mt-4 hidden max-w-xl text-sm text-[var(--text-secondary)] sm:block sm:text-base">
            Discover premium audio, smart wearables, charging gear and everyday tech — delivered across
            Pakistan.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/category/all"
              className="shimmer-sweep relative overflow-hidden rounded-2xl px-7 py-3.5 text-sm font-extrabold uppercase tracking-wide text-[#03101a] transition duration-300 hover:-translate-y-0.5 active:scale-95"
              style={{
                background: "linear-gradient(90deg, #00e5ff, #a855f7)",
                // Persistent neon glow (Session 14 bold pass) - layered
                // cyan+violet to match the button's own gradient, so
                // the site's main CTA reads as lit-up at rest, not just
                // on hover. Inline (not the shared .neon-* classes)
                // since this is the only two-color glow in the app.
                boxShadow:
                  "0 0 12px rgba(0, 229, 255, 0.4), 0 0 26px rgba(168, 85, 247, 0.26)",
              }}
            >
              Shop Now
            </Link>
            <a
              href="#explore-zyvron"
              className="neon-cyan-hover rounded-2xl border border-white/20 px-6 py-3.5 text-sm font-bold text-white transition hover:border-cyan-400/60 hover:bg-white/5 active:scale-95 max-sm:hidden"
            >
              Explore Categories
            </a>
          </div>

          {/* Real product spotlight - smaller, rotating supporting content
              beneath the constant brand header. Every slide's real copy
              stays in the DOM (server-rendered, crawlable); only the active
              one is visible. */}
          <div className="mt-8 border-t border-white/10 pt-6 max-sm:mt-5 max-sm:pt-4 lg:mt-10">
            {slides.map((slide, i) => {
              const pct = discountPercent(slide.price, slide.compareAtPrice);
              return (
                <div
                  key={slide._id}
                  className={
                    i === activeIndex
                      ? "flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
                      : "hidden"
                  }
                >
                  <div className="min-w-0 text-center max-sm:w-full sm:text-left">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-cyan-300">
                      {slide.badge || slide.category?.name || "Featured"}
                    </p>
                    <Link
                      href={`/product/${slide.slug}`}
                      className="mt-1 block truncate text-sm font-semibold text-white hover:text-cyan-300 sm:text-base"
                    >
                      {slide.title}
                    </Link>
                    <div className="mt-1.5 flex items-center justify-center gap-3 max-sm:hidden sm:justify-start">
                      <StarRating rating={slide.rating} count={slide.reviewsCount} />
                    </div>
                    <div className="mt-1.5 flex items-center justify-center gap-2 sm:justify-start">
                      <span className="text-base font-bold text-white">{formatPKR(slide.price)}</span>
                      {slide.compareAtPrice > slide.price && (
                        <span className="text-xs text-[var(--text-muted)] line-through">
                          {formatPKR(slide.compareAtPrice)}
                        </span>
                      )}
                      {pct && <span className="text-xs font-semibold text-emerald-400">{pct}% OFF</span>}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleAddToCart(slide)}
                    className="neon-cyan-hover shrink-0 rounded-xl border border-cyan-400/50 px-4 py-2 text-xs font-bold text-cyan-300 transition hover:bg-cyan-400/10 active:scale-95"
                  >
                    Add to Cart
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-center gap-2 pb-7">
        {slides.map((slide, i) => (
          <button
            key={slide._id}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Show ${slide.title}`}
            aria-current={i === activeIndex}
            className={`h-2 rounded-full transition-all ${
              i === activeIndex ? "w-7 bg-cyan-400" : "w-2 bg-white/35 hover:bg-white/55"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
