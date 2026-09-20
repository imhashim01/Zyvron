/** Shared panel surface - the dark-navy card treatment used for product cards, form panels, admin tables, etc. */
export default function Card({ as: Tag = "div", hover = false, className = "", children, ...props }) {
  const classes = [
    "rounded-2xl border border-white/10 bg-white/[0.03]",
    hover && "transition hover:border-cyan-400/40 hover:bg-white/[0.06]",
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
