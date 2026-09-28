import { FREE_SHIPPING_THRESHOLD } from "@/data/constants";

/**
 * Slim, global strip above the header - real, existing policies only
 * (nationwide COD, the site's actual free-shipping threshold, the same
 * 7-day replacement window already used on TrustBar/Warranty & Support).
 * Deliberately quieter than the hero: no glow, no animation, small type.
 */
export default function AnnouncementBar() {
  return (
    <div className="border-b border-white/[0.06] bg-[var(--surface-header)] text-[var(--text-secondary)]">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2 text-center text-[11px] font-semibold tracking-wide sm:text-xs">
        <span aria-hidden="true" className="text-cyan-400">
          ⚡
        </span>
        <span className="truncate">
          FREE DELIVERY ON ORDERS ABOVE RS. {FREE_SHIPPING_THRESHOLD.toLocaleString()}
          <span className="mx-2 text-violet-400">•</span>
          CASH ON DELIVERY
          <span className="mx-2 text-cyan-400">•</span>
          7-DAY REPLACEMENT
        </span>
      </div>
    </div>
  );
}
