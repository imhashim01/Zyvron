import Link from "next/link";

const VARIANTS = {
  primary:
    "bg-cyan-400 text-black hover:bg-cyan-300 disabled:bg-white/10 disabled:text-white/40",
  secondary:
    "border border-white/15 bg-white/5 text-white hover:border-cyan-400/50 hover:bg-white/10 disabled:border-white/5 disabled:text-white/30",
  ghost: "text-white/70 hover:text-cyan-300 disabled:text-white/30",
  danger: "bg-red-500 text-white hover:bg-red-400 disabled:bg-white/10 disabled:text-white/40",
};

const SIZES = {
  sm: "px-4 py-1.5 text-xs gap-1.5",
  md: "px-5 py-2.5 text-sm gap-2",
  lg: "px-6 py-3 text-sm gap-2",
};

/**
 * Shared button/CTA used across the whole storefront instead of each page
 * copy-pasting its own Tailwind class string. `href` renders a Next Link
 * styled identically to a real <button> so nav CTAs and form submits are
 * visually and behaviorally consistent.
 */
export default function Button({
  variant = "primary",
  size = "md",
  href,
  icon,
  iconOnly = false,
  className = "",
  children,
  ...props
}) {
  const classes = [
    "inline-flex items-center justify-center rounded-full font-bold transition disabled:cursor-not-allowed",
    "active:scale-[0.97]",
    VARIANTS[variant],
    iconOnly ? "aspect-square p-2.5" : SIZES[size],
    className,
  ].join(" ");

  const content = (
    <>
      {icon}
      {!iconOnly && children}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {content}
    </button>
  );
}
