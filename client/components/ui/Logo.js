import Image from "next/image";
import Link from "next/link";

const SIZES = {
  sm: { icon: 24, text: "text-base" },
  md: { icon: 32, text: "text-lg" },
  lg: { icon: 40, text: "text-2xl" },
};

/**
 * The icon + "Zyvron Tech Accessories" wordmark lockup, shared identically
 * across the header, mobile drawer, admin badge, and footer so it can never
 * drift between them.
 */
export default function Logo({ size = "md", href = "/", showWordmark = true, adminBadge = false, className = "" }) {
  const { icon, text } = SIZES[size];

  const content = (
    <span className={`flex items-center gap-2 ${className}`}>
      <Image src="/zyvron-icon.png" alt="" width={icon} height={icon} className="rounded-lg" priority />
      {showWordmark && (
        <span className={`font-heading font-bold text-white ${text}`}>
          Zyvron<span className="text-cyan-400"> Tech Accessories</span>
          {adminBadge && (
            <span className="ml-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-2 py-0.5 align-middle text-[10px] font-bold uppercase tracking-wide text-cyan-300">
              Admin
            </span>
          )}
        </span>
      )}
    </span>
  );

  if (!href) return content;
  return (
    <Link href={href} aria-label="Zyvron Tech Accessories home">
      {content}
    </Link>
  );
}
