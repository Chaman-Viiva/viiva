import Link from "next/link";
import insightsData from "@/data/insights.json";
import DummyImage from "./DummyImage";

export default function FeaturedInsights() {
  return (
    <section id="insights" className="section-padding bg-[var(--viiva-black-soft)]">
      <div className="container-narrow">
        <p className="text-sm font-semibold uppercase tracking-wider text-[var(--viiva-red)]">
          {insightsData.sectionTitle}
        </p>
        <h2 className="mt-2 text-3xl font-bold md:text-4xl lg:text-5xl">
          {insightsData.sectionHeadline}
        </h2>
        <p className="mt-2 text-white/70">{insightsData.subheadline}</p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {insightsData.items.map((item) => (
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
                <h3 className="mt-2 font-semibold text-white group-hover:text-[var(--viiva-red)] line-clamp-2">
                  {item.title}
                </h3>
                <span className="mt-3 inline-flex items-center gap-1 text-sm text-[var(--viiva-red)]">
                  {insightsData.ctaLabel}
                  <span className="transition group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
