import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";

export function DropdownMenuNavbar() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Image
          loading="lazy"
          src={"/hamburger-button.svg"}
          alt="hamburger-button"
          width={30}
          height={30}
        />
        {/* 
        <Button variant="outline">Open</Button>
        */}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Portafolio</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href={"#start"}>
            <DropdownMenuItem>inicio</DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>

        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Sobre mí</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <Link href={"#contact-me"}>
                  <DropdownMenuItem>Contacta me</DropdownMenuItem>
                </Link>
                <Link href={"#about-me"}>
                  <DropdownMenuItem>Quien soy?</DropdownMenuItem>
                </Link>
                <Link href={"https://github.com/jsglen1"}>
                  <DropdownMenuItem>Github</DropdownMenuItem>
                </Link>
                <Link
                  href={"https://www.linkedin.com/in/jesus-miguel-g-75956a1b6/"}
                >
                  <DropdownMenuItem>Linkedin</DropdownMenuItem>
                </Link>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>

        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Servicios</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <Link href={"#services"}>
                  <DropdownMenuItem>Diseño Software</DropdownMenuItem>
                </Link>
                <Link href={"#services"}>
                  <DropdownMenuItem>Soporte de TI</DropdownMenuItem>
                </Link>
                <Link href={"#services"}>
                  <DropdownMenuItem>Consultor en TICS</DropdownMenuItem>
                </Link>
                <Link href={"#services"}>
                  <DropdownMenuItem>Programación Web</DropdownMenuItem>
                </Link>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>

        <DropdownMenuGroup>
          <Link href={"#technologies"}>
            <DropdownMenuItem>Tecnologías</DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Salir
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
