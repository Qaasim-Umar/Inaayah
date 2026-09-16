import { ArrowUpRight, GraduationCap, HandHeart, House, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

const reasons = [
  { icon: GraduationCap, title: "Teachers who inspire", description: "Experienced educators who guide each learner with patience and purpose.", cardColor: "border-sky/80 bg-gradient-to-br from-brand-soft via-surface to-surface", iconColor: "bg-sky/50 text-brand" },
  { icon: ShieldCheck, title: "Care you can trust", description: "Attentive supervision and a secure environment for every school day.", cardColor: "border-sage-foreground/35 bg-gradient-to-br from-sage via-surface to-surface", iconColor: "bg-sage text-sage-foreground" },
  { icon: House, title: "A home away from home", description: "Boarding for boys and girls, with caring routines and a sense of belonging.", cardColor: "border-gold/80 bg-gradient-to-br from-sand via-surface to-surface", iconColor: "bg-sand text-brand" },
  { icon: HandHeart, title: "Families as partners", description: "Open conversations and progress updates keep you part of the journey.", cardColor: "border-brand/25 bg-gradient-to-br from-brand/10 via-surface to-surface", iconColor: "bg-brand/10 text-brand" },
] as const;

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" aria-labelledby="why-choose-us-title" className="section-space bg-surface">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-14">
          <Reveal className="text-center lg:text-left">
            <p className="eyebrow text-center lg:text-left">The Inaayatullah difference</p>
            <h2 id="why-choose-us-title" className="section-heading mx-auto mt-4 text-center lg:mx-0 lg:text-left">More than a school.<br /><span className="font-normal">A caring community.</span></h2>
            <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-muted-foreground lg:mx-0">Children flourish when they feel known, supported and encouraged. That belief shapes life at our Academy.</p>
            <ButtonLink href="/student-life" variant="text" className="mt-5">Explore student life <ArrowUpRight aria-hidden="true" className="size-4" /></ButtonLink>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map(({ icon: Icon, title, description, cardColor, iconColor }, index) => (
              <Reveal key={title} delay={index * 70}>
                <article className={`lift-card flex h-full items-start gap-4 rounded-2xl border p-5 sm:block sm:p-6 ${cardColor}`}>
                  <span className={`card-icon flex size-11 shrink-0 items-center justify-center rounded-xl ${iconColor}`}><Icon aria-hidden="true" className="size-5" strokeWidth={1.6} /></span>
                  <div className="sm:mt-5"><h3 className="text-xl font-medium leading-snug text-brand">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p></div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
