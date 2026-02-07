import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import siteData from "@/data/site.json";
import leadershipData from "@/data/leadership.json";
import awardsData from "@/data/awards.json";
import PersonImage from "@/components/PersonImage";

export const metadata: Metadata = {
  title: `About | ${siteData.company.name} — Who We Are`,
  description: "Learn about Viiva Smart IT Solutions — leadership, geographies, awards, and our values.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="section-padding pt-28">
        <div className="container-narrow">
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
            Who We Are
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-white/80">
            {siteData.company.description} We bring an unwavering commitment to
            excellence, backed by a global presence across the UK, Jordan, Dubai,
            and Pakistan.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">
              Get in Touch
            </Link>
            <Link href="/careers" className="btn-outline">
              Join Us
            </Link>
          </div>
        </div>
      </section>

      <section id="leadership" className="section-padding border-t border-white/10 bg-[var(--viiva-black-soft)]">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold md:text-4xl">
            {leadershipData.sectionHeadline}
          </h2>
          <p className="mt-4 max-w-2xl text-white/80">
            {leadershipData.sectionSubheadline}
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {leadershipData.members.map((member) => (
              <div
                key={member.id}
                className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[var(--viiva-gray)] transition hover:border-[var(--viiva-red)]/30"
              >
                <div className="relative aspect-square w-full overflow-hidden">
                  <PersonImage
                    id={parseInt(member.id, 10) || 1}
                    alt={member.name}
                    gender={parseInt(member.id, 10) % 2 === 0 ? "women" : "men"}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-white group-hover:text-[var(--viiva-red)]">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm text-white/70">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="geographies" className="section-padding">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold md:text-4xl">Geographies</h2>
          <p className="mt-4 max-w-2xl text-white/80">
            We operate across multiple regions to serve our clients globally.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {siteData.company.locations.map((loc) => (
              <div
                key={loc.code}
                className="rounded-xl border border-white/10 bg-[var(--viiva-gray)] p-6"
              >
                <span className="text-2xl font-bold text-[var(--viiva-red)]">
                  {loc.code}
                </span>
                <p className="mt-2 font-medium text-white">{loc.country}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="awards" className="section-padding border-t border-white/10 bg-[var(--viiva-black-soft)]">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold md:text-4xl">Awards & Recognition</h2>
          <p className="mt-4 text-white/80">
            We take pride in our industry recognition and certifications.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4 md:gap-10">
            {awardsData.items.map((award, i) => (
              <div
                key={award.name}
                className="group flex flex-col items-center text-center"
              >
                <div className="relative h-24 w-28 overflow-hidden rounded-xl md:h-28 md:w-32 cursor-pointer">
                  <Image
                    src={`https://picsum.photos/seed/award-about-${i + 1}/128/112`}
                    alt={award.name}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="128px"
                  />
                  <div className="hover-slide-overlay hover-slide-from-bottom">
                    <div className="hover-slide-overlay-inner">
                      <p className="text-xs font-semibold text-white leading-tight">
                        {award.name}
                      </p>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm font-medium text-white/90">
                  {award.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="esg" className="section-padding">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold md:text-4xl">ESG Values</h2>
          <p className="mt-4 max-w-2xl text-white/80">
            Our commitment to Environmental, Social, and Governance principles
            guides how we operate and deliver value.
          </p>
        </div>
      </section>

      <section id="values" className="section-padding border-t border-white/10 bg-[var(--viiva-black-soft)]">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold md:text-4xl">Code of Conduct & Values</h2>
          <p className="mt-4 max-w-2xl text-white/80">
            Integrity, excellence, and client-first delivery are at the core of
            everything we do at Viiva.
          </p>
        </div>
      </section>

      <section id="testimonials" className="section-padding">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold md:text-4xl">Client Testimonials</h2>
          <p className="mt-4 text-white/80">
            Stories of trust and transformation from our clients.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <blockquote
                key={i}
                className="rounded-xl border border-white/10 bg-[var(--viiva-gray)] p-6"
              >
                <p className="text-white/90">
                  &ldquo;Viiva delivered exceptional results and became a true
                  partner in our digital journey.&rdquo;
                </p>
                <footer className="mt-4 text-sm text-white/60">
                  — Client testimonial
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
