import Image from "next/image";
import { clsx } from "clsx";
import { BrandLogo } from "@/components/brand-logo";
import type { MediaAsset, MediaContentType } from "@/lib/media/types";

type MediaCardProps = {
  asset: MediaAsset;
  priority?: boolean;
  className?: string;
  locale?: "nl" | "en";
  eyebrow?: string;
  title?: string;
  body?: string;
  hideCopy?: boolean;
};

const frameClasses = {
  "minimal-luxury-frame": "bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(246,245,239,0.94))] border-[rgba(16,16,16,0.08)] p-3 md:p-4",
  "editorial-card": "bg-[linear-gradient(180deg,rgba(11,11,11,0.98),rgba(28,28,28,0.96))] border-black/20 p-3 md:p-4 text-white",
  "social-proof-card": "bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(240,240,235,0.92))] border-[rgba(16,16,16,0.1)] p-3 shadow-[0_24px_60px_rgba(16,16,16,0.08)]",
  "vertical-reel-frame": "bg-[linear-gradient(180deg,rgba(11,11,11,1),rgba(32,32,32,0.96))] border-black/20 p-2 text-white",
  "split-comparison-frame": "bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(242,242,236,0.94))] border-[rgba(16,16,16,0.08)] p-3 md:p-4",
  "clean-gallery-tile": "bg-white/92 border-[rgba(16,16,16,0.08)] p-3",
} as const;

function getContentTypeLabel(contentType: MediaContentType, locale: "nl" | "en") {
  const labels = {
    nl: {
      "premium-architectural": "Projectbeeld",
      "product-detail": "Detail",
      "team-process": "Proces",
      "on-site-footage": "Op locatie",
      "testimonial-style": "Klantvertrouwen",
      "before-after": "Voor en na",
      "installation-moment": "Uitvoering",
      "social-proof": "Projectbewijs",
      "raw-ugc-vertical": "Echt beeld",
      "clean-branding-visual": "Projectbeeld",
    },
    en: {
      "premium-architectural": "Project visual",
      "product-detail": "Detail",
      "team-process": "Process",
      "on-site-footage": "On site",
      "testimonial-style": "Client trust",
      "before-after": "Before and after",
      "installation-moment": "Execution",
      "social-proof": "Project proof",
      "raw-ugc-vertical": "Real footage",
      "clean-branding-visual": "Project visual",
    },
  } as const;

  return labels[locale][contentType];
}

function getSafeOverlayTitle(contentType: MediaContentType, locale: "nl" | "en") {
  const titles = {
    nl: {
      "premium-architectural": "Sterk projectbeeld dat direct vertrouwen opbouwt.",
      "product-detail": "Details die kwaliteit en afwerking geloofwaardig maken.",
      "team-process": "Het proces zichtbaar maken zorgt voor extra vertrouwen.",
      "on-site-footage": "",
      "testimonial-style": "",
      "before-after": "",
      "installation-moment": "",
      "social-proof": "",
      "raw-ugc-vertical": "",
      "clean-branding-visual": "Projectbeeld dat je aanbod direct serieuzer positioneert.",
    },
    en: {
      "premium-architectural": "Strong project visuals build trust immediately.",
      "product-detail": "Details make quality and finish believable.",
      "team-process": "Showing the process strengthens trust.",
      "on-site-footage": "",
      "testimonial-style": "",
      "before-after": "",
      "installation-moment": "",
      "social-proof": "",
      "raw-ugc-vertical": "",
      "clean-branding-visual": "Project visuals position the offer more credibly.",
    },
  } as const;

  return titles[locale][contentType];
}

