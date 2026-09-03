import { MoveRight } from "lucide-react";
import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

const principles = [
  {
    number: "01",
    title: "Faith",
    description: "The Qur’an and Sunnah guide learning, worship and character.",
  },
  {
    number: "02",
    title: "Knowledge",
    description: "Strong academics build curiosity, confidence and sound judgement.",
  },
  {
    number: "03",
    title: "Service",
    description: "Learners grow to lead responsibly and benefit wider society.",
  },
] as const;

export function WhoWeAre() {
  return (
    <section
      id="who-we-are"
      aria-labelledby="who-we-are-title"
      className="scroll-mt-32 bg-background py-20 sm:py-24 lg:py-32"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-20 xl:gap-28">
          <div>
            <p className="flex items-center gap-4 text-xs font-extrabold uppercase tracking-[0.2em] text-accent-foreground sm:text-sm">
              <span aria-hidden="true" className="h-px w-10 bg-accent" />
              Who we are
            </p>
            <h2
              id="who-we-are-title"
              className="mt-6 max-w-3xl text-balance text-4xl font-semibold text-foreground sm:text-5xl lg:text-6xl"
            >
              Developing faith, knowledge and character together.
            </h2>
            <div className="mt-7 max-w-2xl space-y-5 text-base leading-8 text-muted-foreground sm:text-lg">
              <p>
                Inaayatullah International Academy is a private educational
                institution in Iwo, Osun State, integrating authentic Islamic
                teachings with high quality contemporary learning.
              </p>
              <p>
                Every child is uniquely created by Allah with immense potential.
                Our caring environment helps learners discover their abilities,
                pursue excellence and become confident lifelong learners.
              </p>
            </div>

            <div className="mt-10 grid border-l border-t border-border sm:grid-cols-3">
              {principles.map((item) => (
                <div key={item.number} className="border-b border-r border-border p-5">
                  <span className="text-xs font-extrabold tracking-[0.16em] text-accent-foreground">
                    {item.number}
                  </span>
                  <h3 className="mt-4 text-2xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <ButtonLink href="/about" variant="secondary" className="mt-8">
              Discover the Academy
              <MoveRight aria-hidden="true" className="size-5" />
            </ButtonLink>
          </div>

          <div className="relative pb-8 lg:pb-12">
            <div className="relative aspect-[4/5] overflow-hidden bg-muted">
              <Image
                src={siteConfig.media.whoWeAre.src}
                alt={siteConfig.media.whoWeAre.alt}
                fill
                sizes="(min-width: 1024px) 42vw, (min-width: 640px) 72vw, 90vw"
                className="object-cover"
              />
            </div>
            <blockquote className="relative -mt-20 ml-5 max-w-sm bg-brand p-7 text-brand-foreground shadow-card sm:ml-10 sm:p-8 lg:absolute lg:-bottom-4 lg:-left-12 lg:ml-0 lg:mt-0">
              <p className="font-display text-2xl font-semibold leading-snug">
                “Education is the harmonious development of the mind, body and soul.”
              </p>
              <footer className="mt-5 text-xs font-extrabold uppercase tracking-[0.16em] text-sky">
                Our educational philosophy
              </footer>
            </blockquote>
          </div>
        </div>
      </Container>
    </section>
  );
}
