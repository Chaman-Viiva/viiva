import Image from "next/image";

type Props = {
  /** 1–99 for consistent portrait from randomuser.me */
  id: number;
  alt: string;
  className?: string;
  /** "men" | "women" for variety */
  gender?: "men" | "women";
};

export default function PersonImage({
  id,
  alt,
  className = "",
  gender = "men",
}: Props) {
  const num = Math.max(1, Math.min(99, id));
  const src = `https://randomuser.me/api/portraits/${gender}/${num}.jpg`;

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={`object-cover ${className}`}
      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
    />
  );
}
