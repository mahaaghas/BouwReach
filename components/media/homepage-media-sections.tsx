import { MediaCard } from "@/components/media/media-card";
import { SectionHeading } from "@/components/section-heading";
import { BrandLogo } from "@/components/brand-logo";
import { getHomepageMediaCollections } from "@/lib/media/discovery";

type HomepageMediaSectionsProps = {
  locale?: "nl" | "en";
};

export function HomepageMediaSections({ locale = "nl" }: HomepageMediaSectionsProps) {
  const collections = getHomepageMediaCollections();
  const heroAsset = collections.hero[0] ?? collections.services[0];
  const showcasePool = [
    ...collections.services,
    ...collections.hero.slice(heroAsset ? 1 : 0),
    ...collections.cta,
  ].filter(
    (asset, index, assets) =>
      assets.findIndex((candidate) => candidate.id === asset.id) === index &&
      asset.classification.sourceGroup === "visual"
  );
  const serviceAssets = showcasePool
    .filter(
      (asset) =>
        asset.classification.contentType !== "team-process" &&
        !asset.filename.includes("plans-for-the-ground-floor")
    )
    .slice(0, 3);
  const topShowcaseAssets = serviceAssets.slice(0, 2);
  const bottomFeatureAsset = serviceAssets[2] ?? collections.cta[0] ?? collections.hero[1] ?? collections.services[0];
  const ugcAssets = collections.ugc.slice(0, 3);
  const caseStudyAssets = collections.caseStudy.slice(0, 2);
  const isEnglish = locale === "en";

  return (
    <>
      {heroAsset ? (
        <section className="section-shell pt-24">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative overflow-hidden rounded-[40px] bg-[var(--dark)] p-6 text-white md:p-8">
              <div className="pointer-events-none absolute right-6 top-6 opacity-[0.05]">
                <BrandLogo variant="mark-white" alt="" className="w-20 md:w-24" />
              </div>
              <SectionHeading
                eyebrow={isEnglish ? "Hero visual" : "Hero visual"}
                title={
                  isEnglish
                    ? "Premium media is chosen for intent, not decoration."
                    : "Premium media wordt gekozen op intentie, niet op decoratie."
                }
                body={
                  isEnglish
                    ? "Hero assets are filtered to strong branding visuals and confident footage that support the first conversion decision."
                    : "Hero assets worden gefilterd op sterke branding visuals en overtuigend beeld dat de eerste conversiebeslissing ondersteunt."
                }
                theme="dark"
              />
            </div>
            <MediaCard asset={heroAsset} priority className="min-h-full" />
          </div>
        </section>
      ) : null}

      {topShowcaseAssets.length === 2 && bottomFeatureAsset ? (
        <section className="section-shell pt-24">
          <div className="space-y-8 md:space-y-10">
            <div className="max-w-3xl">
              <SectionHeading
                eyebrow={isEnglish ? "Selected work" : "Geselecteerd werk"}
                title={
                  isEnglish
                    ? "Premium visual direction for construction, renovation and prefab brands."
                    : "Premium visuele richting voor bouw, renovatie en prefabmerken."
                }
                body={
                  isEnglish
                    ? "A calm editorial composition gives the work more authority and turns this section into a stronger trust and conversion moment."
                    : "Een rustige redactionele compositie geeft het werk meer autoriteit en maakt van deze sectie een sterker moment voor vertrouwen en conversie."
                }
              />
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {topShowcaseAssets.map((asset) => (
                <MediaCard key={asset.id} asset={asset} className="h-full" />
              ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
              <article className="panel relative flex h-full flex-col justify-between overflow-hidden rounded-[32px] border border-[rgba(16,16,16,0.1)] px-6 py-7 md:px-8 md:py-8">
                <div className="pointer-events-none absolute right-6 top-6 opacity-[0.05]">
                  <BrandLogo variant="mark-black" alt="" className="w-16 md:w-20" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[rgba(16,16,16,0.78)]">
                    {isEnglish ? "CTA media" : "CTA media"}
                  </p>
                  <h3 className="mt-5 max-w-[12ch] font-[var(--font-display)] text-4xl font-semibold leading-[1.02] tracking-[-0.04em] md:text-5xl">
                    {isEnglish
                      ? "Premium visuals that help serious projects sell faster."
                      : "Premium visuals die serieuze projecten sneller helpen verkopen."}
                  </h3>
                  <p className="mt-5 max-w-xl text-base leading-7 text-[var(--muted)] md:text-lg">
                    {isEnglish
                      ? "We create visual content for renovation, prefab and construction brands that need trust, clarity and stronger market presence."
                      : "Wij maken visuele content voor renovatie, prefab en bouwmerken die vertrouwen, helderheid en een sterkere marktpositie nodig hebben."}
                  </p>
                </div>

                <div className="mt-8 space-y-4">
                  <a
                    href={isEnglish ? "/en/contact" : "/contact"}
                    className="inline-flex w-fit items-center justify-center rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
                  >
                    {isEnglish ? "Book a strategy call" : "Plan een strategiesessie"}
                  </a>
                  <p className="text-sm leading-6 text-[rgba(16,16,16,0.68)]">
                    {isEnglish
                      ? "Real sites. Real footage. Premium positioning."
                      : "Echte locaties. Echt beeld. Premium positionering."}
                  </p>
                </div>
              </article>

              <div className="relative">
                <MediaCard asset={bottomFeatureAsset} className="h-full" />
                <div className="pointer-events-none absolute bottom-4 left-4 hidden max-w-[220px] rounded-[22px] border border-white/50 bg-white/84 p-4 shadow-[0_20px_50px_rgba(16,16,16,0.14)] backdrop-blur md:block">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[rgba(16,16,16,0.7)]">
                    {isEnglish ? "Project proof" : "Projectbewijs"}
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-[var(--foreground)]">
                    {isEnglish
                      ? "Selected visuals are framed to build trust before the conversation starts."
                      : "Geselecteerde visuals zijn gekaderd om vertrouwen op te bouwen voordat het gesprek begint."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {ugcAssets.length ? (
        <section className="section-shell pt-24">
          <div className="relative overflow-hidden rounded-[40px] bg-[linear-gradient(180deg,#0f0f0f,#171717)] px-6 py-12 md:px-10">
            <div className="pointer-events-none absolute right-6 top-6 opacity-[0.05]">
              <BrandLogo variant="mark-white" alt="" className="w-16 md:w-20" />
            </div>
            <div className="max-w-3xl">
              <SectionHeading
                eyebrow={isEnglish ? "User generated content" : "User generated content"}
                title={isEnglish ? "User generated content that adds trust." : "User generated content die vertrouwen toevoegt."}
                body={
                  isEnglish
                    ? "On-site footage, testimonial style clips and project proof use dynamic cards with readable overlays and real context."
                    : "On-site footage, testimonialachtige clips en projectbewijs krijgen dynamische kaarten met leesbare overlays en echte context."
                }
                theme="dark"
              />
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {ugcAssets.map((asset) => (
                <MediaCard key={asset.id} asset={asset} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {caseStudyAssets.length ? (
        <section className="section-shell pt-24">
          <SectionHeading
            eyebrow={isEnglish ? "Case studies" : "Case studies"}
            title={
              isEnglish
                ? "Comparison and progress assets tell the project story."
                : "Vergelijking en voortgangsassets vertellen het projectverhaal."
            }
            body={
              isEnglish
                ? "Before and after content gets split framing automatically, while installation moments move into a proof led narrative section."
                : "Voor en na content krijgt automatisch een split frame, terwijl installatiemomenten in een bewijsgerichte verhaallijn komen."
            }
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {caseStudyAssets.map((asset) => (
              <MediaCard key={asset.id} asset={asset} />
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
}
