import React from "react";
import SectionTechnologiesDesktop from "./section-technologies-desktop";
import SectionTechnologiesMobile from "./section-technologies-mobile";

export default function SectionTechnologies() {
  return (
    <>
      <div className="hidden md:block">
        <SectionTechnologiesDesktop />
      </div>

      <div className="block md:hidden">
        <SectionTechnologiesMobile />
      </div>
    </>
  );
}
