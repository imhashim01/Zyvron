"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Fades + slides a section up once it scrolls into view. Starts visible
 * (data-revealed defaults untouched -> CSS only hides it once JS confirms
 * an observer actually mounted), so content is never lost if JS is slow or
 * IntersectionObserver is unsupported.
 */
export default function Reveal({ children, as: Tag = "div", delay = 0, className = "", style }) {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal=""
      data-revealed={revealed}
      style={{ ...style, transitionDelay: revealed ? `${delay}ms` : "0ms" }}
      className={className}
    >
      {children}
    </Tag>
  );
}
