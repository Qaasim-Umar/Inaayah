import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { GalleryPreview } from "@/components/gallery-preview";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = { title: "School Gallery" };

export default function GalleryPage() {
  return <><SiteHeader /><main id="main-content"><Container className="pt-6"><Link href="/" className="inline-flex min-h-12 items-center gap-2 text-sm font-bold text-brand"><ArrowLeft aria-hidden="true" className="size-4" />Back to our school</Link><h1 className="sr-only">School gallery</h1></Container><GalleryPreview showViewAll={false} /></main><SiteFooter /></>;
}
