/**
 * Was a hardcoded array of fictional customers with invented quotes and a
 * fake "Verified Buyer" caption the Review model has no way to actually
 * back (see server/src/models/Review.js - no purchase/verification field
 * at all). Replaced with an honest trust/brand panel: real, already-published
 * policies, no invented names or quotes. Genuine reviews are shown on each
 * product page as real customers leave them - this panel doesn't pretend to
 * be that until a real sitewide reviews feed exists.
 */
export default function Testimonials() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="rounded-3xl border border-white/10 bg-[var(--surface-2)] px-6 py-8 text-center sm:px-10">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-cyan-400">Built on Trust</p>
        <h2 className="font-heading text-xl font-bold text-white sm:text-2xl">
          Real Policies. No Empty Promises.
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-[var(--text-secondary)]">
          Every order ships with nationwide delivery, cash on delivery, and a 7-day replacement window —
          the same terms for every customer, every time. Genuine product reviews are shown on each product
          page as our customers leave them.
        </p>
      </div>
    </div>
  );
}
