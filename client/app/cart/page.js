"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cartContext";
import { formatPKR } from "@/lib/format";
import FreeShippingBar from "@/components/FreeShippingBar";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, subtotal, shippingFee, hydrated } = useCart();

  if (!hydrated) return null;

  if (cart.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
        <h1 className="mb-4 font-heading text-2xl font-bold text-white">Your cart is empty</h1>
        <Link href="/category/all" className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold text-black hover:bg-cyan-300">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <h1 className="mb-6 font-heading text-2xl font-bold text-white">Your Cart</h1>
      <FreeShippingBar />

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.product._id}
            className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4"
          >
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-white/5">
              {item.product.image && (
                <Image src={item.product.image} alt={item.product.title} fill sizes="80px" className="object-cover" />
              )}
            </div>
            <div className="flex-1">
              <Link href={`/product/${item.product.slug}`} className="font-semibold text-white/90 hover:text-cyan-300">
                {item.product.title}
              </Link>
              <p className="text-sm text-white/50">{formatPKR(item.product.price)}</p>
            </div>
            <div className="flex items-center rounded-full border border-white/15">
              <button
                onClick={() => updateQuantity(item.product._id, item.quantity - 1)}
                className="px-3 py-1 text-white/70 hover:text-white"
              >
                −
              </button>
              <span className="w-8 text-center text-sm">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.product._id, item.quantity + 1)}
                className="px-3 py-1 text-white/70 hover:text-white"
              >
                +
              </button>
            </div>
            <button
              onClick={() => removeFromCart(item.product._id)}
              className="text-sm text-red-400 hover:underline"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 space-y-2 rounded-xl border border-white/10 bg-white/[0.03] p-5">
        <div className="flex justify-between text-white/70">
          <span>Subtotal</span>
          <span>{formatPKR(subtotal)}</span>
        </div>
        <div className="flex justify-between text-white/70">
          <span>Shipping</span>
          <span>{shippingFee === 0 ? "Free" : formatPKR(shippingFee)}</span>
        </div>
        <div className="flex justify-between border-t border-white/10 pt-2 text-lg font-bold text-white">
          <span>Total</span>
          <span>{formatPKR(subtotal + shippingFee)}</span>
        </div>
        <Link
          href="/checkout"
          className="mt-3 block rounded-full bg-cyan-400 py-3 text-center text-sm font-bold text-black hover:bg-cyan-300"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}
