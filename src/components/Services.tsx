"use client";

import { useState } from "react";
import Link from "next/link";
import servicesData from "@/data/services.json";
import DummyImage from "./DummyImage";

const INITIAL = servicesData.initialVisible ?? 12;
const items = servicesData.items;

export default function Services() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? items : items.slice(0, INITIAL);

  return (
    <section id="services" className="section-padding bg-[var(--viiva-black-soft)]">
      <div className="container-narrow">
        <p className="text-sm font-semibold uppercase tracking-wider text-[var(--viiva-red)]">
          {servicesData.sectionTitle}
        </p>
        <h2 className="mt-2 text-3xl font-bold md:text-4xl lg:text-5xl">
          {servicesData.sectionHeadline}
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="group hover-lift flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[var(--viiva-gray)] transition hover:border-[var(--viiva-red)]/30"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--viiva-gray-light)]">
                <DummyImage
                  seed={service.id}
                  alt={service.title}
                  className="h-full w-full"
                  aspect="4/3"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-semibold text-white group-hover:text-[var(--viiva-red)]">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-white/70 line-clamp-2">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {items.length > INITIAL && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="rounded-lg border border-[var(--viiva-red)] px-6 py-3 font-semibold text-[var(--viiva-red)] transition hover:bg-[var(--viiva-red)] hover:text-white"
            >
              {showAll ? "View Less" : "View More Services"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
