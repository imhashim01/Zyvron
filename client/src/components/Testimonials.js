import Slider from "./Slider";

// Reused verbatim from the old site (zyvrontechofficial.netlify.app footer).
const TESTIMONIALS = [
  {
    name: "Sana Malik",
    quote:
      "Ordered the wireless headphones — bass is deep and battery easily lasts my whole work week. Delivery was fast too.",
  },
  {
    name: "Hamza Tariq",
    quote:
      "Bought the Bluetooth speaker for outdoor trips. Water-proof build is solid and sound quality punches above its price.",
  },
  {
    name: "Ayesha Bibi",
    quote: "Smartwatch display is gorgeous and the battery lasts days. COD made it super easy to trust the purchase.",
  },
  {
    name: "Bilal Ahmed",
    quote:
      "The Zyvron Titanium Ultra smartwatch feels genuinely premium — the always-on display and build quality are way above the price point.",
  },
];

function Stars() {
  return (
    <div className="mb-3 text-sm" style={{ color: "rgb(250, 204, 21)" }} aria-hidden="true">
      ★★★★★
    </div>
  );
}

export default function Testimonials() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <p className="mb-1 text-xs font-bold uppercase tracking-widest text-cyan-400">Testimonials</p>
      <h2 className="mb-5 font-heading text-xl font-bold text-white">What Our Customers Say</h2>

      <Slider label="testimonials">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.name}
            className="w-[280px] shrink-0 snap-start rounded-3xl p-5"
            style={{
              background: "linear-gradient(rgba(9,18,31,0.9), rgba(4,11,22,0.88))",
              border: "1px solid rgba(74,152,255,0.32)",
            }}
          >
            <Stars />
            <p className="text-sm text-white/80">&ldquo;{t.quote}&rdquo;</p>
            <div className="mt-4 flex items-center gap-2.5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-400/15 text-xs font-bold text-cyan-300">
                {t.name[0]}
              </span>
              <div>
                <p className="text-sm font-semibold text-white">{t.name}</p>
                <p className="text-xs text-white/40">Verified Buyer</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
