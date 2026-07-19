"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" />
    </svg>
  );
}

const videos = [
  {
    id: 1,
    title: "Brabo Consórcios - Apresentação",
    description: "Conheça a Brabo Consórcios e descubra como realizamos sonhos.",
    thumbnail: "",
    type: "youtube" as const,
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "2:30",
  },
  {
    id: 2,
    title: "Como funciona o consórcio",
    description: "Entenda o passo a passo do consórcio e suas vantagens.",
    thumbnail: "",
    type: "mp4" as const,
    src: "/videos/sample.mp4",
    duration: "4:15",
  },
  {
    id: 3,
    title: "Depoimento - Cliente Realizado",
    description: "Veja o depoimento de quem já realizou o sonho com a Brabo.",
    thumbnail: "",
    type: "youtube" as const,
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "3:45",
  },
  {
    id: 4,
    title: "Brabo Consórcios - Resultados 2025",
    description: "Nossos principais resultados e conquistas do ano.",
    thumbnail: "",
    type: "mp4" as const,
    src: "/videos/sample.mp4",
    duration: "5:00",
  },
];

export default function Videos() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const active = activeVideo ? videos.find((v) => v.id === activeVideo) : null;

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#E10600] rounded-full blur-[150px] opacity-5" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#E10600]">
            Multimídia
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4 font-[family-name:var(--font-montserrat)]">
            Vídeos <span className="text-gradient-red">Brabo</span>
          </h2>
          <div className="w-16 h-0.5 bg-[#E10600] mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {videos.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setActiveVideo(video.id)}
              className="group cursor-pointer"
            >
              <div className="glass-light rounded-2xl overflow-hidden hover-card">
                <div className="relative aspect-video bg-gradient-to-br from-[#1a1a1a] to-[#090909] flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <YoutubeIcon className="w-8 h-8 text-[#E10600] mx-auto mb-2" />
                      <p className="text-[#BDBDBD] text-xs">{video.duration}</p>
                    </div>
                  </div>
                  <motion.div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center">
                    <motion.div
                      className="w-16 h-16 rounded-full bg-[#E10600]/90 flex items-center justify-center shadow-lg shadow-[#E10600]/30"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Play className="w-6 h-6 text-white ml-0.5" />
                    </motion.div>
                  </motion.div>
                  <div className="absolute bottom-3 right-3 px-2 py-1 rounded bg-black/60 text-white text-xs">
                    {video.duration}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white font-[family-name:var(--font-montserrat)]">
                    {video.title}
                  </h3>
                  <p className="text-sm text-[#BDBDBD] mt-1 leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
            onClick={() => setActiveVideo(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-10"
              onClick={() => setActiveVideo(null)}
            >
              <X className="w-8 h-8" />
            </button>

            <motion.div
              key={active.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              {active.type === "youtube" ? (
                <iframe
                  src={active.src}
                  className="w-full h-full"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              ) : (
                <video
                  controls
                  autoPlay
                  className="w-full h-full"
                >
                  <source src={active.src} type="video/mp4" />
                </video>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
