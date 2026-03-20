import { Metadata } from 'next';
import { DilutionCalculator } from '@/components/DilutionCalculator';
import { Beaker, Droplets, AlertTriangle, ShieldCheck, CheckCircle2, Package, ArrowRight, MessageCircle, FlaskConical, Sparkles, TrendingUp, Shield, Info, PlayCircle } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Guia de Diluição Pet Profissional | Calculadora Bubbles',
  description: 'Aprenda a diluir shampoos e condicionadores pet corretamente. Use nossa calculadora de diluição online e descubra como os produtos Bubbles garantem máximo rendimento e segurança biológica.',
  keywords: 'diluição pet, como diluir shampoo pet, calculadora de diluição, banho e tosa, rendimento shampoo pet, Bubbles cosmética pet',
};

export default function DilutionGuide() {
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

      <main className="max-w-6xl mx-auto px-6 md:px-12 py-8 space-y-16">
        
        {/* Hero Section */}
        <section className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          <div className="space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F4CDD4]/30 text-[#0D0C0D] text-sm font-bold">
              <FlaskConical className="w-4 h-4" />
              <span>Guia Profissional</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0D0C0D] leading-tight">
              Máximo Rendimento com Segurança Total
            </h1>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              A diluição inteligente da Bubbles transforma galões em centenas de banhos lucrativos. Aprenda a preparar seus produtos garantindo a saúde dos pets e o lucro do seu banho e tosa.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-3xl p-6 md:p-8 border border-gray-100 flex items-center justify-between text-center shadow-sm">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-16 bg-[#F4CDD4]/30 border border-[#F4CDD4] rounded-b-md rounded-t-sm flex items-end justify-center pb-0.5">
                <div className="w-full h-1/4 bg-[#F4CDD4]/80 rounded-b-sm"></div>
              </div>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Produto</span>
            </div>
            
            <div className="text-2xl font-black text-gray-300">+</div>
            
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-16 bg-blue-50 border border-blue-200 rounded-b-md rounded-t-sm flex items-end justify-center pb-0.5">
                <div className="w-full h-3/4 bg-blue-300/50 rounded-b-sm"></div>
              </div>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Água</span>
            </div>
            
            <div className="text-2xl font-black text-gray-300">=</div>
            
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-20 bg-green-50 border border-green-200 rounded-b-lg rounded-t-sm flex items-end justify-center pb-1">
                <div className="w-full h-full bg-green-300/50 rounded-b-md"></div>
              </div>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Rendimento</span>
            </div>
          </div>
        </section>

        {/* SECTION 2: Calculadora de Diluição (Moved Up) */}
        <section className="space-y-10 scroll-mt-24" id="calculadora">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Calculadora de Diluição</h2>
            <p className="text-lg text-gray-600">Descubra exatamente quanto de água e produto você precisa para o volume desejado, sem confusão matemática.</p>
          </div>
          
          <DilutionCalculator />
        </section>

        {/* SECTION 3: A Ciência da Diluição e Benefícios (SEO Optimized) */}
        <section className="space-y-12 pt-12 border-t border-gray-100">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Por que a diluição é fundamental?</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              A diluição de cosméticos pet é uma prática essencial para profissionais de banho e tosa que buscam aliar alta rentabilidade à segurança dermatológica dos animais. Os produtos da Bubbles são formulados com <strong>alta concentração de ativos cosméticos</strong>, o que significa que a água é o veículo que ativa sua verdadeira performance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-[#F4CDD4] transition-colors">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <Sparkles className="w-6 h-6 text-[#F4CDD4]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Ativação Química</h3>
              <p className="text-gray-600 leading-relaxed">
                Adicionar água na proporção correta &quot;ativa&quot; o produto, garantindo a espalhabilidade ideal, limpeza profunda sem agressão e a liberação correta da fragrância. A água funciona como um condutor para os nutrientes penetrarem na pelagem.
              </p>
            </div>
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-[#F4CDD4] transition-colors">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <TrendingUp className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Rentabilidade Extrema</h3>
              <p className="text-gray-600 leading-relaxed">
                Um galão de 5L da linha Ego / Pro (1:10), por exemplo, se transforma em até 55 litros de produto pronto para uso. Isso reduz drasticamente o custo por banho, aumentando a margem de lucro do seu negócio sem perder qualidade.
              </p>
            </div>
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-[#F4CDD4] transition-colors">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <Shield className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Enxágue Rápido</h3>
              <p className="text-gray-600 leading-relaxed">
                Produtos diluídos corretamente não deixam resíduos pesados na pelagem. Isso significa um enxágue muito mais rápido, economizando água, energia elétrica e tempo de secador, além de evitar alergias por acúmulo de produto.
              </p>
            </div>
          </div>

          {/* Disclaimers de Erro */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-red-50 border border-red-100 p-6 md:p-8 rounded-3xl flex gap-5 items-start">
              <AlertTriangle className="w-8 h-8 text-red-500 shrink-0 mt-1" />
              <div>
                <strong className="block text-xl text-red-900 mb-2">Diluir MENOS que o indicado:</strong>
                <p className="text-red-800 leading-relaxed">
                  Causa desperdício de produto e <strong>pode irritar a pele do pet</strong> (coceiras e vermelhidão) devido ao excesso de concentração de ativos que não foram ativados corretamente pela água. O pelo pode ficar pesado e opaco.
                </p>
              </div>
            </div>
            
            <div className="bg-orange-50 border border-orange-100 p-6 md:p-8 rounded-3xl flex gap-5 items-start">
              <Info className="w-8 h-8 text-orange-500 shrink-0 mt-1" />
              <div>
                <strong className="block text-xl text-orange-900 mb-2">Diluir MAIS que o indicado:</strong>
                <p className="text-orange-800 leading-relaxed">
                  Reduz drasticamente a eficácia da limpeza, o poder de hidratação e a fixação do perfume no pelo do animal, comprometendo a qualidade do seu serviço e a satisfação do cliente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: Passo a Passo (Redesigned) */}
        <section className="space-y-10 pt-12 border-t border-gray-100">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">A Regra de Ouro do Preparo</h2>
            <p className="text-lg text-gray-600">Siga estes dois passos simples para garantir a mistura perfeita e evitar desperdícios no seu lavatório.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Passo 1 */}
            <div className="bg-white border border-gray-200 p-8 md:p-10 rounded-3xl shadow-sm relative overflow-hidden group hover:border-blue-200 transition-colors">
              <div className="text-[12rem] font-black text-gray-50 absolute -right-8 -bottom-16 z-0 group-hover:text-blue-50 transition-colors leading-none">1</div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 border border-blue-100">
                  <Droplets className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Água Primeiro</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Coloque a água (em temperatura ambiente) no frasco misturador <strong>antes</strong> do produto. Isso evita a formação excessiva de espuma durante o preparo e garante que a medição do volume seja exata.
                </p>
              </div>
            </div>

            {/* Passo 2 */}
            <div className="bg-white border border-gray-200 p-8 md:p-10 rounded-3xl shadow-sm relative overflow-hidden group hover:border-[#F4CDD4] transition-colors">
              <div className="text-[12rem] font-black text-gray-50 absolute -right-8 -bottom-16 z-0 group-hover:text-[#F4CDD4]/10 transition-colors leading-none">2</div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#F4CDD4]/20 rounded-2xl flex items-center justify-center mb-8 border border-[#F4CDD4]/30">
                  <Beaker className="w-8 h-8 text-[#0D0C0D]" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Adicione o Produto</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Acrescente a quantidade de shampoo ou condicionador indicada para a proporção da sua linha (ex: 1:10 para Ego / Pro) e misture suavemente até homogeneizar por completo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: Frasco Diluidor (New) */}
        <section className="max-w-5xl mx-auto pt-12 border-t border-gray-100">
          <div className="bg-gradient-to-br from-[#F4CDD4]/20 to-white border border-[#F4CDD4]/30 rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 shadow-sm">
            <div className="w-full md:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-[#0D0C0D] text-xs font-bold uppercase tracking-wider border border-gray-100 shadow-sm">
                <FlaskConical className="w-4 h-4 text-[#F48FB1]" />
                Acessório Indispensável
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0D0C0D] leading-tight">
                Frasco Diluidor Bubbles
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                A ferramenta perfeita para garantir a proporção exata em todas as suas diluições. Com marcações precisas, você evita desperdícios e garante a máxima performance dos produtos.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#F48FB1]" />
                  Marcações de proporção claras (1:4 até 1:10)
                </li>
                <li className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#F48FB1]" />
                  Capacidade ideal de 500ml
                </li>
                <li className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#F48FB1]" />
                  Material resistente e durável
                </li>
              </ul>
              <div className="pt-4">
                <a 
                  href="https://www.bubbles.com.br/products/frasco-diluidor-groomer-bubbles-500ml?_pos=2&_psq=diluidor&_ss=e&_v=1.0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#0D0C0D] text-white font-bold px-8 py-4 rounded-xl hover:bg-gray-800 transition-colors shadow-md"
                >
                  Comprar Frasco Diluidor
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative aspect-square max-w-md mx-auto">
              <Image 
                src="https://www.bubbles.com.br/cdn/shop/files/bubbles_frasco-diluidor-frente-verso_500ml_fundo-branco.jpg?v=1770904481&width=1206"
                alt="Frasco Diluidor Bubbles 500ml"
                fill
                className="object-contain drop-shadow-xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>

        {/* SECTION 6: Regra das 24h (Subtle & Professional) */}
        <section className="max-w-4xl mx-auto pt-12">
          <div className="bg-amber-50 border border-amber-200 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start shadow-sm">
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center shrink-0 border border-amber-200">
              <ShieldCheck className="w-8 h-8 text-amber-600" />
            </div>
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider">
                Protocolo de Biossegurança
              </div>
              <h3 className="text-2xl font-bold text-amber-900">Atenção à validade da mistura (Regra das 24h)</h3>
              <p className="text-amber-800 leading-relaxed text-lg">
                Para garantir a máxima segurança biológica, <strong>dilua apenas a quantidade de produto que será utilizada no dia</strong>. 
              </p>
              <p className="text-amber-800/80 leading-relaxed">
                Para garantir a melhor performance e segurança, o ideal é utilizar água filtrada na mistura. Como a qualidade da água pode variar conforme a região, recomendamos diluir apenas o que for usar no dia, mantendo a integridade bacteriológica do produto.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 7: Vídeos Educativos (Shorts) */}
        <section className="pt-12 border-t border-gray-100">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Aprenda na Prática</h2>
            <p className="text-lg text-gray-600">Confira nossos tutoriais rápidos sobre as melhores práticas de diluição e uso dos produtos Bubbles.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Video 1 */}
            <div className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 shadow-sm group hover:shadow-md transition-all">
              <div className="relative aspect-[9/16] w-full bg-gray-200">
                <Image 
                  src="https://images.tcdn.com.br/img/editor/up/769798/Como_fazer_a_diluicao_correta_1.gif"
                  alt="Como fazer a diluição correta"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                    <PlayCircle className="w-8 h-8 text-[#0D0C0D] ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg text-[#0D0C0D] line-clamp-2">Como fazer a diluição correta passo a passo</h3>
              </div>
            </div>

            {/* Video 2 */}
            <div className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 shadow-sm group hover:shadow-md transition-all">
              <div className="relative aspect-[9/16] w-full bg-gray-200">
                <Image 
                  src="https://images.tcdn.com.br/img/editor/up/769798/Como_fazer_a_diluicao_correta_1.gif"
                  alt="Dicas de rendimento"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                    <PlayCircle className="w-8 h-8 text-[#0D0C0D] ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg text-[#0D0C0D] line-clamp-2">Dicas para maximizar o rendimento do seu galão</h3>
              </div>
            </div>

            {/* Video 3 */}
            <div className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 shadow-sm group hover:shadow-md transition-all">
              <div className="relative aspect-[9/16] w-full bg-gray-200">
                <Image 
                  src="https://images.tcdn.com.br/img/editor/up/769798/Como_fazer_a_diluicao_correta_1.gif"
                  alt="Erros comuns na diluição"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                    <PlayCircle className="w-8 h-8 text-[#0D0C0D] ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg text-[#0D0C0D] line-clamp-2">3 erros comuns na hora de diluir o shampoo</h3>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: Seção Comercial e Contato */}
        <section className="bg-gray-50 rounded-3xl p-8 md:p-16 border border-gray-100 mt-12">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Estoque Inteligente: Linha Ego / Pro 5L</h2>
            <p className="text-lg text-gray-600">Produtos de alta performance com diluição 1:10 para o máximo rendimento do seu negócio.</p>
          </div>

          {/* Placeholder for Shopify Liquid */}
          <div className="bg-white border-2 border-dashed border-gray-300 rounded-3xl p-12 md:p-20 text-center mb-12 shadow-sm">
            <Package className="w-16 h-16 text-gray-300 mx-auto mb-6" />
            <p className="text-gray-500 font-mono text-base md:text-lg">
              {`{% section 'featured-collection' %}`}
              <br/>
              <span className="text-sm text-gray-400 mt-4 block font-sans">(Espaço reservado para inserção do código Liquid no Shopify exibindo os galões de 5L)</span>
            </p>
          </div>

          <div className="bg-[#F4CDD4]/20 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 border border-[#F4CDD4]/30">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                <MessageCircle className="w-8 h-8 text-[#0D0C0D]" />
              </div>
              <div>
                <h4 className="font-bold text-2xl mb-1">Dúvida na mistura?</h4>
                <p className="text-gray-700 text-lg">Nossa equipe técnica está pronta para ajudar você.</p>
              </div>
            </div>
            <a 
              href="https://wa.me/5514996312932?text=Olá,%20tenho%20uma%20dúvida%20sobre%20diluição" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-[#0D0C0D] text-white font-bold px-10 py-5 rounded-2xl hover:bg-gray-800 transition-colors flex items-center justify-center gap-3 whitespace-nowrap text-lg shadow-lg shadow-black/10"
            >
              Fale com nossa técnica
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}
