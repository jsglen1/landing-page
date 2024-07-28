import Image from "next/image";
import React from "react";
import { CONTENT, TITLE, URL_IMAGE } from "./strings";

export default function SectionAboutMeMobile() {
  return (
    <div className={`flex flex-col items-center justify-center p-5`}>
      <h2 className="text-2xl font-semibold">{TITLE}</h2>
      <Image
        loading="lazy"
        className="w-full h-96 p-5"
        src={URL_IMAGE}
        alt={URL_IMAGE}
        width={50}
        height={50}
      />
      <article className="flex  flex-col items-center justify-center text-center space-y-3">
        <p>{CONTENT}</p>
      </article>
    </div>
  );
}
