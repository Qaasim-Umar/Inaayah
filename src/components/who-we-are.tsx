import { ArrowUpRight, BookOpen, Heart, Sprout } from "lucide-react";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { getSiteConfig, localizeHref, type Locale } from "@/lib/i18n";

const principles = {
  en: [
    { icon: Heart, title: "Faith at the centre", description: "Values that guide a lifetime.", color: "bg-brand-soft text-brand" },
    { icon: BookOpen, title: "Curiosity in every class", description: "Space to question and discover.", color: "bg-sand text-brand" },
    { icon: Sprout, title: "Character for life", description: "Confidence, kindness and purpose.", color: "bg-sage text-sage-foreground" },
  ],
  ar: [
    { icon: Heart, title: "الإيمان في القلب", description: "قيم ترشد الإنسان مدى الحياة.", color: "bg-brand-soft text-brand" },
    { icon: BookOpen, title: "الفضول في كل فصل", description: "مساحة للسؤال والاكتشاف.", color: "bg-sand text-brand" },
    { icon: Sprout, title: "أخلاق تدوم", description: "ثقة ولطف وغاية واضحة.", color: "bg-sage text-sage-foreground" },
  ],
} as const;

export function WhoWeAre({ locale = "en" }: { locale?: Locale }) {
  const siteConfig = getSiteConfig(locale);
  const isArabic = locale === "ar";
  return (
    <section id="who-we-are" aria-labelledby="who-we-are-title" className="section-space">
      <Container>
        <Reveal className="grid items-center gap-9 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div className="text-center lg:order-2 lg:text-left">
            <p className="eyebrow text-center lg:text-left">{isArabic ? "مرحبًا بكم في عناية الله" : "Welcome to Inaayatullah"}</p>
            <h2 id="who-we-are-title" className="section-heading mx-auto mt-4 lg:mx-0">{isArabic ? <>مكان جميل للتعلم.<br className="hidden sm:block" /> <span className="font-normal">وللانتماء.</span></> : <>A beautiful place<br className="hidden sm:block" /> to learn. <span className="font-normal">And belong.</span></>}</h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-muted-foreground lg:mx-0">{isArabic ? "يحمل كل طفل شيئًا مميزًا. هنا تلتقي القيم الإسلامية بالتعلم المعاصر لنرعى عقولًا فضولية وقلوبًا رحيمة ومستقبلًا واثقًا." : "Every child brings something special. Here, Islamic values and contemporary learning come together to nurture curious minds, kind hearts and confident futures."}</p>
            <ul className="mx-auto mt-7 max-w-md space-y-5 lg:mx-0 lg:max-w-none lg:space-y-4">
              {principles[locale].map(({ icon: Icon, title, description, color }) => (
                <li key={title} className="flex flex-col items-center gap-2.5 text-center lg:flex-row lg:gap-3.5 lg:text-left">
                  <span className={`card-icon flex size-11 shrink-0 items-center justify-center rounded-xl ${color}`}><Icon aria-hidden="true" className="size-5" strokeWidth={1.6} /></span>
                  <div><h3 className="text-sm font-extrabold tracking-normal text-brand">{title}</h3><p className="mt-1 text-sm leading-6 text-muted-foreground">{description}</p></div>
                </li>
              ))}
            </ul>
            <ButtonLink href={localizeHref("/about", locale)} variant="text" className="mt-6">{isArabic ? "تعرّف على أكاديميتنا" : "Get to know our school"} <ArrowUpRight aria-hidden="true" className="rtl-flip size-4" /></ButtonLink>
          </div>
          <figure className="relative min-h-72 overflow-hidden rounded-[1.75rem] bg-muted sm:min-h-96 lg:order-1 lg:min-h-[34rem]">
            <Image src={siteConfig.media.whoWeAre.src} alt={siteConfig.media.whoWeAre.alt} fill sizes="(min-width: 1024px) 45vw, 90vw" className="object-cover object-center" />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-brand/85 via-transparent to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-6 text-brand-foreground sm:p-8">
              <span className="hidden rounded-full bg-surface px-3 py-1 text-[0.65rem] font-extrabold uppercase tracking-[0.12em] text-brand md:inline-flex">{isArabic ? "إيمان · معرفة · أخلاق" : "Faith · Knowledge · Character"}</span>
              <p className="max-w-sm font-display text-xl leading-snug md:mt-3 md:text-2xl">{isArabic ? <>اكتشافات صغيرة.<br className="hidden md:block" /><span className="hidden md:inline">وإمكانات تدوم مدى الحياة.</span></> : <>Little discoveries.<br className="hidden md:block" /><span className="hidden md:inline">Lifelong possibilities.</span></>}</p>
              {siteConfig.media.whoWeAre.isPlaceholder && <p className="mt-2 text-xs text-brand-foreground/80 md:mt-3">{isArabic ? "صورة توضيحية" : <><span className="md:hidden">Preview</span><span className="hidden md:inline">Illustrative preview</span></>}</p>}
            </figcaption>
          </figure>
        </Reveal>
      </Container>
    </section>
  );
}