function getDefaultCopy(contentType: MediaContentType, locale: "nl" | "en") {
  const copy = {
    nl: {
      "premium-architectural": {
        title: "Werk dat vertrouwen opbouwt voordat iemand contact opneemt.",
        body: "Strakke projectbeelden ondersteunen je positionering en maken sneller duidelijk dat je voor serieuze opdrachten werkt.",
      },
      "product-detail": {
        title: "Details maken vakwerk geloofwaardig.",
        body: "Goede close-ups helpen bezoekers de kwaliteit van afwerking, materiaal en uitvoering sneller te beoordelen.",
      },
      "team-process": {
        title: "Ook het proces mag vertrouwen opbouwen.",
        body: "Niet alleen het eindresultaat telt. Beeld uit de uitvoering laat zien hoe serieus en zorgvuldig je werkt.",
      },
      "on-site-footage": {
        title: "Echt beeld van locatie en uitvoering geeft direct meer vertrouwen.",
        body: "Projectbeelden vanaf de bouwplaats laten zien dat je geen mooi verhaal verkoopt, maar echt werk levert.",
      },
      "testimonial-style": {
        title: "Social proof verlaagt twijfel bij nieuwe aanvragen.",
        body: "Zichtbaar bewijs uit echte projecten helpt prospects sneller de stap naar contact te zetten.",
      },
      "before-after": {
        title: "Voor en na maakt het resultaat direct tastbaar.",
        body: "Transformaties werken sterk omdat bezoekers meteen zien wat jouw werk in de praktijk oplevert.",
      },
      "installation-moment": {
        title: "Werk in uitvoering laat controle en vakmanschap zien.",
        body: "Installatie en montagebeelden versterken geloofwaardigheid, vooral bij offertes voor grotere projecten.",
      },
      "social-proof": {
        title: "Projectbewijs maakt je aanbod serieuzer.",
        body: "Echte projecten geven context aan je diensten en helpen de juiste klanten sneller door te klikken.",
      },
      "raw-ugc-vertical": {
        title: "Ruw, echt beeld werkt wanneer het de juiste context krijgt.",
        body: "Geen opgeblazen productie. Wel bewijs dat je team echt levert op locatie en in de uitvoering.",
      },
      "clean-branding-visual": {
        title: "Sterke projectpresentatie ondersteunt een scherper aanbod.",
        body: "Goed gekozen beelden helpen je bedrijf rustiger, sterker en betrouwbaarder over te komen.",
      },
    },
    en: {
      "premium-architectural": {
        title: "Work that builds trust before someone gets in touch.",
        body: "Strong project visuals support positioning and make it clear that you handle serious assignments.",
      },
      "product-detail": {
        title: "Details make craftsmanship believable.",
        body: "Good close-ups help visitors judge finish, material quality and execution much faster.",
      },
      "team-process": {
        title: "The process should build trust too.",
        body: "The result matters, but execution footage also shows how seriously and carefully your team works.",
      },
      "on-site-footage": {
        title: "Real footage from site and execution builds trust fast.",
        body: "On-site visuals show that you are not selling a polished story. You are showing real delivery.",
      },
      "testimonial-style": {
        title: "Social proof reduces doubt before the first inquiry.",
        body: "Visible proof from real projects helps prospects move to contact more quickly.",
      },
      "before-after": {
        title: "Before and after makes the result instantly tangible.",
        body: "Transformations are powerful because visitors immediately see the outcome of the work.",
      },
      "installation-moment": {
        title: "Execution footage shows control and craftsmanship.",
        body: "Installation and assembly visuals strengthen credibility, especially for larger projects.",
      },
      "social-proof": {
        title: "Project proof makes the offer feel more serious.",
        body: "Real projects add context to your services and help the right prospects keep moving.",
      },
      "raw-ugc-vertical": {
        title: "Raw footage works when it has the right context.",
        body: "Not inflated production. Just proof that your team delivers in real conditions and real execution.",
      },
      "clean-branding-visual": {
        title: "Strong project presentation supports a sharper offer.",
        body: "Well chosen visuals help the company feel calmer, stronger and more trustworthy.",
      },
    },
  } as const;

  return copy[locale][contentType];
}

