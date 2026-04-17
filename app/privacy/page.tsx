import { SectionHeading } from "@/components/section-heading";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Privacy",
  description: "Lees hoe BouwReach persoonsgegevens gebruikt, bewaart en beschermt na een aanvraag.",
  pathname: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="section-shell pb-8 pt-10">
      <section className="panel rounded-[40px] px-6 py-12 md:px-10 md:py-16">
        <SectionHeading
          eyebrow="Privacy"
          title="Privacypagina"
          body="We houden persoonsgegevens zo beperkt mogelijk en gebruiken ze alleen om contact op te nemen over je aanvraag."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="rounded-[28px] border border-[var(--border)] bg-white/80 p-6">
            <h2 className="font-[var(--font-display)] text-2xl font-semibold">Welke gegevens we bewaren</h2>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">
              Naam, bedrijfsnaam, website, telefoonnummer, e mail en de inhoud van je bericht als je het contactformulier invult.
            </p>
          </article>
          <article className="rounded-[28px] border border-[var(--border)] bg-white/80 p-6">
            <h2 className="font-[var(--font-display)] text-2xl font-semibold">Waarom we dit doen</h2>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">
              Alleen om je aanvraag op te volgen, contact op te nemen en te bepalen welke aanpak het beste bij jouw situatie past.
            </p>
          </article>
          <article className="rounded-[28px] border border-[var(--border)] bg-white/80 p-6">
            <h2 className="font-[var(--font-display)] text-2xl font-semibold">Wat we niet doen</h2>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">
              We verkopen je gegevens niet door en gebruiken ze niet voor irrelevante nieuwsbrieven of brede marketinglijsten.
            </p>
          </article>
          <article className="rounded-[28px] border border-[var(--border)] bg-white/80 p-6">
            <h2 className="font-[var(--font-display)] text-2xl font-semibold">Vragen over privacy</h2>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">
              Wil je weten welke gegevens we van je hebben of wil je iets laten verwijderen, neem dan contact op via de contactpagina.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
