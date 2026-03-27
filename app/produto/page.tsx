import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Star, ChevronRight, ChevronLeft, Minus, Plus, Search, Info, CheckCircle2, AlertCircle, FileText, HelpCircle, BookOpen, Droplets, ShieldCheck, RefreshCcw, Truck } from 'lucide-react';

export default function ProductPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Header />
      
      <main className="flex-grow">
        {/* Breadcrumb */}
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-4 text-sm text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium truncate">KIT PET CRONOGRAMA DE PELAGEM PRO (EGO) (3 ITENS)</span>
        </div>

        {/* Product Section */}
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto md:w-24 flex-shrink-0 scrollbar-hide">
              {[
                "https://www.bubbles.com.br/cdn/shop/files/pro_kit-cronograma.jpg?v=1770382607",
                "https://www.bubbles.com.br/cdn/shop/files/criativo_kit-cronograma_meta_1080x1080_19nov25_1.jpg?v=1770382607",
                "https://www.bubbles.com.br/cdn/shop/files/62bf7e8850e61670429db89ad8e96d0c.png?v=1770382607",
                "https://www.bubbles.com.br/cdn/shop/files/6623d229c5dfacb0454bb9474568e42c.jpg?v=1770382607",
                "https://www.bubbles.com.br/cdn/shop/files/c31411bbd2c5f824641321136ebd3e48.png?v=1770382607"
              ].map((src, idx) => (
                <button key={idx} className={`relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-xl overflow-hidden border-2 ${idx === 0 ? 'border-gray-900' : 'border-transparent hover:border-gray-300'} transition-colors`}>
                  <Image src={src} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" />
                </button>
              ))}
              <button className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-xl overflow-hidden border-2 border-transparent hover:border-gray-300 transition-colors flex items-center justify-center bg-gray-100 text-gray-600 text-xs font-medium">
                Ver mais
              </button>
            </div>
            
            {/* Main Image */}
            <div className="relative w-full aspect-square md:aspect-[4/5] lg:aspect-square bg-gray-50 rounded-2xl overflow-hidden">
              <Image 
                src="https://www.bubbles.com.br/cdn/shop/files/pro_kit-cronograma.jpg?v=1770382607" 
                alt="KIT PET CRONOGRAMA DE PELAGEM PRO (EGO) (3 ITENS)" 
                fill 
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col gap-6">
            
            {/* Tolstoy Stories Mock */}
            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold text-gray-900">Veja mais sobre o produto</span>
              <div className="flex gap-3">
                {[
                  "https://www.bubbles.com.br/cdn/shop/files/62bf7e8850e61670429db89ad8e96d0c.png?v=1770382607",
                  "https://www.bubbles.com.br/cdn/shop/files/6623d229c5dfacb0454bb9474568e42c.jpg?v=1770382607",
                  "https://www.bubbles.com.br/cdn/shop/files/c31411bbd2c5f824641321136ebd3e48.png?v=1770382607"
                ].map((src, idx) => (
                  <div key={idx} className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#F48FB1] p-0.5 cursor-pointer hover:scale-105 transition-transform">
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <Image src={src} alt="Story" fill className="object-cover" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-start justify-between gap-4">
              <h1 className="text-2xl md:text-3xl font-medium text-gray-900 leading-tight">
                KIT PET CRONOGRAMA DE PELAGEM PRO (EGO) (3 ITENS)
              </h1>
              <div className="flex-shrink-0 flex flex-col items-center">
                <Image src="https://d33a6lvgbd0fej.cloudfront.net/bG9qYS1idWJibGVzLm15c2hvcGlmeS5jb20=/custom-icon-freegift_1762197757.png" alt="Brinde Grátis" width={40} height={40} />
                <span className="text-[10px] font-bold text-[#F48FB1] uppercase mt-1">Brinde Grátis</span>
              </div>
            </div>

            {/* Reviews */}
            <div className="flex items-center gap-2">
              <div className="flex items-center text-[#0cb771]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-600">11 avaliações</span>
            </div>

            {/* Price */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-gray-900">R$ 294,90</span>
                <span className="text-lg text-gray-400 line-through">R$ 346,90</span>
                <span className="bg-[#0cb771] text-white text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wide">
                  15% de desconto
                </span>
              </div>
              <span className="text-sm text-gray-600">6x de R$ 49,15 sem juros</span>
            </div>

            {/* Attributes Table */}
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b border-gray-200 last:border-0">
                    <td className="py-2 font-bold text-gray-900">Rendimento</td>
                    <td className="py-2 text-gray-600 text-right">450 pumps</td>
                  </tr>
                  <tr className="border-b border-gray-200 last:border-0">
                    <td className="py-2 font-bold text-gray-900">Custo por banho</td>
                    <td className="py-2 text-gray-600 text-right">R$0.66</td>
                  </tr>
                  <tr className="border-b border-gray-200 last:border-0">
                    <td className="py-2 font-bold text-gray-900">Diluição</td>
                    <td className="py-2 text-gray-600 text-right">Pronto Uso</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Gift Notification */}
            <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl border border-gray-100">
              <div className="w-10 h-10 bg-gray-200 rounded-lg overflow-hidden relative flex-shrink-0">
                <Image src="https://www.bubbles.com.br/cdn/shop/files/pro_kit-cronograma.jpg?v=1770382607" alt="Gift" fill className="object-cover" />
              </div>
              <span className="text-sm font-medium text-gray-900">Brinde nas compras acima de R$499</span>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-300 rounded-full h-12 w-32">
                  <button className="w-10 h-full flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors">
                    <Minus className="w-4 h-4" />
                  </button>
                  <input type="number" value="1" readOnly className="w-full h-full text-center font-medium text-gray-900 bg-transparent border-none focus:ring-0 p-0" />
                  <button className="w-10 h-full flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <button className="flex-grow bg-[#0cb771] hover:bg-[#0a9b5f] text-white font-bold h-12 rounded-full transition-colors flex items-center justify-center gap-2">
                  Comprar
                </button>
              </div>
              
              {/* Trust Badges */}
              <div className="flex items-center justify-center gap-6 py-4 border-t border-b border-gray-100 mt-2">
                <div className="flex flex-col items-center gap-1">
                  <ShieldCheck className="w-6 h-6 text-[#F48FB1]" />
                  <span className="text-[10px] font-medium text-gray-500 uppercase">Compra Segura</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <RefreshCcw className="w-6 h-6 text-[#F48FB1]" />
                  <span className="text-[10px] font-medium text-gray-500 uppercase">Troca Fácil</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Truck className="w-6 h-6 text-[#F48FB1]" />
                  <span className="text-[10px] font-medium text-gray-500 uppercase">Entrega Rápida</span>
                </div>
              </div>
            </div>

            {/* Shipping Calculator */}
            <div className="flex flex-col gap-2 mt-4">
              <span className="text-sm font-bold text-gray-900">Cálculo de frete</span>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="00000-000" 
                  className="flex-grow h-12 px-4 rounded-xl border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all outline-none"
                />
                <button className="h-12 px-6 bg-black hover:bg-gray-800 text-white font-bold rounded-xl transition-colors">
                  Calcular
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Tabs Section */}
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-12 border-t border-gray-100">
          <div className="flex flex-wrap gap-4 md:gap-8 border-b border-gray-200 pb-4 mb-8">
            {['Descrição', 'Benefícios', 'Dúvidas', 'Composição', 'Modo de Uso'].map((tab, idx) => (
              <button 
                key={idx} 
                className={`text-sm md:text-base font-bold pb-4 -mb-[17px] border-b-2 transition-colors ${idx === 0 ? 'border-gray-900 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-900'}`}
              >
                {tab}
              </button>
            ))}
          </div>
          
          <div className="prose max-w-none text-gray-600 space-y-4">
            <p>O <strong>Kit Cronograma de Pelagem</strong> é composto por três máscaras de tratamento, desenvolvidas para atender todas as necessidades da fibra capilar: hidratação, nutrição e reconstrução. Juntas, elas formam um protocolo completo que devolve saúde, equilíbrio e beleza à pelagem.</p>
            <p>A <strong>Máscara de Hidratação</strong> atua na reposição de água, proporcionando maciez imediata, brilho intenso e toque sedoso, sendo ideal para pelagens opacas, ressecadas ou sem vida.</p>
            <p>A <strong>Máscara de Nutrição</strong> repõe lipídios essenciais, ajudando a controlar o frizz, melhorar a maleabilidade e proteger a fibra capilar, deixando o pelo mais alinhado, disciplinado e com aspecto saudável.</p>
            <p>A <strong>Máscara de Reconstrução</strong> age profundamente na estrutura do fio, fortalecendo a pelagem, reduzindo a quebra e auxiliando na recuperação de pelos danificados, fragilizados ou quimicamente tratados.</p>
            <p>O uso combinado das três máscaras, aliado ao teste de porosidade, permite criar tratamentos personalizados, garantindo resultados progressivos, duradouros e um acabamento profissional em cada banho.</p>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">Avaliações de Clientes</h2>
            
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start justify-center">
              {/* Summary */}
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center gap-1 text-[#0cb771] mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-6 h-6 fill-current" />
                  ))}
                </div>
                <span className="text-xl font-bold text-gray-900">4.91 de 5</span>
                <span className="text-sm text-gray-500">Baseado em 11 avaliações</span>
              </div>

              {/* Histogram */}
              <div className="flex flex-col gap-2 w-full max-w-xs">
                {[
                  { stars: 5, percent: 91, count: 10 },
                  { stars: 4, percent: 9, count: 1 },
                  { stars: 3, percent: 0, count: 0 },
                  { stars: 2, percent: 0, count: 0 },
                  { stars: 1, percent: 0, count: 0 }
                ].map((row) => (
                  <div key={row.stars} className="flex items-center gap-3 text-sm">
                    <div className="flex items-center gap-1 text-[#0cb771] w-24">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3 h-3 ${i < row.stars ? 'fill-current' : 'text-gray-300 fill-gray-300'}`} />
                      ))}
                    </div>
                    <div className="flex-grow h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-[#F4CDD4]" style={{ width: `${row.percent}%` }}></div>
                    </div>
                    <span className="w-8 text-right text-gray-500">{row.percent}%</span>
                    <span className="w-6 text-right text-gray-400">({row.count})</span>
                  </div>
                ))}
              </div>

              {/* Write Review Button */}
              <div className="flex flex-col items-center justify-center">
                <button className="bg-[#F4CDD4] hover:bg-[#F48FB1] text-gray-900 font-bold py-3 px-8 rounded-full transition-colors">
                  Escrever uma avaliação
                </button>
              </div>
            </div>

            {/* Reviews List */}
            <div className="mt-16 space-y-8 max-w-4xl mx-auto">
              <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                <select className="bg-transparent text-gray-900 font-medium outline-none cursor-pointer">
                  <option>Mais Recentes</option>
                  <option>Maior Avaliação</option>
                  <option>Menor Avaliação</option>
                </select>
              </div>

              {[
                { name: 'Gabriel', date: '28/03/2025', title: 'Excelente produto, muito rápido o tempo de ação é perfeito', body: 'Excelente produto, muito rápido o tempo de ação é perfeito' },
                { name: 'Rafael', date: '19/03/2025', title: 'O cheiro é sensacional, além disso deixa a pelagem muito bonita.', body: 'O cheiro é sensacional, além disso deixa a pelagem muito bonita.' },
                { name: 'José Henrique', date: '12/03/2025', title: 'Não tem melhor', body: 'Não tem melhor' },
                { name: 'Ednéia', date: '29/12/2024', title: 'Amo os perfumes da bubbus. Só uso eles...os meus clientes e eu aprovamos e recomendamos.', body: 'Amo os perfumes da bubbus. Só uso eles...os meus clientes e eu aprovamos e recomendamos.' },
                { name: 'Cristine', date: '25/11/2024', title: 'Excelente produto que eu quero passar no meu cabelo!', body: 'Excelente produto que eu quero passar no meu cabelo!' }
              ].map((review, idx) => (
                <div key={idx} className="border-b border-gray-200 pb-8 last:border-0">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1 text-[#0cb771]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">{review.date}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold text-sm">
                      {review.name.charAt(0)}
                    </div>
                    <span className="font-bold text-gray-900">{review.name}</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{review.title}</h4>
                  <p className="text-gray-600">{review.body}</p>
                </div>
              ))}

              {/* Pagination */}
              <div className="flex items-center justify-center gap-4 pt-8">
                <button className="w-8 h-8 flex items-center justify-center rounded-full text-[#F48FB1] font-bold">1</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full text-gray-900 hover:bg-gray-100 transition-colors">2</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full text-gray-900 hover:bg-gray-100 transition-colors">3</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full text-gray-900 hover:bg-gray-100 transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">Produtos Relacionados</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'MÁSCARA PET LISO INTENSO PRO (EGO) 500ML', price: 'R$ 113,90', oldPrice: 'R$ 125,90', img: 'https://www.bubbles.com.br/cdn/shop/files/c31411bbd2c5f824641321136ebd3e48.png?v=1770382607' },
              { title: 'MÁSCARA PET HIDRATANTE PRO (EGO) 500ML', price: 'R$ 108,90', oldPrice: 'R$ 120,90', img: 'https://www.bubbles.com.br/cdn/shop/files/6623d229c5dfacb0454bb9474568e42c.jpg?v=1770382607' },
              { title: 'LIMPEZA PET OTOLÓGICA PRO (EGO) 500ML', price: 'R$ 76,00', oldPrice: 'R$ 84,90', img: 'https://www.bubbles.com.br/cdn/shop/files/6ebe0677cb5b1163b2a07ae888e8cb8d.png?v=1770382607' },
              { title: 'MÁSCARA PET RECONSTRUTORA PRO (EGO) 500ML', price: 'R$ 108,90', oldPrice: 'R$ 120,90', img: 'https://www.bubbles.com.br/cdn/shop/files/384a00dbc5de69635d07220eb048003c.png?v=1770382607' }
            ].map((product, idx) => (
              <div key={idx} className="group flex flex-col items-center text-center">
                <div className="relative w-full aspect-square bg-gray-50 rounded-2xl overflow-hidden mb-4">
                  <Image src={product.img} alt={product.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-4 left-4 bg-[#0cb771] text-white text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wide">
                    10% OFF
                  </span>
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2 min-h-[40px]">{product.title}</h3>
                <div className="flex items-center gap-1 text-[#ffd600] mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                  <span className="text-xs text-gray-500 ml-1">(5)</span>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-gray-900">{product.price}</span>
                  <span className="text-xs text-gray-400 line-through">{product.oldPrice}</span>
                </div>
                <span className="text-xs text-gray-500 mb-4">4x de R$ 28,47 sem juros</span>
                <button className="w-full bg-[#0cb771] hover:bg-[#0a9b5f] text-white font-bold py-3 rounded-full transition-colors">
                  Comprar
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Recently Viewed Products */}
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-16 border-t border-gray-100">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">Vistos Recentemente</h2>
          
          <div className="relative">
            <button className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 w-10 h-10 bg-[#F4CDD4] text-gray-900 rounded-full flex items-center justify-center z-10 hover:scale-105 transition-transform">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 w-10 h-10 bg-[#F4CDD4] text-gray-900 rounded-full flex items-center justify-center z-10 hover:scale-105 transition-transform">
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-hidden">
              {[
                { title: 'KIT PET CRONOGRAMA DE PELAGEM PRO (EGO) (3 ITENS)', price: 'R$ 294,90', oldPrice: 'R$ 346,90', img: 'https://www.bubbles.com.br/cdn/shop/files/pro_kit-cronograma.jpg?v=1770382607', badge: '15% OFF' },
                { title: 'PERFUME PET PINEAPPLE ESSENTIAL 500ML', price: 'R$ 155,90', oldPrice: 'R$ 172,39', img: 'https://www.bubbles.com.br/cdn/shop/files/8237446c6f642cc24ada71968fec2b4a.png?v=1770382607', badge: '10% OFF' },
                { title: 'GEL MODELADOR PET ANTIFRIZZ PRO 15ML', price: 'R$ 45,90', oldPrice: '', img: 'https://www.bubbles.com.br/cdn/shop/files/abaa0f0f20c20887a7b6fe398fe0c8a3.png?v=1770382607', badge: '' },
                { title: 'SHAMPOO PET NEUTRO PRO (EGO) 5L (1:10)', price: 'R$ 386,90', oldPrice: 'R$ 429,90', img: 'https://www.bubbles.com.br/cdn/shop/files/62bf7e8850e61670429db89ad8e96d0c.png?v=1770382607', badge: '10% OFF' }
              ].map((product, idx) => (
                <div key={idx} className="group flex flex-col items-center text-center">
                  <div className="relative w-full aspect-square bg-gray-50 rounded-2xl overflow-hidden mb-4">
                    <Image src={product.img} alt={product.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    {product.badge && (
                      <span className="absolute top-4 left-4 bg-[#0cb771] text-white text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wide">
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2 min-h-[40px]">{product.title}</h3>
                  <div className="flex items-center gap-1 text-[#ffd600] mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                    <span className="text-xs text-gray-500 ml-1">(11)</span>
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-gray-900">{product.price}</span>
                    {product.oldPrice && <span className="text-xs text-gray-400 line-through">{product.oldPrice}</span>}
                  </div>
                  <span className="text-xs text-gray-500 mb-4">6x de R$ 49,15 sem juros</span>
                  <button className="w-full bg-[#0cb771] hover:bg-[#0a9b5f] text-white font-bold py-3 rounded-full transition-colors">
                    Comprar
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tolstoy Shoppable Video Carousel Mock */}
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-16">
          <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4">
             {[1, 2, 3, 4, 5].map((item) => (
               <div key={item} className="relative w-64 h-96 flex-shrink-0 bg-gray-200 rounded-2xl overflow-hidden group cursor-pointer">
                 <Image src="https://www.bubbles.com.br/cdn/shop/files/pro_kit-cronograma.jpg?v=1770382607" alt="Video thumbnail" fill className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                 <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl p-3 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg relative overflow-hidden flex-shrink-0">
                      <Image src="https://www.bubbles.com.br/cdn/shop/files/pro_kit-cronograma.jpg?v=1770382607" alt="Product" fill className="object-cover" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-gray-900 line-clamp-1">KIT PET CRONOGRAMA...</span>
                      <span className="text-[10px] text-gray-500">R$ 294,90</span>
                    </div>
                 </div>
               </div>
             ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-[#F4CDD4] py-16">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Receba nossas dicas e novidades</h2>
            <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
              <input 
                type="email" 
                placeholder="Digite seu email" 
                className="flex-grow h-12 px-6 rounded-full border-none focus:ring-2 focus:ring-gray-900 outline-none text-gray-900"
                required
              />
              <button 
                type="submit" 
                className="h-12 px-8 bg-black hover:bg-gray-800 text-white font-bold rounded-full transition-colors flex-shrink-0"
              >
                Inscrever-se
              </button>
            </form>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
