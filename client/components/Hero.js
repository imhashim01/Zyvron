import Link from "next/link";

/**
 * Colors/gradients below are lifted from the live reference site
 * (zyvrontechofficial.netlify.app)'s computed styles, not approximated -
 * see the `.premium-hero` background/::before treatment and its pill badge.
 */
export default function Hero() {
  return (
    <section
      className="relative overflow-hidden rounded-[24px] border sm:rounded-[30px]"
      style={{
        borderColor: "rgba(0, 195, 255, 0.28)",
        background:
          "radial-gradient(circle at 90% 0%, rgba(0, 153, 255, 0.08), transparent 38%), linear-gradient(135deg, #061522 0%, #040b15 55%, #08091a 100%)",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.024), 0 15px 45px rgba(0,0,0,0.2), 0 0 40px rgba(0,229,255,0.05)",
      }}
    >
      {/* soft spotlight glow behind the content, not a flat background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,229,255,0.18), rgba(176,38,255,0.1) 45%, transparent 70%)",
        }}
      />

      <div className="relative px-6 py-16 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-wide"
            style={{
              background: "rgba(0, 217, 255, 0.13)",
              border: "1px solid rgba(0, 217, 255, 0.4)",
              color: "rgb(0, 217, 255)",
            }}
          >
            <span aria-hidden="true">⚡</span> Premium Gadgets &amp; Smart Tech
          </span>

          <h1 className="mt-4 font-heading text-3xl font-black tracking-tight text-white sm:text-5xl">
            Wireless Audio, Smartwatches &amp;
            <br />
            <span className="text-cyan-400">Gaming Gear</span> — Delivered Nationwide
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Cash on delivery &amp; free shipping on orders over Rs. 3,000. Real reviews, fast
            dispatch, and a store that stands behind every order.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/category/all"
              className="rounded-2xl px-7 py-3.5 text-sm font-extrabold uppercase tracking-wide text-[#03101a] transition active:scale-95"
              style={{
                background: "linear-gradient(90deg, #00d9ff, #21cfff)",
                border: "1px solid rgba(255,255,255,0.22)",
              }}
            >
              Shop All Products →
            </Link>
            <Link
              href="/track-order"
              className="rounded-2xl border border-white/20 px-7 py-3.5 text-sm font-bold text-white transition hover:border-cyan-300"
            >
              Track My Order
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
