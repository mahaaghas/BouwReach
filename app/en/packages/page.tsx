import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { createMetadata } from "@/lib/seo";
import { clsx } from "clsx";

export const metadata = createMetadata({
  title: "Packages",
  description:
    "Explore BouwReach packages for construction, prefab, facade, window, and renovation companies that want more project inquiries.",
  pathname: "/en/packages",
  locale: "en",
});

const packages = [
  {
    name: "Starter Visibility",
    label: "Professional presence",
    description:
      "Perfect for companies that want a professional online presence and consistent visibility.",
    includes: [
      "Website polish and optimization",
      "Basic SEO optimization",
      "Monthly SEO health check",
      "1 SEO blog article per month",
      "Google Business Profile optimization",
      "1 branded social media post per week",
      "Meta/Facebook ad management",
      "Monthly performance report",
      "WhatsApp and lead form optimization",
    ],
    bestFor: "Small contractors, window and door frame companies, and local renovation businesses.",
  },
  {
    name: "Growth Package",
    label: "Lead generation and ranking growth",
    badge: "Most chosen",
    description:
      "For companies ready to actively generate leads and improve Google rankings.",
    includes: [
      "Everything in Starter",
      "Advanced SEO optimization",
      "Keyword and competitor analysis",
      "2 SEO blog articles per month",
      "Google Ads campaign setup and optimization",
      "Meta Ads campaign optimization",
      "Retargeting setup",
      "Landing page optimization",
      "Conversion tracking setup",
      "2 branded posts per week",
      "Monthly strategy improvements",
      "Lead funnel improvements",
    ],
    bestFor: "Companies that want more project inquiries and stronger online positioning.",
  },
  {
    name: "Authority Package",
    label: "Full marketing system",
    description:
      "A full marketing system for serious construction and prefab companies.",
    includes: [
      "Everything in Growth",
      "Full website conversion optimization",
      "Premium SEO strategy",
      "Technical SEO improvements",
      "4 SEO blog articles per month",
      "Advanced Google Ads scaling and optimization",
      "Advanced Meta campaign management",
      "Competitor monitoring",
      "CRM and automation integration",
      "Lead nurturing workflows",
      "Monthly marketing strategy session",
      "3 posts per week",
      "Professional content planning",
      "Priority support",
    ],
    bestFor: "Companies that want aggressive growth and market authority.",
  },
];

const setupNotes = [
  {
    title: "Professional Onboarding",
    body: "To ensure optimal performance and accurate tracking, companies without existing marketing infrastructure may require an initial onboarding and setup phase.",
    investment: "One-time setup investment: €1250",
    includes:
      "This may include Google Ads, Meta Business Manager, Analytics, conversion tracking, automation systems, newsletter setup, CRM connections, and campaign infrastructure.",
  },
  {
    title: "Branding & Visual Identity",
    body: "Companies without existing branding assets may require additional branding development before campaigns can launch effectively.",
    includes:
      "This can include logo design, visual identity, templates, website styling, and branded materials.",
  },
];

const addOns = [
  "Website redesign",
  "Landing pages",
  "Recruitment campaigns",
  "Vehicle wrap design",
  "Brochure design",
  "Email marketing automation",
  "WhatsApp automation",
  "Google review campaigns",
  "AI chatbot setup",
];

