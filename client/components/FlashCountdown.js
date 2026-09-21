"use client";

import { useEffect, useState } from "react";

function splitRemaining(ms) {
  const total = Math.max(0, Math.floor(ms / 1000));
  const hours = String(Math.floor(total / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((total % 3600) / 60)).padStart(2, "0");
  const seconds = String(total % 60).padStart(2, "0");
  return { hours, minutes, seconds };
}

const boxStyle = {
  background: "linear-gradient(160deg, rgba(20,8,34,0.95), rgba(6,6,14,0.95))",
  border: "1px solid rgba(0,229,255,0.28)",
  boxShadow: "0 0 12px rgba(0,229,255,0.18)",
};

function Box({ value, unit }) {
  return (
    <span
      className="rounded-md px-2 py-1 font-mono text-xs font-bold text-white"
      style={boxStyle}
    >
      {value}
      {unit}
    </span>
  );
}

/**
 * Ticks down to a real server-supplied deadline (Product.flashSaleEndsAt) -
 * never a fake client-only timer that resets on refresh.
 *
 * `remaining` starts at null on both the server render and the client's
 * first render (before it mounts), rather than computing from Date.now()
 * eagerly - the server and the client hydrate at slightly different
 * instants, so seeding state from Date.now() up front produced a real
 * hydration mismatch (server said "17s", client said "18s"). The real
 * value is only computed after mount, once there's no server-rendered
 * output left to disagree with.
 */
export default function FlashCountdown({ endsAt }) {
  const target = endsAt ? new Date(endsAt).getTime() : null;
  const [remaining, setRemaining] = useState(null);

  useEffect(() => {
    if (!target) return;
    function tick() {
      setRemaining(target - Date.now());
    }
    tick();
    const interval = setInterval(() => {
      if (document.hidden) return;
      tick();
    }, 1000);
    document.addEventListener("visibilitychange", tick);
    return () => {
      clearInterval(interval);
      document.removeEventListener("visibilitychange", tick);
    };
  }, [target]);

  if (!target || remaining === null || remaining <= 0) return null;

  const { hours, minutes, seconds } = splitRemaining(remaining);

  return (
    <div className="flex items-center gap-2 text-xs">
      <span className="font-bold uppercase tracking-wide text-cyan-300">Hurry! Ends in:</span>
      <div className="flex items-center gap-1.5">
        <Box value={hours} unit="h" />
        <span className="text-white/40">:</span>
        <Box value={minutes} unit="m" />
        <span className="text-white/40">:</span>
        <Box value={seconds} unit="s" />
      </div>
    </div>
  );
}
