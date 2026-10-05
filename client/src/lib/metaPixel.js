// Meta (Facebook) Pixel helpers. The base snippet is loaded once in
// components/MetaPixel.js; everything else in the app reports events through
// trackEvent() below, so event names and payload shapes live in one place.
//
// All amounts are sent in PKR (the store's only currency). Product ids are
// the Mongo _id, which is also what a future catalog / Conversions API setup
// would key on.

export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "2115798429042793";
export const CURRENCY = "PKR";

/** Fires a standard Meta event. Safe to call anywhere - a no-op on the server or before fbq loads. */
export function trackEvent(name, params = {}, eventId) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  // eventID lets Meta de-duplicate an event if the same thing is ever also
  // sent server-side (Conversions API), and keeps a re-rendered Purchase from
  // counting twice.
  if (eventId) window.fbq("track", name, params, { eventID: String(eventId) });
  else window.fbq("track", name, params);
}

export function trackPageView() {
  trackEvent("PageView");
}

/** Shapes a cart/checkout line list into Meta's contents/content_ids/value fields. */
export function lineItemsPayload(items) {
  const lines = (items || []).filter((item) => item?.product?._id);
  return {
    content_type: "product",
    content_ids: lines.map((item) => item.product._id),
    contents: lines.map((item) => ({
      id: item.product._id,
      quantity: item.quantity,
      item_price: item.product.price,
    })),
    num_items: lines.reduce((sum, item) => sum + item.quantity, 0),
    value: lines.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
    currency: CURRENCY,
  };
}

/** Payload for a single product (ViewContent / AddToCart / AddToWishlist). */
export function productPayload(product, quantity = 1) {
  return {
    content_type: "product",
    content_ids: [product._id],
    content_name: product.title,
    content_category: product.category?.name || undefined,
    contents: [{ id: product._id, quantity, item_price: product.price }],
    value: product.price * quantity,
    currency: CURRENCY,
  };
}
