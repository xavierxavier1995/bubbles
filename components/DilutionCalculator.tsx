'use client';

import React, { useState } from 'react';
import { Info } from 'lucide-react';

export default function DilutionCalculator() {
  const [proportion, setProportion] = useState('1:10');
  const [customProduct, setCustomProduct] = useState(1);
  const [customWater, setCustomWater] = useState(10);
  const [finalVolume, setFinalVolume] = useState(500);

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
  const productParts = pParts;
  const waterParts = wParts;
  const totalParts = tParts;

  let productMl = 0;
  let waterMl = 0;

  if (tParts > 0 && finalVolume > 0) {
    const partVolume = finalVolume / tParts;
    productMl = Math.round(partVolume * pParts);
    waterMl = Math.round(partVolume * wParts);
  }

  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8 shadow-lg shadow-gray-100/50">
      <div className="grid md:grid-cols-12 gap-8">
        {/* Calculadora Interativa (Compacta) */}
        <div className="md:col-span-7 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700">Proporção</label>
              <select 
                value={proportion}
                onChange={(e) => setProportion(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[#0D0C0D] font-medium focus:outline-none focus:ring-2 focus:ring-[#F4CDD4] transition-all"
              >
                <option value="1:1">1:1 (Uso Direto)</option>
                <option value="1:4">1:4 (Basiq / Sensorial / Essential)</option>
                <option value="1:5">1:5</option>
                <option value="1:10">1:10 (Ego / Pro)</option>
                <option value="custom">Customizado</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700">Volume Final (ml)</label>
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
            <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
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

          {/* Alerta Sticky */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-start gap-3">
            <Info className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800 font-medium">
              <strong>⚠️ IMPORTANTE:</strong> Sempre coloque a água primeiro para evitar espuma excessiva.
            </p>
          </div>

          {/* Resultados */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-xl border border-[#F4CDD4]/50 shadow-sm text-center">
              <span className="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wider">Produto</span>
              <strong className="text-3xl font-black text-[#0D0C0D]">{productMl} <span className="text-sm text-gray-400 font-medium">ml</span></strong>
            </div>
            <div className="bg-white p-4 rounded-xl border border-blue-200 shadow-sm text-center">
              <span className="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wider">Água</span>
              <strong className="text-3xl font-black text-blue-600">{waterMl} <span className="text-sm text-blue-300 font-medium">ml</span></strong>
            </div>
          </div>
        </div>

        {/* Ilustração Visual */}
        <div className="md:col-span-5 bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col justify-center">
          <p className="text-center text-xs font-bold text-gray-500 mb-6 uppercase tracking-wider">Legenda Visual</p>
          
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-4 w-full">
              <div className="w-10 h-14 bg-[#F4CDD4]/30 border-2 border-[#F4CDD4] rounded-b-xl rounded-t-sm flex items-end justify-center pb-1 shrink-0">
                <div className="w-full h-3/4 bg-[#F4CDD4]/80 rounded-b-md"></div>
              </div>
              <div className="text-sm text-gray-600">
                <strong className="block text-[#0D0C0D]">1 Frasco Diluidor</strong>
                <span className="text-xs text-gray-500">(500ml)</span>
              </div>
            </div>

            <div className="w-full h-px bg-gray-200"></div>

            <div className="flex items-center gap-4 w-full">
              <div className="flex flex-wrap gap-1 shrink-0 max-w-[120px]">
                {Array.from({ length: Math.min(waterParts, 10) }).map((_, i) => (
                  <div key={`w-${i}`} className="w-6 h-8 bg-blue-50 border border-blue-200 rounded-b-md rounded-t-sm flex items-end justify-center pb-0.5">
                    <div className="w-full h-3/4 bg-blue-300/50 rounded-b-sm"></div>
                  </div>
                ))}
                {waterParts > 10 && <span className="text-xs font-bold text-gray-400 self-center">+{waterParts - 10}</span>}
              </div>
              <div className="text-sm text-gray-600">
                <strong className="block text-[#0D0C0D]">{waterParts} copo{waterParts !== 1 ? 's' : ''} de água</strong>
                <span className="text-xs text-gray-500">(500ml cada)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
