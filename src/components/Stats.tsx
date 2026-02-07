import Link from "next/link";
import statsData from "@/data/stats.json";

export default function Stats() {
  return (
    <section id="about" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,var(--viiva-red)_0%,transparent_50%)] opacity-20" />
      <div className="container-narrow relative">
        <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
          {statsData.sectionHeadline}
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-white/80">
          {statsData.sectionSubheadline}
        </p>
        <Link href={statsData.cta.href} className="btn-outline mt-6">
          {statsData.cta.label}
        </Link>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {statsData.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/10 bg-[var(--viiva-gray)]/50 p-6 text-center"
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
  );
}
