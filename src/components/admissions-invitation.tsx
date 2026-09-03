import { CircleCheck, MessageCircle, MoveRight } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";
import { getWhatsAppHref } from "@/lib/whatsapp";

const whatsAppMessage =
  "Assalamu Alaikum. I would like to enquire about admission to Inaayatullah International Academy.";

export function AdmissionsInvitation() {
  const whatsAppHref = getWhatsAppHref(
    siteConfig.contact.whatsapp,
    whatsAppMessage,
  );
  const enquiryHref = whatsAppHref ?? "/admissions";

  return (
    <section
      id="admissions"
      aria-labelledby="admissions-title"
      className="scroll-mt-32 bg-surface-muted py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="grid overflow-hidden border border-border bg-surface lg:grid-cols-[0.86fr_1.14fr]">
          <div className="relative overflow-hidden bg-brand p-8 text-brand-foreground sm:p-10 lg:p-12">
            <div
              aria-hidden="true"
              className="hero-editorial-pattern absolute inset-0 opacity-50"
            />
            <div className="relative">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-sky sm:text-sm">
                Admissions now open
              </p>
              <h2
                id="admissions-title"
                className="mt-5 max-w-2xl text-balance text-4xl font-semibold sm:text-5xl lg:text-6xl"
              >
                Begin your child’s journey to excellence.
              </h2>
              <p className="mt-7 max-w-xl text-base leading-8 text-brand-foreground/80 sm:text-lg">
                {siteConfig.admissions.introduction}
              </p>

              <ButtonLink
                href={enquiryHref}
                variant="accent"
                className="mt-9"
                {...(whatsAppHref
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
              >
                {whatsAppHref
                  ? "Enquire through WhatsApp"
                  : "Begin an admission enquiry"}
                {whatsAppHref ? (
                  <MessageCircle aria-hidden="true" className="size-5" />
                ) : (
                  <MoveRight aria-hidden="true" className="size-5" />
                )}
              </ButtonLink>
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-accent-foreground">
              A clear admission pathway
            </p>

            <ol className="mt-7 grid border-l border-t border-border md:grid-cols-3">
              {siteConfig.admissions.steps.map((step) => (
                <li
                  key={step.number}
                  className="grid grid-cols-[auto_1fr] gap-4 border-b border-r border-border p-5 md:block md:min-h-64 md:p-6"
                >
                  <span className="mt-1 text-xs font-extrabold tracking-[0.16em] text-accent-foreground md:mt-0">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground md:mt-6">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground md:mt-4">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-8 border-t border-border pt-7">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-brand">
                Programmes accepting applications
              </p>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {siteConfig.programmes.map((programme) => (
                  <li
                    key={programme}
                    className="inline-flex min-h-10 items-center gap-2 border border-border bg-background px-3 py-2 text-sm font-bold text-foreground"
                  >
                    <CircleCheck
                      aria-hidden="true"
                      className="size-4 shrink-0 text-accent-foreground"
                    />
                    <span>{programme}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
