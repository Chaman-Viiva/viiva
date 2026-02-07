import Image from "next/image";
import awardsData from "@/data/awards.json";
import partnershipsData from "@/data/partnerships.json";

export default function AwardsPartnerships() {
  return (
    <section className="section-padding border-y border-white/10 bg-[var(--viiva-black-soft)]">
      <div className="container-narrow">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-white/60">
          {awardsData.sectionTitle}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {awardsData.items.map((award, i) => (
            <div
              key={award.name}
              className="relative h-16 w-24 overflow-hidden rounded-lg bg-white/5 md:h-20 md:w-28"
              title={award.name}
            >
              <Image
                src={`https://picsum.photos/seed/award-${i + 1}/112/80`}
                alt={award.name}
                fill
                className="object-contain p-2"
                sizes="112px"
              />
            </div>
          ))}
        </div>

        <p className="mt-16 text-center text-sm font-semibold uppercase tracking-wider text-white/60">
          {partnershipsData.sectionTitle}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {partnershipsData.items.map((partner, i) => (
            <div
              key={partner.name}
              className="relative h-12 w-28 overflow-hidden rounded bg-white/5 md:h-14 md:w-32"
              title={partner.name}
            >
              <Image
                src={`https://picsum.photos/seed/partner-${partner.name.toLowerCase().replace(/\s+/g, "-")}/128/56`}
                alt={partner.name}
                fill
                className="object-contain p-2"
                sizes="128px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