export default function EnglishPackagesPage() {
  return (
    <div className="section-shell pb-8 pt-10">
      <section className="accent-grid panel relative overflow-hidden rounded-[40px] px-6 py-12 md:px-10 md:py-16">
        <div className="pointer-events-none absolute right-5 top-5 select-none opacity-[0.07] md:right-10 md:top-10">
          <BrandLogo variant="mark-black" alt="" className="w-20 md:w-24" />
        </div>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Packages"
            title="Choose the package that fits your growth phase"
            body="Clear packages for companies that want more serious project inquiries. No surprises. No scattered marketing tasks. Just a clearer route to better inquiries."
          />
          <div className="rounded-[28px] bg-[var(--dark)] px-6 py-5 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--gold)]">Intro offer until June 15</p>
            <p className="mt-2 text-sm text-white/74">Limited number of spots</p>
          </div>
        </div>
      </section>

      <section className="pt-10">
        <div className="grid gap-6 lg:grid-cols-3">
          {packages.map((item) => (
            <article
              key={item.name}
              className={clsx(
                "panel relative overflow-hidden rounded-[32px] p-6 md:p-8",
                item.name === "Growth Package" && "border-[rgba(186,74,26,0.28)] bg-[linear-gradient(180deg,rgba(255,250,244,0.96),rgba(255,244,234,0.92))]"
              )}
            >
              <div className="pointer-events-none absolute right-6 top-6 opacity-70">
                <BrandLogo variant="mark-black" alt="" className="w-4 md:w-5" />
              </div>
              <div className="flex items-center justify-between gap-4">
                <h2 className="font-[var(--font-display)] text-3xl font-semibold">{item.name}</h2>
                {item.badge ? (
                  <span className="rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                    {item.badge}
                  </span>
                ) : null}
              </div>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-[rgba(16,16,16,0.72)]">{item.label}</p>
              <p className="mt-4 text-base leading-7 text-[var(--muted)]">{item.description}</p>
              <div className="mt-6 rounded-[24px] bg-[rgba(18,18,18,0.04)] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">Includes</p>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-[var(--foreground)]">
                  {item.includes.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="mt-[0.65rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-6 text-sm leading-6 text-[var(--muted)]">
                <span className="font-semibold text-[var(--foreground)]">Best for: </span>
                {item.bestFor}
              </p>
              <div className="mt-8">
                <Button href="/en/contact">Book a free analysis</Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="pt-10">
        <div className="panel relative overflow-hidden rounded-[36px] px-6 py-10 md:px-10 md:py-12">
          <div className="pointer-events-none absolute right-5 top-5 select-none opacity-[0.06] md:right-10 md:top-10">
            <BrandLogo variant="mark-black" alt="" className="w-16 md:w-20" />
          </div>
          <SectionHeading
            eyebrow="Add-ons"
            title="Optional services when your campaign needs more"
            body="These can be added when a company needs extra content, automation, recruitment support, or a stronger brand system around the core package."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {addOns.map((addOn) => (
              <div key={addOn} className="rounded-[18px] border border-[var(--border)] bg-white/70 px-4 py-3 text-sm font-semibold text-[var(--foreground)]">
                {addOn}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-10">
        <div className="grid gap-6 lg:grid-cols-2">
          {setupNotes.map((note) => (
            <article key={note.title} className="panel relative overflow-hidden rounded-[32px] p-6 md:p-8">
              <div className="pointer-events-none absolute right-6 top-6 opacity-60">
                <BrandLogo variant="mark-black" alt="" className="w-4 md:w-5" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Before launch</p>
              <h2 className="mt-4 font-[var(--font-display)] text-3xl font-semibold">{note.title}</h2>
              <p className="mt-4 text-base leading-7 text-[var(--muted)]">{note.body}</p>
              {note.investment ? (
                <p className="mt-5 rounded-[20px] bg-[rgba(18,18,18,0.04)] px-4 py-3 text-sm font-semibold text-[var(--foreground)]">
                  {note.investment}
                </p>
              ) : null}
              <p className="mt-5 text-sm leading-6 text-[var(--muted)]">{note.includes}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pt-10">
        <div className="panel relative overflow-hidden rounded-[36px] px-6 py-10 md:px-10 md:py-12">
          <div className="pointer-events-none absolute right-5 top-5 select-none opacity-[0.06] md:right-10 md:top-10">
            <BrandLogo variant="mark-black" alt="" className="w-16 md:w-20" />
          </div>
          <SectionHeading
            eyebrow="Advice"
            title="Not sure which package fits?"
            body="Then we do not start with a sales pitch. We start by reviewing your current position, your inquiry flow and where the biggest gains are."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/en/contact">Book a free analysis</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
