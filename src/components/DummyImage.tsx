import Image from "next/image";

type Props = {
  /** Unique seed for consistent image per card (e.g. service id, title) */
  seed: string;
  alt: string;
  className?: string;
  /** Aspect: "4/3" (cards) | "video" (16:9) | "square" - used for image request dimensions */
  aspect?: "4/3" | "video" | "square";
};

const ASPECTS = {
  "4/3": { width: 480, height: 360 },
  video: { width: 480, height: 270 },
  square: { width: 400, height: 400 },
} as const;

export default function DummyImage({
  seed,
  alt,
  className = "",
  aspect = "4/3",
}: Props) {
  const dims = ASPECTS[aspect];
  const slug = seed.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
  const src = `https://picsum.photos/seed/${slug || "viiva"}/${dims.width}/${dims.height}`;

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={`object-cover ${className}`}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );
}
