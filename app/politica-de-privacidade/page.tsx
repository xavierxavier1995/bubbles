import { ShieldCheck, Database, UserCheck, Cookie, Mail, Lock, Heart, Link as LinkIcon, MessageCircle, Clock } from 'lucide-react';
import { Metadata } from 'next';
import SupportBanner from '@/components/SupportBanner';

export const metadata: Metadata = {
  title: 'Política de Privacidade | Bubbles® Cosméticos Pet Profissionais',
  description: 'Conheça nossa Política de Privacidade. Garantimos a segurança dos seus dados para você focar no que importa: agilidade no banho e tosa com qualidade profissional.',
};

export default function PrivacyPolicy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Política de Privacidade | Bubbles® Cosméticos Pet Profissionais",
    "description": "Conheça nossa Política de Privacidade. Garantimos a segurança dos seus dados para você focar no que importa: agilidade no banho e tosa com qualidade profissional.",
    "publisher": {
      "@type": "Organization",
      "name": "Bubbles",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bubbles.com.br/logo.png"
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#0D0C0D] font-sans selection:bg-[#F4CDD4] selection:text-[#0D0C0D]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4CDD4]/30 text-[#0D0C0D] text-sm font-semibold mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>LGPD 2025/2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0D0C0D]">
            Política de Privacidade
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Como nosso cliente, sua privacidade é o mais importante para nós! A política da loja Bubbles (CNPJ 48.818.475/0001-16) é manter o respeito em relação a sua privacidade e qualquer informação pessoal coletada em nosso site e ferramentas que operamos.
          </p>
        </section>

        <div className="space-y-8">
          {/* 1. Transparência na Coleta */}
          <section className="bg-gray-50 rounded-3xl p-6 md:p-8 mb-6 border border-gray-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-white border border-gray-200 rounded-xl p-3 flex-shrink-0 flex items-center justify-center">
                <Database className="w-6 h-6 text-[#0D0C0D]" />
              </div>
              <h2 className="text-lg font-bold text-gray-900">1. Transparência na Coleta: o que guardamos e por quê?</h2>
            </div>
            <div className="text-left text-gray-600 space-y-4">
              <p className="leading-relaxed">
                As informações são solicitadas exclusivamente para viabilizar o fornecimento dos nossos produtos e serviços. Elas são coletadas por meios justos e legais, com o seu conhecimento e consentimento, sempre limitadas ao necessário para garantir uma operação eficiente.
              </p>
              <ul className="space-y-3 text-left inline-block w-full">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F4CDD4] mt-2 shrink-0"></div>
                  <span><strong>Dados cadastrais e de entrega (nome, CPF/CNPJ, e-mail e endereço):</strong> essenciais para faturamento, comunicação e para que nossa parceira logística realize a entrega com agilidade e precisão.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* 2. Direitos do Titular */}
          <section className="bg-white rounded-3xl p-6 md:p-8 mb-6 border border-gray-200 shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-white border border-gray-200 rounded-xl p-3 flex-shrink-0 flex items-center justify-center">
                <UserCheck className="w-6 h-6 text-[#0D0C0D]" />
              </div>
              <h2 className="text-lg font-bold text-gray-900">2. Seus Direitos (Art. 18 da LGPD)</h2>
            </div>
            <div className="text-left text-gray-600 space-y-4">
              <p className="leading-relaxed">
                Você tem controle total sobre as suas informações. A qualquer momento, você pode nos solicitar:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <strong className="block text-[#0D0C0D] mb-1">Acesso</strong>
                  <span className="text-sm">Saber exatamente quais dados seus nós possuímos.</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <strong className="block text-[#0D0C0D] mb-1">Correção</strong>
                  <span className="text-sm">Atualizar endereços ou informações incompletas.</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <strong className="block text-[#0D0C0D] mb-1">Exclusão</strong>
                  <span className="text-sm">Apagar seus dados da nossa base (exceto os exigidos por lei, como notas fiscais).</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <strong className="block text-[#0D0C0D] mb-1">Portabilidade</strong>
                  <span className="text-sm">Receber seus dados em formato estruturado.</span>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Segurança dos Dados */}
          <section className="bg-[#0D0C0D] text-white rounded-3xl p-6 md:p-8 mb-6 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-white/10 border border-white/20 rounded-xl p-3 flex-shrink-0 flex items-center justify-center">
                <Lock className="w-6 h-6 text-[#F4CDD4]" />
              </div>
              <h2 className="text-lg font-bold text-white">3. Segurança e Armazenamento dos Dados</h2>
            </div>
            <div className="text-left text-gray-300 space-y-4">
              <p className="leading-relaxed">
                Seus dados pessoais ficam armazenados apenas pelo tempo necessário para o fornecimento do serviço requisitado. Absolutamente todos são protegidos por meios comercialmente aceitáveis, evitando perda, roubo, acesso de terceiros, divulgação ou modificação não autorizada.
              </p>
              <p className="leading-relaxed">
                Utilizamos <strong>criptografia de ponta a ponta (SSL)</strong> em toda a sua navegação. Seus dados de pagamento são processados em um <strong>ambiente seguro sem nenhum acesso humano</strong> (padrão PCI DSS). Nos comprometemos em jamais realizar o compartilhamento dessas informações de identificação pessoal, exceto quando exigido por lei.
              </p>
            </div>
          </section>

          {/* 4. Uso de Cookies */}
          <section className="bg-gray-50 rounded-3xl p-6 md:p-8 mb-6 border border-gray-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-white border border-gray-200 rounded-xl p-3 flex-shrink-0 flex items-center justify-center">
                <Cookie className="w-6 h-6 text-[#0D0C0D]" />
              </div>
              <h2 className="text-lg font-bold text-gray-900">4. Política de Cookies e Rastreamento</h2>
            </div>
            <div className="text-left text-gray-600 space-y-4">
              <p className="leading-relaxed">
                Coletamos dados anonimizados para análise via ferramentas de publicidade (sem acesso direto da marca à identidade do usuário) para otimizar produtos e oferecer cupons e condições exclusivas. A segurança dos seus dados é prioridade absoluta na Bubbles.
              </p>
            </div>
          </section>

          {/* 5. Links Externos e Consentimento */}
          <section className="bg-white rounded-3xl p-6 md:p-8 mb-6 border border-gray-200 shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-white border border-gray-200 rounded-xl p-3 flex-shrink-0 flex items-center justify-center">
                <LinkIcon className="w-6 h-6 text-gray-700" />
              </div>
              <h2 className="text-lg font-bold text-gray-900">5. Links Externos e Consentimento</h2>
            </div>
            <div className="text-left text-gray-600 space-y-4">
              <p className="leading-relaxed">
                A navegação em nosso site pode conter links para sites externos que não são conduzidos por nossa equipe. É importante ter consciência de que não possuímos controle sobre as práticas e conteúdos deles, não tendo responsabilidade sobre suas políticas de privacidade.
              </p>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mt-4">
                <p className="leading-relaxed">
                  Você é totalmente livre para recusar e não fornecer suas informações pessoais. Entretanto, é importante ressaltar que essa ação pode resultar no não fornecimento do serviço solicitado. <strong>O uso contínuo de nosso site será entendido como aceitação completa das práticas deste termo de privacidade.</strong>
                </p>
              </div>
            </div>
          </section>


        </div>

        <SupportBanner pageName="Política de Privacidade" />
      </main>
    </div>
  );
}
