import { BookOpenText, CircleCheck, MoveRight } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

export function TahfizSpotlight() {
  return (
    <section
      id="tahfiz"
      aria-labelledby="tahfiz-title"
      className="scroll-mt-32 bg-surface py-20 sm:py-24 lg:py-32"
    >
      <Container>
        <div className="grid overflow-hidden border border-border lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative flex flex-col justify-between overflow-hidden bg-brand p-8 text-brand-foreground sm:p-10 lg:p-14">
            <div
              aria-hidden="true"
              className="hero-editorial-pattern absolute inset-0 opacity-75"
            />

            <div className="relative z-10">
              <BookOpenText aria-hidden="true" className="size-12 text-sky" />
              <p className="mt-10 text-xs font-extrabold uppercase tracking-[0.2em] text-sky sm:text-sm">
                Tahfizul Qur’an Programme
              </p>
              <h2
                id="tahfiz-title"
                className="mt-5 max-w-xl text-balance text-4xl font-semibold sm:text-5xl lg:text-6xl"
              >
                The heart of our Academy.
              </h2>
              <p className="mt-7 max-w-xl text-base leading-8 text-brand-foreground/80 sm:text-lg">
                {siteConfig.tahfiz.introduction}
              </p>
            </div>

            <div className="relative z-10 mt-14 grid grid-cols-[auto_1fr] items-end gap-5 border-t border-brand-foreground/25 pt-8">
              <strong className="font-display text-8xl font-semibold leading-none text-sky sm:text-9xl">
                {siteConfig.tahfiz.completionYears}
              </strong>
              <div className="pb-2">
                <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-sky">
                  Years
                </p>
                <p className="mt-2 max-w-xs text-sm leading-6 text-brand-foreground/80">
                  {siteConfig.tahfiz.commitment}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-background p-8 sm:p-10 lg:p-14">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-accent-foreground sm:text-sm">
              Programme features
            </p>
            <h3 className="mt-5 max-w-2xl text-balance text-3xl font-semibold text-foreground sm:text-4xl">
              Memorisation strengthened by understanding, character and leadership.
            </h3>

            <ul className="mt-10 grid border-l border-t border-border sm:grid-cols-2">
              {siteConfig.tahfiz.features.map((feature) => (
                <li
                  key={feature}
                  className="flex min-h-20 items-center gap-4 border-b border-r border-border bg-surface px-5 py-4 font-bold text-foreground"
                >
                  <CircleCheck
                    aria-hidden="true"
                    className="size-5 shrink-0 text-accent-foreground"
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 border-t border-border pt-9">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-accent-foreground">
                Our distinctive approach
              </p>
              <ul className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {siteConfig.tahfiz.approach.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-muted-foreground"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <ButtonLink href="/tahfiz" variant="primary" className="mt-10">
              Discover the Tahfiz programme
              <MoveRight aria-hidden="true" className="size-5" />
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
