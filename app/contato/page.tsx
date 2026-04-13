import React from 'react';
import { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Youtube, MessageCircle, HelpCircle, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Fale Conosco | Bubbles Pet',
  description: 'Precisa de ajuda? Entre em contato com a equipe Bubbles Pet.',
};

export default function ContatoPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header Simples */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-bold text-2xl tracking-tight text-[#0D0C0D]">Bubbles<span className="text-[#F4CDD4]">.</span></span>
          </Link>
        </div>
      </header>

      <main className="flex-grow py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h1 className="text-3xl md:text-5xl font-bold text-[#0D0C0D] mb-4 tracking-tight">Fale Conosco</h1>
            <p className="text-lg text-gray-600">
              Precisa de ajuda? Escolha o melhor canal para falar com nossa equipe ou preencha o formulário abaixo.
            </p>
          </div>

          {/* Destaque WhatsApp */}
          <div className="mb-12 bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-[#25D366]/10 rounded-full flex items-center justify-center shrink-0">
                <MessageCircle className="w-10 h-10 text-[#25D366]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#0D0C0D] mb-2">Atendimento Rápido via WhatsApp</h2>
                <p className="text-gray-600">
                  Fale diretamente com um de nossos especialistas. Respondemos em até 2 horas úteis.
                </p>
              </div>
            </div>
            <a 
              href="https://wa.me/5514996312932" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full md:w-auto px-8 py-4 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#20bd5a] transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20 shrink-0"
            >
              <MessageCircle className="w-5 h-5" />
              Chamar no WhatsApp
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 items-start">
            
            {/* Formulário (Esquerda) */}
            <div className="lg:col-span-3 bg-white rounded-[2rem] p-6 md:p-10 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-[#0D0C0D] mb-6">Envie uma mensagem</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="nome" className="block text-sm font-semibold text-gray-700">Nome</label>
                    <input 
                      type="text" 
                      id="nome" 
                      name="nome" 
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#F4CDD4] focus:ring-4 focus:ring-[#F4CDD4]/20 outline-none transition-all bg-gray-50 focus:bg-white text-gray-800"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email <span className="text-red-500">*</span></label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#F4CDD4] focus:ring-4 focus:ring-[#F4CDD4]/20 outline-none transition-all bg-gray-50 focus:bg-white text-gray-800"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="telefone" className="block text-sm font-semibold text-gray-700">Número de telefone</label>
                  <input 
                    type="tel" 
                    id="telefone" 
                    name="telefone" 
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#F4CDD4] focus:ring-4 focus:ring-[#F4CDD4]/20 outline-none transition-all bg-gray-50 focus:bg-white text-gray-800"
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="comentario" className="block text-sm font-semibold text-gray-700">Comentário</label>
                  <textarea 
                    id="comentario" 
                    name="comentario" 
                    rows={5}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#F4CDD4] focus:ring-4 focus:ring-[#F4CDD4]/20 outline-none transition-all bg-gray-50 focus:bg-white resize-none text-gray-800"
                    placeholder="Como podemos te ajudar?"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full md:w-auto px-8 py-4 bg-[#0D0C0D] text-white font-bold rounded-xl hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Send className="w-5 h-5" />
                  Enviar mensagem
                </button>
              </form>
            </div>

            {/* Informações de Contato & Links Úteis (Direita) */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Card de Informações */}
              <div className="bg-[#0D0C0D] text-white rounded-[2rem] p-8 shadow-xl relative overflow-hidden">
                {/* Elemento decorativo */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#F4CDD4] rounded-full blur-[80px] opacity-20 pointer-events-none"></div>
                
                <h3 className="text-xl font-bold mb-6 relative z-10">Nossos Contatos</h3>
                
                <div className="space-y-6 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/5">
                      <MapPin className="w-4 h-4 text-[#F4CDD4]" />
                    </div>
                    <div className="pt-1">
                      <p className="font-semibold text-white mb-1">Endereço</p>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        R. Fortunato Zilo, 238 - Vila Antonieta II,<br />
                        Lençóis Paulista - SP | CEP: 18681-200
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/5">
                      <Phone className="w-4 h-4 text-[#F4CDD4]" />
                    </div>
                    <div className="pt-1">
                      <p className="font-semibold text-white mb-1">Telefone</p>
                      <a href="tel:+5514996312932" className="text-gray-300 text-sm hover:text-[#F4CDD4] transition-colors">
                        (14) 99631-2932
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/5">
                      <Mail className="w-4 h-4 text-[#F4CDD4]" />
                    </div>
                    <div className="pt-1">
                      <p className="font-semibold text-white mb-1">Email</p>
                      <a href="mailto:ajuda@bubbles.com.br" className="text-gray-300 text-sm hover:text-[#F4CDD4] transition-colors">
                        ajuda@bubbles.com.br
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/5">
                      <Clock className="w-4 h-4 text-[#F4CDD4]" />
                    </div>
                    <div className="pt-1">
                      <p className="font-semibold text-white mb-1">Horário de funcionamento</p>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Segunda a sexta, das 8h às 17h30.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 relative z-10">
                  <div className="flex gap-3">
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#F4CDD4] hover:text-[#0D0C0D] transition-all border border-white/5">
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#F4CDD4] hover:text-[#0D0C0D] transition-all border border-white/5">
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#F4CDD4] hover:text-[#0D0C0D] transition-all border border-white/5">
                      <Youtube className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Links Úteis */}
              <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-[#0D0C0D] mb-6">Links Úteis</h3>
                <div className="space-y-3">
                  <Link href="/faq" className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 border border-gray-100 transition-all group">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#F4CDD4]/20 flex items-center justify-center text-[#0D0C0D]">
                        <HelpCircle className="w-4 h-4" />
                      </div>
                      <span className="font-medium text-gray-700 group-hover:text-[#0D0C0D]">Dúvidas Frequentes (FAQ)</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#F4CDD4] transition-colors" />
                  </Link>
                  
                  <Link href="/distribuidor-gabriel" className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 border border-gray-100 transition-all group">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#F4CDD4]/20 flex items-center justify-center text-[#0D0C0D]">
                        <Users className="w-4 h-4" />
                      </div>
                      <span className="font-medium text-gray-700 group-hover:text-[#0D0C0D]">Seja um Distribuidor</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#F4CDD4] transition-colors" />
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
