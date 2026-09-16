import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "أكاديمية عناية الله الدولية",
    template: "%s | عناية الله",
  },
  description: "تعليم إسلامي ومعاصر من السنوات المبكرة إلى المرحلة الثانوية، مع برامج تحفيظ القرآن واللغة العربية في إيوو بولاية أوسون.",
  alternates: {
    languages: {
      en: "/",
      ar: "/ar",
    },
  },
  openGraph: {
    locale: "ar_NG",
  },
};

export default function ArabicLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div lang="ar" dir="rtl" className="locale-ar min-h-dvh">{children}</div>;
}
