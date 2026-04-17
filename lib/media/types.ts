export type MediaKind = "image" | "video";

export type MediaSourceGroup = "visual" | "ugc";

export type MediaContentType =
  | "premium-architectural"
  | "product-detail"
  | "team-process"
  | "on-site-footage"
  | "testimonial-style"
  | "before-after"
  | "installation-moment"
  | "social-proof"
  | "raw-ugc-vertical"
  | "clean-branding-visual";

export type MediaFrameVariant =
  | "minimal-luxury-frame"
  | "editorial-card"
  | "social-proof-card"
  | "vertical-reel-frame"
  | "split-comparison-frame"
  | "clean-gallery-tile";

export type HomepagePlacement =
  | "hero"
  | "services"
  | "ugc"
  | "case-study"
  | "cta"
  | "library";

export type OverlayTone = "premium" | "proof" | "comparison" | "detail" | "testimonial" | "none";

export type MediaOverlay = {
  eyebrow?: string;
  title?: string;
  badge?: string;
  comparison?: {
    before: string;
    after: string;
  };
  tone: OverlayTone;
};

export type MediaClassification = {
  contentType: MediaContentType;
  frameVariant: MediaFrameVariant;
  homepagePlacement: HomepagePlacement;
  sourceGroup: MediaSourceGroup;
  isPremiumBranding: boolean;
  isUgcProof: boolean;
  overlay: MediaOverlay;
  confidence: number;
  matchedKeywords: string[];
};

export type MediaSidecar = {
  alt?: string;
  title?: string;
  poster?: string;
  contentType?: MediaContentType;
  homepagePlacement?: HomepagePlacement;
  overlay?: Partial<MediaOverlay>;
};

export type MediaAsset = {
  id: string;
  kind: MediaKind;
  src: string;
  alt: string;
  title: string;
  filename: string;
  folderPath: string;
  width?: number;
  height?: number;
  posterSrc?: string;
  sidecar?: MediaSidecar;
  classification: MediaClassification;
};
