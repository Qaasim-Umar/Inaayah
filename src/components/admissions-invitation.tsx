import { ArrowUpRight, MessageCircle } from "lucide-react";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site";
import { getWhatsAppHref } from "@/lib/whatsapp";

export function AdmissionsInvitation() {
  const whatsAppHref = getWhatsAppHref(
    siteConfig.contact.whatsapp,
    "Assalamu Alaikum. I would like to enquire about admission to Inaayatullah International Academy.",
  );

  return (
    <section
      id="admissions"
      aria-labelledby="admissions-title"
      className="relative isolate overflow-hidden bg-brand text-brand-foreground"
    >
      <Image
        src={siteConfig.media.secondary.src}
        alt={siteConfig.media.secondary.alt}
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-brand/25" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-brand via-brand/80 to-brand/20 lg:bg-gradient-to-r lg:from-brand lg:via-brand/80 lg:to-brand/55" />
      <Container>
        <Reveal className="relative py-10 text-center sm:py-12 lg:py-14 lg:text-left">
          <div className="flex items-center justify-center gap-5 lg:justify-between">
            <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-sky">
              <span aria-hidden="true" className="admissions-pulse size-2 rounded-full bg-success" />
              Admissions now open
            </p>
            <p className="hidden text-xs font-bold uppercase tracking-[0.12em] text-brand-foreground/60 sm:block">Iwo, Osun State</p>
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-[1.14fr_0.86fr] lg:items-end lg:gap-12">
            <h2 id="admissions-title" className="mx-auto max-w-3xl text-balance text-3xl font-medium leading-tight text-brand-foreground sm:text-4xl lg:mx-0 lg:text-5xl">
              Their next chapter. <em className="font-normal text-sky">Our shared journey.</em>
            </h2>
            <div className="lg:pb-1">
              <p className="mx-auto max-w-lg text-base leading-7 text-brand-foreground/80 lg:mx-0">
                Give your child a place to grow in knowledge, faith and confidence. Begin their journey with Inaayatullah International Academy.
              </p>
              <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap lg:justify-start">
                <ButtonLink
                  href={whatsAppHref ?? "/#contact"}
                  variant="accent"
                  className="admissions-primary-cta min-h-14 w-full px-7 text-base sm:w-auto"
                  {...(whatsAppHref ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  {whatsAppHref ? "Start your application" : "Request an admission form"}
                  {whatsAppHref ? <MessageCircle aria-hidden="true" className="size-4" /> : <ArrowUpRight aria-hidden="true" className="size-4" />}
                </ButtonLink>
                <ButtonLink href="/#academic-programmes" variant="outline-light" className="w-full sm:w-auto">
                  Explore programmes <ArrowUpRight aria-hidden="true" className="size-4" />
                </ButtonLink>
              </div>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 border-t border-brand-foreground/20 pt-4 text-xs font-bold text-brand-foreground/65 lg:justify-start">
            <span>Early Years</span><span aria-hidden="true" className="size-1 rounded-full bg-sky" />
            <span>Primary School</span><span aria-hidden="true" className="size-1 rounded-full bg-sky" />
            <span>Secondary School</span><span aria-hidden="true" className="size-1 rounded-full bg-sky" />
            <span>Tahfiz and Arrabiyyah</span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
