import { BrandLogo } from "@/components/brand-logo";
import { HomepageMediaSections } from "@/components/media/homepage-media-sections";
import { PackageRevealCard } from "@/components/package-reveal-card";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "More reach is worthless without inquiries",
  description:
    "BouwReach helps construction, prefab, window, facade, and renovation companies turn visibility into serious project inquiries.",
  pathname: "/en",
  locale: "en",
});

const trustPoints = [
  "Built for inquiries, not for likes",
  "Made for construction and renovation companies",
  "Fast and clear approach",
];

const pillars = [
  {
    label: "Positioning",
    title: "Clear positioning",
    body: "We sharpen your message so it is immediately clear who you work for and why the right clients should choose you.",
  },
  {
    label: "Trust",
    title: "Content that builds trust",
    body: "We show what you build, how you work and why your company should be taken seriously.",
  },
  {
    label: "Conversion",
    title: "Pages that convert",
    body: "We send traffic to pages that are clear, convincing and built to move visitors toward an inquiry.",
  },
];

const packageCards = [
  { name: "Basic", teaser: "For companies that want to get started", price: "€470 per month" },
  { name: "Growth", teaser: "For consistent inquiries", price: "€750 per month" },
  { name: "Scale", teaser: "For companies that want to scale up", price: "€1,250 per month" },
];

const momentumPoints = [
  "A message that makes it instantly clear what you do",
  "Visibility translated into serious sales conversations",
  "Pages and campaigns built around inquiries instead of attention",
];

