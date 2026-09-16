import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { AchievementsAwards } from "@/components/achievements-awards";
import { CampusLife } from "@/components/campus-life";
import { CarePartnership } from "@/components/care-partnership";
import { ClubsAndSports } from "@/components/clubs-and-sports";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { getSiteConfig, localizeHref, type Locale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Student Life",
  description: "Discover clubs, sports, achievements, campus facilities, student care and parent partnership at Inaayatullah International Academy in Iwo, Osun State.",
};

export function StudentLifePageContent({ locale = "en" }: { locale?: Locale }) {
  const localizedConfig = getSiteConfig(locale);
  const isArabic = locale === "ar";
  return (
    <>
      <SiteHeader locale={locale} />
      <main id="main-content">
        <header className="section-space">
          <Container className="text-center">
            <p className="eyebrow">{isArabic ? "الحياة في عناية الله" : "Life at Inaayatullah"}</p>
            <h1 className="mx-auto mt-5 max-w-3xl text-balance text-4xl font-medium text-brand sm:text-5xl lg:text-6xl">{isArabic ? <>مكان للنمو.<br /><span className="font-normal">ومجتمع تشعر فيه بالانتماء.</span></> : <>A place to grow.<br /><span className="font-normal">A community to call your own.</span></>}</h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-muted-foreground">{localizedConfig.studentCare.introduction}</p>
            <ButtonLink href={localizeHref("/gallery", locale)} variant="text" className="mt-4">{isArabic ? "لمحات من الحياة المدرسية" : "Glimpses of school life"} <ArrowUpRight aria-hidden="true" className="rtl-flip size-4" /></ButtonLink>
          </Container>
        </header>
        <ClubsAndSports locale={locale} />
        <AchievementsAwards locale={locale} />
        <CarePartnership locale={locale} />
        <CampusLife locale={locale} />
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}

export default function StudentLifePage() {
  return <StudentLifePageContent />;
}
