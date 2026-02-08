import type { Metadata } from "next";
import Link from "next/link";
import siteData from "@/data/site.json";
import industriesData from "@/data/industries.json";
import IndustriesGrid from "@/components/IndustriesGrid";

export const metadata: Metadata = {
  title: `Industries | ${siteData.company.name} — Who We Help`,
  description: "Viiva serves Travel & Hospitality, Fintech, Healthcare, E-commerce, Startups, and more.",
};

export default function IndustriesPage() {
  return (
    <main>
      <section className="section-padding pt-28">
        <div className="container-narrow">
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
            Who we help
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-white/80">
            Discover our impact across industries. We help organizations in
            travel, public sector, telecom, retail, energy, startups, e-commerce,
            banking, healthcare, and gaming transform with technology.
          </p>
          <Link href="/contact" className="btn-primary mt-8">
            Let&apos;s Talk Business
          </Link>
        </div>
      </section>

      <section className="section-padding border-t border-white/10 bg-[var(--viiva-black-soft)]">
        <div className="container-narrow">
          <IndustriesGrid
            items={industriesData.items}
            title={industriesData.sectionTitle}
            cta={industriesData.cta}
          />
        </div>
      </section>
    </main>
  );
}
