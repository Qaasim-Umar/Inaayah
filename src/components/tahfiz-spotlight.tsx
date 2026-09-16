import { ArrowUpRight, BookOpenText, Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { getSiteConfig, localizeHref, type Locale } from "@/lib/i18n";

export function TahfizSpotlight({ locale = "en" }: { locale?: Locale }) {
  const siteConfig = getSiteConfig(locale);
  const isArabic = locale === "ar";
  const features = isArabic ? ["خطط حفظ فردية", "التجويد والمراجعة اليومية", "تعلم اللغة العربية", "الأخلاق والقيادة"] : ["Personal memorisation plans", "Tajweed and daily revision", "Arabic language learning", "Character and leadership"];
  return (
    <section id="tahfiz" aria-labelledby="tahfiz-title" className="section-space">
      <Container>
        <Reveal className="relative isolate overflow-hidden rounded-[1.75rem] bg-brand text-brand-foreground lg:grid lg:grid-cols-[1.2fr_0.8fr]">
          <div className={`p-6 py-9 sm:p-10 lg:p-12 ${isArabic ? "text-right" : "text-left"}`}>
            <p className={`eyebrow !text-sky ${isArabic ? "text-right" : "text-left"}`}>{isArabic ? "قلب أكاديميتنا" : "The heart of our Academy"}</p>
            <h2 id="tahfiz-title" className={`mx-0 mt-4 max-w-xl text-balance text-3xl font-medium sm:text-4xl lg:text-5xl ${isArabic ? "text-right" : "text-left"}`}>{isArabic ? <>راسخون في الإيمان.<br /><span className="font-normal text-sky">نحمله معنا مدى الحياة.</span></> : <>Rooted in faith.<br /><span className="font-normal text-sky">Carried through life.</span></>}</h2>
            <p className="mx-0 mt-5 max-w-lg text-base leading-7 text-brand-foreground/80">{isArabic ? "صلة عميقة بالقرآن تنمو بالحفظ المتقن والفهم والممارسة اليومية." : "A meaningful connection with the Qur’an, nurtured through careful memorisation, understanding and daily practice."}</p>
            <ul className="stagger-list mx-0 mt-6 grid max-w-md gap-3 sm:max-w-none sm:grid-cols-2">
              {features.map((item) => <li key={item} className={`flex items-start justify-start gap-2.5 text-sm leading-6 ${isArabic ? "text-right" : "text-left"}`}><Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-sky" />{item}</li>)}
            </ul>
            <ButtonLink href={localizeHref("/#admissions", locale)} variant="accent" className="mt-7">{isArabic ? "ابدأ رحلة التحفيظ" : "Begin the Tahfiz journey"} <ArrowUpRight aria-hidden="true" className="rtl-flip size-4" /></ButtonLink>
          </div>
          <div className="relative flex items-center justify-center overflow-hidden border-t border-brand-foreground/15 bg-brand-foreground/5 px-6 py-9 lg:border-l lg:border-t-0">
            <div aria-hidden="true" className="faith-pattern absolute inset-0 text-brand-foreground/[0.06]" />
            <div className="relative flex w-full max-w-64 flex-col items-center rounded-t-[7rem] rounded-b-2xl border border-sky/30 bg-brand px-5 py-8 text-center">
              <BookOpenText aria-hidden="true" className="size-8 text-gold" strokeWidth={1.3} />
              <p className="mt-3 font-display text-7xl leading-none text-brand-foreground">{siteConfig.tahfiz.completionYears}</p>
              <p className="mt-3 text-xs font-extrabold uppercase tracking-[0.18em] text-sky">{isArabic ? "عامان من التحفيظ المركز" : "Years of focused Tahfiz"}</p>
              <span aria-hidden="true" className="my-5 h-px w-9 bg-gold/70" />
              <p className="max-w-44 text-sm leading-6 text-brand-foreground/80">{isArabic ? <>حفظ القرآن.<br />أساس يدوم مدى الحياة.</> : <>Qur’an memorisation.<br />A foundation for a lifetime.</>}</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
