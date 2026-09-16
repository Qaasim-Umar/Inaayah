import { ArrowUpRight, Clock3, MapPin, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";
import { getWhatsAppHref } from "@/lib/whatsapp";

export function SiteFooter() {
  const whatsAppHref = getWhatsAppHref(siteConfig.contact.whatsapp, "Assalamu Alaikum. I would like to contact Inaayatullah International Academy.");
  return (
    <footer id="contact" className="bg-brand text-brand-foreground">
      <Container className="pb-6 pt-10 sm:pt-14">
        <div className="grid gap-9 lg:grid-cols-[1.1fr_0.7fr_1.2fr] lg:gap-12">
          <div>
            <Link href="/" aria-label={`${siteConfig.name} home`} className="inline-flex items-center gap-3 rounded-md">
              <Image src="/brand/inaayatullah-crest.png" alt="Academy crest" width={56} height={56} className="size-14 shrink-0 rounded-full bg-surface" />
              <span><span className="block font-display text-xl font-medium">Inaayatullah</span><span className="mt-1 block text-[0.55rem] font-bold uppercase tracking-[0.13em] text-brand-foreground/75">International Academy</span></span>
            </Link>
            <p className="mt-5 font-display text-xl text-sky">{siteConfig.motto}.</p>
            <p className="mt-3 max-w-xs text-sm leading-7 text-brand-foreground/75">Faith, learning and a caring community.<br />A brighter future begins together.</p>
            {whatsAppHref && <a href={whatsAppHref} target="_blank" rel="noreferrer" className="mt-4 inline-flex min-h-12 items-center gap-2 text-sm font-bold text-sky">Chat with our team <MessageCircle aria-hidden="true" className="size-4" /></a>}
          </div>
          <nav aria-label="Footer navigation">
            <h2 className="text-xs font-extrabold uppercase tracking-[0.15em] text-sky">Find your way</h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-5 lg:grid-cols-1">
              {siteConfig.navigation.slice(1).filter(item => item.label !== 'Contact').map((item) => <li key={item.href}><Link href={item.href} className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-brand-foreground/80 transition-colors hover:text-sky">{item.label}<ArrowUpRight aria-hidden="true" className="size-3" /></Link></li>)}
            </ul>
          </nav>
          <div className="rounded-2xl border border-brand-foreground/15 bg-brand-foreground/5 p-5 sm:p-6">
            <h2 className="text-xs font-extrabold uppercase tracking-[0.15em] text-sky">Come and say hello</h2>
            <p className="mt-5 flex items-start gap-3 text-sm font-semibold"><MapPin aria-hidden="true" className="size-5 shrink-0 text-sky" />{siteConfig.location}</p>
            <div className="mt-5 flex items-start gap-3"><Clock3 aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-sky" /><dl className="space-y-3 text-sm">{siteConfig.schoolHours.map((schedule) => <div key={schedule.days}><dt className="font-bold">{schedule.days}</dt><dd className="mt-0.5 text-brand-foreground/75">{schedule.hours}</dd></div>)}</dl></div>
            <p className="mt-5 border-t border-brand-foreground/15 pt-4 text-xs leading-6 text-brand-foreground/75">For admission enquiries, speak with our school office during school hours.</p>
          </div>
        </div>
        <div className="mt-9 flex flex-col gap-2 border-t border-brand-foreground/15 pt-5 text-xs leading-6 text-brand-foreground/70 sm:flex-row sm:justify-between"><p>© {new Date().getFullYear()} {siteConfig.name}.</p><p>Faith. Knowledge. Character.</p></div>
      </Container>
    </footer>
  );
}
