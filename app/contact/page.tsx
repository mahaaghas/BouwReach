import { BrandLogo } from "@/components/brand-logo";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Plan een gratis analyse met BouwReach en laat beoordelen waar jouw bouwbedrijf meer serieuze aanvragen laat liggen.",
  pathname: "/contact",
});

export default function ContactPage() {
  return (
    <div className="section-shell pb-8 pt-10">
      <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="accent-grid panel relative overflow-hidden rounded-[40px] px-6 py-10 md:px-8 md:py-12">
          <div className="pointer-events-none absolute right-6 top-6 opacity-[0.05]">
            <BrandLogo variant="mark-black" alt="" className="w-16 md:w-20" />
          </div>
          <SectionHeading
            eyebrow="Contact"
            title="Plan een gratis analyse"
            body="Vertel kort waar je nu staat en waar je meer aanvragen wilt krijgen."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="rounded-[24px] border border-[rgba(18,18,18,0.1)] bg-white/74 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Stap 1</p>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">We bekijken waar je nu bereik laat liggen.</p>
            </div>
            <div className="rounded-[24px] border border-[rgba(18,18,18,0.1)] bg-white/74 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Stap 2</p>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">We laten zien wat eerst aangescherpt moet worden.</p>
            </div>
            <div className="rounded-[24px] border border-[rgba(18,18,18,0.1)] bg-white/74 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Stap 3</p>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">Daarna bepalen we welk pakket logisch is.</p>
            </div>
          </div>
          <div className="mt-10 space-y-5 rounded-[28px] bg-[var(--dark)] p-6 text-white">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--gold)]">Voor wie</p>
              <p className="mt-2 text-sm leading-6 text-white/74">
                Bouw, prefab, kozijnen, gevel en renovatiebedrijven die meer serieuze projectaanvragen willen.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--gold)]">Wat je krijgt</p>
              <p className="mt-2 text-sm leading-6 text-white/74">
                Een directe blik op je huidige aanpak, je grootste gemiste kansen en welk pakket het beste past.
              </p>
            </div>
          </div>
        </div>
        <ContactForm />
      </section>
    </div>
  );
}
