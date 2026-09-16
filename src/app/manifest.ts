import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";
import { themeConfig } from "@/lib/theme";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description:
      "Islamic and contemporary education in Iwo, Osun State.",
    start_url: "/",
    display: "standalone",
    background_color: themeConfig.browserThemeColor,
    theme_color: themeConfig.browserThemeColor,
    icons: [
      {
        src: "/brand/inaayatullah-crest.png",
        sizes: "any",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
