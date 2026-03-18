import { AlertTriangle, Shield, Copyright, Store, UserPlus, Heart, Gavel, Lock } from 'lucide-react';

export default function TermsOfService() {
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

      <main className="max-w-4xl mx-auto px-6 md:px-12 py-16 space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D0C0D] text-white text-sm font-semibold mb-4">
            <Gavel className="w-4 h-4 text-[#F4CDD4]" />
            <span>Regras de Uso e Blindagem</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0D0C0D]">
            Termos de Serviço e Segurança
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Nossas regras existem para proteger o mercado profissional de banho e tosa. A Bubbles é sua parceira, e a transparência é o nosso compromisso com a qualidade do seu serviço.
          </p>
        </section>

        <div className="space-y-8">
          {/* 1. Elegibilidade */}
          <section className="bg-gray-50 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start border border-gray-100">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0">
              <UserPlus className="w-7 h-7 text-[#0D0C0D]" />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">1. Elegibilidade de Compra</h2>
              <p className="text-gray-700 leading-relaxed">
                A Bubbles desenvolve cosméticos de alta performance. Por isso, a compra de itens profissionais (como nossos galões de 5L) é <strong>destinada exclusivamente a maiores de 18 anos e profissionais atuantes do setor pet</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Ao realizar um pedido, você declara cumprir estes requisitos e estar apto a manusear produtos de uso técnico.
              </p>
            </div>
          </section>

          {/* 2. Uso Profissional e Responsabilidade */}
          <section className="bg-white rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start border border-gray-200 shadow-sm">
            <div className="w-14 h-14 bg-[#F4CDD4]/20 rounded-2xl flex items-center justify-center shrink-0">
              <AlertTriangle className="w-7 h-7 text-[#0D0C0D]" />
            </div>
            <div className="space-y-4 w-full">
              <h2 className="text-2xl font-bold">2. Uso Profissional e Responsabilidade</h2>
              <p className="text-gray-700 leading-relaxed">
                Nossas fórmulas são concentradas e exigem conhecimento técnico para garantir a eficácia e a segurança dos pets.
              </p>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mt-4 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Você declara estar ciente de que os produtos das linhas <strong>Ego, Basiq e Collora</strong> devem seguir rigorosamente o modo de uso técnico indicado nos rótulos e materiais de apoio (ex: <strong>diluição obrigatória de 1:10</strong> e uso do <strong>Spray Preparo</strong>).
                </p>
                <div className="bg-white p-4 rounded-xl border-l-4 border-[#0D0C0D] text-sm text-gray-600">
                  <strong>Isenção de Responsabilidade:</strong> A Bubbles isenta-se de qualquer responsabilidade por danos, reações ou resultados insatisfatórios decorrentes do <strong>uso inadequado, falta de diluição correta ou armazenamento impróprio</strong> dos produtos por parte do comprador.
                </div>
              </div>
            </div>
          </section>

          {/* 3. Política Anti-Revenda */}
          <section className="bg-gray-50 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start border border-gray-100">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0">
              <Store className="w-7 h-7 text-[#0D0C0D]" />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">3. Política Anti-Revenda (Proteção da Cadeia)</h2>
              <p className="text-gray-700 leading-relaxed">
                Para garantir a qualidade, a cadeia de custódia e a segurança biológica dos nossos cosméticos, <strong>é terminantemente proibida a revenda dos produtos Bubbles em marketplaces (como Shopee, Mercado Livre, Amazon, etc.)</strong> sem um contrato de distribuição prévio e formalizado.
              </p>
              <p className="text-gray-700 leading-relaxed">
                O descumprimento desta cláusula acarretará no bloqueio imediato do cadastro e medidas legais cabíveis para proteger a integridade da marca.
              </p>
            </div>
          </section>

          {/* 4. Propriedade Intelectual */}
          <section className="bg-white rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start border border-gray-200 shadow-sm">
            <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center shrink-0">
              <Copyright className="w-7 h-7 text-gray-700" />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">4. Propriedade Intelectual</h2>
              <p className="text-gray-700 leading-relaxed">
                Todos os ativos da Bubbles — incluindo <strong>logotipos, fotos das linhas, textos descritivos, vídeos e fórmulas</strong> — são de nossa propriedade exclusiva e protegidos por leis de direitos autorais.
              </p>
              <p className="text-gray-700 leading-relaxed">
                É <strong>proibida a cópia, reprodução ou uso comercial não autorizado</strong> de qualquer material do nosso site ou redes sociais sem consentimento prévio por escrito.
              </p>
            </div>
          </section>

          {/* 5. Segurança SSL e Site Blindado */}
          <section className="bg-[#0D0C0D] text-white rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start shadow-lg">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
              <Shield className="w-7 h-7 text-[#F4CDD4]" />
            </div>
            <div className="space-y-4 w-full">
              <h2 className="text-2xl font-bold">5. Segurança SSL e Site Blindado</h2>
              <p className="text-gray-300 leading-relaxed">
                Sua transação está protegida de ponta a ponta contra fraudes.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <strong className="flex items-center gap-2 text-white mb-2">
                    <Lock className="w-4 h-4 text-[#F4CDD4]" /> Criptografia SSL
                  </strong>
                  <span className="text-sm text-gray-400">Todos os dados trafegados entre seu dispositivo e nossos servidores são embaralhados, impedindo interceptações.</span>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <strong className="flex items-center gap-2 text-white mb-2">
                    <Shield className="w-4 h-4 text-[#F4CDD4]" /> Site Seguro
                  </strong>
                  <span className="text-sm text-gray-400">Nossa infraestrutura é auditada continuamente para garantir um ambiente blindado contra ataques cibernéticos.</span>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
