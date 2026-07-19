"use client";

import { motion } from "framer-motion";
import {
  Car,
  Bike,
  Building2,
  Truck,
  ArrowRight,
} from "lucide-react";
import { consortiumCards } from "@/data";

const icons: Record<string, React.ElementType> = {
  Car,
  Bike,
  Building2,
  Truck,
};

export default function Consortium() {
  return (
    <section id="consorcios" className="relative py-24 sm:py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-[#E10600] rounded-full blur-[180px] opacity-5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#E10600]">
            Nossos Planos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4 font-[family-name:var(--font-montserrat)]">
            Consórcios <span className="text-gradient-red">Brabo</span>
          </h2>
          <div className="w-16 h-0.5 bg-[#E10600] mx-auto mt-6" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {consortiumCards.map((card, i) => {
            const Icon = icons[card.icon] || Car;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group perspective-1000"
              >
                <div className="glass-light rounded-2xl overflow-hidden hover-card h-full flex flex-col">
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-[#1a1a1a] to-[#090909] overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className="w-16 h-16 text-[#E10600] opacity-30" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-[#E10600]/20 backdrop-blur-sm flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#E10600]" />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-black text-white font-[family-name:var(--font-montserrat)]">
                        {card.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <p className="text-sm text-[#BDBDBD] leading-relaxed flex-1">
                      {card.description}
                    </p>
                    <button className="mt-4 flex items-center gap-2 text-[#E10600] font-semibold text-sm group/btn">
                      Saiba Mais
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
