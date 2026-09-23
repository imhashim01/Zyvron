"use client";

import { useEffect, useState } from "react";
import { apiJson } from "@/lib/api";
import { useCart } from "@/store/cartContext";
import ProductCard from "./ProductCard";

export default function WishlistGrid() {
  const { wishlist } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (wishlist.length === 0) {
      setProducts([]);
      setLoading(false);
      return;
    }
    let cancelled = false;
    setLoading(true);
    apiJson(`/products?ids=${wishlist.join(",")}&limit=${wishlist.length}`)
      .then((data) => {
        if (!cancelled) setProducts(data?.products || []);
      })
      .catch(() => {
        if (!cancelled) setProducts([]);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [wishlist]);

  if (loading) return <p className="text-white/50">Loading your wishlist…</p>;
  if (products.length === 0)
    return <p className="text-white/50">Your wishlist is empty — tap the heart icon on any product to save it here.</p>;

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {products.map((p) => (
        <ProductCard key={p._id} product={p} />
      ))}
    </div>
  );
}
