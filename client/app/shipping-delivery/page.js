import PageHeader from "@/components/ui/PageHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { FREE_SHIPPING_THRESHOLD, SHIPPING_FEE, SITE_NAME } from "@/lib/constants";

export const metadata = {
  title: "Shipping & Delivery",
  description: `Shipping coverage, charges and delivery timelines for ${SITE_NAME} orders across Pakistan.`,
};

const SECTIONS = [
  {
    title: "Coverage",
    body: "We deliver nationwide across Pakistan, to major cities and most smaller towns via our courier partners.",
  },
  {
    title: "Delivery Charges",
    body: `Free delivery on orders over Rs. ${FREE_SHIPPING_THRESHOLD.toLocaleString()}. Orders below that carry a flat Rs. ${SHIPPING_FEE} shipping fee, shown at checkout before you confirm - never a surprise on delivery.`,
  },
  {
    title: "Dispatch & Delivery Time",
    body: "Orders are typically dispatched within 1-2 business days of confirmation. Delivery usually takes 2-5 business days after dispatch, depending on your city.",
  },
  {
    title: "Cash on Delivery",
    body: "Every order is Cash on Delivery - you pay the courier when your package arrives, no online payment required.",
  },
];

export default function ShippingDeliveryPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <PageHeader
        eyebrow="Delivery"
        title="Shipping &"
        accent="Delivery"
        subtitle="What to expect once you place an order."
      />

      <div className="space-y-4">
        {SECTIONS.map((s) => (
          <Card key={s.title} className="p-6">
            <h2 className="font-heading text-base font-bold text-white">{s.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-white/60">{s.body}</p>
          </Card>
        ))}
      </div>

      <div className="mt-10 text-center">
        <p className="mb-4 text-sm text-white/50">Already placed an order?</p>
        <Button href="/track-order" size="lg">
          Track My Order →
        </Button>
      </div>
    </div>
  );
}
