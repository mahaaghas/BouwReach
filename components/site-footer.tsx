"use client";

import { BrandLogo } from "@/components/brand-logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SiteFooter() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");
  const links = isEnglish
    ? [
        { label: "Home", href: "/en" },
        { label: "Approach", href: "/en/#approach" },
        { label: "Packages", href: "/en/packages" },
        { label: "Contact", href: "/en/contact" },
        { label: "Privacy", href: "/en/privacy" },
        { label: "Cookies", href: "/en/cookies" },
      ]
    : [
        { label: "Home", href: "/" },
        { label: "Aanpak", href: "/#aanpak" },
        { label: "Pakketten", href: "/pakketten" },
        { label: "Contact", href: "/contact" },
        { label: "Privacy", href: "/privacy" },
        { label: "Cookies", href: "/cookies" },
      ];

  return (
    <footer className="px-4 pb-8 pt-20">
      <div className="section-shell">
        <div className="relative overflow-hidden rounded-[32px] bg-[var(--dark)] px-6 py-10 text-white md:px-10">
          <div className="pointer-events-none absolute bottom-6 right-6 hidden select-none opacity-[0.08] md:block md:bottom-10 md:right-10">
            <BrandLogo variant="mark-blue" alt="" className="w-[180px]" />
          </div>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <BrandLogo variant="full-white" className="w-[180px]" />
              <p className="mt-3 text-sm leading-6 text-white/72">
                {isEnglish
                  ? "More visibility only matters when it leads to serious project inquiries."
                  : "Meer zichtbaarheid is pas interessant als het leidt tot serieuze projectaanvragen."}
              </p>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-white/72">
              {links.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
