import React from "react";
import SectionServicesDesktop from "./section-services-desktop";
import SectionServicesMobile from "./section-services-mobile";

export default function SectionServices() {
  return (
    <>
      <div className="hidden md:block">
        <SectionServicesDesktop />
      </div>

      <div className="block md:hidden">
        <SectionServicesMobile />
      </div>
    </>
  );
}
