import Image from "next/image";
import { clsx } from "clsx";

type BrandLogoProps = {
  variant?: "mark-blue" | "mark-black" | "mark-white" | "full-black" | "full-white";
  className?: string;
  alt?: string;
};

const logoMap = {
  "mark-blue": "/media/logos/01-BR-logo-blue.png",
  "mark-black": "/media/logos/02-BR-logo-black.png",
  "mark-white": "/media/logos/03-BR-logo-white.png",
  "full-black": "/media/logos/04-bouwreach-logo-black-blue.png",
  "full-white": "/media/logos/05-bouwreach-white-blue.png",
} as const;

const logoSizes = {
  "mark-blue": { width: 54, height: 54 },
  "mark-black": { width: 54, height: 54 },
  "mark-white": { width: 54, height: 54 },
  "full-black": { width: 198, height: 40 },
  "full-white": { width: 198, height: 40 },
} as const;

export function BrandLogo({ variant = "full-black", className, alt = "BouwReach" }: BrandLogoProps) {
  const size = logoSizes[variant];

  return (
    <Image
      src={logoMap[variant]}
      alt={alt}
      width={size.width}
      height={size.height}
      unoptimized
      className={clsx("h-auto", className)}
    />
  );
}
