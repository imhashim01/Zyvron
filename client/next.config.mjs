/** @type {import('next').NextConfig} */
const nextConfig = {
  // Hides the dev-only "N" build-activity indicator (bottom-left) - it never
  // renders in production, but it was showing up in every local screenshot.
  devIndicators: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
      { protocol: "http", hostname: "**" },
    ],
    // Product seed data uses placehold.co placeholder images, which are SVG
    // by default - Next's image optimizer refuses to process remote SVGs
    // unless this is explicitly opted into (it's a defense against a remote
    // host serving a malicious/scripted SVG). The CSP below is Next's own
    // recommended mitigation: it strips scripting from any SVG this proxy
    // serves, so allowing SVG here doesn't reopen that risk.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
