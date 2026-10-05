import PageHeader from "@/components/ui/PageHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { SITE_NAME, WHATSAPP_URL } from "@/data/constants";

export const metadata = {
  title: "Refund Policy",
  description: `Replacements and refunds for ${SITE_NAME} orders.`,
};

const SECTIONS = [
  {
    title: "Check Before You Pay",
    body: "Because every order is Cash on Delivery, please check that the parcel is the right one and isn't damaged before handing over payment.",
  },
  {
    title: "7-Day Replacement",
    body: "If an item arrives with a manufacturing defect, or stops working under normal use within 7 days of delivery, contact us within that window and we'll replace it. Items should be returned with their original box and accessories.",
  },
  {
    title: "Refunds",
    body: "If we can't replace a defective item - for example because it's out of stock - we'll refund the amount you paid for it once the item is returned to us. We'll agree the refund method with you directly.",
  },
  {
    title: "Not Eligible",
    body: "Physical or water damage, normal wear and tear, and items that have been repaired or modified by anyone other than us are not eligible for replacement or refund.",
  },
];

export default function RefundPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <PageHeader
        eyebrow="Legal"
        title="Refund"
        accent="Policy"
        subtitle="How replacements and refunds work."
      />

      <div className="space-y-4">
        {SECTIONS.map((section) => (
          <Card key={section.title} className="p-6">
            <h2 className="font-heading text-base font-bold text-white">{section.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-white/60">{section.body}</p>
          </Card>
        ))}

        <Card className="p-6">
          <h2 className="font-heading text-base font-bold text-white">How to Request</h2>
          <p className="mt-2 text-sm leading-relaxed text-white/60">
            Look up your order on{" "}
            <a href="/track-order" className="text-cyan-300 hover:underline">
              Track My Order
            </a>{" "}
            and submit the issue there, or message us on WhatsApp with your order number and a short
            description (photos help).
          </p>
          <div className="mt-4">
            <Button href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" variant="secondary">
              Chat on WhatsApp
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
