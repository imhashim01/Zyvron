import NewsletterForm from "./NewsletterForm";
import { WHATSAPP_URL } from "@/data/constants";
import Reveal from "@/animations/Reveal";

/**
 * Homepage-only CTA band before the footer. Reuses the existing
 * NewsletterForm (real /subscribers endpoint) and links to the same real
 * WhatsApp number already used by FloatingActions/Footer - this is a
 * marketing moment for those two real channels, not a new integration.
 */
export default function NewsletterWhatsAppCTA() {
  return (
    <Reveal as="section" className="mx-auto max-w-7xl px-4 pb-4 pt-8 sm:px-6">
      <div
        className="flex flex-col items-center gap-5 rounded-[24px] border border-white/10 px-6 py-10 text-center sm:px-10"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(0,217,255,0.08), transparent 45%), radial-gradient(circle at 80% 80%, rgba(139,92,246,0.08), transparent 45%), var(--surface-header)",
        }}
      >
        <h2 className="font-heading text-xl font-bold text-white sm:text-2xl">
          Never Miss a Deal
        </h2>
        <p className="max-w-md text-sm text-[var(--text-secondary)]">
          Get flash-sale alerts by SMS, or reach us directly on WhatsApp for order help and product
          questions.
        </p>

        <div className="flex w-full max-w-md flex-col items-center gap-4">
          <NewsletterForm />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="neon-cyan-hover inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2 text-sm font-bold text-white transition hover:border-cyan-400/50 hover:bg-white/5"
          >
            <span aria-hidden="true">💬</span> Chat with us on WhatsApp
          </a>
        </div>
      </div>
    </Reveal>
  );
}
