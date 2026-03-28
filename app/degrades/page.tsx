"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: "Posso usar em filhotes?",
    a: "Não recomendamos para filhotes com menos de 4 semanas de vida. Para filhotes entre 4 semanas e 3 meses, recomendamos consultar seu médico veterinário antes do uso."
  },
  {
    q: "Funciona para gatos?",
    a: "Sim! O Pineapple Essential é indicado para cães e gatos de todas as raças. A fórmula suave e hipoalergênica é segura para felinos, desde que não haja problemas dermatológicos ativos."
  },
  {
    q: "Posso guardar o produto já diluído?",
    a: "Não. Após a diluição, o produto deve ser usado em até 24 horas. Sempre lave o frasco diluidor antes de preparar uma nova quantidade. O produto concentrado (não diluído) tem validade normal de 24 meses."
  },
  {
    q: "Qual a diferença entre a linha Essential e a linha Basiq?",
    a: "A linha Essential combina Deoplex Clear com Extrato de Frutas Tropicais, oferecendo hidratação intensa e ação antioxidante superior. A linha Basiq usa tecnologia Sniff Tech com Booster de Espuma, com foco na limpeza profunda. Ambas são neutralizadoras de odores — a Essential tem ação hidratante premium."
  },
  {
    q: "Como fazer a diluição correta dos produtos Bubbles?",
    a: "Para garantir a performance técnica, utilize água filtrada e prepare apenas a quantidade que será usada no dia de trabalho. A proporção ideal varia por linha (ex: 1:4 ou 1:10), verifique o rótulo ou nosso Guia de Diluição."
  },
  {
    q: "Qual o rendimento médio da Linha Pro (1:10) por banho?",
    a: "Com a diluição máxima de 1:10, um Produto rende até 55 litros de produto pronto. Em média, isso reduz seu custo por banho significativamente, variando conforme a pelagem e sujidade do pet. Um galão rende, em média, 500 banhos."
  },
  {
    q: "Por que é obrigatório usar o Frasco Diluidor Bubbles?",
    a: "Ele não é apenas um frasco, é uma ferramenta de precisão técnica. Ele garante a dosagem exata de água e produto, evitando desperdício de ativos e assegurando que o shampoo atinja sua eficácia química total."
  }
];

const FaqSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-3 relative z-10 py-10 px-4">
      <h3 className="text-center text-[24px] md:text-[28px] font-[800] text-gray-900 mb-8">
        Perguntas frequentes
      </h3>
      {faqs.map((faq, idx) => (
        <div key={idx} className="border border-gray-200/60 rounded-xl overflow-hidden bg-white/80 backdrop-blur-sm shadow-sm">
          <button 
            onClick={() => toggleFaq(idx)}
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/90 transition-colors text-left"
          >
            <span className="font-bold text-[15px] text-gray-900 pr-4">
              {faq.q}
            </span>
            {openFaq === idx ? <ChevronUp className="w-5 h-5 text-[#F48FA1] flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />}
          </button>
          {openFaq === idx && (
            <div className="px-6 pb-5 pt-1 text-[14px] text-gray-600 leading-relaxed border-t border-gray-100/50">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default function DegradesPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans pb-20">
      <div className="max-w-5xl mx-auto px-6 pt-12">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Voltar para o Hub
        </Link>

        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Design System: Degradês & FAQs
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Sugestões de fundos com gradientes baseados nas cores #F48FA1 e #F4CDD4. Cada exemplo abaixo demonstra como a seção de FAQ se comportaria na prática com o respectivo fundo.
          </p>
        </header>

        <div className="space-y-24">
          
          {/* Degradê 01 */}
          <section>
            <div className="mb-4">
              <h2 className="text-2xl font-bold">01. Rosé Iluminado (Radial)</h2>
              <p className="text-gray-600">Radial com centro claro, expandindo para as cores solicitadas.</p>
              <div className="inline-block mt-2 bg-gray-100 px-3 py-1 rounded-md">
                <code className="text-sm font-mono text-gray-800">bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-[#F4CDD4] to-[#F48FA1]</code>
              </div>
            </div>
            <div className="relative w-full rounded-3xl border border-gray-100 shadow-sm overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-[#F4CDD4] to-[#F48FA1]">
              <FaqSection />
            </div>
          </section>

          {/* Degradê 02 */}
          <section>
            <div className="mb-4">
              <h2 className="text-2xl font-bold">02. Rosé Mesh Gradient (Complexo)</h2>
              <p className="text-gray-600">Mesh gradient utilizando as cores solicitadas e branco.</p>
              <div className="inline-block mt-2 bg-gray-100 px-3 py-1 rounded-md">
                <code className="text-sm font-mono text-gray-800">Feito com divs absolutas + blur-3xl com #F48FA1 e #F4CDD4</code>
              </div>
            </div>
            <div className="relative w-full rounded-3xl border border-gray-100 shadow-sm overflow-hidden bg-white">
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-3xl">
                <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-[#F48FA1]/40 blur-3xl mix-blend-multiply"></div>
                <div className="absolute top-[10%] -right-[10%] w-[60%] h-[60%] rounded-full bg-[#F4CDD4]/60 blur-3xl mix-blend-multiply"></div>
                <div className="absolute -bottom-[20%] left-[20%] w-[80%] h-[80%] rounded-full bg-[#F48FA1]/30 blur-3xl mix-blend-multiply"></div>
              </div>
              <FaqSection />
            </div>
          </section>

          {/* Degradê 03 */}
          <section>
            <div className="mb-4">
              <h2 className="text-2xl font-bold">03. Rosé Horizontal (Linear)</h2>
              <p className="text-gray-600">Transição horizontal suave entre as duas cores.</p>
              <div className="inline-block mt-2 bg-gray-100 px-3 py-1 rounded-md">
                <code className="text-sm font-mono text-gray-800">bg-gradient-to-r from-[#F48FA1] to-[#F4CDD4]</code>
              </div>
            </div>
            <div className="relative w-full rounded-3xl border border-gray-100 shadow-sm overflow-hidden bg-gradient-to-r from-[#F48FA1] to-[#F4CDD4]">
              <FaqSection />
            </div>
          </section>

          {/* Degradê 04 */}
          <section>
            <div className="mb-4">
              <h2 className="text-2xl font-bold">04. Rosé Diagonal Invertida (Linear)</h2>
              <p className="text-gray-600">Transição do canto inferior esquerdo para o superior direito.</p>
              <div className="inline-block mt-2 bg-gray-100 px-3 py-1 rounded-md">
                <code className="text-sm font-mono text-gray-800">bg-gradient-to-tr from-[#F4CDD4] to-[#F48FA1]</code>
              </div>
            </div>
            <div className="relative w-full rounded-3xl border border-gray-100 shadow-sm overflow-hidden bg-gradient-to-tr from-[#F4CDD4] to-[#F48FA1]">
              <FaqSection />
            </div>
          </section>

          {/* Degradê 05 */}
          <section>
            <div className="mb-4">
              <h2 className="text-2xl font-bold">05. Rosé Conic (Cônico)</h2>
              <p className="text-gray-600">Gradiente cônico partindo do centro superior, criando um efeito de luz.</p>
              <div className="inline-block mt-2 bg-gray-100 px-3 py-1 rounded-md">
                <code className="text-sm font-mono text-gray-800">bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-white via-[#F4CDD4] to-[#F48FA1]</code>
              </div>
            </div>
            <div className="relative w-full rounded-3xl border border-gray-100 shadow-sm overflow-hidden bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-white via-[#F4CDD4] to-[#F48FA1]">
              <FaqSection />
            </div>
          </section>

          {/* Degradê 06 */}
          <section>
            <div className="mb-4">
              <h2 className="text-2xl font-bold">06. Rosé Soft Blend (Mistura Suave)</h2>
              <p className="text-gray-600">Mistura bem suave com branco no meio para dar respiro ao conteúdo.</p>
              <div className="inline-block mt-2 bg-gray-100 px-3 py-1 rounded-md">
                <code className="text-sm font-mono text-gray-800">bg-gradient-to-br from-[#F48FA1] via-white to-[#F4CDD4]</code>
              </div>
            </div>
            <div className="relative w-full rounded-3xl border border-gray-100 shadow-sm overflow-hidden bg-gradient-to-br from-[#F48FA1] via-white to-[#F4CDD4]">
              <FaqSection />
            </div>
          </section>

          {/* Degradê 07 */}
          <section>
            <div className="mb-4">
              <h2 className="text-2xl font-bold">07. Rosé Triplo (Três Paradas)</h2>
              <p className="text-gray-600">Gradiente linear com três paradas de cor, alternando entre os tons.</p>
              <div className="inline-block mt-2 bg-gray-100 px-3 py-1 rounded-md">
                <code className="text-sm font-mono text-gray-800">bg-gradient-to-b from-[#F4CDD4] via-[#F48FA1] to-[#F4CDD4]</code>
              </div>
            </div>
            <div className="relative w-full rounded-3xl border border-gray-100 shadow-sm overflow-hidden bg-gradient-to-b from-[#F4CDD4] via-[#F48FA1] to-[#F4CDD4]">
              <FaqSection />
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
