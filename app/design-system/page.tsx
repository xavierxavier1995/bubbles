'use client';
import { useState, useEffect } from 'react';
import { 
  ShoppingCart, User, Search, ChevronDown, Instagram, Youtube, MessageCircle, 
  Package, Droplet, Wind, Scissors, Star, Truck, RefreshCw, CheckCircle, 
  X, ArrowRight, Shield, Award, Leaf, Zap, Clock, TrendingUp, DollarSign, 
  Users, Briefcase, BarChart2, Phone, Mail, HelpCircle, Info, AlertCircle, 
  Check, Edit3, Eye, EyeOff, Loader, Hash, Layers, Sliders, Wrench, Sun, Minus, Cloud, 
  Feather, Circle, Heart, Loader2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';

const ColorSwatch = ({ name, token, hex, rgb, cmyk, description }: { name: string, token: string, hex: string, rgb?: string, cmyk?: string, description?: string }) => (
  <div className="flex flex-col gap-2">
    <div className="w-full h-20 rounded-lg border border-[#E5E5E5] shadow-sm" style={{ backgroundColor: hex }} />
    <div className="flex flex-col">
      <span className="text-[11px] font-bold uppercase tracking-wider text-brand-dark">{name}</span>
      <span className="text-[10px] font-mono text-muted">{token}</span>
      <div className="flex flex-wrap gap-x-2 gap-y-0.5 mt-1">
        <span className="text-[9px] font-mono text-muted uppercase">HEX: {hex}</span>
        {rgb && <span className="text-[9px] font-mono text-muted uppercase">RGB: {rgb}</span>}
        {cmyk && <span className="text-[9px] font-mono text-muted uppercase">CMYK: {cmyk}</span>}
      </div>
      {description && <p className="text-[9px] text-muted mt-1 leading-tight">{description}</p>}
    </div>
  </div>
);

const IntensityScale = ({ baseHex, name }: { baseHex: string, name: string }) => {
  const opacities = [1, 0.8, 0.6, 0.4, 0.2, 0.1];
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted">Escala de Intensidade: {name}</h4>
      <div className="flex gap-2">
        {opacities.map((op) => (
          <div key={op} className="flex-1 flex flex-col gap-1">
            <div 
              className="h-12 rounded-md border border-[#E5E5E5]" 
              style={{ backgroundColor: baseHex, opacity: op }} 
            />
            <span className="text-[8px] font-mono text-center text-muted">{Math.round(op * 100)}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const SectionHeader = ({ title, subtitle, id }: { title: string, subtitle?: string, id: string }) => (
  <div id={id} className="mb-10 pt-20">
    <h2 className="text-3xl font-black mb-2">{title}</h2>
    {subtitle && <p className="text-muted text-sm">{subtitle}</p>}
    <div className="h-1 w-20 bg-brand-pink mt-4 rounded-full" />
  </div>
);

const ButtonDemo = ({ label, variant, size = 'md', state, rounded }: any) => {
  let className = "";
  if (variant === 'green') className = "btn-primary-green";
  if (variant === 'dark') className = "btn-dark";
  if (variant === 'outline') className = "btn-outline-dark";
  if (variant === 'outline-pink') className = "btn-outline-pink";
  if (variant === 'outline-super-pink') className = "btn-outline-super-pink";
  if (variant === 'pink-solid') className = "bg-brand-pink text-brand-dark font-black uppercase text-[13px] px-6 py-3 rounded-full hover:scale-105 transition-all";
  if (variant === 'black-pink') className = "bg-brand-dark text-brand-pink font-black uppercase text-[13px] px-6 py-3 rounded-md flex items-center gap-2 hover:gap-4 transition-all";
  if (variant === 'ghost') className = "btn-ghost";

  if (size === 'sm') className += " btn-sm";
  if (size === 'md') className += " btn-md";
  if (size === 'lg') className += " btn-lg";
  
  if (rounded === 'none') className += " !rounded-none";
  if (rounded === 'sm') className += " !rounded-sm";
  if (rounded === 'md') className += " !rounded-md";
  if (rounded === 'lg') className += " !rounded-lg";
  if (rounded === 'full') className += " !rounded-full";

  const isDisabled = state === 'disabled';
  const isLoading = state === 'loading';

  return (
    <div className="flex flex-col items-center gap-2">
      <span className="text-[10px] font-mono text-muted uppercase">{state || 'default'}</span>
      <button 
        className={`${className} ${isDisabled ? 'opacity-40 cursor-not-allowed' : ''} ${isLoading ? 'relative !text-transparent' : ''}`}
        disabled={isDisabled}
      >
        {isLoading && <Loader2 className={`absolute inset-0 m-auto animate-spin ${variant === 'outline' || variant === 'ghost' ? 'text-brand-dark' : 'text-white'}`} size={16} />}
        {label}
        {variant === 'black-pink' && <ArrowRight size={16} />}
      </button>
    </div>
  );
};

const Stepper = () => {
  const [count, setCount] = useState(1);
  return (
    <div className="flex items-center border-[1.5px] border-[#E5E5E5] rounded-lg overflow-hidden bg-white w-fit">
      <button 
        onClick={() => setCount(Math.max(1, count - 1))}
        className="w-10 h-11 bg-[#F7F7F7] flex items-center justify-center text-[18px] font-normal hover:bg-[#EFEFEF] transition-colors border-none cursor-pointer"
      >
        −
      </button>
      <div className="w-[50px] h-11 flex items-center justify-center font-bold text-[15px] border-x border-[#E5E5E5] font-figtree">
        {count}
      </div>
      <button 
        onClick={() => setCount(count + 1)}
        className="w-10 h-11 bg-[#F7F7F7] flex items-center justify-center text-[18px] font-normal hover:bg-[#EFEFEF] transition-colors border-none cursor-pointer"
      >
        +
      </button>
    </div>
  );
};

const B2BFormDemo = () => {
  const [step, setStep] = useState(2);
  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  return (
    <div className="bg-white rounded-[20px] max-w-[480px] w-full p-10 shadow-[0_20px_60px_rgba(0,0,0,0.25)] relative border border-[#E5E5E5]">
      <button className="absolute top-6 right-6 text-muted hover:text-brand-dark transition-colors">
        <X size={20} />
      </button>
      
      <div className="mb-8">
        <div className="flex justify-between items-end mb-2">
          <span className="text-[11px] font-black uppercase tracking-[0.2em] text-muted">Etapa {step} de {totalSteps}</span>
          <span className="text-[11px] font-black uppercase tracking-[0.2em] text-brand-dark">Perfil do Negócio</span>
        </div>
        <div className="h-[3px] w-full bg-[#E5E5E5] rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-brand-dark"
          />
        </div>
      </div>

      <div className="space-y-6 mb-10">
        <div>
          <label className="block text-[13px] font-semibold text-brand-dark mb-2">Nome da Empresa</label>
          <input type="text" className="input-bubbles" placeholder="Ex: Pet Shop Bubbles" />
        </div>
        <div>
          <label className="block text-[13px] font-semibold text-brand-dark mb-2">CNPJ</label>
          <input type="text" className="input-bubbles" placeholder="00.000.000/0000-00" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-[13px] font-semibold text-brand-dark mb-2">Cidade</label>
            <input type="text" className="input-bubbles" placeholder="São Paulo" />
          </div>
          <div>
            <label className="block text-[13px] font-semibold text-brand-dark mb-2">Estado</label>
            <input type="text" className="input-bubbles" placeholder="SP" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <button className="btn-dark w-full">AVANÇAR</button>
        <button className="btn-ghost text-[13px] font-black uppercase tracking-widest flex items-center justify-center gap-2">
          <ArrowRight size={16} className="rotate-180" /> Voltar
        </button>
      </div>
    </div>
  );
};

const ProductCardDemo = () => {
  return (
    <div className="bg-white border border-[#E5E5E5] rounded-[12px] overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.07)] transition-all duration-250 hover:shadow-[0_8px_24px_rgba(0,0,0,0.14)] hover:-translate-y-1 cursor-pointer w-full max-w-[280px]">
      <div className="aspect-square bg-[#F7F7F7] relative overflow-hidden">
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
          <span className="bg-[#E03E3E] text-white text-[10px] font-black uppercase px-2 py-1 rounded-[4px] leading-none tracking-[0.06em]">PROMOÇÃO</span>
          <span className="bg-action-green text-white text-[10px] font-black uppercase px-2 py-1 rounded-full leading-none tracking-[0.06em]">15% OFF</span>
        </div>
        <img src="https://picsum.photos/seed/bubbles-p1/400/400" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
      </div>
      <div className="p-4">
        <div className="flex gap-1 mb-2">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} size={12} fill="#F5A623" color="#F5A623" />
          ))}
        </div>
        <h3 className="text-[13px] font-semibold text-brand-dark leading-[1.35] line-clamp-2 mb-4 h-9">
          Shampoo Profissional EGO 5L - Concentrado
        </h3>
        <div className="mb-4">
          <span className="text-[13px] text-[#AEAEAE] line-through block">R$ 299,90</span>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-black tracking-[-0.02em] text-brand-dark">R$ 249,90</span>
          </div>
          <span className="text-[11px] text-muted block mt-1">ou 3x de R$ 83,30 sem juros</span>
          <div className="flex items-center gap-1.5 mt-2 text-brand-dark">
            <CashbackIcon size={14} />
            <span className="text-[10px] font-bold">Ganhe <strong className="font-black">R$ 12,50</strong> de cashback</span>
          </div>
        </div>
        <button className="btn-primary-green w-full !py-2.5 !text-[11px]">COMPRAR</button>
      </div>
    </div>
  );
};

const CashbackIcon = ({ size = 16, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
    <path d="M21 3v5h-5" />
    <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
    <path d="M3 21v-5h5" />
    <path d="M12 7v10" />
    <path d="M16 8h-4.5a2.5 2.5 0 0 0 0 5h3a2.5 2.5 0 0 1 0 5H8" />
  </svg>
);

const InfoTable = ({ rendimento, custo, diluicao }: any) => (
  <div className="flex items-center bg-[#F7F7F7] rounded-[18px] px-8 py-6 w-full max-w-2xl border border-[#E5E5E5]/30">
    <div className="flex-1 text-center">
      <span className="block text-[11px] font-bold uppercase tracking-[0.12em] text-[#999999] mb-1">RENDIMENTO</span>
      <span className="text-[18px] font-bold text-brand-dark">{rendimento}</span>
    </div>
    <div className="w-[1px] h-10 bg-[#E5E5E5] mx-4" />
    <div className="flex-1 text-center">
      <span className="block text-[11px] font-bold uppercase tracking-[0.12em] text-[#999999] mb-1">CUSTO/BANHO</span>
      <span className="text-[18px] font-bold text-brand-dark">{custo}</span>
    </div>
    <div className="w-[1px] h-10 bg-[#E5E5E5] mx-4" />
    <div className="flex-1 text-center">
      <span className="block text-[11px] font-bold uppercase tracking-[0.12em] text-[#999999] mb-1">DILUIÇÃO</span>
      <span className="text-[18px] font-bold text-brand-dark">{diluicao}</span>
    </div>
  </div>
);

const ProductTabs = ({ vertical = false }: { vertical?: boolean }) => {
  const tabs = ['Descrição', 'Avaliações', 'Análises', 'Composição'];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  if (vertical) {
    return (
      <div className="flex gap-10">
        <div className="w-48 flex flex-col border-r border-[#E5E5E5]">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 pr-8 text-left text-[13px] font-bold uppercase tracking-wider transition-all border-r-2 -mr-[2px] ${
                activeTab === tab ? 'text-brand-dark border-brand-dark' : 'text-muted border-transparent hover:text-brand-dark'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="flex-1 py-4">
          <h4 className="text-xl font-black mb-4">{activeTab}</h4>
          <p className="text-[14px] leading-relaxed text-muted">
            Conteúdo da aba {activeTab}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="border-b border-[#E5E5E5] flex gap-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-4 text-[13px] font-bold uppercase tracking-wider transition-all border-b-2 -mb-[1px] ${
              activeTab === tab ? 'text-brand-dark border-brand-dark' : 'text-muted border-transparent hover:text-brand-dark'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="py-8">
        <h4 className="text-xl font-black mb-4">{activeTab}</h4>
        <p className="text-[14px] leading-relaxed text-muted">
          Conteúdo da aba {activeTab}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  );
};

const IconBox = ({ icon: Icon, name, usage }: any) => (
  <div className="flex flex-col items-center p-4 border border-[#E5E5E5] rounded-lg bg-[#F7F7F7] group hover:bg-white hover:shadow-md transition-all">
    <Icon size={24} strokeWidth={1.5} className="mb-3 text-brand-dark group-hover:text-action-green transition-colors" />
    <span className="text-[11px] font-bold uppercase tracking-wider mb-1">{name}</span>
    <span className="text-[10px] text-muted text-center">{usage}</span>
  </div>
);

const sections = [
  { id: 'hero', label: 'Hero' },
  { id: 'logos', label: 'Logos & Sub-marcas' },
  { id: 'colors', label: 'Cores' },
  { id: 'typography', label: 'Tipografia' },
  { id: 'buttons', label: 'Botões' },
  { id: 'b2b-form', label: 'Formulário B2B' },
  { id: 'cards', label: 'Cards de Produto' },
  { id: 'product-specific', label: 'Componentes de Produto' },
  { id: 'forms', label: 'Inputs & Formulários' },
  { id: 'badges', label: 'Badges & Labels' },
  { id: 'motion', label: 'Motion & Transições' },
  { id: 'categories', label: 'Categorias' },
  { id: 'copywriting', label: 'Copywriting & Tom de Voz' },
  { id: 'differentials', label: 'Diferenciais Competitivos' },
  { id: 'guidelines', label: 'Diretrizes da Marca' },
  { id: 'backgrounds', label: 'Backgrounds & Gradients' },
  { id: 'tokens', label: 'Tokens CSS' },
];

export default function DesignSystemDocs() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveSection(section.id);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#FDFDFD] flex flex-col">
      <div className="flex flex-grow">
      {/* Sidebar */}
      <aside className="hidden lg:block w-64 border-r border-[#E5E5E5] sticky top-0 h-screen p-8 overflow-y-auto scrollbar-hide">
        <div className="mb-10">
          <Link href="/" className="font-black text-2xl tracking-tighter text-brand-dark hover:text-brand-pink transition-colors">BUBBLES</Link>
          <p className="text-[10px] font-bold uppercase tracking-widest text-muted mt-1">Design System v1.0</p>
        </div>
        <nav className="flex flex-col gap-2 pb-20">
          {sections.map((s) => (
            <button 
              key={s.id} 
              onClick={() => scrollToSection(s.id)}
              className={`text-[11px] font-bold uppercase tracking-widest px-4 py-2 rounded-full transition-all text-left cursor-pointer ${activeSection === s.id ? 'bg-brand-pink text-brand-dark' : 'text-muted hover:bg-[#F7F7F7]'}`}
            >
              {s.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-5 md:px-20 pb-40">
        {/* 1. HERO */}
        <section id="hero" className="bg-brand-dark text-white rounded-[20px] p-12 md:p-20 mt-10 relative overflow-hidden">
          <div className="relative z-10">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 block mb-4">Industrial de Luxo Chic</span>
            <h1 className="text-5xl md:text-7xl font-black mb-4">Design System v1.0</h1>
            <p className="text-white/70 text-lg mb-10 max-w-xl">Guia visual vivo para a marca de cosméticos pet premium mais desejada do Brasil.</p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-white/10 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Figtree</span>
              <span className="bg-white/10 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Lucide Icons</span>
              <span className="bg-white/10 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Shopify OS 2.0</span>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-pink/10 to-transparent pointer-events-none" />
        </section>

        {/* 2. LOGOS & SUB-MARCAS */}
        <SectionHeader title="Logos & Sub-marcas" id="logos" />
        <div className="space-y-16 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-brand-dark p-16 rounded-2xl flex flex-col items-center justify-center gap-6">
              <img 
                src="https://bubbles.gabrielxavier.online/BUBBLES.svg" 
                alt="Bubbles Logo Negative" 
                className="h-16 invert brightness-0" 
                referrerPolicy="no-referrer"
              />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">Aplicação Negativa</span>
            </div>
            <div className="bg-brand-pink p-16 rounded-2xl flex flex-col items-center justify-center gap-6">
              <img 
                src="https://bubbles.gabrielxavier.online/BUBBLES.svg" 
                alt="Bubbles Logo Institutional" 
                className="h-16" 
                referrerPolicy="no-referrer"
              />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-dark/40">Aplicação Institucional</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-12 rounded-2xl border border-[#E5E5E5] flex flex-col items-center justify-center gap-6">
              <img 
                src="https://bubbles.gabrielxavier.online/PATINHA%20BUBBLES.svg" 
                alt="Patinha Bubbles" 
                className="h-20" 
                referrerPolicy="no-referrer"
              />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted">Símbolo (Patinha)</span>
            </div>
            <div className="bg-brand-dark p-12 rounded-2xl flex flex-col items-center justify-center gap-6">
              <img 
                src="https://bubbles.gabrielxavier.online/PATINHA%20BUBBLES.svg" 
                alt="Patinha Bubbles Negative" 
                className="h-20 invert brightness-0" 
                referrerPolicy="no-referrer"
              />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">Símbolo Negativo</span>
            </div>
            <div className="bg-[#F7F7F7] p-12 rounded-2xl flex flex-col items-center justify-center gap-6">
              <div className="flex gap-4">
                <img src="https://bubbles.gabrielxavier.online/PATINHA%20BUBBLES.svg" alt="Icon sm" className="h-8" referrerPolicy="no-referrer" />
                <img src="https://bubbles.gabrielxavier.online/PATINHA%20BUBBLES.svg" alt="Icon md" className="h-12" referrerPolicy="no-referrer" />
                <img src="https://bubbles.gabrielxavier.online/PATINHA%20BUBBLES.svg" alt="Icon lg" className="h-16" referrerPolicy="no-referrer" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted">Escalabilidade</span>
            </div>
          </div>

          {/* Sub-marcas das Linhas */}
          <div>
            <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-muted mb-8 border-b border-[#E5E5E5] pb-2">Sub-marcas das Linhas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* PRO */}
              <div className="bg-white p-8 rounded-2xl border-l-4 border-[#0D0C0D] shadow-sm hover:shadow-md transition-all">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-black tracking-tight mb-1">Linha PRO</h3>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted">Groomers Avançados</span>
                  </div>
                  <div className="h-12 flex items-center bg-[#0D0C0D] px-4 rounded-lg">
                    <img src="https://bubbles.gabrielxavier.online/PRO.svg" alt="PRO" className="h-6 invert brightness-0" referrerPolicy="no-referrer" />
                  </div>
                </div>
                <div className="space-y-4 text-[13px]">
                  <p><strong>Posicionamento:</strong> Alta performance, resultado técnico superior.</p>
                  <p><strong>Visual:</strong> Embalagem preta, tom sério e técnico.</p>
                  <p><strong>Diluição:</strong> 1:10 (rende até 550 banhos/5L).</p>
                  <div className="p-4 bg-[#F7F7F7] rounded-lg italic text-muted">
                    &quot;Para quem não aceita menos que o melhor&quot;
                  </div>
                </div>
              </div>

              {/* Essential */}
              <div className="bg-white p-8 rounded-2xl border-l-4 border-[#F4CDD4] shadow-sm hover:shadow-md transition-all">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-black tracking-tight mb-1">Linha Essential</h3>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted">Pet Shops em Crescimento</span>
                  </div>
                  <div className="h-12 flex items-center bg-[#F4CDD4] px-4 rounded-lg">
                    <img src="https://bubbles.gabrielxavier.online/ESSENTIAL.svg" alt="Essential" className="h-6" referrerPolicy="no-referrer" />
                  </div>
                </div>
                <div className="space-y-4 text-[13px]">
                  <p><strong>Posicionamento:</strong> Porta de entrada premium — qualidade acessível.</p>
                  <p><strong>Visual:</strong> Embalagem rosa/neutra, tom amigável.</p>
                  <p><strong>Diluição:</strong> 1:5 (rende até 300 banhos/5L).</p>
                  <div className="p-4 bg-[#F7F7F7] rounded-lg italic text-muted">
                    &quot;Qualidade Bubbles com o melhor custo por banho&quot;
                  </div>
                </div>
              </div>

              {/* Xperience */}
              <div className="bg-white p-8 rounded-2xl border-l-4 border-[#C8A96E] shadow-sm hover:shadow-md transition-all">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-black tracking-tight mb-1">Linha Xperience</h3>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted">Experiência Sensorial</span>
                  </div>
                  <div className="h-12 flex items-center bg-[#C8A96E] px-4 rounded-lg">
                    <img src="https://bubbles.gabrielxavier.online/XPERIENCE.svg" alt="Xperience" className="h-6 invert brightness-0" referrerPolicy="no-referrer" />
                  </div>
                </div>
                <div className="space-y-4 text-[13px]">
                  <p><strong>Posicionamento:</strong> Fragrâncias marcantes, Sniff Tech.</p>
                  <p><strong>Visual:</strong> Embalagem premium, dourado, aspiracional.</p>
                  <p><strong>Tecnologia:</strong> Sniff Tech (fixação prolongada).</p>
                  <div className="p-4 bg-[#F7F7F7] rounded-lg italic text-muted">
                    &quot;Seu pet vai cheirar tão bem que vão perguntar o segredo&quot;
                  </div>
                </div>
              </div>

              {/* Collora */}
              <div className="bg-white p-8 rounded-2xl border-l-4 border-[#B066C6] shadow-sm hover:shadow-md transition-all">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-black tracking-tight mb-1">Linha Collora</h3>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted">Estética Criativa</span>
                  </div>
                  <div className="h-12 flex items-center bg-[#B066C6] px-4 rounded-lg">
                    <img src="https://bubbles.gabrielxavier.online/COLLORA.svg" alt="Collora" className="h-6 invert brightness-0" referrerPolicy="no-referrer" />
                  </div>
                </div>
                <div className="space-y-4 text-[13px]">
                  <p><strong>Posicionamento:</strong> Coloração pet profissional segura e vibrante.</p>
                  <p><strong>Visual:</strong> Embalagem com acento roxo/lilás.</p>
                  <p><strong>Argumento:</strong> Transforme a pelagem em arte com segurança.</p>
                  <div className="p-4 bg-[#F7F7F7] rounded-lg italic text-muted">
                    &quot;Transforme a pelagem em arte com segurança comprovada&quot;
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Regras */}
          <div className="bg-[#F7F7F7] p-8 rounded-2xl">
            <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-muted mb-6 border-b border-[#E5E5E5] pb-2">Regras de Uso das Logos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h4 className="text-xs font-black text-promo-red uppercase">❌ Não Fazer</h4>
                <ul className="text-[11px] space-y-2 text-secondary">
                  <li>Não alterar as proporções da marca</li>
                  <li>Não utilizar cores fora da paleta oficial</li>
                  <li>Não aplicar efeitos de sombra ou brilho</li>
                  <li>Não rotacionar a logo ou símbolo</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-xs font-black text-action-green uppercase">✅ Fazer</h4>
                <ul className="text-[11px] space-y-2 text-secondary">
                  <li>Manter área de respiro mínima</li>
                  <li>Utilizar versões oficiais de alta resolução</li>
                  <li>Respeitar o contraste de fundo</li>
                  <li>Priorizar aplicação institucional</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 3. CORES */}
        <SectionHeader title="Paleta de Cores" subtitle="Identidade visual e tokens de superfície" id="colors" />
        <div className="bg-white p-8 rounded-2xl border border-[#E5E5E5] mb-10">
          <p className="text-sm leading-relaxed text-muted mb-8">
            Nossa paleta de cores foi desenhada para evocar o luxo industrial e a sofisticação. O contraste entre o <strong>Rosa Marca</strong> (suavidade e cuidado) e o <strong>Preto Marca</strong> (autoridade e elegância) cria uma identidade visual única no setor pet. Utilizamos cores de destaque apenas para sinalização crítica e promoções, mantendo a sobriedade premium da marca.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ColorSwatch name="Brand Dark" token="--color-brand-dark" hex="#0D0C0D" description="Cor primária para textos e fundos de luxo." />
            <ColorSwatch name="Brand Pink" token="--color-brand-pink" hex="#F4CDD4" description="Cor de destaque e suavidade da marca." />
            <ColorSwatch name="Surface Light" token="--color-surface-light" hex="#F7F7F7" description="Fundo secundário para contraste suave." />
            <ColorSwatch name="Action Green" token="--color-action-green" hex="#3DB85C" description="Exclusivo para ações de compra e conversão." />
          </div>
        </div>

        <div className="space-y-16 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-muted mb-8 border-b border-[#E5E5E5] pb-2">Superfícies & Texto</h3>
              <div className="space-y-4">
                <ColorSwatch name="Text Primary" token="--text-primary" hex="#0D0C0D" description="Cor principal de leitura." />
                <ColorSwatch name="Text Muted" token="--text-muted" hex="#999999" description="Legendas e textos secundários." />
                <ColorSwatch name="Surface White" token="--surface-page" hex="#FFFFFF" description="Fundo principal limpo." />
              </div>
            </div>
            <div>
              <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-muted mb-8 border-b border-[#E5E5E5] pb-2">Bordas & Divisores</h3>
              <div className="space-y-4">
                <ColorSwatch name="Border Light" token="--border-default" hex="#E5E5E5" description="Divisores e bordas de cards." />
                <ColorSwatch name="Border Focus" token="--border-focus" hex="#F4CDD4" description="Estado de foco em inputs." />
                <ColorSwatch name="Border Super Pink" token="--color-brand-super-pink" hex="#E8649A" description="Borda de destaque para elementos especiais." />
                <ColorSwatch name="Dark Border" token="--border-dark" hex="rgba(255,255,255,0.10)" description="Divisores sobre fundo escuro." />
              </div>
            </div>
          </div>
        </div>

        {/* 4. TIPOGRAFIA */}
        <SectionHeader title="Tipografia" subtitle="Figtree: A fonte oficial da Bubbles" id="typography" />
        <div className="bg-white p-8 rounded-2xl border border-[#E5E5E5] mb-16 space-y-8">
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-muted uppercase">Heading 1 / text-5xl font-black</span>
            <h1 className="text-5xl font-black tracking-tight">Cosméticos Pet Profissionais</h1>
          </div>
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-muted uppercase">Heading 2 / text-3xl font-black</span>
            <h2 className="text-3xl font-black tracking-tight">Alta Performance no Banho e Tosa</h2>
          </div>
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-muted uppercase">Heading 3 / text-xl font-black</span>
            <h3 className="text-xl font-black tracking-tight">Rendimento Garantido</h3>
          </div>
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-muted uppercase">Body / text-base text-muted</span>
            <p className="text-base text-muted leading-relaxed max-w-2xl">
              A Bubbles desenvolve cosméticos de alta performance. Nossas fórmulas são concentradas e exigem conhecimento técnico para garantir a eficácia e a segurança dos pets.
            </p>
          </div>
        </div>

        {/* 5. BOTÕES */}
        <SectionHeader title="Botões" subtitle="Ações e interações" id="buttons" />
        <div className="bg-white p-8 rounded-2xl border border-[#E5E5E5] mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <ButtonDemo label="Comprar" variant="green" />
            <ButtonDemo label="Avançar" variant="dark" />
            <ButtonDemo label="Outline" variant="outline" />
            <ButtonDemo label="Outline Pink" variant="outline-pink" />
            <ButtonDemo label="Super Pink" variant="outline-super-pink" />
            <ButtonDemo label="Sólido Pink" variant="pink-solid" />
            <ButtonDemo label="Black Pink" variant="black-pink" />
            <ButtonDemo label="Ghost" variant="ghost" />
          </div>
        </div>

        {/* 6. FORMULÁRIOS & B2B */}
        <SectionHeader title="Formulários B2B" subtitle="Inputs e fluxos de cadastro" id="b2b-form" />
        <div className="bg-[#F7F7F7] p-12 rounded-2xl border border-[#E5E5E5] mb-16 flex justify-center">
          <B2BFormDemo />
        </div>

        {/* 7. CARDS DE PRODUTO */}
        <SectionHeader title="Cards de Produto" subtitle="Exibição de catálogo" id="cards" />
        <div className="bg-[#F7F7F7] p-12 rounded-2xl border border-[#E5E5E5] mb-16 flex justify-center">
          <ProductCardDemo />
        </div>

        {/* 8. COMPONENTES ESPECÍFICOS */}
        <SectionHeader title="Componentes de Produto" subtitle="Elementos da página de produto" id="product-specific" />
        <div className="space-y-12 mb-16">
          <div className="bg-white p-8 rounded-2xl border border-[#E5E5E5]">
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-muted mb-6">Stepper de Quantidade</h4>
            <Stepper />
          </div>
          <div className="bg-white p-8 rounded-2xl border border-[#E5E5E5]">
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-muted mb-6">Tabela de Informações (Rendimento)</h4>
            <InfoTable rendimento="550 Banhos" custo="R$ 0,45" diluicao="1:10" />
          </div>
          <div className="bg-white p-8 rounded-2xl border border-[#E5E5E5]">
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-muted mb-6">Tabs de Conteúdo</h4>
            <ProductTabs />
          </div>
        </div>

        {/* 9. FORMULÁRIOS */}
        <SectionHeader title="Inputs & Formulários" subtitle="Campos de entrada e controles" id="forms" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-muted mb-6 border-b border-[#E5E5E5] pb-2">Input Texto Padrão</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-muted mb-2">Default</label>
                  <input type="text" className="input-bubbles" placeholder="Seu nome completo" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-muted mb-2">Focus</label>
                  <input type="text" className="input-bubbles border-brand-pink ring-3 ring-[rgba(244,205,212,0.35)] outline-none" placeholder="Digitando..." defaultValue="João Silva" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-muted mb-2">Error</label>
                  <input type="text" className="input-bubbles border-promo-red ring-3 ring-[rgba(224,62,62,0.15)] outline-none" placeholder="E-mail inválido" defaultValue="joao@silva" />
                  <span className="text-[10px] text-promo-red mt-1 block font-bold">Por favor, insira um e-mail válido.</span>
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-muted mb-2">Disabled</label>
                  <input type="text" className="input-bubbles bg-[#F7F7F7] text-[#AEAEAE] cursor-not-allowed border-transparent" placeholder="Campo desabilitado" disabled />
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-muted mb-6 border-b border-[#E5E5E5] pb-2">Elementos Especializados</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-muted mb-2">Cálculo de CEP</label>
                  <div className="flex gap-2">
                    <input type="text" className="input-bubbles flex-1" placeholder="00000-000" />
                    <button className="btn-dark !py-0 px-6">CALCULAR</button>
                  </div>
                </div>
                <div className="bg-brand-dark p-6 rounded-xl">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-white/70 mb-2">Newsletter (Dark Mode)</label>
                  <div className="flex gap-2">
                    <input type="email" className="input-bubbles bg-white/10 border-transparent text-white placeholder:text-white/40 focus:border-brand-pink focus:bg-white/20" placeholder="Seu melhor e-mail" />
                    <button className="bg-brand-pink text-brand-dark font-black uppercase text-[11px] px-6 rounded-md hover:bg-white transition-colors">ASSINAR</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 10. BADGES & LABELS */}
        <SectionHeader title="Badges & Labels" subtitle="Sinalização e tags" id="badges" />
        <div className="bg-white p-8 rounded-2xl border border-[#E5E5E5] mb-16">
          <div className="flex flex-wrap gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-mono text-muted uppercase">Promoção</span>
              <span className="bg-promo-red text-white text-[10px] font-black uppercase px-3 py-1.5 rounded-[4px] leading-none tracking-[0.06em] w-fit">PROMOÇÃO</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-mono text-muted uppercase">Desconto</span>
              <span className="bg-action-green text-white text-[10px] font-black uppercase px-3 py-1.5 rounded-full leading-none tracking-[0.06em] w-fit">15% OFF</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-mono text-muted uppercase">Lançamento</span>
              <span className="bg-brand-dark text-brand-pink text-[10px] font-black uppercase px-3 py-1.5 rounded-[4px] leading-none tracking-[0.06em] w-fit">LANÇAMENTO</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-mono text-muted uppercase">Esgotado</span>
              <span className="bg-[#E5E5E5] text-muted text-[10px] font-black uppercase px-3 py-1.5 rounded-[4px] leading-none tracking-[0.06em] w-fit">ESGOTADO</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-mono text-muted uppercase">Tag Neutra</span>
              <span className="bg-[#F7F7F7] text-brand-dark border border-[#E5E5E5] text-[10px] font-bold uppercase px-3 py-1.5 rounded-full leading-none tracking-[0.06em] w-fit">Cruelty Free</span>
            </div>
          </div>
        </div>

        {/* 11. MOTION & TRANSIÇÕES */}
        <SectionHeader title="Motion & Transições" subtitle="Animações e micro-interações" id="motion" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl border border-[#E5E5E5] flex flex-col items-center justify-center gap-4 group">
            <div className="w-16 h-16 bg-brand-pink rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
            <div className="text-center">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-brand-dark">Hover Scale</span>
              <span className="text-[10px] font-mono text-muted">duration-300 ease-out</span>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-[#E5E5E5] flex flex-col items-center justify-center gap-4 group cursor-pointer">
            <div className="w-32 h-12 bg-brand-dark rounded-full flex items-center justify-center gap-2 transition-all duration-300 group-hover:gap-4">
              <span className="text-brand-pink text-[11px] font-black uppercase">Avançar</span>
              <ArrowRight size={16} className="text-brand-pink" />
            </div>
            <div className="text-center">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-brand-dark">Arrow Slide</span>
              <span className="text-[10px] font-mono text-muted">group-hover:gap-4</span>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-[#E5E5E5] flex flex-col items-center justify-center gap-4">
            <div className="w-16 h-16 border-4 border-[#F7F7F7] border-t-brand-dark rounded-full animate-spin" />
            <div className="text-center">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-brand-dark">Loading Spin</span>
              <span className="text-[10px] font-mono text-muted">animate-spin</span>
            </div>
          </div>
        </div>

        {/* 12. CATEGORIAS */}
        <SectionHeader title="Categorias" subtitle="Navegação visual de produtos" id="categories" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {['Shampoos', 'Condicionadores', 'Perfumes', 'Equipamentos'].map((cat) => (
            <div key={cat} className="group cursor-pointer relative overflow-hidden rounded-2xl aspect-square bg-[#F7F7F7]">
              <img src={`https://picsum.photos/seed/${cat}/400/400`} alt={cat} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                <span className="text-white font-black text-lg tracking-tight">{cat}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 13. COPYWRITING & TOM DE VOZ */}
        <SectionHeader title="Copywriting & Tom de Voz" subtitle="Como a Bubbles se comunica" id="copywriting" />
        <div className="space-y-8 mb-16">
          <div className="bg-white p-8 rounded-2xl border border-[#E5E5E5]">
            <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-muted mb-6 border-b border-[#E5E5E5] pb-2">Personalidade da Marca</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-black text-brand-dark mb-2">Profissional, não chata</h4>
                <p className="text-[13px] text-muted leading-relaxed">Falamos com autoridade técnica, mas mantemos a energia e a paixão pelo que fazemos.</p>
              </div>
              <div>
                <h4 className="font-black text-brand-dark mb-2">Premium, não esnobe</h4>
                <p className="text-[13px] text-muted leading-relaxed">Oferecemos o melhor produto do mercado, mas somos acessíveis e parceiros do groomer.</p>
              </div>
              <div>
                <h4 className="font-black text-brand-dark mb-2">Direta, não agressiva</h4>
                <p className="text-[13px] text-muted leading-relaxed">Valorizamos o tempo do nosso cliente. Textos curtos, claros e focados no benefício.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#F7F7F7] p-8 rounded-2xl">
              <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-muted mb-6 border-b border-[#E5E5E5] pb-2">Termos Preferidos ✅</h3>
              <ul className="space-y-3 text-[13px] font-medium text-brand-dark">
                <li className="flex items-center gap-2"><Check size={16} className="text-action-green" /> Groomer / Profissional</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-action-green" /> Centro de Estética Pet</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-action-green" /> Alta Performance</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-action-green" /> Rendimento / Custo por Banho</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-action-green" /> Sniff Tech (Tecnologia de fragrância)</li>
              </ul>
            </div>
            <div className="bg-[#F7F7F7] p-8 rounded-2xl">
              <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-muted mb-6 border-b border-[#E5E5E5] pb-2">Termos Evitados ❌</h3>
              <ul className="space-y-3 text-[13px] font-medium text-muted">
                <li className="flex items-center gap-2"><X size={16} className="text-promo-red" /> Tosador (Prefira Groomer)</li>
                <li className="flex items-center gap-2"><X size={16} className="text-promo-red" /> Pet Shop (Quando referir ao local de banho)</li>
                <li className="flex items-center gap-2"><X size={16} className="text-promo-red" /> Barato (Prefira Custo-benefício)</li>
                <li className="flex items-center gap-2"><X size={16} className="text-promo-red" /> Cheiroso (Prefira Fragrância marcante)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 14. DIFERENCIAIS COMPETITIVOS */}
        <SectionHeader title="Diferenciais Competitivos" subtitle="O que nos torna únicos" id="differentials" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-2xl border border-[#E5E5E5]">
            <Droplet size={24} className="text-brand-dark mb-4" />
            <h4 className="font-black text-brand-dark mb-2">Alta Diluição</h4>
            <p className="text-[12px] text-muted">Fórmulas super concentradas que garantem o menor custo por banho do mercado premium.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-[#E5E5E5]">
            <Wind size={24} className="text-brand-dark mb-4" />
            <h4 className="font-black text-brand-dark mb-2">Sniff Tech</h4>
            <p className="text-[12px] text-muted">Tecnologia exclusiva de encapsulação de fragrância para fixação prolongada.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-[#E5E5E5]">
            <Shield size={24} className="text-brand-dark mb-4" />
            <h4 className="font-black text-brand-dark mb-2">Segurança</h4>
            <p className="text-[12px] text-muted">Produtos testados dermatologicamente e oftalmologicamente. Cruelty free.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-[#E5E5E5]">
            <Award size={24} className="text-brand-dark mb-4" />
            <h4 className="font-black text-brand-dark mb-2">Qualidade PRO</h4>
            <p className="text-[12px] text-muted">Desenvolvido com e para os melhores groomers do Brasil.</p>
          </div>
        </div>

        {/* 15. DIRETRIZES DA MARCA */}
        <SectionHeader title="Diretrizes da Marca" subtitle="Regras de aplicação" id="guidelines" />
        <div className="bg-white p-8 rounded-2xl border border-[#E5E5E5] mb-16">
          <div className="prose prose-sm max-w-none text-muted">
            <p>A marca Bubbles deve ser sempre apresentada com clareza e destaque. O respiro ao redor da logo deve ser respeitado para garantir a legibilidade.</p>
            <p>Em fundos escuros, utilize sempre a versão negativa (branca) da logo. Em fundos claros, utilize a versão institucional (rosa) ou preta, dependendo do contraste necessário.</p>
            <p>As sub-marcas (PRO, Essential, Xperience, Collora) possuem identidades próprias, mas devem sempre estar subordinadas à marca mãe Bubbles.</p>
          </div>
        </div>

        {/* 16. BACKGROUNDS & GRADIENTS */}
        <SectionHeader title="Backgrounds & Gradients" subtitle="Fundos e texturas" id="backgrounds" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="h-32 rounded-2xl bg-brand-dark flex items-center justify-center">
            <span className="text-white text-[10px] font-mono uppercase">bg-brand-dark</span>
          </div>
          <div className="h-32 rounded-2xl bg-gradient-to-r from-brand-dark to-[#2A282A] flex items-center justify-center">
            <span className="text-white text-[10px] font-mono uppercase">Gradient Dark</span>
          </div>
          <div className="h-32 rounded-2xl bg-[#F7F7F7] border border-[#E5E5E5] flex items-center justify-center">
            <span className="text-brand-dark text-[10px] font-mono uppercase">bg-[#F7F7F7]</span>
          </div>
        </div>

        {/* 17. TOKENS CSS */}
        <SectionHeader title="Tokens CSS" subtitle="Variáveis de design" id="tokens" />
        <div className="bg-[#0D0C0D] p-8 rounded-2xl mb-16 overflow-x-auto">
          <pre className="text-[12px] font-mono text-[#E5E5E5] leading-relaxed">
{`@theme {
  --font-figtree: "Figtree", sans-serif;
  
  /* Brand Colors */
  --color-brand-dark: #0D0C0D;
  --color-brand-pink: #F4CDD4;
  --color-brand-super-pink: #E8649A;
  
  /* Action & Promo */
  --color-action-green: #3DB85C;
  --color-promo-red: #E03E3E;
  
  /* Line Colors */
  --color-line-pro: #0D0C0D;
  --color-line-essential: #F4CDD4;
  --color-line-xperience: #C8A96E;
  --color-line-collora: #B066C6;

  /* Surface & Text */
  --color-surface-page: #FFFFFF;
  --color-surface-card: #FFFFFF;
  --color-surface-muted: #F7F7F7;
  --color-text-primary: #0D0C0D;
  --color-text-muted: #999999;
  
  /* Borders */
  --color-border-default: #E5E5E5;
  --color-border-focus: #F4CDD4;
}`}
          </pre>
        </div>
      </main>
      </div>
    </div>
  );
}
