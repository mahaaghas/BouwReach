import fs from "fs";
import path from "path";
import { classifyMedia, deriveAltText } from "@/lib/media/classifier";
import type { HomepagePlacement, MediaAsset, MediaKind, MediaSidecar, MediaSourceGroup } from "@/lib/media/types";

const PROJECT_ROOT = /*turbopackIgnore: true*/ process.cwd();
const ASSET_ROOT = path.join(PROJECT_ROOT, "assets");
const STATIC_MEDIA_DIRECTORIES = {
  visualImages: path.join(PROJECT_ROOT, "assets", "visual", "pictures"),
  visualImagesAlt: path.join(PROJECT_ROOT, "assets", "visual", "images"),
  visualVideos: path.join(PROJECT_ROOT, "assets", "visual", "videos"),
  ugcImages: path.join(PROJECT_ROOT, "assets", "ugc", "pictures"),
  ugcImagesAlt: path.join(PROJECT_ROOT, "assets", "ugc", "images"),
  ugcVideos: path.join(PROJECT_ROOT, "assets", "ugc", "videos"),
} as const;
const MEDIA_EXTENSIONS: Record<MediaKind, string[]> = {
  image: [".jpg", ".jpeg", ".png", ".webp", ".avif"],
  video: [".mp4", ".mov", ".webm"],
};

let cachedAssets: MediaAsset[] | null = null;
let cachedHomepageCollections: ReturnType<typeof buildHomepageMediaCollections> | null = null;

function isLogoAssetPath(filePath: string) {
  const normalizedPath = filePath.split(path.sep).join("/").toLowerCase();
  return normalizedPath.includes("/assets/logos/") || normalizedPath.includes("/logos/");
}

function readOptionalSidecar(filePath: string): MediaSidecar | undefined {
  const sidecarPath = filePath.replace(/\.[^.]+$/, ".json");
  if (!fs.existsSync(sidecarPath)) {
    return undefined;
  }

  try {
    return JSON.parse(fs.readFileSync(sidecarPath, "utf8")) as MediaSidecar;
  } catch {
    return undefined;
  }
}

function toPublicMediaPath(filePath: string) {
  const relativePath = path.relative(ASSET_ROOT, filePath).split(path.sep).join("/");
  return `/media/${relativePath}`;
}

function sourceGroupFromPath(filePath: string): MediaSourceGroup {
  return filePath.includes(`${path.sep}ugc${path.sep}`) ? "ugc" : "visual";
}

function collectMediaFiles(kind: MediaKind) {
  const filePaths: string[] = [];

  const directories =
    kind === "image"
      ? [STATIC_MEDIA_DIRECTORIES.visualImages, STATIC_MEDIA_DIRECTORIES.visualImagesAlt, STATIC_MEDIA_DIRECTORIES.ugcImages, STATIC_MEDIA_DIRECTORIES.ugcImagesAlt]
      : [STATIC_MEDIA_DIRECTORIES.visualVideos, STATIC_MEDIA_DIRECTORIES.ugcVideos];

  for (const directory of directories) {
    if (!fs.existsSync(directory)) {
      continue;
    }

    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      if (!entry.isFile()) {
        continue;
      }

      const fullPath = path.join(directory, entry.name);
      if (isLogoAssetPath(fullPath)) {
        continue;
      }

      if (MEDIA_EXTENSIONS[kind].includes(path.extname(entry.name).toLowerCase())) {
        filePaths.push(fullPath);
      }
    }
  }

  return filePaths;
}

function inferPosterSrc(filePath: string, sourceGroup: MediaSourceGroup, sidecar?: MediaSidecar) {
  if (sidecar?.poster) {
    return sidecar.poster;
  }

  const basename = path.basename(filePath, path.extname(filePath));
  const candidateDirectories =
    sourceGroup === "visual"
      ? [STATIC_MEDIA_DIRECTORIES.visualImages, STATIC_MEDIA_DIRECTORIES.visualImagesAlt]
      : [STATIC_MEDIA_DIRECTORIES.ugcImages, STATIC_MEDIA_DIRECTORIES.ugcImagesAlt];

  for (const directory of candidateDirectories) {
    if (!fs.existsSync(directory)) continue;

    for (const extension of MEDIA_EXTENSIONS.image) {
      const candidate = path.join(directory, `${basename}${extension}`);
      if (fs.existsSync(candidate)) {
        return toPublicMediaPath(candidate);
      }
    }
  }

  const accent = sourceGroup === "visual" ? "c8ff43" : "101010";
  const background = sourceGroup === "visual" ? "101010" : "f4f3ee";
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800"><rect width="100%" height="100%" fill="#${background}"/><rect x="56" y="56" width="1088" height="688" rx="44" fill="none" stroke="#${accent}" stroke-width="4"/><text x="72" y="120" fill="#${accent}" font-family="Arial, sans-serif" font-size="34" letter-spacing="6">BOUWREACH MEDIA</text></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function createAsset(filePath: string, kind: MediaKind): MediaAsset {
  const sidecar = readOptionalSidecar(filePath);
  const filename = path.basename(filePath);
  const sourceGroup = sourceGroupFromPath(filePath);
  const alt = deriveAltText(filename, sidecar);
  const classification = classifyMedia({
    alt,
    filename,
    folderPath: filePath,
    kind,
    sourceGroup,
    sidecar,
  });

  return {
    id: path.relative(ASSET_ROOT, filePath).replace(/[\\/]/g, "-"),
    kind,
    src: toPublicMediaPath(filePath),
    alt,
    title: sidecar?.title ?? alt,
    filename,
    folderPath: path.relative(ASSET_ROOT, path.dirname(filePath)),
    posterSrc: kind === "video" ? inferPosterSrc(filePath, sourceGroup, sidecar) : undefined,
    sidecar,
    classification,
  };
}

export function getAllMediaAssets() {
  if (!cachedAssets) {
    cachedAssets = [
      ...collectMediaFiles("image").map((file) => createAsset(file, "image")),
      ...collectMediaFiles("video").map((file) => createAsset(file, "video")),
    ].filter((asset) => !isLogoAssetPath(asset.folderPath) && !asset.filename.toLowerCase().includes("logo"));
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
