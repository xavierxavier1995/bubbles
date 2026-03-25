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
  ShieldCheck,
  HelpCircle,
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
        answer: (
          <>
            Para garantir a performance técnica, utilize água filtrada e prepare apenas a quantidade que será usada no dia de trabalho. A proporção ideal varia por linha (ex: 1:4 ou 1:10), verifique o rótulo ou nosso{" "}
            <a href="/pages/diluicao" className="text-[#F4CDD4] hover:underline font-medium">
              Guia de Diluição
            </a>
            .
          </>
        ),
      },
      {
        question: "Qual o rendimento médio da Linha Pro (1:10) por banho?",
        answer: (
          <>
            Com a{" "}
            <a href="/pages/diluicao" className="text-[#F4CDD4] hover:underline font-medium">
              diluição
            </a>{" "}
            máxima de 1:10, um Produto rende até 55 litros de produto pronto. Em média, isso reduz seu custo por banho significativamente, variando conforme a pelagem e sujidade do pet. Um galão rende, em média, 500 banhos.
          </>
        ),
      },
      {
        question: "Por que é obrigatório usar o Frasco Diluidor Bubbles?",
        answer:
          "Ele não é apenas um frasco, é uma ferramenta de precisão técnica. Ele garante a dosagem exata de água e produto, evitando desperdício de ativos e assegurando que o shampoo atinja sua eficácia química total.",
      },
      {
        question:
          "Qual o prazo de validade do produto após misturado com água?",
        answer: (
          <>
            Após a{" "}
            <a href="/pages/diluicao" className="text-[#F4CDD4] hover:underline font-medium">
              diluição
            </a>{" "}
            em água filtrada, recomendamos o uso em até 24 horas. Após este prazo, os ativos podem perder eficácia e há risco de contaminação bacteriana.
          </>
        ),
      },
      {
        question: "Todos os produtos tem diluição?",
        answer: (
          <>
            Apenas shampoos e condicionadores são concentrados e requerem{" "}
            <a href="/pages/diluicao" className="text-[#F4CDD4] hover:underline font-medium">
              diluição
            </a>
            ; os outros produtos estão prontos para uso.
          </>
        ),
      },
      {
        question: "Como é feito o cálculo de diluição?",
        answer: (
          <>
            Para{" "}
            <a href="/pages/diluicao" className="text-[#F4CDD4] hover:underline font-medium">
              diluir
            </a>{" "}
            na proporção de 1:10, use 1 parte de produto para 10 partes de água, totalizando 11 partes. Considerando o uso de 120ml de produto para 2 lavagens (porte P), a conta é: 120ml ÷ 11 partes = 10ml. Assim, você deve usar 110ml de água e 10ml de produto puro.
          </>
        ),
      },
    ],
  },
  {
    id: "saude",
    category: "Saúde e Academy",
    icon: Bath,
    questions: [],
  },
  {
    id: "linhas-e-protocolos",
    category: "Linhas de Produto e Protocolos de Pelagem",
    icon: Bath,
    questions: [
      {
        question:
          "[PERFORMANCE] Como o Leave-in Ego ajuda na secagem 60% mais rápida?",
        answer:
          "Sua tecnologia molecular sela a cutícula e expele a umidade da fibra capilar. Isso reduz o tempo de exposição ao soprador, economizando energia elétrica e preservando a saúde do fio.",
      },
      {
        question: "[SEGURANÇA] O Shampoo Dermo Facial arde os olhos do pet?",
        answer:
          "Não. Ele foi formulado com pH fisiológico (idêntico à lágrima) e é isento de sulfatos. É ideal para higienizar a face de cães e gatos sem causar desconforto ou irritação ocular.",
      },
      {
        question:
          "[ESTÉTICA FELINA] Posso usar os shampoos de cachorro em gatos?",
        answer:
          "Recomendamos o uso do Shampoo Redutor de Oleosidade da Bubbles, específico para felinos. Ele desengraxa a fibra capilar sem remover a hidratação natural, evitando o estresse olfativo e dermatológico no gato.",
      },
      {
        question:
          "[PELAGEM CLARA] O Shampoo Clareador Bubbles mancha pelagens bipartidas (ex: Preto e Branco)?",
        answer:
          "Não. Nosso clareador utiliza branqueadores ópticos de última geração, que refletem a luz e devolvem o branco puro sem o risco de manchar as partes escuras da pelagem com corantes agressivos.",
      },
      {
        question:
          "[LINHA ESSENTIAL] Qual a indicação de uso da Linha Essential?",
        answer:
          "Ela é a base de custo-benefício industrial para banhos de alto volume e rotatividade. É ideal para a pré-lavagem ou para serviços mais básicos, garantindo limpeza profunda com economia.",
      },
      {
        question: "Os produtos possuem ingredientes de origem animal?",
        answer:
          "Não! Nenhum produto da Bubbles tem quaisquer tipos de ingredientes de origem animal.",
      },
      {
        question: "Os produtos são hipoalergenicos?",
        answer:
          "Nossos produtos são 100% veganos e desenvolvidos com ingredientes suaves, com baixo potencial alergênico. No entanto, em pets com pele sensível ou atópica, recomendamos sempre consultar o veterinário antes do uso.",
      },
      {
        question: "Os produtos são para cães e gatos?",
        answer:
          "Sim, todos os nossos produtos são para uso exclusivo em cães e gatos.",
      },
      {
        question:
          "[PRAZO] Qual o tempo de processamento logístico após a aprovação do pagamento?",
        answer:
          "Temos um prazo de até 3 dias úteis para despacho do seu pedido, garantindo que a embalagem chegue reforçada e intacta até você.",
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
        answer: (
          <>
            Realizamos envios internacionais mediante cotação direta. Este serviço não está disponível via checkout automático no site.{" "}
            <a href="https://wa.me/5514997646454?text=Olá,%20gostaria%20de%20solicitar%20uma%20cotação%20para%20envio%20internacional." target="_blank" rel="noopener noreferrer" className="text-inherit underline hover:text-[#F48FB1] transition-colors font-medium">
              [Clique aqui para solicitar sua cotação internacional via WhatsApp]
            </a>
          </>
        ),
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
        answer: (
          <>
            Caso precise alterar o endereço, entre em contato com nosso{" "}
            <a href="https://wa.me/5514997646454" target="_blank" rel="noopener noreferrer" className="text-inherit underline hover:text-[#F48FB1] transition-colors font-medium">
              suporte
            </a>{" "}
            técnico humanizado pelo WhatsApp (14) 99764-6454. A alteração pode ser realizada desde que o pedido ainda não tenha sido faturado.
          </>
        ),
      },
      {
        question: "A entrega é feita em finais de semana ou feriados?",
        answer:
          "Isso depende da transportadora selecionada e da sua região de entrega. Para verificar a previsão exata, entre em contato com seu código de rastreio no nosso WhatsApp.",
      },
      {
        question:
          "Meu pedido consta como entregue, mas não recebi. O que fazer?",
        answer: (
          <>
            Verifique primeiro com vizinhos, funcionários ou na portaria. Caso realmente não encontre, contate nosso{" "}
            <a href="https://wa.me/5514997646454" target="_blank" rel="noopener noreferrer" className="text-inherit underline hover:text-[#F48FB1] transition-colors font-medium">
              suporte
            </a>{" "}
            via WhatsApp (14) 99764-6454 imediatamente.
          </>
        ),
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
    category: "Trocas, Devoluções e Reembolso (CX)",
    icon: RefreshCcw,
    questions: [
      {
        question: "Comprei em um distribuidor, posso trocar no site?",
        answer: "A troca deve ocorrer no local da compra.",
      },
      {
        question: "O produto causou reação no pet?",
        answer: (
          <>
            Direcionar para{" "}
            <a href="https://wa.me/5514997646454" target="_blank" rel="noopener noreferrer" className="text-inherit underline hover:text-[#F48FB1] transition-colors font-medium">
              suporte
            </a>{" "}
            técnico humanizado via ajuda@bubbles.com.br ou pelo nosso WhatsApp (14) 99764-6454.
          </>
        ),
      },
      {
        question:
          "[AVARIA] O que fazer se o produto chegar com vazamento ou lacre violado?",
        answer:
          "Recuse o recebimento no ato da entrega. Caso identifique após a abertura, entre em contato em até 24h via WhatsApp enviando fotos do lote e da embalagem original.",
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
        answer: (
          <>
            <a href="/pages/trocas-e-devolucoes" className="text-[#F4CDD4] hover:underline font-medium">
              Trocas
            </a>{" "}
            por insatisfação com o resultado técnico devem ser precedidas de uma consultoria com nosso{" "}
            <a href="https://wa.me/5514997646454" target="_blank" rel="noopener noreferrer" className="text-inherit underline hover:text-[#F48FB1] transition-colors font-medium">
              suporte
            </a>{" "}
            humanizado pelo WhatsApp (14) 99764-6454. Muitas vezes, um simples ajuste na{" "}
            <a href="/pages/diluicao" className="text-[#F4CDD4] hover:underline font-medium">
              diluição
            </a>{" "}
            (ex: 1:10 na Linha Ego / Pro) ou no modo de aplicação (como o uso do Spray Preparo na Linha Collora) resolve a questão. Não trocamos produtos abertos com mais de 10% de uso. Em caso de dúvidas, contate nosso WhatsApp.
          </>
        ),
      },
      {
        question:
          "Comprei o produto em uma feira ou evento (ex: Pet South America). Como troco?",
        answer: (
          <>
            Compras realizadas em eventos seguem o canal de{" "}
            <a href="https://wa.me/5514997646454" target="_blank" rel="noopener noreferrer" className="text-inherit underline hover:text-[#F48FB1] transition-colors font-medium">
              suporte
            </a>{" "}
            técnico humanizado direto do evento pelo WhatsApp (14) 99764-6454, não o fluxo do e-commerce. Entre em contato através do nosso WhatsApp de suporte apresentando o comprovante de compra emitido no stand oficial.
          </>
        ),
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
        question:
          "[REEMBOLSO] Quais os métodos de reembolso em caso de estorno aprovado?",
        answer:
          "O estorno é realizado na mesma forma de pagamento original. Para PIX, em até 3 dias úteis. Para cartão de crédito, o valor pode constar em até duas faturas subsequentes, dependendo da administradora.",
      },
      {
        question: "[NEGATIVA] O suporte técnico pode negar uma troca?",
        answer: (
          <>
            Sim. A{" "}
            <a href="/pages/trocas-e-devolucoes" className="text-[#F4CDD4] hover:underline font-medium">
              troca ou devolução
            </a>{" "}
            pode ser recusada caso o produto apresente indícios de mau uso, armazenamento incorreto, ou se a solicitação ocorrer fora do prazo legal de 7 dias (para arrependimento).
          </>
        ),
      },
    ],
  },
  {
    id: "compliance-lgpd",
    category: "Compliance, Privacidade e Dados (LGPD)",
    icon: ShieldCheck,
    questions: [
      {
        question:
          "[LGPD] Como a Bubbles utiliza os dados coletados na minha navegação?",
        answer:
          "Coletamos dados anonimizados para análise estatística e otimização de campanhas publicitárias. Não temos acesso direto à identidade do usuário; apenas as ferramentas possuem para entregar melhores publicidades e ofertas exclusivas.",
      },
      {
        question:
          "[SEGURANÇA] O site Bubbles é seguro para transações financeiras?",
        answer:
          "Sim, utilizamos protocolos de criptografia SSL e gateways de pagamento certificados que garantem a proteção total dos dados financeiros durante a compra.",
      },
    ],
  },
  {
    id: "duvidas-gerais",
    category: "Dúvidas Gerais",
    icon: HelpCircle,
    questions: [
      {
        question: "Como encontrar o distribuidor mais próximo de mim?",
        answer:
          "Através da plataforma https://www.encontre.bubbles.com.br/",
      },
      {
        question: "O que fazer quando estiver com problemas na finalização de pedidos?",
        answer: (
          <>
            Entre em contato pelo número{" "}
            <a href="https://wa.me/5514996312932" target="_blank" rel="noopener noreferrer" className="text-inherit underline hover:text-[#F48FB1] transition-colors font-medium">
              14 99631-2932
            </a>{" "}
            para receber todo o{" "}
            <a href="https://wa.me/5514997646454" target="_blank" rel="noopener noreferrer" className="text-inherit underline hover:text-[#F48FB1] transition-colors font-medium">
              suporte
            </a>{" "}
            necessário.
          </>
        ),
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
