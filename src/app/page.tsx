import SectionAboutMe from "@/components/section-about-me/section-about-me";
import SectionStart from "@/components/section-start/section-start";
import React from "react";

export default function page() {
  return (
    <main className="space-y-20">
      <section id="start">
        <SectionStart />
      </section>
      <section id="about-me">
        <SectionAboutMe />
      </section>
    </main>
  );
}
