import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import DarshanTimings from "@/components/sections/DarshanTimings";
import AboutMandir from "@/components/sections/AboutMandir";
import Events from "@/components/sections/Events";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import LocationContact from "@/components/sections/LocationContact";
import DonateSeva from "@/components/sections/DonateSeva";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <DarshanTimings />
      <AboutMandir />
      <Events />
      <Gallery />
      <Testimonials />
      <LocationContact />
      <DonateSeva />
      <Footer />
    </main>
  );
}
