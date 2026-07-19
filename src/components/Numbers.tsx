"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Award, Users, Gift } from "lucide-react";
import { numbers } from "@/data";

function AnimatedCounter({
  value,
  suffix,
  prefix,
  isString,
}: {
  value: number;
  suffix: string;
  prefix: string;
  isString?: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  if (isString) {
    return (
      <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-[family-name:var(--font-montserrat)]">
        {prefix}
        {suffix}
      </span>
    );
  }

  return (
    <span ref={ref} className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-[family-name:var(--font-montserrat)]">
      {prefix}
      {inView ? value : 0}
      {suffix}
    </span>
  );
}

const numberIcons = [TrendingUp, Award, Users, Gift];

export default function Numbers() {
  return (
    <section id="numeros" className="relative py-24 sm:py-32 bg-[#090909] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E10600]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E10600]/30 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#E10600]">
            Nossos Números
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mt-4 font-[family-name:var(--font-montserrat)] leading-relaxed">
            Resultados que <span className="text-gradient-red">Impressionam</span>
          </h2>
          <div className="w-16 h-0.5 bg-[#E10600] mx-auto mt-6" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {numbers.map((num, i) => {
            const Icon = numberIcons[i] || TrendingUp;
            return (
              <motion.div
                key={num.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#E10600]/10 to-transparent border border-[#E10600]/20 flex items-center justify-center group-hover:border-[#E10600]/40 transition-all duration-300">
                  <Icon className="w-7 h-7 text-[#E10600]" />
                </div>
                <AnimatedCounter
                  value={num.value}
                  prefix={num.prefix}
                  suffix={num.suffix}
                  isString={num.isString}
                />
                <p className="text-[#BDBDBD] text-base mt-3 uppercase tracking-[0.2em] font-semibold">
                  {num.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
