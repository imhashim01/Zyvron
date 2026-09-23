import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { CATEGORY_META, SITE_NAME } from "@/data/constants";

export const metadata = {
  title: "About Us",
  description: `About ${SITE_NAME} - premium wireless audio, smartwatches, gaming gear & mobile accessories, delivered nationwide across Pakistan with cash on delivery.`,
};

const VALUES = [
  {
    title: "Nationwide Cash on Delivery",
    body: "Order from anywhere in Pakistan and pay when it arrives at your door - no online payment required.",
  },
  {
    title: "Curated, Quality-Checked Catalog",
    body: "Every product listed is chosen for its build quality and real-world value, not just to fill out a catalog.",
  },
  {
    title: "Real Customer Reviews",
    body: "Ratings and reviews on every product page come from actual buyers, so you know what you're getting before you order.",
  },
  {
    title: "Support That Responds",
    body: "Questions before or after your order? Reach our team directly over WhatsApp or email - see the Contact page for details.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
      <PageHeader
        eyebrow="Our Story"
        title="About"
        accent={SITE_NAME}
        subtitle="Your trusted online destination for premium wireless audio, smartwatches, gaming gear & smart tech accessories in Pakistan."
      />

      <Card className="p-6 sm:p-8">
        <h2 className="font-heading text-lg font-bold text-white">What We're Building</h2>
        <p className="mt-3 text-sm leading-relaxed text-white/60">
          {SITE_NAME} exists to make premium tech accessories - wireless earbuds, smartwatches,
          gaming gear and mobile accessories - easy to buy in Pakistan, without the guesswork.
          That means a catalog you can actually trust, clear pricing, and a checkout that works
          the way people here actually shop: cash on delivery, nationwide.
        </p>
      </Card>

      <div className="mt-10">
        <h2 className="mb-4 font-heading text-lg font-bold text-white">Why Shop With Us</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {VALUES.map((v) => (
            <Card key={v.title} className="p-5">
              <h3 className="font-heading text-sm font-bold text-cyan-300">{v.title}</h3>
              <p className="mt-2 text-sm text-white/60">{v.body}</p>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h2 className="mb-4 font-heading text-lg font-bold text-white">What We Sell</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(CATEGORY_META).map(([slug, meta]) => (
            <Card key={slug} as={Link} href={`/category/${slug}`} hover className="block p-5">
              <h3 className="font-heading text-sm font-bold text-white">{meta.name}</h3>
              {meta.tagline && <p className="mt-1 text-xs text-white/50">{meta.tagline}</p>}
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <Button href="/category/all" size="lg">
          Shop All Products →
        </Button>
      </div>
    </div>
  );
}
