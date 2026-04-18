import { SectionHeading } from "@/components/section-heading";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Cookies",
  description: "See which functional and basic measurement cookies BouwReach uses and how you manage your choice.",
  pathname: "/en/cookies",
  locale: "en",
});

const sections = [
  {
    title: "Functional cookies",
    body: "These cookies are required to keep the website working properly. Think of remembering your cookie choice or loading parts of the site correctly.",
    dark: true,
  },
  {
    title: "Analytics cookies",
    body: "BouwReach may use limited analytics cookies to understand which pages are visited and where visitors drop off. That helps improve the site technically and commercially.",
  },
  {
    title: "Marketing cookies",
    body: "Marketing or retargeting cookies are only used if they are deliberately added and if the chosen cookie status allows them. They are not switched on by default without a clear reason.",
  },
  {
    title: "Managing your choice",
    body: "Your choice is stored locally on your device. You can change it later by removing cookies in your browser or by giving consent again if the banner reappears.",
  },
  {
    title: "Retention period",
    body: "Retention depends on the purpose of the cookie. Functional cookies usually remain active only as long as needed for normal site use. Analytics cookies are used in a limited way and are not kept longer than necessary.",
  },
  {
    title: "Questions about cookies",
    body: "If you have questions about cookie usage on this website, contact us through the contact page. We can explain which cookies are active and why.",
  },
];

export default function EnglishCookiesPage() {
  return (
    <div className="section-shell pb-8 pt-10">
      <section className="panel rounded-[40px] px-6 py-12 md:px-10 md:py-16">
        <SectionHeading
          eyebrow="Cookies"
          title="Cookie statement"
          body="BouwReach only uses cookies that are needed for a working website and for limited measurement and optimization. Below you can see which types of cookies may be used."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {sections.map((section) => (
            <article
              key={section.title}
              className={
                section.dark
                  ? "rounded-[28px] bg-[var(--dark)] p-6 text-white"
                  : "rounded-[28px] border border-[var(--border)] bg-white/80 p-6"
              }
            >
              <h2 className="font-[var(--font-display)] text-2xl font-semibold">{section.title}</h2>
              <p className={section.dark ? "mt-4 text-sm leading-6 text-white/74" : "mt-4 text-base leading-7 text-[var(--muted)]"}>{section.body}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
