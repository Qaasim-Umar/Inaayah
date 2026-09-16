import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { GalleryPreview } from "@/components/gallery-preview";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Container } from "@/components/ui/container";
import { localizeHref, type Locale } from "@/lib/i18n";

export const metadata: Metadata = { title: "School Gallery" };

export function GalleryPageContent({ locale = "en" }: { locale?: Locale }) {
  const isArabic = locale === "ar";
  return <><SiteHeader locale={locale} /><main id="main-content"><Container className="pt-6"><Link href={localizeHref("/", locale)} className="inline-flex min-h-12 items-center gap-2 text-sm font-bold text-brand"><ArrowLeft aria-hidden="true" className="rtl-flip size-4" />{isArabic ? "العودة إلى الأكاديمية" : "Back to our school"}</Link><h1 className="sr-only">{isArabic ? "معرض صور المدرسة" : "School gallery"}</h1></Container><GalleryPreview showViewAll={false} locale={locale} /></main><SiteFooter locale={locale} /></>;
}

export default function GalleryPage() {
  return <GalleryPageContent />;
}
