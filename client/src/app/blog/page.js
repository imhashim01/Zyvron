import PageHeader from "@/components/ui/PageHeader";
import Card from "@/components/ui/Card";
import { SITE_NAME } from "@/data/constants";

export const metadata = {
  title: "Tech Tips Blog",
  description: `Practical tips on getting the most out of your audio, wearable and gaming gear, from ${SITE_NAME}.`,
};

const POSTS = [
  {
    title: "Getting the Most Battery Life Out of Your Wireless Earbuds",
    tag: "Audio",
    body: "Keep the case topped up rather than letting it run flat, lower the volume a notch (high volume drains the battery faster than most people expect), and turn off ANC when you don't need it - it's one of the biggest power draws on true wireless earbuds.",
  },
  {
    title: "Choosing a Smartwatch: What Actually Matters",
    tag: "Wearables",
    body: "Battery life and display type matter more day-to-day than raw feature count. An always-on AMOLED display looks great but costs battery; decide if you'd rather glance at the time instantly or charge less often, and pick accordingly.",
  },
  {
    title: "Gaming Mouse DPI, Explained Simply",
    tag: "Gaming",
    body: "Higher DPI isn't automatically better - it just means the cursor moves further per inch of physical movement. Most players are more accurate around 800-1600 DPI; a mouse that goes up to 16000 DPI is about flexibility, not a requirement to play at max sensitivity.",
  },
  {
    title: "Protecting Your Phone Without Bulking It Up",
    tag: "Mobile Accessories",
    body: "A thin case plus a separate tempered-glass screen protector usually protects better than one thick all-in-one case, and it's easier to replace just the part that gets scratched - the glass - instead of the whole case.",
  },
];

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
      <PageHeader
        eyebrow="Tech Tips"
        title="Zyvron"
        accent="Blog"
        subtitle="Practical, no-nonsense tips for getting more out of your gear."
      />

      <div className="space-y-5">
        {POSTS.map((post) => (
          <Card key={post.title} className="p-6">
            <span className="text-xs font-bold uppercase tracking-wide text-cyan-400">{post.tag}</span>
            <h2 className="mt-2 font-heading text-lg font-bold text-white">{post.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-white/60">{post.body}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
