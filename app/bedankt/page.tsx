import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Bedankt",
  description: "Je aanvraag is ontvangen. We nemen zo snel mogelijk contact met je op.",
  pathname: "/bedankt",
  noIndex: true,
});

export default function ThankYouPage() {
  return (
    <div className="section-shell pb-8 pt-10">
      <section className="panel rounded-[40px] px-6 py-12 md:px-10 md:py-16">
        <SectionHeading
          eyebrow="Bedankt"
          title="Je aanvraag is goed ontvangen."
          body="Bedankt voor je aanvraag. We werken met pakketten vanaf €470 per maand. We nemen zo snel mogelijk contact met je op om te kijken wat het beste past bij jouw situatie."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <div className="rounded-[28px] bg-[var(--dark)] p-6 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--gold)]">Stap 1</p>
            <p className="mt-4 text-sm leading-6 text-white/74">We bekijken je huidige zichtbaarheid en waar aanvragen blijven liggen.</p>
          </div>
          <div className="rounded-[28px] border border-[var(--border)] bg-white/80 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">Stap 2</p>
            <p className="mt-4 text-sm leading-6 text-[var(--muted)]">We bepalen welke aanpak logisch is voor jouw groeifase en aanbod.</p>
          </div>
          <div className="rounded-[28px] border border-[var(--border)] bg-white/80 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">Stap 3</p>
            <p className="mt-4 text-sm leading-6 text-[var(--muted)]">Daarna plannen we het vervolggesprek en laten we zien welk pakket past.</p>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/pakketten">Bekijk de pakketten</Button>
          <Button href="/" variant="secondary">
            Terug naar home
          </Button>
        </div>
      </section>
    </div>
  );
}
