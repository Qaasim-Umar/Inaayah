import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

const heroButtonClassName =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-extrabold transition-[background-color,color,border-color,box-shadow] duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-focus/35";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-brand text-brand-foreground"
    >
      <div aria-hidden="true" className="hero-editorial-pattern hero-pattern-motion absolute inset-0 -z-10" />

      <Container className="grid min-h-[780px] min-w-0 grid-rows-[auto_1fr] lg:min-h-[calc(100dvh-9rem)] lg:max-h-[900px] lg:grid-cols-[3fr_2fr] lg:grid-rows-1">
        <div className="relative z-10 flex min-w-0 flex-col items-center justify-center pb-4 pt-16 text-center sm:pt-20 lg:items-start lg:py-20 lg:text-left">
          <h1
            id="hero-title"
            className="hero-title-enter w-full max-w-4xl text-balance font-hero text-[2rem] font-extrabold leading-[0.92] tracking-[-0.05em] text-brand-foreground sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            <span className="block whitespace-nowrap">
              Where faith inspires
            </span>
            <span className="block text-sky">
              excellence.
            </span>
          </h1>
          <p className="hero-copy-enter mt-7 w-full max-w-2xl text-pretty text-base leading-8 text-brand-foreground/80 sm:text-lg">
            Authentic Islamic education and contemporary learning that shape
            principled, knowledgeable and capable leaders.
          </p>

          <div className="hero-actions-enter mt-9 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:justify-center lg:justify-start">
            <Link
              href="/#admissions"
              className={`${heroButtonClassName} motion-button bg-accent text-accent-foreground shadow-soft hover:bg-accent-hover active:bg-accent-hover`}
            >
              Enquire about admission
              <MoveRight aria-hidden="true" className="size-5" />
            </Link>
            <Link
              href="/#academic-programmes"
              className={`${heroButtonClassName} motion-button border border-brand-foreground/35 bg-brand-foreground/10 text-brand-foreground hover:bg-brand-foreground/15 active:bg-brand-foreground/20`}
            >
              Explore our programmes
            </Link>
          </div>
        </div>

        <div className="hero-art-enter relative min-h-[390px] min-w-0 sm:min-h-[450px] lg:min-h-0">
          <div
            aria-hidden="true"
            className="hero-orbit absolute bottom-10 left-1/2 aspect-square w-[92%] -translate-x-1/2 rounded-full border border-brand-foreground/10 bg-brand-foreground/5 lg:bottom-16 lg:w-[105%]"
          />
          <div className="absolute bottom-10 left-1/2 aspect-square w-[84%] -translate-x-1/2 overflow-hidden rounded-full border-[6px] border-brand-foreground/10 bg-brand-foreground/5 shadow-2xl sm:w-[78%] lg:bottom-16 lg:w-[94%]">
            <Image
              src={siteConfig.media.hero.src}
              alt={siteConfig.media.hero.alt}
              fill
              priority
              sizes="(min-width: 1024px) 38vw, 78vw"
              className="hero-people object-cover object-center"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-brand/20 via-transparent to-transparent"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
