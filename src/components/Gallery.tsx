"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Filter } from "lucide-react";
import { galleryFilters, galleryItems } from "@/data";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const filtered =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  const selectedItem = selectedImage
    ? galleryItems.find((item) => item.id === selectedImage)
    : null;

  const currentIndex = selectedItem
    ? filtered.findIndex((item) => item.id === selectedItem.id)
    : -1;

  const navigate = (dir: "prev" | "next") => {
    const newIndex = dir === "next" ? currentIndex + 1 : currentIndex - 1;
    if (newIndex >= 0 && newIndex < filtered.length) {
      setSelectedImage(filtered[newIndex].id);
    }
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemV = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
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

        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-sm text-[#BDBDBD] hover:border-[#E10600] transition-colors"
          >
            <Filter className="w-4 h-4" />
            Filtros
          </button>

          <div className="hidden lg:flex flex-wrap justify-center gap-3">
            {galleryFilters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === f.value
                    ? "bg-[#E10600] text-white shadow-lg shadow-[#E10600]/30"
                    : "glass-light text-[#BDBDBD] hover:text-white hover:border-[#E10600]/30"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="w-full lg:hidden flex flex-wrap justify-center gap-3"
              >
                {galleryFilters.map((f) => (
                  <button
                    key={f.value}
                    onClick={() => {
                      setActiveFilter(f.value);
                      setShowFilters(false);
                    }}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeFilter === f.value
                        ? "bg-[#E10600] text-white"
                        : "glass-light text-[#BDBDBD]"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.div
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filtered.map((item) => (
            <motion.div
              key={item.id}
              variants={itemV}
              layout
              className="break-inside-avoid cursor-pointer group relative rounded-2xl overflow-hidden"
              onClick={() => setSelectedImage(item.id)}
            >
              <div className="w-full bg-gradient-to-br from-[#1a1a1a] to-[#090909] rounded-2xl overflow-hidden relative aspect-[4/3]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-[#BDBDBD] text-sm">Imagem</p>
                    <p className="text-[#666] text-xs mt-1">{item.alt}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-white text-sm font-medium">
                    {item.alt}
                  </span>
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-white text-lg font-light">+</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>

            {filtered.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("prev");
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors disabled:opacity-30 z-10"
                  disabled={currentIndex <= 0}
                >
                  <ChevronLeft className="w-10 h-10" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("next");
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors disabled:opacity-30 z-10"
                  disabled={currentIndex >= filtered.length - 1}
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
              className="relative max-w-4xl w-full aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#090909] border border-white/5"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-[#BDBDBD] text-lg">{selectedItem.alt}</p>
                  <p className="text-[#666] text-sm mt-2">
                    Adicione a imagem em /public/images/gallery/{selectedItem.category}/
                  </p>
                </div>
              </div>
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white backdrop-blur-sm">
                  {galleryFilters.find((f) => f.value === selectedItem.category)
                    ?.label || selectedItem.category}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
