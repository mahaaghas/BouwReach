import { SectionHeading } from "@/components/section-heading";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Cookies",
  description: "Bekijk welke functionele en eenvoudige meetcookies BouwReach gebruikt en hoe je jouw keuze beheert.",
  pathname: "/cookies",
});

const sections = [
  {
    title: "Functionele cookies",
    body: "Deze cookies zijn nodig om de website goed te laten werken. Denk aan het onthouden van je cookiekeuze of het correct laden van onderdelen van de site.",
    dark: true,
  },
  {
    title: "Analytische cookies",
    body: "BouwReach kan beperkte analytische cookies gebruiken om te zien welke pagina's worden bezocht en waar bezoekers afhaken. Dat helpt om de site inhoudelijk en technisch te verbeteren.",
  },
  {
    title: "Marketingcookies",
    body: "Marketing of retargetingcookies worden alleen gebruikt als die bewust worden toegevoegd en als de gekozen cookiestatus dat toelaat. Ze worden niet standaard zonder duidelijke reden ingeschakeld.",
  },
  {
    title: "Cookiekeuze beheren",
    body: "Je keuze wordt lokaal op je apparaat opgeslagen. Je kunt deze later aanpassen door cookies in je browser te verwijderen of opnieuw toestemming te geven wanneer de banner opnieuw verschijnt.",
  },
  {
    title: "Bewaartermijn",
    body: "De bewaartermijn hangt af van het doel van de cookie. Functionele cookies blijven meestal alleen actief zolang dat nodig is voor normaal websitegebruik. Analytische cookies worden beperkt ingezet en niet langer bewaard dan nodig.",
  },
  {
    title: "Vragen over cookies",
    body: "Heb je vragen over cookiegebruik op deze site, neem dan contact op via de contactpagina. Dan lichten we graag toe welke cookies actief zijn en waarom.",
  },
];

export default function CookiesPage() {
  return (
    <div className="section-shell pb-8 pt-10">
      <section className="panel rounded-[40px] px-6 py-12 md:px-10 md:py-16">
        <SectionHeading
          eyebrow="Cookies"
          title="Cookieverklaring"
          body="BouwReach gebruikt alleen cookies die nodig zijn voor een goed werkende website en voor beperkte meting en optimalisatie. Hieronder lees je welke soorten cookies kunnen worden gebruikt."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {sections.map((section) => (
            <article
              key={section.title}
              className={
                section.dark
                  ? "rounded-[28px] bg-[var(--dark)] p-6 text-white"
                  : "rounded-[28px] border border-[var(--border)] bg-white/80 p-6"
              }
            >
              <h2 className="font-[var(--font-display)] text-2xl font-semibold">{section.title}</h2>
              <p className={section.dark ? "mt-4 text-sm leading-6 text-white/74" : "mt-4 text-base leading-7 text-[var(--muted)]"}>{section.body}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
