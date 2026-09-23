"use client";

import { useCart } from "@/store/cartContext";
import { formatPKR } from "@/lib/format";

export default function FreeShippingBar() {
  const { checkoutSubtotal, isFreeShipping, freeShippingRemaining, freeShippingProgress, hydrated } =
    useCart();

  if (!hydrated) return null;

  return (
    <div className="mb-6 rounded-xl border border-white/10 bg-white/[0.03] p-4">
      <p className="mb-2 text-sm text-white/70">
        {isFreeShipping && checkoutSubtotal > 0 ? (
          <span className="font-semibold text-emerald-400">You&apos;ve unlocked free shipping! 🎉</span>
        ) : (
          <>
            Add <span className="font-semibold text-cyan-300">{formatPKR(freeShippingRemaining)}</span> more
            to your cart for <span className="font-semibold">free shipping</span>.
          </>
        )}
      </p>
      <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-cyan-400 transition-all"
          style={{ width: `${freeShippingProgress}%` }}
        />
      </div>
    </div>
  );
}
