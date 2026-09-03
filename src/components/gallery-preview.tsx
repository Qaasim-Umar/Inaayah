import { MoveRight } from "lucide-react";
import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/cn";

export function GalleryPreview() {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-title"
      className="scroll-mt-32 bg-surface py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="grid gap-7 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-accent-foreground sm:text-sm">
              Life at Inaayatullah
            </p>
            <h2
              id="gallery-title"
              className="mt-5 max-w-3xl text-balance text-4xl font-semibold text-foreground sm:text-5xl lg:text-6xl"
            >
              Moments that shape every learner.
            </h2>
          </div>
          <div className="max-w-xl lg:justify-self-end">
            <p className="text-base leading-8 text-muted-foreground sm:text-lg">
              {siteConfig.gallery.introduction}
            </p>
            <ButtonLink href="/gallery" variant="primary" className="mt-6">
              View the full gallery
              <MoveRight aria-hidden="true" className="size-5" />
            </ButtonLink>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:min-h-[32rem] lg:grid-cols-[1.3fr_0.7fr] lg:grid-rows-2">
          {siteConfig.gallery.items.map((item, index) => (
            <figure
              key={item.title}
              className={cn(
                "group relative isolate overflow-hidden bg-muted",
                index === 0
                  ? "col-span-2 aspect-[4/3] lg:col-span-1 lg:row-span-2 lg:aspect-auto"
                  : "aspect-square lg:aspect-auto",
              )}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes={
                  index === 0
                    ? "(min-width: 1024px) 65vw, 100vw"
                    : "(min-width: 1024px) 35vw, 50vw"
                }
                className="object-cover transition-transform duration-300 group-hover:scale-[1.025]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-brand/90 via-brand/15 to-transparent"
              />

              {item.isPlaceholder ? (
                <span className="absolute right-3 top-3 bg-sky px-3 py-1.5 text-[0.65rem] font-extrabold uppercase tracking-[0.12em] text-accent-foreground sm:right-4 sm:top-4 sm:text-xs">
                  Illustrative preview
                </span>
              ) : null}

              <figcaption className="absolute inset-x-0 bottom-0 p-4 text-brand-foreground sm:p-6">
                <p className="text-[0.65rem] font-extrabold uppercase tracking-[0.16em] text-sky sm:text-xs">
                  {item.category}
                </p>
                <h3
                  className={cn(
                    "mt-2 font-semibold",
                    index === 0
                      ? "text-2xl sm:text-3xl"
                      : "text-lg sm:text-2xl",
                  )}
                >
                  {item.title}
                </h3>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
