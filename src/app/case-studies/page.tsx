import type { Metadata } from "next";
import Link from "next/link";
import siteData from "@/data/site.json";
import insightsData from "@/data/insights.json";
import DummyImage from "@/components/DummyImage";

export const metadata: Metadata = {
  title: `Case Studies | ${siteData.company.name} — How We Deliver`,
  description: "Stories of our transformations across services and industries.",
};

const caseStudies = insightsData.items.filter((i) => i.type === "Case Study");

export default function CaseStudiesPage() {
  return (
    <main>
      <section className="section-padding pt-28">
        <div className="container-narrow">
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
            Case Studies
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-white/80">
            Stories of our transformations across services and industries. From
            concept to completion.
          </p>
          <Link href="/contact" className="btn-primary mt-8">
            Let&apos;s Talk Business
          </Link>
        </div>
      </section>

      <section className="section-padding border-t border-white/10 bg-[var(--viiva-black-soft)]">
        <div className="container-narrow">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="group hover-lift flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[var(--viiva-gray)]"
              >
                <div className="relative aspect-video w-full overflow-hidden">
                  <DummyImage
                    seed={item.id + item.title}
                    alt={item.title}
                    className="h-full w-full"
                    aspect="video"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--viiva-red)]">
                    {item.type}
                  </span>
                  <h2 className="mt-2 font-semibold text-white group-hover:text-[var(--viiva-red)] line-clamp-2">
                    {item.title}
                  </h2>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm text-[var(--viiva-red)]">
                    Explore More
                    <span className="transition group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <p className="mt-8 text-center text-white/60">
            More case studies: US Fintech&apos;s AI Financial Modeling Secures $2M+
            Funding, Pakistan Furniture Leader&apos;s Shopify Migration Drives 55%
            Growth, and more.
          </p>
        </div>
      </section>
    </main>
  );
}
