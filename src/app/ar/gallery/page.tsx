import type { Metadata } from "next";
import { GalleryPageContent } from "@/app/gallery/page";

export const metadata: Metadata = {
  title: "معرض صور المدرسة",
  description: "شاهد لحظات من التعلم والإيمان والرياضة والمجتمع في أكاديمية عناية الله الدولية.",
};

export default function ArabicGalleryPage() {
  return <GalleryPageContent locale="ar" />;
}
