import { Droplet, Bath, Truck, RefreshCcw, ShieldCheck, HelpCircle } from 'lucide-react';

export const faqData = [
  {
    id: 'performance',
    category: 'Performance e Diluição',
    icon: Droplet,
    questions: [
      {
        tag: 'DILUIÇÃO',
        question: 'Como garantir a estabilidade da mistura no Frasco Diluidor?',
        answer: (
          <>
            A{' '}
            <a href="/pages/diluicao" className="text-[#F4CDD4] hover:underline font-medium">
              diluição
            </a>{' '}
            deve ser feita preferencialmente com água filtrada para evitar contaminações minerais. Recomenda-se o preparo apenas da quantidade que será utilizada no dia.
          </>
        )
      },
      {
        tag: 'ECONOMIA',
        question: 'Qual o rendimento médio da Linha Pro com diluição 1:10?',
        answer: (
          <>
            O rendimento é otimizado para até 11 litros de produto pronto para uso, reduzindo o custo por banho.
          </>
        )
      },
      {
        tag: 'ACESSÓRIOS',
        question: 'Por que o Frasco Diluidor é considerado um acessório essencial?',
        answer: 'Garante precisão da dosagem técnica e evita desperdícios de ativos químicos.'
      },
      {
        tag: 'DILUIÇÃO',
        question: 'Todos os produtos tem diluição?',
        answer: (
          <>
            Apenas shampoos e condicionadores são concentrados e requerem{' '}
            <a href="/pages/diluicao" className="text-[#F4CDD4] hover:underline font-medium">
              diluição
            </a>
            ; os outros produtos estão prontos para uso.
          </>
        )
      },
      {
        tag: 'DILUIÇÃO',
        question: 'Como é feito o cálculo de diluição?',
        answer: (
          <>
            Para{' '}
            <a href="/pages/diluicao" className="text-[#F4CDD4] hover:underline font-medium">
              diluir
            </a>{' '}
            na proporção de 1:10, use 1 parte de produto para 10 partes de água, totalizando 11 partes. Considerando o uso de 120ml de produto para 2 lavagens (porte P), a conta é: 120ml ÷ 11 partes = 10ml. Assim, você deve usar 110ml de água e 10ml de produto puro.
          </>
        )
      }
    ]
  },
  {
    id: 'protocolos',
    category: 'Protocolos de Banho e Tosa',
    icon: Bath,
    questions: [
      {
        tag: 'SECAGEM',
        question: 'Como o Leave-in Ego auxilia na redução do tempo de soprador?',
        answer: 'Microemulsões que expulsam a umidade capilar, permitindo secagem até 60% mais rápida.'
      },
      {
        tag: 'SEGURANÇA',
        question: 'O Shampoo Dermo Facial pode ser utilizado em animais com hipersensibilidade?',
        answer: 'Sim, possui pH fisiológico e é isento de sulfatos, indicado para face e áreas sensíveis.'
      },
      {
        tag: 'ESTÉTICA FELINA',
        question: 'Qual o diferencial do Shampoo Redutor de Oleosidade para gatos?',
        answer: 'Atua na quebra das cadeias lipídicas felinas sem remover a hidratação natural.'
      },
      {
        tag: 'PELAGEM CLARA',
        question: 'O Shampoo Clareador pode causar manchas em pelagens bipartidas?',
        answer: 'Não. Utiliza branqueadores ópticos em vez de corantes violetas, sendo seguro para todas as cores.'
      },
      {
        tag: 'VEGANO',
        question: 'Os produtos possuem ingredientes de origem animal?',
        answer: 'Não! Nenhum produto da Bubbles tem quaisquer tipos de ingredientes de origem animal.'
      },
      {
        tag: 'HIPOALERGÊNICO',
        question: 'Os produtos são hipoalergenicos?',
        answer: 'Nossos produtos são 100% veganos e desenvolvidos com ingredientes suaves, com baixo potencial alergênico. No entanto, em pets com pele sensível ou atópica, recomendamos sempre consultar o veterinário antes do uso.'
      },
      {
        tag: 'INDICAÇÃO',
        question: 'Os produtos são para cães e gatos?',
        answer: 'Sim, todos os nossos produtos são para uso exclusivo em cães e gatos.'
      }
    ]
  },
  {
    id: 'logistica',
    category: 'Logística e Entrega',
    icon: Truck,
    questions: [
      {
        tag: 'PRAZO',
        question: 'Qual o prazo de entrega para a minha região?',
        answer: 'O prazo varia de acordo com o seu CEP. Você pode simular o prazo exato na calculadora de frete disponível no carrinho de compras ou no final da página de frete.'
      },
      {
        tag: 'RASTREIO',
        question: 'Como faço para rastrear meu pedido?',
        answer: 'Assim que o pedido for despachado, você receberá um link e o código de rastreamento por e-mail e WhatsApp para acompanhar a entrega em tempo real.'
      },
      {
        tag: 'FRETE GRÁTIS',
        question: 'A Bubbles oferece frete grátis?',
        answer: 'Sim! Oferecemos frete grátis para todo o Brasil com valores mínimos de compra que variam por região. Para mais detalhes e para acompanhar sua entrega, acesse nossa página de rastreamento.'
      }
    ]
  },
  {
    id: 'trocas',
    category: 'Trocas, Devoluções e Reembolso (CX)',
    icon: RefreshCcw,
    questions: [
      {
        tag: 'DISTRIBUIDOR',
        question: 'Comprei em um distribuidor, posso trocar no site?',
        answer: 'A troca deve ocorrer no local da compra.'
      },
      {
        tag: 'REAÇÃO ADVERSA',
        question: 'O produto causou reação no pet?',
        answer: (
          <>
            Direcionar para{' '}
            <a href="https://wa.me/5514997646454" target="_blank" rel="noopener noreferrer" className="text-[#F4CDD4] hover:underline font-medium">
              suporte
            </a>{' '}
            técnico humanizado via ajuda@bubbles.com.br ou pelo nosso WhatsApp (14) 99764-6454.
          </>
        )
      },
      {
        tag: 'AVARIA',
        question: 'O que fazer se o produto chegar com vazamento ou lacre violado?',
        answer: 'Recuse o recebimento no ato da entrega. Caso identifique após a abertura, entre em contato em até 24h via WhatsApp enviando fotos do lote e da embalagem original.'
      },
      {
        tag: 'KITS',
        question: 'Comprei um Kit Profissional e quero devolver apenas um item. É possível?',
        answer: 'Não. Para devolução por arrependimento, o kit deve ser devolvido em sua totalidade, incluindo brindes e acessórios que acompanham a promoção, mantendo a integridade do conjunto industrial.'
      },
      {
        tag: 'ACESSÓRIOS',
        question: 'O bico dosador/válvula do meu produto apresentou defeito. Vocês trocam?',
        answer: 'Sim. Caso acessórios de aplicação apresentem defeitos de fabricação em até 30 dias, enviamos a reposição da peça via frete expresso após comprovação por vídeo, garantindo que sua operação não pare.'
      },
      {
        tag: 'RESULTADO TÉCNICO',
        question: 'Usei o produto e o resultado não foi o esperado. Posso trocar?',
        answer: (
          <>
            <a href="/pages/trocas-e-devolucoes" className="text-[#F4CDD4] hover:underline font-medium">
              Trocas
            </a>{' '}
            por insatisfação com o resultado técnico devem ser precedidas de uma consultoria com nosso{' '}
            <a href="https://wa.me/5514997646454" target="_blank" rel="noopener noreferrer" className="text-[#F4CDD4] hover:underline font-medium">
              suporte
            </a>{' '}
            humanizado pelo WhatsApp (14) 99764-6454. Muitas vezes, um simples ajuste na{' '}
            <a href="/pages/diluicao" className="text-[#F4CDD4] hover:underline font-medium">
              diluição
            </a>{' '}
            (ex: 1:10 na Linha Ego / Pro) ou no modo de aplicação (como o uso do Spray Preparo na Linha Collora) resolve a questão. Não trocamos produtos abertos com mais de 10% de uso. Em caso de dúvidas, contate nosso WhatsApp.
          </>
        )
      },
      {
        tag: 'EVENTOS',
        question: 'Comprei o produto em uma feira ou evento (ex: Pet South America). Como troco?',
        answer: (
          <>
            Compras realizadas em eventos seguem o canal de{' '}
            <a href="https://wa.me/5514997646454" target="_blank" rel="noopener noreferrer" className="text-[#F4CDD4] hover:underline font-medium">
              suporte
            </a>{' '}
            técnico humanizado direto do evento pelo WhatsApp (14) 99764-6454, não o fluxo do e-commerce. Entre em contato através do nosso WhatsApp de suporte apresentando o comprovante de compra emitido no stand oficial.
          </>
        )
      },
      {
        tag: 'BRINDES',
        question: 'Como funciona a troca de brindes exclusivos?',
        answer: 'Brindes não possuem garantia de troca, exceto em casos de defeito de fabricação comprovado por foto no momento da abertura do pacote.'
      },
      {
        tag: 'PRAZO DE TROCA',
        question: 'Já solicitei a troca, em quanto tempo recebo o novo produto?',
        answer: 'É necessário aguardar a chegada do produto ao nosso Centro de Distribuição (CD) e a conferência técnica antes do novo envio. Após a aprovação, o novo envio é processado. Em caso de dúvidas, entre em contato no WhatsApp.'
      },
      {
        tag: 'REEMBOLSO',
        question: 'Quais os métodos de reembolso em caso de estorno aprovado?',
        answer: 'O estorno é realizado na mesma forma de pagamento original. Para PIX, em até 3 dias úteis. Para cartão de crédito, o valor pode constar em até duas faturas subsequentes, dependendo da administradora.'
      },
      {
        tag: 'NEGATIVA',
        question: 'O suporte técnico pode negar uma troca?',
        answer: (
          <>
            Sim. A{' '}
            <a href="/pages/trocas-e-devolucoes" className="text-[#F4CDD4] hover:underline font-medium">
              troca ou devolução
            </a>{' '}
            pode ser recusada caso o produto apresente indícios de mau uso, armazenamento incorreto, ou se a solicitação ocorrer fora do prazo legal de 7 dias (para arrependimento).
          </>
        )
      }
    ]
  },
  {
    id: 'compliance-lgpd',
    category: 'Compliance, Privacidade e Dados (LGPD)',
    icon: ShieldCheck,
    questions: [
      {
        tag: 'LGPD',
        question: 'Como a Bubbles utiliza os dados coletados na minha navegação?',
        answer: 'Coletamos dados anonimizados para análise estatística e otimização de campanhas publicitárias. Não temos acesso direto à identidade do usuário; apenas as ferramentas possuem para entregar melhores publicidades e ofertas exclusivas.'
      },
      {
        tag: 'SEGURANÇA',
        question: 'O site Bubbles é seguro para transações financeiras?',
        answer: 'Sim, utilizamos protocolos de criptografia SSL e gateways de pagamento certificados que garantem a proteção total dos dados financeiros durante a compra.'
      }
    ]
  },
  {
    id: 'duvidas-gerais',
    category: 'Dúvidas Gerais',
    icon: HelpCircle,
    questions: [
      {
        tag: 'DISTRIBUIDOR',
        question: 'Como encontrar o distribuidor mais próximo de mim?',
        answer: 'Através da plataforma https://www.encontre.bubbles.com.br/'
      },
      {
        tag: 'PEDIDOS',
        question: 'O que fazer quando estiver com problemas na finalização de pedidos?',
        answer: (
          <>
            Entre em contato pelo número{' '}
            <a href="https://wa.me/5514996312932" target="_blank" rel="noopener noreferrer" className="text-[#F4CDD4] hover:underline font-medium">
              14 99631-2932
            </a>{' '}
            para receber todo o{' '}
            <a href="https://wa.me/5514997646454" target="_blank" rel="noopener noreferrer" className="text-[#F4CDD4] hover:underline font-medium">
              suporte
            </a>{' '}
            necessário.
          </>
        )
      }
    ]
  }
];
