const PATHS = {
  headphones:
    "M3 18v-6a9 9 0 0 1 18 0v6 M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3v5Z M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3v5Z",
  watch:
    "M8 6h8l1 4a5 5 0 0 1 0 4l-1 4H8l-1-4a5 5 0 0 1 0-4l1-4Z M9 6 8 2h8l-1 4 M9 18l-1 4h8l-1-4",
  gamepad:
    "M6 12h4 M8 10v4 M15 11h.01 M17.5 13h.01 M17 8H7a5 5 0 0 0-4.8 6.4l.3 1A3 3 0 0 0 5.4 18a3 3 0 0 0 2.4-1.2l1-1.3a2 2 0 0 1 1.6-.8h3.2a2 2 0 0 1 1.6.8l1 1.3A3 3 0 0 0 18.6 18a3 3 0 0 0 2.9-2.6l.3-1A5 5 0 0 0 17 8Z",
  phone:
    "M7 2h10a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Z M11 18h2",
  grid: "M4 4h7v7H4V4Z M13 4h7v7h-7V4Z M4 13h7v7H4v-7Z M13 13h7v7h-7v-7Z",
  bolt: "M13 2 3 14h7l-1 8 11-14h-7l1-6Z",
  heart:
    "M20.8 8.6c0-2.6-2.1-4.6-4.7-4.6-1.6 0-3 .8-3.9 2-.9-1.2-2.3-2-3.9-2-2.6 0-4.7 2-4.7 4.6 0 1.1.4 2.1 1 2.9L12 20l7.4-8.5c.6-.8 1-1.8 1-2.9Z",
};

export default function CategoryIcon({ name = "grid", className = "w-6 h-6" }) {
  const d = PATHS[name] || PATHS.grid;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}
