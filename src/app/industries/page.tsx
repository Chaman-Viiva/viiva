import type { Metadata } from "next";
import Link from "next/link";
import siteData from "@/data/site.json";
import industriesData from "@/data/industries.json";

export const metadata: Metadata = {
  title: `Industries | ${siteData.company.name} — Who We Help`,
  description: "Viiva serves Travel & Hospitality, Fintech, Healthcare, E-commerce, Startups, and more.",
};

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
          <h2 className="text-3xl font-bold md:text-4xl">
            {industriesData.sectionTitle}
          </h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {industriesData.items.map((item) => (
              <Link
                key={item.id}
                href={`/industries/${item.id}`}
                id={item.id}
                className="group flex items-center justify-between rounded-xl border border-white/10 bg-[var(--viiva-gray)] px-6 py-4 transition hover:border-[var(--viiva-red)]/50 hover:bg-[var(--viiva-gray-light)]"
              >
                <span className="text-2xl" aria-hidden>
                  {iconMap[item.icon] || "📌"}
                </span>
                <span className="font-medium text-white group-hover:text-[var(--viiva-red)]">
                  {item.title}
                </span>
                <span className="text-[var(--viiva-red)] opacity-0 transition group-hover:opacity-100">
                  →
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/contact" className="btn-primary">
              {industriesData.cta.label}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
