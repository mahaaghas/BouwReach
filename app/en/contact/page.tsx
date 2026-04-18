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
          <div className="pointer-events-none absolute right-5 top-5 select-none opacity-[0.06] md:right-10 md:top-10">
            <BrandLogo variant="mark-black" alt="" className="w-16 md:w-20" />
          </div>
          <SectionHeading
            eyebrow="Contact"
            title="Book a free analysis"
            body="For construction, prefab, window, facade and renovation companies that want stronger visibility and more serious project inquiries."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="rounded-[24px] border border-[rgba(18,18,18,0.1)] bg-white/74 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">What we review</p>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">Your message, current visibility and where inquiries are getting lost right now.</p>
            </div>
            <div className="rounded-[24px] border border-[rgba(18,18,18,0.1)] bg-white/74 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">What you get back</p>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">A direct read on the biggest missed opportunities and what needs sharpening first.</p>
            </div>
            <div className="rounded-[24px] border border-[rgba(18,18,18,0.1)] bg-white/74 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">What happens next</p>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">Only then do we decide whether a package makes sense for your situation.</p>
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
                A direct look at your current approach, the biggest missed opportunities and which next step is commercially strongest.
              </p>
            </div>
          </div>
        </div>
        <ContactForm locale="en" />
      </section>
    </div>
  );
}
