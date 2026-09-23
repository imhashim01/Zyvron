"use client";

import { AuthProvider } from "@/store/authContext";
import { CartProvider } from "@/store/cartContext";

export default function Providers({ children }) {
  return (
    <AuthProvider>
      <CartProvider>{children}</CartProvider>
    </AuthProvider>
  );
}
