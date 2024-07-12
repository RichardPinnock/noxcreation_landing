import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div className="relative h-[120vh] md:h-[80vh] flex flex-col items-center justify-center">
      <div className="absolute top-0 md:top-20 mx-auto z-10">
        <Image
          src="/floating_images/ornament1.png"
          alt="20+ Modernas Aplicaciones"
          width={399}
          height={95}
          className="move-up-down"
        />
      </div>
      <div className="absolute top-0 left-4 md:top-20 md:left-20 z-10">
        <Image
          src="/floating_images/points1.png"
          alt="Puntos Flotantes"
          width={139}
          height={118}
          className="move-up-down"
        />
      </div>
      <div className="absolute top-0 right-4 md:top-20 md:right-20 z-10">
        <Image
          src="/floating_images/points2.png"
          alt="Puntos Flotantes"
          width={126}
          height={197}
          className="move-up-down"
        />
      </div>
      <div className="absolute bottom-0 left-0 md:left-10 z-10">
        <Image
          src="/floating_images/ornament2.png"
          alt="UP Developers"
          width={220}
          height={231}
          className="move-up-down"
        />
      </div>
      <div className="absolute right-0 bottom-0 md:right-10 z-10">
        <Image
          src="/floating_images/ornament3.png"
          alt="+130 Proyectos Terminados"
          width={344}
          height={391}
          className="move-up-down"
        />
      </div>
      <div className="max-w-7xl flex flex-col items-center justify-center p-8 text-foreground z-10 -mt-40 md:mt-12">
        <h1 className="text-xl md:text-4xl font-bold text-center mb-4 text-brand_text">
          ¿Quieres automatizar tu negocio y no sabes a quién acudir?
        </h1>
        <p className="text-sm md:text-base text-center mb-6">
          Somos la solución a tus necesidades. Tenemos las habilidades, el
          compromiso y la creatividad para llevar tus idea y tu negocio a otro
          nivel ofertándote la posibilidad de crear un sistema que se adapte a
          tus necesidades. Con Nox no existen barreras contáctenos para poderle
          ayudar.
        </p>
        <div className="flex items-center justify-center gap-4">
          <button className="bg-brand text-white py-2 text-sm px-6 rounded-full mt-4 shadow-md hover:shadow-lg">
            Contactar
          </button>
          <button className=" text-brand py-2 px-6 text-sm border border-brand rounded-full mt-4 ml-4 shadow-md hover:shadow-lg">
            Conocer más
          </button>
        </div>
      </div>
      <div className="absolute z-0 mx-auto top-44 md:top-40 mb-24">
        <Image
          alt="Nox Creations"
          src="/big_logo.png"
          width={380}
          height={220}
        />
      </div>
    </div>
  );
}
