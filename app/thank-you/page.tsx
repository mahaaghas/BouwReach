import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Thank you",
  description: "Your request has been received. We will contact you as soon as possible.",
  pathname: "/thank-you",
  noIndex: true,
});

export default function ThankYouPage() {
  return (
    <div className="section-shell pb-8 pt-10">
      <section className="panel rounded-[40px] px-6 py-12 md:px-10 md:py-16">
        <SectionHeading
          eyebrow="Thank you"
          title="Your request has been received."
          body="Thank you for your request. We will contact you as soon as possible to review the best next step for your situation."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <div className="rounded-[28px] bg-[var(--dark)] p-6 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--gold)]">Step 1</p>
            <p className="mt-4 text-sm leading-6 text-white/74">We review your message, your situation, and the main growth opportunity.</p>
          </div>
          <div className="rounded-[28px] border border-[var(--border)] bg-white/80 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">Step 2</p>
            <p className="mt-4 text-sm leading-6 text-[var(--muted)]">We check which approach makes the most sense for your current offer and goals.</p>
          </div>
          <div className="rounded-[28px] border border-[var(--border)] bg-white/80 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">Step 3</p>
            <p className="mt-4 text-sm leading-6 text-[var(--muted)]">After that, we follow up with the clearest next step and suitable package direction.</p>
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
