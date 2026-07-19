"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { galleryItems } from "@/data";

export default function Gallery() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedItem = selectedId
    ? galleryItems.find((item) => item.id === selectedId)
    : null;

  const currentIndex = selectedItem
    ? galleryItems.findIndex((item) => item.id === selectedItem.id)
    : -1;

  const navigate = (dir: "prev" | "next") => {
    const next = dir === "next" ? currentIndex + 1 : currentIndex - 1;
    if (next >= 0 && next < galleryItems.length) {
      setSelectedId(galleryItems[next].id);
    }
  };

  return (
    <section id="galeria" className="relative py-24 sm:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#E10600]">
            Nossos Registros
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4 font-[family-name:var(--font-montserrat)]">
            Galeria <span className="text-gradient-red">Premium</span>
          </h2>
          <div className="w-16 h-0.5 bg-[#E10600] mx-auto mt-6" />
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              layout
              className="break-inside-avoid cursor-pointer group relative rounded-2xl overflow-hidden"
              onClick={() => setSelectedId(item.id)}
            >
              <div className="w-full rounded-2xl overflow-hidden relative bg-gradient-to-br from-[#1a1a1a] to-[#090909]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-white text-lg font-light">+</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
            onClick={() => setSelectedId(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-10"
              onClick={() => setSelectedId(null)}
            >
              <X className="w-8 h-8" />
            </button>

            {galleryItems.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); navigate("prev"); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors disabled:opacity-30 z-10"
                  disabled={currentIndex <= 0}
                >
                  <ChevronLeft className="w-10 h-10" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); navigate("next"); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors disabled:opacity-30 z-10"
                  disabled={currentIndex >= galleryItems.length - 1}
                >
                  <ChevronRight className="w-10 h-10" />
                </button>
              </>
            )}

            <motion.div
              key={selectedItem.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl w-full max-h-[85vh] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedItem.src}
                alt={selectedItem.alt}
                width={1200}
                height={1600}
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
