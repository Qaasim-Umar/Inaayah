"use client";

import { ArrowUpRight, Languages, MapPin, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";
import {
  alternateLocaleHref,
  getSiteConfig,
  localizeHref,
  sharedCopy,
  type Locale,
} from "@/lib/i18n";

export function SiteHeader({ locale = "en" }: { locale?: Locale }) {
  const siteConfig = getSiteConfig(locale);
  const copy = sharedCopy[locale];
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateHash = () => setActiveHash(window.location.hash);
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButton.current?.focus();
      }
    }
    function closeOutside(event: PointerEvent) {
      if (event.target instanceof Node && !header.current?.contains(event.target)) setIsOpen(false);
    }
    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("pointerdown", closeOutside);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("pointerdown", closeOutside);
    };
  }, [isOpen]);

  function isNavigationItemActive(href: string) {
    href = localizeHref(href, locale);
    const homeHref = localizeHref("/", locale);
    const [hrefPath, hrefHash] = href.split("#");

    if (hrefHash) {
      return pathname === hrefPath && activeHash === `#${hrefHash}`;
    }

    if (href === homeHref) {
      return pathname === homeHref && activeHash === "";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <>
      <div className="bg-brand py-2 text-brand-foreground">
        <Container className="flex items-center justify-center gap-4 text-[0.65rem] font-semibold tracking-[0.04em] sm:justify-between sm:text-xs">
          <span className="inline-flex items-center gap-1.5"><MapPin aria-hidden="true" className="size-3" />{siteConfig.location}</span>
          <span className="hidden text-brand-foreground/80 sm:inline">{copy.topLine}</span>
        </Container>
      </div>
      <header ref={header} className="sticky top-0 z-50 border-b border-border/70 bg-surface shadow-sm" onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setIsOpen(false); }}>
        <Container className="relative">
          <Link href={localizeHref("/", locale)} aria-label={`${siteConfig.name} ${locale === "ar" ? "الرئيسية" : "home"}`} className={cn("absolute top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-brand-soft sm:hidden", locale === "ar" ? "right-5" : "left-5")}>
            <Image src="/brand/inaayatullah-crest.png" alt="" width={44} height={44} priority className="size-11 rounded-full" />
          </Link>
          <nav dir="ltr" aria-label={copy.primaryNavigation} className={cn("flex min-h-20 items-center gap-2 sm:justify-between lg:min-h-24 lg:gap-3", locale === "ar" ? "justify-start sm:flex-row-reverse" : "justify-end")}>
            <Link dir={locale === "ar" ? "rtl" : "ltr"} href={localizeHref("/", locale)} aria-label={`${siteConfig.name} ${locale === "ar" ? "الرئيسية" : "home"}`} className="hidden min-w-0 shrink-0 items-center gap-2.5 rounded-md sm:flex sm:gap-3">
              <Image src="/brand/inaayatullah-crest.png" alt={locale === "ar" ? "الشعار الدائري لأكاديمية عناية الله الدولية" : "Inaayatullah International Academy circular crest"} width={56} height={56} priority sizes="(min-width: 640px) 56px, 44px" className="size-11 shrink-0 rounded-full sm:size-14" />
              <span className="min-w-0"><span className="block font-display text-lg font-semibold leading-tight text-brand sm:text-xl">{copy.academyName}</span><span className="mt-1 block text-[0.53rem] font-extrabold uppercase tracking-[0.07em] text-muted-foreground sm:text-[0.62rem] sm:tracking-[0.13em]">{copy.academyDescriptor}</span></span>
            </Link>
            <div dir={locale === "ar" ? "rtl" : "ltr"} className="hidden items-center gap-6 xl:flex">
              {siteConfig.navigation.slice(0, 6).map((item) => {
                const isActive = isNavigationItemActive(item.href);

                return (
                  <Link
                    key={item.href}
                    href={localizeHref(item.href, locale)}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "relative inline-flex min-h-12 items-center text-sm font-bold transition-colors after:absolute after:inset-x-0 after:bottom-1 after:h-0.5 after:origin-left after:rounded-full after:bg-accent after:transition-transform",
                      isActive
                        ? "text-brand after:scale-x-100"
                        : "text-muted-foreground after:scale-x-0 hover:text-brand hover:after:scale-x-100",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
            <div dir={locale === "ar" ? "rtl" : "ltr"} className="flex shrink-0 items-center gap-2">
              <Link
                href={alternateLocaleHref(pathname, locale, activeHash)}
                hrefLang={locale === "ar" ? "en" : "ar"}
                aria-label={copy.switchLanguage}
                className="inline-flex min-h-11 min-w-11 items-center justify-center gap-1.5 rounded-full border border-border px-2.5 text-xs font-extrabold text-brand transition-colors hover:border-brand hover:bg-brand-soft sm:px-3"
              >
                <Languages aria-hidden="true" className="size-4" />
                <span>{copy.languageLabel}</span>
              </Link>
              <div className="hidden sm:block"><ButtonLink href={localizeHref("/#admissions", locale)}>{copy.join} <ArrowUpRight aria-hidden="true" className="rtl-flip size-4" /></ButtonLink></div>
              <button ref={menuButton} type="button" aria-label={isOpen ? copy.closeMenu : copy.openMenu} aria-expanded={isOpen} aria-controls="site-navigation-panel" onClick={() => setIsOpen((current) => !current)} className="flex size-12 items-center justify-center text-brand transition-colors hover:text-accent-foreground xl:hidden">
                {isOpen ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
              </button>
            </div>
          </nav>
        </Container>
        {isOpen && (
          <div id="site-navigation-panel" className="menu-enter absolute inset-x-0 top-full max-h-[calc(100dvh-8rem)] overflow-y-auto border-b border-border bg-surface shadow-soft xl:hidden">
            <Container className="pb-6 pt-2">
              <nav aria-label={copy.menuNavigation} className="grid gap-1 sm:grid-cols-2 sm:gap-x-6">
                {siteConfig.navigation.slice(0, 6).map((item) => {
                  const isActive = isNavigationItemActive(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={localizeHref(item.href, locale)}
                      onClick={() => setIsOpen(false)}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "group flex min-h-12 items-center justify-between rounded-xl px-3 py-3 text-sm font-bold text-brand transition-colors hover:bg-brand-soft",
                        isActive && "bg-brand-soft",
                      )}
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight aria-hidden="true" className={cn("rtl-flip size-4", isActive ? "text-brand" : "text-muted-foreground")} />
                    </Link>
                  );
                })}
              </nav>
              <ButtonLink href={localizeHref("/#admissions", locale)} className="mt-4 w-full sm:hidden" onClick={() => setIsOpen(false)}>{copy.join} <ArrowUpRight aria-hidden="true" className="rtl-flip size-4" /></ButtonLink>
            </Container>
          </div>
        )}
      </header>
    </>
  );
}
