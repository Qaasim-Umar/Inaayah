import { BookOpenCheck, HandHeart, HeartPulse, House, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site";

const supportIcons = [ShieldCheck, HeartPulse, BookOpenCheck, HandHeart] as const;

export function CarePartnership() {
  return (
    <section id="student-welfare" aria-labelledby="care-partnership-title" className="section-space bg-brand text-brand-foreground">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow !text-sky">Care and family partnership</p>
          <h2 id="care-partnership-title" className="section-heading mt-4 !text-brand-foreground">Every child matters.<br /><em className="font-normal">Every family belongs.</em></h2>
          <p className="mt-5 text-base leading-7 text-brand-foreground/75">{siteConfig.careAndPartnership.introduction}</p>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.studentCare.supportAreas.map((area, index) => {
            const Icon = supportIcons[index];
            return <Reveal key={area.title} delay={index * 70}><article className="lift-card h-full rounded-2xl border border-border/60 bg-surface p-6"><span className="card-icon flex size-11 items-center justify-center rounded-xl bg-brand-soft text-brand"><Icon aria-hidden="true" className="size-5" strokeWidth={1.6} /></span><h3 className="mt-5 text-xl font-medium leading-snug text-brand">{area.title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{area.description}</p></article></Reveal>;
          })}
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Reveal className="rounded-3xl border border-brand-foreground/15 bg-brand-foreground/5 p-6 text-brand-foreground sm:p-9">
            <House aria-hidden="true" className="size-7 text-sky" strokeWidth={1.5} />
            <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.12em] text-sky">Boarding at the Academy</p>
            <h3 className="mt-3 text-3xl font-medium">{siteConfig.studentCare.boarding.title}</h3>
            <p className="mt-4 text-base leading-7 text-brand-foreground/80">{siteConfig.studentCare.boarding.description}</p>
            <p className="mt-6 rounded-xl border border-brand-foreground/15 bg-brand-foreground/5 p-4 text-sm leading-6 text-brand-foreground/80"><strong className="text-sky">{siteConfig.studentCare.boarding.developmentTitle}: </strong>{siteConfig.studentCare.boarding.developmentStatus}</p>
          </Reveal>
          <Reveal className="rounded-3xl border border-border/60 bg-sand/60 p-6 sm:p-9">
            <div id="parents"><HandHeart aria-hidden="true" className="size-7 text-brand" strokeWidth={1.5} /><p className="eyebrow mt-5">Parents as our partners</p><h3 className="mt-3 text-3xl font-medium text-brand">Building success together.</h3><p className="mt-4 text-base leading-7 text-muted-foreground">{siteConfig.parentPartnership.introduction}</p>
              <ul className="mt-5 space-y-3">{siteConfig.parentPartnership.engagement.map(item => <li key={item.title} className="flex items-center gap-3 text-sm font-bold text-brand"><span aria-hidden="true" className="size-1.5 rounded-full bg-brand" />{item.title}</li>)}</ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
