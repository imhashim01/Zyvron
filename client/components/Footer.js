import Image from "next/image";
import Link from "next/link";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-[#05060a]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <Image src="/zyvron-icon.png" alt="Zyvron" width={28} height={28} className="rounded" />
            <span className="font-heading text-lg font-bold text-white">Zyvron</span>
          </div>
          <p className="text-sm text-white/50">
            Premium wireless audio, smartwatches, gaming gear &amp; smart mobile accessories —
            cash on delivery &amp; free nationwide shipping on orders over Rs. 3,000.
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-bold text-white">Shop</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li><Link href="/category/audio-speakers" className="hover:text-cyan-300">Audio & Speakers</Link></li>
            <li><Link href="/category/smart-wearables" className="hover:text-cyan-300">Smart Wearables</Link></li>
            <li><Link href="/category/gaming-pc-accessories" className="hover:text-cyan-300">Gaming & PC</Link></li>
            <li><Link href="/category/mobile-accessories" className="hover:text-cyan-300">Mobile Accessories</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-bold text-white">Support</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li><Link href="/track-order" className="hover:text-cyan-300">Track Order</Link></li>
            <li><Link href="/account" className="hover:text-cyan-300">My Account</Link></li>
            <li><Link href="/login" className="hover:text-cyan-300">Login / Register</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-bold text-white">Stay Updated</h4>
          <p className="mb-3 text-sm text-white/50">
            Get restock &amp; flash-sale alerts on WhatsApp/SMS.
          </p>
          <NewsletterForm />
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Zyvron Tech Accessories™. All rights reserved.
      </div>
    </footer>
  );
}
