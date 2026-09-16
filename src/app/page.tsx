import { AcademicProgrammes } from "@/components/academic-programmes";
import { AcademyHighlights } from "@/components/academy-highlights";
import { AdmissionsInvitation } from "@/components/admissions-invitation";
import { DirectorWelcome } from "@/components/director-welcome";
import { GalleryPreview } from "@/components/gallery-preview";
import { Hero } from "@/components/hero";
import { HomeIntro } from "@/components/home-intro";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TahfizSpotlight } from "@/components/tahfiz-spotlight";
import { WhoWeAre } from "@/components/who-we-are";
import { WhyChooseUs } from "@/components/why-choose-us";
import type { Locale } from "@/lib/i18n";

export function HomePage({ locale = "en" }: { locale?: Locale }) {
  return (
    <>
      <HomeIntro locale={locale} />
      <SiteHeader locale={locale} />
      <main id="main-content">
        <Hero locale={locale} />
        <AcademyHighlights locale={locale} />
        <WhoWeAre locale={locale} />
        <AcademicProgrammes locale={locale} />
        <DirectorWelcome locale={locale} />
        <TahfizSpotlight locale={locale} />
        <WhyChooseUs locale={locale} />
        <AdmissionsInvitation locale={locale} />
        <GalleryPreview locale={locale} />
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}

export default function Home() {
  return <HomePage />;
}
