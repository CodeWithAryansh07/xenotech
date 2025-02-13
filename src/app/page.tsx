"use client"

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Bento from "@/components/Bento";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useStore } from "@/store/Store";
import { Services } from "@/components/Services";
import { Reviews } from "@/components/Reviews";

export default function Home() {

  const { open } = useStore();

  return (
    <div className="scrollbar-hide">
      <Navbar />
      {!open && (
        <>
          <Hero />
          <Bento />
          <Services />
          <Reviews />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}
