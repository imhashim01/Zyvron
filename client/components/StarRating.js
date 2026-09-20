export default function StarRating({ rating = 0, count, size = "w-4 h-4" }) {
  const rounded = Math.round(rating * 2) / 2;
  return (
    <span className="inline-flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      <span className="flex text-amber-400">
        {[1, 2, 3, 4, 5].map((n) => (
          <svg key={n} viewBox="0 0 20 20" fill="currentColor" className={size} aria-hidden="true">
            <path
              d="M10 1.5l2.7 5.9 6.3.6-4.8 4.3 1.4 6.2L10 15.4l-5.6 3.1 1.4-6.2L1 8l6.3-.6L10 1.5Z"
              opacity={n <= rounded ? 1 : n - 0.5 === rounded ? 0.5 : 0.25}
            />
          </svg>
        ))}
      </span>
      {typeof count === "number" && (
        <span className="text-xs text-white/50">({count})</span>
      )}
    </span>
  );
}
