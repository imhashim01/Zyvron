"use client";

import { useId } from "react";

// No horizontal padding here on purpose - Input always adds its own pl-*/pr-*
// below (pl-4/pr-4 by default). Tailwind classes have no source-order
// guarantee: pairing a baked-in "px-4" with a later "pl-11" override is
// unreliable since both set padding-left at equal specificity, so exactly
// one padding-left class and one padding-right class must ever be emitted
// per field.
const fieldClasses =
  "w-full rounded-full border border-white/10 bg-white/5 py-2.5 text-sm text-white placeholder:text-white/40 transition focus:border-cyan-400";

function Field({ id, label, hint, error, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="text-xs font-semibold text-white/70">
          {label}
        </label>
      )}
      {children}
      {error ? (
        <p className="text-xs text-red-400">{error}</p>
      ) : hint ? (
        <p className="text-xs text-white/40">{hint}</p>
      ) : null}
    </div>
  );
}

/**
 * Text input with a real associated <label> - every form field in the app
 * should use this instead of a bare <input>. `icon` renders a leading glyph
 * (e.g. a mail icon) and `trailing` renders inline content on the right edge
 * (e.g. a show/hide-password toggle button) - both optional and additive, so
 * every existing call site without them renders exactly as before.
 */
export function Input({ label, hint, error, id, icon, trailing, className = "", ...props }) {
  const generatedId = useId();
  const inputId = id || generatedId;
  return (
    <Field id={inputId} label={label} hint={hint} error={error}>
      <div className="relative">
        {icon && (
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/35">
            {icon}
          </span>
        )}
        <input
          id={inputId}
          className={`${fieldClasses} ${icon ? "pl-11" : "pl-4"} ${trailing ? "pr-11" : "pr-4"} ${
            error ? "border-red-500/50" : ""
          } ${className}`}
          {...props}
        />
        {trailing && <span className="absolute right-2 top-1/2 -translate-y-1/2">{trailing}</span>}
      </div>
    </Field>
  );
}

export function Textarea({ label, hint, error, id, className = "", ...props }) {
  const generatedId = useId();
  const inputId = id || generatedId;
  return (
    <Field id={inputId} label={label} hint={hint} error={error}>
      <textarea
        id={inputId}
        className={`${fieldClasses} rounded-xl px-4 ${error ? "border-red-500/50" : ""} ${className}`}
        {...props}
      />
    </Field>
  );
}

export function Select({ label, hint, error, id, className = "", children, ...props }) {
  const generatedId = useId();
  const inputId = id || generatedId;
  return (
    <Field id={inputId} label={label} hint={hint} error={error}>
      <select
        id={inputId}
        className={`${fieldClasses} px-4 ${error ? "border-red-500/50" : ""} ${className}`}
        {...props}
      >
        {children}
      </select>
    </Field>
  );
}

export default Input;
