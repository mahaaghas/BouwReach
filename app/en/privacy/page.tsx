import { SectionHeading } from "@/components/section-heading";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Privacy",
  description: "Read how BouwReach uses, stores, and protects personal data after an inquiry.",
  pathname: "/en/privacy",
  locale: "en",
});

const sections = [
  {
    title: "Data controller",
    body: "BouwReach is responsible for the processing of personal data submitted through this website. This privacy statement applies to inquiries, contact requests and basic website usage on bouwreach.nl.",
  },
  {
    title: "Which data we process",
    body: "Through the contact form we process your name, company name, website, phone number, e mail address and the contents of your message. When you use the website, limited functional and analytical data may also be processed to keep the site working and improve it.",
  },
  {
    title: "Why we process this data",
    body: "We only use personal data to follow up inquiries, contact you, assess the relevance of a free analysis, prepare services and handle normal commercial communication about a potential collaboration.",
  },
  {
    title: "Legal basis",
    body: "BouwReach processes personal data on the basis of legitimate interest and on the basis of your own inquiry or contact request. Without this information, we cannot properly assess or follow up your request.",
  },
  {
    title: "Retention periods",
    body: "Inquiry data is not stored longer than necessary for follow up, internal assessment and normal commercial correspondence. When data is no longer relevant for contact or collaboration, it is removed or anonymized.",
  },
  {
    title: "Sharing with third parties",
    body: "Data is not sold. It is only shared with parties that are necessary for hosting, forms, website management or communication, and only to the extent needed to keep the website and follow up functioning properly.",
  },
  {
    title: "Security",
    body: "BouwReach takes appropriate technical and organizational measures to protect personal data against loss, misuse or unauthorized access. This includes limited access, secure hosting and careful handling of inquiries.",
  },
  {
    title: "Your rights",
    body: "You can request access, correction, deletion or restriction of your personal data. You can also object to processing. For these requests, contact us through the contact page.",
  },
  {
    title: "Questions or requests",
    body: "If you have privacy questions or want to submit a request about your data, use the contact page. Clearly state the type of request so we can help you faster.",
  },
];

export default function EnglishPrivacyPage() {
  return (
    <div className="section-shell pb-8 pt-10">
      <section className="panel rounded-[40px] px-6 py-12 md:px-10 md:py-16">
        <SectionHeading
          eyebrow="Privacy"
          title="Privacy statement"
          body="BouwReach handles personal data carefully and as minimally as possible. Below you can see which data is used, why it is used and how to submit a request."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {sections.map((section) => (
            <article key={section.title} className="rounded-[28px] border border-[var(--border)] bg-white/80 p-6">
              <h2 className="font-[var(--font-display)] text-2xl font-semibold">{section.title}</h2>
              <p className="mt-4 text-base leading-7 text-[var(--muted)]">{section.body}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
