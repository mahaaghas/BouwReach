import { SectionHeading } from "@/components/section-heading";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Privacy",
  description: "Read how BouwReach uses, stores, and protects personal data after an inquiry.",
  pathname: "/en/privacy",
  locale: "en",
});

export default function EnglishPrivacyPage() {
  return (
    <div className="section-shell pb-8 pt-10">
      <section className="panel rounded-[40px] px-6 py-12 md:px-10 md:py-16">
        <SectionHeading
          eyebrow="Privacy"
          title="Privacy page"
          body="We keep personal data to a minimum and only use it to contact you about your request."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="rounded-[28px] border border-[var(--border)] bg-white/80 p-6">
            <h2 className="font-[var(--font-display)] text-2xl font-semibold">What we store</h2>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">
              Name, company name, website, phone number, e mail and the content of your message when you fill in the contact form.
            </p>
          </article>
          <article className="rounded-[28px] border border-[var(--border)] bg-white/80 p-6">
            <h2 className="font-[var(--font-display)] text-2xl font-semibold">Why we use it</h2>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">
              Only to follow up your request, contact you and determine which approach fits your situation best.
            </p>
          </article>
          <article className="rounded-[28px] border border-[var(--border)] bg-white/80 p-6">
            <h2 className="font-[var(--font-display)] text-2xl font-semibold">What we do not do</h2>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">
              We do not sell your data and we do not use it for irrelevant newsletters or broad marketing lists.
            </p>
          </article>
          <article className="rounded-[28px] border border-[var(--border)] bg-white/80 p-6">
            <h2 className="font-[var(--font-display)] text-2xl font-semibold">Privacy questions</h2>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">
              If you want to know which data we have about you or want something removed, contact us through the contact page.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
