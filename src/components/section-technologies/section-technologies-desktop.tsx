import React from "react";
import { AccordionTechlogies } from "./accordion-technologies";
import { TITLE } from "./strings";

export default function SectionTechnologiesDesktop() {
  return (
    <div className={`flex flex-col items-center justify-center p-5 px-20`}>
      <h2 className="text-2xl">{TITLE}</h2>
      <AccordionTechlogies />
    </div>
  );
}
