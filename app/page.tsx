import { BrandLogo } from "@/components/brand-logo";
import { HomepageMediaSections } from "@/components/media/homepage-media-sections";
import { PackageRevealCard } from "@/components/package-reveal-card";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Meer bereik is waardeloos zonder aanvragen",
  description:
    "BouwReach helpt bouw, prefab, kozijnen en renovatiebedrijven om online zichtbaarheid om te zetten in echte projectaanvragen.",
  pathname: "/",
});

const trustPoints = [
  "Gericht op aanvragen, niet op likes",
  "Speciaal voor bouw en renovatiebedrijven",
  "Snelle en duidelijke aanpak",
];

const pillars = [
  {
    label: "Positionering",
    title: "Duidelijke positionering",
    body: "We scherpen je boodschap aan zodat direct duidelijk is voor wie je werkt en waarom klanten bij jou moeten zijn.",
  },
  {
    label: "Vertrouwen",
    title: "Content die vertrouwen opbouwt",
    body: "We laten zien wat je maakt, hoe je werkt en waarom je bedrijf serieus genomen moet worden.",
  },
  {
    label: "Conversie",
    title: "Pagina's die converteren",
    body: "We sturen verkeer naar pagina's die helder zijn, overtuigen en bezoekers richting aanvraag bewegen.",
  },
];

const packageCards = [
  { name: "Basis", teaser: "Voor bedrijven die willen starten", price: "€470 per maand" },
  { name: "Groei", teaser: "Voor consistente aanvragen", price: "€750 per maand" },
  { name: "Scale", teaser: "Voor bedrijven die willen opschalen", price: "€1.250 per maand" },
];

const momentumPoints = [
  "Boodschap die direct duidelijk maakt wat je doet",
  "Zichtbaarheid die wordt doorvertaald naar serieuze gesprekken",
  "Pagina's en campagnes die sturen op aanvraag in plaats van aandacht",
];

