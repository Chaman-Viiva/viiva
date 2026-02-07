import type { Metadata } from "next";
import Link from "next/link";
import siteData from "@/data/site.json";
import servicesData from "@/data/services.json";
import DummyImage from "@/components/DummyImage";

export const metadata: Metadata = {
  title: `Services | ${siteData.company.name} — What We Do`,
  description: "Digital transformation, custom software, web & mobile development, AI, cloud, and more.",
};

const capabilityGroups = [
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    items: [
      { label: "Web development", slug: "web-development" },
      { label: "App Development", slug: "mobile-app" },
      { label: "Custom Software Development", slug: "custom-software" },
      { label: "UX/UI Design", slug: "ui-ux" },
    ],
  },
  {
    id: "business-applications",
    title: "Business Applications",
    items: [
      { label: "Dynamics 365 ERP", slug: "dynamics-365-erp" },
      { label: "Dynamics 365 CRM", slug: "d365-crm" },
      { label: "Power Apps", slug: "power-apps" },
      { label: "Salesforce", slug: "salesforce" },
    ],
  },
  {
    id: "emerging-technologies",
    title: "Emerging Technologies",
    items: [
      { label: "Metaverse", slug: "metaverse" },
      { label: "Augmented reality", slug: "ar" },
      { label: "Blockchain & Cryptography", slug: "blockchain" },
      { label: "Gen AI", slug: "generative-ai" },
      { label: "Data Analytics", slug: "data-analytics" },
    ],
  },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="section-padding pt-28">
        <div className="container-narrow">
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
            What we do
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-white/80">
            From digital transformation to staff augmentation, quality assurance,
            DevOps, cybersecurity, SaaS, e-commerce, gaming, and cloud — we deliver
            end-to-end technology solutions.
          </p>
          <Link href="/contact" className="btn-primary mt-8">
            Let&apos;s Talk Business
          </Link>
        </div>
      </section>

      <section className="section-padding border-t border-white/10 bg-[var(--viiva-black-soft)]">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold md:text-4xl">Capabilities</h2>
          <div className="mt-12 space-y-16">
            {capabilityGroups.map((group) => (
              <div key={group.id} id={group.id}>
                <h3 className="text-xl font-semibold text-[var(--viiva-red)]">
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-4 lg:gap-5">
                  {group.items.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/services/${item.slug}`}
                        className="rounded-lg border border-white/20 px-4 py-2 text-white/90 transition hover:border-[var(--viiva-red)] hover:text-[var(--viiva-red)]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold md:text-4xl">
            {servicesData.sectionHeadline}
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {servicesData.items.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                id={service.id}
                className="group hover-lift flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[var(--viiva-gray)] transition hover:border-[var(--viiva-red)]/30"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--viiva-gray-light)]">
                  <DummyImage
                    seed={service.id}
                    alt={service.title}
                    className="h-full w-full"
                    aspect="4/3"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-semibold text-white group-hover:text-[var(--viiva-red)]">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-white/70 line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
