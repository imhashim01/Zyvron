"use client";

import { useEffect } from "react";
import { productPayload, trackEvent } from "@/lib/metaPixel";

/** Reports a Meta ViewContent event once per product page view (the page itself is a server component). */
export default function TrackViewContent({ product }) {
  useEffect(() => {
    trackEvent("ViewContent", productPayload(product));
    // Keyed on the id only: re-renders of the same product must not re-fire.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product._id]);

  return null;
}
