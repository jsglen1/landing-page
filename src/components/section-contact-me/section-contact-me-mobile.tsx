import React from "react";
import { SectionContactMeCarousel } from "./section-contact-me-corousel";

export default function SectionContactMeMobile() {
  return (
    <div className="flex flex-col items-center justify-center p-5">
      <section
        id="contact-me"
        className="flex w-full justify-center px-5 lg:px-10"
      >
        {" "}
        <SectionContactMeCarousel />
      </section>{" "}
    </div>
  );
}
