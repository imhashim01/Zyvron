import PageHeader from "@/components/ui/PageHeader";
import Card from "@/components/ui/Card";
import { SITE_NAME, SUPPORT_EMAIL } from "@/data/constants";

export const metadata = {
  title: "Terms of Service",
  description: `The terms that apply when you shop at ${SITE_NAME}.`,
};

const SECTIONS = [
  {
    title: "Orders",
    body: "Placing an order is a request to buy. We may call you to confirm it before dispatch, and we may decline or cancel an order - for example if an item is out of stock, the details provided can't be verified, or a pricing error has occurred. You'll be informed if this happens.",
  },
  {
    title: "Prices & Payment",
    body: "All prices are in Pakistani Rupees (PKR). The price charged is the one shown at checkout when you place your order. Every order is Cash on Delivery - please have the full amount ready when your parcel arrives.",
  },
  {
    title: "Delivery",
    body: "Delivery is free on every order across Pakistan. Delivery times are estimates and can vary by city and courier; see our Shipping & Delivery page for details.",
  },
  {
    title: "Warranty, Replacements & Refunds",
    body: "Manufacturing defects are covered by our 7-day replacement window from delivery. See the Warranty & Support and Refund Policy pages for what's covered and how to claim.",
  },
  {
    title: "Product Information",
    body: "We try to describe and photograph every product accurately, but colours and small details may vary slightly from what's shown on your screen.",
  },
  {
    title: "Changes",
    body: "We may update these terms from time to time. The version on this page at the time you place your order is the one that applies to it.",
  },
];

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <PageHeader
        eyebrow="Legal"
        title="Terms of"
        accent="Service"
        subtitle="The basics of buying from us."
      />

      <div className="space-y-4">
        {SECTIONS.map((section) => (
          <Card key={section.title} className="p-6">
            <h2 className="font-heading text-base font-bold text-white">{section.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-white/60">{section.body}</p>
          </Card>
        ))}

        <Card className="p-6">
          <h2 className="font-heading text-base font-bold text-white">Contact</h2>
          <p className="mt-2 text-sm leading-relaxed text-white/60">
            Questions about these terms? Email{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-cyan-300 hover:underline">
              {SUPPORT_EMAIL}
            </a>
            .
          </p>
        </Card>
      </div>
    </div>
  );
}
