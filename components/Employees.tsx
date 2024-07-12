import Image from "next/image";

const employees = [
  {
    name: "Ing. Josué Carballo",
    role: "Desarrollador",
    image: "/employees/josue.png",
  },
  {
    name: "Lic. Bertha Andrianis",
    role: "Diseñadora / Ilustradora",
    image: "/employees/bertha.png",
  },
  {
    name: "Ing. Lázaro Jesús",
    role: "Desarrollador",
    image: "/employees/lazaro.png",
  },
  {
    name: "Ing. Leonardo Fabián",
    role: "Desarrollador",
    image: "/employees/leonardo.png",
  },
  {},
  {
    name: "Ing. Claudia Rizo",
    role: "Community Manager",
    image: "/employees/claudia.png",
  },
  {
    name: "Lic. Mary Isabel",
    role: "Manager Creativity",
    image: "/employees/mary.png",
  },
];

export default function Employees() {
  return (
    <div id="nuestro-equipo" className="relative p-8 my-20">
      <Image
        src="/employees_points.png"
        alt="Puntos Flotantes"
        width={190}
        height={210}
        className="move-up-down absolute top-32 md:top-0 right-20 z-10"
      />
      <h2 className="text-center text-5xl font-bold mb-8 text-brand_text">
        El equipo creativo detrás de la puerta
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
        {employees.map((employee, index) => (
          <div
            key={index}
            className="p-4 hover:scale-105 transition-transform duration-500 cursor-pointer"
          >
            {employee.image && (
              <Image
                width={300}
                height={300}
                src={employee.image}
                alt={employee.name}
                className="w-24 h-24 object-cover rounded-full mx-auto"
              />
            )}
            <div className="mt-4 flex flex-col items-center">
              <h3 className="text-2xl font-bold">{employee.name}</h3>
              <p className="text-lg font-semibold">{employee.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
