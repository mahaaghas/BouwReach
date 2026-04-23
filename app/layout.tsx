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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18110074128"
          strategy="beforeInteractive"
        />
        <Script id="google-ads-base-tag" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18110074128');
          `}
        </Script>
        <Script id="google-ads-submit-form-event" strategy="beforeInteractive">
          {`
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                'send_to': 'AW-18110074128/NzbcCMi2q6AcEJCax7tD',
                'value': 1.0,
                'currency': 'EUR',
                'event_callback': callback
              });
              return false;
            }

            window.gtag_report_conversion = gtag_report_conversion;
          `}
        </Script>
      </head>
      <body className="font-[var(--font-body)] text-[var(--foreground)] antialiased">
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
