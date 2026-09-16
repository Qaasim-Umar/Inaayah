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

export default function Home() {
  return (
    <>
      <HomeIntro />
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <AcademyHighlights />
        <WhoWeAre />
        <AcademicProgrammes />
        <DirectorWelcome />
        <TahfizSpotlight />
        <WhyChooseUs />
        <AdmissionsInvitation />
        <GalleryPreview />
      </main>
      <SiteFooter />
    </>
  );
}
