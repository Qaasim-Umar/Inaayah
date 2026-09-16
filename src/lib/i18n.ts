import { siteConfig } from "@/lib/site";
import { siteConfigAr } from "@/lib/site-ar";

export type Locale = "en" | "ar";

export function getSiteConfig(locale: Locale) {
  return locale === "ar" ? siteConfigAr : siteConfig;
}

export function localizeHref(href: string, locale: Locale) {
  if (locale === "en" || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return href;
  }

  if (href.startsWith("#")) return `/ar${href}`;

  const [path, hash] = href.split("#");
  const localizedPath = path === "/" ? "/ar" : `/ar${path}`;
  return hash ? `${localizedPath}#${hash}` : localizedPath;
}

export function alternateLocaleHref(pathname: string, locale: Locale, hash = "") {
  if (locale === "ar") {
    const englishPath = pathname.replace(/^\/ar(?=\/|$)/, "") || "/";
    return `${englishPath}${hash}`;
  }

  return `${pathname === "/" ? "/ar" : `/ar${pathname}`}${hash}`;
}

export const sharedCopy = {
  en: {
    skip: "Skip to main content",
    academyName: "Inaayatullah",
    academyDescriptor: "International Academy",
    topLine: "Faith. Knowledge. A brighter future.",
    join: "Join our school",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
    primaryNavigation: "Primary navigation",
    menuNavigation: "Menu navigation",
    switchLanguage: "عرض الموقع بالعربية",
    languageLabel: "العربية",
    director: "Director",
  },
  ar: {
    skip: "انتقل إلى المحتوى الرئيسي",
    academyName: "عناية الله",
    academyDescriptor: "الأكاديمية الدولية",
    topLine: "إيمان. معرفة. مستقبل أكثر إشراقًا.",
    join: "الالتحاق بالأكاديمية",
    openMenu: "فتح قائمة التنقل",
    closeMenu: "إغلاق قائمة التنقل",
    primaryNavigation: "التنقل الرئيسي",
    menuNavigation: "قائمة التنقل",
    switchLanguage: "View the website in English",
    languageLabel: "EN",
    director: "المدير",
  },
} as const;
