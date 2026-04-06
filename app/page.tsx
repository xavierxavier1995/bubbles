import Link from 'next/link';
import { LayoutTemplate, FileText, ArrowRight, Sparkles, RefreshCcw, ShieldCheck, Gavel, MapPinIcon, Mail, HelpCircle, Package, Truck, AlertCircle, Users } from 'lucide-react';

export default function ProjectHub() {
  const pages = [
    {
      title: 'Página 404',
      path: '/pagina-nao-encontrada-teste',
      description: 'Página de erro 404 personalizada com a temática da Bubbles Pet.',
      icon: AlertCircle,
      status: 'Novo',
      statusColor: 'bg-blue-100 text-blue-700'
    },
    {
      title: 'Página de Produto (Bubbles)',
      path: '/produto-2',
      description: 'Página de produto de alta conversão para Bubbles Pet Cosméticos.',
      icon: Package,
      status: 'Novo',
      statusColor: 'bg-blue-100 text-blue-700'
    },
    {
      title: 'Página de Produto',
      path: '/produto',
      description: 'Página de detalhes do produto recriada com foco em conversão e usabilidade.',
      icon: Package,
      status: 'Novo',
      statusColor: 'bg-blue-100 text-blue-700'
    },
    {
      title: 'Central de Ajuda e FAQ',
      path: '/faq',
      description: 'Página de suporte técnico, diluição e dúvidas frequentes.',
      icon: HelpCircle,
      status: 'Novo',
      statusColor: 'bg-blue-100 text-blue-700'
    },
    {
      title: 'Política de Entrega e Frete',
      path: '/politica-de-frete-e-entrega',
      description: 'Página de regras de frete, prazos e rastreamento.',
      icon: Truck,
      status: 'Concluído',
      statusColor: 'bg-green-100 text-green-700'
    },
    {
      title: 'Política de Troca e Devoluções',
      path: '/politica-de-troca-e-devolucoes',
      description: 'Página de regras de troca, devolução e reembolso.',
      icon: RefreshCcw,
      status: 'Concluído',
      statusColor: 'bg-green-100 text-green-700'
    },
    {
      title: 'Política de Privacidade',
      path: '/politica-de-privacidade',
      description: 'Página de transparência, LGPD e segurança de dados.',
      icon: ShieldCheck,
      status: 'Concluído',
      statusColor: 'bg-green-100 text-green-700'
    },
    {
      title: 'Termos de Serviço e Segurança',
      path: '/termos-de-servico',
      description: 'Página de regras de uso, blindagem e proteção B2B.',
      icon: Gavel,
      status: 'Concluído',
      statusColor: 'bg-green-100 text-green-700'
    },
    {
      title: 'Guia de Diluição',
      path: '/diluicao',
      description: 'Calculadora e guia prático para máxima rentabilidade e segurança.',
      icon: FileText,
      status: 'Concluído',
      statusColor: 'bg-green-100 text-green-700'
    },
    {
      title: 'Encontre um Distribuidor',
      path: '/encontre',
      description: 'Localizador interativo de distribuidores oficiais Bubbles.',
      icon: MapPinIcon,
      status: 'Concluído',
      statusColor: 'bg-green-100 text-green-700'
    },
    {
      title: 'Central de Ajuda e Suporte',
      path: '/suporte',
      description: 'Página de suporte técnico, diluição e dúvidas frequentes.',
      icon: HelpCircle,
      status: 'Novo',
      statusColor: 'bg-blue-100 text-blue-700'
    },
    {
      title: 'Variações de Newsletter',
      path: '/newsletter',
      description: '10 opções de design e copy para captura de leads.',
      icon: Mail,
      status: 'Novo',
      statusColor: 'bg-blue-100 text-blue-700'
    },
    {
      title: 'Newsletter Nova',
      path: '/newsletter-nova',
      description: 'Nova opção de newsletter com cashback.',
      icon: Mail,
      status: 'Novo',
      statusColor: 'bg-blue-100 text-blue-700'
    },
    {
      title: 'Design System v3',
      path: '/design-system-v3',
      description: 'Versão atualizada e expandida do sistema de design Bubbles.',
      icon: Sparkles,
      status: 'Novo',
      statusColor: 'bg-blue-100 text-blue-700'
    },
    {
      title: 'Seja um Distribuidor',
      path: '/seja-um-distribuidor',
      description: 'Página de recrutamento de novos parceiros e distribuidores oficiais.',
      icon: Users,
      status: 'Novo',
      statusColor: 'bg-blue-100 text-blue-700'
    },
    {
      title: 'Design System',
      path: '/design-system',
      description: 'Padrões visuais, componentes e tipografia da Bubbles Pet.',
      icon: LayoutTemplate,
      status: 'Novo',
      statusColor: 'bg-blue-100 text-blue-700'
    },
    {
      title: 'Design System: Degradês',
      path: '/degrades',
      description: 'Sugestões de fundos com gradientes suaves baseados na identidade visual da Bubbles.',
      icon: Sparkles,
      status: 'Novo',
      statusColor: 'bg-blue-100 text-blue-700'
    },
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#0D0C0D] font-sans selection:bg-[#F4CDD4] selection:text-[#0D0C0D] p-6 md:p-12">
      <div className="max-w-4xl mx-auto space-y-12">
        
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4CDD4]/30 text-[#0D0C0D] text-sm font-semibold">
            <Sparkles className="w-4 h-4" />
            <span>Ambiente de Desenvolvimento</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Hub do Projeto Bubbles
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Navegue pelas páginas em desenvolvimento para o novo site da Bubbles Pet Profissional. Selecione um dos links abaixo para visualizar.
          </p>
        </header>

        <div className="grid sm:grid-cols-2 gap-6">
          {pages.map((page, index) => (
            <Link 
              key={index} 
              href={page.path}
              className="group block bg-white border border-gray-200 rounded-3xl p-8 hover:border-[#F4CDD4] hover:shadow-lg hover:shadow-[#F4CDD4]/10 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-[#F4CDD4]/20 rounded-2xl flex items-center justify-center text-[#0D0C0D] group-hover:scale-110 transition-transform">
                  <page.icon className="w-6 h-6" />
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${page.statusColor}`}>
                  {page.status}
                </span>
              </div>
              
              <h2 className="text-2xl font-bold mb-2 group-hover:text-[#F4CDD4] transition-colors">
                {page.title}
              </h2>
              <p className="text-gray-600 mb-6">
                {page.description}
              </p>
              
              <div className="flex items-center gap-2 text-sm font-bold text-[#0D0C0D] group-hover:gap-3 transition-all">
                Visualizar Página <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}

          {/* Placeholder for the Footer page you are writing the prompt for */}
          <Link 
            href="/rodape"
            className="group block bg-white border border-gray-200 rounded-3xl p-8 hover:border-[#F4CDD4] hover:shadow-lg hover:shadow-[#F4CDD4]/10 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 bg-[#F4CDD4]/20 rounded-2xl flex items-center justify-center text-[#0D0C0D] group-hover:scale-110 transition-transform">
                <LayoutTemplate className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-green-100 text-green-700">
                Concluído
              </span>
            </div>
            
            <h2 className="text-2xl font-bold mb-2 group-hover:text-[#F4CDD4] transition-colors">
              Novo Rodapé (Footer)
            </h2>
            <p className="text-gray-600 mb-6">
              Rodapé focado em conversão, autoridade e usabilidade mobile.
            </p>
            
            <div className="flex items-center gap-2 text-sm font-bold text-[#0D0C0D] group-hover:gap-3 transition-all">
              Visualizar Página <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
}

function TruckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  );
}
