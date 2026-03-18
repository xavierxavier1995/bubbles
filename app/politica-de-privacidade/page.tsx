import { ShieldCheck, Database, UserCheck, Cookie, Mail, Lock, Heart } from 'lucide-react';

export default function PrivacyPolicy() {
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4CDD4]/30 text-[#0D0C0D] text-sm font-semibold mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>LGPD 2025/2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0D0C0D]">
            Política de Privacidade
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Na Bubbles, tratamos você como parceira. A transparência é a base da nossa relação, e a segurança dos seus dados (e dos pets que você atende) é nossa prioridade.
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
                Coletamos apenas o necessário para que sua operação não pare e para entregar a melhor experiência possível:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F4CDD4] mt-2 shrink-0"></div>
                  <span><strong>Dados Cadastrais e de Entrega (Nome, CPF, E-mail, Endereço):</strong> Essenciais para faturamento e para que nossa parceira logística, a <strong>Mandaê</strong>, entregue seus galões com rapidez e precisão.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F4CDD4] mt-2 shrink-0"></div>
                  <span><strong>Dados dos Pets (Raça e Tipo de Pelo):</strong> Nosso diferencial. Usamos essas informações para enviar <strong>dicas educativas personalizadas</strong> de uso e diluição das linhas <strong>Ego e Basiq</strong>, ajudando você a extrair a máxima performance no banho e tosa.</span>
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
              <h2 className="text-2xl font-bold">3. Segurança dos Dados e Pagamentos</h2>
              <p className="text-gray-300 leading-relaxed">
                Levamos a segurança a sério. Utilizamos <strong>criptografia de ponta a ponta (SSL)</strong> em toda a sua navegação. 
              </p>
              <p className="text-gray-300 leading-relaxed">
                Seus dados de pagamento (cartão de crédito) são processados em um <strong>ambiente seguro sem nenhum acesso humano</strong>, seguindo o rigoroso padrão internacional <strong>PCI DSS</strong>. Nós não armazenamos os números do seu cartão.
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
                Usamos esses pequenos arquivos de texto para <strong>melhorar a sua experiência de navegação mobile</strong> e <strong>agilizar a reposição dos seus galões de 5L</strong>. Eles nos ajudam a entender o que você mais precisa, sem invadir sua privacidade.
              </p>
            </div>
          </section>

          {/* 5. Contato do DPO */}
          <section className="bg-[#F4CDD4]/20 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center border border-[#F4CDD4]/30">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0">
              <Mail className="w-7 h-7 text-[#0D0C0D]" />
            </div>
            <div className="space-y-2 flex-grow">
              <h2 className="text-2xl font-bold">5. Fale com nosso Encarregado (DPO)</h2>
              <p className="text-gray-700 leading-relaxed">
                Ficou com alguma dúvida sobre como tratamos seus dados? Nossa equipe está pronta para atender você com total transparência.
              </p>
            </div>
            <div className="shrink-0 w-full md:w-auto">
              <a href="mailto:privacidade@bubbles.com.br" className="block w-full text-center bg-[#0D0C0D] text-white font-bold py-4 px-8 rounded-xl hover:bg-gray-800 transition-colors">
                privacidade@bubbles.com.br
              </a>
              <p className="text-xs text-center text-gray-500 mt-3 font-medium">Prazo de resposta: até 15 dias úteis</p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-gray-50 py-12 mt-12">
        <div className="max-w-4xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-gray-400">
            <Heart className="w-5 h-5" />
            <span className="font-medium text-sm">Feito com cuidado para o mercado Pet</span>
          </div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Bubbles Pet Profissional. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
