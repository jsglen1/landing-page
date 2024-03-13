"use client";
import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { CONTENT, TITLE } from "./strings";

export default function SectionStartMobile() {
  const { theme } = useTheme();
  const isLightTheme = theme === "light";
  const backgroundClass = isLightTheme ? "" : "";
  return (
    <div
      className={`flex flex-col items-center justify-center p-5 ${backgroundClass}`}
    >
      <Image
        className="w-full h-96 p-5"
        src={"/visual-studio-code.svg"}
        alt="logo"
        width={50}
        height={50}
      />
      <article className="flex  flex-col items-center justify-center text-center space-y-3">
        <h2 className="text-xl font-semibold">{TITLE}</h2>
        <p>{CONTENT}</p>
      </article>
    </div>
  );
}
