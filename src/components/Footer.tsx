"use client";

import Link from "next/link";
import { useState } from "react";
import siteData from "@/data/site.json";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (email) setSubscribed(true);
  }

  const footer = siteData.footer as {
    description: string;
    sections: { title: string; links: { label: string; href: string }[] }[];
    offices?: { region: string; address: string }[];
    contactEmail?: string;
    newsletterTitle?: string;
    newsletterSubtitle?: string;
    copyright: string;
  };

  return (
    <footer className="border-t border-white/10 bg-[var(--viiva-black-soft)]">
      <div className="container-narrow section-padding">
        {/* Main footer grid */}
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold text-[var(--viiva-red)]">
                {siteData.company.name}
              </span>
            </Link>
            <p className="mt-4 text-sm text-white/70">{footer.description}</p>
            {footer.offices && footer.offices.length > 0 && (
              <div className="mt-8 space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80">
                  Global Presence
                </h3>
                {footer.offices.map((office) => (
                  <div key={office.region} className="text-sm text-white/60">
                    <span className="font-medium text-white/80">{office.region}</span>
                    <p>{office.address}</p>
                  </div>
                ))}
              </div>
            )}
            {footer.contactEmail && (
              <a
                href={`mailto:${footer.contactEmail}`}
                className="mt-4 inline-block text-sm text-[var(--viiva-red)] hover:underline"
              >
                {footer.contactEmail}
              </a>
            )}
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-4">
            {footer.sections.map((section) => (
              <div key={section.title}>
                <h3 className="font-semibold text-white">{section.title}</h3>
                <ul className="mt-4 space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/70 transition hover:text-[var(--viiva-red)]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        {(footer.newsletterTitle || footer.newsletterSubtitle) && (
          <div className="mt-12 border-t border-white/10 pt-12">
            <h3 className="font-semibold text-white">{footer.newsletterTitle || "Subscribe"}</h3>
            <p className="mt-1 text-sm text-white/60">{footer.newsletterSubtitle}</p>
            {subscribed ? (
              <p className="mt-4 text-sm text-green-400">Thank you for subscribing!</p>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-4 flex max-w-md gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 rounded-lg border border-white/20 bg-[var(--viiva-gray)] px-4 py-2 text-white placeholder-white/40 focus:border-[var(--viiva-red)] focus:outline-none"
                />
                <button type="submit" className="btn-primary py-2">
                  Subscribe
                </button>
              </form>
            )}
          </div>
        )}

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/50">
          {footer.copyright}
        </div>
      </div>
    </footer>
  );
}
