"use client";

import Image from "next/image";

const MARQUEE_LOGO_COUNT = 8;

export default function ClientLogosMarquee() {
  return (
    <section className="overflow-hidden bg-white py-8 md:py-10">
      <div className="space-y-4">
        {/* Row 1: scrolls to the left */}
        <div className="flex animate-marquee gap-10 py-2">
          {[...Array(2)].map((_, set) =>
            Array.from({ length: MARQUEE_LOGO_COUNT }, (_, i) => (
              <div
                key={`row1-${set}-${i}`}
                className="relative h-12 w-32 shrink-0 md:h-14 md:w-40"
              >
                <Image
                  src={`https://picsum.photos/seed/client-logo-${i + 1}/200/64`}
                  alt=""
                  fill
                  className="object-contain opacity-90 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
                  sizes="160px"
                />
              </div>
            ))
          )}
        </div>
        {/* Row 2: scrolls to the right */}
        <div className="flex animate-marquee-reverse gap-10 py-2">
          {[...Array(2)].map((_, set) =>
            Array.from({ length: MARQUEE_LOGO_COUNT }, (_, i) => (
              <div
                key={`row2-${set}-${i}`}
                className="relative h-12 w-32 shrink-0 md:h-14 md:w-40"
              >
                <Image
                  src={`https://picsum.photos/seed/client-logo-${i + 9}/200/64`}
                  alt=""
                  fill
                  className="object-contain opacity-90 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
                  sizes="160px"
                />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
