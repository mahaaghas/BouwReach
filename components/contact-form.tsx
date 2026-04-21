"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

type ContactFormProps = {
  locale?: "nl" | "en";
};

export function ContactForm({ locale = "nl" }: ContactFormProps) {
  const isEnglish = locale === "en";
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("https://formbold.com/s/9mgLY", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(
          isEnglish
            ? "Submission failed. Please try again."
            : "Versturen mislukt. Probeer het opnieuw."
        );
      }

      form.reset();
      router.push("/thank-you");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : isEnglish
            ? "Submission failed. Please try again."
            : "Versturen mislukt. Probeer het opnieuw."
      );
    } finally {
      setStatus((current) => (current === "error" ? "error" : "idle"));
    }
  };

  return (
    <div className="panel rounded-[32px] p-6 md:p-8">
      <div className="space-y-6">
        <div className="rounded-[24px] border border-[var(--border)] bg-[rgba(18,18,18,0.03)] p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[rgba(16,16,16,0.78)]">
            {isEnglish ? "Intake" : "Intake"}
          </p>
          <h2 className="mt-3 text-2xl font-semibold">
            {isEnglish ? "Tell us who you are and where you want more inquiries." : "Vertel wie je bent en waar je meer aanvragen wilt."}
          </h2>
          <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
            {isEnglish
              ? "We use this to understand your company, your current sales situation and whether a free analysis makes sense."
              : "Dit gebruiken we om je bedrijf, je huidige situatie en de juiste volgende stap goed te beoordelen."}
          </p>
        </div>

        <form action="https://formbold.com/s/9mgLY" method="POST" className="space-y-6" onSubmit={handleSubmit}>
          <fieldset className="space-y-5">
            <legend className="text-sm font-semibold uppercase tracking-[0.18em] text-[rgba(16,16,16,0.78)]">
              {isEnglish ? "Company details" : "Bedrijfsgegevens"}
            </legend>
            <div className="grid gap-5 md:grid-cols-2">
              <Field
                label={isEnglish ? "Name" : "Naam"}
                name="name"
                autoComplete="name"
                placeholder="Full Name"
              />
              <Field
                label={isEnglish ? "Phone number" : "Telefoonnummer"}
                name="phone"
                autoComplete="tel"
                type="tel"
                placeholder="Phone"
                required={false}
              />
              <Field
                label={isEnglish ? "E mail" : "E mail"}
                name="email"
                autoComplete="email"
                type="email"
                placeholder="Email"
                className="md:col-span-2"
              />
            </div>
          </fieldset>

          <fieldset className="space-y-5">
            <legend className="text-sm font-semibold uppercase tracking-[0.18em] text-[rgba(16,16,16,0.78)]">
              {isEnglish ? "Current situation" : "Huidige situatie"}
            </legend>
            <Field
              label={
                isEnglish
                  ? "What do you offer, where do you want more inquiries, and what is not working right now?"
                  : "Wat bied je aan, waar wil je meer aanvragen uit halen en wat werkt nu nog niet goed?"
              }
              name="message"
              multiline
              placeholder="Your message"
            />
          </fieldset>

          <input type="hidden" name="_redirect" value="https://bouwreach.nl/thank-you" />
          <input type="hidden" name="_subject" value="New BouwReach Lead" />

          <div className="rounded-[24px] border border-[rgba(18,18,18,0.08)] bg-white/70 p-5">
            <p className="text-sm font-semibold text-[var(--foreground)]">
              {isEnglish ? "What happens after sending" : "Wat er gebeurt na versturen"}
            </p>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
              {isEnglish
                ? "We review your request, check whether there is a strong fit, and respond with the most logical next step."
                : "We bekijken je aanvraag, checken of er een sterke match is en reageren met de meest logische volgende stap."}
            </p>
          </div>

          {status === "error" ? (
            <p className="rounded-[20px] border border-[rgba(168,34,34,0.18)] bg-[rgba(168,34,34,0.06)] px-4 py-3 text-sm leading-6 text-[rgb(128,34,34)]">
              {errorMessage}
            </p>
          ) : null}

          <div className="flex flex-col gap-4">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex w-full items-center justify-center rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--dark-soft)] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "submitting"
                ? isEnglish
                  ? "Sending"
                  : "Versturen"
                : isEnglish
                  ? "Send request"
                  : "Verstuur aanvraag"}
            </button>
            <p className="text-sm leading-6 text-[var(--muted)]">
              {isEnglish ? (
                <>
                  By submitting, you agree to our{" "}
                  <Link href="/en/privacy" className="font-semibold text-[var(--foreground)] underline underline-offset-4">
                    privacy page
                  </Link>
                  . We only use your details to follow up your request.
                </>
              ) : (
                <>
                  Door te versturen ga je akkoord met onze{" "}
                  <Link href="/privacy" className="font-semibold text-[var(--foreground)] underline underline-offset-4">
                    privacypagina
                  </Link>
                  . We gebruiken je gegevens alleen om je aanvraag op te volgen.
                </>
              )}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  multiline?: boolean;
  autoComplete?: string;
  className?: string;
  placeholder?: string;
  required?: boolean;
};

function Field({ label, name, type = "text", multiline = false, autoComplete, className, placeholder, required = true }: FieldProps) {
  return (
    <label className={className}>
      <span className="mb-2 block text-sm font-semibold text-[var(--foreground)]">{label}</span>
      {multiline ? (
        <textarea
          required={required}
          name={name}
          rows={6}
          minLength={10}
          placeholder={placeholder}
          className="w-full rounded-[24px] border border-[var(--border)] bg-white px-4 py-4 text-base outline-none transition focus:border-[rgba(17,17,17,0.28)]"
        />
      ) : (
        <input
          required={required}
          name={name}
          autoComplete={autoComplete}
          type={type}
          placeholder={placeholder}
          className="w-full rounded-[24px] border border-[var(--border)] bg-white px-4 py-4 text-base outline-none transition focus:border-[rgba(17,17,17,0.28)]"
        />
      )}
    </label>
  );
}
