import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Servicios from "@/components/Servicios";
import SobreNosotros from "@/components/SobreNosotros";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Servicios />
        <SobreNosotros />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
