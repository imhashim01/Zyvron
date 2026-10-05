import PageHeader from "@/components/ui/PageHeader";
import Card from "@/components/ui/Card";
import { SITE_NAME, SUPPORT_EMAIL, WHATSAPP_URL } from "@/data/constants";

export const metadata = {
  title: "Privacy Policy",
  description: `How ${SITE_NAME} collects, uses and protects your personal information.`,
};

const SECTIONS = [
  {
    title: "What We Collect",
    body: "When you place an order we collect your name, phone number, city, delivery address and (optionally) your email address. If you create an account we also store your email and a securely hashed password - we never see or store your password in plain text. If you join our alerts list we store your phone number.",
  },
  {
    title: "How We Use It",
    body: "Your details are used only to confirm, deliver and support your orders: calling you to confirm a Cash on Delivery order, passing your name, phone and address to our courier partner, sending order updates by email, and handling any warranty or support request. We do not sell your information.",
  },
  {
    title: "Payments",
    body: "Every order is Cash on Delivery. We do not collect or store any card or bank details on this website.",
  },
  {
    title: "Cookies & Local Storage",
    body: "We use a secure sign-in cookie to keep you logged in, and your browser's local storage to remember your cart and wishlist - these are needed for the site to work.",
  },
  {
    title: "Advertising & Analytics (Meta Pixel)",
    body: "We use the Meta (Facebook) Pixel, which sets cookies and tells Meta about actions on this site - pages viewed, products viewed, items added to cart, checkout started and orders placed (product, quantity and order value). This helps us measure our Facebook and Instagram ads and show relevant ads. We do not send your name, phone number or address to Meta. You can control ad personalisation in your Facebook / Instagram ad settings, or block these cookies in your browser.",
  },
  {
    title: "Your Choices",
    body: "You can ask us to correct or delete your account and personal information at any time by contacting us. Order records may be kept as long as needed for delivery, warranty and accounting purposes.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <PageHeader
        eyebrow="Legal"
        title="Privacy"
        accent="Policy"
        subtitle="What we collect, why, and how to reach us about it."
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
            Questions about your data? Email{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-cyan-300 hover:underline">
              {SUPPORT_EMAIL}
            </a>{" "}
            or{" "}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:underline">
              message us on WhatsApp
            </a>
            .
          </p>
        </Card>
      </div>
    </div>
  );
}
