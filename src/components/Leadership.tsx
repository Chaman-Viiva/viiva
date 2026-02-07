import Link from "next/link";
import leadershipData from "@/data/leadership.json";
import PersonImage from "./PersonImage";

export default function Leadership() {
  return (
    <section id="leadership" className="section-padding bg-[var(--viiva-black-soft)]">
      <div className="container-narrow">
        <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
          {leadershipData.sectionHeadline}
        </h2>
        <p className="mt-4 max-w-2xl text-white/80">
          {leadershipData.sectionSubheadline}
        </p>
        <Link href={leadershipData.cta.href} className="btn-outline mt-6">
          {leadershipData.cta.label}
        </Link>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
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
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-xs text-[var(--viiva-red)] hover:underline"
                  >
                    Linkedin
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
