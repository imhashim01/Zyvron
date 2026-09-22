"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useCart } from "@/lib/cartContext";
import { discountPercent, formatPKR } from "@/lib/format";
import StarRating from "@/components/StarRating";

// Only fetched once a slide actually needs to render, and only after the
// mount-time capability check below confirms WebGL is available and the
// visitor hasn't asked for reduced motion - never part of the initial bundle.
const Hero3D = dynamic(() => import("./Hero3D"), { ssr: false, loading: () => null });

const AUTO_ADVANCE_MS = 5500;

export default function HeroCarousel({ slides }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [canUse3D, setCanUse3D] = useState(false);
  const touchStartX = useRef(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
      if (gl) setCanUse3D(true);
    } catch {
      // no WebGL - stays on the CSS fallback
    }
  }, []);

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

  const active = slides[activeIndex];

  return (
    <section
      className="relative overflow-hidden rounded-[24px] border sm:rounded-[30px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      style={{
        borderColor: "rgba(0, 195, 255, 0.28)",
        background:
          "radial-gradient(circle at 15% 15%, rgba(176,38,255,0.14), transparent 42%), radial-gradient(circle at 90% 0%, rgba(0, 153, 255, 0.1), transparent 40%), linear-gradient(135deg, #061522 0%, #040b15 55%, #08091a 100%)",
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
        style={{ background: "radial-gradient(circle, rgba(176,38,255,0.22), transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="animate-float-slow delay-2 pointer-events-none absolute -right-10 bottom-0 h-64 w-64 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(0,229,255,0.18), transparent 70%)" }}
      />

      <div className="relative grid gap-10 px-6 pb-8 pt-14 sm:px-10 sm:pt-16 lg:grid-cols-2 lg:items-center lg:gap-8">
        <div className="text-center lg:text-left">
          {/* Every slide's real copy is always in the DOM (server-rendered,
              crawlable) - only the active one is displayed. */}
          {slides.map((slide, i) => {
            const pct = discountPercent(slide.price, slide.compareAtPrice);
            return (
              <div key={slide._id} className={i === activeIndex ? "block" : "hidden"}>
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[11px] font-black uppercase tracking-wide text-white"
                  style={{ background: "linear-gradient(90deg, #00c6ff, #a855f7)" }}
                >
                  <span aria-hidden="true">⚡</span> {slide.badge || slide.category?.name || "Featured"}
                </span>

                <h1 className="mt-5 font-heading text-3xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl">
                  {slide.title}
                </h1>

                <p className="mx-auto mt-4 max-w-md text-sm text-white/60 sm:text-base lg:mx-0">
                  {slide.description}
                </p>

                <div className="mt-4 flex items-center justify-center gap-3 lg:justify-start">
                  <StarRating rating={slide.rating} count={slide.reviewsCount} />
                </div>

                <div className="mt-3 flex items-center justify-center gap-3 lg:justify-start">
                  <span className="text-2xl font-bold text-white">{formatPKR(slide.price)}</span>
                  {slide.compareAtPrice > slide.price && (
                    <span className="text-sm text-white/40 line-through">
                      {formatPKR(slide.compareAtPrice)}
                    </span>
                  )}
                  {pct && <span className="text-sm font-semibold text-emerald-400">{pct}% OFF</span>}
                </div>

                <div className="mt-7 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                  <Link
                    href={`/product/${slide.slug}`}
                    className="shimmer-sweep relative overflow-hidden rounded-2xl px-7 py-3.5 text-sm font-extrabold uppercase tracking-wide text-[#03101a] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,217,255,0.4)] active:scale-95"
                    style={{ background: "linear-gradient(90deg, #00e5ff, #a855f7)" }}
                  >
                    Shop Now →
                  </Link>
                  <button
                    type="button"
                    onClick={() => handleAddToCart(slide)}
                    className="rounded-2xl border border-white/20 px-6 py-3.5 text-sm font-bold text-white transition hover:border-cyan-400/60 hover:bg-white/5 active:scale-95"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative mx-auto flex w-full max-w-sm items-center justify-center py-4 lg:max-w-none lg:py-0">
          <div
            className="animate-pulse-glow relative aspect-square w-full max-w-[380px] rounded-full p-10"
            style={{
              background:
                "radial-gradient(circle, rgba(0,229,255,0.18) 0%, rgba(176,38,255,0.12) 55%, transparent 75%)",
            }}
          >
            <div
              className="relative h-full w-full overflow-hidden rounded-[42px] border-2"
              style={{
                borderColor: "rgba(255,255,255,0.15)",
                boxShadow: "0 0 60px rgba(0,229,255,0.25), 0 0 100px rgba(176,38,255,0.15)",
              }}
            >
              {canUse3D ? (
                <Hero3D images={slides.map((s) => s.image)} activeIndex={activeIndex} />
              ) : (
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  sizes="380px"
                  className="object-cover"
                  priority
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-center gap-2 pb-7 lg:justify-start lg:pl-10">
        {slides.map((slide, i) => (
          <button
            key={slide._id}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Show ${slide.title}`}
            aria-current={i === activeIndex}
            className={`h-2 rounded-full transition-all ${
              i === activeIndex ? "w-7 bg-cyan-400" : "w-2 bg-white/25 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
