"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "@/lib/authContext";

const TABS = [
  { href: "/admin/products", label: "Products" },
  { href: "/admin/orders", label: "Orders" },
  { href: "/admin/coupons", label: "Coupons" },
  { href: "/admin/subscribers", label: "Subscribers" },
  { href: "/admin/complaints", label: "Complaints" },
];

export default function AdminLayout({ children }) {
  const { user, loading, isAdmin } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) router.push("/login");
  }, [loading, user, isAdmin, router]);

  if (loading || !user || !isAdmin) return null;

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <h1 className="mb-6 font-heading text-2xl font-bold text-white">Admin Panel</h1>
      <nav className="mb-8 flex flex-wrap gap-2">
        {TABS.map((tab) => (
          <Link
            key={tab.href}
            href={tab.href}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              pathname === tab.href
                ? "bg-cyan-400 text-black"
                : "bg-white/5 text-white/70 hover:bg-white/10"
            }`}
          >
            {tab.label}
          </Link>
        ))}
      </nav>
      {children}
    </div>
  );
}
