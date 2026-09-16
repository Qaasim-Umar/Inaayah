import Image from "next/image";
import {
  BedDouble,
  BookOpen,
  BusFront,
  Gamepad2,
  Monitor,
  MoonStar,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { getSiteConfig, type Locale } from "@/lib/i18n";

const facilityIcons = [
  BookOpen,
  Monitor,
  MoonStar,
  BedDouble,
  Gamepad2,
  BusFront,
] as const;

const facilitySurfaces = [
  "bg-brand-soft text-brand",
  "bg-sky/55 text-brand",
  "bg-sage text-sage-foreground",
  "bg-sand text-brand",
  "bg-brand-soft-strong text-brand",
  "bg-gold/55 text-brand",
] as const;

export function CampusLife({ locale = "en" }: { locale?: Locale }) {
  const siteConfig = getSiteConfig(locale);
  const isArabic = locale === "ar";
  const campus = siteConfig.campusLife;

  return (
    <section
      id="campus-life"
      aria-labelledby="campus-life-title"
      className="section-space bg-surface-muted"
    >
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">{campus.eyebrow}</p>
          <h2 id="campus-life-title" className="section-heading mx-auto mt-4">
            {campus.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            {campus.introduction}
          </p>
        </Reveal>

        <Reveal className="mt-10">
          <figure className="overflow-hidden rounded-[1.75rem] border border-border/70 bg-surface shadow-card">
            <div className="relative aspect-[16/10] overflow-hidden bg-muted sm:aspect-[2/1]">
              <Image
                src={campus.images.overview.src}
                alt={campus.images.overview.alt}
                fill
                sizes="(min-width: 1280px) 80rem, 100vw"
                className="object-cover transition-transform duration-500 hover:scale-[1.015]"
              />
            </div>
            <figcaption className="grid gap-3 bg-brand p-6 text-brand-foreground sm:grid-cols-[0.8fr_1.2fr] sm:items-center sm:gap-10 sm:p-8">
              <h3 className="text-2xl font-semibold sm:text-3xl">
                {campus.overviewTitle}
              </h3>
              <p className="text-base leading-7 text-brand-foreground/80">
                {campus.overviewDescription}
              </p>
            </figcaption>
          </figure>
        </Reveal>

        <div className="mt-6 grid gap-6 lg:grid-cols-[0.84fr_1.16fr] lg:items-stretch">
          <Reveal className="rounded-[1.75rem] border border-border/70 bg-surface p-6 shadow-card sm:p-8">
            <p className="eyebrow">{isArabic ? "أساسيات كل يوم" : "Everyday essentials"}</p>
            <h3 className="mt-4 text-3xl font-semibold text-brand">
              {isArabic ? "مساحات ترعى الطالب بكل جوانبه." : "Spaces for the whole learner."}
            </h3>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              {campus.facilitiesIntroduction}
            </p>

            <ul className="mt-7 grid grid-cols-2 gap-3">
              {campus.facilities.map((facility, index) => {
                const Icon = facilityIcons[index];

                return (
                  <li
                    key={facility}
                    className="flex min-h-28 flex-col justify-between rounded-2xl border border-border/60 bg-background p-4 font-bold leading-snug text-brand"
                  >
                    <span
                      className={`flex size-10 items-center justify-center rounded-xl ${facilitySurfaces[index]}`}
                    >
                      <Icon aria-hidden="true" className="size-5" strokeWidth={1.7} />
                    </span>
                    <span className="mt-4 text-sm sm:text-base">{facility}</span>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <div className="grid grid-cols-2 gap-4">
            <Reveal className="col-span-2">
              <figure className="group relative aspect-[16/9] overflow-hidden rounded-3xl bg-muted">
                <Image
                  src={campus.images.ict.src}
                  alt={campus.images.ict.alt}
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-brand/90 via-transparent to-transparent"
                />
                <figcaption className="absolute inset-x-0 bottom-0 p-5 text-base font-bold text-brand-foreground sm:p-6 sm:text-lg">
                  {campus.images.ict.caption}
                </figcaption>
              </figure>
            </Reveal>

            {[campus.images.tahfiz, campus.images.playground].map((image, index) => (
              <Reveal key={image.src} delay={(index + 1) * 80}>
                <figure className="group relative aspect-square overflow-hidden rounded-3xl bg-muted">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 29vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-brand/90 via-transparent to-transparent"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 p-4 text-sm font-bold leading-5 text-brand-foreground sm:p-5 sm:text-base">
                    {image.caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
