import { BrandLogo } from "@/components/brand-logo";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Book a free analysis with BouwReach and see where your construction company is missing serious project inquiries.",
  pathname: "/en/contact",
  locale: "en",
});

export default function EnglishContactPage() {
  return (
    <div className="section-shell pb-8 pt-10">
      <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="accent-grid panel relative overflow-hidden rounded-[40px] px-6 py-10 md:px-8 md:py-12">
          <div className="pointer-events-none absolute right-6 top-6 opacity-[0.05]">
            <BrandLogo variant="mark-black" alt="" className="w-16 md:w-20" />
          </div>
          <SectionHeading
            eyebrow="Contact"
            title="Book a free analysis"
            body="Briefly tell us where you are now and where you want more inquiries to come from."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="rounded-[24px] border border-[rgba(18,18,18,0.1)] bg-white/74 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Step 1</p>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">We look at where your current visibility is leaking opportunities.</p>
            </div>
            <div className="rounded-[24px] border border-[rgba(18,18,18,0.1)] bg-white/74 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Step 2</p>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">We show what needs to be sharpened first.</p>
            </div>
            <div className="rounded-[24px] border border-[rgba(18,18,18,0.1)] bg-white/74 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Step 3</p>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">Then we decide which package makes sense.</p>
            </div>
          </div>
          <div className="mt-10 space-y-5 rounded-[28px] bg-[var(--dark)] p-6 text-white">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--gold)]">Who it is for</p>
              <p className="mt-2 text-sm leading-6 text-white/74">
                Construction, prefab, window, facade and renovation companies that want more serious project inquiries.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--gold)]">What you get</p>
              <p className="mt-2 text-sm leading-6 text-white/74">
                A direct look at your current approach, the biggest missed opportunities and which package fits best.
              </p>
            </div>
          </div>
        </div>
        <ContactForm locale="en" />
      </section>
    </div>
  );
}
