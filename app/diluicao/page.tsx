'use client';

import React, { useState, useEffect } from 'react';
import { Beaker, Droplets, ShieldAlert, AlertTriangle, CheckCircle2, Info, ArrowRight, MessageCircle, Package, FlaskConical } from 'lucide-react';

export default function DilutionGuide() {
  const [proportion, setProportion] = useState('1:10');
  const [customProduct, setCustomProduct] = useState(1);
  const [customWater, setCustomWater] = useState(10);
  const [finalVolume, setFinalVolume] = useState(500);

  const [productMl, setProductMl] = useState(0);
  const [waterMl, setWaterMl] = useState(0);
  const [totalParts, setTotalParts] = useState(11);
  const [productParts, setProductParts] = useState(1);
  const [waterParts, setWaterParts] = useState(10);

  useEffect(() => {
    let pParts = 1;
    let wParts = 10;

    if (proportion === 'custom') {
      pParts = customProduct;
      wParts = customWater;
    } else {
      const parts = proportion.split(':');
      pParts = parseInt(parts[0]);
      wParts = parseInt(parts[1]);
    }

    const tParts = pParts + wParts;
    setProductParts(pParts);
    setWaterParts(wParts);
    setTotalParts(tParts);

    if (tParts > 0 && finalVolume > 0) {
      const partVolume = finalVolume / tParts;
      setProductMl(Math.round(partVolume * pParts));
      setWaterMl(Math.round(partVolume * wParts));
    } else {
      setProductMl(0);
      setWaterMl(0);
    }
  }, [proportion, customProduct, customWater, finalVolume]);

  return (
    <div className="min-h-screen bg-white text-[#0D0C0D] font-sans selection:bg-[#F4CDD4] selection:text-[#0D0C0D]">
      {/* Navigation Bar Simulation */}
      <nav className="border-b border-gray-100 py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="flex items-center gap-2">
          <div className="font-extrabold text-2xl tracking-tighter text-[#0D0C0D]">Bubbles</div>
        </div>
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#" className="hover:text-[#F4CDD4] transition-colors">Produtos</a>
          <a href="#" className="hover:text-[#F4CDD4] transition-colors">Linhas</a>
          <a href="#" className="hover:text-[#F4CDD4] transition-colors">Comunidade VIP</a>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 md:px-12 py-16 space-y-24">
        
        {/* Hero Section */}
        <section className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4CDD4]/30 text-[#0D0C0D] text-sm font-semibold mb-4">
            <FlaskConical className="w-4 h-4" />
            <span>Guia Profissional</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-[#0D0C0D]">
            Máximo Rendimento com Segurança Total
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            A diluição inteligente da Bubbles transforma galões em centenas de banhos lucrativos. Aprenda a preparar seus produtos garantindo a saúde dos pets e o lucro do seu banho e tosa.
          </p>
        </section>

        {/* A Ciência da Diluição Correta */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">A Ciência da Diluição Correta</h2>
            <p className="text-gray-600 leading-relaxed">
              Diluir produtos cosméticos não é apenas misturar com água, é uma <strong>ativação química</strong>. Seguir a proporção exata é fundamental para o resultado perfeito.
            </p>
            
            <div className="space-y-4">
              <div className="bg-red-50 border border-red-100 p-5 rounded-2xl flex gap-4 items-start">
                <AlertTriangle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-red-800 mb-1">Diluir MENOS que o indicado:</strong>
                  <p className="text-sm text-red-700 leading-relaxed">
                    Causa desperdício de produto e <strong>pode irritar a pele do pet</strong> (coceiras e vermelhidão) devido ao excesso de concentração de ativos que não foram ativados corretamente pela água.
                  </p>
                </div>
              </div>
              
              <div className="bg-orange-50 border border-orange-100 p-5 rounded-2xl flex gap-4 items-start">
                <Info className="w-6 h-6 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-orange-800 mb-1">Diluir MAIS que o indicado:</strong>
                  <p className="text-sm text-orange-700 leading-relaxed">
                    Reduz drasticamente a eficácia da limpeza, o poder de hidratação e a fixação do perfume no pelo do animal.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 h-full flex flex-col justify-center border border-gray-100">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-green-500" />
              A Regra de Ouro (Passo a Passo)
            </h3>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#F4CDD4] text-[#0D0C0D] font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  1
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-lg mb-1 flex items-center gap-2">
                    <Droplets className="w-5 h-5 text-blue-500" />
                    Água Primeiro
                  </h4>
                  <p className="text-sm text-gray-600">Coloque a água (temperatura ambiente) no frasco <strong>antes</strong> do produto. Isso evita a formação de espuma excessiva e garante a medida real.</p>
                </div>
              </div>
              
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#0D0C0D] text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  2
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-lg mb-1 flex items-center gap-2">
                    <Beaker className="w-5 h-5 text-[#F4CDD4]" />
                    Adicione o Produto
                  </h4>
                  <p className="text-sm text-gray-600">Use a proporção indicada no rótulo da sua linha (Ego / Pro ou Basiq) e misture suavemente.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Biossegurança */}
        <section className="bg-[#0D0C0D] text-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F4CDD4]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-sm font-semibold mb-6 border border-red-500/30">
              <ShieldAlert className="w-4 h-4" />
              <span>Crítico: Protocolo de Higiene e Biossegurança</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">A Regra das 24 Horas</h2>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              É uma boa prática profissional <strong>diluir apenas o que será usado no dia</strong>.
            </p>
            
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <p className="text-gray-300 leading-relaxed">
                Após diluído em água, a concentração do sistema conservante do produto é reduzida. O descarte de sobras após 24 horas é <strong>essencial</strong> para evitar a proliferação de bactérias (como a <em>Pseudomonas</em>) e fungos na mistura, que podem causar infecções graves na pele dos pets.
              </p>
            </div>
          </div>
        </section>

        {/* Guia Rápido & Calculadora */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Calculadora de Diluição</h2>
            <p className="text-gray-600">Descubra exatamente quanto de água e produto você precisa para o volume desejado.</p>
          </div>

          <div className="grid md:grid-cols-12 gap-8">
            {/* Guia Rápido */}
            <div className="md:col-span-4 space-y-4">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 h-full">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Info className="w-5 h-5 text-[#F4CDD4]" />
                  Guia Rápido
                </h3>
                <ul className="space-y-4">
                  <li className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <strong className="block text-[#0D0C0D] text-lg">Ego / Pro</strong>
                    <span className="text-sm text-gray-500 font-medium">Proporção 1:10</span>
                    <p className="text-sm text-gray-600 mt-1">1 parte de produto para 10 partes de água.</p>
                  </li>
                  <li className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <strong className="block text-[#0D0C0D] text-lg">Basiq e Sensorial</strong>
                    <span className="text-sm text-gray-500 font-medium">Proporção 1:4</span>
                    <p className="text-sm text-gray-600 mt-1">1 parte de produto para 4 partes de água.</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Calculadora Interativa */}
            <div className="md:col-span-8 bg-white border border-gray-200 rounded-3xl p-6 md:p-8 shadow-lg shadow-gray-100/50">
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700">Proporção (Produto : Água)</label>
                  <select 
                    value={proportion}
                    onChange={(e) => setProportion(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[#0D0C0D] font-medium focus:outline-none focus:ring-2 focus:ring-[#F4CDD4] transition-all"
                  >
                    <option value="1:1">1:1 (Uso Direto / Leve Diluição)</option>
                    <option value="1:4">1:4 (Basiq / Sensorial)</option>
                    <option value="1:5">1:5</option>
                    <option value="1:10">1:10 (Ego / Pro)</option>
                    <option value="custom">Customizado</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700">Volume Final Desejado (ml)</label>
                  <div className="relative">
                    <input 
                      type="number" 
                      min="10"
                      step="10"
                      value={finalVolume}
                      onChange={(e) => setFinalVolume(parseInt(e.target.value) || 0)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[#0D0C0D] font-bold focus:outline-none focus:ring-2 focus:ring-[#F4CDD4] transition-all"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">ml</span>
                  </div>
                </div>
              </div>

              {proportion === 'custom' && (
                <div className="grid grid-cols-2 gap-4 mb-8 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1">Partes de Produto</label>
                    <input 
                      type="number" min="1" value={customProduct} onChange={(e) => setCustomProduct(parseInt(e.target.value) || 1)}
                      className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1">Partes de Água</label>
                    <input 
                      type="number" min="1" value={customWater} onChange={(e) => setCustomWater(parseInt(e.target.value) || 1)}
                      className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm"
                    />
                  </div>
                </div>
              )}

              {/* Resultados */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white p-4 rounded-xl border border-[#F4CDD4]/50 shadow-sm text-center">
                    <span className="block text-sm font-bold text-gray-500 mb-1">Produto Concentrado</span>
                    <strong className="text-3xl font-black text-[#0D0C0D]">{productMl} <span className="text-lg text-gray-400 font-medium">ml</span></strong>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-blue-200 shadow-sm text-center">
                    <span className="block text-sm font-bold text-gray-500 mb-1">Água</span>
                    <strong className="text-3xl font-black text-blue-600">{waterMl} <span className="text-lg text-blue-300 font-medium">ml</span></strong>
                  </div>
                </div>

                {/* Ilustração Visual */}
                <div className="pt-6 border-t border-gray-200">
                  <p className="text-center text-sm font-bold text-gray-500 mb-4 uppercase tracking-wider">Entendendo as Partes</p>
                  <div className="flex flex-wrap items-center justify-center gap-y-4 gap-x-2">
                    {/* Produto Icons */}
                    <div className="flex flex-wrap justify-center gap-1">
                      {Array.from({ length: Math.min(productParts, 20) }).map((_, i) => (
                        <div key={`p-${i}`} className="w-8 h-10 bg-[#F4CDD4]/30 border-2 border-[#F4CDD4] rounded-b-lg rounded-t-sm flex items-end justify-center pb-1 relative group">
                          <div className="w-full h-1/2 bg-[#F4CDD4]/50 rounded-b-sm"></div>
                          {/* Tooltip */}
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition-opacity">
                            1 parte produto
                          </div>
                        </div>
                      ))}
                      {productParts > 20 && <span className="text-gray-400 font-bold self-center ml-1">+{productParts - 20}</span>}
                    </div>
                    
                    <span className="text-2xl font-bold text-gray-300 mx-2">+</span>
                    
                    {/* Água Icons */}
                    <div className="flex flex-wrap justify-center gap-1">
                      {Array.from({ length: Math.min(waterParts, 50) }).map((_, i) => (
                        <div key={`w-${i}`} className="w-8 h-10 bg-blue-50 border-2 border-blue-200 rounded-b-lg rounded-t-sm flex items-end justify-center pb-1 relative group">
                          <div className="w-full h-3/4 bg-blue-200/50 rounded-b-sm"></div>
                          {/* Tooltip */}
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition-opacity">
                            1 parte água
                          </div>
                        </div>
                      ))}
                      {waterParts > 50 && <span className="text-gray-400 font-bold self-center ml-1">+{waterParts - 50}</span>}
                    </div>

                    <span className="text-2xl font-bold text-gray-300 mx-2">=</span>

                    <div className="flex flex-col items-center justify-center bg-white px-4 py-2 rounded-xl border border-gray-200 shadow-sm">
                      <span className="text-2xl font-black text-[#0D0C0D]">{totalParts}</span>
                      <span className="text-[10px] font-bold text-gray-500 uppercase">Partes Totais</span>
                    </div>
                  </div>
                  <p className="text-center text-xs text-gray-400 mt-4">
                    Cada "copinho" representa uma parte igual. O volume final é dividido pelo total de partes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Comercial e Contato */}
        <section className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-10">
            <h2 className="text-3xl font-bold tracking-tight">Estoque Inteligente: Linha Ego / Pro 5L</h2>
            <p className="text-gray-600">Produtos de alta performance com diluição 1:10 para o máximo rendimento do seu negócio.</p>
          </div>

          {/* Placeholder for Shopify Liquid */}
          <div className="bg-white border-2 border-dashed border-gray-200 rounded-2xl p-12 text-center mb-12">
            <Package className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 font-mono text-sm">
              {`{% section 'featured-collection' %}`}
              <br/>
              <span className="text-xs text-gray-400 mt-2 block">(Espaço reservado para inserção do código Liquid no Shopify exibindo os galões de 5L)</span>
            </p>
          </div>

          <div className="bg-[#F4CDD4]/20 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-[#F4CDD4]/30">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                <MessageCircle className="w-6 h-6 text-[#0D0C0D]" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Dúvida na mistura?</h4>
                <p className="text-gray-600 text-sm">Nossa equipe técnica está pronta para ajudar você.</p>
              </div>
            </div>
            <a 
              href="https://wa.me/5514996312932?text=Olá,%20tenho%20uma%20dúvida%20sobre%20diluição" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-[#0D0C0D] text-white font-bold px-8 py-4 rounded-xl hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Fale com nossa técnica
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}
