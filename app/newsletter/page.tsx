'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function NewsletterPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-grow py-12 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8 sm:p-12 bg-[#F4CDD4]/20 flex flex-col justify-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Desconto na primeira compra
                </h2>
                <p className="text-gray-700 text-lg">
                  Inscreva-se agora e receba um cupom de 10% OFF + acesso antecipado a lançamentos.
                </p>
              </div>
              <div className="md:w-1/2 p-8 sm:p-12 flex items-center">
                <form className="w-full space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail de acesso</label>
                    <input 
                      id="email"
                      type="email" 
                      placeholder="exemplo@estetica.com" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F4CDD4] transition-all"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-3 rounded-lg bg-black text-white font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                  >
                    Liberar meu Cupom <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
