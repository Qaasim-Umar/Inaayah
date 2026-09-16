import { MoveRight } from "lucide-react";
import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/lib/site";

export function GalleryPreview({ showViewAll = true }: { showViewAll?: boolean }) {
  const isFullGallery = !showViewAll;
  const galleryItems = isFullGallery
    ? siteConfig.gallery.items
    : siteConfig.gallery.items.slice(0, 3);

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-title"
      className="scroll-mt-32 bg-background py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <Reveal className="grid gap-7 text-center lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16 lg:text-left">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-accent-foreground sm:text-sm">
              Life at Inaayatullah
            </p>
            <h2
              id="gallery-title"
              className="mx-auto mt-5 max-w-3xl text-balance text-4xl font-semibold text-foreground sm:text-5xl lg:mx-0 lg:text-6xl"
            >
              Moments that shape every learner.
            </h2>
          </div>
          <div className="mx-auto max-w-xl lg:mx-0 lg:justify-self-end">
            <p className="text-base leading-8 text-muted-foreground sm:text-lg">
              {siteConfig.gallery.introduction}
            </p>
            {showViewAll && <ButtonLink href="/gallery" variant="primary" className="mt-6 shadow-soft">
              View the full gallery
              <MoveRight aria-hidden="true" className="size-5" />
            </ButtonLink>}
          </div>
        </Reveal>

        <div
          className={cn(
            "mt-10 grid grid-cols-2 gap-3 sm:gap-4",
            isFullGallery
              ? "sm:grid-cols-2 lg:grid-cols-3"
              : "lg:min-h-[32rem] lg:grid-cols-[1.3fr_0.7fr] lg:grid-rows-2",
          )}
        >
          {galleryItems.map((item, index) => (
            <figure
              key={item.title}
              className={cn(
                "gallery-tile group relative isolate w-full min-w-0 overflow-hidden rounded-lg bg-muted",
                isFullGallery
                  ? "aspect-[4/5] sm:aspect-[4/3]"
                  : index === 0
                    ? "col-span-2 aspect-[4/3] lg:col-span-1 lg:row-span-2 lg:aspect-auto"
                    : "aspect-square min-h-52 sm:min-h-0 lg:aspect-auto",
              )}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes={
                  isFullGallery
                    ? "(min-width: 1024px) 33vw, 50vw"
                    : index === 0
                      ? "(min-width: 1024px) 65vw, 100vw"
                      : "(min-width: 1024px) 35vw, 50vw"
                }
                className="object-cover transition-transform duration-500 group-hover:scale-[1.055]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-brand/90 via-brand/15 to-transparent"
              />

              {item.isPlaceholder ? (
                <span className="absolute right-3 top-3 bg-sky px-3 py-1.5 text-[0.65rem] font-extrabold uppercase tracking-[0.12em] text-accent-foreground sm:right-4 sm:top-4 sm:text-xs">
                  <span className="md:hidden">Preview</span>
                  <span className="hidden md:inline">Illustrative preview</span>
                </span>
              ) : null}

              <figcaption className="gallery-caption absolute inset-x-0 bottom-0 p-4 text-center text-brand-foreground sm:p-6 sm:text-left">
                <p className="hidden text-xs font-extrabold uppercase tracking-[0.16em] text-sky md:block">
                  {item.category}
                </p>
                <h3
                  className={cn(
                    "font-semibold sm:mt-2",
                    !isFullGallery && index === 0
                      ? "text-xl sm:text-3xl"
                      : "text-base sm:text-2xl",
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
