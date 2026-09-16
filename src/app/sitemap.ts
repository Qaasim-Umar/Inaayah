import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

const routes = ["", "/about", "/student-life", "/gallery", "/ar", "/ar/about", "/ar/student-life", "/ar/gallery"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route, index) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : 0.8,
  }));
}
