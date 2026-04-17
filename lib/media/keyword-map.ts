import type { HomepagePlacement, MediaContentType, MediaFrameVariant, MediaOverlay, MediaSourceGroup } from "@/lib/media/types";

type ClassificationRule = {
  contentType: MediaContentType;
  keywords: string[];
  sourceGroup?: MediaSourceGroup;
  frameVariant: MediaFrameVariant;
  homepagePlacement: HomepagePlacement;
  premium?: boolean;
  ugc?: boolean;
  overlay: Omit<MediaOverlay, "tone"> & { tone: MediaOverlay["tone"] };
};

export const mediaKeywordRules: ClassificationRule[] = [
  {
    contentType: "before-after",
    keywords: ["before", "after", "comparison", "collage", "renovation"],
    frameVariant: "split-comparison-frame",
    homepagePlacement: "case-study",
    ugc: true,
    overlay: {
      tone: "comparison",
      comparison: { before: "Before", after: "After" },
      badge: "Transformation",
    },
  },
  {
    contentType: "installation-moment",
    keywords: ["install", "installation", "loading", "module", "stacking", "worker", "crane", "construction"],
    frameVariant: "social-proof-card",
    homepagePlacement: "case-study",
    ugc: true,
    overlay: {
      tone: "proof",
      badge: "Installation day",
      eyebrow: "Real project",
    },
  },
  {
    contentType: "on-site-footage",
    keywords: ["site", "on-site", "foreman", "tablet", "walkie", "house-during", "hyperlapse"],
    frameVariant: "social-proof-card",
    homepagePlacement: "ugc",
    ugc: true,
    overlay: {
      tone: "proof",
      badge: "On-site",
      eyebrow: "Real project",
    },
  },
  {
    contentType: "testimonial-style",
    keywords: ["client", "reaction", "feedback", "speaking", "interview", "perspective"],
    frameVariant: "social-proof-card",
    homepagePlacement: "ugc",
    ugc: true,
    overlay: {
      tone: "testimonial",
      badge: "Real feedback",
      eyebrow: "Client perspective",
    },
  },
  {
    contentType: "product-detail",
    keywords: ["handle", "detail", "window", "door", "wardrobe", "heated-floor", "showroom", "kitchen"],
    frameVariant: "clean-gallery-tile",
    homepagePlacement: "services",
    premium: true,
    overlay: {
      tone: "detail",
      badge: "Detail shot",
    },
  },
  {
    contentType: "premium-architectural",
    keywords: ["facade", "exterior", "architectural", "clean", "modern", "timber-frame", "house", "modular"],
    frameVariant: "minimal-luxury-frame",
    homepagePlacement: "hero",
    premium: true,
    overlay: {
      tone: "premium",
      eyebrow: "Architectural visual",
    },
  },
  {
    contentType: "team-process",
    keywords: ["measures", "plans", "process", "team", "coordinating"],
    frameVariant: "editorial-card",
    homepagePlacement: "services",
    premium: true,
    overlay: {
      tone: "detail",
      eyebrow: "Process view",
    },
  },
  {
    contentType: "social-proof",
    keywords: ["real", "project", "proof", "showroom", "finished", "result"],
    sourceGroup: "ugc",
    frameVariant: "social-proof-card",
    homepagePlacement: "ugc",
    ugc: true,
    overlay: {
      tone: "proof",
      badge: "Real project",
    },
  },
  {
    contentType: "raw-ugc-vertical",
    keywords: ["phone", "vertical", "story", "reel", "raw", "handheld"],
    frameVariant: "vertical-reel-frame",
    homepagePlacement: "ugc",
    ugc: true,
    overlay: {
      tone: "proof",
      badge: "Phone footage",
      eyebrow: "UGC",
    },
  },
  {
    contentType: "clean-branding-visual",
    keywords: ["branding", "premium", "gimbal", "clean", "showroom", "interior"],
    sourceGroup: "visual",
    frameVariant: "editorial-card",
    homepagePlacement: "cta",
    premium: true,
    overlay: {
      tone: "premium",
      eyebrow: "Branding visual",
    },
  },
];

export const fallbackClassificationMap = {
  visual: {
    contentType: "clean-branding-visual" as const,
    frameVariant: "minimal-luxury-frame" as const,
    homepagePlacement: "services" as const,
    overlay: { tone: "premium" as const, eyebrow: "Curated visual" },
  },
  ugc: {
    contentType: "social-proof" as const,
    frameVariant: "social-proof-card" as const,
    homepagePlacement: "ugc" as const,
    overlay: { tone: "proof" as const, badge: "Real project" },
  },
};
