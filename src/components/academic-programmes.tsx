import { ArrowUpRight, BookOpen, ChevronDown, GraduationCap, School, Sprout } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { localizeHref, type Locale } from "@/lib/i18n";

const pathways = {
  en: [
    { id: "early-years", icon: Sprout, number: "01", stage: "Early Years · Nursery 1 to 2", title: "A joyful beginning", description: "Play, discovery and gentle guidance help little learners find their confidence.", details: "Early literacy, counting, creative activities and Islamic manners build a happy foundation for school.", color: "bg-sand", label: "Early Years and Nursery" },
    { id: "primary", icon: BookOpen, number: "02", stage: "Primary 1 to 6", title: "Room to discover", description: "Strong foundations meet big questions, new skills and a growing love of learning.", details: "Literacy, mathematics and science follow the Nigerian national curriculum, with Islamic character woven into each day.", color: "bg-brand-soft", label: "Primary School" },
    { id: "secondary", icon: GraduationCap, number: "03", stage: "JSS 1 to 3 · SSS 1 to 3", title: "Ready for tomorrow", description: "Purposeful learning prepares young people for their next chapter, and life beyond school.", details: "Science, Commercial and Arts pathways develop knowledge, examination readiness and confidence for higher education.", color: "bg-sage", label: "Secondary School" },
  ],
  ar: [
    { id: "early-years", icon: Sprout, number: "01", stage: "السنوات المبكرة · الروضة 1 إلى 2", title: "بداية مليئة بالفرح", description: "يساعد اللعب والاكتشاف والتوجيه اللطيف صغارنا على بناء الثقة.", details: "القراءة المبكرة والحساب والأنشطة الإبداعية والآداب الإسلامية تبني أساسًا سعيدًا للحياة المدرسية.", color: "bg-sand", label: "السنوات المبكرة والروضة" },
    { id: "primary", icon: BookOpen, number: "02", stage: "الابتدائي 1 إلى 6", title: "مساحة للاكتشاف", description: "أسس قوية تلتقي بأسئلة كبيرة ومهارات جديدة وحب متزايد للتعلم.", details: "تسير القراءة والرياضيات والعلوم وفق المنهج الوطني النيجيري، مع حضور الشخصية الإسلامية في كل يوم.", color: "bg-brand-soft", label: "المرحلة الابتدائية" },
    { id: "secondary", icon: GraduationCap, number: "03", stage: "المتوسط 1 إلى 3 · الثانوي 1 إلى 3", title: "جاهزون للغد", description: "تعلم هادف يهيئ الشباب لمرحلتهم القادمة وللحياة بعد المدرسة.", details: "تنمّي مسارات العلوم والتجارة والآداب المعرفة والاستعداد للامتحانات والثقة اللازمة للتعليم العالي.", color: "bg-sage", label: "المرحلة الثانوية" },
  ],
} as const;

export function AcademicProgrammes({ locale = "en" }: { locale?: Locale }) {
  const isArabic = locale === "ar";
  return (
    <section id="academic-programmes" aria-labelledby="academic-programmes-title" className="section-space bg-brand text-brand-foreground">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow !text-sky">{isArabic ? "مسار يناسب كل طالب" : "A pathway for every learner"}</p>
          <h2 id="academic-programmes-title" className="section-heading mt-4 !text-brand-foreground">{isArabic ? <>ننمو معًا،<br /><span className="font-normal">في كل خطوة من الطريق.</span></> : <>Growing together,<br /><span className="font-normal">every step of the way.</span></>}</h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-brand-foreground/75">{isArabic ? "من أول يوم دراسي إلى الطموح الكبير التالي، تعليم ينمو مع طفلك." : "From their first school day to their next big ambition, an education that grows with your child."}</p>
        </Reveal>
        <div className="mt-9 grid items-stretch gap-5 lg:grid-cols-3 lg:gap-6">
          {pathways[locale].map(({ id, icon: Icon, number, stage, title, description, details, color, label }, index) => (
            <Reveal key={id} className="h-full" delay={index * 70}>
              <article className="lift-card flex h-full flex-col overflow-hidden rounded-3xl border border-border/60 bg-surface">
                <div className={`${color} flex items-center justify-between px-6 py-5 sm:px-7`}>
                  <span className="card-icon flex size-12 items-center justify-center rounded-2xl bg-surface/75 text-brand"><Icon aria-hidden="true" className="size-6" strokeWidth={1.5} /></span>
                  <span aria-hidden="true" className="font-display text-4xl text-brand/30">{number}</span>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <p className="text-[0.65rem] font-extrabold uppercase leading-5 tracking-[0.1em] text-muted-foreground">{stage}</p>
                  <h3 className="mt-3 text-[1.65rem] font-medium text-brand">{title}</h3>
                  <p className="mb-5 mt-3 text-base leading-7 text-muted-foreground">{description}</p>
                  <details className="group mt-auto border-t border-border/70 pt-2">
                    <summary className="flex min-h-12 list-none items-center justify-between gap-3 text-sm font-extrabold text-brand [&::-webkit-details-marker]:hidden" aria-label={isArabic ? `استكشف ${label}` : `Explore ${label}`}>
                      <span>{label}</span><ChevronDown aria-hidden="true" className="size-4 shrink-0 transition-transform duration-200 group-open:rotate-180" />
                    </summary>
                    <div className="disclosure-content pb-1 pt-2"><p className="text-sm leading-7 text-muted-foreground">{details}</p><ButtonLink href={localizeHref("/#admissions", locale)} variant="text" className="mt-2">{isArabic ? "معلومات القبول" : "Admission information"} <ArrowUpRight aria-hidden="true" className="rtl-flip size-4" /></ButtonLink></div>
                  </details>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-6 flex flex-col items-start justify-between gap-3 rounded-2xl border border-brand-foreground/15 bg-surface/95 px-6 py-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3"><School aria-hidden="true" className="size-5 shrink-0 text-brand" /><p className="text-sm leading-6 text-muted-foreground"><strong className="text-brand">{isArabic ? "الإيمان حاضر في كل مرحلة." : "Faith throughout the journey."}</strong> {isArabic ? "اكتشف برامجنا المتخصصة في التحفيظ واللغة العربية." : "Explore our dedicated Tahfiz and Arabic programmes."}</p></div>
          <ButtonLink href={localizeHref("/#tahfiz", locale)} variant="text" className="shrink-0">{isArabic ? "اكتشف برنامج التحفيظ" : "Discover Tahfiz"} <ArrowUpRight aria-hidden="true" className="rtl-flip size-4" /></ButtonLink>
        </Reveal>
      </Container>
    </section>
  );
}
