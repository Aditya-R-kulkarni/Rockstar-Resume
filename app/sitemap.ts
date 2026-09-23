import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://rockstar-resume-sandy.vercel.app",
      lastModified: new Date(),
    },
  ];
}