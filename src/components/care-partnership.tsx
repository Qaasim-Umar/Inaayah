import {
  BookOpenCheck,
  Building2,
  CircleCheck,
  HandHeart,
  HeartPulse,
  MoveRight,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

const supportIcons = [
  ShieldCheck,
  HeartPulse,
  BookOpenCheck,
  HandHeart,
] as const;

export function CarePartnership() {
  return (
    <section
      id="student-welfare"
      aria-labelledby="care-partnership-title"
      className="scroll-mt-32 bg-background py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <div className="grid gap-8 border-b border-border pb-10 lg:grid-cols-[0.42fr_1fr] lg:items-end lg:gap-16 lg:pb-12">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-accent-foreground sm:text-sm">
            Care and family partnership
          </p>
          <div>
            <h2
              id="care-partnership-title"
              className="max-w-4xl text-balance text-4xl font-semibold text-foreground sm:text-5xl lg:text-6xl"
            >
              Every child matters. Success is built together.
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
              {siteConfig.careAndPartnership.introduction}
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 lg:mt-12 lg:grid-cols-[1.12fr_0.88fr]">
          <div className="relative flex overflow-hidden bg-brand p-6 text-brand-foreground sm:p-8 lg:p-10">
            <div
              aria-hidden="true"
              className="hero-editorial-pattern absolute inset-0 opacity-45"
            />
            <div className="relative flex w-full flex-col">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-sky">
                Care across school life
              </p>
              <div className="mt-7 grid border-l border-t border-brand-foreground/25 sm:flex-1 sm:auto-rows-fr sm:grid-cols-2">
                {siteConfig.studentCare.supportAreas.map((area, index) => {
                  const Icon = supportIcons[index];

                  return (
                    <article
                      key={area.title}
                      className="grid grid-cols-[auto_1fr] gap-4 border-b border-r border-brand-foreground/25 p-5 sm:flex sm:min-h-56 sm:flex-col sm:justify-center sm:p-6"
                    >
                      <Icon
                        aria-hidden="true"
                        className="mt-1 size-6 text-sky sm:mt-0 sm:size-7"
                        strokeWidth={1.7}
                      />
                      <div>
                        <h3 className="text-2xl font-semibold sm:mt-6">
                          {area.title}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-brand-foreground/75 sm:mt-3">
                          {area.description}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <aside className="bg-sky p-7 text-accent-foreground sm:p-8">
              <Building2
                aria-hidden="true"
                className="size-8"
                strokeWidth={1.7}
              />
              <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.18em]">
                Boarding at the Academy
              </p>
              <h3 className="mt-4 max-w-lg text-balance text-3xl font-semibold">
                {siteConfig.studentCare.boarding.title}
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-accent-foreground/80 sm:text-base">
                {siteConfig.studentCare.boarding.description}
              </p>
              <div className="mt-6 border-t border-accent-foreground/25 pt-5">
                <p className="text-xs font-extrabold uppercase tracking-[0.16em]">
                  {siteConfig.studentCare.boarding.developmentTitle}
                </p>
                <p className="mt-2 text-sm font-bold leading-6">
                  {siteConfig.studentCare.boarding.developmentStatus}
                </p>
              </div>
            </aside>

            <div id="parents" className="scroll-mt-32 bg-sand p-7 sm:p-8">
              <UsersRound
                aria-hidden="true"
                className="size-8 text-brand"
                strokeWidth={1.7}
              />
              <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.18em] text-accent-foreground">
                Parents as our partners
              </p>
              <h3 className="mt-4 text-3xl font-semibold text-foreground">
                Building success together.
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                {siteConfig.parentPartnership.introduction}
              </p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {siteConfig.parentPartnership.engagement.map((item) => (
                  <li
                    key={item.title}
                    className="flex items-center gap-2 text-sm font-bold text-foreground"
                  >
                    <CircleCheck
                      aria-hidden="true"
                      className="size-4 shrink-0 text-accent-foreground"
                    />
                    <span>{item.title}</span>
                  </li>
                ))}
              </ul>
              <ButtonLink
                href="/student-life"
                variant="secondary"
                className="mt-7"
              >
                Explore student life
                <MoveRight aria-hidden="true" className="size-5" />
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
