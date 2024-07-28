import React from "react";
import Image from "next/image";
import { CONTENT, TITLE } from "./strings";

export default function SectionStartMobile() {
  return (
    <div className={`flex flex-col items-center justify-center p-5`}>
      <Image
        loading="lazy"
        className="w-full h-96 p-5"
        src={"/visual-studio-code.svg"}
        alt="logo"
        width={50}
        height={50}
      />
      <article className="flex  flex-col items-center justify-center text-center space-y-3">
        <h2 className="text-2xl font-semibold">{TITLE}</h2>
        <p>{CONTENT}</p>
      </article>
    </div>
  );
}
