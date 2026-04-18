import { SectionHeading } from "@/components/section-heading";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Privacy",
  description: "Lees hoe BouwReach persoonsgegevens gebruikt, bewaart en beschermt na een aanvraag.",
  pathname: "/privacy",
});

const sections = [
  {
    title: "Verwerkingsverantwoordelijke",
    body: "BouwReach is verantwoordelijk voor de verwerking van persoonsgegevens die via deze website worden aangeleverd. Deze privacyverklaring geldt voor aanvragen, contactverzoeken en basiswebsitegebruik via bouwreach.nl.",
  },
  {
    title: "Welke gegevens we verwerken",
    body: "Via het contactformulier verwerken we naam, bedrijfsnaam, website, telefoonnummer, e mailadres en de inhoud van het bericht. Als je de website gebruikt, kunnen daarnaast functionele en beperkte analytische gegevens worden verwerkt om de site goed te laten werken en te verbeteren.",
  },
  {
    title: "Waarom we deze gegevens verwerken",
    body: "We gebruiken persoonsgegevens alleen om aanvragen op te volgen, contact op te nemen, de inhoud van een gratis analyse te beoordelen, dienstverlening voor te bereiden en basiscommunicatie over een mogelijke samenwerking te voeren.",
  },
  {
    title: "Grondslag voor verwerking",
    body: "BouwReach verwerkt persoonsgegevens op basis van gerechtvaardigd belang en op basis van jouw eigen aanvraag of contactverzoek. Zonder deze gegevens kunnen we je aanvraag niet goed beoordelen of opvolgen.",
  },
  {
    title: "Bewaartermijnen",
    body: "Aanvraaggegevens worden niet langer bewaard dan nodig is voor opvolging, interne beoordeling en normale commerciële correspondentie. Wanneer gegevens niet meer relevant zijn voor contact of samenwerking, worden ze verwijderd of geanonimiseerd.",
  },
  {
    title: "Delen met derden",
    body: "Gegevens worden niet verkocht. Ze worden alleen gedeeld met partijen die nodig zijn voor hosting, formulieren, websitebeheer of communicatie, en alleen voor zover dat nodig is om de website en opvolging goed te laten werken.",
  },
  {
    title: "Beveiliging",
    body: "BouwReach neemt passende technische en organisatorische maatregelen om persoonsgegevens te beschermen tegen verlies, misbruik of ongeautoriseerde toegang. Denk aan beperkte toegang, veilige hosting en zorgvuldige verwerking van aanvragen.",
  },
  {
    title: "Jouw rechten",
    body: "Je kunt verzoeken om inzage, correctie, verwijdering of beperking van je persoonsgegevens. Ook kun je bezwaar maken tegen verwerking. Voor zulke verzoeken kun je contact opnemen via de contactpagina.",
  },
  {
    title: "Vragen of verzoeken",
    body: "Heb je vragen over privacy of wil je een verzoek indienen over jouw gegevens, gebruik dan de contactpagina. Vermeld duidelijk om welk verzoek het gaat, zodat we je sneller kunnen helpen.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="section-shell pb-8 pt-10">
      <section className="panel rounded-[40px] px-6 py-12 md:px-10 md:py-16">
        <SectionHeading
          eyebrow="Privacy"
          title="Privacyverklaring"
          body="BouwReach verwerkt persoonsgegevens zorgvuldig en zo beperkt mogelijk. Hieronder staat welke gegevens we gebruiken, waarom we dat doen en hoe je een verzoek kunt indienen."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {sections.map((section) => (
            <article key={section.title} className="rounded-[28px] border border-[var(--border)] bg-white/80 p-6">
              <h2 className="font-[var(--font-display)] text-2xl font-semibold">{section.title}</h2>
              <p className="mt-4 text-base leading-7 text-[var(--muted)]">{section.body}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
