import type { Metadata, Viewport } from "next";
import {
  Manrope,
  Noto_Naskh_Arabic,
  Oswald,
} from "next/font/google";

import { siteConfig } from "@/lib/site";
import { themeConfig } from "@/lib/theme";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

const notoNaskhArabic = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.shortName}`,
  },
  description:
    "Islamic and contemporary education from Early Years through Secondary School, Tahfiz and Arrabiyyah in Iwo, Osun State.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: themeConfig.browserThemeColor,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${oswald.variable} ${notoNaskhArabic.variable}`}
      >
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
