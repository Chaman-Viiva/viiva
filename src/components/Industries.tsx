"use client";

import industriesData from "@/data/industries.json";
import IndustriesGrid from "./IndustriesGrid";

export default function Industries() {
  return (
    <section id="industries" className="section-padding">
      <div className="container-narrow">
        <IndustriesGrid
          items={industriesData.items}
          title={industriesData.sectionTitle}
          cta={industriesData.cta}
        />
      </div>
    </section>
  );
}
