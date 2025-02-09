import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Bento from "@/components/Bento";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Bento />
      <Contact />
      <Footer />
    </>
  );
}
