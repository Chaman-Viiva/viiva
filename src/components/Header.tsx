"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import siteData from "@/data/site.json";

type NavLink = {
  label: string;
  href: string;
  dropdown?: boolean;
  children?: { label: string; href: string }[];
};

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const links = siteData.nav.links as NavLink[];
  const ctaButtons = siteData.nav.cta as { label: string; href: string; primary?: boolean }[];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[var(--viiva-black)]/95 backdrop-blur-md">
      <div className="header-container">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.jpeg"
            alt={siteData.nav.logoAlt}
            width={120}
            height={40}
            className="h-9 w-auto object-contain md:h-10"
            priority
          />
          <span className="hidden text-sm font-medium text-white/80 sm:inline">
            Smart IT Solutions
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:gap-2 xl:gap-3 lg:flex">
          {links.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {link.dropdown && link.children && link.children.length > 0 ? (
                <>
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-white/90 transition hover:text-[var(--viiva-red)]"
                  >
                    {link.label}
                    <span className="text-xs">▼</span>
                  </Link>
                  {openDropdown === link.label && (
                    <div className="absolute left-0 top-full min-w-[220px] rounded-b-lg border border-white/10 bg-[var(--viiva-black-soft)] py-2 shadow-xl">
                      {link.children.map((child) => (
                        <Link
                          key={child.href + child.label}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-white/80 transition hover:bg-white/5 hover:text-[var(--viiva-red)]"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={link.href}
                  className="block px-3 py-2 text-sm font-medium text-white/90 transition hover:text-[var(--viiva-red)]"
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
          <div className="ml-2 flex items-center gap-2 xl:ml-4">
            {ctaButtons.map((cta) => (
              <Link
                key={cta.href}
                href={cta.href}
                className={
                  cta.primary
                    ? "btn-primary text-sm"
                    : "rounded-lg border border-white/30 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
                }
              >
                {cta.label}
              </Link>
            ))}
          </div>
        </nav>

        <button
          type="button"
          className="flex flex-col gap-1.5 p-2 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-[var(--viiva-black)] px-4 py-4 lg:hidden">
          <div className="flex max-h-[70vh] flex-col gap-1 overflow-y-auto">
            {links.map((link) =>
              link.dropdown && link.children && link.children.length > 0 ? (
                <div key={link.label} className="border-b border-white/5 pb-2">
                  <span className="block px-2 py-2 text-xs font-semibold uppercase tracking-wider text-white/60">
                    {link.label}
                  </span>
                  {link.children.map((child) => (
                    <Link
                      key={child.href + child.label}
                      href={child.href}
                      className="block py-2 pl-4 text-white/90 hover:text-[var(--viiva-red)]"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-3 text-white/90 hover:text-[var(--viiva-red)]"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="mt-4 flex flex-col gap-2 border-t border-white/10 pt-4">
              {ctaButtons.map((cta) => (
                <Link
                  key={cta.href}
                  href={cta.href}
                  className={cta.primary ? "btn-primary w-full text-center" : "btn-outline w-full text-center"}
                  onClick={() => setMobileOpen(false)}
                >
                  {cta.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
