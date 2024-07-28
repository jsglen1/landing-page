import SectionAboutMe from "@/components/section-about-me/section-about-me";
import SectionContactMe from "@/components/section-contact-me/section-contact-me";
import SectionStart from "@/components/section-start/section-start";
import React from "react";
import { INTRODUCTION_DATA } from "@/data/introduction-summary";
import SummaryDesktop from "@/components/summary-desktop/summary";
import { WHY_CHOOSE_ME_DATA } from "@/data/why-choose-me-summary";
import SectionServices from "@/components/section-services/section-services";
import SectionTechnologies from "@/components/section-technologies/section-technologies";

export default function page() {
  return (
    <main className="space-y-10 md:space-y-20">
      <section id="start">
        <SectionStart />
      </section>
      <section id="contact-me">
        <SectionContactMe />
      </section>
      <SummaryDesktop data={INTRODUCTION_DATA} />
      <section id="about-me">
        <SectionAboutMe />
      </section>
      <SummaryDesktop data={WHY_CHOOSE_ME_DATA} />
      <section id="services">
        <SectionServices />
      </section>
      <section id="technologies">
        <SectionTechnologies />
      </section>
    </main>
  );
}
