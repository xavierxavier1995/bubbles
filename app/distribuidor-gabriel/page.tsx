'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Componentes de Suporte ---

const Logo = () => (
  <div className="flex items-center gap-2">
    <img 
      src="https://bubbles.gabrielxavier.online/BUBBLES.svg" 
      alt="Bubbles® Logo" 
      className="h-8 md:h-10 w-auto brightness-0 invert"
      referrerPolicy="no-referrer"
    />
  </div>
);

const HeroCarousel = () => {
  const [index, setIndex] = useState(0);
  const lines = [
    { 
      name: "Linha PRO", 
      desc: "Fragrâncias que fixam por dias e fidelizam o tutor.", 
      img: "https://bubbles.gabrielxavier.online/capa_linha-xperience.jpg" 
    },
    { name: "Essential", desc: "O melhor custo-benefício do mercado", img: "https://bubbles.gabrielxavier.online/capa_linha-essential.jpg" },
    { name: "Xperience", desc: "Sensorial premium e fragrâncias únicas", img: "https://bubbles.gabrielxavier.online/capa_linha-pro.jpg" },
    { name: "Collora", desc: "Tratamento de cor e brilho intenso", img: "https://bubbles.gabrielxavier.online/capa_kit-collora.jpg" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % lines.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full group rounded-[40px] overflow-hidden">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img 
            src={lines[index].img} 
            alt={lines[index].name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/10" />
          
          {/* Floating Box */}
          <div className="absolute top-24 left-8 max-w-[240px] z-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="p-5 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10"
            >
              <p className="text-sm text-white/90 leading-relaxed font-medium">
                {lines[index].desc}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Progress Indicators */}
      <div className="absolute top-8 right-8 flex gap-2 z-30">
        {lines.map((_, i) => (
          <div 
            key={i} 
            className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? 'w-8 bg-[#F4CDD4]' : 'w-4 bg-white/40'}`} 
          />
        ))}
      </div>
    </div>
  );
};

// --- Página Principal ---

export default function DistribuidorGabriel() {
  const heroButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="bg-[#0D0D0D] text-white font-sans selection:bg-[#F4CDD4] selection:text-[#080808] min-h-screen relative">
      
      {/* Dot Pattern Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      {/* SEÇÃO 1: HERO & HEADER */}
      <section className="relative min-h-screen flex flex-col justify-center py-20 md:py-0">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Text & CTA */}
            <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
              <div className="mb-10"><Logo /></div>
              
              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-black mb-6 leading-[1.05] tracking-tight uppercase">
                Domine sua região com <br />
                a marca que <br />
                <span className="text-[#F4CDD4]">Define o Padrão</span> de <br />
                Cosmético Pet.
              </h1>
              
              <p className="text-white/70 text-lg mb-10 max-w-lg leading-relaxed font-medium">
                Seja o parceiro estratégico dos centros de estética pet mais exigentes. 
                Ofereça a linha que combina <strong className="text-white font-bold">alta performance</strong>, rendimento industrial e fidelidade.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <motion.button 
                  ref={heroButtonRef}
                  whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(244,205,212,0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#F4CDD4] text-[#080808] px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 w-full sm:w-auto"
                >
                  Me Candidatar Agora <ArrowRight size={18} />
                </motion.button>

                <div className="flex items-center gap-4 bg-[#1A1A1A] border border-white/5 rounded-2xl p-2 pr-6 w-full sm:w-auto">
                  <div className="flex -space-x-3 pl-2">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-10 h-10 rounded-full border-2 border-[#1A1A1A] object-cover" alt="User" />
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" className="w-10 h-10 rounded-full border-2 border-[#1A1A1A] object-cover" alt="User" />
                    <img src="https://randomuser.me/api/portraits/men/68.jpg" className="w-10 h-10 rounded-full border-2 border-[#1A1A1A] object-cover" alt="User" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-black text-xs">+150 Parceiros</span>
                    <span className="text-white/40 text-[8px] font-bold uppercase tracking-widest">Ativos no Brasil</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Right Column: Image Carousel */}
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative h-[500px] lg:h-[650px] w-full">
              <HeroCarousel />
            </motion.div>

          </div>
        </div>
      </section>

      {/* AS PRÓXIMAS SEÇÕES SERÃO INSERIDAS AQUI */}

    </div>
  );
}
