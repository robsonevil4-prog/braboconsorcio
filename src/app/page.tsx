"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Consortium from "@/components/Consortium";
import Gallery from "@/components/Gallery";
import Numbers from "@/components/Numbers";
import Differentials from "@/components/Differentials";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ParticlesBackground from "@/components/ParticlesBackground";

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll(".parallax-layer").forEach((el) => {
        const htmlEl = el as HTMLElement;
        const speed = parseFloat(htmlEl.dataset.speed || "0.1");
        htmlEl.style.transform = `translateY(${window.scrollY * speed}px)`;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <CustomCursor />
      <ParticlesBackground />
      <Header />

      <main className="relative">
        <Hero />
        <About />
        <Consortium />
        <Numbers />
        <Differentials />
        <Gallery />
        <Testimonials />
        <CTA />
      </main>

      <Footer />

      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 3, type: "spring" }}
      >
        <a
          href="https://api.whatsapp.com/message/JAZA6LV6DKJYC1?autoload=1&app_absent=0&utm_source=ig"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 transition-all hover:scale-105"
        >
          <MessageCircle className="w-7 h-7 text-white" />
        </a>
      </motion.div>
    </>
  );
}


