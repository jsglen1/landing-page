import React from "react";
import SectionAboutMeDesktop from "./section-about-me-desktop";
import SectionAboutMeMobile from "./section-about-me-mobile";

export default function SectionAboutMe() {
  return (
    <>
      <div className="hidden md:block">
        <SectionAboutMeDesktop />
      </div>

      <div className="block md:hidden">
        <SectionAboutMeMobile />
      </div>
    </>
  );
}
