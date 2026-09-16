import type { Metadata } from "next";
import { AboutPageContent } from "@/app/about/page";

export const metadata: Metadata = {
  title: "عن الأكاديمية",
  description: "تعرّف على رؤية أكاديمية عناية الله الدولية وقيمها وفلسفتها التعليمية وقيادتها.",
};

export default function ArabicAboutPage() {
  return <AboutPageContent locale="ar" />;
}
