import Link from "next/link";
import { MediaCard } from "@/components/media/media-card";
import { SectionHeading } from "@/components/section-heading";
import { BrandLogo } from "@/components/brand-logo";
import { getHomepageMediaCollections } from "@/lib/media/discovery";

type HomepageMediaSectionsProps = {
  locale?: "nl" | "en";
};

function uniqueAssets<T extends { id: string }>(assets: T[]) {
  return assets.filter((asset, index, all) => all.findIndex((candidate) => candidate.id === asset.id) === index);
}

export function HomepageMediaSections({ locale = "nl" }: HomepageMediaSectionsProps) {
  const collections = getHomepageMediaCollections();
  const isEnglish = locale === "en";
  const visualAssets = uniqueAssets([...collections.services, ...collections.hero, ...collections.cta]).filter(
    (asset) => asset.classification.sourceGroup === "visual"
  );
  const proofAssets = uniqueAssets([...collections.ugc, ...collections.caseStudy]);

  const featuredVisual = visualAssets[0];
  const supportVisual = visualAssets[1] ?? featuredVisual;
  const proofVisual = proofAssets[0] ?? supportVisual;
  const comparisonVisuals = uniqueAssets([
    ...collections.caseStudy,
    ...proofAssets.filter((asset) => asset.classification.contentType === "before-after"),
  ]).slice(0, 2);

  return (
    <>
      <section className="section-shell pt-24">
        <div className="grid gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-stretch">
          <div className="panel relative overflow-hidden rounded-[36px] px-6 py-8 md:px-8 md:py-10">
            <div className="pointer-events-none absolute right-6 top-6 opacity-[0.05]">
              <BrandLogo variant="mark-black" alt="" className="w-16 md:w-20" />
            </div>
            <SectionHeading
              eyebrow={isEnglish ? "Who it is for" : "Voor wie"}
              title={
                isEnglish
                  ? "Built for companies that want more serious project inquiries, not more empty reach."
                  : "Gemaakt voor bedrijven die meer serieuze projectaanvragen willen, niet meer losse zichtbaarheid."
              }
              body={
                isEnglish
                  ? "BouwReach is not for general branding projects. It is for construction related companies that want sharper positioning, stronger trust and a better inquiry flow."
                  : "BouwReach is niet bedoeld voor algemene brandingtrajecten. Het is voor bouwgerelateerde bedrijven die scherpere positionering, meer vertrouwen en een betere aanvraagstroom willen."
              }
            />
            <div className="mt-8 grid gap-4">
              {[
                {
                  title: isEnglish ? "Construction and renovation companies" : "Bouw en renovatiebedrijven",
                  body: isEnglish
                    ? "For businesses that already do strong work but need a clearer story and a more convincing sales path."
                    : "Voor bedrijven die goed werk leveren maar een duidelijker verhaal en een overtuigender salespad nodig hebben.",
                },
                {
                  title: isEnglish ? "Prefab and modular specialists" : "Prefab en modulaire specialisten",
                  body: isEnglish
                    ? "For teams that need trust quickly because the offer is technical, high value and often compared carefully."
                    : "Voor teams die snel vertrouwen moeten opbouwen omdat het aanbod technisch is, veel waarde heeft en kritisch wordt vergeleken.",
                },
                {
                  title: isEnglish ? "Window, facade and exterior suppliers" : "Kozijn, gevel en buitenschilbedrijven",
                  body: isEnglish
                    ? "For companies that need better local visibility, better proof and landing pages that push toward contact."
                    : "Voor bedrijven die betere lokale zichtbaarheid, sterker bewijs en landingspagina's nodig hebben die richting contact sturen.",
                },
              ].map((item) => (
                <article key={item.title} className="rounded-[24px] border border-[var(--border)] bg-white/78 p-5">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.body}</p>
                </article>
              ))}
            </div>
          </div>

          {featuredVisual ? (
            <MediaCard
              asset={featuredVisual}
              priority
              locale={locale}
              eyebrow={isEnglish ? "Positioning support" : "Positioneringsondersteuning"}
              title={
                isEnglish
                  ? "Your presentation should help a buyer trust the company faster."
                  : "Je presentatie moet ervoor zorgen dat een koper het bedrijf sneller vertrouwt."
              }
              body={
                isEnglish
                  ? "Good project visuals are not the product. They support the message, remove doubt and make the offer feel more serious."
                  : "Goede projectbeelden zijn niet het product. Ze ondersteunen de boodschap, nemen twijfel weg en laten het aanbod serieuzer voelen."
              }
              className="h-full"
            />
          ) : null}
        </div>
      </section>

      <section className="section-shell pt-24">
        <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-stretch">
          <div className="panel rounded-[36px] px-6 py-8 md:px-8 md:py-10">
            <SectionHeading
              eyebrow={isEnglish ? "What BouwReach does" : "Wat BouwReach doet"}
              title={
                isEnglish
                  ? "Everything is built around a simpler route from visibility to inquiry."
                  : "Alles wordt ingericht rond een eenvoudigere route van zichtbaarheid naar aanvraag."
              }
              body={
                isEnglish
                  ? "The work is not a stack of random marketing tasks. It is one commercial system with three clear jobs."
                  : "Het werk is geen stapel losse marketingtaken. Het is één commercieel systeem met drie duidelijke functies."
              }
            />
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                {
                  title: isEnglish ? "Sharpen the message" : "Boodschap aanscherpen",
                  body: isEnglish
                    ? "Make it clear who you work for, which projects you want and why your company is worth the conversation."
                    : "Maak duidelijk voor wie je werkt, welke projecten je zoekt en waarom jouw bedrijf het gesprek waard is.",
                },
                {
                  title: isEnglish ? "Build trust faster" : "Sneller vertrouwen opbouwen",
                  body: isEnglish
                    ? "Use real project proof, clear content and relevant campaigns so serious buyers stay engaged."
                    : "Gebruik echt projectbewijs, heldere content en relevante campagnes zodat serieuze kopers aangehaakt blijven.",
                },
                {
                  title: isEnglish ? "Turn traffic into contact" : "Verkeer omzetten in contact",
                  body: isEnglish
                    ? "Send people to pages that answer objections, guide the next step and create more qualified inquiries."
                    : "Stuur mensen naar pagina's die bezwaren wegnemen, de volgende stap begeleiden en meer gekwalificeerde aanvragen opleveren.",
                },
              ].map((item) => (
                <article key={item.title} className="rounded-[24px] border border-[var(--border)] bg-[rgba(18,18,18,0.03)] p-5">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.body}</p>
                </article>
              ))}
            </div>
          </div>

          {proofVisual ? (
            <MediaCard
              asset={proofVisual}
              locale={locale}
              eyebrow={isEnglish ? "Trust layer" : "Vertrouwenslaag"}
              title={
                isEnglish
                  ? "Real footage works when it proves delivery instead of filling space."
                  : "Echt beeld werkt wanneer het levering bewijst in plaats van ruimte opvult."
              }
              body={
                isEnglish
                  ? "Images and footage support sales when they show execution, context and proof that the company actually delivers."
                  : "Beeld ondersteunt sales wanneer het uitvoering, context en bewijs laat zien dat het bedrijf echt levert."
              }
              className="h-full"
            />
          ) : null}
        </div>
      </section>

      <section className="section-shell pt-24">
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
          <div className="space-y-6">
            <SectionHeading
              eyebrow={isEnglish ? "Proof from real projects" : "Bewijs uit echte projecten"}
              title={
                isEnglish
                  ? "Trust grows faster when prospects can see result and execution side by side."
                  : "Vertrouwen groeit sneller wanneer prospects resultaat en uitvoering naast elkaar kunnen zien."
              }
              body={
                isEnglish
                  ? "Good proof is practical. It shows what changed, how the work looks and why the company deserves the inquiry."
                  : "Goed bewijs is praktisch. Het laat zien wat er veranderde, hoe het werk eruitziet en waarom het bedrijf de aanvraag verdient."
              }
            />
            {comparisonVisuals.length ? (
              <div className="grid gap-6 md:grid-cols-2">
                {comparisonVisuals.map((asset, index) => (
                  <MediaCard
                    key={asset.id}
                    asset={asset}
                    locale={locale}
                    title={
                      isEnglish
                        ? index === 0
                          ? "Before and after makes the value of the work obvious."
                          : "Project proof removes doubt much faster than broad claims."
                        : index === 0
                          ? "Voor en na maakt de waarde van het werk direct zichtbaar."
                          : "Projectbewijs haalt twijfel sneller weg dan brede claims."
                    }
                    body={
                      isEnglish
                        ? index === 0
                          ? "Visitors do not have to guess what changed. They can see the difference immediately."
                          : "Concrete proof helps the right prospect understand quality, scope and seriousness at a glance."
                        : index === 0
                          ? "Bezoekers hoeven niet te raden wat er veranderde. Ze zien het verschil direct."
                          : "Concreet bewijs helpt de juiste prospect in één oogopslag kwaliteit, omvang en sérieux te begrijpen."
                    }
                  />
                ))}
              </div>
            ) : null}
          </div>

          <article className="panel relative overflow-hidden rounded-[36px] bg-[var(--dark)] px-6 py-8 text-white md:px-8 md:py-10">
            <div className="pointer-events-none absolute right-6 top-6 opacity-[0.05]">
              <BrandLogo variant="mark-white" alt="" className="w-16 md:w-20" />
            </div>
            <SectionHeading
              eyebrow={isEnglish ? "Next step" : "Volgende stap"}
              title={
                isEnglish
                  ? "More visibility only matters when it leads to better conversations."
                  : "Meer zichtbaarheid telt pas wanneer het leidt tot betere gesprekken."
              }
              body={
                isEnglish
                  ? "We review where trust is leaking, where the message is too broad and where inquiries are being lost right now."
                  : "We kijken waar vertrouwen weglekt, waar de boodschap te breed is en waar nu aanvragen verloren gaan."
              }
              theme="dark"
            />
            <div className="mt-8 rounded-[24px] border border-white/10 bg-white/6 p-5">
              <p className="text-sm leading-6 text-white/72">
                {isEnglish
                  ? "Clear advice first. Then we decide whether a package makes sense for your situation."
                  : "Eerst duidelijk advies. Daarna bepalen we of een pakket logisch is voor jouw situatie."}
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={isEnglish ? "/en/contact" : "/contact"}
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:bg-[rgba(255,255,255,0.9)]"
              >
                {isEnglish ? "Book a free analysis" : "Plan een gratis analyse"}
              </Link>
              <Link
                href={isEnglish ? "/en/packages" : "/pakketten"}
                className="inline-flex items-center justify-center rounded-full border border-white/14 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[var(--foreground)]"
              >
                {isEnglish ? "View packages" : "Bekijk de pakketten"}
              </Link>
            </div>
            <p className="mt-4 text-sm leading-6 text-white/62">
              {isEnglish
                ? "Built for construction, prefab, window, facade and renovation companies."
                : "Gemaakt voor bouw, prefab, kozijnen, gevel en renovatiebedrijven."}
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