export default function Home() {
  return (
    <div className="pb-8 pt-10">
      <section className="section-shell">
        <div className="accent-grid premium-grid panel relative overflow-hidden rounded-[40px] px-6 py-12 md:px-10 md:py-16">
          <div className="relative grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
            <div className="relative flex h-full flex-col justify-between pb-20 lg:min-h-[690px] lg:pr-4">
              <div>
              <div className="mb-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-[rgba(18,18,18,0.12)] bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
                  BouwReach
                </span>
                <span className="rounded-full border border-[rgba(18,18,18,0.12)] bg-[var(--foreground)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                  Van bereik naar aanvragen
                </span>
              </div>
              <h1 className="max-w-4xl font-[var(--font-display)] text-5xl font-semibold leading-[0.96] tracking-[-0.04em] md:text-7xl">
                Meer bereik is waardeloos zonder aanvragen.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)] md:text-xl">
                Wij helpen bouw, prefab en kozijnenbedrijven om online zichtbaarheid om te zetten in echte aanvragen
                via content, advertenties en conversiegerichte pagina&apos;s.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contact">Plan een gratis analyse</Button>
                <Button href="/pakketten" variant="secondary">
                  Bekijk de pakketten
                </Button>
              </div>
              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {trustPoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-[24px] border border-[rgba(18,18,18,0.1)] bg-white/72 px-5 py-4 text-sm font-semibold leading-6"
                  >
                    {point}
                  </div>
                ))}
              </div>
              </div>
              <div className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 select-none opacity-[0.1] md:bottom-4">
                <BrandLogo variant="mark-blue" alt="" className="w-16 md:w-20" />
              </div>
            </div>
            <div className="flex h-full flex-col justify-between gap-5 lg:min-h-[690px]">
              <div className="rounded-[32px] bg-[var(--dark)] p-6 text-white md:p-8">
                <p className="text-sm uppercase tracking-[0.26em] text-[var(--gold)]">Waar wij op sturen</p>
                <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
                  <div className="rounded-[26px] border border-white/10 bg-white/5 p-5">
                    <p className="text-xs uppercase tracking-[0.24em] text-white/52">Focus</p>
                    <p className="mt-4 font-[var(--font-display)] text-4xl font-semibold">Aanvragen</p>
                    <p className="mt-2 text-sm leading-6 text-white/70">
                      Geen zichtbaarheid om de zichtbaarheid. Alles moet bijdragen aan nieuwe gesprekken.
                    </p>
                  </div>
                  <div className="rounded-[26px] border border-white/10 bg-white/5 p-5">
                    <p className="text-xs uppercase tracking-[0.24em] text-white/52">Markt</p>
                    <p className="mt-4 font-[var(--font-display)] text-4xl font-semibold">Bouw</p>
                    <p className="mt-2 text-sm leading-6 text-white/70">
                      Gericht op bedrijven die projectaanvragen willen uit bouw, prefab, kozijnen en renovatie.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-[32px] border border-[rgba(18,18,18,0.1)] bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(248,242,233,0.82))] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[rgba(16,16,16,0.82)]">Wat je nodig hebt</p>
                <div className="mt-5 space-y-4">
                  {momentumPoints.map((point) => (
                    <p key={point} className="rounded-[20px] border border-[rgba(18,18,18,0.08)] bg-white/72 px-4 py-3 text-sm leading-6 text-[var(--muted)]">
                      {point}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pt-24">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionHeading
            title="Veel bouwbedrijven zijn zichtbaar, maar krijgen te weinig serieuze aanvragen."
            body="Er wordt af en toe iets geplaatst. Soms lopen er advertenties. Maar zonder duidelijk systeem, sterke boodschap en goede conversie blijft bereik vooral bereik."
          />
          <div className="section-rule panel rounded-[32px] p-6 pt-10 md:p-8 md:pt-12">
            <div className="grid gap-4 text-base leading-7 text-[var(--muted)] md:grid-cols-2">
              <p>Er is activiteit, maar geen vaste lijn die vertrouwen opbouwt.</p>
              <p>Er gaat verkeer naar pagina&apos;s die te weinig overtuigen of te weinig sturen.</p>
              <p>De boodschap blijft te algemeen waardoor serieuze klanten niet snel genoeg aanhaken.</p>
              <p>Daardoor komen aanvragen onregelmatig binnen en blijft groei onnodig afhankelijk van toeval.</p>
            </div>
          </div>
        </div>
      </section>

      <HomepageMediaSections locale="nl" />

      <section id="aanpak" className="section-shell scroll-mt-32 pt-24">
        <div className="panel rounded-[40px] px-6 py-10 md:px-10 md:py-14">
          <SectionHeading
            eyebrow="Zo werkt het"
            title="Een vast systeem van boodschap, bewijs en conversie."
            body="Geen losse acties. We koppelen positionering, bewijs en landingspagina's aan een duidelijk pad richting aanvraag."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-[28px] border border-[var(--border)] bg-white/70 p-6 transition duration-300 hover:-translate-y-1 hover:bg-white"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[rgba(16,16,16,0.82)]">{pillar.label}</p>
                <h3 className="mt-5 font-[var(--font-display)] text-2xl font-semibold">{pillar.title}</h3>
                <p className="mt-4 text-base leading-7 text-[var(--muted)]">{pillar.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pt-24">
        <SectionHeading
          align="center"
          eyebrow="Pakketten"
          title="Kies hoe snel je wilt groeien"
          body="We houden de homepage bewust scherp. Klik een pakket open en ga daarna naar de volledige uitleg."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {packageCards.map((card) => (
            <PackageRevealCard key={card.name} {...card} />
          ))}
        </div>
      </section>

      <section className="section-shell pt-24">
        <div className="relative overflow-hidden rounded-[36px] bg-[var(--dark)] px-6 py-12 text-white md:px-10">
          <div className="pointer-events-none absolute right-5 top-5 select-none opacity-[0.08] md:right-10 md:top-10">
            <BrandLogo variant="mark-blue" alt="" className="w-16 md:w-20" />
          </div>
          <div className="mb-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              Positionering
            </span>
            <span className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              Content
            </span>
            <span className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              Conversie
            </span>
          </div>
          <SectionHeading
            eyebrow="Waarom het werkt"
            title="Geen losse marketing. Een systeem gericht op resultaat."
            body="We combineren positionering, content, advertenties en conversiegerichte pagina&apos;s om bouwbedrijven te helpen aan meer serieuze aanvragen."
            theme="dark"
          />
        </div>
      </section>

      <section className="section-shell pt-24">
        <div className="panel relative overflow-hidden rounded-[36px] px-6 py-10 md:px-10 md:py-12">
          <div className="pointer-events-none absolute right-5 top-5 select-none opacity-[0.06] md:right-10 md:top-10">
            <BrandLogo variant="mark-black" alt="" className="w-16 md:w-20" />
          </div>
          <SectionHeading
            eyebrow="Analyse"
            title="Benieuwd hoeveel aanvragen je nu mist?"
            body="We kijken gratis naar je huidige situatie en laten zien waar de grootste winst zit in boodschap, vertrouwen en conversie."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact">Plan een gratis analyse</Button>
            <Button href="/pakketten" variant="secondary">
              Bekijk de pakketten
            </Button>
          </div>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--muted)]">
            Voor bouw, prefab, kozijnen, gevel en renovatiebedrijven die een serieuzere instroom van projectaanvragen willen.
          </p>
        </div>
      </section>
    </div>
  );
}
