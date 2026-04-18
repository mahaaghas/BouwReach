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
    name: "Basis",
    price: "€470 per maand",
    previousPrice: "Van €750",
    label: "Voor bedrijven die willen starten",
    content: "1 video",
    ads: "1 campagne",
    pages: "geen",
    leadFlow: "basis optimalisatie",
    retargeting: "nee",
    optimisation: "licht",
    support: "standaard",
    description:
      "Voor bedrijven die hun eerste serieuze stap willen zetten richting voorspelbare aanvraaggeneratie.",
  },
  {
    name: "Groei",
    price: "€750 per maand",
    previousPrice: "Van €1.150",
    label: "Voor consistente aanvragen",
    badge: "Meest gekozen",
    content: "3 video's",
    ads: "1 tot 2 campagnes",
    pages: "1 custom landingspagina per maand",
    leadFlow: "geoptimaliseerd",
    retargeting: "nee",
    optimisation: "maandelijks",
    support: "standaard",
    description:
      "Voor bedrijven die van losse aanvragen naar een consistenter ritme van serieuze projectkansen willen.",
  },
  {
    name: "Scale",
    price: "€1.250 per maand",
    previousPrice: "Van €1.850",
    label: "Voor bedrijven die willen opschalen",
    content: "6 video's",
    ads: "meerdere campagnes",
    pages: "3 custom landingspagina's per maand",
    leadFlow: "volledig ingericht",
    retargeting: "ja",
    optimisation: "wekelijks",
    support: "prioriteit",
    description:
      "Voor bedrijven die sneller willen groeien in meerdere diensten, regio's of markten met een steviger systeem.",
  },
];

const comparisonRows = [
  { key: "content", label: "Aanvraag content per maand" },
  { key: "ads", label: "Advertenties" },
  { key: "pages", label: "Aanvraag pagina's per maand" },
  { key: "leadFlow", label: "Lead flow" },
  { key: "retargeting", label: "Retargeting" },
  { key: "optimisation", label: "Optimalisatie" },
  { key: "support", label: "Support" },
] as const;

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
                item.name === "Groei" && "border-[rgba(186,74,26,0.28)] bg-[linear-gradient(180deg,rgba(255,250,244,0.96),rgba(255,244,234,0.92))]"
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
              <p className="mt-4 text-lg font-semibold">{item.price}</p>
              <p className="mt-1 text-sm text-[var(--muted)]">{item.previousPrice}</p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-[rgba(16,16,16,0.72)]">{item.label}</p>
              <p className="mt-4 text-base leading-7 text-[var(--muted)]">{item.description}</p>
              <div className="mt-6 rounded-[24px] bg-[rgba(18,18,18,0.04)] p-4 text-sm leading-6 text-[var(--foreground)]">
                <p>Content: {item.content}</p>
                <p>Advertenties: {item.ads}</p>
                <p>Lead flow: {item.leadFlow}</p>
              </div>
              <div className="mt-8">
                <Button href="/contact">Plan een gratis analyse</Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="pt-10">
        <div className="overflow-hidden rounded-[36px] border border-[var(--border)] bg-white shadow-[0_28px_70px_rgba(17,17,17,0.08)]">
          <div className="grid gap-4 border-b border-[var(--border)] bg-[rgba(18,18,18,0.03)] p-5 md:hidden">
            {packages.map((item) => (
              <article
                key={`${item.name}-mobile`}
                className={clsx(
                  "relative overflow-hidden rounded-[26px] border border-[var(--border)] bg-white p-5",
                  item.name === "Groei" && "border-[rgba(195,79,28,0.24)] bg-[rgba(195,79,28,0.05)]"
                )}
              >
                <div className="pointer-events-none absolute right-5 top-5 opacity-70">
                  <BrandLogo variant="mark-black" alt="" className="w-4" />
                </div>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-[var(--font-display)] text-2xl font-semibold">{item.name}</p>
                    <p className="mt-2 text-base font-semibold">{item.price}</p>
                    <p className="text-sm text-[var(--muted)]">{item.previousPrice}</p>
                  </div>
                  {item.badge ? (
                    <span className="rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                      {item.badge}
                    </span>
                  ) : null}
                </div>
                <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{item.label}</p>
                <div className="mt-5 space-y-2 text-sm leading-6 text-[var(--foreground)]">
                  <p>Aanvraag content per maand: {item.content}</p>
                  <p>Advertenties: {item.ads}</p>
                  <p>Aanvraag pagina&apos;s per maand: {item.pages}</p>
                  <p>Lead flow: {item.leadFlow}</p>
                  <p>Retargeting: {item.retargeting}</p>
                  <p>Optimalisatie: {item.optimisation}</p>
                  <p>Support: {item.support}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="hidden grid-cols-4 border-b border-[var(--border)] bg-[var(--dark)] text-white md:grid">
            <div className="px-4 py-5 text-sm font-semibold uppercase tracking-[0.2em] text-white/56 md:px-6">Vergelijking</div>
            {packages.map((item) => (
              <div key={item.name} className={clsx("px-4 py-5 md:px-6", item.name === "Groei" && "bg-white text-[var(--foreground)]")}>
                {item.badge ? (
                  <span className="mb-3 inline-flex rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                    {item.badge}
                  </span>
                ) : null}
                <p className="font-[var(--font-display)] text-2xl font-semibold">{item.name}</p>
                <p className="mt-3 text-lg font-semibold">{item.price}</p>
                <p className="mt-1 text-sm opacity-70">{item.previousPrice}</p>
                <p className="mt-4 max-w-[14rem] text-sm leading-6 opacity-80">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="hidden md:block">
            {comparisonRows.map((row, index) => (
              <div key={row.key} className={clsx("grid grid-cols-4 border-b border-[var(--border)]", index === comparisonRows.length - 1 && "border-b-0")}>
                <div className="px-4 py-5 text-sm font-semibold text-[var(--foreground)] md:px-6">{row.label}</div>
                {packages.map((item) => (
                  <div
                    key={`${item.name}-${row.key}`}
                    className={clsx(
                      "px-4 py-5 text-sm leading-6 text-[var(--muted)] md:px-6",
                      item.name === "Groei" && "bg-[rgba(186,74,26,0.05)] text-[var(--foreground)]"
                    )}
                  >
                    {item[row.key]}
                  </div>
                ))}
              </div>
            ))}
          </div>
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
