"use client";

import { AuthProvider } from "@/lib/authContext";
import { CartProvider } from "@/lib/cartContext";

export default function Providers({ children }) {
  return (
    <AuthProvider>
      <CartProvider>{children}</CartProvider>
    </AuthProvider>
  );
}
