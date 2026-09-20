"use client";

import { useId } from "react";

const fieldClasses =
  "w-full rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 transition focus:border-cyan-400";

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

/** Text input with a real associated <label> - every form field in the app should use this instead of a bare <input>. */
export function Input({ label, hint, error, id, className = "", ...props }) {
  const generatedId = useId();
  const inputId = id || generatedId;
  return (
    <Field id={inputId} label={label} hint={hint} error={error}>
      <input
        id={inputId}
        className={`${fieldClasses} ${error ? "border-red-500/50" : ""} ${className}`}
        {...props}
      />
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
        className={`${fieldClasses} rounded-xl ${error ? "border-red-500/50" : ""} ${className}`}
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
        className={`${fieldClasses} ${error ? "border-red-500/50" : ""} ${className}`}
        {...props}
      >
        {children}
      </select>
    </Field>
  );
}

export default Input;
