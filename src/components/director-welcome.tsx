import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site";

export function DirectorWelcome() {
  return (
    <section
      id="director-message"
      aria-labelledby="director-message-title"
      className="bg-surface py-12 sm:py-14 lg:py-16"
    >
      <Container>
        <Reveal className="border-t-4 border-brand pt-6 sm:pt-8">
          <header className="grid gap-5 text-center lg:grid-cols-[1fr_auto] lg:items-end lg:gap-10 lg:text-left">
            <div>
              <p className="eyebrow">Leadership and purpose</p>
              <h2 id="director-message-title" className="mx-auto mt-3 max-w-4xl text-balance text-3xl font-medium leading-tight text-brand sm:text-4xl lg:mx-0 lg:text-5xl">
                Welcome message <em className="font-normal">from the Director.</em>
              </h2>
              <p className="mt-4 font-display text-base italic leading-7 text-muted-foreground sm:text-lg">
                {siteConfig.directorMessage.title}
              </p>
            </div>
            <div className="flex items-center justify-center gap-4 text-left lg:min-w-64 lg:justify-end">
              <Image src="/brand/inaayatullah-crest.png" alt="Academy crest" width={48} height={48} className="size-12 shrink-0 rounded-full" />
              <div>
                <p className="text-sm font-extrabold text-brand">{siteConfig.founder.name}</p>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">Director</p>
              </div>
            </div>
          </header>

          <div className="mt-8 grid gap-6 border-t border-border pt-7 lg:grid-cols-[0.24fr_1fr] lg:gap-10 lg:pt-9">
            <div aria-hidden="true" className="hidden lg:block">
              <p className="font-display text-7xl leading-none text-brand/10">IIA</p>
              <span className="mt-5 block h-14 w-px bg-brand/25" />
            </div>
            <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
              <p className="text-xs font-extrabold uppercase tracking-[0.11em] text-muted-foreground">
                {siteConfig.directorMessage.greeting}
              </p>
              <p className="mt-5 text-base leading-8 text-foreground sm:text-lg sm:leading-9 lg:first-letter:float-left lg:first-letter:mr-3 lg:first-letter:mt-1 lg:first-letter:font-display lg:first-letter:text-6xl lg:first-letter:font-medium lg:first-letter:leading-[0.78] lg:first-letter:text-brand">
                {siteConfig.directorMessage.paragraphs[0]}
              </p>
              <details className="group mt-6 border-t border-border pt-2">
                <summary className="flex min-h-12 list-none items-center justify-between gap-4 py-2 text-sm font-extrabold text-brand [&::-webkit-details-marker]:hidden">
                  <span>Read the full message</span>
                  <ChevronDown aria-hidden="true" className="size-5 shrink-0 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <div className="disclosure-content space-y-5 pb-2 pt-5 text-left text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                  {siteConfig.directorMessage.paragraphs.slice(1).map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  <p className="pt-2 font-display text-lg italic text-brand">{siteConfig.directorMessage.closing}</p>
                </div>
              </details>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
