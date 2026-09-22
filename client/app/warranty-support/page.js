import PageHeader from "@/components/ui/PageHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { SITE_NAME, WHATSAPP_URL } from "@/lib/constants";

export const metadata = {
  title: "Warranty & Support",
  description: `Warranty coverage and how to get support for ${SITE_NAME} orders.`,
};

const COVERED = [
  "Manufacturing defects present when the item arrives",
  "Products that stop functioning under normal use within the warranty period",
];

const NOT_COVERED = [
  "Physical or water damage from drops, spills or misuse",
  "Normal wear and tear, such as battery capacity fading over time",
  "Damage from unauthorized repairs or modifications",
];

export default function WarrantySupportPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <PageHeader
        eyebrow="Support"
        title="Warranty &"
        accent="Support"
        subtitle="What's covered, and how to get help if something's wrong."
      />

      <Card className="p-6">
        <h2 className="font-heading text-base font-bold text-white">Warranty Coverage</h2>
        <p className="mt-2 text-sm text-white/60">
          Most electronics we carry include a 7-day replacement window from delivery for
          manufacturing defects, plus any manufacturer warranty stated on the product page.
        </p>
        <ul className="mt-4 space-y-2 text-sm text-white/70">
          {COVERED.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-emerald-400">✓</span> {item}
            </li>
          ))}
        </ul>
      </Card>

      <Card className="mt-4 p-6">
        <h2 className="font-heading text-base font-bold text-white">Not Covered</h2>
        <ul className="mt-4 space-y-2 text-sm text-white/70">
          {NOT_COVERED.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-red-400">✕</span> {item}
            </li>
          ))}
        </ul>
      </Card>

      <Card className="mt-4 p-6">
        <h2 className="font-heading text-base font-bold text-white">How to Claim</h2>
        <p className="mt-2 text-sm leading-relaxed text-white/60">
          Look up your order on{" "}
          <a href="/track-order" className="text-cyan-300 hover:underline">
            Track My Order
          </a>{" "}
          and submit the issue there with your order number, or message us on WhatsApp with your
          order number and a short description of the problem.
        </p>
        <div className="mt-4">
          <Button href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" variant="secondary">
            Chat on WhatsApp
          </Button>
        </div>
      </Card>
    </div>
  );
}
