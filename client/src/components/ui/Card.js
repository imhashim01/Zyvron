/** Shared panel surface - the dark-navy card treatment used for product cards, form panels, admin tables, etc.
 * Visibility pass: bg moved from a near-invisible bg-white/[0.03] (which
 * rendered almost identically to the page background) to the shared
 * surface-card token, with a slightly brighter surface-2 token on hover so
 * cards have a real, visible boundary against the page and each other. */
export default function Card({ as: Tag = "div", hover = false, className = "", children, ...props }) {
  const classes = [
    "rounded-2xl border border-white/[0.12] bg-[var(--surface-card)]",
    hover && "transition hover:border-cyan-400/40 hover:bg-[var(--surface-2)]",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
}
