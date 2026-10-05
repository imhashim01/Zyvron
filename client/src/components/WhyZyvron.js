import Link from "next/link";
import Reveal from "@/animations/Reveal";
import CategoryIcon from "./CategoryIcon";

// Same real, already-published policies as TrustBar (the compact strip
// under the hero) - presented here as their own full chapter with a line of
// supporting copy each, rather than duplicated data with different facts.
const REASONS = [
  {
    icon: "shield",
    title: "7-Day Replacement",
    body: "Shop with confidence - manufacturing defects are replaced within 7 days.",
    href: "/warranty-support",
  },
  {
    icon: "truck",
    title: "Nationwide Delivery",
    body: "We deliver across Pakistan, straight to your door.",
    href: "/shipping-delivery",
  },
  {
    icon: "cash",
    title: "Cash on Delivery",
    body: "Pay when your order arrives - no online payment required.",
  },
  {
    icon: "box",
    title: "Order Tracking",
    body: "Track your order from dispatch to delivery, any time.",
    href: "/track-order",
  },
];

export default function WhyZyvron() {
  return (
    <Reveal as="section" className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="mb-8 text-center">
        <h2 className="font-heading text-xl font-bold text-white sm:text-2xl">Why Zyvron?</h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-[var(--text-secondary)]">
          The same promises behind every order, not just marketing copy.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {REASONS.map((r, i) => {
          const Wrapper = r.href ? Link : "div";
          return (
            <Wrapper
              key={r.title}
              {...(r.href ? { href: r.href } : {})}
              className="stagger-item flex flex-col items-center gap-2 rounded-2xl border border-white/[0.12] bg-[var(--surface-card)] p-5 text-center transition hover:border-cyan-400/30 hover:bg-[var(--surface-2)]"
              style={{ "--stagger-delay": `${i * 70}ms` }}
            >
              <CategoryIcon name={r.icon} className="h-7 w-7 text-cyan-300" />
              <span className="font-heading text-sm font-bold text-white">{r.title}</span>
              <span className="text-xs text-[var(--text-secondary)]">{r.body}</span>
            </Wrapper>
          );
        })}
      </div>
    </Reveal>
  );
}
