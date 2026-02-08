"use client";

import Link from "next/link";
import { useState } from "react";
import heroData from "@/data/hero.json";

type FeaturedItem = { title: string; logoUrl?: string };
const featuredItems: FeaturedItem[] =
  "featuredItems" in heroData &&
  Array.isArray(
    (heroData as { featuredItems?: FeaturedItem[] }).featuredItems
  )
    ? (heroData as { featuredItems: FeaturedItem[] }).featuredItems
    : [
        { title: "Forbes", logoUrl: "/featured/forbes.svg" },
        { title: "Mashable", logoUrl: "/featured/mashable.svg" },
        { title: "Business Insider", logoUrl: "/featured/business-insider.svg" },
        { title: "Khaleej Times", logoUrl: "/featured/khaleej-times.svg" },
        { title: "New York Weekly", logoUrl: "/featured/new-york-weekly.svg" },
        { title: "Yahoo Finance", logoUrl: "/featured/yahoo-finance.svg" },
      ];

const heroWithVideo = heroData as { videoUrl?: string };

function FeaturedLogo({ item }: { item: FeaturedItem }) {
  const [imgFailed, setImgFailed] = useState(false);
  const showImg = item.logoUrl && !imgFailed;
  return (
    <div className="flex items-center justify-start gap-2 min-w-0">
      {showImg && (
        <img
          src={item.logoUrl}
          alt=""
          width={120}
          height={32}
          referrerPolicy="no-referrer"
          onError={() => setImgFailed(true)}
          className="max-h-8 w-auto object-contain opacity-90 shrink-0"
        />
      )}
      <span className="text-sm font-semibold text-white/90 tracking-wide truncate">
        {item.title}
      </span>
    </div>
  );
}

export default function Hero() {
  const videoUrl = heroWithVideo.videoUrl;

  return (
    <section className="relative min-h-screen overflow-hidden pt-24 md:pt-28 flex flex-col">
      {/* Background video or gradient fallback */}
      <div className="absolute inset-0">
        {videoUrl ? (
          <>
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-[var(--viiva-black)]/60" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--viiva-black-soft)] via-[var(--viiva-black)] to-[var(--viiva-black)]" />
        )}
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,var(--viiva-red)_0%,transparent_50%)] opacity-20" />

      <div className="relative z-10 flex flex-1 flex-col justify-center py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-5 lg:px-6">
          {/* Hero content - left-aligned like Devsinc */}
          <div className="max-w-3xl text-left">
            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              {heroData.headline}
            </h1>
            <p className="mt-6 text-lg text-white/80 md:text-xl">
              {heroData.subheadline}
            </p>
            <div className="mt-10">
              <Link href={heroData.cta.href} className="btn-primary text-base">
                {heroData.cta.label}
              </Link>
            </div>
          </div>

          {/* Featured In: full width, proper logos (like Devsinc) */}
          <div className="mt-12 md:mt-16 w-full">
            <p className="text-left text-sm font-medium uppercase tracking-wider text-white/70 mb-4">
              {heroData.featuredIn}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-8 gap-y-4 w-full max-w-4xl">
              {featuredItems.map((item, i) => (
                <div key={i} className="min-w-0">
                  <FeaturedLogo item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}