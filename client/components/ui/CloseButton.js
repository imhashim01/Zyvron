const SIZES = {
  sm: "h-7 w-7",
  md: "h-9 w-9",
  lg: "h-10 w-10",
};

/**
 * The one close (X) button used in every modal/overlay/drawer in the app.
 * The old static site accumulated 8+ different ad hoc close-button styles
 * across its modals over time - this is the single replacement for all of
 * them, so no page ever needs to invent its own again.
 */
export default function CloseButton({ onClick, size = "md", label = "Close", className = "" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`flex ${SIZES[size]} shrink-0 items-center justify-center rounded-full bg-white/10 text-white/70 transition hover:bg-white/20 hover:text-white ${className}`}
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M6 6l12 12M18 6L6 18" />
      </svg>
    </button>
  );
}
