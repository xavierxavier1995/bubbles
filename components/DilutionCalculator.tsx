'use client';

import React, { useState, useEffect } from 'react';
import { Info } from 'lucide-react';

export default function DilutionCalculator() {
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
    <div className="grid md:grid-cols-12 gap-8">
      {/* Guia Rápido */}
      <div className="md:col-span-4 space-y-4">
        <div className="bg-gray-50 rounded-3xl p-6 md:p-8 border border-gray-100 h-full">
          <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
            <Info className="w-6 h-6 text-[#F4CDD4]" />
            Guia Rápido
          </h3>
          <ul className="space-y-4">
            <li className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
              <strong className="block text-[#0D0C0D] text-lg">Ego / Pro</strong>
              <span className="text-sm text-gray-500 font-medium">Proporção 1:10</span>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">1 parte de produto para 10 partes de água.</p>
            </li>
            <li className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
              <strong className="block text-[#0D0C0D] text-lg">Basiq e Sensorial</strong>
              <span className="text-sm text-gray-500 font-medium">Proporção 1:4</span>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">1 parte de produto para 4 partes de água.</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Calculadora Interativa */}
      <div className="md:col-span-8 bg-white border border-gray-200 rounded-3xl p-6 md:p-10 shadow-lg shadow-gray-100/50">
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
          <div className="grid grid-cols-2 gap-4 mb-8 p-5 bg-gray-50 rounded-2xl border border-gray-100">
            <div>
              <label className="block text-xs font-bold text-gray-500 mb-2">Partes de Produto</label>
              <input 
                type="number" min="1" value={customProduct} onChange={(e) => setCustomProduct(parseInt(e.target.value) || 1)}
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#F4CDD4]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 mb-2">Partes de Água</label>
              <input 
                type="number" min="1" value={customWater} onChange={(e) => setCustomWater(parseInt(e.target.value) || 1)}
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#F4CDD4]"
              />
            </div>
          </div>
        )}

        {/* Resultados */}
        <div className="bg-gray-50 rounded-3xl p-6 md:p-8 border border-gray-100">
          <div className="grid grid-cols-2 gap-4 md:gap-6 mb-8">
            <div className="bg-white p-6 rounded-2xl border border-[#F4CDD4]/50 shadow-sm text-center">
              <span className="block text-sm font-bold text-gray-500 mb-2">Produto Concentrado</span>
              <strong className="text-4xl font-black text-[#0D0C0D]">{productMl} <span className="text-xl text-gray-400 font-medium">ml</span></strong>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-blue-200 shadow-sm text-center">
              <span className="block text-sm font-bold text-gray-500 mb-2">Água</span>
              <strong className="text-4xl font-black text-blue-600">{waterMl} <span className="text-xl text-blue-300 font-medium">ml</span></strong>
            </div>
          </div>

          {/* Ilustração Visual */}
          <div className="pt-8 border-t border-gray-200">
            <p className="text-center text-sm font-bold text-gray-500 mb-6 uppercase tracking-wider">Entendendo as Partes</p>
            <div className="flex flex-wrap items-center justify-center gap-y-6 gap-x-3">
              {/* Produto Icons */}
              <div className="flex flex-wrap justify-center gap-1.5">
                {Array.from({ length: Math.min(productParts, 20) }).map((_, i) => (
                  <div key={`p-${i}`} className="w-8 h-12 bg-[#F4CDD4]/30 border-2 border-[#F4CDD4] rounded-b-xl rounded-t-sm flex items-end justify-center pb-1 relative group">
                    <div className="w-full h-3/4 bg-[#F4CDD4]/80 rounded-b-md"></div>
                    {/* Tooltip */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition-opacity z-10 shadow-lg">
                      1 parte produto
                    </div>
                  </div>
                ))}
                {productParts > 20 && <span className="text-gray-400 font-bold self-center ml-2">+{productParts - 20}</span>}
              </div>
              
              <span className="text-3xl font-black text-gray-300 mx-2">+</span>
              
              {/* Água Icons */}
              <div className="flex flex-wrap justify-center gap-1.5">
                {Array.from({ length: Math.min(waterParts, 50) }).map((_, i) => (
                  <div key={`w-${i}`} className="w-8 h-12 bg-blue-50 border-2 border-blue-200 rounded-b-xl rounded-t-sm flex items-end justify-center pb-1 relative group">
                    <div className="w-full h-3/4 bg-blue-300/50 rounded-b-md"></div>
                    {/* Tooltip */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition-opacity z-10 shadow-lg">
                      1 parte água
                    </div>
                  </div>
                ))}
                {waterParts > 50 && <span className="text-gray-400 font-bold self-center ml-2">+{waterParts - 50}</span>}
              </div>

              <span className="text-3xl font-black text-gray-300 mx-2">=</span>

              <div className="flex flex-col items-center justify-center bg-white px-6 py-3 rounded-2xl border border-gray-200 shadow-sm">
                <span className="text-3xl font-black text-[#0D0C0D]">{totalParts}</span>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-1">Partes Totais</span>
              </div>
            </div>
            <p className="text-center text-sm text-gray-500 mt-8 bg-white p-4 rounded-xl border border-gray-100">
              Cada "copinho" representa uma parte igual. O volume final é dividido pelo total de partes para descobrir quantos ml tem cada parte.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
