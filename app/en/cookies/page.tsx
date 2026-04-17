import { SectionHeading } from "@/components/section-heading";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Cookies",
  description: "See which functional and basic measurement cookies BouwReach uses and how you manage your choice.",
  pathname: "/en/cookies",
  locale: "en",
});

export default function EnglishCookiesPage() {
  return (
    <div className="section-shell pb-8 pt-10">
      <section className="panel rounded-[40px] px-6 py-12 md:px-10 md:py-16">
        <SectionHeading
          eyebrow="Cookies"
          title="Cookie page"
          body="This website uses a small set of cookies to keep the site working properly and to get basic insight into usage."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <article className="rounded-[28px] bg-[var(--dark)] p-6 text-white">
            <h2 className="font-[var(--font-display)] text-2xl font-semibold">Necessary</h2>
            <p className="mt-4 text-sm leading-6 text-white/74">
              Functional cookies make sure parts of the site load correctly and that your cookie choice is remembered.
            </p>
          </article>
          <article className="rounded-[28px] border border-[var(--border)] bg-white/80 p-6">
            <h2 className="font-[var(--font-display)] text-2xl font-semibold">Measurement</h2>
            <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
              Simple measurement cookies may be used to see which pages are visited and where visitors drop off.
            </p>
          </article>
          <article className="rounded-[28px] border border-[var(--border)] bg-white/80 p-6">
            <h2 className="font-[var(--font-display)] text-2xl font-semibold">Control</h2>
            <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
              Your choice is stored locally on your device. You can remove it later through your browser settings.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
