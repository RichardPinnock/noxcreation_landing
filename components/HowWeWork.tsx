import Image from "next/image";
import React from "react";

export default function HowWeWork() {
  return (
    <div id="pasos" className="container py-12 px-6 my-20">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold text-brand_text">
          ¿Cómo trabajamos?
        </h2>
        <p className="mt-4 text-xl font-semibold text-brand_dark">
          Le ayudamos a desarrollar cualquier tipo de solución. Debe seguir los
          siguientes pasos para podernos comunicar y conocer sus necesidades.
        </p>
      </div>
      <div className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-6">
            <Image
              width={600}
              height={600}
              className=" object-cover"
              src="/01.png"
              alt="Contáctanos para empezar a trabajar juntos"
            />
          </div>
          <div className="flex flex-col justify-center items-start px-4">
            <div className="flex mb-4">
              <h3 className="text-4xl font-semibold">Contáctenos</h3>
            </div>
            <p className="text-xl font-medium text-brand_dark mb-4">
              Lo primero que necesita hacer es contactarnos para poder
              planificar una reunión y poder conocer sus proyecciones y la
              magnitud de sus necesidades.
            </p>
            <button className="bg-brand text-white py-2 px-4 rounded-full mt-4">
              Contactar
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center items-start px-4">
            <div className="flex mb-4">
              <h3 className="text-4xl font-semibold">Obtener Propuesta</h3>
            </div>
            <p className="text-xl font-medium text-brand_dark mb-4">
              Teniendo una idea de su proyecto, procedemos a crearle una
              propuesta que incluyen requisitos que debe cumplir el sistema y
              una estimación de tiempo y costo
            </p>
            <button className="bg-brand text-white py-2 px-4 rounded-full mt-4">
              Conocer más
            </button>
          </div>
          <div className="flex-shrink-0 mb-6 md:mb-0 ml-auto order-first md:order-last">
            <Image
              width={600}
              height={600}
              className="object-cover"
              src="/02.png"
              alt="Obtener Propuesta"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
