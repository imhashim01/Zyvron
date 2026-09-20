"use client";

import Link from "next/link";
import { useState } from "react";
import { apiJson } from "@/lib/api";
import { useCart } from "@/lib/cartContext";
import { formatPKR } from "@/lib/format";

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
  const [coupon, setCoupon] = useState("");
  const [couponResult, setCouponResult] = useState(null);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [order, setOrder] = useState(null);

  if (!hydrated) return null;

  if (order) {
    return (
      <div className="mx-auto max-w-xl px-4 py-20 text-center sm:px-6">
        <div className="mb-4 text-5xl">🎉</div>
        <h1 className="mb-2 font-heading text-2xl font-bold text-white">Order Placed!</h1>
        <p className="mb-4 text-white/60">
          Your tracking number is{" "}
          <span className="font-mono font-bold text-cyan-300">{order.orderNumber}</span>
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

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    if (!form.name.trim() || !form.phone.trim() || !form.city.trim() || !form.address.trim()) {
      setError("Please fill in your name, phone, city and address.");
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
      setOrder(data.order || data);
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
        <form onSubmit={onSubmit} className="space-y-4">
          <input
            required
            placeholder="Full name"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-cyan-400 focus:outline-none"
          />
          <input
            required
            placeholder="Phone (03XXXXXXXXX)"
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
            className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-cyan-400 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email (optional, for order updates)"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-cyan-400 focus:outline-none"
          />
          <input
            required
            placeholder="City"
            value={form.city}
            onChange={(e) => setForm((f) => ({ ...f, city: e.target.value }))}
            className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-cyan-400 focus:outline-none"
          />
          <textarea
            required
            placeholder="Full delivery address"
            value={form.address}
            onChange={(e) => setForm((f) => ({ ...f, address: e.target.value }))}
            rows={3}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-cyan-400 focus:outline-none"
          />

          {error && <p className="text-sm text-red-400">{error}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-full bg-cyan-400 py-3 text-sm font-bold text-black hover:bg-cyan-300 disabled:opacity-60"
          >
            {submitting ? "Placing order…" : "Place Order (Cash on Delivery)"}
          </button>
        </form>

        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
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
              className="flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-cyan-400 focus:outline-none"
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
