import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const jobs = [
  {
    name: "web-development",
    images: [
      {
        name: "Agenciapp",
        src: "/previous_jobs/1.png",
      },
      {
        name: "TuShoppy",
        src: "/previous_jobs/2.png",
      },
      {
        name: "El Mercadito",
        src: "/previous_jobs/3.png",
      },
      {
        name: "TCargo",
        src: "/previous_jobs/4.png",
      },
      {
        name: "GoTravelClub + APK",
        src: "/previous_jobs/5.png",
      },
      {
        name: "Encargos",
        src: "/previous_jobs/6.png",
      },
      {
        name: "RemesasP2P",
        src: "/previous_jobs/7.png",
      },
      {
        name: "SCAPHA",
        src: "/previous_jobs/8.png",
      },
      {
        name: "Priscila",
        src: "/previous_jobs/9.png",
      },
      {
        name: "BALCOM PLUS",
        src: "/previous_jobs/10.png",
      },
      {
        name: "FenixDEX",
        src: "/previous_jobs/11.png",
      },
      {
        name: "BlackMoon Metaverse",
        src: "/previous_jobs/12.png",
      },
      {
        name: "P2Panda",
        src: "/previous_jobs/13.png",
      },
      {
        name: "Maubius",
        src: "/previous_jobs/14.png",
      },
      {
        name: "Kitsuu",
        src: "/previous_jobs/15.png",
      },
    ],
  },
  {
    name: "app-development",
    images: [
      {
        name: "TCargo",
        src: "/previous_jobs/4.png",
      },
      {
        name: "GoTravelClub + APK",
        src: "/previous_jobs/5.png",
      },
      {
        name: "Encargos",
        src: "/previous_jobs/6.png",
      },
      {
        name: "RemesasP2P",
        src: "/previous_jobs/7.png",
      },
      {
        name: "SCAPHA",
        src: "/previous_jobs/8.png",
      },
      {
        name: "Priscila",
        src: "/previous_jobs/9.png",
      },
      {
        name: "BALCOM PLUS",
        src: "/previous_jobs/10.png",
      },
    ],
  },
  {
    name: "web-design",
    images: [
      {
        name: "Encargos",
        src: "/previous_jobs/6.png",
      },
      {
        name: "RemesasP2P",
        src: "/previous_jobs/7.png",
      },
      {
        name: "SCAPHA",
        src: "/previous_jobs/8.png",
      },
      {
        name: "Priscila",
        src: "/previous_jobs/9.png",
      },
      {
        name: "BALCOM PLUS",
        src: "/previous_jobs/10.png",
      },
    ],
  },
  {
    name: "ilustraciones",
    images: [
      {
        name: "Encargos",
        src: "/previous_jobs/6.png",
      },
      {
        name: "RemesasP2P",
        src: "/previous_jobs/7.png",
      },
      {
        name: "SCAPHA",
        src: "/previous_jobs/8.png",
      },
      {
        name: "Priscila",
        src: "/previous_jobs/9.png",
      },
      {
        name: "BALCOM PLUS",
        src: "/previous_jobs/10.png",
      },
      {
        name: "FenixDEX",
        src: "/previous_jobs/11.png",
      },
      {
        name: "BlackMoon Metaverse",
        src: "/previous_jobs/12.png",
      },
      {
        name: "P2Panda",
        src: "/previous_jobs/13.png",
      },
      {
        name: "Maubius",
        src: "/previous_jobs/14.png",
      },
      {
        name: "Kitsuu",
        src: "/previous_jobs/15.png",
      },
    ],
  },
  {
    name: "pvc",
    images: [
      {
        name: "RemesasP2P",
        src: "/previous_jobs/7.png",
      },
      {
        name: "SCAPHA",
        src: "/previous_jobs/8.png",
      },
      {
        name: "Priscila",
        src: "/previous_jobs/9.png",
      },
      {
        name: "BALCOM PLUS",
        src: "/previous_jobs/10.png",
      },
      {
        name: "FenixDEX",
        src: "/previous_jobs/11.png",
      },
      {
        name: "BlackMoon Metaverse",
        src: "/previous_jobs/12.png",
      },
    ],
  },
];

export default function PreviousJobs() {
  return (
    <div id="trabajos" className="py-12 my-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl font-extrabold text-brand_text">
          Selección de trabajos
        </h2>
        <p className="mt-4 text-xl font-semibold text-brand_dark">
          Estos son algunos de nuestrs trabajos anteriores
        </p>
        <Tabs defaultValue="web-development" className="mx-auto mt-16">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-5 bg-transparent gap-4 mb-10">
            <TabsTrigger
              value="web-development"
              className="text-brand_dark py-2 px-4 rounded-full"
            >
              <button className="">Web Development</button>
            </TabsTrigger>
            <TabsTrigger
              value="app-development"
              className=" text-brand_dark py-2 px-4 rounded-full"
            >
              App Development
            </TabsTrigger>
            <TabsTrigger
              value="web-design"
              className=" text-brand_dark py-2 px-4 rounded-full"
            >
              Web Design
            </TabsTrigger>
            <TabsTrigger
              value="ilustraciones"
              className=" text-brand_dark py-2 px-4 rounded-full"
            >
              Ilustraciones
            </TabsTrigger>
            <TabsTrigger
              value="pvc"
              className=" text-brand_dark py-2 px-4 rounded-full"
            >
              Trabajos en PVC
            </TabsTrigger>
          </TabsList>
          {jobs.map((job) => (
            <TabsContent key={job.name} value={job.name}>
              <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                {job.images.map((image) => (
                  <div key={image.name} className="p-6">
                    <Image
                      src={image.src}
                      alt={image.name}
                      width={230}
                      height={230}
                      className="object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
