import Image from 'next/image';
import { Truck, ShieldCheck, MessageCircle, Package, MapPin, ArrowRight, CheckCircle2, Clock, RefreshCcw, Calendar, ShieldAlert, Smartphone, CreditCard, ChevronDown } from 'lucide-react';

export default function ShippingPolicy() {
  return (
    <div className="min-h-screen bg-white text-[#0D0C0D] font-sans selection:bg-[#F4CDD4] selection:text-[#0D0C0D]">
      {/* Navigation Bar Simulation */}
      <nav className="border-b border-gray-100 py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="flex items-center gap-2">
          {/* Using a placeholder for the logo */}
          <div className="font-extrabold text-2xl tracking-tighter text-[#0D0C0D]">Bubbles</div>
        </div>
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#" className="hover:text-[#F4CDD4] transition-colors">Produtos</a>
          <a href="#" className="hover:text-[#F4CDD4] transition-colors">Linhas</a>
          <a href="#" className="hover:text-[#F4CDD4] transition-colors">Comunidade VIP</a>
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
            Na Bubbles, priorizamos a segurança e a agilidade para que o seu banho e tosa nunca fique desabastecido. Utilizamos inteligência logística para garantir que produtos pesados cheguem intactos.
          </p>
        </section>

        {/* Free Shipping Rules */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Frete Grátis por Região</h2>
            <p className="text-gray-600">
              Planeje seus pedidos e aproveite nossas condições especiais de frete grátis. Entregamos em todo o Brasil com as melhores transportadoras.
            </p>
            
            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#F4CDD4]/20">
                    <th className="py-4 px-6 font-semibold text-[#0D0C0D]">Região</th>
                    <th className="py-4 px-6 font-semibold text-[#0D0C0D]">Condição</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-medium">Sudeste</td>
                    <td className="py-4 px-6 text-gray-600">Acima de R$ 399,90</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-medium">Sul</td>
                    <td className="py-4 px-6 text-gray-600">Acima de R$ 449,90</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-medium">Centro-Oeste</td>
                    <td className="py-4 px-6 text-gray-600">Acima de R$ 499,90</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-medium">Nordeste</td>
                    <td className="py-4 px-6 text-gray-600">Acima de R$ 799,90</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-medium">Norte</td>
                    <td className="py-4 px-6 text-gray-600">Acima de R$ 899,90</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="relative h-[400px] rounded-3xl overflow-hidden bg-gray-100">
            <Image 
              src="https://picsum.photos/seed/dogplaying/800/800" 
              alt="Cachorro brincando" 
              fill 
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="font-medium text-sm uppercase tracking-wider mb-1 opacity-90">Rendimento Garantido</p>
              <p className="text-xl font-bold">Seu banho e tosa sempre abastecido.</p>
            </div>
          </div>
        </section>

        {/* Deadlines & Security */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#F4CDD4]/20 rounded-3xl p-8 md:p-12 space-y-6">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm">
              <Clock className="w-7 h-7 text-[#0D0C0D]" />
            </div>
            <h3 className="text-2xl font-bold">Prazos e Processamento</h3>
            <p className="text-gray-700 leading-relaxed">
              Após a aprovação do pagamento, temos um prazo de <strong>até 3 dias úteis</strong> para despacho. Utilizamos a plataforma <strong>Mandaê</strong>, que seleciona a transportadora mais eficiente e rápida para a sua região.
            </p>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 space-y-6 relative overflow-hidden group">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm relative z-10">
              <ShieldCheck className="w-7 h-7 text-[#0D0C0D]" />
            </div>
            <h3 className="text-2xl font-bold relative z-10">Segurança no Transporte</h3>
            <p className="text-gray-700 leading-relaxed relative z-10">
              Destaque para o uso de <strong>embalagem reforçada anti-vazamento</strong>, garantindo a integridade total dos nossos galões de 5L até a sua porta.
            </p>
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-white rounded-full opacity-50 group-hover:scale-110 transition-transform duration-700"></div>
          </div>
        </section>

        {/* Communication & Tracking */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Comunicação e Rastreamento</h2>
            <p className="text-gray-600">Acompanhe cada passo do seu pedido com total transparência.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: CheckCircle2,
                title: 'Aprovação',
                desc: 'Notificação via WhatsApp confirmando o pedido aprovado.'
              },
              {
                icon: Package,
                title: 'Envio',
                desc: 'Envio de link direto e código de rastreio para seu e-mail e WhatsApp.'
              },
              {
                icon: MapPin,
                title: 'Acompanhamento',
                desc: 'Insira o código no link enviado para verificar a movimentação em tempo real.'
              },
              {
                icon: RefreshCcw,
                title: 'Tentativas',
                desc: 'Padrão de até 3 tentativas de entrega antes do retorno à fábrica.'
              }
            ].map((step, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-[#F4CDD4]/30 flex items-center justify-center mb-4 text-[#0D0C0D]">
                  <step.icon className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold mb-2">{step.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Políticas de Troca e Devolução */}
        <section className="space-y-12 pt-12 border-t border-gray-100">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4CDD4]/30 text-[#0D0C0D] text-sm font-semibold mb-2">
              <RefreshCcw className="w-4 h-4" />
              <span>Trocas e Devoluções</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Política de Troca e Devoluções</h2>
            <p className="text-gray-600">Transparência e segurança para você e seu pet shop.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Direito de Arrependimento */}
            <div className="bg-gray-50 rounded-3xl p-8 space-y-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                <Calendar className="w-6 h-6 text-[#0D0C0D]" />
              </div>
              <h3 className="text-xl font-bold">Direito de Arrependimento (7 Dias)</h3>
              <p className="text-gray-700 leading-relaxed">
                Conforme o Código de Defesa do Consumidor, o prazo para desistência é de <strong>7 dias corridos</strong> após o recebimento.
              </p>
              <div className="bg-white p-4 rounded-xl border border-gray-100 text-sm text-gray-600">
                <strong className="text-[#0D0C0D]">Condição:</strong> O produto deve estar lacrado, sem uso e em embalagem original. Brindes e amostras de campanhas devem ser devolvidos junto ao pedido.
              </div>
            </div>

            {/* Protocolo de Avarias e Vícios */}
            <div className="bg-gray-50 rounded-3xl p-8 space-y-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                <ShieldAlert className="w-6 h-6 text-[#0D0C0D]" />
              </div>
              <h3 className="text-xl font-bold">Protocolo de Avarias e Vícios (Segurança Industrial)</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong className="text-[#0D0C0D]">No Recebimento:</strong> Caso a embalagem apresente danos ou vazamentos visíveis (mesmo com nossa embalagem reforçada), recuse a entrega e anote o motivo no verso da nota fiscal.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong className="text-[#0D0C0D]">Vício Oculto:</strong> Prazo de 30 dias para relatar defeitos de fabricação que não decorram de mau uso profissional.
              </p>
            </div>

            {/* Como Solicitar */}
            <div className="bg-gray-50 rounded-3xl p-8 space-y-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                <Smartphone className="w-6 h-6 text-[#0D0C0D]" />
              </div>
              <h3 className="text-xl font-bold">Como Solicitar</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#F4CDD4]/30 flex items-center justify-center text-sm font-bold shrink-0">1</div>
                  <span>Acesse "Meus Pedidos" no seu Perfil.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#F4CDD4]/30 flex items-center justify-center text-sm font-bold shrink-0">2</div>
                  <span>Clique em "Solicitar Troca/Devolução".</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#F4CDD4]/30 flex items-center justify-center text-sm font-bold shrink-0">3</div>
                  <span>Envie fotos do lote e da avaria para validação técnica via WhatsApp <strong>(14) 99631-2932</strong>.</span>
                </li>
              </ul>
            </div>

            {/* Regras de Reembolso */}
            <div className="bg-gray-50 rounded-3xl p-8 space-y-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                <CreditCard className="w-6 h-6 text-[#0D0C0D]" />
              </div>
              <h3 className="text-xl font-bold">Regras de Reembolso</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-xl border border-gray-100">
                  <strong className="block text-[#0D0C0D] mb-1">Cartão de Crédito</strong>
                  <span className="text-sm text-gray-600">Estorno em até duas faturas após conferência.</span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100">
                  <strong className="block text-[#0D0C0D] mb-1">PIX/Boleto</strong>
                  <span className="text-sm text-gray-600">Reembolso em conta do titular em até 30 dias úteis após aprovação de qualidade.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Dúvidas Frequentes</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            <details className="group bg-white border border-gray-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#0D0C0D] font-bold">
                "Comprei em um distribuidor, posso trocar no site?"
                <ChevronDown className="w-5 h-5 transition duration-300 group-open:-rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                A troca deve ocorrer no local da compra.
              </div>
            </details>
            <details className="group bg-white border border-gray-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#0D0C0D] font-bold">
                "O produto causou reação no pet?"
                <ChevronDown className="w-5 h-5 transition duration-300 group-open:-rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                Direcionar para suporte técnico humanizado via <a href="mailto:ajuda@bubbles.com.br" className="text-[#F4CDD4] hover:underline font-medium">ajuda@bubbles.com.br</a>.
              </div>
            </details>
            <details className="group bg-white border border-gray-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#0D0C0D] font-bold">
                "O galão de 5L chegou com vazamento. O que devo fazer?"
                <ChevronDown className="w-5 h-5 transition duration-300 group-open:-rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                Mesmo com nossa embalagem reforçada anti-vazamento, se notar qualquer dano no ato da entrega, recuse o recebimento e anote o motivo no verso da nota fiscal. Se notar após a abertura, entre em contato em até 24h via WhatsApp com fotos do lote.
              </div>
            </details>
            <details className="group bg-white border border-gray-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#0D0C0D] font-bold">
                "Comprei um Kit Profissional e quero devolver apenas um item. É possível?"
                <ChevronDown className="w-5 h-5 transition duration-300 group-open:-rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                Não. Para devolução por arrependimento, o kit deve ser devolvido em sua totalidade, incluindo brindes e acessórios que acompanham a promoção, mantendo a integridade do conjunto industrial.
              </div>
            </details>
            <details className="group bg-white border border-gray-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#0D0C0D] font-bold">
                "O bico dosador/válvula do meu produto apresentou defeito. Vocês trocam?"
                <ChevronDown className="w-5 h-5 transition duration-300 group-open:-rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                Sim. Caso acessórios de aplicação apresentem defeitos de fabricação em até 30 dias, enviamos a reposição da peça sem custos, garantindo que sua operação não pare.
              </div>
            </details>
            <details className="group bg-white border border-gray-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#0D0C0D] font-bold">
                "Usei o produto e o resultado não foi o esperado. Posso trocar?"
                <ChevronDown className="w-5 h-5 transition duration-300 group-open:-rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                Trocas por insatisfação com o resultado técnico devem ser precedidas de uma consultoria com nosso suporte humanizado para validar a diluição e o modo de uso. Não trocamos produtos abertos com mais de 10% de uso.
              </div>
            </details>
            <details className="group bg-white border border-gray-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#0D0C0D] font-bold">
                "Comprei o produto em uma feira ou evento (ex: Pet South America). Como troco?"
                <ChevronDown className="w-5 h-5 transition duration-300 group-open:-rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                Trocas de compras realizadas em eventos devem ser solicitadas diretamente através do nosso e-mail de suporte, apresentando o comprovante de compra emitido no stand oficial.
              </div>
            </details>
            <details className="group bg-white border border-gray-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#0D0C0D] font-bold">
                "O cashback utilizado na compra é devolvido em caso de estorno?"
                <ChevronDown className="w-5 h-5 transition duration-300 group-open:-rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                Sim. O valor pago em dinheiro é estornado e o saldo de cashback utilizado retorna para sua carteira digital no site para uma compra futura.
              </div>
            </details>
            <details className="group bg-white border border-gray-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#0D0C0D] font-bold">
                "Posso trocar um produto que está próximo do vencimento?"
                <ChevronDown className="w-5 h-5 transition duration-300 group-open:-rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                Garantimos o envio de produtos com validade adequada para uso profissional. Caso receba um item com vencimento inferior a 3 meses, realizaremos a troca imediata sem custos.
              </div>
            </details>
            <details className="group bg-white border border-gray-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#0D0C0D] font-bold">
                "Como funciona a troca de brindes exclusivos?"
                <ChevronDown className="w-5 h-5 transition duration-300 group-open:-rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                Brindes não possuem garantia de troca, exceto em casos de defeito de fabricação comprovado por foto no momento da abertura do pacote.
              </div>
            </details>
            <details className="group bg-white border border-gray-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#0D0C0D] font-bold">
                "Já solicitei a troca, em quanto tempo recebo o novo produto?"
                <ChevronDown className="w-5 h-5 transition duration-300 group-open:-rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                O novo envio é processado em até 5 dias úteis após o recebimento e conferência do item devolvido em nossa fábrica em Lençóis Paulista.
              </div>
            </details>
            <details className="group bg-white border border-gray-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#0D0C0D] font-bold">
                "O suporte técnico pode negar uma troca?"
                <ChevronDown className="w-5 h-5 transition duration-300 group-open:-rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                Sim. Caso a auditoria identifique mau uso, diluição incorreta fora dos padrões industriais ou armazenamento em local inadequado (umidade/sol), a troca será indeferida conforme o CDC.
              </div>
            </details>
          </div>
        </section>

        {/* UX Elements: Calculator & Help */}
        <section className="bg-[#0D0C0D] text-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center justify-between">
          <div className="space-y-6 flex-1">
            <h3 className="text-2xl font-bold">Calcule seu Frete</h3>
            <p className="text-gray-400 text-sm">
              Insira seu CEP abaixo para simular prazos e valores de entrega para o seu pet shop.
            </p>
            <div className="flex gap-2 max-w-md">
              <div className="relative flex-1">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="00000-000" 
                  className="w-full bg-white/10 border border-white/20 rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F4CDD4] transition-all"
                />
              </div>
              <button className="bg-[#F4CDD4] text-[#0D0C0D] font-bold px-6 py-3 rounded-xl hover:bg-white transition-colors flex items-center gap-2">
                Calcular
              </button>
            </div>
          </div>

          <div className="flex-1 flex flex-col items-start md:items-end space-y-6 border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-12 w-full">
            <div className="space-y-4 w-full">
              <a href="#" className="group flex items-center justify-between w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                <div className="flex items-center gap-3">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#F4CDD4]"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  <span className="font-medium">Precisa de ajuda? Fale no WhatsApp</span>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </a>
              <a href="#" className="group flex items-center justify-between w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                <div className="flex items-center gap-3">
                  <RefreshCcw className="w-5 h-5 text-[#F4CDD4]" />
                  <span className="font-medium">Confira nossa política de trocas e devoluções</span>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-gray-50 py-12 mt-12">
        <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 opacity-50 grayscale">
            <Package className="w-6 h-6" />
            <span className="font-bold tracking-tight">Enviado via Mandaê</span>
          </div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Bubbles Pet Profissional. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
