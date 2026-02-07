import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import siteData from "@/data/site.json";
import servicesData from "@/data/services.json";
import servicesDetail from "@/data/services-detail.json";
import DummyImage from "@/components/DummyImage";

type ServiceDetail = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  whatWeOffer: string[];
  outcomes: string[];
  caseStudyTitle: string;
  caseStudyHref: string;
};

const details = servicesDetail as Record<string, ServiceDetail>;

export async function generateStaticParams() {
  return servicesData.items.map((item) => ({ slug: item.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = details[slug];
  if (!service) return { title: "Service | Viiva" };
  return {
    title: `${service.title} | ${siteData.company.name} — What We Do`,
    description: service.tagline + " " + service.description.slice(0, 120) + "...",
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = details[slug];
  if (!service) notFound();

  const relatedServices = servicesData.items
    .filter((s) => s.id !== slug)
    .slice(0, 8);

  return (
    <main>
      {/* Hero */}
      <section className="section-padding pt-28">
        <div className="container-narrow">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-[var(--viiva-red)]"
          >
            ← All services
          </Link>
          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
                {service.title}
              </h1>
              <p className="mt-4 text-xl text-[var(--viiva-red)]">
                {service.tagline}
              </p>
              <p className="mt-6 text-lg text-white/80">
                {service.description}
              </p>
              <Link href="/contact" className="btn-primary mt-8">
                Let&apos;s Talk Business
              </Link>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10 bg-[var(--viiva-gray)]">
              <DummyImage
                seed={service.id}
                alt={service.title}
                className="h-full w-full"
                aspect="4/3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="section-padding border-t border-white/10 bg-[var(--viiva-black-soft)]">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold md:text-4xl">
            What we offer
          </h2>
          <p className="mt-4 max-w-2xl text-white/80">
            How we deliver {service.title} for our clients.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.whatWeOffer.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-[var(--viiva-gray)] px-5 py-4"
              >
                <span className="mt-0.5 text-[var(--viiva-red)]">✓</span>
                <span className="text-white/90">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Outcomes */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold md:text-4xl">
            Outcomes & proof
          </h2>
          <p className="mt-4 max-w-2xl text-white/80">
            Real results from our {service.title} work.
          </p>
          <div className="mt-10 space-y-6">
            {service.outcomes.map((outcome, i) => (
              <div
                key={i}
                className="flex gap-4 rounded-xl border border-white/10 bg-[var(--viiva-gray)] p-5"
              >
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-[var(--viiva-gray-light)]">
                  <Image
                    src={`https://picsum.photos/seed/outcome-${service.id}-${i}/96/96`}
                    alt=""
                    width={96}
                    height={96}
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
      <section className="section-padding border-t border-white/10 bg-[var(--viiva-black-soft)]">
        <div className="container-narrow">
          <div className="rounded-2xl border border-[var(--viiva-red)]/30 bg-[var(--viiva-gray)] p-8 md:p-12">
            <h2 className="text-2xl font-bold md:text-3xl">
              {service.caseStudyTitle}
            </h2>
            <p className="mt-4 text-white/80">
              Explore case studies and insights related to {service.title}.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href={service.caseStudyHref} className="btn-primary">
                View case studies & insights
              </Link>
              <Link href="/contact" className="btn-outline">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold md:text-4xl">
            Related services
          </h2>
          <p className="mt-4 text-white/80">
            Explore more of what we do.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {relatedServices.map((s) => (
              <Link
                key={s.id}
                href={`/services/${s.id}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[var(--viiva-gray)] transition hover:border-[var(--viiva-red)]/30"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--viiva-gray-light)]">
                  <DummyImage
                    seed={s.id}
                    alt={s.title}
                    className="h-full w-full"
                    aspect="4/3"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-white group-hover:text-[var(--viiva-red)]">
                    {s.title}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-sm text-white/70">
                    {s.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/services" className="btn-outline">
              View all services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
