'use client';

import React from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';
import Footer from '@/components/Footer';

export default function NewsletterVariations() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Laboratório de Conversão: Newsletter + Footer
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Variações de Design e Copy integradas com o Footer tradicional.
          </p>
        </div>
      </div>

      <div className="space-y-24">
        
        {/* Opção 01: Texto 01 + Layout 02 */}
        <div>
          <div className="mb-6 text-center max-w-7xl mx-auto px-4">
            <h2 className="text-xl font-bold text-gray-500 uppercase tracking-widest">Opção 01</h2>
            <p className="text-gray-400">Texto 01 (Desconto) + Layout 02 (Duas Colunas)</p>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
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
                      <label htmlFor="email1" className="block text-sm font-medium text-gray-700 mb-1">E-mail de acesso</label>
                      <input 
                        id="email1"
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
          <Footer />
        </div>

        <hr className="border-gray-300 max-w-7xl mx-auto" />

        {/* Opção 02: Texto 01 + Layout 01 */}
        <div>
          <div className="mb-6 text-center max-w-7xl mx-auto px-4">
            <h2 className="text-xl font-bold text-gray-500 uppercase tracking-widest">Opção 02</h2>
            <p className="text-gray-400">Texto 01 (Desconto) + Layout 01 (Centrado)</p>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#F4CDD4]/30 text-black mb-6">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Desconto na primeira compra
              </h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
                Inscreva-se agora e receba um cupom de 10% OFF + acesso antecipado a lançamentos.
              </p>
              <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Seu melhor e-mail" 
                  required
                  className="flex-1 px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F4CDD4] focus:border-transparent transition-all"
                />
                <button 
                  type="submit"
                  className="px-6 py-3 rounded-lg bg-[#F4CDD4] text-black font-semibold hover:bg-[#e8b5be] transition-colors flex items-center justify-center gap-2"
                >
                  Liberar meu Cupom
                </button>
              </form>
            </section>
          </div>
          <Footer />
        </div>

        <hr className="border-gray-300 max-w-7xl mx-auto" />

        {/* Opção 03: Texto 02 + Layout 02 */}
        <div>
          <div className="mb-6 text-center max-w-7xl mx-auto px-4">
            <h2 className="text-xl font-bold text-gray-500 uppercase tracking-widest">Opção 03</h2>
            <p className="text-gray-400">Texto 02 (Cashback) + Layout 02 (Duas Colunas)</p>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 p-8 sm:p-12 bg-[#F4CDD4]/20 flex flex-col justify-center">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    Receba Cashback em todas as compras
                  </h2>
                  <p className="text-gray-700 text-lg">
                    Ganhe 5% de volta em cada pedido e ofertas exclusivas direto no e-mail.
                  </p>
                </div>
                <div className="md:w-1/2 p-8 sm:p-12 flex items-center">
                  <form className="w-full space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div>
                      <label htmlFor="email3" className="block text-sm font-medium text-gray-700 mb-1">E-mail de acesso</label>
                      <input 
                        id="email3"
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
                      Garantir meu Cashback <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              </div>
            </section>
          </div>
          <Footer />
        </div>

        <hr className="border-gray-300 max-w-7xl mx-auto" />

        {/* Opção 04: Texto 02 + Layout 01 */}
        <div>
          <div className="mb-6 text-center max-w-7xl mx-auto px-4">
            <h2 className="text-xl font-bold text-gray-500 uppercase tracking-widest">Opção 04</h2>
            <p className="text-gray-400">Texto 02 (Cashback) + Layout 01 (Centrado)</p>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#F4CDD4]/30 text-black mb-6">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Receba Cashback em todas as compras
              </h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
                Ganhe 5% de volta em cada pedido e ofertas exclusivas direto no e-mail.
              </p>
              <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Seu melhor e-mail" 
                  required
                  className="flex-1 px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F4CDD4] focus:border-transparent transition-all"
                />
                <button 
                  type="submit"
                  className="px-6 py-3 rounded-lg bg-[#F4CDD4] text-black font-semibold hover:bg-[#e8b5be] transition-colors flex items-center justify-center gap-2"
                >
                  Garantir meu Cashback
                </button>
              </form>
            </section>
          </div>
          <Footer />
        </div>

      </div>
    </div>
  );
}
