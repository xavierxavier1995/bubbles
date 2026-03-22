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
          <section className="bg-gray-50 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start border border-gray-100">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0">
              <Database className="w-7 h-7 text-[#0D0C0D]" />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">1. Transparência na Coleta: O que guardamos e por quê?</h2>
              <p className="text-gray-700 leading-relaxed">
                As informações são solicitadas apenas para que o fornecimento do serviço seja viabilizado. Elas são coletadas por meios justos e legais, com o seu conhecimento e consentimento. Coletamos apenas o necessário para que sua operação não pare:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F4CDD4] mt-2 shrink-0"></div>
                  <span><strong>Dados Cadastrais e de Entrega (Nome, CPF, E-mail, Endereço):</strong> Essenciais para faturamento e para que nossa parceira logística, a <strong>Mandaê</strong>, entregue seus produtos essenciais com rapidez e precisão.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F4CDD4] mt-2 shrink-0"></div>
                  <span><strong>Dados dos Pets (Raça e Tipo de Pelo):</strong> Nosso diferencial. Usamos essas informações para enviar <strong>dicas educativas personalizadas</strong> de uso e diluição das linhas <strong>Ego / Pro e Basiq</strong>, ajudando você a extrair a máxima performance no banho e tosa.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* 2. Direitos do Titular */}
          <section className="bg-white rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start border border-gray-200 shadow-sm">
            <div className="w-14 h-14 bg-[#F4CDD4]/20 rounded-2xl flex items-center justify-center shrink-0">
              <UserCheck className="w-7 h-7 text-[#0D0C0D]" />
            </div>
            <div className="space-y-4 w-full">
              <h2 className="text-2xl font-bold">2. Seus Direitos (Art. 18 da LGPD)</h2>
              <p className="text-gray-700 leading-relaxed">
                Você tem controle total sobre as suas informações. A qualquer momento, você pode nos solicitar:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <strong className="block text-[#0D0C0D] mb-1">Acesso</strong>
                  <span className="text-sm text-gray-600">Saber exatamente quais dados seus nós possuímos.</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <strong className="block text-[#0D0C0D] mb-1">Correção</strong>
                  <span className="text-sm text-gray-600">Atualizar endereços ou informações incompletas.</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <strong className="block text-[#0D0C0D] mb-1">Exclusão</strong>
                  <span className="text-sm text-gray-600">Apagar seus dados da nossa base (exceto os exigidos por lei, como notas fiscais).</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <strong className="block text-[#0D0C0D] mb-1">Portabilidade</strong>
                  <span className="text-sm text-gray-600">Receber seus dados em formato estruturado.</span>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Segurança dos Dados */}
          <section className="bg-[#0D0C0D] text-white rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start shadow-lg">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
              <Lock className="w-7 h-7 text-[#F4CDD4]" />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">3. Segurança e Armazenamento dos Dados</h2>
              <p className="text-gray-300 leading-relaxed">
                Seus dados pessoais ficam armazenados apenas pelo tempo necessário para o fornecimento do serviço requisitado. Absolutamente todos são protegidos por meios comercialmente aceitáveis, evitando perda, roubo, acesso de terceiros, divulgação ou modificação não autorizada.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Utilizamos <strong>criptografia de ponta a ponta (SSL)</strong> em toda a sua navegação. Seus dados de pagamento são processados em um <strong>ambiente seguro sem nenhum acesso humano</strong> (padrão PCI DSS). Nos comprometemos em jamais realizar o compartilhamento dessas informações de identificação pessoal, exceto quando exigido por lei.
              </p>
            </div>
          </section>

          {/* 4. Uso de Cookies */}
          <section className="bg-gray-50 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start border border-gray-100">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0">
              <Cookie className="w-7 h-7 text-[#0D0C0D]" />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">4. Uso de Cookies (Sem complicação)</h2>
              <p className="text-gray-700 leading-relaxed">
                Sabe quando você entra no site pelo celular e seus itens favoritos já estão lá? Isso é graças aos cookies. 
              </p>
              <p className="text-gray-700 leading-relaxed">
                Usamos esses pequenos arquivos de texto para <strong>melhorar a sua experiência de navegação mobile</strong> e <strong>agilizar a reposição dos seus produtos favoritos</strong>. 
              </p>
              <p className="text-gray-700 leading-relaxed">
                Além disso, utilizamos cookies de ferramentas de publicidade e análise de forma genérica. O objetivo é entender o que você mais precisa para entregarmos os melhores produtos, preços e ofertas exclusivas para o seu banho e tosa, sem invadir sua privacidade.
              </p>
            </div>
          </section>

          {/* 5. Links Externos e Consentimento */}
          <section className="bg-white rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start border border-gray-200 shadow-sm">
            <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center shrink-0">
              <LinkIcon className="w-7 h-7 text-gray-700" />
            </div>
            <div className="space-y-4 w-full">
              <h2 className="text-2xl font-bold">5. Links Externos e Consentimento</h2>
              <p className="text-gray-700 leading-relaxed">
                A navegação em nosso site pode conter links para sites externos que não são conduzidos por nossa equipe. É importante ter consciência de que não possuímos controle sobre as práticas e conteúdos deles, não tendo responsabilidade sobre suas políticas de privacidade.
              </p>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mt-4">
                <p className="text-gray-700 leading-relaxed">
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
