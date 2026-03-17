import Image from 'next/image';
import { Truck, ShieldCheck, MessageCircle, Package, MapPin, ArrowRight, CheckCircle2, Clock, RefreshCcw } from 'lucide-react';

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
                  <MessageCircle className="w-5 h-5 text-[#F4CDD4]" />
                  <span className="font-medium">Precisa de ajuda? Fale no WhatsApp</span>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </a>
              <a href="#" className="group flex items-center justify-between w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                <div className="flex items-center gap-3">
                  <RefreshCcw className="w-5 h-5 text-[#F4CDD4]" />
                  <span className="font-medium">Política de Trocas e Devoluções</span>
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
