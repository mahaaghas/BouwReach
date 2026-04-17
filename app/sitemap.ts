import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://bouwreach.nl/",
      lastModified: new Date(),
    },
    {
      url: "https://bouwreach.nl/pakketten",
      lastModified: new Date(),
    },
    {
      url: "https://bouwreach.nl/contact",
      lastModified: new Date(),
    },
    {
      url: "https://bouwreach.nl/privacy",
      lastModified: new Date(),
    },
    {
      url: "https://bouwreach.nl/cookies",
      lastModified: new Date(),
    },
    {
      url: "https://bouwreach.nl/en",
      lastModified: new Date(),
    },
    {
      url: "https://bouwreach.nl/en/packages",
      lastModified: new Date(),
    },
    {
      url: "https://bouwreach.nl/en/contact",
      lastModified: new Date(),
    },
    {
      url: "https://bouwreach.nl/en/privacy",
      lastModified: new Date(),
    },
    {
      url: "https://bouwreach.nl/en/cookies",
      lastModified: new Date(),
    },
  ];
}
