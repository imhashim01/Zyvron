import Link from "next/link";
import { FREE_SHIPPING_THRESHOLD } from "@/data/constants";

const ITEMS = [
  {
    icon: "🚚",
    title: `Free Delivery Over Rs. ${FREE_SHIPPING_THRESHOLD.toLocaleString()}`,
    sub: "Nationwide across Pakistan",
  },
  {
    icon: "💵",
    title: "Cash on Delivery",
    sub: "Pay when it arrives - no online payment",
  },
  {
    icon: "🛡️",
    title: "7-Day Replacement Warranty",
    sub: "On manufacturing defects",
    href: "/warranty-support",
  },
  {
    icon: "📦",
    title: "Track Every Order",
    sub: "Live status, any time",
    href: "/track-order",
  },
];

export default function TrustBar() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {ITEMS.map((item) => {
          const Wrapper = item.href ? Link : "div";
          return (
            <Wrapper
              key={item.title}
              {...(item.href ? { href: item.href } : {})}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 transition hover:border-cyan-400/30"
            >
              <span className="text-xl">{item.icon}</span>
              <span className="min-w-0">
                <span className="block truncate text-xs font-bold text-white sm:text-sm">
                  {item.title}
                </span>
                <span className="block truncate text-[11px] text-white/50">{item.sub}</span>
              </span>
            </Wrapper>
          );
        })}
      </div>
    </div>
  );
}
