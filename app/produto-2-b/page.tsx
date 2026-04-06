'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingCart, Star, ShieldCheck, Truck, CreditCard, 
  PlayCircle, CheckCircle2, ChevronDown, ChevronUp, 
  MessageCircle, Info, ThumbsUp, Droplets, Wind, 
  Beaker, Leaf, ArrowRight, Search, User, Menu,
  Package, DollarSign, Award, Heart
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Produto2B() {
  const [activeImage, setActiveImage] = useState(0);
  const [cep, setCep] = useState('');
  const [freteResult, setFreteResult] = useState<string | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [selectedSize, setSelectedSize] = useState('5l');
  const [showStickyCta, setShowStickyCta] = useState(false);

  // Imagens da galeria
  const gallery = [
    "https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?q=80&w=800&auto=format&fit=crop", // Frasco
    "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800&auto=format&fit=crop", // Banho
    "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=800&auto=format&fit=crop", // Pet feliz
    "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=800&auto=format&fit=crop", // Pet limpo
  ];

  // Monitorar scroll para Sticky CTA
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowStickyCta(true);
      } else {
        setShowStickyCta(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCalculateFrete = () => {
    if (cep.length < 8) return;
    setIsCalculating(true);
    setTimeout(() => {
      setFreteResult('Sedex: R$ 15,90 - 3 dias úteis');
      setIsCalculating(false);
    }, 1500);
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white text-[#0D0C0D] font-sans pb-20 md:pb-0">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-3 border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <nav className="flex text-xs text-gray-500 font-medium">
            <Link href="/" className="hover:text-[#E8649A] transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/produtos" className="hover:text-[#E8649A] transition-colors">Produtos</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Shampoo Neutralizador PRO</span>
          </nav>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="py-8 md:py-12">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            
            {/* Galeria de Imagens */}
            <div className="flex flex-col gap-4">
              <div className="relative aspect-square w-full rounded-3xl overflow-hidden bg-gray-100 border border-gray-200">
                <Image 
                  src={gallery[activeImage]} 
                  alt="Shampoo Neutralizador PRO" 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                {/* Badges sobre a imagem */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="bg-[#0D0C0D] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                    Mais Vendido
                  </span>
                  <span className="bg-[#2DB85A] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                    Rende 500 Banhos
                  </span>
                </div>
              </div>
              
              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-3">
                {gallery.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${activeImage === idx ? 'border-[#E8649A] opacity-100' : 'border-transparent opacity-60 hover:opacity-100'}`}
                  >
                    <Image src={img} alt={`Thumbnail ${idx}`} fill className="object-cover" referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>

              {/* Vídeos Demonstrativos */}
              <div className="mt-6 bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-sm uppercase tracking-wider text-gray-500 mb-4 flex items-center gap-2">
                  <PlayCircle className="w-4 h-4" /> Veja o produto em ação
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {[1, 2, 3].map((v) => (
                    <div key={v} className="relative aspect-video bg-gray-800 rounded-xl overflow-hidden group cursor-pointer">
                      <Image src={gallery[v]} alt="Video Thumbnail" fill className="object-cover opacity-60 group-hover:opacity-40 transition-opacity" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <PlayCircle className="w-8 h-8 text-white opacity-80 group-hover:scale-110 transition-transform" />
                      </div>
                      <div className="absolute bottom-2 left-2 text-[10px] text-white font-bold bg-black/50 px-1.5 rounded">0:30</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Info do Produto */}
            <div className="flex flex-col">
              
              {/* Título + Avaliações */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex text-[#FFB800]">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <span className="font-bold text-sm">4.93</span>
                  <a href="#avaliacoes" className="text-sm text-gray-500 underline hover:text-[#E8649A] transition-colors">(15 avaliações)</a>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-[42px] font-black uppercase tracking-tight leading-[1.1] mb-4">
                  Shampoo Pet Neutralizador de Odores Pré-Lavagem PRO (EGO)
                </h1>
                
                {/* Badges de Destaque */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-[#F4CDD4]/30 text-[#E8649A] text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Leaf className="w-3 h-3" /> Vegano
                  </span>
                  <span className="bg-[#F4CDD4]/30 text-[#E8649A] text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Heart className="w-3 h-3" /> Cruelty Free
                  </span>
                  <span className="bg-[#F4CDD4]/30 text-[#E8649A] text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> Hipoalergênico
                  </span>
                </div>
              </div>

              {/* Preço + Economia */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-gray-500 font-bold text-xl">R$</span>
                  <span className="text-4xl md:text-5xl font-black tracking-tight">494,90</span>
                </div>
                <p className="text-gray-500 text-sm mt-1 font-medium">ou 12x de R$ 41,24 sem juros</p>
              </div>

              {/* Destaque de Economia (NOVO) */}
              <div className="bg-[#E8F8F2] border border-[#2DB85A]/30 rounded-2xl p-4 mb-6 flex items-start gap-4">
                <div className="w-10 h-10 bg-[#2DB85A] rounded-full flex items-center justify-center text-white shrink-0">
                  <DollarSign className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[#0D0C0D] font-medium text-sm md:text-base">
                    Rende <strong className="font-black text-[#2DB85A]">500 banhos</strong> por apenas <strong className="font-black text-[#2DB85A]">R$ 0,99/cada</strong>
                  </p>
                  <p className="text-[#2DB85A] text-xs font-bold mt-1">Economia de 65% vs produtos comuns</p>
                </div>
              </div>

              {/* Opções do Produto */}
              <div className="mb-8">
                <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-3">Selecione o Volume:</label>
                <div className="grid grid-cols-2 gap-3">
                  <label className={`relative border-2 rounded-2xl p-4 cursor-pointer transition-all ${selectedSize === '5l' ? 'border-[#0D0C0D] bg-gray-50' : 'border-gray-200 hover:border-gray-300'}`}>
                    <input type="radio" name="size" value="5l" checked={selectedSize === '5l'} onChange={() => setSelectedSize('5l')} className="sr-only" />
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-black text-lg">5 Litros</span>
                      {selectedSize === '5l' && <CheckCircle2 className="w-5 h-5 text-[#0D0C0D]" />}
                    </div>
                    <span className="text-gray-500 text-sm font-medium block mb-2">R$ 494,90</span>
                    <span className="bg-[#0D0C0D] text-white text-[10px] font-bold uppercase px-2 py-1 rounded inline-block">Mais Vendido</span>
                  </label>
                  
                  <label className={`relative border-2 rounded-2xl p-4 cursor-pointer transition-all ${selectedSize === '1l' ? 'border-[#0D0C0D] bg-gray-50' : 'border-gray-200 hover:border-gray-300'}`}>
                    <input type="radio" name="size" value="1l" checked={selectedSize === '1l'} onChange={() => setSelectedSize('1l')} className="sr-only" />
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-black text-lg">1 Litro</span>
                      {selectedSize === '1l' && <CheckCircle2 className="w-5 h-5 text-[#0D0C0D]" />}
                    </div>
                    <span className="text-gray-500 text-sm font-medium block mb-2">R$ 124,90</span>
                    <span className="bg-gray-200 text-gray-600 text-[10px] font-bold uppercase px-2 py-1 rounded inline-block">Ideal para Testar</span>
                  </label>
                </div>
              </div>

              {/* Calculador de Frete (NOVO) */}
              <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 mb-8">
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-3">
                  <Truck className="w-4 h-4" /> Calcule frete e prazo
                </label>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="00000-000" 
                    maxLength={9}
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                    className="flex-1 bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#E8649A] focus:ring-1 focus:ring-[#E8649A] transition-all"
                  />
                  <button 
                    onClick={handleCalculateFrete}
                    disabled={isCalculating || cep.length < 8}
                    className="bg-[#0D0C0D] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-gray-800 transition-colors disabled:opacity-50 flex items-center justify-center min-w-[100px]"
                  >
                    {isCalculating ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : 'Calcular'}
                  </button>
                </div>
                {freteResult && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mt-3 text-sm font-medium text-[#2DB85A] bg-[#2DB85A]/10 px-4 py-2 rounded-lg">
                    {freteResult}
                  </motion.div>
                )}
                <a href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="_blank" rel="noopener noreferrer" className="text-[11px] text-gray-400 underline mt-2 inline-block hover:text-[#E8649A]">Não sei meu CEP</a>
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-3 mb-8">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#2DB85A] text-white w-full py-4 md:py-5 rounded-2xl font-black uppercase tracking-wider text-sm md:text-base flex items-center justify-center gap-3 shadow-lg shadow-[#2DB85A]/20 hover:bg-[#259b4b] transition-colors"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Adicionar e Neutralizar Odores PRO
                </motion.button>
                
                <button className="bg-white border-2 border-gray-200 text-[#0D0C0D] w-full py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:border-gray-300 hover:bg-gray-50 transition-all">
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  Tirar Dúvidas no WhatsApp
                </button>
              </div>

              {/* Selos de Confiança (NOVO) */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-600">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase text-gray-500">Compra Segura</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-600">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase text-gray-500">30 dias garantia</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-600">
                    <Truck className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase text-gray-500">Frete Grátis*</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-600">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase text-gray-500">5% OFF no Pix</span>
                </div>
              </div>

              {/* Card de Garantia (NOVO) */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="font-black text-base flex items-center gap-2 mb-4">
                  <ShieldCheck className="w-5 h-5 text-[#2DB85A]" /> Compra 100% Protegida
                </h3>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-[#2DB85A] shrink-0 mt-0.5" />
                    Devolução grátis em 30 dias
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-[#2DB85A] shrink-0 mt-0.5" />
                    Garantia de satisfação total
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-[#2DB85A] shrink-0 mt-0.5" />
                    Reembolso completo se não gostar
                  </li>
                </ul>
                <Link href="/politica-de-troca-e-devolucoes" className="text-xs font-bold text-[#E8649A] hover:underline flex items-center gap-1">
                  Ver política completa <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS VISUAIS */}
      <section className="py-16 bg-[#FDF0F6]">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">Por que escolher o Neutralizador PRO?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">A tecnologia que os melhores groomers do Brasil utilizam para garantir resultados impecáveis.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#F4CDD4]/30 rounded-2xl flex items-center justify-center text-[#E8649A] mb-4 text-2xl">👃</div>
              <h3 className="font-black text-lg mb-2">Neutralização Real</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Tecnologia Sniff Tech elimina odores na raiz, não apenas mascara com perfume.</p>
            </motion.div>
            
            <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#E8F8F2] rounded-2xl flex items-center justify-center text-[#2DB85A] mb-4 text-2xl">💰</div>
              <h3 className="font-black text-lg mb-2">Super Econômico</h3>
              <p className="text-gray-500 text-sm leading-relaxed">500 banhos por apenas R$0,99 cada com diluição de 1:10. Maior rentabilidade.</p>
            </motion.div>
            
            <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500 mb-4 text-2xl">⚡</div>
              <h3 className="font-black text-lg mb-2">Ação Profunda</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Remove sujidades pesadas e prepara a pelagem perfeitamente para os próximos passos.</p>
            </motion.div>
            
            <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-4 text-2xl">🌱</div>
              <h3 className="font-black text-lg mb-2">Seguro e Ético</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Fórmula 100% vegana, hipoalergênica e cruelty-free. Respeito total ao pet.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* COMPARATIVO DE RENDIMENTO (NOVO) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1000px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">Compare e economize até 65%</h2>
            <p className="text-gray-600">Veja por que a linha PRO é o melhor investimento para o seu negócio.</p>
          </div>
          
          <div className="overflow-x-auto pb-4">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr>
                  <th className="p-4 border-b-2 border-gray-100 font-bold text-gray-500 uppercase text-xs tracking-wider">Produto</th>
                  <th className="p-4 border-b-2 border-gray-100 font-bold text-gray-500 uppercase text-xs tracking-wider">Volume</th>
                  <th className="p-4 border-b-2 border-gray-100 font-bold text-gray-500 uppercase text-xs tracking-wider">Diluição</th>
                  <th className="p-4 border-b-2 border-gray-100 font-bold text-gray-500 uppercase text-xs tracking-wider">Rendimento</th>
                  <th className="p-4 border-b-2 border-gray-100 font-bold text-gray-500 uppercase text-xs tracking-wider">Custo/Banho</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[#E8F8F2] border-2 border-[#2DB85A] rounded-xl relative">
                  <td className="p-5 rounded-l-xl">
                    <div className="flex items-center gap-2">
                      <strong className="font-black text-[#0D0C0D] whitespace-nowrap">🏆 Bubbles PRO (EGO)</strong>
                      <span className="bg-[#2DB85A] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase hidden sm:inline-block">Escolha #1</span>
                    </div>
                  </td>
                  <td className="p-5 font-medium">5 Litros</td>
                  <td className="p-5 font-medium">1:10</td>
                  <td className="p-5"><strong className="font-black">500 banhos</strong></td>
                  <td className="p-5 rounded-r-xl"><strong className="font-black text-[#2DB85A] text-lg">R$ 0,99</strong></td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-5 text-gray-600">Produto Profissional Comum</td>
                  <td className="p-5 text-gray-600">5 Litros</td>
                  <td className="p-5 text-gray-600">1:5</td>
                  <td className="p-5 text-gray-600">250 banhos</td>
                  <td className="p-5 text-gray-600 font-medium">R$ 1,80</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-5 text-gray-600">Shampoo Uso Puro</td>
                  <td className="p-5 text-gray-600">5 Litros</td>
                  <td className="p-5 text-gray-600">Sem diluição</td>
                  <td className="p-5 text-gray-600">100 banhos</td>
                  <td className="p-5 text-red-500 font-medium">R$ 3,50</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 bg-gray-50 rounded-2xl p-6 text-center border border-gray-200">
            <p className="text-lg md:text-xl text-gray-700">
              💡 Com o Bubbles PRO você economiza <strong className="font-black text-[#2DB85A]">R$ 1.255,00</strong> a cada 500 banhos comparado a produtos sem diluição.
            </p>
          </div>
        </div>
      </section>

      {/* ANTES E DEPOIS (NOVO - Prova Visual) */}
      <section className="py-16 md:py-24 bg-[#0D0C0D] text-white">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">Veja a diferença real</h2>
            <p className="text-gray-400">Resultados comprovados por profissionais em casos extremos.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-[#1A1A1A] rounded-3xl overflow-hidden border border-white/10">
                <div className="relative aspect-[4/3] flex">
                  <div className="w-1/2 relative border-r border-white/20">
                    <Image src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=400&auto=format&fit=crop" alt="Antes" fill className="object-cover grayscale opacity-70" referrerPolicy="no-referrer" />
                    <span className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold uppercase px-2 py-1 rounded">Antes</span>
                  </div>
                  <div className="w-1/2 relative">
                    <Image src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=400&auto=format&fit=crop" alt="Depois" fill className="object-cover" referrerPolicy="no-referrer" />
                    <span className="absolute top-3 right-3 bg-[#2DB85A] text-white text-[10px] font-bold uppercase px-2 py-1 rounded">Depois</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="font-bold text-lg mb-2">Golden Retriever - Odor de Molhado</p>
                  <p className="text-[#2DB85A] text-sm font-medium flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> Odor 100% neutralizado após 1 aplicação
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AVALIAÇÕES MELHORADAS */}
      <section id="avaliacoes" className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-12 text-center">O que os profissionais dizem</h2>
          
          <div className="grid md:grid-cols-[300px_1fr] gap-12 mb-12">
            {/* Resumo */}
            <div className="flex flex-col items-center md:items-start">
              <div className="text-6xl font-black mb-2">4.93</div>
              <div className="flex text-[#FFB800] mb-2">
                <Star className="w-6 h-6 fill-current" />
                <Star className="w-6 h-6 fill-current" />
                <Star className="w-6 h-6 fill-current" />
                <Star className="w-6 h-6 fill-current" />
                <Star className="w-6 h-6 fill-current" />
              </div>
              <p className="text-gray-500 text-sm mb-6">Baseado em 15 avaliações verificadas</p>
              
              <div className="w-full space-y-2">
                <div className="flex items-center gap-3 text-sm">
                  <span className="w-16 text-gray-600">5 estrelas</span>
                  <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#FFB800] w-[93%]"></div>
                  </div>
                  <span className="w-6 text-right text-gray-500">14</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="w-16 text-gray-600">4 estrelas</span>
                  <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#FFB800] w-[7%]"></div>
                  </div>
                  <span className="w-6 text-right text-gray-500">1</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="w-16 text-gray-600">3 estrelas</span>
                  <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#FFB800] w-[0%]"></div>
                  </div>
                  <span className="w-6 text-right text-gray-500">0</span>
                </div>
              </div>
            </div>
            
            {/* Lista de Avaliações */}
            <div className="space-y-6">
              {/* Filtros */}
              <div className="flex flex-wrap gap-2 mb-8">
                <button className="bg-[#0D0C0D] text-white px-4 py-2 rounded-full text-sm font-bold">Todas (15)</button>
                <button className="bg-gray-100 text-gray-600 hover:bg-gray-200 px-4 py-2 rounded-full text-sm font-medium transition-colors">Com fotos (8)</button>
                <button className="bg-gray-100 text-gray-600 hover:bg-gray-200 px-4 py-2 rounded-full text-sm font-medium transition-colors">Groomers (6)</button>
              </div>
              
              {/* Card de Avaliação */}
              {[1, 2, 3].map((review) => (
                <div key={review} className="bg-gray-50 rounded-3xl p-6 md:p-8 border border-gray-100">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden relative">
                        <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" alt="Avatar" fill className="object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <div>
                        <strong className="block text-lg">Juliana M.</strong>
                        <div className="flex flex-wrap gap-2 mt-1">
                          <span className="text-[10px] font-bold text-[#2DB85A] bg-[#2DB85A]/10 px-2 py-0.5 rounded flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" /> Compra Verificada
                          </span>
                          <span className="text-[10px] font-bold text-[#E8649A] bg-[#F4CDD4]/30 px-2 py-0.5 rounded flex items-center gap-1">
                            <Award className="w-3 h-3" /> Groomer Profissional
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex text-[#FFB800]">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                  
                  <h4 className="font-black text-lg mb-2">&quot;O melhor investimento para meu pet shop&quot;</h4>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Uso há 3 meses no meu salão e o rendimento é exatamente como prometido. 
                    Consegui fazer mais de 120 banhos com meio galão! Os pets saem com zero 
                    odor mesmo depois de brincarem na chuva. Vale cada centavo.
                  </p>
                  
                  {/* Fotos UGC */}
                  <div className="flex gap-3 mb-6 overflow-x-auto pb-2 scrollbar-hide">
                    <div className="w-24 h-24 relative rounded-xl overflow-hidden shrink-0 border border-gray-200">
                      <Image src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=200&auto=format&fit=crop" alt="UGC" fill className="object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="w-24 h-24 relative rounded-xl overflow-hidden shrink-0 border border-gray-200">
                      <Image src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=200&auto=format&fit=crop" alt="UGC" fill className="object-cover" referrerPolicy="no-referrer" />
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm text-gray-500 pt-4 border-t border-gray-200">
                    <span>15 de março de 2026</span>
                    <button className="flex items-center gap-1 hover:text-[#0D0C0D] transition-colors font-medium">
                      <ThumbsUp className="w-4 h-4" /> Útil (12)
                    </button>
                  </div>
                </div>
              ))}
              
              <button className="w-full py-4 border-2 border-gray-200 rounded-2xl font-bold hover:bg-gray-50 transition-colors">
                Ver todas as 15 avaliações →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MODO DE USO VISUAL */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">Como usar para resultados profissionais</h2>
            <p className="text-gray-600">Siga o protocolo para garantir a máxima eficácia e rendimento.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div className="text-6xl font-black text-gray-100 absolute top-4 right-6">1</div>
              <div className="w-12 h-12 bg-[#F4CDD4]/30 rounded-2xl flex items-center justify-center text-[#E8649A] mb-6 relative z-10">
                <Beaker className="w-6 h-6" />
              </div>
              <h3 className="font-black text-lg mb-3 relative z-10">Diluição Correta</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4 relative z-10">Misture 1 parte do shampoo com 10 partes de água morna (1:10).</p>
              <div className="bg-yellow-50 text-yellow-800 text-xs font-bold p-3 rounded-xl relative z-10">
                💡 Dica: Use 100ml do produto para 1L de água
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border border-gray-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div className="text-6xl font-black text-gray-100 absolute top-4 right-6">2</div>
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500 mb-6 relative z-10">
                <Droplets className="w-6 h-6" />
              </div>
              <h3 className="font-black text-lg mb-3 relative z-10">Aplicação Uniforme</h3>
              <p className="text-gray-500 text-sm leading-relaxed relative z-10">Aplique generosamente em toda pelagem, fazendo movimentos circulares para penetrar bem.</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border border-gray-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div className="text-6xl font-black text-gray-100 absolute top-4 right-6">3</div>
              <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-500 mb-6 relative z-10">
                <Wind className="w-6 h-6" />
              </div>
              <h3 className="font-black text-lg mb-3 relative z-10">Tempo de Ação</h3>
              <p className="text-gray-500 text-sm leading-relaxed relative z-10">Deixe agir por 3 a 5 minutos para que a Tecnologia Sniff Tech neutralize os odores completamente.</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border border-gray-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div className="text-6xl font-black text-gray-100 absolute top-4 right-6">4</div>
              <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-500 mb-6 relative z-10">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-black text-lg mb-3 relative z-10">Enxágue Completo</h3>
              <p className="text-gray-500 text-sm leading-relaxed relative z-10">Enxágue abundantemente e prossiga com o shampoo principal do seu protocolo de banho.</p>
            </div>
          </div>
          
          {/* Vídeo tutorial */}
          <div className="max-w-3xl mx-auto bg-[#0D0C0D] rounded-3xl p-2 md:p-4 shadow-2xl">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-800 group cursor-pointer">
              <Image src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1200&auto=format&fit=crop" alt="Tutorial" fill className="object-cover opacity-60 group-hover:opacity-40 transition-opacity" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <PlayCircle className="w-16 h-16 text-white opacity-90 group-hover:scale-110 transition-transform mb-4" />
                <span className="text-white font-bold text-lg">Assista ao tutorial completo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ OTIMIZADO */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[800px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">Dúvidas Frequentes</h2>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "Quantos banhos realmente rende o galão de 5L?", a: "Com a diluição correta de 1:10, o galão de 5L rende aproximadamente 500 banhos em pets de porte médio. Para pets grandes, rende cerca de 350-400 banhos. O rendimento pode variar conforme o tamanho e tipo de pelagem do animal." },
              { q: "Funciona mesmo em odores muito fortes?", a: "Sim! A Tecnologia Sniff Tech atua diretamente nos receptores olfativos, neutralizando odores na origem, não apenas mascarando. Testado e aprovado em casos de odor de mato, xixi, fezes e até skunks." },
              { q: "Posso usar sem diluir?", a: "Não recomendamos. O produto é super concentrado e foi formulado especificamente para ser diluído em 1:10. Usar puro pode dificultar o enxágue e não trará benefícios adicionais, apenas desperdício." },
              { q: "É seguro para filhotes?", a: "Sim, a fórmula é hipoalergênica e segura para cães e gatos a partir de 4 semanas de vida." }
            ].map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-2xl overflow-hidden">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-lg pr-4">{faq.q}</span>
                  {activeFaq === idx ? <ChevronUp className="w-5 h-5 text-[#E8649A] shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />}
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE A MARCA */}
      <section className="py-16 md:py-24 bg-[#0D0C0D] text-white">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?q=80&w=800&auto=format&fit=crop" alt="Laboratório Bubbles" fill className="object-cover opacity-80" referrerPolicy="no-referrer" />
            </div>
            <div>
              <span className="bg-[#F4CDD4]/20 text-[#F4CDD4] text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-6 inline-block">Conheça a Bubbles</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-6">Desenvolvido por profissionais, para profissionais</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                A linha PRO (EGO) foi criada em parceria com groomers renomados e veterinários especializados em dermatologia. Cada fórmula passa por rigorosos testes de eficácia e segurança para garantir a melhor performance no seu banho e tosa.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 font-medium"><CheckCircle2 className="w-5 h-5 text-[#2DB85A]" /> Fabricado no Brasil com ingredientes premium</li>
                <li className="flex items-center gap-3 font-medium"><CheckCircle2 className="w-5 h-5 text-[#2DB85A]" /> Livre de parabenos, sulfatos agressivos e corantes</li>
                <li className="flex items-center gap-3 font-medium"><CheckCircle2 className="w-5 h-5 text-[#2DB85A]" /> Testado dermatologicamente</li>
                <li className="flex items-center gap-3 font-medium"><CheckCircle2 className="w-5 h-5 text-[#2DB85A]" /> Aprovado por 2.500+ pet shops no Brasil</li>
              </ul>
              <Link href="/sobre" className="inline-flex items-center gap-2 bg-white text-[#0D0C0D] px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-colors">
                Nossa História <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUTOS RELACIONADOS */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">Complete seu kit profissional</h2>
            <p className="text-gray-600">Produtos que potencializam os resultados do Shampoo Neutralizador PRO.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { name: "Condicionador PRO 5L", price: "R$ 450,90", img: "https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?q=80&w=400&auto=format&fit=crop" },
              { name: "Máscara de Hidratação PRO 1kg", price: "R$ 189,90", img: "https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?q=80&w=400&auto=format&fit=crop" },
              { name: "Perfume Finalizador PRO 500ml", price: "R$ 120,00", img: "https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?q=80&w=400&auto=format&fit=crop" },
              { name: "Desembolador PRO 1L", price: "R$ 145,90", img: "https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?q=80&w=400&auto=format&fit=crop" }
            ].map((prod, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-4 border border-gray-100 hover:shadow-lg transition-shadow group cursor-pointer">
                <div className="relative aspect-square rounded-xl overflow-hidden mb-4 bg-gray-50">
                  <Image src={prod.img} alt={prod.name} fill className="object-cover group-hover:scale-105 transition-transform" referrerPolicy="no-referrer" />
                </div>
                <h3 className="font-bold text-sm md:text-base mb-2 line-clamp-2">{prod.name}</h3>
                <p className="font-black text-[#2DB85A] text-lg mb-4">{prod.price}</p>
                <button className="w-full bg-[#0D0C0D] text-white py-2 rounded-xl font-bold text-sm hover:bg-gray-800 transition-colors">
                  Adicionar
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* STICKY CTA MOBILE */}
      <AnimatePresence>
        {showStickyCta && (
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 z-50 md:hidden shadow-[0_-10px_20px_rgba(0,0,0,0.05)]"
          >
            <div className="flex items-center justify-between gap-4 max-w-[1400px] mx-auto">
              <div className="flex flex-col">
                <span className="font-black text-lg leading-none">R$ 494,90</span>
                <span className="text-xs text-gray-500 font-medium">12x R$ 41,24</span>
              </div>
              <button className="bg-[#2DB85A] text-white px-6 py-3 rounded-xl font-black uppercase text-xs flex-1 shadow-lg shadow-[#2DB85A]/20">
                Adicionar
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
