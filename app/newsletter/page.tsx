'use client';

import React from 'react';
import { Mail, ArrowRight, Sparkles, Star, Bell, TrendingUp, ShieldCheck, Clock, BarChart, Heart } from 'lucide-react';
import SupportBanner from '@/components/SupportBanner';

export default function NewsletterVariations() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Laboratório de Conversão: Newsletter
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            10 Variações de Design e Copy para a nova captura de leads da Bubbles.
          </p>
        </div>

        <div className="space-y-16">
          
          {/* Opção 1: Lucro/Cashback - Layout Centrado Minimalista */}
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

          <hr className="border-gray-200" />

          {/* Opção 2: Autoridade Técnica - Layout Dark Mode */}
          <section className="bg-black rounded-2xl shadow-lg p-8 sm:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <Star className="w-8 h-8 text-[#F4CDD4] mx-auto mb-6" />
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Evolua sua Estética Pet
              </h2>
              <p className="text-gray-400 mb-8 text-lg">
                Conteúdos técnicos de especialistas e condições especiais para renovar o estoque.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 justify-center" onSubmit={(e) => e.preventDefault()}>
                <div className="relative max-w-sm w-full">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input 
                    type="email" 
                    placeholder="Digite seu e-mail" 
                    required
                    className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-900 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F4CDD4] transition-all"
                  />
                </div>
                <button 
                  type="submit"
                  className="px-8 py-3 rounded-lg bg-[#F4CDD4] text-black font-semibold hover:bg-white transition-colors"
                >
                  Acessar Dicas VIP
                </button>
              </form>
            </div>
          </section>

          <hr className="border-gray-200" />

          {/* Opção 3: Cupom de Entrada - Layout Duas Colunas (Side-by-side) */}
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
                    Liberar meu Cupom <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </section>

          <hr className="border-gray-200" />

          {/* Opção 4: Clube Exclusivo - Layout Full Width Banner Rosa */}
          <section className="bg-[#F4CDD4] rounded-2xl shadow-sm p-8 sm:p-12 text-center">
            <ShieldCheck className="w-10 h-10 text-black mx-auto mb-6" />
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
              Faça parte do Clube Bubbles
            </h2>
            <p className="text-black/80 mb-8 max-w-2xl mx-auto text-lg">
              Promoções restritas a profissionais cadastrados e benefícios acumulativos.
            </p>
            <form className="max-w-lg mx-auto relative" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Insira seu e-mail profissional" 
                required
                className="w-full pl-5 pr-40 py-4 rounded-full border-2 border-transparent focus:outline-none focus:border-black shadow-sm transition-all"
              />
              <button 
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 px-6 rounded-full bg-black text-white font-semibold hover:bg-gray-800 transition-colors"
              >
                Entrar para o Clube
              </button>
            </form>
          </section>

          <hr className="border-gray-200" />

          {/* Opção 5: Alerta de Estoque - Layout com Ícone Lateral */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center">
                <Bell className="w-8 h-8 text-red-500" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Estoque cheio, lucro garantido
                </h2>
                <p className="text-gray-600 text-lg mb-6 sm:mb-0">
                  Receba avisos sobre reposições e ofertas relâmpago antes de todo mundo.
                </p>
              </div>
              <div className="w-full sm:w-auto flex-shrink-0">
                <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                  <input 
                    type="email" 
                    placeholder="E-mail para alertas" 
                    required
                    className="w-full sm:w-64 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-400 transition-all"
                  />
                  <button 
                    type="submit"
                    className="w-full px-6 py-3 rounded-lg bg-black text-white font-semibold hover:bg-gray-800 transition-colors"
                  >
                    Quero receber aviso
                  </button>
                </form>
              </div>
            </div>
          </section>

          <hr className="border-gray-200" />

          {/* Opção 6: Híbrida Premium - Layout com Borda em Destaque */}
          <section className="bg-white rounded-2xl shadow-xl shadow-[#F4CDD4]/20 border-2 border-[#F4CDD4] p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <Sparkles className="w-6 h-6 text-[#F4CDD4]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Mais economia para o seu negócio
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
              Dicas técnicas, cashback em cada compra e cupons surpresa na sua caixa de entrada.
            </p>
            <form className="max-w-md mx-auto flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Endereço de e-mail" 
                required
                className="w-full px-5 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-[#F4CDD4] focus:ring-2 focus:ring-[#F4CDD4] transition-all text-center"
              />
              <button 
                type="submit"
                className="w-full py-3 rounded-xl bg-[#F4CDD4] text-black font-bold text-lg hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                Garantir Benefícios
              </button>
            </form>
          </section>

          <hr className="border-gray-200" />

          {/* Opção 7: Foco em Performance - Layout Analítico/Clean */}
          <section className="bg-gray-900 rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-7/12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#F4CDD4] text-sm font-medium mb-6">
                <BarChart className="w-4 h-4" /> Linha PRO
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Alta Performance no seu Banho e Tosa
              </h2>
              <p className="text-gray-400 text-lg">
                Cadastre seu e-mail para receber protocolos de uso da Linha PRO e ofertas de rendimento.
              </p>
            </div>
            <div className="md:w-5/12 w-full">
              <form className="bg-gray-800 p-6 rounded-xl border border-gray-700" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="E-mail do salão" 
                  required
                  className="w-full px-4 py-3 mb-4 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-[#F4CDD4] transition-all"
                />
                <button 
                  type="submit"
                  className="w-full py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-100 transition-colors"
                >
                  Otimizar meu Estoque
                </button>
              </form>
            </div>
          </section>

          <hr className="border-gray-200" />

          {/* Opção 8: Gatilho de Escassez - Layout Urgência */}
          <section className="bg-white rounded-2xl shadow-sm border-l-4 border-l-black p-8 sm:p-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="md:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-black" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    Não perca nenhuma oportunidade
                  </h2>
                </div>
                <p className="text-gray-600 text-lg">
                  As melhores ofertas da Bubbles duram pouco. Esteja na lista de quem recebe primeiro.
                </p>
              </div>
              <div className="md:w-1/2 w-full">
                <form className="flex w-full shadow-sm rounded-lg overflow-hidden" onSubmit={(e) => e.preventDefault()}>
                  <input 
                    type="email" 
                    placeholder="Seu e-mail VIP" 
                    required
                    className="flex-1 px-4 py-4 border-y border-l border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  />
                  <button 
                    type="submit"
                    className="px-6 py-4 bg-black text-white font-semibold hover:bg-gray-800 transition-colors whitespace-nowrap"
                  >
                    Estar na Lista VIP
                  </button>
                </form>
              </div>
            </div>
          </section>

          <hr className="border-gray-200" />

          {/* Opção 9: Foco em Gestão - Layout Corporativo/Clean */}
          <section className="bg-gray-50 rounded-2xl border border-gray-200 p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Gestão inteligente para o seu estoque
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
              Receba tabelas de diluição, guias de custo por banho e promoções exclusivas.
            </p>
            <form className="max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="E-mail do gestor" 
                  required
                  className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all"
                />
                <button 
                  type="submit"
                  className="w-full py-3 rounded-lg bg-gray-900 text-white font-semibold hover:bg-black transition-colors"
                >
                  Receber Material Técnico
                </button>
              </div>
            </form>
          </section>

          <hr className="border-gray-200" />

          {/* Opção 10: Newsletter "Sem Spam" - Layout Amigável/Transparente */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12 text-center">
            <Heart className="w-8 h-8 text-[#F4CDD4] mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Conteúdo que agrega, preço que ajuda
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto text-lg">
              Apenas o essencial: técnicas de banho e tosa e os menores preços da semana.
            </p>
            <form className="max-w-lg mx-auto flex flex-col sm:flex-row gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Insira seu e-mail" 
                required
                className="flex-1 px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-[#F4CDD4] focus:ring-1 focus:ring-[#F4CDD4] transition-all"
              />
              <button 
                type="submit"
                className="px-8 py-3 rounded-full bg-white border-2 border-[#F4CDD4] text-black font-semibold hover:bg-[#F4CDD4] transition-colors"
              >
                Acompanhar Novidades
              </button>
            </form>
            <p className="mt-4 text-xs text-gray-400">
              Prometemos não enviar spam. Cancele a inscrição quando quiser.
            </p>
          </section>

          <SupportBanner pageName="Newsletter" />
        </div>
      </div>
    </div>
  );
}
