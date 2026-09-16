import type { Metadata } from "next";
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  BookOpen,
  Compass,
  HandHeart,
  Lightbulb,
  MoonStar,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import Image from "next/image";

import { DirectorWelcome } from "@/components/director-welcome";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About the Academy",
  description:
    "Discover the vision, values, educational philosophy and leadership of Inaayatullah International Academy.",
};

const academyFacts = [
  { title: "A complete learning journey", detail: "Early Years to Secondary" },
  { title: "Rooted in the Qur’an", detail: "Faith, character and knowledge" },
  { title: "Nationally relevant learning", detail: siteConfig.curriculum },
  { title: "A caring community", detail: "Day and boarding education" },
] as const;

const coreValues = [
  {
    icon: MoonStar,
    title: "Faith",
    description: "We nurture a strong relationship with Allah through the Qur’an and Sunnah.",
    style: "border-sky/80 bg-gradient-to-br from-brand-soft via-surface to-surface",
    iconStyle: "bg-sky/50 text-brand",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We pursue the highest standards in academics, character and service.",
    style: "border-gold/80 bg-gradient-to-br from-sand via-surface to-surface",
    iconStyle: "bg-sand text-brand",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description: "Honesty, trustworthiness and accountability guide every part of school life.",
    style: "border-sage-foreground/35 bg-gradient-to-br from-sage via-surface to-surface",
    iconStyle: "bg-sage text-sage-foreground",
  },
  {
    icon: BookOpen,
    title: "Knowledge",
    description: "Learning is a lifelong journey that equips us to benefit humanity.",
    style: "border-brand/25 bg-gradient-to-br from-brand/10 via-surface to-surface",
    iconStyle: "bg-brand/10 text-brand",
  },
  {
    icon: UsersRound,
    title: "Respect",
    description: "We value every individual, regardless of background, culture or ability.",
    style: "border-sky/80 bg-gradient-to-br from-brand-soft via-surface to-surface",
    iconStyle: "bg-sky/50 text-brand",
  },
  {
    icon: HandHeart,
    title: "Responsibility",
    description: "Learners grow into responsible citizens who care for people and the environment.",
    style: "border-gold/80 bg-gradient-to-br from-sand via-surface to-surface",
    iconStyle: "bg-sand text-brand",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We encourage curiosity, creativity and thoughtful solutions to real problems.",
    style: "border-sage-foreground/35 bg-gradient-to-br from-sage via-surface to-surface",
    iconStyle: "bg-sage text-sage-foreground",
  },
  {
    icon: Compass,
    title: "Leadership",
    description: "Every learner is inspired to become a positive influence and servant leader.",
    style: "border-brand/25 bg-gradient-to-br from-brand/10 via-surface to-surface",
    iconStyle: "bg-brand/10 text-brand",
  },
] as const;

