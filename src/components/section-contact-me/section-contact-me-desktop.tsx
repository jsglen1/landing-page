import React from "react";
import Image from "next/image";
import {
  CONTACT,
  CONTACT_CONTENT,
  LOCATION,
  LOCATION_CONTENT,
  MAIL,
  MAIL_CONTENT,
} from "./strings";

export default function SectionContactMeDesktop() {
  return (
    <div className="flex flex-col items-center justify-center p-5 gap-20">
      <div className="flex w-full px-5 lg:px-10">
        {" "}
        <div className="flex items-center justify-center space-x-3 w-1/3  rounded-l-3xl p-5 border-l border-t border-b border-gray-500">
          <Image
            loading="lazy"
            src={"/location.svg"}
            width={30}
            height={30}
            alt="location"
          />
          <div>
            <h3>{LOCATION}</h3>
            <p className="text-xs">{LOCATION_CONTENT}</p>
          </div>
        </div>
        <div className="border-gray-500  border-t border-b flex items-center justify-center">
          <div className="my-3 py-3 border border-purple-500 rounded-t-3xl rounded-b-3xl h-4/6"></div>
        </div>
        <div className="flex items-center justify-center space-x-3 w-1/3   p-5  border-t border-b border-gray-500">
          <Image
            loading="lazy"
            src={"/phone-call.svg"}
            width={40}
            height={40}
            alt="location"
          />
          <div>
            <h3>{CONTACT}</h3>
            <div className="text-xs">
              <p>{CONTACT_CONTENT}</p>
            </div>
          </div>
        </div>
        <div className="border-gray-500  border-t border-b flex items-center justify-center">
          <div className="my-3 py-3 border border-purple-500 rounded-t-3xl rounded-b-3xl h-4/6"></div>
        </div>
        <div className="flex items-center justify-center  space-x-3 w-1/3  rounded-r-3xl p-5  border-r border-t border-b  border-gray-500">
          <Image
            loading="lazy"
            src={"/mail.svg"}
            width={45}
            height={45}
            alt="location"
          />
          <div>
            <h3>{MAIL}</h3>
            <p className="text-xs">{MAIL_CONTENT}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
