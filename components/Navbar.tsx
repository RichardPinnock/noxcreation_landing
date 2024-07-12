import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { IconMenuDeep } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#pasos", label: "Pasos" },
  { href: "#nuestro-equipo", label: "Nuestro Equipo" },
  { href: "#trabajos", label: "Trabajos" },
  { href: "#comentarios", label: "Comentarios" },
  { href: "#contacto", label: "Contacto" },
  { href: "/blogs", label: "Blog" },
];

export default function Navbar() {
  return (
    <header className="relative z-10 bg-white py-3">
      <div className="mx-auto flex h-16 container items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link className="block text-teal-600" href="/">
          <span className="sr-only">Nox Creation</span>
          <Image
            alt="Nox Creation"
            src="/logotipo_nox.svg"
            width={100}
            height={80}
          />
        </Link>

        <div className="ml-20 flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden lg:block">
            <ul className="flex items-center xl:gap-3  text-brand_blue_dark font-semibold">
              {links.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="rounded-full hover:bg-brand_secundary py-2 px-4 text-sm xl:text-md"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="ml-auto flex items-center gap-4">
            <div className="sm:flex sm:gap-4 ml-auto">
              <Link
                href="/"
                className="hidden sm:block rounded-full hover:bg-brand_secundary py-2 px-4 text-md text-brand_blue_dark font-semibold"
              >
                Conocer más
              </Link>

              <Link
                className="hidden px-8 py-2.5 text-sm font-medium text-white bg-brand transition sm:block rounded-full hover:shadow-md"
                href="#"
              >
                Contactar
              </Link>
            </div>

            <Sheet>
              <SheetTrigger asChild>
                <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                  <span className="sr-only">Menu</span>
                  <IconMenuDeep stroke={2} />
                </button>
              </SheetTrigger>
              <SheetContent className="flex flex-col justify-center items-center">
                <ul className="flex flex-col items-center gap-3 text-md text-brand_blue_dark font-semibold my-auto">
                  {links.map(({ href, label }) => (
                    <li key={label} className="">
                      <Link
                        href={href}
                        className="flex rounded-full hover:bg-brand_secundary py-2 px-4 w-full"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
