import Link from "next/link";
import Logo from "./ui/Logo";
import Testimonials from "./Testimonials";
import NewsletterForm from "./NewsletterForm";
import { WHATSAPP_NUMBER, SUPPORT_EMAIL } from "@/data/constants";

const CATEGORY_LINKS = [
  { href: "/category/audio-and-speakers", label: "Audio & Speakers" },
  { href: "/category/smart-wearables", label: "Smart Wearables" },
  { href: "/category/gaming-and-pc-accessories", label: "Gaming & PC" },
  { href: "/category/mobile-accessories", label: "Mobile Accessories" },
  { href: "/category/all?filter=flash", label: "⚡ Flash Deals (Up to 50% Off)" },
];

const SUPPORT_LINKS = [
  { href: "/track-order", label: "🚚 Track My Order" },
  { href: "/about", label: "📖 About Us" },
  { href: "/contact", label: "📩 Contact Us" },
  { href: "/faq", label: "❓ FAQ" },
  { href: "/shipping-delivery", label: "📦 Shipping & Delivery" },
  { href: "/warranty-support", label: "🛡️ Warranty & Support" },
  { href: "/blog", label: "📰 Tech Tips Blog" },
];

const WHATSAPP_DISPLAY = `0${WHATSAPP_NUMBER.slice(2, 5)} ${WHATSAPP_NUMBER.slice(5)}`;

export default function Footer() {
  return (
    <footer className="mt-16 bg-neutral-950 pb-6 pt-10">
      <Testimonials />

      <div className="mx-auto mt-10 grid max-w-7xl gap-10 border-t border-white/10 px-4 pt-10 sm:px-6 md:grid-cols-4">
        <div>
          <Logo size="md" href={null} />
          <p className="mt-3 text-sm text-white/50">
            Your trusted online destination for premium wireless audio, smartwatches, gaming gear &amp;
            smart tech accessories in Pakistan.
          </p>
          <p className="mt-3 text-xs font-semibold text-cyan-300">
            Direct Cash on Delivery Across Pakistan
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-white">
            Popular Categories
          </h4>
          <ul className="space-y-2 text-sm text-white/60">
            {CATEGORY_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-cyan-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-white">
            Customer Support
          </h4>
          <ul className="space-y-2 text-sm text-white/60">
            {SUPPORT_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-cyan-300">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-300"
              >
                💬 WhatsApp: {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li>
              <a href={`mailto:${SUPPORT_EMAIL}`} className="hover:text-cyan-300">
                ✉️ {SUPPORT_EMAIL}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-white">
            Stay Connected
          </h4>
          <p className="mb-3 text-sm text-white/50">
            Receive flash sale alerts and exclusive discounts directly on your phone.
          </p>
          <NewsletterForm />
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col items-center gap-2 border-t border-white/10 px-4 pt-6 text-xs text-white/40 sm:flex-row sm:justify-between sm:px-6">
        <p>© {new Date().getFullYear()} Zyvron Tech Accessories™. All rights reserved.</p>
        <div className="flex items-center gap-3">
          <Link href="/privacy-policy" className="hover:text-cyan-300">
            Privacy Policy
          </Link>
          <span>•</span>
          <Link href="/terms" className="hover:text-cyan-300">
            Terms of Service
          </Link>
          <span>•</span>
          <Link href="/refund-policy" className="hover:text-cyan-300">
            Refund Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
