import type { Metadata } from "next";
import Link from "next/link";
import siteData from "@/data/site.json";

export const metadata: Metadata = {
  title: `Careers | ${siteData.company.name} — Join Viiva`,
  description: "Join Viiva — culture, diversity, benefits, and global opportunities.",
};

export default function CareersPage() {
  return (
    <main>
      <section className="section-padding pt-28">
        <div className="container-narrow text-center">
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
            Human-first is our foundation.
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-white/80">
            Join a culture that celebrates excellence and diversity, globally!
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Join Us
            </Link>
            <Link href="/contact" className="btn-outline">
              Explore Careers
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-white/10 bg-[var(--viiva-black-soft)]">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold md:text-4xl">Why Viiva</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Culture", "description": "A workplace that values innovation and collaboration." },
              { title: "Diversity, Equity & Inclusion", "description": "We believe in inclusive teams and equal opportunity." },
              { title: "Employee Success", "description": "Growth programs and learning opportunities." },
              { title: "Benefits", "description": "Competitive compensation and benefits packages." },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/10 bg-[var(--viiva-gray)] p-6"
              >
                <h3 className="font-semibold text-[var(--viiva-red)]">{item.title}</h3>
                <p className="mt-2 text-sm text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold md:text-4xl">Explore Careers</h2>
          <p className="mt-4 text-white/80">
            Find your next role at Viiva. We are always looking for talented
            developers, designers, and technology professionals.
          </p>
          <div className="mt-12 rounded-xl border border-white/10 bg-[var(--viiva-gray)] p-8 text-center">
            <p className="text-white/80">
              Open positions are updated regularly. To express your interest or
              submit your profile, please use the contact form and select
              &ldquo;I am looking for a job at Viiva — Yes&rdquo;.
            </p>
            <Link href="/contact" className="btn-primary mt-6">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
