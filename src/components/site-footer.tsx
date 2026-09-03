import { ArrowUpRight, Clock3, MapPin, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";
import { getWhatsAppHref } from "@/lib/whatsapp";

const contactMessage =
  "Assalamu Alaikum. I would like to contact Inaayatullah International Academy.";

export function SiteFooter() {
  const whatsAppHref = getWhatsAppHref(
    siteConfig.contact.whatsapp,
    contactMessage,
  );
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand text-brand-foreground">
      <Container className="py-12 sm:py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5 lg:pr-10">
            <Link
              href="/"
              aria-label={`${siteConfig.name} home`}
              className="inline-flex items-center gap-4 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-focus/35"
            >
              <span className="relative size-16 shrink-0 overflow-hidden rounded-full bg-surface ring-4 ring-brand-foreground/10 sm:size-20">
                <Image
                  src="/brand/inaayatullah-crest.png"
                  alt="Inaayatullah International Academy circular crest"
                  fill
                  sizes="(min-width: 640px) 80px, 64px"
                  className="object-cover"
                />
              </span>
              <span>
                <span className="block font-display text-2xl font-semibold leading-tight sm:text-3xl">
                  Inaayatullah
                </span>
                <span className="mt-1 block text-xs font-extrabold uppercase tracking-[0.14em] text-brand-foreground/70">
                  International Academy
                </span>
              </span>
            </Link>

            <p className="mt-6 max-w-md text-lg font-bold leading-8 text-brand-foreground/90">
              {siteConfig.motto}
            </p>
            <p className="mt-2 max-w-md text-sm leading-7 text-brand-foreground/70">
              Islamic values and contemporary learning for knowledgeable,
              responsible and globally competitive leaders.
            </p>

            <ButtonLink
              href={whatsAppHref ?? "/contact"}
              variant="outline-light"
              className="mt-7"
              {...(whatsAppHref
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
            >
              {whatsAppHref ? "Chat with the Academy" : "Contact the Academy"}
              {whatsAppHref ? (
                <MessageCircle aria-hidden="true" className="size-5" />
              ) : (
                <ArrowUpRight aria-hidden="true" className="size-5" />
              )}
            </ButtonLink>
          </div>

          <nav aria-label="Footer navigation" className="lg:col-span-3">
            <h2 className="text-xs font-extrabold uppercase tracking-[0.18em] text-sky">
              Explore
            </h2>
            <ul className="mt-5 grid grid-cols-2 gap-x-5 gap-y-1 lg:grid-cols-1">
              {siteConfig.navigation.slice(1).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-11 items-center border-b border-transparent text-sm font-bold text-brand-foreground/80 transition-colors duration-200 hover:border-brand-foreground/40 hover:text-brand-foreground focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-focus/35"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <h2 className="text-xs font-extrabold uppercase tracking-[0.18em] text-sky">
              Visit and school hours
            </h2>

            <div className="mt-6 flex gap-4 border-b border-brand-foreground/15 pb-6">
              <MapPin
                aria-hidden="true"
                className="mt-1 size-5 shrink-0 text-sky"
                strokeWidth={1.8}
              />
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-brand-foreground/55">
                  Location
                </p>
                <p className="mt-2 text-sm font-bold leading-7">
                  {siteConfig.location}
                </p>
              </div>
            </div>

            <div className="mt-6 flex gap-4">
              <Clock3
                aria-hidden="true"
                className="mt-1 size-5 shrink-0 text-sky"
                strokeWidth={1.8}
              />
              <div className="min-w-0 flex-1">
                <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-brand-foreground/55">
                  School hours
                </p>
                <dl className="mt-3 space-y-3 text-sm">
                  {siteConfig.schoolHours.map((schedule) => (
                    <div
                      key={schedule.days}
                      className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4 lg:flex-col xl:flex-row"
                    >
                      <dt className="font-bold text-brand-foreground/90">
                        {schedule.days}
                      </dt>
                      <dd className="shrink-0 text-brand-foreground/65">
                        {schedule.hours}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-brand-foreground/15 pt-6 text-sm text-brand-foreground/60 sm:flex sm:items-center sm:justify-between sm:gap-6">
          <p>
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="mt-2 sm:mt-0">Iwo, Osun State, Nigeria</p>
        </div>
      </Container>
    </footer>
  );
}
