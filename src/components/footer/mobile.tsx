import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function MobileFooter() {
  return (
    <footer>
      <div className="flex flex-col flex-wrap gap-5 p-5 px-10 space-y-5">
        <ul className="mx-auto space-y-2 flex flex-col w-full">
          <li className="mb-2">
            <h2 className="font-semibold">Servicios</h2>
          </li>

          <li className="flex space-x-2 ">
            {" "}
            <Image
              loading="lazy"
              src={"/grade.svg"}
              width={30}
              height={30}
              alt="github.svg"
            />
            <p>Ingeniero de Sistemas</p>
          </li>

          <li className="flex space-x-2 ">
            <Image
              loading="lazy"
              src={"/pc.svg"}
              width={30}
              height={30}
              alt="lineding.svg"
            />
            <p>Desarrollador de Software</p>
          </li>
        </ul>

        <ul className="mx-auto space-y-2 flex flex-col w-full">
          <li className="mb-2">
            <h2 className="font-semibold">Contacta me</h2>
          </li>

          <li className="flex space-x-2">
            <Image
              loading="lazy"
              src={"/whatsapp.svg"}
              width={30}
              height={30}
              alt="whatsapp.svg"
            />
            <p>+(57)</p>
          </li>

          <li className="flex space-x-2">
            {" "}
            <Image
              loading="lazy"
              src={"/email.svg"}
              width={30}
              height={30}
              alt="email.svg"
            />
            <p>jesusglenoficina@gmail.com</p>
          </li>
        </ul>

        <ul className="mx-auto space-y-2 flex flex-col w-full">
          <li className="mb-2">
            <h2 className="font-semibold">Redes Sociales</h2>
          </li>

          <li>
            <Link
              href={"https://github.com/jsglen1"}
              target="_blank"
              className="flex space-x-2 cursor-pointer"
            >
              <Image
                loading="lazy"
                src={"/github.svg"}
                width={30}
                height={30}
                alt="github.svg"
                className="bg-white p-1 rounded-md"
              />
              <p>Github</p>
            </Link>
          </li>

          <li>
            <Link
              href={"https://www.linkedin.com/in/jesus-miguel-g-75956a1b6/"}
              target="_blank"
              className="flex space-x-2 cursor-pointer"
            >
              <Image
                loading="lazy"
                src={"/linkedin.svg"}
                width={30}
                height={30}
                alt="lineding.svg"
              />
              <p>Linkedin</p>
            </Link>
          </li>
        </ul>
      </div>

      <div className="p-5 px-10">
        <div className="border border-b border-gray-500 rounded-xl shadow-md"></div>
      </div>
      <div className="flex items-center justify-center pb-5">
        <span>Derechos Autor @2024 de jsglen1</span>
      </div>
    </footer>
  );
}
