import { classifyMedia, deriveAltText } from "@/lib/media/classifier";
import { mediaManifest } from "@/lib/media/manifest";
import type { HomepagePlacement, MediaAsset, MediaSidecar, MediaSourceGroup } from "@/lib/media/types";

let cachedAssets: MediaAsset[] | null = null;
let cachedHomepageCollections: ReturnType<typeof buildHomepageMediaCollections> | null = null;

function sourceGroupFromPath(filePath: string): MediaSourceGroup {
  return filePath.includes("/ugc/") ? "ugc" : "visual";
}

function inferPosterSrc(src: string, sourceGroup: MediaSourceGroup) {
  const basename = src.replace(/\.[^.]+$/i, "").split("/").pop();
  if (!basename) {
    return undefined;
  }

  const candidateBase =
    sourceGroup === "visual" ? `/media/visual/pictures/${basename}` : `/media/ugc/pictures/${basename}`;

  const match = mediaManifest.find(
    (entry) =>
      entry.kind === "image" &&
      (entry.src === `${candidateBase}.jpg` ||
        entry.src === `${candidateBase}.jpeg` ||
        entry.src === `${candidateBase}.png` ||
        entry.src === `${candidateBase}.webp` ||
        entry.src === `${candidateBase}.avif`)
  );

  return match?.src;
}

function createAsset(entry: (typeof mediaManifest)[number]): MediaAsset {
  const sidecar: MediaSidecar | undefined = undefined;
  const sourceGroup = sourceGroupFromPath(entry.folderPath);
  const alt = deriveAltText(entry.filename, sidecar);
  const classification = classifyMedia({
    alt,
    filename: entry.filename,
    folderPath: entry.folderPath,
    kind: entry.kind,
    sourceGroup,
    sidecar,
  });

  return {
    id: entry.src.replace(/[\\/]/g, "-"),
    kind: entry.kind,
    src: entry.src,
    alt,
    title: alt,
    filename: entry.filename,
    folderPath: entry.folderPath,
    posterSrc: entry.kind === "video" ? inferPosterSrc(entry.src, sourceGroup) : undefined,
    sidecar,
    classification,
  };
}

export function getAllMediaAssets() {
  if (!cachedAssets) {
    cachedAssets = mediaManifest
      .filter((entry) => !entry.filename.toLowerCase().includes("logo"))
      .map((entry) => createAsset(entry));
  }

  return cachedAssets;
}

function buildHomepageMediaCollections() {
  const assets = getAllMediaAssets();
  const usedFilenames = new Set<string>();
  const excludedHomepagePatterns = ["plans-for-the-ground-floor"];

  const isHomepageSafe = (asset: (typeof assets)[number]) =>
    !excludedHomepagePatterns.some((pattern) => asset.filename.includes(pattern));

  const uniqueByPlacement = (placement: HomepagePlacement, predicate?: (asset: (typeof assets)[number]) => boolean) =>
    assets.filter((asset) => {
      if (!isHomepageSafe(asset)) return false;
      if (asset.classification.homepagePlacement !== placement) return false;
      if (predicate && !predicate(asset)) return false;
      if (usedFilenames.has(asset.filename)) return false;
      usedFilenames.add(asset.filename);
      return true;
    });

  return {
    all: assets,
    hero: uniqueByPlacement("hero", (asset) => asset.classification.sourceGroup === "visual"),
    services: uniqueByPlacement("services", (asset) => asset.classification.sourceGroup === "visual"),
    ugc: uniqueByPlacement("ugc", (asset) => asset.classification.sourceGroup === "ugc"),
    caseStudy: uniqueByPlacement("case-study"),
    cta: uniqueByPlacement("cta", (asset) => asset.classification.sourceGroup === "visual"),
  };
}

export function getHomepageMediaCollections() {
  if (!cachedHomepageCollections) {
    cachedHomepageCollections = buildHomepageMediaCollections();
  }

  return cachedHomepageCollections;
}
