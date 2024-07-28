import React from "react";
import SectionContactMeDesktop from "./section-contact-me-desktop";
import SectionContactMeMobile from "./section-contact-me-mobile";

export default function SectionContactMe() {
  return (
    <>
      <div className="hidden md:block">
        <SectionContactMeDesktop />
      </div>

      <div className="block md:hidden">
        <SectionContactMeMobile />
      </div>
    </>
  );
}
