import type { Metadata } from "next";

const SITE_NAME = "BouwReach";
const BASE_URL = "https://bouwreach.nl";

type CreateMetadataInput = {
  title: string;
  description: string;
  pathname: string;
  locale?: "nl" | "en";
  noIndex?: boolean;
};

export function createMetadata({
  title,
  description,
  pathname,
  locale = "nl",
  noIndex = false,
}: CreateMetadataInput): Metadata {
  const canonical = new URL(pathname, BASE_URL).toString();
  const languageAlternates =
    locale === "en"
      ? {
          en: canonical,
          nl: canonical.replace("/en", "") || BASE_URL,
        }
      : {
          nl: canonical,
          en: new URL(pathname === "/" ? "/en" : `/en${pathname}`, BASE_URL).toString(),
        };

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: languageAlternates,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: locale === "en" ? "en_GB" : "nl_NL",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },
  };
}
