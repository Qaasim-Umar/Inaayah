"use client";

import { Pause, Play } from "lucide-react";
import { useState } from "react";
import type { Locale } from "@/lib/i18n";

const highlights = {
  en: [
    { value: "A complete journey", label: "Early Years to Secondary" },
    { value: "Rooted in the Qur’an", label: "Focused two year Tahfiz" },
    { value: "A place to belong", label: "Day and boarding school" },
    { value: "Iwo, Osun State", label: "Learning with purpose" },
  ],
  ar: [
    { value: "رحلة تعليمية متكاملة", label: "من السنوات المبكرة إلى الثانوية" },
    { value: "راسخون في القرآن", label: "تحفيظ مركز لمدة عامين" },
    { value: "مكان تنتمي إليه", label: "تعليم نهاري وسكن داخلي" },
    { value: "إيوو، ولاية أوسون", label: "تعلم هادف" },
  ],
} as const;

function HighlightItems({ duplicate = false, locale }: { duplicate?: boolean; locale: Locale }) {
  return (
    <div className="academy-ticker-group" dir={locale === "ar" ? "rtl" : "ltr"} aria-hidden={duplicate || undefined}>
      {highlights[locale].map(({ value, label }) => (
        <div key={value} className="academy-ticker-item">
          <span className="academy-ticker-separator" aria-hidden="true" />
          <span className="academy-ticker-copy">
            <strong className="font-display text-base font-semibold leading-none text-brand-foreground sm:text-lg">
              {value}
            </strong>
            <span className="border-l border-brand-foreground/25 pl-2.5 text-[0.65rem] font-extrabold uppercase tracking-[0.11em] text-brand-foreground/70 sm:text-xs">
              {label}
            </span>
          </span>
        </div>
      ))}
    </div>
  );
}

export function AcademyHighlights({ locale = "en" }: { locale?: Locale }) {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section
      aria-labelledby="academy-highlights-title"
      className="academy-ticker-shell relative mt-8 overflow-hidden border-y border-brand-foreground/15 bg-brand text-brand-foreground sm:mt-10"
    >
      <h2 id="academy-highlights-title" className="sr-only">
        {locale === "ar" ? "الأكاديمية في لمحة" : "The Academy at a glance"}
      </h2>
      <div className="academy-ticker-window" dir="ltr">
        <div
          id="academy-highlights-track"
          className="academy-ticker-track"
          dir="ltr"
          data-paused={isPaused}
        >
          <HighlightItems locale={locale} />
          <HighlightItems locale={locale} duplicate />
        </div>
      </div>
      <button
        type="button"
        onClick={() => setIsPaused((paused) => !paused)}
        aria-controls="academy-highlights-track"
        aria-label={isPaused ? (locale === "ar" ? "استئناف شريط مميزات الأكاديمية" : "Resume Academy highlights") : (locale === "ar" ? "إيقاف شريط مميزات الأكاديمية مؤقتًا" : "Pause Academy highlights")}
        title={isPaused ? (locale === "ar" ? "استئناف" : "Resume Academy highlights") : (locale === "ar" ? "إيقاف مؤقت" : "Pause Academy highlights")}
        className="academy-ticker-toggle"
      >
        {isPaused ? (
          <Play aria-hidden="true" className="size-4" fill="currentColor" />
        ) : (
          <Pause aria-hidden="true" className="size-4" fill="currentColor" />
        )}
      </button>
    </section>
  );
}
