"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef } from "react";
import { META_PIXEL_ID, trackEvent, trackPageView } from "@/lib/metaPixel";

/**
 * The base snippet (with its own initial PageView) only runs on the first
 * full page load. Every later page in this app is a client-side navigation
 * that never reloads the document, so this listener reports a PageView for
 * each route change - skipping the very first render, which the snippet has
 * already counted.
 */
function RouteChangePageViews() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    trackPageView();
  }, [pathname, searchParams]);

  return null;
}

/**
 * WhatsApp is the store's main contact channel and its links live in several
 * places (floating button, footer, contact page, policy pages, homepage CTA).
 * One delegated click listener reports a Meta "Contact" event for all of
 * them - including any added later - instead of wiring each link by hand.
 */
function WhatsAppContactClicks() {
  useEffect(() => {
    function onClick(e) {
      const link = e.target.closest?.('a[href*="wa.me/"]');
      if (link) trackEvent("Contact", { content_name: "WhatsApp" });
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}

export default function MetaPixel() {
  if (!META_PIXEL_ID) return null;

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');`}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
      <Suspense fallback={null}>
        <RouteChangePageViews />
      </Suspense>
      <WhatsAppContactClicks />
    </>
  );
}
