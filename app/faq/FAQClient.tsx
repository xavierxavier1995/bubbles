"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Plus,
  X,
  ChevronRight,
  FlaskConical,
  Bath,
  Truck,
  RefreshCcw,
} from "lucide-react";
import SupportBanner from "@/components/SupportBanner";

const faqs = [
  {
    id: "performance",
    category: "Performance e Diluição",
    icon: FlaskConical,
    questions: [
      {
        question: "Como fazer a diluição correta dos produtos Bubbles?",
        answer:
          "Para garantir a performance técnica, utilize água filtrada e prepare apenas a quantidade que será usada no dia de trabalho. A proporção ideal varia por linha (ex: 1:4 ou 1:10), verifique o rótulo ou nosso Guia de Diluição.",
      },
      {
        question: "Qual o rendimento médio da Linha Pro (1:10) por banho?",
        answer:
          "Com a diluição máxima de 1:10, um galão de 5L rende até 55 litros de produto pronto. Em média, isso reduz seu custo por banho significativamente, variando conforme a pelagem e sujidade do pet.",
      },
      {
        question: "Por que é obrigatório usar o Frasco Diluidor Bubbles?",
        answer:
          "Ele não é apenas um frasco, é uma ferramenta de precisão técnica. Ele garante a dosagem exata de água e produto, evitando desperdício de ativos e assegurando que o shampoo atinja sua eficácia química total.",
      },
      {
        question:
          "Qual o prazo de validade do produto após misturado com água?",
        answer:
          "Após a diluição em água filtrada, recomendamos o uso em até 48 horas. Após este prazo, os ativos podem perder eficácia e há risco de contaminação bacteriana.",
      },
    ],
  },
  {
    id: "saude",
    category: "Saúde e Academy",
    icon: Bath,
    questions: [
      {
        question:
          "Qual o protocolo para banho em animais agressivos ou reativos?",
        answer:
          "Uso da Linha Sensorial para relaxamento olfativo e produtos de ação rápida para reduzir o tempo de manejo.",
      },
    ],
  },
  {
    id: "protocolos",
    category: "Protocolos de Banho e Tosa",
    icon: Bath,
    questions: [
      {
        question:
          "Como o Leave-in Ego auxilia na redução do tempo de soprador?",
        answer:
          "Microemulsões que expulsam a umidade capilar, permitindo secagem até 60% mais rápida.",
      },
      {
        question:
          "O Shampoo Dermo Facial pode ser utilizado em animais com hipersensibilidade?",
        answer:
          "Sim, possui pH fisiológico e é isento de sulfatos, indicado para face e áreas sensíveis.",
      },
      {
        question:
          "Qual o diferencial do Shampoo Redutor de Oleosidade para gatos?",
        answer:
          "Atua na quebra das cadeias lipídicas felinas sem remover a hidratação natural.",
      },
      {
        question:
          "O Shampoo Clareador pode causar manchas em pelagens bipartidas?",
        answer:
          "Não. Utiliza branqueadores ópticos em vez de corantes violetas, sendo seguro para todas as cores.",
      },
    ],
  },
  {
    id: "logistica",
    category: "Logística e Entrega",
    icon: Truck,
    questions: [
      {
        question:
          "Como proceder se o código de rastreamento não apresentar atualizações?",
        answer:
          "Status depende da transportadora. Se imobilidade persistir por +48h úteis, contate ajuda@bubbles.com.br.",
      },
      {
        question:
          "O que fazer se o lacre do produto for violado no transporte?",
        answer:
          "Recuse o recebimento. Se notar após abertura, contate em até 24h via WhatsApp com fotos do lote.",
      },
      {
        question:
          "Quais os prazos para estorno de pagamentos via cartão de crédito?",
        answer:
          "Solicitado após conferência técnica da devolução. Reflete em até duas faturas conforme a operadora.",
      },
      {
        question: "A Bubbles realiza entregas internacionais?",
        answer:
          "No momento, nossa operação logística é focada em envios nacionais.",
      },
      {
        question: "Qual o prazo de entrega para a minha região?",
        answer:
          "O prazo varia de acordo com o seu CEP. Você pode simular o prazo exato na calculadora de frete disponível no carrinho de compras ou no final desta página.",
      },
      {
        question: "Como faço para rastrear meu pedido?",
        answer:
          "Assim que o pedido for despachado, você receberá um link e o código de rastreamento por e-mail e WhatsApp para acompanhar a entrega em tempo real.",
      },
      {
        question: "A Bubbles oferece frete grátis?",
        answer:
          "Sim! Oferecemos frete grátis para todo o Brasil com valores mínimos de compra que variam por região. Para mais detalhes e para acompanhar sua entrega, acesse nossa página de rastreamento.",
      },
      {
        question:
          "O que acontece se eu não estiver no pet shop no momento da entrega?",
        answer:
          "Nossas transportadoras realizam até 3 tentativas de entrega. Caso não haja ninguém para receber, o pedido retornará à nossa fábrica e entraremos em contato.",
      },
      {
        question: "Posso alterar o endereço de entrega após fechar o pedido?",
        answer:
          "Caso precise alterar o endereço, entre em contato com nosso suporte técnico humanizado pelo WhatsApp. A alteração pode ser realizada desde que o pedido ainda não tenha sido faturado.",
      },
      {
        question: "A entrega é feita em finais de semana ou feriados?",
        answer:
          "Isso depende da transportadora selecionada e da sua região de entrega. Para verificar a previsão exata, entre em contato com seu código de rastreio no nosso WhatsApp.",
      },
      {
        question:
          "Meu pedido consta como entregue, mas não recebi. O que fazer?",
        answer:
          "Verifique primeiro com vizinhos, funcionários ou na portaria. Caso realmente não encontre, contate nosso suporte via WhatsApp imediatamente.",
      },
      {
        question: "Posso retirar meu pedido diretamente na fábrica?",
        answer:
          "Atualmente nossa operação logística é 100% focada em envios via transportadora, não possuímos modalidade de retirada presencial na fábrica.",
      },
    ],
  },
  {
    id: "trocas",
    category: "Trocas e Devoluções",
    icon: RefreshCcw,
    questions: [
      {
        question: "Comprei em um distribuidor, posso trocar no site?",
        answer: "A troca deve ocorrer no local da compra.",
      },
      {
        question: "O produto causou reação no pet?",
        answer:
          "Direcionar para suporte técnico humanizado via ajuda@bubbles.com.br ou pelo nosso WhatsApp.",
      },
      {
        question: "O produto chegou com vazamento. O que devo fazer?",
        answer:
          "Mesmo com nossa embalagem reforçada anti-vazamento, se notar qualquer dano no ato da entrega, recuse o recebimento e anote o motivo no verso da nota fiscal. Se notar após a abertura, entre em contato em até 24h via WhatsApp com fotos do lote.",
      },
      {
        question:
          "Comprei um Kit Profissional e quero devolver apenas um item. É possível?",
        answer:
          "Não. Para devolução por arrependimento, o kit deve ser devolvido em sua totalidade, incluindo brindes e acessórios que acompanham a promoção, mantendo a integridade do conjunto industrial.",
      },
      {
        question:
          "O bico dosador/válvula do meu produto apresentou defeito. Vocês trocam?",
        answer:
          "Sim. Caso acessórios de aplicação apresentem defeitos de fabricação em até 30 dias, enviamos a reposição da peça via frete expresso após comprovação por vídeo, garantindo que sua operação não pare.",
      },
      {
        question:
          "Usei o produto e o resultado não foi o esperado. Posso trocar?",
        answer:
          "Trocas por insatisfação com o resultado técnico devem ser precedidas de uma consultoria com nosso suporte humanizado. Muitas vezes, um simples ajuste na diluição (ex: 1:10 na Linha Ego / Pro) ou no modo de aplicação (como o uso do Spray Preparo na Linha Collora) resolve a questão. Não trocamos produtos abertos com mais de 10% de uso. Em caso de dúvidas, contate nosso WhatsApp.",
      },
      {
        question:
          "Comprei o produto em uma feira ou evento (ex: Pet South America). Como troco?",
        answer:
          "Compras realizadas em eventos seguem o canal de suporte técnico humanizado direto do evento, não o fluxo do e-commerce. Entre em contato através do nosso WhatsApp de suporte apresentando o comprovante de compra emitido no stand oficial.",
      },
      {
        question: "Como funciona a troca de brindes exclusivos?",
        answer:
          "Brindes não possuem garantia de troca, exceto em casos de defeito de fabricação comprovado por foto no momento da abertura do pacote.",
      },
      {
        question:
          "Já solicitei a troca, em quanto tempo recebo o novo produto?",
        answer:
          "É necessário aguardar a chegada do produto ao nosso Centro de Distribuição (CD) e a conferência técnica antes do novo envio. Após a aprovação, o novo envio é processado. Em caso de dúvidas, entre em contato no WhatsApp.",
      },
      {
        question: "O suporte técnico pode negar uma troca?",
        answer:
          "Sim. A troca será indeferida caso a auditoria técnica identifique: indícios de mau uso ou diluição incorreta; armazenamento inadequado; lacre violado sem defeito de fabricação comprovado; uso superior a 10% do volume do produto. O cliente será formalmente informado sobre a decisão após a conclusão da análise técnica.",
      },
    ],
  },
];

