"use client"

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Bento from "@/components/Bento";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useStore } from "@/store/Store";

export default function Home() {

  const { open } = useStore();

  return (
    <>
      <Navbar />
      {!open && (
        <>
          <Hero />
          <Bento />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}
