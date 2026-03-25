import Image from "next/image";
import {
  RefreshCcw,
  Calendar,
  ShieldAlert,
  Smartphone,
  CreditCard,
  ChevronDown,
  Package,
  MessageCircle,
  ArrowRight,
  Truck,
  CheckCircle2,
  HeartPulse,
  ClipboardCheck,
  Plus,
  X,
} from "lucide-react";
import { Metadata } from "next";
import SupportBanner from "@/components/SupportBanner";

export const metadata: Metadata = {
  title:
    "Política de Troca e Devoluções | Bubbles® Cosméticos Pet Profissionais",
  description:
    "Transparência e segurança para o seu pet shop. Conheça nossa política de trocas e devoluções com suporte técnico humanizado.",
};

export default function ReturnPolicy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Política de Troca e Devoluções | Bubbles® Cosméticos Pet Profissionais",
    description:
      "Transparência e segurança para o seu pet shop. Conheça nossa política de trocas e devoluções com suporte técnico humanizado.",
    publisher: {
      "@type": "Organization",
      name: "Bubbles",
      logo: {
        "@type": "ImageObject",
        url: "https://bubbles.com.br/logo.png",
      },
    },
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
          <div className="font-extrabold text-2xl tracking-tighter text-[#0D0C0D]">
            Bubbles
          </div>
        </div>
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#" className="hover:text-[#F4CDD4] transition-colors">
            Produtos
          </a>
          <a href="#" className="hover:text-[#F4CDD4] transition-colors">
            Linhas
          </a>
          <a href="#" className="hover:text-[#F4CDD4] transition-colors">
            Comunidade VIP
          </a>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 md:px-12 py-16 space-y-24">
        {/* Hero Section */}
        <section className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4CDD4]/30 text-[#0D0C0D] text-sm font-semibold mb-4">
            <RefreshCcw className="w-4 h-4" />
            <span>Trocas e Devoluções</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-[#0D0C0D]">
            Política de Troca e Devoluções
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Transparência e segurança para você e seu pet shop.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          {/* Direito de Arrependimento */}
          <div className="bg-gray-50 rounded-3xl p-6 md:p-8 mb-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-white border border-gray-200 rounded-xl p-3 flex-shrink-0 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-[#0D0C0D]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                Direito de Arrependimento (7 Dias)
              </h3>
            </div>
            <div className="text-left text-gray-600 space-y-4">
              <p className="leading-relaxed">
                Conforme o Código de Defesa do Consumidor, o prazo para
                desistência é de <strong>7 dias corridos</strong> após o
                recebimento.
              </p>
              <div className="bg-white p-4 rounded-xl border border-gray-100 text-sm">
                <strong className="text-[#0D0C0D]">Condição:</strong> O produto
                deve estar lacrado, sem uso e em embalagem original. Brindes e
                amostras de campanhas devem ser devolvidos junto ao pedido.
              </div>
            </div>
          </div>

          {/* Protocolo de Avarias e Vícios */}
          <div className="bg-gray-50 rounded-3xl p-6 md:p-8 mb-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-white border border-gray-200 rounded-xl p-3 flex-shrink-0 flex items-center justify-center">
                <ShieldAlert className="w-6 h-6 text-[#0D0C0D]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                Protocolo de Avarias e Vícios (Segurança Industrial)
              </h3>
            </div>
            <div className="text-left text-gray-600 space-y-4">
              <p className="text-sm leading-relaxed">
                <strong className="text-[#0D0C0D]">No Recebimento:</strong> Caso a
                embalagem apresente danos ou vazamentos visíveis (mesmo com nossa
                embalagem reforçada), recuse a entrega e anote o motivo no verso
                da nota fiscal.
              </p>
              <p className="text-sm leading-relaxed">
                <strong className="text-[#0D0C0D]">Vício Oculto:</strong> Prazo de{" "}
                <strong>30 dias</strong> para relatar defeitos de fabricação que
                não decorram de mau uso profissional.
              </p>
            </div>
          </div>

          {/* Como Solicitar */}
          <div className="bg-gray-50 rounded-3xl p-6 md:p-8 mb-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-white border border-gray-200 rounded-xl p-3 flex-shrink-0 flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-[#0D0C0D]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                Como Solicitar
              </h3>
            </div>
            <div className="text-left text-gray-600 space-y-4">
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#F4CDD4]/30 flex items-center justify-center text-sm font-bold shrink-0">
                    1
                  </div>
                  <span>Acesse &quot;Meus Pedidos&quot; no seu Perfil.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#F4CDD4]/30 flex items-center justify-center text-sm font-bold shrink-0">
                    2
                  </div>
                  <span>Clique em &quot;Solicitar Troca/Devolução&quot;.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#F4CDD4]/30 flex items-center justify-center text-sm font-bold shrink-0">
                    3
                  </div>
                  <span>
                    Envie fotos do lote e da avaria para validação técnica via
                    E-mail (
                    <a
                      href="mailto:ajuda@bubbles.com.br"
                      className="text-inherit underline hover:text-[#F48FB1] transition-colors font-medium"
                    >
                      ajuda@bubbles.com.br
                    </a>
                    ) ou WhatsApp (
                    <a
                      href="https://wa.me/5514997646454"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-inherit underline hover:text-[#F48FB1] transition-colors font-medium"
                    >
                      (14) 99764-6454
                    </a>
                    ).
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Regras de Reembolso */}
          <div className="bg-gray-50 rounded-3xl p-6 md:p-8 mb-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-white border border-gray-200 rounded-xl p-3 flex-shrink-0 flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-[#0D0C0D]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Regras de Reembolso</h3>
            </div>
            <div className="text-left text-gray-600 space-y-4">
              <div className="bg-white p-4 rounded-xl border border-gray-100">
                <strong className="block text-[#0D0C0D] mb-1">
                  Cartão de Crédito
                </strong>
                <span className="text-sm">
                  Estorno em até duas faturas após conferência.
                </span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-100">
                <strong className="block text-[#0D0C0D] mb-1">PIX</strong>
                <span className="text-sm">
                  Reembolso em conta do titular em até{" "}
                  <strong>30 dias úteis</strong> após aprovação de qualidade.
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                * Alguns reembolsos dependem obrigatoriamente do retorno da
                mercadoria ao nosso centro de distribuição. Em caso de dúvidas,{" "}
                <a
                  href="https://wa.me/5514997646454?text=Ol%C3%A1%2C%20preciso%20de%20suporte%20t%C3%A9cnico%20Bubbles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-inherit underline hover:text-[#F48FB1] transition-colors font-medium"
                >
                  entre em contato aqui
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* Novas Seções Estratégicas B2B */}
        <section className="space-y-12 pt-12 border-t border-gray-100">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">
              Parceria Técnica e Transparência
            </h2>
            <p className="text-gray-600">
              Entendemos a responsabilidade do seu banho e tosa. Nossas regras
              existem para garantir a segurança dos pets que você atende.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Protocolo de Biossegurança */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 pt-12 shadow-sm relative flex flex-col items-center text-center">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center border-4 border-white shadow-sm">
                <ShieldAlert className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">Protocolo de Biossegurança (Lacre)</h3>
              <div className="text-sm text-gray-600 leading-relaxed">
                <p className="mb-4">
                  Por se tratar de cosméticos profissionais de alta performance, a
                  Bubbles segue normas rígidas de segurança biológica. Para
                  garantir a integridade da formulação e a saúde dos pets:
                </p>
                <ul className="space-y-3 text-left">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                    <span>
                      Produtos com <strong>lacre rompido</strong> não podem ser
                      devolvidos por arrependimento.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                    <span>
                      Trocas de itens abertos são aceitas{" "}
                      <strong>apenas em caso de vício de fabricação</strong>{" "}
                      comprovado.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Reação Adversa */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 pt-12 shadow-sm relative flex flex-col items-center text-center">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#F48FB1]/30 flex items-center justify-center border-4 border-white shadow-sm">
                <HeartPulse className="w-6 h-6 text-[#0D0C0D]" />
              </div>
              <h3 className="text-lg font-bold mb-2">Reação Adversa no Pet</h3>
              <div className="text-sm text-gray-600 leading-relaxed">
                <p className="mb-4">
                  Nossos produtos são Veganos, Hipoalergênicos e testados
                  dermatologicamente. Porém, sabemos que cada animal é único e
                  possui suas particularidades. Se notar qualquer sensibilidade:
                </p>
                <ul className="space-y-3 text-left">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0D0C0D] mt-0.5 shrink-0" />
                    <span>
                      <strong>Suspenda o uso</strong> imediatamente no animal
                      afetado.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0D0C0D] mt-0.5 shrink-0" />
                    <span>
                      <a
                        href="https://wa.me/5514997646454?text=Ol%C3%A1%2C%20preciso%20de%20suporte%20t%C3%A9cnico%20Bubbles"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold underline hover:text-[#F4CDD4] transition-colors"
                      >
                        Entre em contato imediatamente
                      </a>{" "}
                      com nosso suporte técnico para receber orientação
                      especializada e darmos andamento ao protocolo de saúde.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Análise Técnica */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 pt-12 shadow-sm relative flex flex-col items-center text-center">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center border-4 border-white shadow-sm">
                <ClipboardCheck className="w-6 h-6 text-gray-700" />
              </div>
              <h3 className="text-lg font-bold mb-2">Análise Técnica Industrial</h3>
              <div className="text-sm text-gray-600 leading-relaxed">
                <p className="mb-4">
                  Para garantir que você sempre receba o melhor, todo produto
                  devolvido passa por uma rigorosa auditoria em nossa fábrica em
                  Lençóis Paulista.
                </p>
                <ul className="space-y-3 text-left">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gray-700 mt-0.5 shrink-0" />
                    <span>
                      O prazo de análise é de <strong>até 30 dias</strong> após o
                      recebimento do item na fábrica.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gray-700 mt-0.5 shrink-0" />
                    <span>
                      Esse processo segue práticas de{" "}
                      <strong>excelência industrial</strong> para atestar a
                      qualidade do lote e a segurança da sua operação.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative py-20 px-6 md:px-12 bg-gradient-to-br from-[#fff0f3] via-[#f0f7ff] to-[#f5f0ff] overflow-hidden rounded-3xl">
          {/* Decorative Blobs */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#ffcce6] mix-blend-multiply filter blur-[100px] opacity-40 animate-blob"></div>
            <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#cce0ff] mix-blend-multiply filter blur-[100px] opacity-40 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] rounded-full bg-[#e6ccff] mix-blend-multiply filter blur-[100px] opacity-30 animate-blob animation-delay-4000"></div>
          </div>

          <div className="relative z-10 text-center max-w-2xl mx-auto space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A]">
              Dúvidas Frequentes
            </h2>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-3">
            <details
              open
              className="group rounded-2xl transition-all duration-300 overflow-hidden backdrop-blur-sm border bg-white/40 border-transparent hover:bg-white/60 open:bg-white open:shadow-sm open:border-white/50 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="w-full text-left px-6 py-5 flex items-center justify-between gap-6 cursor-pointer focus:outline-none">
                <h3 className="text-[15px] leading-snug transition-colors pr-4 text-gray-700 font-medium group-open:text-[#1A1A1A] group-open:font-bold">
                  Comprei em um distribuidor, posso trocar no site?
                </h3>
                <div className="shrink-0 flex items-center justify-center transition-all duration-300">
                  <Plus
                    className="w-5 h-5 text-gray-400 group-open:hidden"
                    strokeWidth={2}
                  />
                  <X
                    className="w-5 h-5 text-[#1A1A1A] hidden group-open:block"
                    strokeWidth={2}
                  />
                </div>
              </summary>
              <div className="px-6 pb-6 text-[15px] leading-relaxed text-gray-600">
                A troca deve ocorrer no local da compra.
              </div>
            </details>

            <details className="group rounded-2xl transition-all duration-300 overflow-hidden backdrop-blur-sm border bg-white/40 border-transparent hover:bg-white/60 open:bg-white open:shadow-sm open:border-white/50 [&_summary::-webkit-details-marker]:hidden">
              <summary className="w-full text-left px-6 py-5 flex items-center justify-between gap-6 cursor-pointer focus:outline-none">
                <h3 className="text-[15px] leading-snug transition-colors pr-4 text-gray-700 font-medium group-open:text-[#1A1A1A] group-open:font-bold">
                  O produto causou reação no pet?
                </h3>
                <div className="shrink-0 flex items-center justify-center transition-all duration-300">
                  <Plus
                    className="w-5 h-5 text-gray-400 group-open:hidden"
                    strokeWidth={2}
                  />
                  <X
                    className="w-5 h-5 text-[#1A1A1A] hidden group-open:block"
                    strokeWidth={2}
                  />
                </div>
              </summary>
              <div className="px-6 pb-6 text-[15px] leading-relaxed text-gray-600">
                Direcionar para suporte técnico humanizado via{" "}
                <a
                  href="mailto:ajuda@bubbles.com.br"
                  className="text-inherit underline hover:text-[#F48FB1] transition-colors font-medium"
                >
                  ajuda@bubbles.com.br
                </a>{" "}
                ou pelo nosso{" "}
                <a
                  href="https://wa.me/5514997646454?text=Ol%C3%A1%2C%20preciso%20de%20suporte%20t%C3%A9cnico%20Bubbles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline hover:text-[#F4CDD4] transition-colors"
                >
                  WhatsApp
                </a>
                .
              </div>
            </details>

            <details className="group rounded-2xl transition-all duration-300 overflow-hidden backdrop-blur-sm border bg-white/40 border-transparent hover:bg-white/60 open:bg-white open:shadow-sm open:border-white/50 [&_summary::-webkit-details-marker]:hidden">
              <summary className="w-full text-left px-6 py-5 flex items-center justify-between gap-6 cursor-pointer focus:outline-none">
                <h3 className="text-[15px] leading-snug transition-colors pr-4 text-gray-700 font-medium group-open:text-[#1A1A1A] group-open:font-bold">
                  O produto chegou com vazamento. O que devo fazer?
                </h3>
                <div className="shrink-0 flex items-center justify-center transition-all duration-300">
                  <Plus
                    className="w-5 h-5 text-gray-400 group-open:hidden"
                    strokeWidth={2}
                  />
                  <X
                    className="w-5 h-5 text-[#1A1A1A] hidden group-open:block"
                    strokeWidth={2}
                  />
                </div>
              </summary>
              <div className="px-6 pb-6 text-[15px] leading-relaxed text-gray-600">
                Mesmo com nossa embalagem reforçada anti-vazamento, se notar
                qualquer dano no ato da entrega, recuse o recebimento e anote o
                motivo no verso da nota fiscal. Se notar após a abertura, entre
                em contato em até 24h via{" "}
                <a
                  href="https://wa.me/5514997646454?text=Ol%C3%A1%2C%20preciso%20de%20suporte%20t%C3%A9cnico%20Bubbles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline hover:text-[#F4CDD4] transition-colors"
                >
                  WhatsApp
                </a>{" "}
                com fotos do lote.
              </div>
            </details>

            <details className="group rounded-2xl transition-all duration-300 overflow-hidden backdrop-blur-sm border bg-white/40 border-transparent hover:bg-white/60 open:bg-white open:shadow-sm open:border-white/50 [&_summary::-webkit-details-marker]:hidden">
              <summary className="w-full text-left px-6 py-5 flex items-center justify-between gap-6 cursor-pointer focus:outline-none">
                <h3 className="text-[15px] leading-snug transition-colors pr-4 text-gray-700 font-medium group-open:text-[#1A1A1A] group-open:font-bold">
                  Comprei um Kit Profissional e quero devolver apenas um item. É
                  possível?
                </h3>
                <div className="shrink-0 flex items-center justify-center transition-all duration-300">
                  <Plus
                    className="w-5 h-5 text-gray-400 group-open:hidden"
                    strokeWidth={2}
                  />
                  <X
                    className="w-5 h-5 text-[#1A1A1A] hidden group-open:block"
                    strokeWidth={2}
                  />
                </div>
              </summary>
              <div className="px-6 pb-6 text-[15px] leading-relaxed text-gray-600">
                Não. Para devolução por arrependimento, o kit deve ser devolvido
                em sua totalidade, incluindo brindes e acessórios que acompanham
                a promoção, mantendo a integridade do conjunto industrial.
              </div>
            </details>

            <details className="group rounded-2xl transition-all duration-300 overflow-hidden backdrop-blur-sm border bg-white/40 border-transparent hover:bg-white/60 open:bg-white open:shadow-sm open:border-white/50 [&_summary::-webkit-details-marker]:hidden">
              <summary className="w-full text-left px-6 py-5 flex items-center justify-between gap-6 cursor-pointer focus:outline-none">
                <h3 className="text-[15px] leading-snug transition-colors pr-4 text-gray-700 font-medium group-open:text-[#1A1A1A] group-open:font-bold">
                  O bico dosador/válvula do meu produto apresentou defeito.
                  Vocês trocam?
                </h3>
                <div className="shrink-0 flex items-center justify-center transition-all duration-300">
                  <Plus
                    className="w-5 h-5 text-gray-400 group-open:hidden"
                    strokeWidth={2}
                  />
                  <X
                    className="w-5 h-5 text-[#1A1A1A] hidden group-open:block"
                    strokeWidth={2}
                  />
                </div>
              </summary>
              <div className="px-6 pb-6 text-[15px] leading-relaxed text-gray-600">
                Sim. Caso acessórios de aplicação apresentem defeitos de
                fabricação em até <strong>30 dias</strong>, enviamos a reposição
                da peça via <strong>frete expresso</strong> após comprovação por
                vídeo, garantindo que sua operação não pare.
              </div>
            </details>

            <details className="group rounded-2xl transition-all duration-300 overflow-hidden backdrop-blur-sm border bg-white/40 border-transparent hover:bg-white/60 open:bg-white open:shadow-sm open:border-white/50 [&_summary::-webkit-details-marker]:hidden">
              <summary className="w-full text-left px-6 py-5 flex items-center justify-between gap-6 cursor-pointer focus:outline-none">
                <h3 className="text-[15px] leading-snug transition-colors pr-4 text-gray-700 font-medium group-open:text-[#1A1A1A] group-open:font-bold">
                  Usei o produto e o resultado não foi o esperado. Posso trocar?
                </h3>
                <div className="shrink-0 flex items-center justify-center transition-all duration-300">
                  <Plus
                    className="w-5 h-5 text-gray-400 group-open:hidden"
                    strokeWidth={2}
                  />
                  <X
                    className="w-5 h-5 text-[#1A1A1A] hidden group-open:block"
                    strokeWidth={2}
                  />
                </div>
              </summary>
              <div className="px-6 pb-6 text-[15px] leading-relaxed text-gray-600">
                Trocas por insatisfação com o resultado técnico devem ser
                precedidas de uma consultoria com nosso suporte humanizado.
                Muitas vezes, um simples ajuste na diluição (ex:{" "}
                <strong>1:10 na Linha Ego / Pro</strong>) ou no modo de
                aplicação (como o uso do{" "}
                <strong>Spray Preparo na Linha Collora</strong>) resolve a
                questão. Não trocamos produtos abertos com mais de 10% de uso.
                Em caso de dúvidas, contate nosso{" "}
                <a
                  href="https://wa.me/5514997646454?text=Ol%C3%A1%2C%20preciso%20de%20suporte%20t%C3%A9cnico%20Bubbles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline hover:text-[#F4CDD4] transition-colors"
                >
                  WhatsApp
                </a>
                .
              </div>
            </details>

            <details className="group rounded-2xl transition-all duration-300 overflow-hidden backdrop-blur-sm border bg-white/40 border-transparent hover:bg-white/60 open:bg-white open:shadow-sm open:border-white/50 [&_summary::-webkit-details-marker]:hidden">
              <summary className="w-full text-left px-6 py-5 flex items-center justify-between gap-6 cursor-pointer focus:outline-none">
                <h3 className="text-[15px] leading-snug transition-colors pr-4 text-gray-700 font-medium group-open:text-[#1A1A1A] group-open:font-bold">
                  Comprei o produto em uma feira ou evento (ex: Pet South
                  America). Como troco?
                </h3>
                <div className="shrink-0 flex items-center justify-center transition-all duration-300">
                  <Plus
                    className="w-5 h-5 text-gray-400 group-open:hidden"
                    strokeWidth={2}
                  />
                  <X
                    className="w-5 h-5 text-[#1A1A1A] hidden group-open:block"
                    strokeWidth={2}
                  />
                </div>
              </summary>
              <div className="px-6 pb-6 text-[15px] leading-relaxed text-gray-600">
                Compras realizadas em eventos seguem o canal de suporte técnico
                humanizado direto do evento, não o fluxo do e-commerce. Entre em
                contato através do nosso{" "}
                <a
                  href="https://wa.me/5514997646454?text=Ol%C3%A1%2C%20preciso%20de%20suporte%20t%C3%A9cnico%20Bubbles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-inherit underline hover:text-[#F48FB1] transition-colors font-medium"
                >
                  WhatsApp de suporte
                </a>{" "}
                apresentando o comprovante de compra emitido no stand oficial.
              </div>
            </details>

            <details className="group rounded-2xl transition-all duration-300 overflow-hidden backdrop-blur-sm border bg-white/40 border-transparent hover:bg-white/60 open:bg-white open:shadow-sm open:border-white/50 [&_summary::-webkit-details-marker]:hidden">
              <summary className="w-full text-left px-6 py-5 flex items-center justify-between gap-6 cursor-pointer focus:outline-none">
                <h3 className="text-[15px] leading-snug transition-colors pr-4 text-gray-700 font-medium group-open:text-[#1A1A1A] group-open:font-bold">
                  Como funciona a troca de brindes exclusivos?
                </h3>
                <div className="shrink-0 flex items-center justify-center transition-all duration-300">
                  <Plus
                    className="w-5 h-5 text-gray-400 group-open:hidden"
                    strokeWidth={2}
                  />
                  <X
                    className="w-5 h-5 text-[#1A1A1A] hidden group-open:block"
                    strokeWidth={2}
                  />
                </div>
              </summary>
              <div className="px-6 pb-6 text-[15px] leading-relaxed text-gray-600">
                Brindes não possuem garantia de troca, exceto em casos de
                defeito de fabricação comprovado por foto no momento da abertura
                do pacote.
              </div>
            </details>

            <details className="group rounded-2xl transition-all duration-300 overflow-hidden backdrop-blur-sm border bg-white/40 border-transparent hover:bg-white/60 open:bg-white open:shadow-sm open:border-white/50 [&_summary::-webkit-details-marker]:hidden">
              <summary className="w-full text-left px-6 py-5 flex items-center justify-between gap-6 cursor-pointer focus:outline-none">
                <h3 className="text-[15px] leading-snug transition-colors pr-4 text-gray-700 font-medium group-open:text-[#1A1A1A] group-open:font-bold">
                  Já solicitei a troca, em quanto tempo recebo o novo produto?
                </h3>
                <div className="shrink-0 flex items-center justify-center transition-all duration-300">
                  <Plus
                    className="w-5 h-5 text-gray-400 group-open:hidden"
                    strokeWidth={2}
                  />
                  <X
                    className="w-5 h-5 text-[#1A1A1A] hidden group-open:block"
                    strokeWidth={2}
                  />
                </div>
              </summary>
              <div className="px-6 pb-6 text-[15px] leading-relaxed text-gray-600">
                É{" "}
                <strong>
                  necessário aguardar a chegada do produto ao nosso Centro de
                  Distribuição (CD) e a conferência técnica
                </strong>{" "}
                antes do novo envio. Após a aprovação, o novo envio é
                processado. Em caso de dúvidas, entre em contato no{" "}
                <a
                  href="https://wa.me/5514997646454?text=Ol%C3%A1%2C%20preciso%20de%20suporte%20t%C3%A9cnico%20Bubbles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline hover:text-[#F4CDD4] transition-colors"
                >
                  WhatsApp
                </a>
                .
              </div>
            </details>

            <details className="group rounded-2xl transition-all duration-300 overflow-hidden backdrop-blur-sm border bg-white/40 border-transparent hover:bg-white/60 open:bg-white open:shadow-sm open:border-white/50 [&_summary::-webkit-details-marker]:hidden">
              <summary className="w-full text-left px-6 py-5 flex items-center justify-between gap-6 cursor-pointer focus:outline-none">
                <h3 className="text-[15px] leading-snug transition-colors pr-4 text-gray-700 font-medium group-open:text-[#1A1A1A] group-open:font-bold">
                  [AVARIA] O que fazer se o produto chegar com vazamento ou
                  lacre violado?
                </h3>
                <div className="shrink-0 flex items-center justify-center transition-all duration-300">
                  <Plus
                    className="w-5 h-5 text-gray-400 group-open:hidden"
                    strokeWidth={2}
                  />
                  <X
                    className="w-5 h-5 text-[#1A1A1A] hidden group-open:block"
                    strokeWidth={2}
                  />
                </div>
              </summary>
              <div className="px-6 pb-6 text-[15px] leading-relaxed text-gray-600">
                Recuse o recebimento no ato da entrega. Caso identifique após a
                abertura, entre em contato em até 24h via WhatsApp enviando
                fotos do lote e da embalagem original.
              </div>
            </details>

            <details className="group rounded-2xl transition-all duration-300 overflow-hidden backdrop-blur-sm border bg-white/40 border-transparent hover:bg-white/60 open:bg-white open:shadow-sm open:border-white/50 [&_summary::-webkit-details-marker]:hidden">
              <summary className="w-full text-left px-6 py-5 flex items-center justify-between gap-6 cursor-pointer focus:outline-none">
                <h3 className="text-[15px] leading-snug transition-colors pr-4 text-gray-700 font-medium group-open:text-[#1A1A1A] group-open:font-bold">
                  [REEMBOLSO] Quais os métodos de reembolso em caso de estorno
                  aprovado?
                </h3>
                <div className="shrink-0 flex items-center justify-center transition-all duration-300">
                  <Plus
                    className="w-5 h-5 text-gray-400 group-open:hidden"
                    strokeWidth={2}
                  />
                  <X
                    className="w-5 h-5 text-[#1A1A1A] hidden group-open:block"
                    strokeWidth={2}
                  />
                </div>
              </summary>
              <div className="px-6 pb-6 text-[15px] leading-relaxed text-gray-600">
                O estorno é realizado na mesma forma de pagamento original. Para
                PIX, em até 3 dias úteis. Para cartão de crédito, o valor pode
                constar em até duas faturas subsequentes, dependendo da
                administradora.
              </div>
            </details>

            <details className="group rounded-2xl transition-all duration-300 overflow-hidden backdrop-blur-sm border bg-white/40 border-transparent hover:bg-white/60 open:bg-white open:shadow-sm open:border-white/50 [&_summary::-webkit-details-marker]:hidden">
              <summary className="w-full text-left px-6 py-5 flex items-center justify-between gap-6 cursor-pointer focus:outline-none">
                <h3 className="text-[15px] leading-snug transition-colors pr-4 text-gray-700 font-medium group-open:text-[#1A1A1A] group-open:font-bold">
                  [NEGATIVA] O suporte técnico pode negar uma troca?
                </h3>
                <div className="shrink-0 flex items-center justify-center transition-all duration-300">
                  <Plus
                    className="w-5 h-5 text-gray-400 group-open:hidden"
                    strokeWidth={2}
                  />
                  <X
                    className="w-5 h-5 text-[#1A1A1A] hidden group-open:block"
                    strokeWidth={2}
                  />
                </div>
              </summary>
              <div className="px-6 pb-6 text-[15px] leading-relaxed text-gray-600">
                Sim. A troca ou devolução pode ser recusada caso o produto
                apresente indícios de mau uso, armazenamento incorreto, ou se a
                solicitação ocorrer fora do prazo legal de 7 dias (para
                arrependimento).
              </div>
            </details>
          </div>
        </section>

        {/* UX Elements: Help */}
        <section className="bg-[#0D0C0D] text-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center justify-between">
          <div className="space-y-6 flex-1">
            <h3 className="text-2xl font-bold">Ainda com dúvidas?</h3>
            <p className="text-gray-400 text-sm">
              Nossa equipe de suporte técnico está pronta para ajudar você e seu
              pet shop.
            </p>
          </div>

          <div className="flex-1 flex flex-col items-start md:items-end space-y-6 border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-12 w-full">
            <div className="space-y-4 w-full">
              <a
                href="https://wa.me/5514996312932?text=Olá,%20preciso%20de%20ajuda"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
              >
                <div className="flex items-center gap-3">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-[#F4CDD4]"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span className="font-medium">
                    Fale com o suporte no WhatsApp
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </a>
              <a
                href="/politica-de-frete-e-entrega"
                className="group flex items-center justify-between w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
              >
                <div className="flex items-center gap-3">
                  <Truck className="w-5 h-5 text-[#F4CDD4]" />
                  <span className="font-medium">
                    Confira nossa política de frete e entrega
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </a>
            </div>
          </div>
        </section>

        <SupportBanner pageName="Política de Troca e Devoluções" />
      </main>
    </div>
  );
}
