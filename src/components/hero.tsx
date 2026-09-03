import { MoveRight } from "lucide-react";
import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-brand text-brand-foreground"
    >
      <div aria-hidden="true" className="hero-editorial-pattern absolute inset-0 -z-10" />

      <Container className="grid min-h-[780px] grid-rows-[auto_1fr] lg:min-h-[calc(100dvh-9rem)] lg:max-h-[900px] lg:grid-cols-[3fr_2fr] lg:grid-rows-1">
        <div className="relative z-10 flex flex-col justify-center pb-4 pt-16 sm:pt-20 lg:py-20">
          <h1
            id="hero-title"
            className="max-w-4xl text-balance text-5xl font-semibold tracking-[-0.04em] text-brand-foreground sm:text-6xl lg:text-6xl xl:text-7xl"
          >
            Where faith inspires <em className="font-display text-sky">excellence.</em>
          </h1>
          <p className="mt-7 max-w-2xl text-pretty text-base leading-8 text-brand-foreground/80 sm:text-lg">
            A distinguished private academy combining authentic Islamic
            education with contemporary learning to prepare principled,
            knowledgeable and globally capable leaders.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/admissions" variant="accent">
              Begin an admission enquiry
              <MoveRight aria-hidden="true" className="size-5" />
            </ButtonLink>
            <ButtonLink href="/academics" variant="outline-light">
              Explore our programmes
            </ButtonLink>
          </div>
        </div>

        <div className="relative min-h-[390px] sm:min-h-[450px] lg:min-h-0">
          <div
            aria-hidden="true"
            className="absolute bottom-10 left-1/2 aspect-square w-[92%] -translate-x-1/2 rounded-full border border-brand-foreground/10 bg-brand-foreground/5 lg:bottom-16 lg:w-[105%]"
          />
          <Image
            src={siteConfig.media.hero.src}
            alt={siteConfig.media.hero.alt}
            fill
            priority
            sizes="(min-width: 1024px) 46vw, 90vw"
            className="object-contain object-bottom"
          />
        </div>
      </Container>
    </section>
  );
}
