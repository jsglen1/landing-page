import Image from "next/image";
import { Sections } from "./sections";
import { ThemeToggle } from "../theme-toggle";
import { DropdownMenuNavbar } from "../drop-down-menu/drop-drown-menu";
import HeaderBackground from "./header-background";

export default function Navbar() {
  return (
    <HeaderBackground>
      <nav>
        <ul className="flex h-15 items-center justify-between px-4 md:px-10 py-4">
          <li className="flex items-center space-x-2">
            <Image
              loading="lazy"
              src={"/logo.svg"}
              alt="logo"
              width={50}
              height={50}
            />
            <h1 className="text-xl">Jesús Glen</h1>
          </li>
          <li className="hidden md:block">
            <Sections />
          </li>
          <li>
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            <div className="flex md:hidden items-center space-x-3">
              <ThemeToggle />
              <DropdownMenuNavbar />
            </div>
          </li>
        </ul>
      </nav>
    </HeaderBackground>
  );
}
