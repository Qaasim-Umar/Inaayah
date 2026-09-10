import { ArrowUpRight, BookOpenText, Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site";

export function TahfizSpotlight() {
  return (
    <section id="tahfiz" aria-labelledby="tahfiz-title" className="section-space">
      <Container>
        <Reveal className="relative isolate overflow-hidden rounded-[1.75rem] bg-brand text-brand-foreground lg:grid lg:grid-cols-[1.2fr_0.8fr]">
          <div className="p-6 py-9 text-left sm:p-10 lg:p-12">
            <p className="eyebrow text-left !text-sky">The heart of our Academy</p>
            <h2 id="tahfiz-title" className="mx-0 mt-4 max-w-xl text-left text-balance text-3xl font-medium sm:text-4xl lg:text-5xl">Rooted in faith.<br /><em className="font-normal text-sky">Carried through life.</em></h2>
            <p className="mx-0 mt-5 max-w-lg text-base leading-7 text-brand-foreground/80">A meaningful connection with the Qur’an, nurtured through careful memorisation, understanding and daily practice.</p>
            <ul className="stagger-list mx-0 mt-6 grid max-w-md gap-3 sm:max-w-none sm:grid-cols-2">
              {["Personal memorisation plans", "Tajweed and daily revision", "Arabic language learning", "Character and leadership"].map((item) => <li key={item} className="flex items-start justify-start gap-2.5 text-left text-sm leading-6"><Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-sky" />{item}</li>)}
            </ul>
            <ButtonLink href="/#admissions" variant="accent" className="mt-7">Begin the Tahfiz journey <ArrowUpRight aria-hidden="true" className="size-4" /></ButtonLink>
          </div>
          <div className="relative flex items-center justify-center overflow-hidden border-t border-brand-foreground/15 bg-brand-foreground/5 px-6 py-9 lg:border-l lg:border-t-0">
            <div aria-hidden="true" className="faith-pattern absolute inset-0 text-brand-foreground/[0.06]" />
            <div className="relative flex w-full max-w-64 flex-col items-center rounded-t-[7rem] rounded-b-2xl border border-sky/30 bg-brand px-5 py-8 text-center">
              <BookOpenText aria-hidden="true" className="size-8 text-gold" strokeWidth={1.3} />
              <p className="mt-3 font-display text-7xl leading-none text-brand-foreground">{siteConfig.tahfiz.completionYears}</p>
              <p className="mt-3 text-xs font-extrabold uppercase tracking-[0.18em] text-sky">Years of focused Tahfiz</p>
              <span aria-hidden="true" className="my-5 h-px w-9 bg-gold/70" />
              <p className="max-w-44 text-sm leading-6 text-brand-foreground/80">Qur’an memorisation.<br />A foundation for a lifetime.</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
