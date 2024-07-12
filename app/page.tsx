import ContactMap from "@/components/ContactMap";
import Employees from "@/components/Employees";
import Header from "@/components/Header";
import HowWeWork from "@/components/HowWeWork";
import PreviousJobs from "@/components/PreviousJobs";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
      <Header />
      <Services />
      <HowWeWork />
      <Employees />
      <PreviousJobs />
      <Reviews />
      <ContactMap />
    </div>
  );
}
