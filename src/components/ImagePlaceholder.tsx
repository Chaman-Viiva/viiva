type Props = {
  alt: string;
  className?: string;
  label?: string;
};

export default function ImagePlaceholder({ alt, className = "", label }: Props) {
  const initial = (label || alt).charAt(0).toUpperCase();
  return (
    <div
      className={`flex items-center justify-center bg-[var(--viiva-gray)] text-white/60 ${className}`}
      title={alt}
    >
      <span className="text-2xl font-bold md:text-4xl">{initial}</span>
    </div>
  );
}
