import { SectionHeading } from "@/components/section-heading";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Cookies",
  description: "Bekijk welke functionele en eenvoudige meetcookies BouwReach gebruikt en hoe je jouw keuze beheert.",
  pathname: "/cookies",
});

export default function CookiesPage() {
  return (
    <div className="section-shell pb-8 pt-10">
      <section className="panel rounded-[40px] px-6 py-12 md:px-10 md:py-16">
        <SectionHeading
          eyebrow="Cookies"
          title="Cookiepagina"
          body="Deze website gebruikt een kleine set cookies om de site goed te laten werken en om basisinzichten te krijgen in gebruik."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <article className="rounded-[28px] bg-[var(--dark)] p-6 text-white">
            <h2 className="font-[var(--font-display)] text-2xl font-semibold">Noodzakelijk</h2>
            <p className="mt-4 text-sm leading-6 text-white/74">
              Functionele cookies zorgen dat onderdelen van de site correct laden en dat je cookiekeuze wordt onthouden.
            </p>
          </article>
          <article className="rounded-[28px] border border-[var(--border)] bg-white/80 p-6">
            <h2 className="font-[var(--font-display)] text-2xl font-semibold">Meting</h2>
            <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
              Eenvoudige meetcookies kunnen worden gebruikt om te zien welke pagina&apos;s bezocht worden en waar bezoekers afhaken.
            </p>
          </article>
          <article className="rounded-[28px] border border-[var(--border)] bg-white/80 p-6">
            <h2 className="font-[var(--font-display)] text-2xl font-semibold">Beheer</h2>
            <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
              Je keuze wordt lokaal op je apparaat opgeslagen. Je kunt deze later verwijderen via je browserinstellingen.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
