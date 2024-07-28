import Image from "next/image";
import React from "react";
import { CONTENT, TITLE, URL_IMAGE } from "./strings";

export default function SectionAboutMeDesktop() {
  return (
    <div className={`flex items-center justify-center p-5`}>
      <Image
        loading="lazy"
        className="w-1/2 h-96 p-5"
        src={URL_IMAGE}
        alt={URL_IMAGE}
        width={50}
        height={50}
      />
      <article className="w-1/2 flex flex-col space-y-3">
        <h2 className="text-3xl font-semibold">{TITLE}</h2>
        <p>{CONTENT}</p>
      </article>
    </div>
  );
}
