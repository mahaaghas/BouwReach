"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { useState } from "react";
import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const isEnglish = pathname.startsWith("/en");

  const navigation = isEnglish
    ? [
        { label: "Home", href: "/en" },
        { label: "Approach", href: "/en/#approach" },
        { label: "Packages", href: "/en/packages" },
        { label: "Contact", href: "/en/contact" },
      ]
    : [
        { label: "Home", href: "/" },
        { label: "Aanpak", href: "/#aanpak" },
        { label: "Pakketten", href: "/pakketten" },
        { label: "Contact", href: "/contact" },
      ];

  const primaryCtaHref = isEnglish ? "/en/contact" : "/contact";
  const primaryCtaLabel = isEnglish ? "Book a free analysis" : "Plan een gratis analyse";
  const mobileCtaLabel = isEnglish ? "Analysis" : "Analyse";
  const switchHref = isEnglish ? pathname.replace(/^\/en/, "") || "/" : `/en${pathname === "/" ? "" : pathname}`;

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div className="section-shell">
        <div className="panel relative rounded-[28px] px-4 py-3 md:px-6">
          <div className="absolute inset-x-0 top-0 h-1 rounded-t-[28px] bg-[linear-gradient(90deg,var(--foreground),var(--accent),var(--foreground))]" />
          <div className="flex items-center justify-between">
            <Link
              href={isEnglish ? "/en" : "/"}
              aria-label={isEnglish ? "BouwReach home" : "BouwReach home"}
              className="flex min-h-[44px] items-center rounded-[20px] pr-4"
            >
              <BrandLogo variant="full-black" className="w-[182px] md:w-[198px]" />
            </Link>
            <nav className="hidden items-center gap-1 rounded-full border border-[rgba(16,16,16,0.12)] bg-white/92 p-1 shadow-[0_10px_30px_rgba(16,16,16,0.05)] md:flex">
              {navigation.map((item) => {
                const active = item.href === (isEnglish ? "/en" : "/")
                  ? pathname === item.href
                  : pathname.startsWith(item.href.replace("/#", "/"));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={clsx(
                      "rounded-full px-4 py-2 text-sm font-semibold transition",
                      active
                        ? "bg-[var(--dark)] shadow-[0_12px_28px_rgba(17,17,17,0.16)]"
                        : "text-[var(--foreground)] hover:bg-[rgba(200,255,67,0.2)]"
                    )}
                    style={active ? { color: "#ffffff" } : undefined}
                  >
                    <span className="inline-flex items-center justify-center whitespace-nowrap" style={active ? { color: "#ffffff" } : undefined}>
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </nav>
            <div className="hidden items-center gap-3 md:flex">
              <Link
                href={switchHref}
                className="rounded-full border border-[rgba(16,16,16,0.12)] bg-white/92 px-4 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:bg-[rgba(200,255,67,0.18)]"
              >
                {isEnglish ? "NL" : "EN"}
              </Link>
              <Button href={primaryCtaHref}>{primaryCtaLabel}</Button>
            </div>
            <div className="flex items-center gap-2 md:hidden">
              <Link href={primaryCtaHref} className="rounded-full border border-[var(--border)] bg-white/92 px-4 py-2 text-sm font-semibold">
                {mobileCtaLabel}
              </Link>
              <button
                type="button"
                onClick={() => setMenuOpen((current) => !current)}
                aria-expanded={menuOpen}
                aria-label="Open menu"
                className="rounded-full border border-[var(--border)] bg-white/92 px-4 py-2 text-sm font-semibold"
              >
                {isEnglish ? "Menu" : "Menu"}
              </button>
            </div>
          </div>
          <div
            className={clsx(
              "overflow-hidden transition-[max-height,opacity,margin] duration-300 md:hidden",
              menuOpen ? "mt-4 max-h-80 opacity-100" : "max-h-0 opacity-0"
            )}
          >
            <nav className="grid gap-2 rounded-[24px] border border-[var(--border)] bg-white/92 p-2">
              {navigation.map((item) => {
                const active = item.href === (isEnglish ? "/en" : "/")
                  ? pathname === item.href
                  : pathname.startsWith(item.href.replace("/#", "/"));
                return (
                  <Link
                    key={`mobile-${item.href}`}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={clsx(
                      "rounded-[18px] px-4 py-3 text-sm font-semibold transition",
                      active ? "bg-[var(--dark)] shadow-[0_12px_28px_rgba(17,17,17,0.16)]" : "hover:bg-[rgba(200,255,67,0.2)]"
                    )}
                    style={active ? { color: "#ffffff" } : undefined}
                  >
                    <span style={active ? { color: "#ffffff" } : undefined}>{item.label}</span>
                  </Link>
                );
              })}
              <Link
                href={switchHref}
                onClick={() => setMenuOpen(false)}
                className="rounded-[18px] px-4 py-3 text-sm font-semibold transition hover:bg-white"
              >
                {isEnglish ? "Bekijk Nederlandse versie" : "View English version"}
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