export function MediaCard({
  asset,
  priority = false,
  className,
  locale = "nl",
  eyebrow,
  title,
  body,
  hideCopy = false,
}: MediaCardProps) {
  const { classification } = asset;
  const isVideo = asset.kind === "video";
  const isVertical = classification.frameVariant === "vertical-reel-frame";
  const markVariant = classification.frameVariant === "editorial-card" || classification.frameVariant === "vertical-reel-frame" ? "mark-white" : "mark-black";
  const markOpacity = classification.frameVariant === "editorial-card" || classification.frameVariant === "vertical-reel-frame" ? "opacity-80" : "opacity-70";
  const defaultCopy = getDefaultCopy(classification.contentType, locale);
  const label = eyebrow ?? getContentTypeLabel(classification.contentType, locale);
  const safeOverlayTitle = getSafeOverlayTitle(classification.contentType, locale);
  const cardTitle = title ?? defaultCopy.title;
  const cardBody = body ?? defaultCopy.body;

  return (
    <article
      className={clsx(
        "group relative overflow-hidden rounded-[28px] border transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(16,16,16,0.12)]",
        frameClasses[classification.frameVariant],
        className
      )}
    >
      <div className="pointer-events-none absolute right-4 top-4 z-20">
        <BrandLogo variant={markVariant} alt="" className={clsx("w-4 md:w-5", markOpacity)} />
      </div>
      <div className={clsx("relative overflow-hidden rounded-[22px]", isVertical ? "aspect-[9/16]" : "aspect-[4/3] md:aspect-[16/10]")}>
        {isVideo ? (
          <video
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
            autoPlay={classification.homepagePlacement === "hero" || classification.isUgcProof}
            muted
            loop
            playsInline
            preload={priority ? "auto" : "metadata"}
            poster={asset.posterSrc}
            aria-label={asset.alt}
            title={asset.title}
          >
            <source src={asset.src} />
          </video>
        ) : (
          <Image
            src={asset.src}
            alt={asset.alt}
            fill
            unoptimized
            priority={priority}
            sizes={isVertical ? "(max-width: 768px) 100vw, 33vw" : "(max-width: 768px) 100vw, 50vw"}
            className="object-cover transition duration-500 group-hover:scale-[1.02]"
          />
        )}

        {classification.overlay.tone !== "none" ? (
          <div className="pointer-events-none absolute inset-0 flex flex-col justify-between bg-[linear-gradient(180deg,rgba(11,11,11,0.12),transparent_35%,rgba(11,11,11,0.58))] p-4 md:p-5">
            <div className="flex items-start justify-between gap-3">
              <div className="flex flex-wrap gap-2">
                {classification.overlay.eyebrow ? (
                  <span className="rounded-full bg-[rgba(255,255,255,0.9)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--foreground)]">
                    {classification.overlay.eyebrow}
                  </span>
                ) : null}
                {classification.overlay.badge ? (
                  <span className="rounded-full border border-white/20 bg-[rgba(16,16,16,0.66)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                    {classification.overlay.badge}
                  </span>
                ) : null}
              </div>
            </div>
            <div className="space-y-2">
              {classification.overlay.comparison ? (
                <div className="flex gap-2">
                  <span className="rounded-full bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--foreground)]">
                    {classification.overlay.comparison.before}
                  </span>
                  <span className="rounded-full bg-[var(--accent)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--foreground)]">
                    {classification.overlay.comparison.after}
                  </span>
                </div>
              ) : null}
              {safeOverlayTitle ? <p className="max-w-[22rem] text-sm font-semibold leading-6 text-white md:text-base">{safeOverlayTitle}</p> : null}
            </div>
          </div>
        ) : null}
      </div>

      {!hideCopy ? (
        <div className={clsx("pt-4", classification.frameVariant === "editorial-card" ? "text-white" : "text-[var(--foreground)]")}>
          <p
            className={clsx(
              "text-xs font-semibold uppercase tracking-[0.18em]",
              classification.frameVariant === "editorial-card" ? "text-white/68" : "text-[rgba(16,16,16,0.72)]"
            )}
          >
            {label}
          </p>
          <h3 className="mt-2 text-lg font-semibold leading-7">{cardTitle}</h3>
          <p className={clsx("mt-2 text-sm leading-6", classification.frameVariant === "editorial-card" ? "text-white/70" : "text-[var(--muted)]")}>
            {cardBody}
          </p>
        </div>
      ) : null}
    </article>
  );
}
