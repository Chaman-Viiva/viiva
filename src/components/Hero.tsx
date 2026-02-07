import Link from "next/link";
import Image from "next/image";
import heroData from "@/data/hero.json";

const MARQUEE_LOGO_COUNT = 8;

const featuredItems = "featuredItems" in heroData && Array.isArray((heroData as { featuredItems?: { title: string; description: string }[] }).featuredItems)
  ? (heroData as { featuredItems: { title: string; description: string }[] }).featuredItems
  : Array.from({ length: 6 }, (_, i) => ({
      title: ["TechCrunch", "Forbes", "Gartner", "Clutch", "Inc. 5000", "Deloitte"][i] || "Partner",
      description: "Trusted and recognized in our industry",
    }));

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-24 md:pt-28">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--viiva-black-soft)] via-[var(--viiva-black)] to-[var(--viiva-black)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,var(--viiva-red)_0%,transparent_50%)] opacity-30" />

      <div className="container-narrow relative section-padding">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            {heroData.headline}
          </h1>
          <p className="mt-6 text-lg text-white/80 md:text-xl">
            {heroData.subheadline}
          </p>
          <div className="mt-10">
            <Link href={heroData.cta.href} className="btn-primary text-base">
              {heroData.cta.label}
            </Link>
          </div>
        </div>

        {/* Featured In: hover to see detail (slide overlay) */}
        <div className="mt-20">
          <p className="text-center text-sm font-medium uppercase tracking-wider text-white/50">
            {heroData.featuredIn}
          </p>
          <p className="mt-2 text-center text-sm text-white/40">
            Trusted by innovators and featured in leading publications — hover for details
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-10 sm:gap-x-16 md:gap-x-20 lg:gap-x-24">
            {featuredItems.map((item, i) => (
              <div
                key={i}
                className="group relative h-14 w-32 shrink-0 cursor-default overflow-hidden rounded-xl md:h-16 md:w-36"
              >
                <Image
                  src={`https://picsum.photos/seed/featured-${i + 1}/288/128`}
                  alt={item.title}
                  fill
                  className="object-cover opacity-90 transition duration-300 group-hover:scale-105 group-hover:opacity-100"
                  sizes="144px"
                />
                <div className="hover-slide-overlay hover-slide-from-left">
                  <div className="hover-slide-overlay-inner">
                    <div className="w-full">
                      <p className="text-sm font-semibold text-white">{item.title}</p>
                      <p className="mt-1 text-xs text-white/80">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee */}
        <div className="mt-24 overflow-hidden">
          <div className="flex animate-marquee gap-20 py-6">
            {[...Array(2)].map((_, set) =>
              Array.from({ length: MARQUEE_LOGO_COUNT }, (_, i) => (
                <div
                  key={`${set}-${i}`}
                  className="relative h-14 w-36 shrink-0 md:h-16 md:w-40"
                >
                  <Image
                    src={`https://picsum.photos/seed/client-logo-${i + 1}/200/64`}
                    alt=""
                    fill
                    className="object-contain opacity-80"
                    sizes="180px"
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
