import Image from "next/image";
import Link from "next/link";

// Real flagship product (see server/src/seed/seedProducts.js) - image and
// feature copy below are pulled from its actual listing, not invented for
// this banner.
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1624096104992-9b4fa3a279dd?auto=format&fit=crop&w=900&q=85";

const STATS = [
  { icon: "heart", label: "Heart Rate", sub: "Monitoring", color: "#ff4d8d" },
  { icon: "spo2", label: "SpO2", sub: "Tracking", color: "#22e0c9" },
  { icon: "sport", label: "100+", sub: "Sports Modes", color: "#7c8bff" },
];

function StatIcon({ icon }) {
  if (icon === "heart") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M12 21s-7.5-4.6-10-9.3C.5 7.9 2.6 4.5 6.2 4c2-.3 3.8.6 5.8 3 2-2.4 3.8-3.3 5.8-3 3.6.5 5.7 3.9 4.2 7.7C19.5 16.4 12 21 12 21z" />
      </svg>
    );
  }
  if (icon === "spo2") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="2.6" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M12 2l3.5 7L22 10l-5.5 5 1.5 7-6-3.6L6 22l1.5-7L2 10l6.5-1z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden rounded-[24px] border sm:rounded-[30px]"
      style={{
        borderColor: "rgba(0, 195, 255, 0.28)",
        background:
          "radial-gradient(circle at 15% 15%, rgba(176,38,255,0.14), transparent 42%), radial-gradient(circle at 90% 0%, rgba(0, 153, 255, 0.1), transparent 40%), linear-gradient(135deg, #061522 0%, #040b15 55%, #08091a 100%)",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.024), 0 15px 45px rgba(0,0,0,0.2), 0 0 40px rgba(0,229,255,0.05)",
      }}
    >
      {/* scattered particle dots, purely decorative */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(1.5px 1.5px at 10% 20%, #7fe8ff, transparent), radial-gradient(1.5px 1.5px at 80% 12%, #c99bff, transparent), radial-gradient(1px 1px at 40% 75%, #7fe8ff, transparent), radial-gradient(1px 1px at 65% 88%, #7fe8ff, transparent), radial-gradient(1.5px 1.5px at 92% 55%, #c99bff, transparent), radial-gradient(1px 1px at 25% 48%, #7fe8ff, transparent), radial-gradient(1px 1px at 55% 30%, #7fe8ff, transparent)",
        }}
      />

      {/* slow-floating ambient glow orbs, for depth */}
      <div
        aria-hidden="true"
        className="animate-float-slow pointer-events-none absolute -left-16 top-0 h-72 w-72 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(176,38,255,0.22), transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="animate-float-slow delay-2 pointer-events-none absolute -right-10 bottom-0 h-64 w-64 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(0,229,255,0.18), transparent 70%)" }}
      />

      <div className="relative grid gap-12 px-6 py-14 sm:px-10 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-8">
        <div
          className="text-center lg:text-left"
          style={{ animation: "fade-in-up 0.8s ease both" }}
        >
          <span
            className="animate-pulse-glow inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[11px] font-black uppercase tracking-wide text-white"
            style={{
              background: "linear-gradient(90deg, #00c6ff, #a855f7)",
              boxShadow: "0 0 24px rgba(0,198,255,0.45)",
            }}
          >
            <span aria-hidden="true">⚡</span> Titanium Ultra
          </span>

          <h1 className="mt-5 font-heading text-4xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-6xl">
            Always-On &amp;
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, #00e5ff, #b026ff)" }}
            >
              Always Premium
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-md text-white/60 lg:mx-0">
            A flagship AMOLED smartwatch with a durable titanium-style case &amp; complete
            health tracking.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-5 lg:justify-start">
            <Link
              href="/category/smart-wearables"
              className="shimmer-sweep relative overflow-hidden rounded-2xl px-7 py-3.5 text-sm font-extrabold uppercase tracking-wide text-[#03101a] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,217,255,0.4)] active:scale-95"
              style={{ background: "linear-gradient(90deg, #00e5ff, #a855f7)" }}
            >
              Shop Wearables →
            </Link>
            <span className="flex items-center gap-1.5 text-sm font-semibold text-white/80">
              <span className="text-cyan-300">★</span> 100% Quality
            </span>
          </div>
        </div>

        <div
          className="relative mx-auto flex w-full max-w-sm items-center justify-center py-4 lg:max-w-none lg:py-0"
          style={{ animation: "fade-in-up 0.9s ease 0.15s both" }}
        >
          <div
            className="animate-pulse-glow relative aspect-square w-full max-w-[320px] rounded-full p-10"
            style={{
              background:
                "radial-gradient(circle, rgba(0,229,255,0.18) 0%, rgba(176,38,255,0.12) 55%, transparent 75%)",
            }}
          >
            <div
              className="relative h-full w-full overflow-hidden rounded-[42px] border-2 transition-transform duration-500 hover:scale-[1.02]"
              style={{
                borderColor: "rgba(255,255,255,0.15)",
                boxShadow: "0 0 60px rgba(0,229,255,0.25), 0 0 100px rgba(176,38,255,0.15)",
              }}
            >
              <Image
                src={HERO_IMAGE}
                alt="Zyvron Titanium Ultra smartwatch"
                fill
                sizes="320px"
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="mt-6 flex w-full max-w-[320px] flex-col gap-3 sm:absolute sm:inset-y-0 sm:right-0 sm:mt-0 sm:w-44 sm:justify-center sm:gap-3 lg:-right-4">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className="flex items-center gap-2.5 rounded-2xl border border-white/10 bg-[#0a1522]/90 px-3.5 py-2.5 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-white/25"
                style={{ animation: `fade-in-up 0.6s ease ${0.35 + i * 0.12}s both` }}
              >
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                  style={{ background: `${s.color}22`, color: s.color }}
                >
                  <StatIcon icon={s.icon} />
                </span>
                <span className="text-xs">
                  <span className="block font-bold text-white">{s.label}</span>
                  <span className="block text-white/50">{s.sub}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
