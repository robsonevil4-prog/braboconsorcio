"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Calculator, ArrowRight, Pause, Play } from "lucide-react";
import Image from "next/image";
import ScrollIndicator from "./ScrollIndicator";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.then(() => setPlaying(true)).catch(() => setPlaying(false));
    }
  }, []);

  return (
    <section id="hero" className="relative w-full min-h-screen lg:h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#090909] via-[#0a0a0a] to-[#090909]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30" />

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#E10600] rounded-full blur-[120px] opacity-20" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#E10600] rounded-full blur-[150px] opacity-10" />
      </div>

      <motion.div
        className="relative z-10 h-full flex items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <motion.div
              variants={itemVariants}
                className="flex items-center justify-center relative lg:order-2 max-lg:mt-2 max-lg:mb-2"
            >
              <motion.div
                className="relative w-full max-w-sm aspect-[9/16] rounded-2xl overflow-hidden glass-light p-2 max-lg:max-w-[160px]"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-full h-full rounded-xl overflow-hidden border border-white/5 relative">
                  <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    disableRemotePlayback
                    className="w-full h-full object-cover"
                  >
                    <source src="/videos/hero-bg.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
                  <button
                    onClick={togglePlay}
                    className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-all z-10"
                    aria-label={playing ? "Pausar" : "Tocar"}
                  >
                    {playing ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
                  </button>
                  <div className="absolute bottom-2 left-2">
                    <Image
                      src="/images/logo.png"
                      alt="Brabo Consórcios"
                      width={140}
                      height={40}
                      className="w-auto h-8 object-contain opacity-90"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <div className="text-center lg:text-left flex flex-col justify-center lg:min-h-[70vh] lg:order-1">
              <motion.h1
                variants={itemVariants}
                className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black leading-[1.15] lg:leading-[1.2] font-[family-name:var(--font-montserrat)]"
              >
                <span className="text-white">Realize seu</span>
                <br />
                <span className="text-gradient-red">sonho</span>
                <br />
                <span className="text-white">com quem entende</span>
                <br />
                <span className="text-white">de consórcios.</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="mt-4 lg:mt-6 text-sm sm:text-lg text-[#BDBDBD] max-w-lg leading-relaxed mx-auto lg:mx-0"
              >
                Especialistas em automóveis, motos, imóveis e investimentos
                inteligentes.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="mt-6 lg:mt-8 flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start"
              >
                <a
                  href="https://api.whatsapp.com/message/JAZA6LV6DKJYC1?autoload=1&app_absent=0&utm_source=ig"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#E10600] text-white font-bold text-base neon-button transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  Quero uma Simulação
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="https://api.whatsapp.com/message/JAZA6LV6DKJYC1?autoload=1&app_absent=0&utm_source=ig"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white font-bold text-base neon-button-outline hover:bg-white/5 transition-all"
                >
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  Falar no WhatsApp
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#090909] to-transparent z-10" />
      <ScrollIndicator />
    </section>
  );
}
