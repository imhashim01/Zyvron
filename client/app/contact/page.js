import PageHeader from "@/components/ui/PageHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { SITE_NAME, SUPPORT_EMAIL, WHATSAPP_URL, WHATSAPP_NUMBER } from "@/lib/constants";

export const metadata = {
  title: "Contact Us",
  description: `Get in touch with ${SITE_NAME} over WhatsApp or email.`,
};

const WHATSAPP_DISPLAY = `0${WHATSAPP_NUMBER.slice(2, 5)} ${WHATSAPP_NUMBER.slice(5)}`;

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <PageHeader
        eyebrow="Get In Touch"
        title="Contact"
        accent="Us"
        subtitle="Questions about a product, an order, or anything else? Reach our team directly - we're here to help."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <Card className="flex flex-col items-start gap-3 p-6">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500/15 text-2xl">
            💬
          </span>
          <div>
            <h2 className="font-heading text-base font-bold text-white">WhatsApp</h2>
            <p className="mt-1 text-sm text-white/60">
              Fastest way to reach us - message {WHATSAPP_DISPLAY} directly.
            </p>
          </div>
          <Button href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" variant="secondary">
            Chat on WhatsApp
          </Button>
        </Card>

        <Card className="flex flex-col items-start gap-3 p-6">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-500/15 text-2xl">
            ✉️
          </span>
          <div>
            <h2 className="font-heading text-base font-bold text-white">Email</h2>
            <p className="mt-1 text-sm text-white/60">Send us a message and we'll get back to you.</p>
          </div>
          <Button href={`mailto:${SUPPORT_EMAIL}`} variant="secondary">
            {SUPPORT_EMAIL}
          </Button>
        </Card>
      </div>

      <Card className="mt-6 p-6">
        <h2 className="font-heading text-base font-bold text-white">Have a question about an order?</h2>
        <p className="mt-2 text-sm text-white/60">
          For anything tied to an order you've already placed - delivery status, an issue with an
          item, a change request - use{" "}
          <a href="/track-order" className="text-cyan-300 hover:underline">
            Track My Order
          </a>{" "}
          and open the report form there with your order number, so our team can pull up your order
          right away.
        </p>
      </Card>
    </div>
  );
}