export default function FAQClient() {
  const [activeCategory, setActiveCategory] = useState<string | "all">("all");
  const [openQuestion, setOpenQuestion] = useState<string | null>(
    faqs[0].questions[0].question,
  );

  const displayedQuestions =
    activeCategory === "all"
      ? faqs.flatMap((c) => c.questions)
      : faqs.find((c) => c.id === activeCategory)?.questions || [];

  const toggleQuestion = (question: string) => {
    setOpenQuestion(openQuestion === question ? null : question);
  };

  // Generate JSON-LD Schema
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.flatMap((category) =>
      category.questions.map((q) => ({
        "@type": "Question",
        name: q.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: q.answer,
        },
      })),
    ),
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#fff0f3] via-[#f0f7ff] to-[#f5f0ff] font-sans text-[#1A1A1A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-pink-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      <div className="absolute -bottom-8 left-40 w-72 h-72 bg-purple-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>

      {/* Navigation Bar Simulation */}
      <nav className="border-b border-white/20 py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 bg-white/40 backdrop-blur-md z-50">
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

      <main className="relative z-10 pt-24 pb-32 px-6 max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6 tracking-tight">
            Central de Ajuda e FAQ
          </h1>
          <p className="text-lg text-gray-600">
            Nossa plataforma foi desenvolvida para ajudar você a trabalhar de
            forma mais inteligente. Encontre respostas rápidas e otimize sua
            performance.
          </p>
        </section>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Categories Sidebar */}
          <aside className="lg:w-1/3 shrink-0 flex flex-col gap-3">
            {activeCategory !== "all" && (
              <button
                onClick={() => {
                  setActiveCategory("all");
                  setOpenQuestion(faqs[0].questions[0].question);
                }}
                className="flex items-center justify-center gap-2 w-full p-4 mb-2 rounded-2xl bg-white/60 hover:bg-white/90 text-[#1A1A1A] font-bold text-sm transition-all shadow-sm border border-white/50 backdrop-blur-sm"
              >
                <RefreshCcw className="w-4 h-4" />
                Ver todas as perguntas
              </button>
            )}

            {faqs.map((category) => {
              const isActive = activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setOpenQuestion(category.questions[0]?.question || null);
                  }}
                  className={`flex items-center justify-between w-full p-5 rounded-2xl text-left transition-all duration-300 backdrop-blur-sm ${
                    isActive
                      ? "bg-white shadow-sm text-[#1A1A1A] font-bold border border-white/50"
                      : "bg-white/40 text-gray-500 hover:bg-white/60 hover:text-[#1A1A1A] border border-transparent"
                  }`}
                >
                  <span className="text-[15px]">{category.category}</span>
                  <ChevronRight
                    className={`w-5 h-5 transition-colors ${isActive ? "text-[#1A1A1A]" : "text-gray-400"}`}
                  />
                </button>
              );
            })}
          </aside>

          {/* Accordions Area */}
          <div className="flex-1 flex flex-col gap-3">
            {displayedQuestions.map((q, index) => {
              const isOpen = openQuestion === q.question;

              return (
                <div
                  key={index}
                  className={`rounded-2xl transition-all duration-300 overflow-hidden backdrop-blur-sm border ${
                    isOpen
                      ? "bg-white shadow-sm border-white/50"
                      : "bg-white/40 border-transparent hover:bg-white/60"
                  }`}
                >
                  <button
                    onClick={() => toggleQuestion(q.question)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-6 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <h3
                      className={`text-[15px] leading-snug transition-colors pr-4 ${isOpen ? "text-[#1A1A1A] font-bold" : "text-gray-700 font-medium"}`}
                    >
                      {q.question}
                    </h3>
                    <div className="shrink-0 flex items-center justify-center transition-all duration-300">
                      {isOpen ? (
                        <X className="w-5 h-5 text-[#1A1A1A]" strokeWidth={2} />
                      ) : (
                        <Plus
                          className="w-5 h-5 text-gray-400"
                          strokeWidth={2}
                        />
                      )}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 text-gray-600 leading-relaxed text-[14px]">
                          {q.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <div className="relative z-10">
        <SupportBanner pageName="Central de Ajuda" />
      </div>
    </div>
  );
}
