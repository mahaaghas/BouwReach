import { createMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";

export const metadata = createMetadata({
  title: "Pagina niet gevonden",
  description: "De opgevraagde pagina bestaat niet meer of is verplaatst. Ga terug naar home, pakketten of contact.",
  pathname: "/404",
  noIndex: true,
});

export default function NotFound() {
  return (
    <div className="section-shell pb-8 pt-10">
      <section className="panel rounded-[40px] px-6 py-12 md:px-10 md:py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">Pagina niet gevonden</p>
        <h1 className="mt-5 max-w-3xl font-[var(--font-display)] text-4xl font-semibold leading-tight md:text-6xl">
          Deze pagina bestaat niet of is verplaatst.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg">
          Ga terug naar home, bekijk de pakketten of plan direct een gratis analyse. Looking for the English version? Use the links below.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/">Terug naar home</Button>
          <Button href="/pakketten" variant="secondary">
            Bekijk de pakketten
          </Button>
          <Button href="/en" variant="secondary">
            English home
          </Button>
        </div>
      </section>
    </div>
  );
}
