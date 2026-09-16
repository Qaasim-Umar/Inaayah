import Image from "next/image";
import {
  CalendarDays,
  FlaskConical,
  Lightbulb,
  MessagesSquare,
  Newspaper,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site";

const clubIcons = [
  MessagesSquare,
  FlaskConical,
  Lightbulb,
  Newspaper,
] as const;

const clubSurfaces = [
  "bg-brand-soft text-brand",
  "bg-sage text-sage-foreground",
  "bg-sand text-brand",
  "bg-sky/55 text-brand",
] as const;

export function ClubsAndSports() {
  const activities = siteConfig.studentLifeActivities;

  return (
    <section
      id="clubs-and-sports"
      aria-labelledby="clubs-and-sports-title"
      className="section-space bg-brand-soft/35"
    >
      <Container>
        <Reveal className="grid gap-6 text-center lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16 lg:text-left">
          <div>
            <p className="eyebrow">{activities.eyebrow}</p>
            <h2
              id="clubs-and-sports-title"
              className="section-heading mx-auto mt-4 lg:mx-0"
            >
              {activities.title}
            </h2>
          </div>
          <p className="mx-auto max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg lg:mx-0">
            {activities.introduction}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.04fr_0.96fr] lg:items-stretch">
          <Reveal>
            <figure className="group relative isolate min-h-[30rem] overflow-hidden rounded-[1.75rem] bg-brand shadow-soft sm:min-h-[38rem] lg:h-full">
              <Image
                src="/images/Innaya/DSC_0197.jpg"
                alt="Inaayatullah students standing together in colourful sports house uniforms on the school field"
                fill
                sizes="(min-width: 1024px) 54vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-brand via-brand/15 to-transparent"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 text-brand-foreground sm:p-9">
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-sky">
                  Sports and house life
                </p>
                <h3 className="mt-3 max-w-xl text-3xl font-semibold sm:text-4xl">
                  {activities.sportsTitle}
                </h3>
                <p className="mt-4 hidden max-w-xl text-base leading-7 text-brand-foreground/85 md:block">
                  {activities.sportsDescription}
                </p>
                <p className="mt-4 hidden max-w-xl border-l-2 border-sky pl-4 text-sm leading-6 text-brand-foreground/75 md:block">
                  {activities.houseDescription}
                </p>
              </figcaption>
            </figure>
          </Reveal>

          <div className="grid gap-6">
            <Reveal className="rounded-[1.75rem] border border-border/70 bg-surface p-6 shadow-card sm:p-8">
              <div className="flex items-center gap-3 text-brand">
                <span className="flex size-11 items-center justify-center rounded-xl bg-brand-soft">
                  <CalendarDays aria-hidden="true" className="size-5" strokeWidth={1.7} />
                </span>
                <p className="text-xs font-extrabold uppercase tracking-[0.16em]">
                  {activities.clubDay}
                </p>
              </div>
              <h3 className="mt-5 text-3xl font-semibold text-brand">
                Ideas find room to grow.
              </h3>
              <p className="mt-3 text-base leading-7 text-muted-foreground">
                {activities.clubsIntroduction}
              </p>

              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {activities.clubs.map((club, index) => {
                  const Icon = clubIcons[index];

                  return (
                    <li
                      key={club}
                      className="flex min-h-16 items-center gap-3 rounded-2xl border border-border/60 bg-background p-3.5 font-bold text-brand"
                    >
                      <span
                        className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${clubSurfaces[index]}`}
                      >
                        <Icon aria-hidden="true" className="size-5" strokeWidth={1.7} />
                      </span>
                      <span>{club}</span>
                    </li>
                  );
                })}
              </ul>
            </Reveal>

            <div className="grid grid-cols-2 gap-4">
              <Reveal>
                <figure className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-muted">
                  <Image
                    src="/images/Innaya/DSC_0175.jpg"
                    alt="Inaayatullah students receiving table tennis training outdoors"
                    fill
                    sizes="(min-width: 1024px) 22vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-brand/90 via-transparent to-transparent"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 p-4 text-sm font-bold text-brand-foreground sm:p-5 sm:text-base">
                    Table tennis training
                  </figcaption>
                </figure>
              </Reveal>

              <Reveal delay={80}>
                <figure className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-muted">
                  <Image
                    src="/images/Innaya/DSC_0125.jpg"
                    alt="Wide view of students playing on Inaayatullah Academy's green football field"
                    fill
                    sizes="(min-width: 1024px) 22vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-brand/90 via-transparent to-transparent"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 p-4 text-sm font-bold text-brand-foreground sm:p-5 sm:text-base">
                    Football and field activities
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
