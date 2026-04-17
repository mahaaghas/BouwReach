import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

const STORAGE_DIRECTORY = path.join(process.cwd(), "data");
const STORAGE_FILE = path.join(STORAGE_DIRECTORY, "contact-submissions.jsonl");

type SubmissionPayload = {
  name?: string;
  company?: string;
  website?: string;
  phone?: string;
  email?: string;
  message?: string;
  locale?: "nl" | "en";
  source?: "contact" | "cta";
  honey?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as SubmissionPayload;
    const name = payload.name?.trim() ?? "";
    const email = payload.email?.trim() ?? "";
    const message = payload.message?.trim() ?? "";
    const locale = payload.locale === "en" ? "en" : "nl";
    const source = payload.source === "cta" ? "cta" : "contact";

    if (payload.honey?.trim()) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !email) {
      return NextResponse.json(
        {
          ok: false,
          error:
            locale === "en"
              ? "Name and email are required."
              : "Naam en e mail zijn verplicht.",
        },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        {
          ok: false,
          error:
            locale === "en"
              ? "Please enter a valid email address."
              : "Vul een geldig e mailadres in.",
        },
        { status: 400 }
      );
    }

    if (source === "contact" && message.length < 10) {
      return NextResponse.json(
        {
          ok: false,
          error:
            locale === "en"
              ? "Please add a short message so we can prepare properly."
              : "Voeg een kort bericht toe zodat we ons goed kunnen voorbereiden.",
        },
        { status: 400 }
      );
    }

    fs.mkdirSync(STORAGE_DIRECTORY, { recursive: true });
    fs.appendFileSync(
      STORAGE_FILE,
      `${JSON.stringify({
        submittedAt: new Date().toISOString(),
        source,
        locale,
        name,
        company: payload.company?.trim() ?? "",
        website: payload.website?.trim() ?? "",
        phone: payload.phone?.trim() ?? "",
        email,
        message,
      })}\n`,
      "utf8"
    );

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error: "Submission failed.",
      },
      { status: 500 }
    );
  }
}
