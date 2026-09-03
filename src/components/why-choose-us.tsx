import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

export function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-choose-us-title"
      className="relative scroll-mt-32 overflow-hidden bg-brand py-16 text-brand-foreground sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="hero-editorial-pattern absolute inset-0 opacity-45"
      />

      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-16">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-sky sm:text-sm">
              The Inaayatullah difference
            </p>
            <h2
              id="why-choose-us-title"
              className="mt-5 max-w-xl text-balance text-4xl font-semibold sm:text-5xl"
            >
              Why families choose Inaayatullah.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-brand-foreground/80">
              {siteConfig.whyChoose.introduction}
            </p>
          </div>

          <ul className="grid grid-cols-2 border-l border-t border-brand-foreground/25 sm:grid-cols-3">
            {siteConfig.whyChoose.reasons.map((reason) => (
              <li
                key={reason.number}
                className="flex min-h-40 flex-col justify-between border-b border-r border-brand-foreground/25 p-5 sm:min-h-44 sm:p-6"
              >
                <span className="text-xs font-extrabold tracking-[0.16em] text-sky">
                  {reason.number}
                </span>
                <h3 className="mt-7 text-lg font-semibold leading-snug sm:text-xl">
                  {reason.title}
                </h3>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
