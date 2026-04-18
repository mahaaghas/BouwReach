"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const initialState = {
  naam: "",
  bedrijf: "",
  website: "",
  telefoonnummer: "",
  email: "",
  bericht: "",
  honey: "",
};

type ContactFormProps = {
  locale?: "nl" | "en";
};

export function ContactForm({ locale = "nl" }: ContactFormProps) {
  const router = useRouter();
  const [formState, setFormState] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const isEnglish = locale === "en";
  const isSubmitting = status === "submitting";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formState.naam,
          company: formState.bedrijf,
          website: formState.website,
          phone: formState.telefoonnummer,
          email: formState.email,
          message: formState.bericht,
          locale,
          source: "contact",
          honey: formState.honey,
        }),
      });

      const result = (await response.json()) as { ok: boolean; error?: string };

      if (!response.ok || !result.ok) {
        throw new Error(
          result.error ??
            (isEnglish ? "Your request could not be sent. Please try again." : "Je aanvraag kon niet worden verstuurd. Probeer het opnieuw.")
        );
      }

      setFormState(initialState);
      router.push(isEnglish ? "/en/thank-you" : "/bedankt");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : isEnglish
            ? "Your request could not be sent. Please try again."
            : "Je aanvraag kon niet worden verstuurd. Probeer het opnieuw."
      );
    }
  };

  return (
    <div className="panel rounded-[32px] p-6 md:p-8">
      {isSubmitting ? (
        <div className="rounded-[24px] bg-[var(--dark)] p-8 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--gold)]">
            {isEnglish ? "One moment" : "Even geduld"}
          </p>
          <h2 className="mt-4 font-[var(--font-display)] text-3xl font-semibold">
            {isEnglish ? "We are processing your request." : "We verwerken je aanvraag."}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/74">
            {isEnglish
              ? "You will be redirected straight to the confirmation page."
              : "Je wordt direct doorgestuurd naar de bevestigingspagina."}
          </p>
        </div>
      ) : (
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

          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={formState.honey}
              onChange={(event) => setFormState((current) => ({ ...current, honey: event.target.value }))}
              className="hidden"
              aria-hidden="true"
            />

            <fieldset className="space-y-5">
              <legend className="text-sm font-semibold uppercase tracking-[0.18em] text-[rgba(16,16,16,0.78)]">
                {isEnglish ? "Company details" : "Bedrijfsgegevens"}
              </legend>
              <div className="grid gap-5 md:grid-cols-2">
                <Field
                  label={isEnglish ? "Name" : "Naam"}
                  name="name"
                  autoComplete="name"
                  value={formState.naam}
                  onChange={(value) => setFormState((current) => ({ ...current, naam: value }))}
                />
                <Field
                  label={isEnglish ? "Company" : "Bedrijf"}
                  name="organization"
                  autoComplete="organization"
                  value={formState.bedrijf}
                  onChange={(value) => setFormState((current) => ({ ...current, bedrijf: value }))}
                />
                <Field
                  label={isEnglish ? "Website" : "Website"}
                  name="url"
                  autoComplete="url"
                  value={formState.website}
                  onChange={(value) => setFormState((current) => ({ ...current, website: value }))}
                />
                <Field
                  label={isEnglish ? "Phone number" : "Telefoonnummer"}
                  name="tel"
                  autoComplete="tel"
                  value={formState.telefoonnummer}
                  onChange={(value) => setFormState((current) => ({ ...current, telefoonnummer: value }))}
                />
                <Field
                  label={isEnglish ? "E mail" : "E mail"}
                  name="email"
                  autoComplete="email"
                  type="email"
                  value={formState.email}
                  onChange={(value) => setFormState((current) => ({ ...current, email: value }))}
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
                value={formState.bericht}
                onChange={(value) => setFormState((current) => ({ ...current, bericht: value }))}
              />
            </fieldset>

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
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--dark-soft)]"
              >
                {isEnglish ? "Send request" : "Verstuur aanvraag"}
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
      )}
    </div>
  );
}

type FieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  multiline?: boolean;
  autoComplete?: string;
  className?: string;
};

function Field({ label, name, value, onChange, type = "text", multiline = false, autoComplete, className }: FieldProps) {
  return (
    <label className={className}>
      <span className="mb-2 block text-sm font-semibold text-[var(--foreground)]">{label}</span>
      {multiline ? (
        <textarea
          required
          name={name}
          rows={6}
          minLength={10}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="w-full rounded-[24px] border border-[var(--border)] bg-white px-4 py-4 text-base outline-none transition focus:border-[rgba(17,17,17,0.28)]"
        />
      ) : (
        <input
          required
          name={name}
          autoComplete={autoComplete}
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="w-full rounded-[24px] border border-[var(--border)] bg-white px-4 py-4 text-base outline-none transition focus:border-[rgba(17,17,17,0.28)]"
        />
      )}
    </label>
  );
}
