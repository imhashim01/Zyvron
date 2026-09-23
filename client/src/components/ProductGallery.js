"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductGallery({ images = [], title }) {
  const gallery = images.length ? images : ["/zyvron-og-image.png"];
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5">
        <Image
          src={gallery[active]}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority
        />
      </div>
      {gallery.length > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto">
          {gallery.map((src, i) => (
            <button
              key={src + i}
              onClick={() => setActive(i)}
              className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border ${
                active === i ? "border-cyan-400" : "border-white/10"
              }`}
            >
              <Image src={src} alt={`${title} ${i + 1}`} fill sizes="64px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
