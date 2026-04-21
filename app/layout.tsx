import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { CookieBanner } from "@/components/cookie-banner";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: {
    default: "BouwReach",
    template: "%s | BouwReach",
  },
  description:
    "BouwReach helpt bouw, prefab, kozijnen en renovatiebedrijven in Nederland aan meer projectaanvragen.",
  metadataBase: new URL("https://bouwreach.nl"),
  applicationName: "BouwReach",
  openGraph: {
    siteName: "BouwReach",
    type: "website",
    locale: "nl_NL",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className="font-[var(--font-body)] text-[var(--foreground)] antialiased">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18110074128"
          strategy="beforeInteractive"
        />
        <Script id="google-ads-gtag" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18110074128');
          `}
        </Script>
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_top,rgba(17,17,17,0.11),transparent_54%)]" />
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <CookieBanner />
        </div>
      </body>
    </html>
  );
}
