import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { AdmissionsInvitation } from "@/components/admissions-invitation";
import { CarePartnership } from "@/components/care-partnership";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Student Life",
  description: "Discover student care, boarding for boys and girls, and parent partnership at Inaayatullah International Academy in Iwo, Osun State.",
};

export default function StudentLifePage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <header className="section-space">
          <Container className="text-center">
            <p className="eyebrow">Life at Inaayatullah</p>
            <h1 className="mx-auto mt-5 max-w-3xl text-balance text-4xl font-medium text-brand sm:text-5xl lg:text-6xl">A place to grow.<br /><em className="font-normal">A community to call your own.</em></h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-muted-foreground">{siteConfig.studentCare.introduction}</p>
            <ButtonLink href="/gallery" variant="text" className="mt-4">Glimpses of school life <ArrowUpRight aria-hidden="true" className="size-4" /></ButtonLink>
          </Container>
        </header>
        <CarePartnership />
        <AdmissionsInvitation />
      </main>
      <SiteFooter />
    </>
  );
}
