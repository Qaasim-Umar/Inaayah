import { MoveRight } from "lucide-react";
import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/cn";
import { getSiteConfig, localizeHref, type Locale } from "@/lib/i18n";

type GalleryItem = ReturnType<typeof getSiteConfig>["gallery"]["items"][number];

function GalleryTile({
  item,
  index,
  isFullGallery,
}: {
  item: GalleryItem;
  index: number;
  isFullGallery: boolean;
}) {
  const headingClassName = cn(
    "font-semibold sm:mt-2",
    !isFullGallery && index === 0
      ? "text-xl sm:text-3xl"
      : "text-base sm:text-2xl",
  );

  return (
    <figure
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

      <figcaption className="gallery-caption absolute inset-x-0 bottom-0 p-4 text-center text-brand-foreground sm:p-6 sm:text-left">
        <p className="hidden text-xs font-extrabold uppercase tracking-[0.16em] text-sky md:block">
          {item.category}
        </p>
        {isFullGallery ? (
          <h4 className={headingClassName}>{item.title}</h4>
        ) : (
          <h3 className={headingClassName}>{item.title}</h3>
        )}
      </figcaption>
    </figure>
  );
}

export function GalleryPreview({ showViewAll = true, locale = "en" }: { showViewAll?: boolean; locale?: Locale }) {
  const siteConfig = getSiteConfig(locale);
  const isArabic = locale === "ar";
  const isFullGallery = !showViewAll;
  const previewItems = siteConfig.gallery.items.slice(0, 3);
  const gallerySections = siteConfig.gallery.sections.map((section) => ({
    ...section,
    items: siteConfig.gallery.items.filter((item) => item.group === section.id),
  }));

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
              {isArabic ? "الحياة في عناية الله" : "Life at Inaayatullah"}
            </p>
            <h2
              id="gallery-title"
              className="mx-auto mt-5 max-w-3xl text-balance text-4xl font-semibold text-foreground sm:text-5xl lg:mx-0 lg:text-6xl"
            >
              {isArabic ? "لحظات تصنع شخصية كل طالب." : "Moments that shape every learner."}
            </h2>
          </div>
          <div className="mx-auto max-w-xl lg:mx-0 lg:justify-self-end">
            <p className="text-base leading-8 text-muted-foreground sm:text-lg">
              {siteConfig.gallery.introduction}
            </p>
            {showViewAll && (
              <ButtonLink href={localizeHref("/gallery", locale)} variant="primary" className="mt-6 shadow-soft">
                {isArabic ? "شاهد معرض الصور كاملًا" : "View the full gallery"}
                <MoveRight aria-hidden="true" className="rtl-flip size-5" />
              </ButtonLink>
            )}
          </div>
        </Reveal>

        {isFullGallery ? (
          <div className="mt-14 space-y-16 sm:mt-16 sm:space-y-20">
            {gallerySections.map((section, sectionIndex) => (
              <section
                key={section.id}
                aria-labelledby={`gallery-section-${section.id}`}
                className="border-t border-border pt-8 sm:pt-10"
              >
                <Reveal className="grid gap-3 text-center sm:grid-cols-[0.8fr_1.2fr] sm:items-end sm:gap-10 sm:text-left">
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-accent-foreground">
                      {isArabic ? "المجموعة" : "Collection"} {String(sectionIndex + 1).padStart(2, "0")}
                    </p>
                    <h3
                      id={`gallery-section-${section.id}`}
                      className="mt-3 text-balance text-3xl font-semibold text-foreground sm:text-4xl"
                    >
                      {section.title}
                    </h3>
                  </div>
                  <p className="mx-auto max-w-xl text-base leading-7 text-muted-foreground sm:mx-0 sm:justify-self-end sm:text-lg sm:leading-8">
                    {section.description}
                  </p>
                </Reveal>

                <div className="mt-7 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-4 lg:grid-cols-3">
                  {section.items.map((item, index) => (
                    <GalleryTile
                      key={item.title}
                      item={item}
                      index={index}
                      isFullGallery
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:min-h-[32rem] lg:grid-cols-[1.3fr_0.7fr] lg:grid-rows-2">
            {previewItems.map((item, index) => (
              <GalleryTile
                key={item.title}
                item={item}
                index={index}
                isFullGallery={false}
              />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
