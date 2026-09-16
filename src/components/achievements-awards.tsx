import Image from "next/image";
import { Award, PenTool, Trophy } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { getSiteConfig, type Locale } from "@/lib/i18n";

const awardIcons = [Trophy, PenTool] as const;

export function AchievementsAwards({ locale = "en" }: { locale?: Locale }) {
  const siteConfig = getSiteConfig(locale);
  const isArabic = locale === "ar";
  const achievements = siteConfig.achievements;

  return (
    <section
      id="achievements"
      aria-labelledby="achievements-title"
      className="section-space bg-background"
    >
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">{achievements.eyebrow}</p>
          <h2 id="achievements-title" className="section-heading mx-auto mt-4">
            {achievements.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            {achievements.introduction}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
          <Reveal>
            <figure className="overflow-hidden rounded-[1.75rem] border border-border/70 bg-surface shadow-card">
              <div className="relative aspect-[4/3] overflow-hidden bg-muted sm:aspect-[7/5]">
                <Image
                  src="/images/Innaya/DSC_0010.jpg"
                  alt={isArabic ? "عرض للكؤوس والدروع والشهادات التي حصلت عليها أكاديمية عناية الله الدولية" : "Display of trophies, plaques and certificates awarded to Inaayatullah International Academy"}
                  fill
                  sizes="(min-width: 1024px) 56vw, 100vw"
                  className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
              <figcaption className="bg-brand p-6 text-brand-foreground sm:p-8">
                <div className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-foreground/10 text-sky">
                    <Award aria-hidden="true" className="size-5" strokeWidth={1.7} />
                  </span>
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-sky">
                      {isArabic ? "معرض جوائز الأكاديمية" : "The Academy awards display"}
                    </p>
                    <p className="mt-3 max-w-xl text-base leading-7 text-brand-foreground/80">
                      {achievements.displayCaption}
                    </p>
                  </div>
                </div>
              </figcaption>
            </figure>
          </Reveal>

          <div className="grid gap-4">
            {achievements.awards.map((award, index) => {
              const Icon = awardIcons[index];

              return (
                <Reveal key={award.title} delay={index * 80}>
                  <article
                    className={`h-full rounded-3xl border p-6 sm:p-8 ${
                      index === 0
                        ? "border-brand bg-brand text-brand-foreground"
                        : "border-gold/70 bg-sand text-brand"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span
                        className={`flex size-11 items-center justify-center rounded-xl ${
                          index === 0
                            ? "bg-brand-foreground/10 text-sky"
                            : "bg-surface/75 text-brand"
                        }`}
                      >
                        <Icon aria-hidden="true" className="size-5" strokeWidth={1.7} />
                      </span>
                      <span
                        className={`text-sm font-extrabold tracking-[0.12em] ${
                          index === 0 ? "text-sky" : "text-muted-foreground"
                        }`}
                      >
                        {award.year}
                      </span>
                    </div>
                    <p
                      className={`mt-6 text-xs font-extrabold uppercase tracking-[0.13em] ${
                        index === 0
                          ? "text-brand-foreground/65"
                          : "text-muted-foreground"
                      }`}
                    >
                      {award.organiser}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
                      {award.title}
                    </h3>
                    <p
                      className={`mt-3 text-sm font-bold ${
                        index === 0 ? "text-brand-foreground/75" : "text-brand/75"
                      }`}
                    >
                      {award.category}
                    </p>
                  </article>
                </Reveal>
              );
            })}

            <Reveal delay={160}>
              <figure className="group relative aspect-[16/9] overflow-hidden rounded-3xl bg-muted">
                <Image
                  src="/images/Innaya/DSC_0002.jpg"
                  alt={isArabic ? "صورة قريبة لرف جوائز الأكاديمية وشهادات المسابقات الأكاديمية" : "Closer view of the Academy award shelf showing academic competition certificates"}
                  fill
                  sizes="(min-width: 1024px) 44vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.035]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-brand/90 via-brand/10 to-transparent"
                />
                <figcaption className="absolute inset-x-0 bottom-0 p-5 text-sm font-bold leading-6 text-brand-foreground sm:p-6 sm:text-base">
                  <span className="md:hidden">{isArabic ? "تكريم في مختلف المسابقات المدرسية." : "Recognition across school competitions."}</span>
                  <span className="hidden md:inline">{achievements.collectionCaption}</span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
