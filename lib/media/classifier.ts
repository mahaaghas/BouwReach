import { fallbackClassificationMap, mediaKeywordRules } from "@/lib/media/keyword-map";
import type { MediaClassification, MediaKind, MediaOverlay, MediaSidecar, MediaSourceGroup } from "@/lib/media/types";

type ClassifyInput = {
  alt?: string;
  filename: string;
  folderPath: string;
  kind: MediaKind;
  sourceGroup: MediaSourceGroup;
  sidecar?: MediaSidecar;
};

function normalizeText(value: string) {
  return value.toLowerCase().replace(/[_-]+/g, " ");
}

function humanizeFilename(filename: string) {
  return filename
    .replace(/\.[a-z0-9]+$/i, "")
    .replace(/\b\d{4}.*$/i, "")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function createOverlayTitle(contentType: MediaClassification["contentType"], labelSource: string) {
  if (contentType === "product-detail") return labelSource;
  if (contentType === "premium-architectural") return labelSource;
  return undefined;
}

export function deriveAltText(filename: string, sidecar?: MediaSidecar) {
  if (sidecar?.alt?.trim()) {
    return sidecar.alt.trim();
  }

  return humanizeFilename(filename);
}

export function classifyMedia({ filename, folderPath, kind, sourceGroup, sidecar }: ClassifyInput): MediaClassification {
  const derivedAlt = deriveAltText(filename, sidecar);
  const searchText = normalizeText([derivedAlt, filename, folderPath, sidecar?.title ?? ""].join(" "));

  const matchedRule = mediaKeywordRules
    .map((rule) => {
      if (rule.sourceGroup && rule.sourceGroup !== sourceGroup) {
        return null;
      }

      const matches = rule.keywords.filter((keyword) => searchText.includes(keyword));
      if (!matches.length) {
        return null;
      }

      return { rule, matches };
    })
    .filter((value): value is { rule: (typeof mediaKeywordRules)[number]; matches: string[] } => Boolean(value))
    .sort((left, right) => right.matches.length - left.matches.length)[0];

  if (!matchedRule) {
    const fallback = fallbackClassificationMap[sourceGroup];
    return {
      contentType: fallback.contentType,
      frameVariant: fallback.frameVariant,
      homepagePlacement: kind === "video" && sourceGroup === "visual" ? "hero" : fallback.homepagePlacement,
      sourceGroup,
      isPremiumBranding: sourceGroup === "visual",
      isUgcProof: sourceGroup === "ugc",
      overlay: {
        ...fallback.overlay,
        title: createOverlayTitle(fallback.contentType, derivedAlt),
      },
      confidence: 0.2,
      matchedKeywords: [],
    };
  }

  const overlay: MediaOverlay = {
    ...matchedRule.rule.overlay,
    ...sidecar?.overlay,
    title: sidecar?.overlay?.title ?? createOverlayTitle(matchedRule.rule.contentType, derivedAlt),
  };

  return {
    contentType: sidecar?.contentType ?? matchedRule.rule.contentType,
    frameVariant: matchedRule.rule.frameVariant,
    homepagePlacement: sidecar?.homepagePlacement ?? (kind === "video" && matchedRule.rule.contentType === "premium-architectural" ? "hero" : matchedRule.rule.homepagePlacement),
    sourceGroup,
    isPremiumBranding: matchedRule.rule.premium ?? sourceGroup === "visual",
    isUgcProof: matchedRule.rule.ugc ?? sourceGroup === "ugc",
    overlay,
    confidence: Math.min(0.95, 0.35 + matchedRule.matches.length * 0.15),
    matchedKeywords: matchedRule.matches,
  };
}
