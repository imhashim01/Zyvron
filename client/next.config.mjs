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
  },
};

export default nextConfig;
