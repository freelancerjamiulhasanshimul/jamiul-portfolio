import Image from "next/image";

export default function WebrayzLogo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <span
      role="img"
      aria-label="Webrayz IT Solutions logo"
      className={`relative inline-block shrink-0 ${className}`}
    >
      <Image
        src="/webrayz-logo.webp"
        alt=""
        fill
        sizes="(max-width: 768px) 44px, 44px"
        className="object-contain object-center"
      />
    </span>
  );
}
