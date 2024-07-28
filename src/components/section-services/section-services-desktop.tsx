import React from "react";
import { SectionServicesCard } from "./section-services-card";
import { SERVICES_INFO } from "./strings";

export default function SectionServicesDesktop() {
  return (
    <div className="flex items-center flex-wrap gap-5 justify-center p-5">
      {SERVICES_INFO.map((item) => (
        <SectionServicesCard key={item.id} serviceInfo={item} />
      ))}
    </div>
  );
}
