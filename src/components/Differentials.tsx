"use client";

import { motion } from "framer-motion";
import {
  HeadphonesIcon,
  PiggyBank,
  Award,
  ShieldCheck,
  Percent,
  CheckCircle,
} from "lucide-react";
import { differentials } from "@/data";

const iconsMap: Record<string, React.ElementType> = {
  HeadphonesIcon,
  PiggyBank,
  Award,
  ShieldCheck,
  Percent,
  CheckCircle,
};

export default function Differentials() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#E10600] rounded-full blur-[200px] opacity-5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#E10600]">
            Por que nos escolher
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4 font-[family-name:var(--font-montserrat)]">
            Nossos <span className="text-gradient-red">Diferenciais</span>
          </h2>
          <div className="w-16 h-0.5 bg-[#E10600] mx-auto mt-6" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((diff, i) => {
            const Icon = iconsMap[diff.icon] || CheckCircle;
            return (
              <motion.div
                key={diff.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group"
              >
                <div className="glass-light rounded-2xl p-6 sm:p-8 hover-card h-full">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#E10600]/10 to-transparent border border-[#E10600]/20 flex items-center justify-center mb-5 group-hover:border-[#E10600]/40 group-hover:shadow-lg group-hover:shadow-[#E10600]/10 transition-all duration-300">
                    <Icon className="w-7 h-7 text-[#E10600]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 font-[family-name:var(--font-montserrat)]">
                    {diff.title}
                  </h3>
                  <p className="text-sm text-[#BDBDBD] leading-relaxed">
                    {diff.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
