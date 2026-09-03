"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <div className="sticky top-0 z-50 border-b border-border bg-surface shadow-[0_1px_0_var(--theme-border)]">
      <div className="bg-brand text-brand-foreground">
        <Container className="flex min-h-9 items-center justify-between gap-5 py-2 text-xs font-bold uppercase tracking-[0.1em]">
          <span>{siteConfig.location}</span>
          <span className="hidden text-brand-foreground/75 lg:inline">
            Sunday to Thursday 8:00 to 3:00 · Friday 8:00 to 1:30
          </span>
          <Link
            href="/contact"
            className="inline-flex min-h-8 items-center border-b border-brand-foreground/40 hover:border-brand-foreground focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-focus/35"
          >
            Contact
          </Link>
        </Container>
      </div>

      <header className="relative">
        <Container>
          <nav
            aria-label="Primary navigation"
            className="flex min-h-20 items-center justify-between gap-5 sm:min-h-24"
          >
            <Link
              href="/"
              aria-label={`${siteConfig.name} home`}
              className="group flex min-w-0 items-center gap-3 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-focus/35"
            >
              <span className="relative size-12 shrink-0 overflow-hidden rounded-full ring-1 ring-border sm:size-16">
                <Image
                  src="/brand/inaayatullah-crest.png"
                  alt="Inaayatullah International Academy circular crest"
                  fill
                  priority
                  sizes="(min-width: 640px) 64px, 48px"
                  className="object-cover"
                />
              </span>
              <span className="min-w-0">
                <span className="block truncate font-display text-lg font-bold leading-tight text-brand sm:text-2xl">
                  Inaayatullah
                </span>
                <span className="hidden text-xs font-extrabold uppercase tracking-[0.16em] text-muted-foreground sm:block">
                  International Academy
                </span>
                <span className="block text-xs font-extrabold uppercase tracking-[0.08em] text-muted-foreground sm:hidden">
                  International Academy
                </span>
              </span>
            </Link>

            <div className="flex shrink-0 items-center gap-2 sm:gap-3">
              <div className="hidden sm:block">
                <ButtonLink href="/admissions">Admissions</ButtonLink>
              </div>
              <button
                type="button"
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isOpen}
                aria-controls="site-navigation-panel"
                onClick={() => setIsOpen((current) => !current)}
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-sm border border-border bg-surface px-4 text-sm font-extrabold uppercase tracking-[0.12em] text-brand transition-colors duration-200 hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-focus/35"
              >
                {isOpen ? (
                  <X aria-hidden="true" className="size-5" strokeWidth={1.8} />
                ) : (
                  <Menu aria-hidden="true" className="size-5" strokeWidth={1.8} />
                )}
                <span className="hidden sm:inline">Menu</span>
              </button>
            </div>
          </nav>
        </Container>

        <div
          id="site-navigation-panel"
          hidden={!isOpen}
          className="absolute inset-x-0 top-full border-y border-border bg-surface shadow-card"
        >
          <Container className="py-6 sm:py-8">
            <div className="grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4">
              {siteConfig.navigation.map((item, index) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={`group flex min-h-20 items-center justify-between border-b border-r border-border px-5 py-4 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-focus/35 ${
                      isActive
                        ? "bg-brand text-brand-foreground"
                        : "bg-surface text-foreground hover:bg-brand-soft"
                    }`}
                  >
                    <span>
                      <span
                        className={`block text-xs font-extrabold tracking-[0.16em] ${
                          isActive ? "text-sky" : "text-muted-foreground"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="mt-1 block font-display text-xl font-bold">
                        {item.label}
                      </span>
                    </span>
                    <ArrowUpRight aria-hidden="true" className="size-5" strokeWidth={1.8} />
                  </Link>
                );
              })}
            </div>

            <ButtonLink
              href="/admissions"
              className="mt-5 w-full sm:hidden"
              onClick={() => setIsOpen(false)}
            >
              Begin an admission enquiry
            </ButtonLink>
          </Container>
        </div>
      </header>
    </div>
  );
}
