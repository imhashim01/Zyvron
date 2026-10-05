"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { apiJson } from "@/lib/api";
import { useCart } from "@/store/cartContext";
import { formatPKR } from "@/lib/format";
import CategoryIcon from "@/components/CategoryIcon";
import { CURRENCY, lineItemsPayload, trackEvent } from "@/lib/metaPixel";

const inputClass =
  "w-full rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-cyan-400";

// Only Cash on Delivery is live: the orders API's paymentMethod enum is
// ["COD"], so EasyPaisa and card are shown (as the storefront will offer
// them) but disabled until they're actually built.
const PAYMENT_OPTIONS = [
  { id: "cod", label: "Cash on Delivery", description: "Pay in cash when your order arrives.", available: true },
  { id: "easypaisa", label: "EasyPaisa", description: "Pay with your EasyPaisa account.", available: false },
  { id: "card", label: "Debit Card", description: "Pay securely with your debit card.", available: false },
];

function Stepper({ step }) {
  const steps = [
    { id: "details", label: "Details" },
    { id: "payment", label: "Payment" },
  ];
  const currentIndex = steps.findIndex((s) => s.id === step);
  return (
    <ol className="mb-6 flex items-center gap-3 text-sm font-semibold">
      {steps.map((s, i) => {
        const done = i < currentIndex;
        const active = i === currentIndex;
        return (
          <li key={s.id} className="flex items-center gap-3">
            <span
              className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${
                done || active ? "bg-cyan-400 text-black" : "bg-white/10 text-white/50"
              }`}
            >
              {done ? "✓" : i + 1}
            </span>
            <span className={active || done ? "text-white" : "text-white/40"}>{s.label}</span>
            {i < steps.length - 1 && <span className="h-px w-8 bg-white/15" aria-hidden="true" />}
          </li>
        );
      })}
    </ol>
  );
}

function Section({ number, title, children, action }) {
  return (
    <section className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="flex items-center gap-2 font-heading text-base font-bold text-white">
          {number && (
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-400/15 text-xs text-cyan-300">
              {number}
            </span>
          )}
          {title}
        </h2>
        {action}
      </div>
      {children}
    </section>
  );
}

function RecapRow({ label, value }) {
  if (!value) return null;
  return (
    <div className="flex gap-3 text-sm">
      <dt className="w-20 shrink-0 text-white/40">{label}</dt>
      <dd className="min-w-0 break-words text-white/80">{value}</dd>
    </div>
  );
}

export default function CheckoutPage() {
  const {
    checkoutItems,
    checkoutSubtotal,
    shippingFee,
    isFreeShipping,
    clearCart,
    clearBuyNow,
    buyNowItem,
    hydrated,
  } = useCart();

  const [form, setForm] = useState({ name: "", phone: "", email: "", city: "", address: "" });
  const [step, setStep] = useState("details");
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [coupon, setCoupon] = useState("");
  const [couponResult, setCouponResult] = useState(null);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [order, setOrder] = useState(null);

  // InitiateCheckout once per visit to this page, as soon as the cart (or
  // Buy Now item) has loaded from storage - not again on every re-render.
  const checkoutTracked = useRef(false);
  useEffect(() => {
    if (!hydrated || checkoutTracked.current || checkoutItems.length === 0) return;
    checkoutTracked.current = true;
    trackEvent("InitiateCheckout", lineItemsPayload(checkoutItems));
  }, [hydrated, checkoutItems]);

  if (!hydrated) return null;

  if (order) {
    return (
      <div className="mx-auto max-w-xl px-4 py-20 text-center sm:px-6">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
          <CategoryIcon name="check-circle" className="h-9 w-9" />
        </div>
        <h1 className="mb-2 font-heading text-2xl font-bold text-white">Order Placed!</h1>
        <p className="mb-4 text-white/60">
          Your tracking number is{" "}
          <span className="font-mono font-bold text-cyan-300">{order.orderNumber}</span>
        </p>
        <p className="mb-2 text-sm text-white/70">
          Total to pay on delivery:{" "}
          <span className="font-bold text-white">{formatPKR(order.total)}</span>
        </p>
        <p className="mb-8 text-sm text-white/50">
          Payment method: Cash on Delivery. We&apos;ll call you to confirm before dispatch.
        </p>
        <div className="flex justify-center gap-3">
          <Link href={`/track-order?order=${order.orderNumber}`} className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold text-black hover:bg-cyan-300">
            Track Order
          </Link>
          <Link href="/" className="rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white hover:border-cyan-300">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  if (checkoutItems.length === 0) {
    return (
      <div className="mx-auto max-w-xl px-4 py-20 text-center sm:px-6">
        <h1 className="mb-4 font-heading text-2xl font-bold text-white">Nothing to check out</h1>
        <Link href="/category/all" className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold text-black hover:bg-cyan-300">
          Continue Shopping
        </Link>
      </div>
    );
  }

  const discount = couponResult?.valid ? couponResult.discount : 0;
  const total = Math.max(0, checkoutSubtotal - discount) + shippingFee;

  function setField(key) {
    return (e) => setForm((f) => ({ ...f, [key]: e.target.value }));
  }

  function goToStep(next) {
    setError("");
    setStep(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function applyCoupon() {
    if (!coupon.trim()) return;
    try {
      const res = await apiJson("/coupons/validate", {
        method: "POST",
        body: JSON.stringify({ code: coupon.trim(), subtotal: checkoutSubtotal }),
      });
      setCouponResult(res);
    } catch (err) {
      setCouponResult({ valid: false, message: err.message });
    }
  }

  // Step 1 -> 2. The form's own `required` / type="email" attributes already
  // block an empty or malformed submit; this covers whitespace-only values
  // and a phone number that's too short to be real.
  function onContinue(e) {
    e.preventDefault();
    setError("");
    if (!form.name.trim() || !form.phone.trim() || !form.city.trim() || !form.address.trim()) {
      setError("Please fill in your name, phone, city and address.");
      return;
    }
    if (form.phone.replace(/\D/g, "").length < 10) {
      setError("Please enter a valid phone number, e.g. 03XXXXXXXXX.");
      return;
    }
    trackEvent("AddPaymentInfo", lineItemsPayload(checkoutItems));
    goToStep("payment");
  }

  async function onPlaceOrder(e) {
    e.preventDefault();
    setError("");
    if (paymentMethod !== "cod") {
      setError("That payment method isn't available yet - please choose Cash on Delivery.");
      return;
    }
    setSubmitting(true);
    try {
      const payload = {
        items: checkoutItems.map((item) => ({ productId: item.product._id, quantity: item.quantity })),
        customer: form,
        couponCode: couponResult?.valid ? coupon.trim() : undefined,
      };
      const data = await apiJson("/orders", { method: "POST", body: JSON.stringify(payload) });
      const placed = data.order || data;
      // Reported from the server's own order (its prices, discount and
      // total), not the cart's possibly-stale copy. The order number doubles
      // as Meta's eventID, so the same purchase can never be counted twice.
      trackEvent(
        "Purchase",
        {
          value: placed.total,
          currency: CURRENCY,
          content_type: "product",
          content_ids: (placed.items || []).map((i) => String(i.product)),
          contents: (placed.items || []).map((i) => ({
            id: String(i.product),
            quantity: i.quantity,
            item_price: i.price,
          })),
          num_items: (placed.items || []).reduce((sum, i) => sum + i.quantity, 0),
          order_id: placed.orderNumber,
        },
        placed.orderNumber
      );
      setOrder(placed);
      if (buyNowItem) clearBuyNow();
      else clearCart();
    } catch (err) {
      setError(err.message || "Couldn't place your order. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <h1 className="mb-6 font-heading text-2xl font-bold text-white">Checkout</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <Stepper step={step} />

          {step === "details" ? (
            <form onSubmit={onContinue} className="space-y-5">
              <Section number="1" title="Contact">
                <div className="space-y-4">
                  <input
                    required
                    autoComplete="name"
                    placeholder="Full name"
                    value={form.name}
                    onChange={setField("name")}
                    className={inputClass}
                  />
                  <input
                    required
                    type="tel"
                    autoComplete="tel"
                    placeholder="Phone (03XXXXXXXXX)"
                    value={form.phone}
                    onChange={setField("phone")}
                    className={inputClass}
                  />
                  <input
                    type="email"
                    autoComplete="email"
                    placeholder="Email (optional, for order updates)"
                    value={form.email}
                    onChange={setField("email")}
                    className={inputClass}
                  />
                </div>
              </Section>

              <Section number="2" title="Address">
                <div className="space-y-4">
                  <input
                    required
                    autoComplete="address-level2"
                    placeholder="City"
                    value={form.city}
                    onChange={setField("city")}
                    className={inputClass}
                  />
                  <textarea
                    required
                    autoComplete="street-address"
                    placeholder="Full delivery address"
                    value={form.address}
                    onChange={setField("address")}
                    rows={3}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-cyan-400"
                  />
                </div>
              </Section>

              {error && <p className="text-sm text-red-400">{error}</p>}

              <button
                type="submit"
                className="w-full rounded-full bg-cyan-400 py-3 text-sm font-bold text-black hover:bg-cyan-300"
              >
                Continue to Payment
              </button>
            </form>
          ) : (
            <div className="space-y-5">
              <Section
                title="Your details"
                action={
                  <button
                    type="button"
                    onClick={() => goToStep("details")}
                    className="text-sm font-semibold text-cyan-300 hover:underline"
                  >
                    Edit
                  </button>
                }
              >
                <dl className="space-y-4">
                  <div className="space-y-1.5">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-cyan-300/80">Contact</p>
                    <RecapRow label="Name" value={form.name.trim()} />
                    <RecapRow label="Phone" value={form.phone.trim()} />
                    <RecapRow label="Email" value={form.email.trim()} />
                  </div>
                  <div className="space-y-1.5 border-t border-white/10 pt-4">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-cyan-300/80">Address</p>
                    <RecapRow label="City" value={form.city.trim()} />
                    <RecapRow label="Address" value={form.address.trim()} />
                  </div>
                </dl>
              </Section>

              <form onSubmit={onPlaceOrder} className="space-y-5">
                <Section number="3" title="Payment method">
                  <div role="radiogroup" aria-label="Payment method" className="space-y-3">
                    {PAYMENT_OPTIONS.map((opt) => {
                      const selected = paymentMethod === opt.id;
                      return (
                        <label
                          key={opt.id}
                          className={`flex items-start gap-3 rounded-xl border p-4 transition ${
                            selected ? "border-cyan-400 bg-cyan-400/5" : "border-white/10"
                          } ${
                            opt.available
                              ? "cursor-pointer hover:border-cyan-400/50"
                              : "cursor-not-allowed opacity-60"
                          }`}
                        >
                          <input
                            type="radio"
                            name="paymentMethod"
                            value={opt.id}
                            checked={selected}
                            disabled={!opt.available}
                            onChange={() => setPaymentMethod(opt.id)}
                            className="mt-1 accent-cyan-400"
                          />
                          <span className="min-w-0 flex-1">
                            <span className="flex flex-wrap items-center gap-2 text-sm font-semibold text-white">
                              {opt.label}
                              {!opt.available && (
                                <span className="rounded-full bg-amber-400/15 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-amber-300">
                                  Coming soon
                                </span>
                              )}
                            </span>
                            <span className="mt-0.5 block text-xs text-white/50">{opt.description}</span>
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </Section>

                {error && <p className="text-sm text-red-400">{error}</p>}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-full bg-cyan-400 py-3 text-sm font-bold text-black hover:bg-cyan-300 disabled:opacity-60"
                >
                  {submitting ? "Placing order…" : "Place Order"}
                </button>
                <button
                  type="button"
                  onClick={() => goToStep("details")}
                  className="w-full text-center text-sm font-semibold text-white/60 hover:text-white"
                >
                  ← Back to details
                </button>
              </form>
            </div>
          )}
        </div>

        <div className="h-fit rounded-xl border border-white/10 bg-white/[0.03] p-5">
          <h2 className="mb-4 font-heading text-lg font-bold text-white">Order Summary</h2>
          <div className="space-y-2 text-sm text-white/70">
            {checkoutItems.map((item) => (
              <div key={item.product._id} className="flex justify-between">
                <span>
                  {item.product.title} × {item.quantity}
                </span>
                <span>{formatPKR(item.product.price * item.quantity)}</span>
              </div>
            ))}
          </div>

          <div className="my-4 flex gap-2">
            <input
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              placeholder="Coupon code"
              className="flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-cyan-400"
            />
            <button
              type="button"
              onClick={applyCoupon}
              className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20"
            >
              Apply
            </button>
          </div>
          {couponResult && (
            <p className={`mb-2 text-xs ${couponResult.valid ? "text-emerald-400" : "text-red-400"}`}>
              {couponResult.valid ? "Coupon applied!" : couponResult.message || "Invalid coupon"}
            </p>
          )}

          <div className="space-y-2 border-t border-white/10 pt-4 text-sm text-white/70">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{formatPKR(checkoutSubtotal)}</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between text-emerald-400">
                <span>Discount</span>
                <span>-{formatPKR(discount)}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>{isFreeShipping ? "Free" : formatPKR(shippingFee)}</span>
            </div>
            <div className="flex justify-between border-t border-white/10 pt-2 text-lg font-bold text-white">
              <span>Total</span>
              <span>{formatPKR(total)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
