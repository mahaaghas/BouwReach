"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { useState } from "react";
import { BrandLogo } from "@/components/brand-logo";

type PackageRevealCardProps = {
  name: string;
  teaser: string;
  price: string;
};

export function PackageRevealCard({ name, teaser, price }: PackageRevealCardProps) {
  const pathname = usePathname();
  const [revealed, setRevealed] = useState(false);
  const isEnglish = pathname.startsWith("/en");
  const detailsHref = isEnglish ? "/en/packages" : "/pakketten";

  return (
    <article className="group relative min-h-[280px] w-full overflow-hidden rounded-[30px] text-left">
      <span className="absolute inset-0 rounded-[30px] border border-[rgba(17,17,17,0.12)] bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(244,236,224,0.9))] shadow-[var(--shadow-strong)] transition duration-500 group-hover:-translate-y-1" />
      <span className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,var(--accent),var(--gold))]" />
      <span
        className={clsx(
          "absolute inset-0 rounded-[30px] bg-[linear-gradient(180deg,rgba(13,13,13,0.99),rgba(24,24,24,0.96))] transition duration-500",
          revealed ? "opacity-100" : "opacity-0"
        )}
      />
      <span
        className={clsx(
          "absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(220,177,109,0.18),transparent_32%)] transition duration-500",
          revealed ? "opacity-100" : "opacity-0"
        )}
      />
      <span className="pointer-events-none absolute right-6 top-6 z-20">
        <BrandLogo variant={revealed ? "mark-white" : "mark-black"} alt="" className={clsx("w-4 md:w-5", revealed ? "opacity-80" : "opacity-70")} />
      </span>
      <button
        type="button"
        onClick={() => setRevealed((current) => !current)}
        className="absolute inset-0 z-10"
        aria-expanded={revealed}
        aria-label={isEnglish ? `Toggle ${name} package details` : `Toon details van pakket ${name}`}
      />
      <span className="relative flex h-full min-h-[280px] flex-col justify-between p-7">
        <span
          className={clsx(
            "transition duration-500",
            revealed ? "translate-y-[-10px] opacity-0" : "translate-y-0 opacity-100"
          )}
        >
          <span className="inline-flex rounded-full border border-[var(--border)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
            {isEnglish ? "Package" : "Pakket"}
          </span>
          <span className="mt-10 block font-[var(--font-display)] text-4xl font-semibold">{name}</span>
          <span className="mt-4 block max-w-[18rem] text-base leading-7 text-[var(--muted)]">{teaser}</span>
        </span>
        <span
          className={clsx(
            "absolute inset-x-7 top-7 transition duration-500",
            revealed ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
          )}
        >
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            {isEnglish ? "Starting at" : "Vanaf"}
          </span>
          <span className="mt-10 block font-[var(--font-display)] text-4xl font-semibold text-white">{price}</span>
          <span className="mt-4 block text-base text-white/70">
            {isEnglish ? "Intro offer until June 15" : "Introductietarief t/m 15 juni"}
          </span>
          <Link
            href={detailsHref}
            className="relative z-20 mt-10 inline-flex items-center rounded-full border border-white/12 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[var(--foreground)]"
          >
            {isEnglish ? "See what is included" : "Bekijk wat je krijgt"}
          </Link>
        </span>
        <span className="mt-auto block text-sm font-semibold uppercase tracking-[0.12em] text-[var(--foreground)]/70">
          {isEnglish ? "Open package" : "Open pakket"}
        </span>
      </span>
    </article>
  );
}
