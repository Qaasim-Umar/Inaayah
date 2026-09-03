import { AcademicProgrammes } from "@/components/academic-programmes";
import { AcademyHighlights } from "@/components/academy-highlights";
import { AdmissionsInvitation } from "@/components/admissions-invitation";
import { CarePartnership } from "@/components/care-partnership";
import { DirectorWelcome } from "@/components/director-welcome";
import { GalleryPreview } from "@/components/gallery-preview";
import { Hero } from "@/components/hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TahfizSpotlight } from "@/components/tahfiz-spotlight";
import { WhoWeAre } from "@/components/who-we-are";
import { WhyChooseUs } from "@/components/why-choose-us";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <AcademyHighlights />
        <WhoWeAre />
        <AcademicProgrammes />
        <TahfizSpotlight />
        <DirectorWelcome />
        <CarePartnership />
        <GalleryPreview />
        <WhyChooseUs />
        <AdmissionsInvitation />
      </main>
      <SiteFooter />
    </>
  );
}
