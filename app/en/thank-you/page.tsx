import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Thank you",
  description: "Your request has been received. We will contact you as soon as possible.",
  pathname: "/en/thank-you",
  locale: "en",
  noIndex: true,
});

export default function EnglishThankYouPage() {
  return (
    <div className="section-shell pb-8 pt-10">
      <section className="panel rounded-[40px] px-6 py-12 md:px-10 md:py-16">
        <SectionHeading
          eyebrow="Thank you"
          title="Your request has been received."
          body="Thank you for your request. We work with packages starting at €470 per month. We will contact you as soon as possible to see what fits your situation best."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <div className="rounded-[28px] bg-[var(--dark)] p-6 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--gold)]">Step 1</p>
            <p className="mt-4 text-sm leading-6 text-white/74">We review your current visibility and where inquiries are being lost.</p>
          </div>
          <div className="rounded-[28px] border border-[var(--border)] bg-white/80 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">Step 2</p>
            <p className="mt-4 text-sm leading-6 text-[var(--muted)]">We determine which approach makes sense for your growth stage and offer.</p>
          </div>
          <div className="rounded-[28px] border border-[var(--border)] bg-white/80 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">Step 3</p>
            <p className="mt-4 text-sm leading-6 text-[var(--muted)]">After that, we plan the follow up conversation and show which package fits.</p>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/en/packages">View packages</Button>
          <Button href="/en" variant="secondary">
            Back to home
          </Button>
        </div>
      </section>
    </div>
  );
}
