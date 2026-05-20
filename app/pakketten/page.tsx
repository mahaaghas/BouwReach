import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { createMetadata } from "@/lib/seo";
import { clsx } from "clsx";

export const metadata = createMetadata({
  title: "Pakketten",
  description:
    "Bekijk de vaste BouwReach pakketten voor bouw, prefab, kozijnen, gevel en renovatiebedrijven die meer projectaanvragen willen.",
  pathname: "/pakketten",
});

const packages = [
  {
    name: "Starter Visibility",
    label: "Professionele online aanwezigheid",
    description:
      "Perfect voor bedrijven die een professionele online aanwezigheid en consistente zichtbaarheid willen.",
    includes: [
      "Website polishing & optimalisatie",
      "Basis SEO-optimalisatie",
      "Maandelijkse SEO health check",
      "1 SEO blogartikel per maand",
      "Google Business Profile optimalisatie",
      "1 branded social media post per week",
      "Meta/Facebook advertentiebeheer",
      "Maandelijks prestatierapport",
      "WhatsApp & leadformulier optimalisatie",
    ],
    bestFor: "Kleine aannemers, kozijnenbedrijven en lokale renovatiebedrijven.",
  },
  {
    name: "Growth Package",
    label: "Leadgeneratie en betere vindbaarheid",
    badge: "Meest gekozen",
    description:
      "Voor bedrijven die actief leads willen genereren en hun Google-posities willen verbeteren.",
    includes: [
      "Alles uit Starter",
      "Geavanceerde SEO-optimalisatie",
      "Keyword & concurrentieanalyse",
      "2 SEO blogartikelen per maand",
      "Google Ads campagne setup & optimalisatie",
      "Meta Ads campagne optimalisatie",
      "Retargeting setup",
      "Landingspagina optimalisatie",
      "Conversietracking setup",
      "2 branded posts per week",
      "Maandelijkse strategieverbeteringen",
      "Lead funnel verbeteringen",
    ],
    bestFor: "Bedrijven die meer aanvragen en een sterkere online positionering willen.",
  },
  {
    name: "Authority Package",
    label: "Volledig marketingsysteem",
    description:
      "Een volledig marketingsysteem voor serieuze bouw- en prefabbedrijven.",
    includes: [
      "Alles uit Growth",
      "Volledige website conversie-optimalisatie",
      "Premium SEO-strategie",
      "Technische SEO-verbeteringen",
      "4 SEO blogartikelen per maand",
      "Geavanceerde Google Ads scaling",
      "Geavanceerd Meta campagnebeheer",
      "Concurrentiemonitoring",
      "CRM & automation integratie",
      "Lead nurturing workflows",
      "Maandelijkse marketing strategiesessie",
      "3 posts per week",
      "Professionele content direction",
      "Priority support",
    ],
    bestFor: "Bedrijven die agressieve groei en marktautoriteit willen.",
  },
];

const setupNotes = [
  {
    title: "Professionele onboarding",
    body: "Voor optimale prestaties en correcte tracking kunnen bedrijven zonder bestaande marketinginfrastructuur een eenmalige onboarding en setup nodig hebben.",
    investment: "Eenmalige setup investering: €1250",
    includes:
      "Dit kan onder andere bestaan uit Google Ads, Meta Business Manager, Analytics, conversietracking, automatiseringen, nieuwsbrief setup, CRM-koppelingen en campagne-infrastructuur.",
  },
  {
    title: "Branding & visuele identiteit",
    body: "Bedrijven zonder bestaande branding assets kunnen aanvullende branding ontwikkeling nodig hebben voordat campagnes effectief kunnen starten.",
    includes:
      "Dit kan onder andere bestaan uit logo ontwerp, visuele identiteit, templates, website styling en branded materialen.",
  },
];

const addOns = [
  "Website redesign",
  "Landingspagina's",
  "Recruitment campagnes",
  "Voertuig wrap design",
  "Brochure design",
  "Email marketing automation",
  "WhatsApp automation",
  "Google review campagnes",
  "AI chatbot setup",
];

