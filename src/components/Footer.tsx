"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  Mail,
  MapPin,
  ChevronUp,
} from "lucide-react";
import Image from "next/image";
import { navItems } from "@/data";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contato" className="relative bg-[#090909] border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
<Image
                src="/images/logo.png"
                alt="Brabo Consórcios"
                width={140}
                height={48}
                className="w-auto h-10 sm:h-12 object-contain"
              />
            </div>
            <p className="text-[#BDBDBD] text-sm leading-relaxed">
              Especialistas em consórcios de automóveis, motos, imóveis e
              investimentos inteligentes. Realize seu sonho com quem entende.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm font-[family-name:var(--font-montserrat)]">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => scrollTo(item.href)}
                    className="text-[#BDBDBD] hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm font-[family-name:var(--font-montserrat)]">
              Contato
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://api.whatsapp.com/message/JAZA6LV6DKJYC1?autoload=1&app_absent=0&utm_source=ig"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#BDBDBD] hover:text-white transition-colors text-sm group"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform" />
                  (73) 99809-6065
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/brabo.consorcios/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#BDBDBD] hover:text-white transition-colors text-sm group"
                >
                  <InstagramIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  @brabo.consorcios
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@braboconsorcios.com.br"
                  className="flex items-center gap-3 text-[#BDBDBD] hover:text-white transition-colors text-sm group"
                >
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  contato@braboconsorcios.com.br
                </a>
              </li>
              <li>
                <span className="flex items-center gap-3 text-[#BDBDBD] text-sm">
                  <MapPin className="w-4 h-4 shrink-0" />
                  Av. Rui Barbosa, 796 - Centro, Eunápolis - BA
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm font-[family-name:var(--font-montserrat)]">
              Simule Agora
            </h4>
            <p className="text-[#BDBDBD] text-sm mb-6 leading-relaxed">
              Solicite uma simulação personalizada e descubra o plano ideal para
              você.
            </p>
            <a
              href="https://api.whatsapp.com/message/JAZA6LV6DKJYC1?autoload=1&app_absent=0&utm_source=ig"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#E10600] text-white font-semibold text-sm neon-button"
            >
              <MessageCircle className="w-4 h-4" />
              Simular Agora
            </a>
          </motion.div>
        </div>

        <div className="metallic-line mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#666] text-xs">
            © {new Date().getFullYear()} Brabo Consórcios. Todos os direitos
            reservados.
          </p>
          <button
            onClick={scrollTop}
            className="flex items-center gap-2 text-[#BDBDBD] hover:text-white transition-colors text-sm group"
          >
            Voltar ao topo
            <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
