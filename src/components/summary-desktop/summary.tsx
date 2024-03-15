import Image from "next/image";
import React from "react";
import { PropsSummary } from "@/interfaces/summary-desktop";

const URL_IMAGE = `/arrow.svg`;

export default function SummaryDesktop(params: PropsSummary) {
  return (
    <div className="hidden md:flex p-5 ">
      <div className="w-1/2 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center space-x-5">
          <h2 className="text-3xl font-semibold">{params.data.title}</h2>
          <Image
            loading="lazy"
            src={URL_IMAGE}
            alt={URL_IMAGE}
            width={70}
            height={100}
          />
        </div>
        <div className="flex items-center text-center justify-center space-x-3">
          <p>{params.data.subTitle}</p>
        </div>
      </div>
      <div className="w-1/2 flex items-center text-center justify-center">
        <p>{params.data.content}</p>
      </div>
    </div>
  );
}
