import { IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";
import Image from "next/image";

export default function ContactMap() {
  return (
    <div id="contacto" className="flex flex-col md:flex-row ">
      <div className="w-full md:w-1/3">
        <Image src="/mapa.png" alt="map" width={1000} height={500} />
      </div>
      <div className="w-full md:w-2/3 p-8 bg-card text-card-foreground">
        <h2 className="text-2xl font-bold mb-4">Contacto</h2>
        <p className="mb-6">
          Escriba los siguientes datos con la información que nos quiera hacer
          llegar.
        </p>
        <form className="space-y-4 grid">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Nombre"
              className="w-1/2 p-2 border border-input rounded-md"
            />
            <input
              type="text"
              placeholder="Apellidos"
              className="w-1/2 p-2 border border-input rounded-md"
            />
          </div>
          <input
            type="email"
            placeholder="Correo"
            className="w-full p-2 border border-input rounded-md"
          />
          <input
            type="tel"
            placeholder="Teléfono"
            className="w-full p-2 border border-input rounded-md"
          />
          <textarea
            placeholder="Escriba en un breve texto"
            className="w-full p-2 border border-input rounded-md h-24"
          ></textarea>
          <button
            type="submit"
            className="bg-brand text-white p-2 ml-auto px-6 rounded-full"
          >
            Enviar
          </button>
        </form>
        <div className="mt-8 space-y-4 grid grid-cols-3 text-base">
          <div className="flex items-center space-x-2 ">
            <IconMapPin stroke={1.5} className="size-10 text-brand" />
            <div className="flex flex-col text-xs">
              <span className="text-lg text-brand">Estamos en</span>
              Estamos en Calle 0 y O, Lindero y Ocujes, Casino Deportivo
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <IconPhone stroke={1.5} className="size-10 text-brand" />
            <div className="flex flex-col text-xs">
              <span className="text-lg text-brand">Llamemos a</span>
              Llámemos A +53 5847 73 11
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <IconMail stroke={1.5} className="size-10 text-brand" />
            <div className="flex flex-col text-xs">
              <span className="text-lg text-brand">Escríbanos a</span>
              Escríbanos A servicio@concreacion.dev
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
