"use client";

import { useState } from "react";
import techStackData from "@/data/tech-stack.json";

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? techStackData.technologies
      : techStackData.technologies.filter((t) => t.category === activeCategory);

  return (
    <section className="section-padding bg-[var(--viiva-black-soft)]">
      <div className="container-narrow">
        <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
          {techStackData.sectionHeadline}
        </h2>
        <p className="mt-4 max-w-3xl text-white/80">
          {techStackData.sectionDescription}
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {techStackData.categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                activeCategory === cat.id
                  ? "bg-[var(--viiva-red)] text-white"
                  : "bg-[var(--viiva-gray)] text-white/80 hover:bg-[var(--viiva-gray-light)]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          {filtered.map((tech) => (
            <div
              key={tech.name}
              className="flex h-14 min-w-[120px] items-center justify-center rounded-xl border border-white/10 bg-[var(--viiva-gray)] px-4 font-medium text-white/90"
            >
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