const philosophyPillars = [
  "Academic Excellence",
  "Islamic Morality",
  "Leadership Development",
  "Innovation and Creativity",
  "Service to Humanity",
] as const;

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <header className="section-space">
          <Container className="text-center">
            <Reveal>
              <p className="eyebrow">About Inaayatullah</p>
              <h1 className="mx-auto mt-5 max-w-3xl text-balance text-4xl font-medium text-brand sm:text-5xl lg:text-6xl">
                Education with purpose.<br />
                <span className="font-normal">Character for life.</span>
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-muted-foreground">
                Inaayatullah International Academy brings authentic Islamic teaching and high quality contemporary learning together in one caring educational community.
              </p>
              <ButtonLink href="#our-story" variant="text" className="mt-4">
                Discover our story <ArrowDown aria-hidden="true" className="size-4" />
              </ButtonLink>
            </Reveal>
          </Container>
        </header>

        <section aria-labelledby="academy-facts-title" className="bg-brand text-brand-foreground">
          <h2 id="academy-facts-title" className="sr-only">The Academy at a glance</h2>
          <Container className="grid divide-y divide-brand-foreground/15 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            {academyFacts.map((fact, index) => (
              <div key={fact.title} className="px-2 py-7 text-center sm:px-6 sm:py-9 lg:text-left">
                <p className="text-[0.65rem] font-extrabold uppercase tracking-[0.16em] text-sky">0{index + 1}</p>
                <h3 className="mt-3 text-lg font-semibold text-brand-foreground">{fact.title}</h3>
                <p className="mt-2 text-sm leading-6 text-brand-foreground/65">{fact.detail}</p>
              </div>
            ))}
          </Container>
        </section>

        <section id="our-story" aria-labelledby="our-story-title" className="section-space bg-surface-muted">
          <Container>
            <Reveal className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
              <figure className="relative min-h-80 overflow-hidden rounded-[2rem] bg-muted sm:min-h-[30rem]">
                <Image
                  src={siteConfig.media.whoWeAre.src}
                  alt={siteConfig.media.whoWeAre.alt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="object-cover"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-brand/90 via-brand/10 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-6 text-brand-foreground sm:p-8">
                  <p className="max-w-sm text-balance font-heading text-2xl font-semibold leading-snug sm:text-3xl">Every child carries immense potential.</p>
                  {siteConfig.media.whoWeAre.isPlaceholder ? <p className="mt-3 text-xs text-brand-foreground/75"><span className="md:hidden">Preview</span><span className="hidden md:inline">Illustrative preview</span></p> : null}
                </figcaption>
              </figure>

              <div className="text-center lg:text-left">
                <p className="eyebrow text-center lg:text-left">Who we are</p>
                <h2 id="our-story-title" className="section-heading mx-auto mt-4 max-w-3xl lg:mx-0">
                  A balanced education. <span className="font-normal">A confident future.</span>
                </h2>
                <div className="mx-auto mt-6 max-w-2xl space-y-5 text-base leading-8 text-muted-foreground lg:mx-0">
                  <p>
                    Inaayatullah International Academy is a private educational institution in Iwo, Osun State, dedicated to providing an outstanding education that integrates authentic Islamic teachings with high quality contemporary learning.
                  </p>
                  <p>
                    The Academy was founded to nurture morally upright, academically accomplished and socially responsible future leaders. Every learner is respected as an individual created by Allah with distinct abilities and immense potential.
                  </p>
                  <p>
                    Our educational pathway spans Early Years, Nursery, Primary, Secondary, Tahfizul Qur’an and Arrabiyyah, giving families a complete journey shaped by knowledge, discipline, compassion and a strong Islamic identity.
                  </p>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        <DirectorWelcome />

        <section aria-labelledby="vision-title" className="section-space bg-brand text-brand-foreground">
          <Container>
            <Reveal className="text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-sky">Our direction</p>
              <h2 id="vision-title" className="mx-auto mt-4 max-w-3xl text-balance text-4xl font-semibold text-brand-foreground sm:text-5xl lg:text-6xl">
                Clear in vision. <span className="font-normal text-sky">Steadfast in purpose.</span>
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              <Reveal>
                <article className="h-full rounded-[1.75rem] bg-brand-foreground p-7 text-brand sm:p-9">
                  <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-accent-foreground">Our vision</p>
                  <p className="mt-5 text-lg leading-8 text-brand sm:text-xl sm:leading-9">
                    To become a leading international centre of excellence in Islamic and contemporary education, recognised for nurturing morally upright, academically accomplished, innovative and globally competitive leaders who positively impact society.
                  </p>
                </article>
              </Reveal>
              <Reveal delay={80}>
                <article className="h-full rounded-[1.75rem] border border-brand-foreground/20 bg-brand-foreground/5 p-7 sm:p-9">
                  <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-sky">Our mission</p>
                  <p className="mt-5 text-lg leading-8 text-brand-foreground/85 sm:text-xl sm:leading-9">
                    To provide an inspiring educational environment where learners receive a balanced education rooted in the Qur’an and Sunnah while acquiring the knowledge, skills, creativity and confidence required to excel in an ever changing world.
                  </p>
                </article>
              </Reveal>
            </div>
          </Container>
        </section>

        <section aria-labelledby="values-title" className="section-space bg-background">
          <Container>
            <Reveal className="text-center">
              <p className="eyebrow">What guides us</p>
              <h2 id="values-title" className="section-heading mx-auto mt-4 max-w-3xl">
                Values we teach. <span className="font-normal">Values we live.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
                These principles shape how we learn, lead, care for one another and contribute to society.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {coreValues.map(({ icon: Icon, title, description, style, iconStyle }, index) => (
                <Reveal key={title} delay={(index % 4) * 60}>
                  <article className={`lift-card h-full rounded-2xl border p-6 ${style}`}>
                    <span className={`card-icon flex size-11 items-center justify-center rounded-xl ${iconStyle}`}>
                      <Icon aria-hidden="true" className="size-5" strokeWidth={1.6} />
                    </span>
                    <h3 className="mt-5 text-xl font-semibold text-brand">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <section aria-labelledby="philosophy-title" className="section-space bg-surface-muted">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:gap-16">
              <Reveal className="text-center lg:sticky lg:top-36 lg:text-left">
                <p className="eyebrow text-center lg:text-left">Our educational philosophy</p>
                <h2 id="philosophy-title" className="section-heading mx-auto mt-4 max-w-2xl lg:mx-0">
                  Developing the mind, body <span className="font-normal">and soul.</span>
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-muted-foreground lg:mx-0">
                  Five connected pillars guide every aspect of learning and school life at Inaayatullah.
                </p>
              </Reveal>

              <ol className="grid gap-4 sm:grid-cols-2">
                {philosophyPillars.map((pillar, index) => (
                  <Reveal key={pillar} delay={(index % 2) * 70} className={index === philosophyPillars.length - 1 ? "sm:col-span-2" : undefined}>
                    <li className="flex h-full items-center gap-5 rounded-2xl border border-border/70 bg-surface p-6 shadow-card">
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-extrabold text-brand-foreground">0{index + 1}</span>
                      <h3 className="text-xl font-semibold text-brand">{pillar}</h3>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
          </Container>
        </section>

        <section aria-labelledby="about-cta-title" className="bg-surface py-14 sm:py-16">
          <Container>
            <Reveal className="relative overflow-hidden rounded-[2rem] bg-brand text-brand-foreground shadow-soft">
              <div aria-hidden="true" className="absolute -right-20 -top-24 size-64 rounded-full border border-sky/20" />
              <div aria-hidden="true" className="absolute -right-8 -top-12 size-40 rounded-full border border-sky/15" />

              <div className="relative grid lg:grid-cols-[1fr_20rem]">
                <div className="px-7 py-10 text-center sm:px-10 sm:py-12 lg:px-12 lg:text-left">
                  <div className="flex items-center justify-center gap-3 lg:justify-start">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-sky text-accent-foreground">
                      <Compass aria-hidden="true" className="size-5" strokeWidth={1.7} />
                    </span>
                    <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-sky">Begin the journey</p>
                  </div>
                  <h2 id="about-cta-title" className="mx-auto mt-6 max-w-2xl text-balance text-3xl font-semibold text-brand-foreground sm:text-4xl lg:mx-0 lg:text-5xl">
                    A purposeful education begins with a conversation.
                  </h2>
                  <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-brand-foreground/70 lg:mx-0">
                    Speak with the Academy and discover the learning pathway that is right for your child.
                  </p>
                </div>

                <div className="flex items-center border-t border-brand-foreground/15 bg-brand-foreground/[0.06] p-7 sm:p-10 lg:border-l lg:border-t-0">
                  <div className="w-full text-center lg:text-left">
                    <p className="text-sm font-semibold leading-7 text-brand-foreground/70">
                      Early Years, Nursery, Primary, Secondary, Tahfiz and Arrabiyyah.
                    </p>
                    <ButtonLink href="/#admissions" variant="accent" className="mt-6 w-full">
                      Explore admissions <ArrowUpRight aria-hidden="true" className="size-4" />
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
