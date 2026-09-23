import { SITE_URL } from "@/data/constants";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/account", "/checkout", "/cart"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
