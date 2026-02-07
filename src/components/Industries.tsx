import Link from "next/link";
import industriesData from "@/data/industries.json";

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

export default function Industries() {
  return (
    <section id="industries" className="section-padding">
      <div className="container-narrow">
        <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
          {industriesData.sectionTitle}
        </h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {industriesData.items.map((item) => (
            <Link
              key={item.id}
              href={item.href}
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
          <Link href={industriesData.cta.href} className="btn-primary">
            {industriesData.cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
