"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSyncExternalStore } from "react";

const COOKIE_KEY = "bouwreach-cookie-choice";
const COOKIE_EVENT = "bouwreach-cookie-updated";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(COOKIE_EVENT, callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(COOKIE_EVENT, callback);
  };
}

function getSnapshot() {
  if (typeof window === "undefined") {
    return true;
  }

  return window.localStorage.getItem(COOKIE_KEY) !== null;
}

export function CookieBanner() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");
  const hasChoice = useSyncExternalStore(subscribe, getSnapshot, () => true);

  const handleChoice = (choice: "accepted" | "declined") => {
    window.localStorage.setItem(COOKIE_KEY, choice);
    window.dispatchEvent(new Event(COOKIE_EVENT));
  };

  if (hasChoice) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-6 md:right-6">
      <div
        role="dialog"
        aria-live="polite"
        aria-label={isEnglish ? "Cookie preferences" : "Cookievoorkeuren"}
        className="panel mx-auto max-w-5xl rounded-[28px] border-[rgba(18,18,18,0.14)] px-5 py-5 md:px-6"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
              {isEnglish ? "Cookies" : "Cookies"}
            </p>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
              {isEnglish ? (
                <>
                  We only use functional and simple measurement cookies to keep the site working properly and to see
                  which pages are being viewed. Read more on the{" "}
                  <Link href="/en/cookies" className="font-semibold text-[var(--foreground)] underline underline-offset-4">
                    cookie page
                  </Link>{" "}
                  and the{" "}
                  <Link href="/en/privacy" className="font-semibold text-[var(--foreground)] underline underline-offset-4">
                    privacy page
                  </Link>
                  .
                </>
              ) : (
                <>
                  We gebruiken alleen functionele en eenvoudige meetcookies om de website goed te laten werken en te
                  zien welke pagina&apos;s worden bekeken. Meer weten kan op de{" "}
                  <Link href="/cookies" className="font-semibold text-[var(--foreground)] underline underline-offset-4">
                    cookiepagina
                  </Link>{" "}
                  en de{" "}
                  <Link href="/privacy" className="font-semibold text-[var(--foreground)] underline underline-offset-4">
                    privacypagina
                  </Link>
                  .
                </>
              )}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => handleChoice("declined")}
              className="inline-flex rounded-full border border-[var(--border)] bg-white px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:bg-[var(--background)]"
            >
              {isEnglish ? "Necessary only" : "Alleen noodzakelijk"}
            </button>
            <button
              type="button"
              onClick={() => handleChoice("accepted")}
              className="inline-flex rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--dark-soft)]"
            >
              {isEnglish ? "Accept" : "Akkoord"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
