"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type CtaInlineFormProps = {
  locale?: "nl" | "en";
};

export function CtaInlineForm({ locale = "nl" }: CtaInlineFormProps) {
  const router = useRouter();
  const isEnglish = locale === "en";
  const [formState, setFormState] = useState({ name: "", email: "", honey: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

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
          name: formState.name,
          email: formState.email,
          locale,
          source: "cta",
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

      setFormState({ name: "", email: "", honey: "" });
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
    <form onSubmit={handleSubmit} className="rounded-[28px] bg-white/8 p-5 backdrop-blur">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/64">
        {isEnglish ? "Quick request" : "Snelle aanvraag"}
      </p>
      <div className="mt-4 space-y-3">
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={formState.honey}
          onChange={(event) => setFormState((current) => ({ ...current, honey: event.target.value }))}
          className="hidden"
          aria-hidden="true"
        />
        <input
          required
          name="name"
          autoComplete="name"
          value={formState.name}
          onChange={(event) => setFormState((current) => ({ ...current, name: event.target.value }))}
          placeholder={isEnglish ? "Name" : "Naam"}
          className="w-full rounded-full border border-white/14 bg-white px-4 py-3 text-sm text-[var(--foreground)] outline-none"
        />
        <input
          required
          name="email"
          autoComplete="email"
          type="email"
          value={formState.email}
          onChange={(event) => setFormState((current) => ({ ...current, email: event.target.value }))}
          placeholder={isEnglish ? "E mail" : "E mail"}
          className="w-full rounded-full border border-white/14 bg-white px-4 py-3 text-sm text-[var(--foreground)] outline-none"
        />
        {status === "error" ? <p className="text-xs leading-5 text-[#ffdddd]">{errorMessage}</p> : null}
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:bg-[var(--accent-strong)]"
        >
          {status === "submitting"
            ? isEnglish
              ? "Sending"
              : "Versturen"
            : isEnglish
              ? "Book a free analysis"
              : "Plan een gratis analyse"}
        </button>
      </div>
      <p className="mt-3 text-xs leading-5 text-white/60">
        {isEnglish
          ? "We contact you quickly with the best next step for your situation."
          : "We nemen snel contact op met de beste volgende stap voor jouw situatie."}
      </p>
    </form>
  );
}
