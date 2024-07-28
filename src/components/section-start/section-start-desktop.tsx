import React from "react";
import Image from "next/image";
import { CONTENT, TITLE } from "./strings";

export default function SectionStartDesktop() {
  return (
    <div className={`flex items-center justify-center p-5`}>
      <article className="w-1/2 flex flex-col items-center justify-center text-center space-y-3">
        <h2 className="text-3xl font-semibold">{TITLE}</h2>
        <p>{CONTENT}</p>
      </article>
      <Image
        loading="lazy"
        className="w-1/2 h-96 p-5"
        src={"/visual-studio-code.svg"}
        alt="logo"
        width={50}
        height={50}
      />
    </div>
  );
}
