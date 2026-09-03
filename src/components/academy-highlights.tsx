import { Container } from "@/components/ui/container";

const highlights = [
  { value: "Early Years to SSS 3", label: "Complete learning pathway" },
  { value: "2 years", label: "Tahfiz completion programme" },
  { value: "Boys & girls", label: "Boarding facilities available" },
  { value: "Iwo, Osun", label: "Proudly serving Nigeria" },
] as const;

export function AcademyHighlights() {
  return (
    <section
      id="academy-highlights"
      aria-labelledby="academy-highlights-title"
      className="scroll-mt-32 bg-surface"
    >
      <Container className="grid gap-10 py-16 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16 lg:py-20">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-accent-foreground">
            The Academy at a glance
          </p>
          <h2
            id="academy-highlights-title"
            className="mt-4 max-w-lg text-4xl font-semibold text-foreground sm:text-5xl"
          >
            One Academy. A balanced education.
          </h2>
        </div>

        <dl className="grid border-l border-t border-border sm:grid-cols-2">
          {highlights.map((item) => (
            <div key={item.value} className="border-b border-r border-border px-6 py-7 sm:p-8">
              <dt className="text-xs font-extrabold uppercase tracking-[0.16em] text-muted-foreground">
                {item.label}
              </dt>
              <dd className="mt-3 font-display text-2xl font-bold text-brand sm:text-3xl">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
