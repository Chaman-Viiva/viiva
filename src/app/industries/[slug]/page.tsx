import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import siteData from "@/data/site.json";
import industriesData from "@/data/industries.json";
import industriesDetail from "@/data/industries-detail.json";
import IndustriesGrid from "@/components/IndustriesGrid";

const iconMap: Record<string, string> = {
  finance: "💰",
  health: "🏥",
  cart: "🛒",
  rocket: "🚀",
  store: "🏪",
  travel: "✈️",
  signal: "📡",
  government: "🏛️",
  energy: "⚡",
  gaming: "🎮",
};

type IndustryDetail = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  impactStats: { value: string; label: string }[];
  solutions: string[];
  outcomes: string[];
  caseStudyTitle: string;
  caseStudyHref: string;
  icon: string;
};

const details = industriesDetail as Record<string, IndustryDetail>;

export async function generateStaticParams() {
  return industriesData.items.map((item) => ({ slug: item.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = details[slug];
  if (!industry) return { title: "Industry | Viiva" };
  return {
    title: `${industry.title} | ${siteData.company.name} — Our Impact`,
    description: industry.tagline + " " + industry.description.slice(0, 120) + "...",
  };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = details[slug];
  if (!industry) notFound();

  return (
    <main>
      {/* Hero */}
      <section className="section-padding pt-28">
        <div className="container-narrow">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-[var(--viiva-red)]"
          >
            ← All industries
          </Link>
          <div className="mt-6 flex items-center gap-4">
            <span className="text-4xl" aria-hidden>
              {iconMap[industry.icon] || "📌"}
            </span>
            <div>
              <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
                {industry.title}
              </h1>
              <p className="mt-2 text-xl text-[var(--viiva-red)]">
                {industry.tagline}
              </p>
            </div>
          </div>
          <p className="mt-8 max-w-3xl text-lg text-white/80">
            {industry.description}
          </p>
          <Link href="/contact" className="btn-primary mt-8">
            Let&apos;s Talk Business
          </Link>
        </div>
      </section>

      {/* Impact stats */}
      <section className="section-padding border-t border-white/10 bg-[var(--viiva-black-soft)]">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold md:text-4xl">
            Our impact in {industry.title}
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industry.impactStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/10 bg-[var(--viiva-gray)] p-6 text-center"
              >
                <p className="text-3xl font-bold text-[var(--viiva-red)] md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium text-white/80">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions we offer */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold md:text-4xl">
            Solutions we offer
          </h2>
          <p className="mt-4 max-w-2xl text-white/80">
            How we help {industry.title.toLowerCase()} organizations succeed.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industry.solutions.map((solution) => (
              <li
                key={solution}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-[var(--viiva-gray)] px-5 py-4"
              >
                <span className="mt-0.5 text-[var(--viiva-red)]">✓</span>
                <span className="text-white/90">{solution}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Outcomes / proof */}
      <section className="section-padding border-t border-white/10 bg-[var(--viiva-black-soft)]">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold md:text-4xl">
            Outcomes & proof
          </h2>
          <p className="mt-4 max-w-2xl text-white/80">
            Real results from our work in this industry.
          </p>
          <div className="mt-10 space-y-6">
            {industry.outcomes.map((outcome, i) => (
              <div
                key={i}
                className="flex gap-4 rounded-xl border border-white/10 bg-[var(--viiva-gray)] p-5"
              >
                <div className="flex h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-white/10">
                  <Image
                    src={`https://picsum.photos/seed/outcome-${industry.id}-${i}/80/80`}
                    alt=""
                    width={80}
                    height={80}
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="text-white/90">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case study CTA */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="rounded-2xl border border-[var(--viiva-red)]/30 bg-[var(--viiva-gray)] p-8 md:p-12">
            <h2 className="text-2xl font-bold md:text-3xl">
              Featured: {industry.caseStudyTitle}
            </h2>
            <p className="mt-4 text-white/80">
              Read the full case study and more stories from {industry.title}.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href={industry.caseStudyHref} className="btn-primary">
                View case studies
              </Link>
              <Link href="/contact" className="btn-outline">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other industries */}
      <section className="section-padding border-t border-white/10 bg-[var(--viiva-black-soft)]">
        <div className="container-narrow">
          <IndustriesGrid
            items={industriesData.items
              .filter((item) => item.id !== slug)
              .slice(0, 6)}
            title={industriesData.sectionTitle}
            cta={{ href: "/industries", label: "View all industries" }}
            ctaVariant="outline"
          />
        </div>
      </section>
    </main>
  );
}
