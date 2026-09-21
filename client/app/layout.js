import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import FloatingActions from "@/components/FloatingActions";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Premium Gadgets & Smart Tech Store`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Shop premium wireless audio, smartwatches, gaming gear & smart mobile accessories in Pakistan. Cash on delivery & free nationwide shipping on orders over Rs. 3,000.",
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/favicon-256.png", sizes: "256x256" }],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Premium Gadgets & Smart Tech Store`,
    description:
      "Shop premium wireless audio, smartwatches, gaming gear & smart mobile accessories in Pakistan.",
    images: [{ url: "/zyvron-og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/zyvron-og-image.png"],
  },
};

export default function RootLayout({ children }) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/zyvron-logo.png`,
  };
  const siteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/category/all?search={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" className={`${jakarta.variable} ${grotesk.variable}`}>
      <body className="flex min-h-screen flex-col bg-[#05060a] text-white antialiased">
        <JsonLd data={orgJsonLd} />
        <JsonLd data={siteJsonLd} />
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingActions />
        </Providers>
      </body>
    </html>
  );
}
