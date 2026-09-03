import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

const pathways = [
  {
    number: "01",
    stage: "Foundation · Nursery 1 to 2",
    title: "Early Years & Nursery",
    description:
      "Guided play and structured early learning develop communication, numeracy, confidence and Islamic manners.",
    image: siteConfig.media.earlyYears,
    tone: "image",
  },
  {
    number: "02",
    stage: "Primary 1 to 6",
    title: "Primary School",
    description:
      "Strong foundations in literacy, mathematics, science, technology and character prepare learners for lasting success.",
    image: null,
    tone: "brand",
  },
  {
    number: "03",
    stage: "JSS 1 to 3 · SSS 1 to 3",
    title: "Secondary School",
    description:
      "Science, Commercial and Arts pathways prepare students for Nigerian examinations, higher education and leadership.",
    image: siteConfig.media.secondary,
    tone: "image",
  },
  {
    number: "04",
    stage: "Islamic Studies · Two year Hifz",
    title: "Tahfiz & Arrabiyyah",
    description:
      "Qur’an memorisation, Tajweed, Arabic and character mentoring develop disciplined and confident young Muslims.",
    image: null,
    tone: "sky",
  },
] as const;

export function AcademicProgrammes() {
  return (
    <section
      id="academic-programmes"
      aria-labelledby="academic-programmes-title"
      className="scroll-mt-32 bg-surface-muted py-20 sm:py-24 lg:py-32"
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-accent-foreground sm:text-sm">
              The learning pathway
            </p>
            <h2
              id="academic-programmes-title"
              className="mt-5 max-w-3xl text-balance text-4xl font-semibold text-foreground sm:text-5xl lg:text-6xl"
            >
              One journey, from first discoveries to future leadership.
            </h2>
          </div>

          <div className="max-w-xl lg:justify-self-end">
            <p className="text-base leading-8 text-muted-foreground sm:text-lg">
              A consistent standard of academic care, Islamic character and
              personal guidance supports every learner throughout the Academy.
            </p>
            <ButtonLink href="/academics" variant="secondary" className="mt-6">
              Explore the full curriculum
              <MoveRight aria-hidden="true" className="size-5" />
            </ButtonLink>
          </div>
        </div>

        <div className="mt-12 grid border-l border-t border-border md:grid-cols-2 xl:grid-cols-4">
          {pathways.map((pathway) => (
            <article
              key={pathway.number}
              className="group flex min-h-full flex-col border-b border-r border-border bg-surface"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                {pathway.image ? (
                  <Image
                    src={pathway.image.src}
                    alt={pathway.image.alt}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.025]"
                  />
                ) : (
                  <div
                    className={`flex h-full items-end justify-between p-7 ${
                      pathway.tone === "brand"
                        ? "bg-brand text-brand-foreground"
                        : "bg-sky text-brand"
                    }`}
                  >
                    <span className="text-xs font-extrabold uppercase tracking-[0.18em] opacity-75">
                      Inaayatullah
                    </span>
                    <span aria-hidden="true" className="font-display text-7xl font-bold leading-none opacity-40">
                      {pathway.number}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-7">
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-accent-foreground">
                  {pathway.stage}
                </p>
                <h3 className="mt-4 text-3xl font-semibold text-foreground">
                  {pathway.title}
                </h3>
                <p className="mt-4 flex-1 text-base leading-7 text-muted-foreground">
                  {pathway.description}
                </p>
                <Link
                  href="/academics"
                  className="mt-6 inline-flex min-h-12 items-center gap-2 self-start text-xs font-extrabold uppercase tracking-[0.16em] text-brand transition-colors duration-200 hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-focus/35"
                >
                  Learn more
                  <MoveRight aria-hidden="true" className="size-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
