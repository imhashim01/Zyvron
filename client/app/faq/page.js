import PageHeader from "@/components/ui/PageHeader";
import { FREE_SHIPPING_THRESHOLD, SHIPPING_FEE, SITE_NAME } from "@/lib/constants";

export const metadata = {
  title: "FAQ",
  description: `Frequently asked questions about ordering, delivery and payment at ${SITE_NAME}.`,
};

function faqs() {
  return [
    {
      q: "Do you offer Cash on Delivery?",
      a: "Yes - every order is Cash on Delivery, nationwide across Pakistan. You pay when your order arrives, no online payment needed.",
    },
    {
      q: "How much does delivery cost?",
      a: `Delivery is free on orders over Rs. ${FREE_SHIPPING_THRESHOLD.toLocaleString()}. Orders below that are charged a flat Rs. ${SHIPPING_FEE} shipping fee, shown clearly at checkout before you confirm.`,
    },
    {
      q: "How can I track my order?",
      a: "Head to Track My Order and enter your tracking number along with the phone number you used at checkout to see live order status.",
    },
    {
      q: "What if a product arrives damaged or wrong?",
      a: "Open Track My Order, look up your order, and use the report form there with your order number - our team will follow up on the specific issue.",
    },
    {
      q: "Do products come with a warranty?",
      a: "Most electronics we carry include manufacturer-defect coverage. See the Warranty & Support page for the full policy and how to claim it.",
    },
    {
      q: "What payment methods do you accept?",
      a: "Cash on Delivery only, for every order, everywhere we deliver in Pakistan.",
    },
    {
      q: "How do I contact support?",
      a: "WhatsApp is the fastest way to reach us, and email works too - both are on the Contact page.",
    },
  ];
}

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <PageHeader
        eyebrow="Support"
        title="Frequently Asked"
        accent="Questions"
        subtitle="Common questions about ordering, delivery and payment."
      />

      <div className="space-y-3">
        {faqs().map((item) => (
          <details
            key={item.q}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 open:border-cyan-400/40"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-sm font-bold text-white">
              {item.q}
              <span className="shrink-0 text-cyan-300 transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-white/60">{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
