import { MoveRight, Quote } from "lucide-react";
import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

export function DirectorWelcome() {
  return (
    <section
      id="director-message"
      aria-labelledby="director-message-title"
      className="scroll-mt-32 bg-sand py-20 sm:py-24 lg:py-32"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-16">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-accent-foreground sm:text-sm">
              Welcome from the Director
            </p>
            <h2
              id="director-message-title"
              className="mt-5 max-w-xl text-balance text-4xl font-semibold text-foreground sm:text-5xl lg:text-6xl"
            >
              {siteConfig.directorMessage.title}
            </h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
              {siteConfig.directorMessage.summary}
            </p>
            <ButtonLink
              href="/about#director-message"
              variant="secondary"
              className="mt-8"
            >
              Read the Director’s welcome
              <MoveRight aria-hidden="true" className="size-5" />
            </ButtonLink>
          </div>

          <figure className="relative overflow-hidden border border-border bg-surface p-8 shadow-card sm:p-10 lg:p-14">
            <Quote
              aria-hidden="true"
              className="absolute right-8 top-8 size-20 text-brand-soft-strong sm:right-10 sm:top-10 sm:size-28"
              strokeWidth={1}
            />

            <div className="relative">
              <p className="max-w-2xl text-sm font-extrabold uppercase tracking-[0.16em] text-brand">
                {siteConfig.directorMessage.greeting}
              </p>
              <blockquote className="mt-10 max-w-3xl text-pretty text-xl font-semibold leading-9 text-foreground sm:text-2xl sm:leading-10 lg:text-3xl lg:leading-[1.45]">
                “{siteConfig.directorMessage.quotation}”
              </blockquote>

              <figcaption className="mt-10 flex items-center gap-5 border-t border-border pt-8">
                <Image
                  src="/brand/inaayatullah-crest.png"
                  alt="Inaayatullah International Academy circular crest"
                  width={72}
                  height={72}
                  className="size-16 shrink-0 rounded-full object-contain sm:size-[72px]"
                />
                <div>
                  <p className="font-bold text-foreground">
                    {siteConfig.founder.name}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {siteConfig.founder.role}
                  </p>
                </div>
              </figcaption>

              <p className="mt-7 text-sm font-bold text-brand">
                {siteConfig.directorMessage.closing}
              </p>
            </div>
          </figure>
        </div>
      </Container>
    </section>
  );
}
