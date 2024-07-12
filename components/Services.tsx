import Image from "next/image";
import React from "react";

const services = [
  {
    title: "Gestión",
    description:
      "Desarrollo de software de gestión de la información de tu negocio",
    icon: "/services/gestion.svg",
  },
  {
    title: "Landing Page",
    description:
      "Desarrollo de tu página principal de tu negocio de cara a internet",
    icon: "/services/landing.svg",
  },
  {
    title: "Móviles",
    description:
      "Desarrollo de aplicaciones móviles Android modernas y rápidas",
    icon: "/services/moviles.svg",
  },
  {
    title: "Descentralización",
    description:
      "Desarrollamos aplicaciones descentralizadas de cara a la Blockchain con web3",
    icon: "/services/descentralización.svg",
  },
  {
    title: "Ilustración",
    description:
      "Ilustramos todas tus ideas, realizamos carteles, personajes 2D y mucho más",
    icon: "/services/ilustracion.svg",
  },
  {
    title: "Carteles",
    description:
      "Desarrollamos todo tipo de carteles en PVC como tablas de menú entre otros",
    icon: "/services/carteles.svg",
  },
];

export default function Services() {
  return (
    <div id="servicios" className="py-12 my-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl font-extrabold text-brand_text">
          Servicios a la medida
        </h2>
        <p className="mt-4 text-xl font-semibold text-brand_dark">
          Te adelantamos algunos de nuestros servicios que podemos ofrecerte
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className=" p-6">
              <Image
                data-aos="fade-zoom-in"
                src={service.icon}
                alt={service.title}
                width={64}
                height={64}
                className="w-10 h-10 mx-auto"
              />
              <h3 className="mt-6 text-2xl font-bold">{service.title}</h3>
              <p className="mt-2 text-xl font-semibold text-brand_dark">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
