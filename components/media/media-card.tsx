import Image from "next/image";
import { clsx } from "clsx";
import { BrandLogo } from "@/components/brand-logo";
import type { MediaAsset } from "@/lib/media/types";

type MediaCardProps = {
  asset: MediaAsset;
  priority?: boolean;
  className?: string;
};

const frameClasses = {
  "minimal-luxury-frame": "bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(246,245,239,0.94))] border-[rgba(16,16,16,0.08)] p-3 md:p-4",
  "editorial-card": "bg-[linear-gradient(180deg,rgba(11,11,11,0.98),rgba(28,28,28,0.96))] border-black/20 p-3 md:p-4 text-white",
  "social-proof-card": "bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(240,240,235,0.92))] border-[rgba(16,16,16,0.1)] p-3 shadow-[0_24px_60px_rgba(16,16,16,0.08)]",
  "vertical-reel-frame": "bg-[linear-gradient(180deg,rgba(11,11,11,1),rgba(32,32,32,0.96))] border-black/20 p-2 text-white",
  "split-comparison-frame": "bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(242,242,236,0.94))] border-[rgba(16,16,16,0.08)] p-3 md:p-4",
  "clean-gallery-tile": "bg-white/92 border-[rgba(16,16,16,0.08)] p-3",
} as const;

export function MediaCard({ asset, priority = false, className }: MediaCardProps) {
  const { classification } = asset;
  const isVideo = asset.kind === "video";
  const isVertical = classification.frameVariant === "vertical-reel-frame";
  const markVariant = classification.frameVariant === "editorial-card" || classification.frameVariant === "vertical-reel-frame" ? "mark-white" : "mark-black";
  const markOpacity = classification.frameVariant === "editorial-card" || classification.frameVariant === "vertical-reel-frame" ? "opacity-80" : "opacity-70";

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
          <div className="pointer-events-none absolute inset-0 flex flex-col justify-between bg-[linear-gradient(180deg,rgba(11,11,11,0.12),transparent_35%,rgba(11,11,11,0.68))] p-4 md:p-5">
            <div className="flex items-start justify-between gap-3">
              <div className="flex flex-wrap gap-2">
                {classification.overlay.eyebrow ? (
                  <span className="rounded-full bg-[rgba(255,255,255,0.88)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--foreground)]">
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
              {classification.overlay.title ? (
                <p className="max-w-[22rem] text-sm font-semibold leading-6 text-white md:text-base">{classification.overlay.title}</p>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>

      <div className={clsx("pt-4", classification.frameVariant === "editorial-card" ? "text-white" : "text-[var(--foreground)]")}>
        <p
          className={clsx(
            "text-xs font-semibold uppercase tracking-[0.18em]",
            classification.frameVariant === "editorial-card" ? "text-white/68" : "text-[rgba(16,16,16,0.72)]"
          )}
        >
          {asset.classification.contentType.replace(/-/g, " ")}
        </p>
        <h3 className="mt-2 text-lg font-semibold leading-7">{asset.title}</h3>
        <p className={clsx("mt-2 text-sm leading-6", classification.frameVariant === "editorial-card" ? "text-white/70" : "text-[var(--muted)]")}>
          {asset.alt}
        </p>
      </div>
    </article>
  );
}
