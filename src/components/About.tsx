"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { timeline } from "@/data";

function TimelineItem({
  item,
  index,
}: {
  item: (typeof timeline)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="relative flex items-start gap-8 md:gap-16 group">
      <motion.div
        className="hidden md:flex flex-col items-center"
        initial={{ opacity: 0, scale: 0 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="w-px h-full bg-gradient-to-b from-[#E10600] to-transparent absolute top-0" />
        <div className="relative z-10 w-14 h-14 rounded-full bg-[#E10600] flex items-center justify-center font-[family-name:var(--font-montserrat)] font-black text-white text-sm shadow-lg shadow-[#E10600]/30">
          {item.year}
        </div>
      </motion.div>

      <motion.div
        className={`flex-1 pb-16 ${isEven ? "md:text-left" : "md:text-left"}`}
        initial={{ opacity: 0, x: isEven ? -30 : 30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="md:hidden flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-[#E10600] flex items-center justify-center font-[family-name:var(--font-montserrat)] font-black text-white text-xs">
            {item.year}
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-[#E10600]/50 to-transparent" />
        </div>

        <div className="glass-light rounded-2xl overflow-hidden hover-card group">
          <div className="aspect-[16/9] bg-gradient-to-br from-[#1a1a1a] to-[#090909] relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-[#BDBDBD] text-sm">Imagem {item.year}</p>
                <p className="text-[#666] text-xs mt-1">Adicione aqui</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <div className="p-6 sm:p-8">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#E10600]">
              {item.year}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-2 font-[family-name:var(--font-montserrat)]">
              {item.title}
            </h3>
            <p className="text-[#BDBDBD] mt-3 leading-relaxed text-sm sm:text-base">
              {item.description}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#E10600] rounded-full blur-[200px] opacity-5" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#E10600]">
            Nossa Trajetória
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4 font-[family-name:var(--font-montserrat)]">
            Nossa <span className="text-gradient-red">História</span>
          </h2>
          <div className="w-16 h-0.5 bg-[#E10600] mx-auto mt-6" />
        </motion.div>

        <div className="relative pl-6 md:pl-0">
          <div className="hidden md:block absolute left-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-[#E10600] via-[#E10600]/30 to-transparent" />
          {timeline.map((item, index) => (
            <TimelineItem key={item.year} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