export default function EnglishHomePage() {
  return (
    <div className="pb-8 pt-10">
      <section className="section-shell">
        <div className="accent-grid premium-grid panel relative overflow-hidden rounded-[40px] px-6 py-12 md:px-10 md:py-16">
          <div className="relative grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
            <div className="relative flex h-full flex-col justify-between pb-20 lg:min-h-[690px] lg:pr-4">
              <div>
              <div className="mb-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-[rgba(18,18,18,0.12)] bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
                  BouwReach
                </span>
                <span className="rounded-full border border-[rgba(18,18,18,0.12)] bg-[var(--foreground)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                  From reach to inquiries
                </span>
              </div>
              <h1 className="max-w-4xl font-[var(--font-display)] text-5xl font-semibold leading-[0.96] tracking-[-0.04em] md:text-7xl">
                More reach is worthless without inquiries.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)] md:text-xl">
                We help construction, prefab and window companies turn online visibility into real inquiries through
                content, ads and conversion focused pages.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/en/contact">Book a free analysis</Button>
                <Button href="/en/packages" variant="secondary">
                  View packages
                </Button>
              </div>
              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {trustPoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-[24px] border border-[rgba(18,18,18,0.1)] bg-white/72 px-5 py-4 text-sm font-semibold leading-6"
                  >
                    {point}
                  </div>
                ))}
              </div>
              </div>
              <div className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 select-none opacity-[0.1] md:bottom-4">
                <BrandLogo variant="mark-blue" alt="" className="w-16 md:w-20" />
              </div>
            </div>
            <div className="flex h-full flex-col justify-between gap-5 lg:min-h-[690px]">
              <div className="rounded-[32px] bg-[var(--dark)] p-6 text-white md:p-8">
                <p className="text-sm uppercase tracking-[0.26em] text-[var(--gold)]">What we optimize for</p>
                <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
                  <div className="rounded-[26px] border border-white/10 bg-white/5 p-5">
                    <p className="text-xs uppercase tracking-[0.24em] text-white/52">Focus</p>
                    <p className="mt-4 font-[var(--font-display)] text-4xl font-semibold">Inquiries</p>
                    <p className="mt-2 text-sm leading-6 text-white/70">
                      No visibility for the sake of visibility. Everything should contribute to new conversations.
                    </p>
                  </div>
                  <div className="rounded-[26px] border border-white/10 bg-white/5 p-5">
                    <p className="text-xs uppercase tracking-[0.24em] text-white/52">Market</p>
                    <p className="mt-4 font-[var(--font-display)] text-4xl font-semibold">Construction</p>
                    <p className="mt-2 text-sm leading-6 text-white/70">
                      Built for companies that want project inquiries from construction, prefab, windows and renovation.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-[32px] border border-[rgba(18,18,18,0.1)] bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(248,242,233,0.82))] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[rgba(16,16,16,0.82)]">What you need</p>
                <div className="mt-5 space-y-4">
                  {momentumPoints.map((point) => (
                    <p key={point} className="rounded-[20px] border border-[rgba(18,18,18,0.08)] bg-white/72 px-4 py-3 text-sm leading-6 text-[var(--muted)]">
                      {point}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pt-24">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionHeading
            title="Many construction companies are visible, but still get too few serious inquiries."
            body="They post now and then. Sometimes they run ads. But without a clear system, a sharp message and proper conversion, visibility stays just visibility."
          />
          <div className="section-rule panel rounded-[32px] p-6 pt-10 md:p-8 md:pt-12">
            <div className="grid gap-4 text-base leading-7 text-[var(--muted)] md:grid-cols-2">
              <p>There is activity, but no clear line that builds trust over time.</p>
              <p>Traffic gets sent to pages that do too little to convince or guide people.</p>
              <p>The message stays too generic, so serious buyers do not engage fast enough.</p>
              <p>That leads to inconsistent inquiries and growth that depends too much on chance.</p>
            </div>
          </div>
        </div>
      </section>

      <HomepageMediaSections locale="en" />

      <section id="approach" className="section-shell scroll-mt-32 pt-24">
        <div className="panel rounded-[40px] px-6 py-10 md:px-10 md:py-14">
          <SectionHeading
            eyebrow="How it works"
            title="One fixed system of message, proof and conversion."
            body="No scattered activity. We connect positioning, proof and landing pages to a clearer route toward inquiry."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-[28px] border border-[var(--border)] bg-white/70 p-6 transition duration-300 hover:-translate-y-1 hover:bg-white"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[rgba(16,16,16,0.82)]">{pillar.label}</p>
                <h3 className="mt-5 font-[var(--font-display)] text-2xl font-semibold">{pillar.title}</h3>
                <p className="mt-4 text-base leading-7 text-[var(--muted)]">{pillar.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pt-24">
        <SectionHeading
          align="center"
          eyebrow="Packages"
          title="Choose how fast you want to grow"
          body="We keep the homepage intentionally sharp. Open a package and then move to the full offer page."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {packageCards.map((card) => (
            <PackageRevealCard key={card.name} {...card} />
          ))}
        </div>
      </section>

      <section className="section-shell pt-24">
        <div className="relative overflow-hidden rounded-[36px] bg-[var(--dark)] px-6 py-12 text-white md:px-10">
          <div className="pointer-events-none absolute right-5 top-5 select-none opacity-[0.08] md:right-10 md:top-10">
            <BrandLogo variant="mark-blue" alt="" className="w-16 md:w-20" />
          </div>
          <div className="mb-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              Positioning
            </span>
            <span className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              Content
            </span>
            <span className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              Conversion
            </span>
          </div>
          <SectionHeading
            eyebrow="Why it works"
            title="Not random marketing. A system built around results."
            body="We combine positioning, content, ads and conversion focused pages to help construction companies generate more serious inquiries."
            theme="dark"
          />
        </div>
      </section>

      <section className="section-shell pt-24">
        <div className="panel relative overflow-hidden rounded-[36px] px-6 py-10 md:px-10 md:py-12">
          <div className="pointer-events-none absolute right-5 top-5 select-none opacity-[0.06] md:right-10 md:top-10">
            <BrandLogo variant="mark-black" alt="" className="w-16 md:w-20" />
          </div>
          <SectionHeading
            eyebrow="Analysis"
            title="Curious how many inquiries you are missing right now?"
            body="We review your current situation for free and show where the strongest gains are in message, trust and conversion."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/en/contact">Book a free analysis</Button>
            <Button href="/en/packages" variant="secondary">
              View packages
            </Button>
          </div>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--muted)]">
            Built for construction, prefab, window, facade and renovation companies that want a more serious flow of project inquiries.
          </p>
        </div>
      </section>
    </div>
  );
}
