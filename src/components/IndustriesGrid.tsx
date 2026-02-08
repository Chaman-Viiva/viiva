"use client";

import Link from "next/link";
import { useRef, useEffect, useState } from "react";

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

export type IndustryItem = {
  id: string;
  title: string;
  icon: string;
  href: string;
};

function getEntranceDirection(index: number, cols: number): "from-up" | "from-left" | "from-right" {
  const row = Math.floor(index / cols);
  const col = index % cols;
  if (row === 0) return "from-up";
  if (col === 0) return "from-left";
  if (col === cols - 1) return "from-right";
  return index % 2 === 0 ? "from-left" : "from-right";
}

type IndustriesGridProps = {
  items: IndustryItem[];
  title: string;
  cta?: { href: string; label: string };
  ctaVariant?: "primary" | "outline";
  sectionClassName?: string;
};

export default function IndustriesGrid({
  items,
  title,
  cta,
  ctaVariant = "primary",
  sectionClassName = "",
}: IndustriesGridProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const cols = 3;
  return (
    <div
      ref={sectionRef}
      className={`transition-opacity duration-500 ${isVisible ? "industries-visible" : ""} ${sectionClassName}`}
    >
      <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">{title}</h2>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
        {items.map((item, index) => {
          const direction = getEntranceDirection(index, cols);
          return (
            <Link
              key={item.id}
              href={item.href}
              className={`industries-card ${direction} group relative flex items-center gap-4 rounded-2xl border border-white/10 bg-[var(--viiva-gray)] px-6 py-5 transition-all duration-300 hover:border-[var(--viiva-red)]/60 hover:bg-[var(--viiva-gray-light)] hover:shadow-[0_8px_30px_rgba(196,30,58,0.12)] hover:-translate-y-1`}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <span
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 text-2xl transition-colors group-hover:bg-[var(--viiva-red)]/20"
                aria-hidden
              >
                {iconMap[item.icon] || "📌"}
              </span>
              <span className="flex-1 font-semibold text-white transition-colors group-hover:text-[var(--viiva-red)]">
                {item.title}
              </span>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 text-[var(--viiva-red)] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:bg-[var(--viiva-red)]/20">
                →
              </span>
            </Link>
          );
        })}
      </div>

      {cta && (
        <div className="mt-14 text-center">
          <Link
            href={cta.href}
            className={
              ctaVariant === "outline"
                ? "btn-outline inline-block transition-transform hover:scale-[1.02]"
                : "btn-primary inline-block transition-transform hover:scale-[1.02]"
            }
          >
            {cta.label}
          </Link>
        </div>
      )}
    </div>
  );
}