export default function PackagesPage() {
  return (
    <div className="section-shell pb-8 pt-10">
      <section className="accent-grid panel relative overflow-hidden rounded-[40px] px-6 py-12 md:px-10 md:py-16">
        <div className="pointer-events-none absolute right-5 top-5 select-none opacity-[0.07] md:right-10 md:top-10">
          <BrandLogo variant="mark-black" alt="" className="w-20 md:w-24" />
        </div>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Pakketten"
            title="Kies het pakket dat past bij jouw groeifase"
            body="Duidelijke pakketten voor bedrijven die meer serieuze projectaanvragen willen. Geen verrassingen. Geen losse marketingtaken. Gewoon een heldere route naar meer aanvragen."
          />
          <div className="rounded-[28px] bg-[var(--dark)] px-6 py-5 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--gold)]">Introductietarief tot en met 15 juni</p>
            <p className="mt-2 text-sm text-white/74">Beperkt aantal plekken</p>
          </div>
        </div>
      </section>

      <section className="pt-10">
        <div className="grid gap-6 lg:grid-cols-3">
          {packages.map((item) => (
            <article
              key={item.name}
              className={clsx(
                "panel relative overflow-hidden rounded-[32px] p-6 md:p-8",
                item.name === "Growth Package" && "border-[rgba(186,74,26,0.28)] bg-[linear-gradient(180deg,rgba(255,250,244,0.96),rgba(255,244,234,0.92))]"
              )}
            >
              <div className="pointer-events-none absolute right-6 top-6 opacity-70">
                <BrandLogo variant="mark-black" alt="" className="w-4 md:w-5" />
              </div>
              <div className="flex items-center justify-between gap-4">
                <h2 className="font-[var(--font-display)] text-3xl font-semibold">{item.name}</h2>
                {item.badge ? (
                  <span className="rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                    {item.badge}
                  </span>
                ) : null}
              </div>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-[rgba(16,16,16,0.72)]">{item.label}</p>
              <p className="mt-4 text-base leading-7 text-[var(--muted)]">{item.description}</p>
              <div className="mt-6 rounded-[24px] bg-[rgba(18,18,18,0.04)] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">Inbegrepen</p>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-[var(--foreground)]">
                  {item.includes.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="mt-[0.65rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-6 text-sm leading-6 text-[var(--muted)]">
                <span className="font-semibold text-[var(--foreground)]">Best voor: </span>
                {item.bestFor}
              </p>
              <div className="mt-8">
                <Button href="/contact">Plan een gratis analyse</Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="pt-10">
        <div className="panel relative overflow-hidden rounded-[36px] px-6 py-10 md:px-10 md:py-12">
          <div className="pointer-events-none absolute right-5 top-5 select-none opacity-[0.06] md:right-10 md:top-10">
            <BrandLogo variant="mark-black" alt="" className="w-16 md:w-20" />
          </div>
          <SectionHeading
            eyebrow="Add-ons"
            title="Optionele diensten wanneer je campagne meer nodig heeft"
            body="Deze kunnen worden toegevoegd wanneer een bedrijf extra content, automatisering, recruitment support of een sterker merksysteem rond het pakket nodig heeft."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {addOns.map((addOn) => (
              <div key={addOn} className="rounded-[18px] border border-[var(--border)] bg-white/70 px-4 py-3 text-sm font-semibold text-[var(--foreground)]">
                {addOn}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-10">
        <div className="grid gap-6 lg:grid-cols-2">
          {setupNotes.map((note) => (
            <article key={note.title} className="panel relative overflow-hidden rounded-[32px] p-6 md:p-8">
              <div className="pointer-events-none absolute right-6 top-6 opacity-60">
                <BrandLogo variant="mark-black" alt="" className="w-4 md:w-5" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Voor lancering</p>
              <h2 className="mt-4 font-[var(--font-display)] text-3xl font-semibold">{note.title}</h2>
              <p className="mt-4 text-base leading-7 text-[var(--muted)]">{note.body}</p>
              {note.investment ? (
                <p className="mt-5 rounded-[20px] bg-[rgba(18,18,18,0.04)] px-4 py-3 text-sm font-semibold text-[var(--foreground)]">
                  {note.investment}
                </p>
              ) : null}
              <p className="mt-5 text-sm leading-6 text-[var(--muted)]">{note.includes}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pt-10">
        <div className="panel relative overflow-hidden rounded-[36px] px-6 py-10 md:px-10 md:py-12">
          <div className="pointer-events-none absolute right-5 top-5 select-none opacity-[0.06] md:right-10 md:top-10">
            <BrandLogo variant="mark-black" alt="" className="w-16 md:w-20" />
          </div>
          <SectionHeading
            eyebrow="Advies"
            title="Twijfel je welk pakket past?"
            body="Dan starten we niet met een verkooppraatje. We kijken eerst naar je huidige positie, je aanvraagstroom en waar de grootste winst zit."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact">Plan een gratis analyse</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
