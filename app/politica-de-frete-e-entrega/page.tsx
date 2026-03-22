import Image from "next/image";
import {
  Truck,
  ShieldCheck,
  MessageCircle,
  Package,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Clock,
  RefreshCcw,
  Calendar,
  ShieldAlert,
  Smartphone,
  CreditCard,
  ChevronDown,
  Plus,
  X,
} from "lucide-react";
import { Metadata } from "next";
import SupportBanner from "@/components/SupportBanner";

export const metadata: Metadata = {
  title: "Política de Entrega e Frete | Bubbles® Cosméticos Pet Profissionais",
  description:
    "Conheça nossa logística inteligente. Entregamos em todo o Brasil com segurança e agilidade para que seu banho e tosa nunca fique desabastecido.",
};

export default function ShippingPolicy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Política de Entrega e Frete | Bubbles® Cosméticos Pet Profissionais",
    description:
      "Conheça nossa logística inteligente. Entregamos em todo o Brasil com segurança e agilidade para que seu banho e tosa nunca fique desabastecido.",
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
          {/* Using a placeholder for the logo */}
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
            <Truck className="w-4 h-4" />
            <span>Logística Inteligente</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-[#0D0C0D]">
            Política de Entrega e Frete
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Na Bubbles, priorizamos a segurança e a agilidade para que o seu
            banho e tosa nunca fique desabastecido. Contamos com uma logística
            inteligente para que seus produtos cheguem com segurança, no prazo e
            prontos para uso.
          </p>
        </section>

        {/* Free Shipping Rules */}
        <section className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          <div className="space-y-6 flex flex-col">
            <h2 className="text-3xl font-bold tracking-tight">
              Frete Grátis por Região
            </h2>
            <p className="text-gray-600">
              Faça seus pedidos e aproveite nossas condições especiais de frete
              grátis. Entregamos em todo o Brasil com as melhores condições.
            </p>

            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#F4CDD4]/20">
                    <th className="py-4 px-6 font-semibold text-[#0D0C0D]">
                      Região
                    </th>
                    <th className="py-4 px-6 font-semibold text-[#0D0C0D]">
                      Frete Grátis
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-medium">Sudeste</td>
                    <td className="py-4 px-6 text-gray-600 whitespace-nowrap">
                      Acima de <strong>R$399,90</strong>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-medium">Sul</td>
                    <td className="py-4 px-6 text-gray-600 whitespace-nowrap">
                      Acima de <strong>R$449,90</strong>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-medium">Centro-Oeste</td>
                    <td className="py-4 px-6 text-gray-600 whitespace-nowrap">
                      Acima de <strong>R$499,90</strong>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-medium">Nordeste</td>
                    <td className="py-4 px-6 text-gray-600 whitespace-nowrap">
                      Acima de <strong>R$799,90</strong>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-medium">Norte</td>
                    <td className="py-4 px-6 text-gray-600 whitespace-nowrap">
                      Acima de <strong>R$899,90</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-3 bg-gray-50 rounded-xl border border-gray-100 text-xs text-gray-600 leading-relaxed mt-auto">
              <strong>Importante:</strong> O pedido pode levar até 3 dias úteis
              para ser faturado e despachado. Após essa etapa, o prazo de
              entrega até o seu banho e tosa varia conforme a transportadora
              definida pela nossa parceira logística, de acordo com a sua
              região.
            </div>
          </div>

          <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden bg-gray-100">
            <Image
              src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80"
              alt="Shih Tzu tomando banho"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <p className="font-medium text-sm uppercase tracking-wider mb-2 opacity-90 text-[#F4CDD4]">
                Rendimento Garantido
              </p>
              <p className="text-2xl font-bold leading-tight">
                Seu banho e tosa sempre abastecido.
              </p>
            </div>
          </div>
        </section>

        {/* Deadlines & Security */}
        <section className="grid md:grid-cols-2 gap-4 md:gap-8">
          <div className="bg-[#F4CDD4]/20 rounded-3xl p-6 md:p-8 space-y-4 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0 mb-4">
              <Clock className="w-6 h-6 text-[#0D0C0D]" />
            </div>
            <div className="w-full">
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                Prazos e Processamento
              </h3>
              <p className="text-gray-700 leading-relaxed flex-grow text-sm md:text-base">
                Após a aprovação do pagamento, temos um prazo de{" "}
                <strong>até 3 dias úteis</strong> para despacho. Utilizamos a
                plataforma <strong>Mandaê</strong>, que seleciona a
                transportadora mais eficiente e rápida para a sua região.
              </p>
              <div className="mt-4 pt-2">
                <div className="text-xs text-gray-600">
                  <strong>⚠️ IMPORTANTE:</strong> Guarde a embalagem original e
                  verifique os produtos no recebimento. A caixa é essencial para
                  trocas.
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-3xl p-6 md:p-8 space-y-4 relative overflow-hidden group flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0 relative z-10 mb-4">
              <ShieldCheck className="w-6 h-6 text-[#0D0C0D]" />
            </div>
            <div className="w-full relative z-10">
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                Segurança no Transporte
              </h3>
              <p className="text-gray-700 leading-relaxed flex-grow text-sm md:text-base">
                Utilizamos embalagens reforçadas para garantir que seus produtos
                cheguem intactos e em perfeitas condições até você. Nossa equipe
                de logística acompanha de perto cada etapa do processo, desde a
                separação até a entrega final, assegurando que o padrão de
                qualidade Bubbles seja mantido em todo o trajeto. Além disso,
                monitoramos constantemente os índices de satisfação de entrega
                para aprimorar continuamente nossos serviços logísticos.
              </p>
            </div>
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-white rounded-full opacity-50 group-hover:scale-110 transition-transform duration-700"></div>
          </div>
        </section>

        {/* Communication & Tracking */}
        <section className="space-y-12">
          <style>{`
            @keyframes fadeInUp {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in-up {
              animation: fadeInUp 0.6s ease-out forwards;
              opacity: 0;
            }
            .delay-100 { animation-delay: 100ms; }
            .delay-200 { animation-delay: 200ms; }
            .delay-300 { animation-delay: 300ms; }
            .delay-400 { animation-delay: 400ms; }
          `}</style>
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">
              Comunicação e Rastreamento
            </h2>
            <p className="text-gray-600">
              Acompanhe cada passo do seu pedido com total transparência.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: CheckCircle2,
                title: "Aprovação",
                desc: "Notificação via WhatsApp confirmando o pedido aprovado.",
              },
              {
                icon: Package,
                title: "Envio",
                desc: "Envio de link direto e código de rastreio para seu e-mail e WhatsApp.",
              },
              {
                icon: MapPin,
                title: "Transparência no Rastreio",
                desc: "Insira o código no link enviado para verificar a movimentação em tempo real.",
              },
              {
                icon: RefreshCcw,
                title: "Tentativas",
                desc: "Padrão de até 3 tentativas de entrega antes do retorno à fábrica.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className={`bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow animate-fade-in-up delay-${(i + 1) * 100} flex flex-col items-center text-center relative pt-12`}
              >
                <div className="w-12 h-12 rounded-full bg-[#F4CDD4]/30 flex items-center justify-center text-[#0D0C0D] shrink-0 absolute -top-6 left-1/2 -translate-x-1/2 shadow-sm border border-white">
                  <step.icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold mb-2">{step.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Novas Seções Estratégicas B2B */}
        <section className="space-y-12 pt-12 border-t border-gray-100">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">
              Compromisso com o seu Banho e Tosa
            </h2>
            <p className="text-gray-600">
              Entendemos que a sua agenda não pode parar. Veja como garantimos a
              segurança do seu estoque.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Logística de Produtos */}
            <div className="bg-red-50 border border-red-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row h-full items-center md:items-start text-center md:text-left">
              <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 shrink-0 mb-4 md:mb-0 md:mr-6">
                <Package className="w-6 h-6" />
              </div>
              <div className="w-full">
                <h3 className="text-xl font-bold text-red-800 mb-6">
                  Logística de Produtos
                </h3>
                <p className="text-red-700 mb-6 leading-relaxed flex-grow">
                  Sabemos que os produtos pesam cerca de 5,2 kg e exigem cuidado
                  redobrado. Desenvolvemos uma inteligência de cubagem e
                  embalagem para que os produtos das linhas Ego / Pro, Basiq,
                  Sensorial e Collora não sofram avarias no transporte:
                </p>
                <ul className="space-y-3 text-sm text-red-800">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                    <span>
                      <strong>Caixas Reforçadas:</strong> Papelão de alta
                      gramatura que suporta empilhamento.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                    <span>
                      <strong>Travas de Segurança:</strong> Tampas com lacre
                      industrial e fitas de contenção.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                    <span>
                      <strong>Acomodação Milimétrica:</strong> Evita atrito
                      interno durante o trajeto.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Como Receber seu Pedido */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row h-full items-center md:items-start text-center md:text-left">
              <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 shrink-0 mb-4 md:mb-0 md:mr-6">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div className="w-full">
                <h3 className="text-xl font-bold mb-6">
                  Como Receber seu Pedido
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  Para garantir a integridade do seu produto, siga este rigoroso
                  protocolo de conferência no ato da entrega:
                </p>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                    <span>
                      <strong>Verifique a caixa:</strong> Está seca e sem
                      amassados profundos?
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                    <span>
                      <strong>Confira o lacre:</strong> A fita externa está
                      intacta e sem violação?
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                    <span>
                      <strong>Ação Imediata:</strong> Se a caixa estiver{" "}
                      <strong>
                        molhada, amassada ou violada, RECUSE O RECEBIMENTO
                      </strong>
                      . Anote o motivo no verso da nota fiscal e avise nosso
                      suporte para agilizarmos o reenvio.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Transparência no Rastreio */}
        <section className="space-y-8 pt-12 border-t border-gray-100">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">
              Transparência no Rastreio
            </h2>
            <p className="text-gray-600">
              Acompanhe seu pedido em tempo real e tenha mais tranquilidade.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-3 md:gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-5 md:p-6 shadow-sm flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0 mb-4 md:mb-0 md:mr-4">
                <Package className="w-5 h-5" />
              </div>
              <div className="w-full">
                <h3 className="text-lg font-bold mb-3">Código de Rastreio</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Assim que o seu pedido for enviado, você receberá o código de
                  rastreamento e o link de acompanhamento diretamente no seu
                  e-mail cadastrado e também através do WhatsApp.
                </p>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-5 md:p-6 shadow-sm flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0 mb-4 md:mb-0 md:mr-4">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div className="w-full">
                <h3 className="text-lg font-bold mb-3">Suporte Parceiro</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Nossa equipe de{" "}
                  <a
                    href="https://wa.me/5511913612053?text=Preciso%20de%20ajuda%20a%20respeito%20do%20rastreio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold hover:text-[#F4CDD4] transition-colors"
                  >
                    Customer Experience
                  </a>{" "}
                  atua em conjunto com os parceiros logísticos para garantir a
                  entrega.
                </p>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-5 md:p-6 shadow-sm flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0 mb-4 md:mb-0 md:mr-4">
                <RefreshCcw className="w-5 h-5" />
              </div>
              <div className="w-full">
                <h3 className="text-lg font-bold mb-3">
                  Atualizações de Status
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Você pode acompanhar cada etapa do seu pedido em tempo real
                  diretamente através do link de rastreio da transportadora.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Frete e Entrega */}
        <section className="relative py-20 -mx-6 md:-mx-12 px-6 md:px-12 bg-gradient-to-br from-[#fff0f3] via-[#f0f7ff] to-[#f5f0ff] overflow-hidden">
          {/* Decorative Blobs */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#ffcce6] mix-blend-multiply filter blur-[100px] opacity-40 animate-blob"></div>
            <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#cce0ff] mix-blend-multiply filter blur-[100px] opacity-40 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] rounded-full bg-[#e6ccff] mix-blend-multiply filter blur-[100px] opacity-30 animate-blob animation-delay-4000"></div>
          </div>

          <div className="relative z-10 text-center max-w-2xl mx-auto space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A]">
              Dúvidas Frequentes sobre Frete e Entrega
            </h2>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-3">
            <details
              open
              className="group rounded-2xl transition-all duration-300 overflow-hidden backdrop-blur-sm border bg-white/40 border-transparent hover:bg-white/60 open:bg-white open:shadow-sm open:border-white/50 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="w-full text-left px-6 py-5 flex items-center justify-between gap-6 cursor-pointer focus:outline-none">
                <h3 className="text-[15px] leading-snug transition-colors pr-4 text-gray-700 font-medium group-open:text-[#1A1A1A] group-open:font-bold">
                  Qual o prazo de entrega para a minha região?
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
                O prazo varia de acordo com o seu CEP. Você pode simular o prazo
                exato na calculadora de frete disponível no carrinho de compras
                ou no final desta página.
              </div>
            </details>

            <details className="group rounded-2xl transition-all duration-300 overflow-hidden backdrop-blur-sm border bg-white/40 border-transparent hover:bg-white/60 open:bg-white open:shadow-sm open:border-white/50 [&_summary::-webkit-details-marker]:hidden">
              <summary className="w-full text-left px-6 py-5 flex items-center justify-between gap-6 cursor-pointer focus:outline-none">
                <h3 className="text-[15px] leading-snug transition-colors pr-4 text-gray-700 font-medium group-open:text-[#1A1A1A] group-open:font-bold">
                  Como faço para rastrear meu pedido?
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
                Assim que o pedido for despachado, você receberá um link e o
                código de rastreamento por e-mail e WhatsApp para acompanhar a
                entrega em tempo real.
              </div>
            </details>

            <details className="group rounded-2xl transition-all duration-300 overflow-hidden backdrop-blur-sm border bg-white/40 border-transparent hover:bg-white/60 open:bg-white open:shadow-sm open:border-white/50 [&_summary::-webkit-details-marker]:hidden">
              <summary className="w-full text-left px-6 py-5 flex items-center justify-between gap-6 cursor-pointer focus:outline-none">
                <h3 className="text-[15px] leading-snug transition-colors pr-4 text-gray-700 font-medium group-open:text-[#1A1A1A] group-open:font-bold">
                  A Bubbles oferece frete grátis?
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
                Sim! Oferecemos frete grátis para todo o Brasil com valores
                mínimos de compra que variam por região. Para mais detalhes e
                para acompanhar sua entrega, acesse nossa{" "}
                <a
                  href="/rastreio"
                  className="font-bold underline hover:text-[#F4CDD4] transition-colors"
                >
                  página de rastreamento
                </a>
                .
              </div>
            </details>

            <details className="group rounded-2xl transition-all duration-300 overflow-hidden backdrop-blur-sm border bg-white/40 border-transparent hover:bg-white/60 open:bg-white open:shadow-sm open:border-white/50 [&_summary::-webkit-details-marker]:hidden">
              <summary className="w-full text-left px-6 py-5 flex items-center justify-between gap-6 cursor-pointer focus:outline-none">
                <h3 className="text-[15px] leading-snug transition-colors pr-4 text-gray-700 font-medium group-open:text-[#1A1A1A] group-open:font-bold">
                  O que acontece se eu não estiver no pet shop no momento da
                  entrega?
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
                Nossas transportadoras realizam até 3 tentativas de entrega.
                Caso não haja ninguém para receber, o pedido retornará à nossa
                fábrica e entraremos em contato.
              </div>
            </details>

            <details className="group rounded-2xl transition-all duration-300 overflow-hidden backdrop-blur-sm border bg-white/40 border-transparent hover:bg-white/60 open:bg-white open:shadow-sm open:border-white/50 [&_summary::-webkit-details-marker]:hidden">
              <summary className="w-full text-left px-6 py-5 flex items-center justify-between gap-6 cursor-pointer focus:outline-none">
                <h3 className="text-[15px] leading-snug transition-colors pr-4 text-gray-700 font-medium group-open:text-[#1A1A1A] group-open:font-bold">
                  Posso alterar o endereço de entrega após fechar o pedido?
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
                Caso precise alterar o endereço, entre em contato com nosso
                suporte técnico humanizado pelo{" "}
                <a
                  href="https://wa.me/5511913612053?text=Preciso%20alterar%20o%20endere%C3%A7o%20de%20entrega"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline hover:text-[#F4CDD4] transition-colors"
                >
                  WhatsApp
                </a>
                . A alteração pode ser realizada desde que o pedido ainda não
                tenha sido faturado.
              </div>
            </details>

            <details className="group rounded-2xl transition-all duration-300 overflow-hidden backdrop-blur-sm border bg-white/40 border-transparent hover:bg-white/60 open:bg-white open:shadow-sm open:border-white/50 [&_summary::-webkit-details-marker]:hidden">
              <summary className="w-full text-left px-6 py-5 flex items-center justify-between gap-6 cursor-pointer focus:outline-none">
                <h3 className="text-[15px] leading-snug transition-colors pr-4 text-gray-700 font-medium group-open:text-[#1A1A1A] group-open:font-bold">
                  A entrega é feita em finais de semana ou feriados?
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
                Isso depende da transportadora selecionada e da sua região de
                entrega. Para verificar a previsão exata, entre em contato com
                seu código de rastreio no nosso{" "}
                <a
                  href="https://wa.me/5511913612053?text=Gostaria%20de%20saber%20se%20minha%20entrega%20pode%20ocorrer%20no%20final%20de%20semana"
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
                  Meu pedido consta como entregue, mas não recebi. O que fazer?
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
                Verifique primeiro com vizinhos, funcionários ou na portaria.
                Caso realmente não encontre, contate nosso suporte via{" "}
                <a
                  href="https://wa.me/5511913612053?text=Meu%20pedido%20consta%20como%20entregue%20mas%20n%C3%A3o%20recebi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline hover:text-[#F4CDD4] transition-colors"
                >
                  WhatsApp
                </a>{" "}
                imediatamente.
              </div>
            </details>

            <details className="group rounded-2xl transition-all duration-300 overflow-hidden backdrop-blur-sm border bg-white/40 border-transparent hover:bg-white/60 open:bg-white open:shadow-sm open:border-white/50 [&_summary::-webkit-details-marker]:hidden">
              <summary className="w-full text-left px-6 py-5 flex items-center justify-between gap-6 cursor-pointer focus:outline-none">
                <h3 className="text-[15px] leading-snug transition-colors pr-4 text-gray-700 font-medium group-open:text-[#1A1A1A] group-open:font-bold">
                  Posso retirar meu pedido diretamente na fábrica?
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
                Atualmente nossa operação logística é 100% focada em envios via
                transportadora, não possuímos modalidade de retirada presencial
                na fábrica.
              </div>
            </details>

            <details className="group rounded-2xl transition-all duration-300 overflow-hidden backdrop-blur-sm border bg-white/40 border-transparent hover:bg-white/60 open:bg-white open:shadow-sm open:border-white/50 [&_summary::-webkit-details-marker]:hidden">
              <summary className="w-full text-left px-6 py-5 flex items-center justify-between gap-6 cursor-pointer focus:outline-none">
                <h3 className="text-[15px] leading-snug transition-colors pr-4 text-gray-700 font-medium group-open:text-[#1A1A1A] group-open:font-bold">
                  Ocorreu um atraso na minha entrega. Como proceder?
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
                Atrasos são raros, mas podem ocorrer por questões logísticas
                externas. Entre em contato com nosso suporte via WhatsApp
                informando o número do pedido para acionarmos a transportadora.
              </div>
            </details>
          </div>
        </section>

        {/* UX Elements: Calculator & Help */}
        <section className="bg-[#0D0C0D] text-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center justify-between mt-12">
          <div className="space-y-6 flex-1 w-full">
            <h3 className="text-2xl font-bold">Calcule seu Frete</h3>
            <p className="text-gray-400 text-sm">
              Insira seu CEP abaixo para simular prazos e valores de entrega
              para o seu pet shop.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md">
              <div className="relative flex-1">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="00000-000"
                  className="w-full bg-white/10 border border-white/20 rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F4CDD4] transition-all"
                />
              </div>
              <button className="bg-[#F4CDD4] text-[#0D0C0D] font-bold px-6 py-3 rounded-xl hover:bg-white transition-colors flex items-center justify-center gap-2">
                Calcular
              </button>
            </div>
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
                    Precisa de ajuda? Fale no WhatsApp
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </a>
              <a
                href="/politica-de-troca-e-devolucoes"
                className="group flex items-center justify-between w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
              >
                <div className="flex items-center gap-3">
                  <RefreshCcw className="w-5 h-5 text-[#F4CDD4]" />
                  <span className="font-medium">
                    Confira nossa política de trocas e devoluções
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </a>
            </div>
          </div>
        </section>

        <SupportBanner pageName="Política de Entrega e Frete" />
      </main>
    </div>
  );
}
