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
    name: "Basic",
    price: "€470 per month",
    previousPrice: "Was €750",
    label: "For companies that want to get started",
    content: "1 video",
    ads: "1 campaign",
    pages: "none",
    leadFlow: "basic optimization",
    retargeting: "no",
    optimisation: "light",
    support: "standard",
    description:
      "For companies that want to take the first serious step toward predictable inquiry generation.",
  },
  {
    name: "Growth",
    price: "€750 per month",
    previousPrice: "Was €1,150",
    label: "For consistent inquiries",
    badge: "Most chosen",
    content: "3 videos",
    ads: "1 to 2 campaigns",
    pages: "1 custom landing page per month",
    leadFlow: "optimized",
    retargeting: "no",
    optimisation: "monthly",
    support: "standard",
    description:
      "For companies that want to move from occasional inquiries to a steadier flow of serious project opportunities.",
  },
  {
    name: "Scale",
    price: "€1,250 per month",
    previousPrice: "Was €1,850",
    label: "For companies that want to scale up",
    content: "6 videos",
    ads: "multiple campaigns",
    pages: "3 custom landing pages per month",
    leadFlow: "fully set up",
    retargeting: "yes",
    optimisation: "weekly",
    support: "priority",
    description:
      "For companies that want faster growth across multiple services, regions or markets with a stronger system behind it.",
  },
];

const comparisonRows = [
  { key: "content", label: "Inquiry content per month" },
  { key: "ads", label: "Advertising" },
  { key: "pages", label: "Inquiry pages per month" },
  { key: "leadFlow", label: "Lead flow" },
  { key: "retargeting", label: "Retargeting" },
  { key: "optimisation", label: "Optimization" },
  { key: "support", label: "Support" },
] as const;

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
                item.name === "Growth" && "border-[rgba(186,74,26,0.28)] bg-[linear-gradient(180deg,rgba(255,250,244,0.96),rgba(255,244,234,0.92))]"
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
              <p className="mt-4 text-lg font-semibold">{item.price}</p>
              <p className="mt-1 text-sm text-[var(--muted)]">{item.previousPrice}</p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-[rgba(16,16,16,0.72)]">{item.label}</p>
              <p className="mt-4 text-base leading-7 text-[var(--muted)]">{item.description}</p>
              <div className="mt-6 rounded-[24px] bg-[rgba(18,18,18,0.04)] p-4 text-sm leading-6 text-[var(--foreground)]">
                <p>Content: {item.content}</p>
                <p>Advertising: {item.ads}</p>
                <p>Lead flow: {item.leadFlow}</p>
              </div>
              <div className="mt-8">
                <Button href="/en/contact">Book a free analysis</Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="pt-10">
        <div className="overflow-hidden rounded-[36px] border border-[var(--border)] bg-white shadow-[0_28px_70px_rgba(17,17,17,0.08)]">
          <div className="grid gap-4 border-b border-[var(--border)] bg-[rgba(18,18,18,0.03)] p-5 md:hidden">
            {packages.map((item) => (
              <article
                key={`${item.name}-mobile`}
                className={clsx(
                  "relative overflow-hidden rounded-[26px] border border-[var(--border)] bg-white p-5",
                  item.name === "Growth" && "border-[rgba(195,79,28,0.24)] bg-[rgba(195,79,28,0.05)]"
                )}
              >
                <div className="pointer-events-none absolute right-5 top-5 opacity-70">
                  <BrandLogo variant="mark-black" alt="" className="w-4" />
                </div>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-[var(--font-display)] text-2xl font-semibold">{item.name}</p>
                    <p className="mt-2 text-base font-semibold">{item.price}</p>
                    <p className="text-sm text-[var(--muted)]">{item.previousPrice}</p>
                  </div>
                  {item.badge ? (
                    <span className="rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                      {item.badge}
                    </span>
                  ) : null}
                </div>
                <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{item.label}</p>
                <div className="mt-5 space-y-2 text-sm leading-6 text-[var(--foreground)]">
                  <p>Inquiry content per month: {item.content}</p>
                  <p>Advertising: {item.ads}</p>
                  <p>Inquiry pages per month: {item.pages}</p>
                  <p>Lead flow: {item.leadFlow}</p>
                  <p>Retargeting: {item.retargeting}</p>
                  <p>Optimization: {item.optimisation}</p>
                  <p>Support: {item.support}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="hidden grid-cols-4 border-b border-[var(--border)] bg-[var(--dark)] text-white md:grid">
            <div className="px-4 py-5 text-sm font-semibold uppercase tracking-[0.2em] text-white/56 md:px-6">Comparison</div>
            {packages.map((item) => (
              <div key={item.name} className={clsx("px-4 py-5 md:px-6", item.name === "Growth" && "bg-white text-[var(--foreground)]")}>
                {item.badge ? (
                  <span className="mb-3 inline-flex rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                    {item.badge}
                  </span>
                ) : null}
                <p className="font-[var(--font-display)] text-2xl font-semibold">{item.name}</p>
                <p className="mt-3 text-lg font-semibold">{item.price}</p>
                <p className="mt-1 text-sm opacity-70">{item.previousPrice}</p>
                <p className="mt-4 max-w-[14rem] text-sm leading-6 opacity-80">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="hidden md:block">
            {comparisonRows.map((row, index) => (
              <div key={row.key} className={clsx("grid grid-cols-4 border-b border-[var(--border)]", index === comparisonRows.length - 1 && "border-b-0")}>
                <div className="px-4 py-5 text-sm font-semibold text-[var(--foreground)] md:px-6">{row.label}</div>
                {packages.map((item) => (
                  <div
                    key={`${item.name}-${row.key}`}
                    className={clsx(
                      "px-4 py-5 text-sm leading-6 text-[var(--muted)] md:px-6",
                      item.name === "Growth" && "bg-[rgba(186,74,26,0.05)] text-[var(--foreground)]"
                    )}
                  >
                    {item[row.key]}
                  </div>
                ))}
              </div>
            ))}
          </div>
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
