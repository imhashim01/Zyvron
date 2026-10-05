import { FREE_SHIPPING_THRESHOLD } from "@/data/constants";

/**
 * Slim, global strip above the header - real, existing policies only
 * (nationwide delivery, the site's actual free-shipping threshold, nationwide
 * COD, the same 7-day replacement window already used on TrustBar/Warranty &
 * Support). The free-delivery line keeps its Rs. threshold on purpose: the
 * cart and checkout still charge the standard shipping fee under it, so the
 * bar must not promise more than checkout delivers.
 * Deliberately quieter than the hero: no glow, no animation, small type.
 * On phones only the free-delivery line shows (it wraps instead of being
 * cut off); the other two policies join it from the sm breakpoint up.
 */
export default function AnnouncementBar() {
  return (
    <div className="border-b border-white/[0.06] bg-[var(--surface-header)] text-[var(--text-secondary)]">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-2 text-center text-[11px] font-semibold uppercase leading-snug tracking-wide sm:text-xs">
        <span>
          Free delivery all over Pakistan on orders above Rs. {FREE_SHIPPING_THRESHOLD.toLocaleString()}
          <span className="hidden sm:inline">
            <span className="mx-2 text-violet-400">•</span>
            Cash on delivery
            <span className="mx-2 text-cyan-400">•</span>
            7-day replacement
          </span>
        </span>
      </div>
    </div>
  );
}
