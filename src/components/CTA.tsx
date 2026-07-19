"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#E10600] to-[#990400]" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-black/10 rounded-full blur-[100px]" />
      </div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full" />
        <div className="absolute top-20 right-20 w-32 h-32 border border-white rounded-full" />
        <div className="absolute bottom-10 right-40 w-16 h-16 border border-white rounded-full" />
        <div className="absolute bottom-20 left-40 w-24 h-24 border border-white rounded-full" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white font-[family-name:var(--font-montserrat)] leading-tight">
            Pronto para conquistar
            <br />
            seu <span className="text-white/80">patrimônio</span>?
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto">
            Milhares de clientes já realizaram seus sonhos com a Brabo. O próximo
            pode ser você.
          </p>
          <motion.a
            href="https://api.whatsapp.com/message/JAZA6LV6DKJYC1?autoload=1&app_absent=0&utm_source=ig"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 group inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white text-[#E10600] font-bold text-lg transition-all hover:shadow-2xl hover:shadow-black/20"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <MessageCircle className="w-6 h-6" />
            Simular Agora
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
