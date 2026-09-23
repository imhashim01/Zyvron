export default function PageHeader({ eyebrow, title, accent, subtitle }) {
  return (
    <div className="mb-10 text-center">
      {eyebrow && (
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">{eyebrow}</span>
      )}
      <h1 className="mt-2 font-heading text-3xl font-black text-white sm:text-4xl">
        {title} {accent && <span className="text-cyan-400">{accent}</span>}
      </h1>
      {subtitle && <p className="mx-auto mt-3 max-w-2xl text-white/60">{subtitle}</p>}
    </div>
  );
}
