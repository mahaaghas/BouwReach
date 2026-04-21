import { NextResponse } from "next/server";

const FORMBOLD_ENDPOINT = "https://formbold.com/s/9mgLY";

function getSuccessPath(localeValue: FormDataEntryValue | null) {
  return localeValue === "en" ? "/thank-you" : "/bedankt";
}

function getErrorMessage(localeValue: FormDataEntryValue | null) {
  return localeValue === "en"
    ? "Submission failed. Please try again."
    : "Versturen mislukt. Probeer het opnieuw.";
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const locale = formData.get("locale");
  const successPath = getSuccessPath(locale);

  try {
    const response = await fetch(FORMBOLD_ENDPOINT, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
      redirect: "follow",
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: getErrorMessage(locale) },
        { status: 400 }
      );
    }

    const redirectUrl = new URL(successPath, request.url);
    return NextResponse.redirect(redirectUrl, { status: 303 });
  } catch {
    return NextResponse.json(
      { error: getErrorMessage(locale) },
      { status: 500 }
    );
  }
}
