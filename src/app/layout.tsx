import type { Metadata, Viewport } from "next";
import {
  Bricolage_Grotesque,
  Manrope,
  Tajawal,
  Lora,
} from "next/font/google";

import { siteConfig } from "@/lib/site";
import { themeConfig } from "@/lib/theme";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  style: ["normal"],
  display: "swap",
});

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  style: "normal",
  variable: "--font-bricolage-grotesque",
  display: "swap",
});

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700", "800"],
  preload: false,
  variable: "--font-tajawal",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.shortName}`,
  },
  description:
    "Islamic and contemporary education from Early Years through Secondary School, Tahfiz and Arrabiyyah in Iwo, Osun State.",
  keywords: [
    "Islamic school in Iwo",
    "school in Osun State",
    "Tahfiz school",
    "Nursery school",
    "Primary school",
    "Secondary school",
    "Inaayatullah International Academy",
  ],
  icons: {
    icon: [{ url: "/brand/inaayatullah-crest.png", type: "image/png" }],
    shortcut: "/brand/inaayatullah-crest.png",
    apple: "/brand/inaayatullah-crest.png",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: siteConfig.name,
    title: siteConfig.name,
    description:
      "Islamic and contemporary education from Early Years through Secondary School, Tahfiz and Arrabiyyah in Iwo, Osun State.",
    images: [
      {
        url: "/images/Innaya/DSC_0111.jpg",
        alt: "Young Inaayatullah pupils smiling together on campus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description:
      "Islamic and contemporary education in Iwo, Osun State.",
    images: ["/images/Innaya/DSC_0111.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  appleWebApp: {
    capable: true,
    title: siteConfig.shortName,
    statusBarStyle: "default",
  },
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
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${manrope.variable} ${lora.variable} ${bricolageGrotesque.variable} ${tajawal.variable}`}
      >
        <a className="skip-link" href="#main-content">
          <span className="skip-link__en">Skip to main content</span>
          <span className="skip-link__ar" lang="ar" dir="rtl">انتقل إلى المحتوى الرئيسي</span>
        </a>
        {children}
      </body>
    </html>
  );
}
