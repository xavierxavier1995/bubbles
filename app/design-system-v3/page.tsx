'use client';

import React, { useState } from 'react';
import { 
  Check, 
  ChevronRight, 
  ArrowRight, 
  Star, 
  Info, 
  Shield, 
  Truck, 
  Zap, 
  Package, 
  ShoppingBag, 
  Heart, 
  Eye, 
  Plus, 
  Minus, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Search, 
  Menu, 
  X, 
  Facebook, 
  Instagram, 
  Youtube, 
  MessageCircle,
  AlertCircle,
  Clock,
  Droplets,
  Wind,
  Beaker,
  Leaf,
  Sparkles,
  Award,
  Globe,
  BarChart3,
  Users,
  Lock,
  Calculator,
  BookOpen,
  GraduationCap
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Sub-components ---

const ColorSwatch = ({ name, hex, label }: { name: string, hex: string, label?: string }) => (
  <div className="flex flex-col gap-2">
    <div 
      className="w-full aspect-square rounded-2xl shadow-sm border border-black/5" 
      style={{ backgroundColor: hex }}
    />
    <div>
      <p className="text-[11px] font-black uppercase tracking-wider text-text-primary">{name}</p>
      <p className="text-[10px] font-medium text-text-muted uppercase">{hex}</p>
      {label && <p className="text-[9px] font-bold text-brand-super-pink uppercase mt-1">{label}</p>}
    </div>
  </div>
);

const IntensityScale = ({ color, steps }: { color: string, steps: number[] }) => (
  <div className="flex w-full h-12 rounded-xl overflow-hidden border border-black/5">
    {steps.map((opacity, i) => (
      <div 
        key={i}
        className="flex-1 h-full"
        style={{ backgroundColor: color, opacity: opacity / 100 }}
      />
    ))}
  </div>
);

const SectionHeader = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="mb-12">
    <h2 className="text-3xl font-black text-brand-dark mb-2">{title}</h2>
    {subtitle && <p className="text-text-secondary font-medium">{subtitle}</p>}
    <div className="w-12 h-1 bg-brand-pink mt-4 rounded-full" />
  </div>
);

const ButtonDemo = ({ variant, size, label, icon: Icon, disabled = false }: any) => (
  <button className={`${variant} ${size}`} disabled={disabled}>
    {label}
    {Icon && <Icon size={size === 'btn-sm' ? 14 : 18} />}
  </button>
);

const Stepper = ({ currentStep, totalSteps }: { currentStep: number, totalSteps: number }) => (
  <div className="flex items-center gap-3">
    {Array.from({ length: totalSteps }).map((_, i) => (
      <React.Fragment key={i}>
        <div className={`
          w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-black transition-all duration-300
          ${i + 1 <= currentStep ? 'bg-brand-dark text-white' : 'bg-surface-card-alt text-text-muted border border-border-default'}
        `}>
          {i + 1 < currentStep ? <Check size={14} /> : i + 1}
        </div>
        {i < totalSteps - 1 && (
          <div className={`h-[2px] w-8 rounded-full ${i + 1 < currentStep ? 'bg-brand-dark' : 'bg-border-default'}`} />
        )}
      </React.Fragment>
    ))}
  </div>
);

const B2BFormDemo = () => {
  const [step, setStep] = useState(1);
  return (
    <div className="bg-white rounded-3xl p-8 border border-border-default shadow-bubbles max-w-md w-full">
      <div className="mb-8">
        <p className="text-[10px] font-black text-brand-super-pink uppercase tracking-[0.2em] mb-4">Passo {step} de 3</p>
        <Stepper currentStep={step} totalSteps={3} />
      </div>
      
      <div className="space-y-6">
        {step === 1 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
            <h3 className="text-xl font-black text-brand-dark">Dados Pessoais</h3>
            <div>
              <label className="text-[10px] font-black text-text-muted uppercase tracking-widest mb-2 block">Nome Completo</label>
              <input type="text" placeholder="Ex: João Silva" className="input-bubbles" />
            </div>
            <div>
              <label className="text-[10px] font-black text-text-muted uppercase tracking-widest mb-2 block">WhatsApp</label>
              <input type="tel" placeholder="(00) 00000-0000" className="input-bubbles" />
            </div>
          </motion.div>
        )}
        
        <div className="flex gap-3 pt-4">
          {step > 1 && (
            <button onClick={() => setStep(step - 1)} className="btn-outline-dark btn-md flex-1">Voltar</button>
          )}
          <button onClick={() => step < 3 && setStep(step + 1)} className="btn-primary-green btn-md flex-1">
            {step === 3 ? 'Finalizar' : 'Próximo'}
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductCardDemo = () => (
  <div className="group relative bg-white rounded-[32px] p-6 border border-border-default shadow-bubbles transition-all duration-300 hover:shadow-bubbles-hover hover:-translate-y-2 max-w-[320px]">
    <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
      <span className="bg-brand-dark text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">Profissional</span>
      <span className="bg-action-green text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">Frete Grátis</span>
    </div>
    
    <div className="relative aspect-square mb-6 rounded-2xl overflow-hidden bg-surface-card-alt">
      <img 
        src="https://picsum.photos/seed/bubbles1/600/600" 
        alt="Product" 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
      <div className="absolute bottom-4 right-4 flex flex-col gap-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-brand-pink transition-colors"><Heart size={18} /></button>
        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-brand-pink transition-colors"><Eye size={18} /></button>
      </div>
    </div>
    
    <div className="space-y-3">
      <div className="flex items-center gap-1">
        {[1,2,3,4,5].map(i => <Star key={i} size={12} className="fill-star-orange text-star-orange" />)}
        <span className="text-[10px] font-bold text-text-muted ml-1">(128)</span>
      </div>
      <h3 className="font-black text-lg text-brand-dark leading-tight uppercase">Kit Cronograma Capilar Essential</h3>
      <div className="flex items-baseline gap-2">
        <span className="text-text-strikethrough text-sm line-through font-bold">R$ 249,90</span>
        <span className="text-2xl font-black text-brand-dark tracking-tighter">R$ 189,90</span>
      </div>
      <button className="btn-primary-green btn-full mt-4">Adicionar ao Carrinho</button>
    </div>
  </div>
);

const InfoTable = () => (
  <div className="w-full overflow-hidden rounded-2xl border border-border-default bg-white shadow-sm">
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="bg-surface-card-alt border-bottom border-border-default">
          <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-text-muted">Propriedade</th>
          <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-text-muted">Valor</th>
          <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-text-muted">Status</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-border-default">
        {[
          { prop: 'PH Balance', val: '4.5 - 5.5', status: 'Ideal', color: 'text-action-green' },
          { prop: 'Concentração', val: 'Alta Performance', status: 'Premium', color: 'text-info-blue' },
          { prop: 'Vegano', val: 'Sim', status: 'Certificado', color: 'text-action-green' }
        ].map((row, i) => (
          <tr key={i} className="hover:bg-surface-card-alt/50 transition-colors">
            <td className="px-6 py-4 text-sm font-bold text-brand-dark">{row.prop}</td>
            <td className="px-6 py-4 text-sm text-text-secondary">{row.val}</td>
            <td className={`px-6 py-4 text-[11px] font-black uppercase tracking-wider ${row.color}`}>{row.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState('desc');
  const tabs = [
    { id: 'desc', label: 'Descrição' },
    { id: 'comp', label: 'Composição' },
    { id: 'how', label: 'Como Usar' }
  ];
  
  return (
    <div className="w-full max-w-2xl">
      <div className="flex gap-8 border-b border-border-default mb-8">
        {tabs.map(tab => (
          <button 
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              pb-4 text-[13px] font-black uppercase tracking-widest transition-all relative
              ${activeTab === tab.id ? 'text-brand-dark' : 'text-text-muted hover:text-text-secondary'}
            `}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-[3px] bg-brand-pink rounded-full" />
            )}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="text-text-secondary leading-relaxed font-medium"
        >
          {activeTab === 'desc' && "Desenvolvido com tecnologia de ponta, o Kit Cronograma Capilar Bubbles oferece um tratamento completo para todos os tipos de fios. Sua fórmula exclusiva penetra profundamente na fibra capilar, devolvendo a massa e o brilho perdidos."}
          {activeTab === 'comp' && "Aqua, Cetearyl Alcohol, Behentrimonium Chloride, Glycerin, Panthenol, Hydrolyzed Keratin, Argania Spinosa Kernel Oil, Cocos Nucifera Oil, Biotin, Tocopheryl Acetate, Parfum, Citric Acid."}
          {activeTab === 'how' && "1. Lave os cabelos com o Shampoo Bubbles. 2. Aplique a máscara mecha a mecha. 3. Deixe agir por 10 minutos. 4. Enxágue abundantemente e finalize como desejar."}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const IconBox = ({ icon: Icon, title, desc }: any) => (
  <div className="flex gap-4 p-6 rounded-2xl bg-white border border-border-default hover:border-brand-pink transition-colors group">
    <div className="w-12 h-12 rounded-xl bg-brand-pink/10 flex items-center justify-center text-brand-super-pink group-hover:bg-brand-pink group-hover:text-white transition-all">
      <Icon size={24} />
    </div>
    <div>
      <h4 className="font-black text-brand-dark uppercase text-sm mb-1">{title}</h4>
      <p className="text-xs text-text-secondary font-medium leading-tight">{desc}</p>
    </div>
  </div>
);

// --- Main Page Component ---

export default function DesignSystemV3() {
  return (
    <div className="min-h-screen bg-surface-page pb-32">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border-default py-6">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-dark rounded-xl flex items-center justify-center text-brand-pink">
              <Zap size={24} fill="currentColor" />
            </div>
            <div>
              <h1 className="text-xl font-black tracking-tighter text-brand-dark leading-none">BUBBLES</h1>
              <p className="text-[10px] font-black text-brand-super-pink uppercase tracking-[0.3em]">Design System v3</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#colors" className="text-[11px] font-black uppercase tracking-widest text-text-muted hover:text-brand-dark transition-colors">Cores</a>
            <a href="#typography" className="text-[11px] font-black uppercase tracking-widest text-text-muted hover:text-brand-dark transition-colors">Tipografia</a>
            <a href="#buttons" className="text-[11px] font-black uppercase tracking-widest text-text-muted hover:text-brand-dark transition-colors">Botões</a>
            <a href="#components" className="text-[11px] font-black uppercase tracking-widest text-text-muted hover:text-brand-dark transition-colors">Componentes</a>
            <button className="btn-dark btn-sm">Documentação</button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 pt-20 space-y-32">
        
        {/* Intro */}
        <section className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block bg-brand-pink/20 text-brand-super-pink text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest mb-6">Framework Visual Oficial</span>
            <h2 className="text-6xl font-black text-brand-dark tracking-tighter mb-8 leading-[0.9]">CONSTRUINDO O FUTURO DA BELEZA PROFISSIONAL.</h2>
            <p className="text-xl text-text-secondary font-medium leading-relaxed">
              Um sistema de design robusto, escalável e focado em conversão. Desenvolvido para garantir consistência visual em todos os pontos de contato da marca Bubbles.
            </p>
          </motion.div>
        </section>

        {/* Colors */}
        <section id="colors">
          <SectionHeader title="Paleta de Cores" subtitle="Nossas cores fundamentais que definem a identidade Bubbles." />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            <ColorSwatch name="Brand Pink" hex="#F4CDD4" label="Primária" />
            <ColorSwatch name="Super Pink" hex="#E8649A" label="Destaque" />
            <ColorSwatch name="Brand Dark" hex="#0D0C0D" label="Contraste" />
            <ColorSwatch name="Action Green" hex="#3DB85C" label="Sucesso" />
            <ColorSwatch name="Promo Red" hex="#E03E3E" label="Alerta" />
            <ColorSwatch name="Star Orange" hex="#F5A623" label="Avaliação" />
          </div>
          
          <div className="mt-16 grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h4 className="text-[11px] font-black uppercase tracking-widest text-text-muted">Escala de Intensidade - Pink</h4>
              <IntensityScale color="#F4CDD4" steps={[100, 80, 60, 40, 20, 10]} />
            </div>
            <div className="space-y-6">
              <h4 className="text-[11px] font-black uppercase tracking-widest text-text-muted">Escala de Intensidade - Dark</h4>
              <IntensityScale color="#0D0C0D" steps={[100, 80, 60, 40, 20, 10]} />
            </div>
          </div>
        </section>

        {/* Typography */}
        <section id="typography">
          <SectionHeader title="Tipografia" subtitle="Figtree: Uma fonte moderna, geométrica e altamente legível." />
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-12 items-end">
              <div className="space-y-2">
                <p className="text-[10px] font-black text-text-muted uppercase tracking-widest">Display Large</p>
                <h3 className="text-7xl font-black tracking-tighter text-brand-dark">AaBbCc 123</h3>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] font-black text-text-muted uppercase tracking-widest">Heading 1</p>
                <h3 className="text-5xl font-black tracking-tighter text-brand-dark">O Poder da Tecnologia Capilar</h3>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <p className="text-[10px] font-black text-text-muted uppercase tracking-widest">Body Regular</p>
                <p className="text-base font-medium text-text-secondary leading-relaxed">
                  Nossa fórmula exclusiva foi desenvolvida para profissionais que não aceitam nada menos que a perfeição. Resultados visíveis desde a primeira aplicação.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-[10px] font-black text-text-muted uppercase tracking-widest">Body Bold</p>
                <p className="text-base font-bold text-brand-dark leading-relaxed">
                  Nossa fórmula exclusiva foi desenvolvida para profissionais que não aceitam nada menos que a perfeição. Resultados visíveis desde a primeira aplicação.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-[10px] font-black text-text-muted uppercase tracking-widest">Caption / Small</p>
                <p className="text-xs font-black uppercase tracking-widest text-brand-super-pink">
                  Frete grátis para todo o Brasil em compras acima de R$ 299.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section id="buttons">
          <SectionHeader title="Botões & Ações" subtitle="Elementos interativos projetados para máxima conversão." />
          
          <div className="space-y-16">
            {/* Primary Buttons */}
            <div className="space-y-8">
              <h4 className="text-[11px] font-black uppercase tracking-widest text-text-muted">Botões Primários</h4>
              <div className="flex flex-wrap items-center gap-6">
                <ButtonDemo variant="btn-primary-green" size="btn-lg" label="Comprar Agora" icon={ArrowRight} />
                <ButtonDemo variant="btn-primary-green" size="btn-md" label="Adicionar" icon={ShoppingBag} />
                <ButtonDemo variant="btn-primary-green" size="btn-sm" label="Ver Mais" />
              </div>
            </div>

            {/* Dark & Outline */}
            <div className="space-y-8">
              <h4 className="text-[11px] font-black uppercase tracking-widest text-text-muted">Variantes de Estilo</h4>
              <div className="flex flex-wrap items-center gap-6">
                <ButtonDemo variant="btn-dark" size="btn-md" label="Área do Distribuidor" icon={Zap} />
                <ButtonDemo variant="btn-outline-dark" size="btn-md" label="Saiba Mais" />
                <ButtonDemo variant="btn-outline-pink" size="btn-md" label="Falar com Especialista" icon={MessageCircle} />
                <ButtonDemo variant="btn-outline-super-pink" size="btn-md" label="Promoção" />
                <ButtonDemo variant="btn-ghost" size="btn-md" label="Cancelar" />
              </div>
            </div>

            {/* States */}
            <div className="space-y-8">
              <h4 className="text-[11px] font-black uppercase tracking-widest text-text-muted">Estados</h4>
              <div className="flex flex-wrap items-center gap-6">
                <ButtonDemo variant="btn-primary-green" size="btn-md" label="Desativado" disabled={true} />
                <div className="flex items-center gap-2 text-action-green font-black uppercase text-[11px] tracking-widest">
                  <div className="w-2 h-2 rounded-full bg-action-green animate-pulse" />
                  Processando...
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Components */}
        <section id="components">
          <SectionHeader title="Componentes de Interface" subtitle="Padrões de UI reutilizáveis para uma experiência consistente." />
          
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Left Column */}
            <div className="space-y-20">
              <div className="space-y-8">
                <h4 className="text-[11px] font-black uppercase tracking-widest text-text-muted">Formulário Multi-Etapas (B2B)</h4>
                <B2BFormDemo />
              </div>
              
              <div className="space-y-8">
                <h4 className="text-[11px] font-black uppercase tracking-widest text-text-muted">Tabela de Informações Técnicas</h4>
                <InfoTable />
              </div>

              <div className="space-y-8">
                <h4 className="text-[11px] font-black uppercase tracking-widest text-text-muted">Cards de Benefícios</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  <IconBox icon={Shield} title="Garantia Total" desc="Produtos testados e aprovados pela ANVISA." />
                  <IconBox icon={Truck} title="Entrega Expressa" desc="Receba em até 48h nas principais capitais." />
                  <IconBox icon={Zap} title="Alta Performance" desc="Resultados profissionais em cada aplicação." />
                  <IconBox icon={Leaf} title="Eco Friendly" desc="Fórmulas biodegradáveis e cruelty-free." />
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-20">
              <div className="space-y-8">
                <h4 className="text-[11px] font-black uppercase tracking-widest text-text-muted">Card de Produto (E-commerce)</h4>
                <ProductCardDemo />
              </div>

              <div className="space-y-8">
                <h4 className="text-[11px] font-black uppercase tracking-widest text-text-muted">Tabs de Conteúdo</h4>
                <ProductTabs />
              </div>

              <div className="space-y-8">
                <h4 className="text-[11px] font-black uppercase tracking-widest text-text-muted">Inputs & Feedback</h4>
                <div className="space-y-4 max-w-md">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
                    <input type="text" placeholder="Buscar produtos..." className="input-bubbles pl-12" />
                  </div>
                  <div className="space-y-1">
                    <input type="email" value="email-invalido" readOnly className="input-bubbles input-error" />
                    <p className="text-[10px] font-bold text-promo-red flex items-center gap-1">
                      <AlertCircle size={12} /> E-mail inválido. Por favor, verifique.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Info */}
        <section className="pt-20 border-t border-border-default">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-brand-dark rounded-lg flex items-center justify-center text-brand-pink">
                <Zap size={18} fill="currentColor" />
              </div>
              <p className="text-[11px] font-black uppercase tracking-widest text-text-muted">© 2026 Bubbles Professional. Todos os direitos reservados.</p>
            </div>
            <div className="flex gap-6">
              <Instagram size={20} className="text-text-muted hover:text-brand-super-pink transition-colors cursor-pointer" />
              <Facebook size={20} className="text-text-muted hover:text-brand-super-pink transition-colors cursor-pointer" />
              <Youtube size={20} className="text-text-muted hover:text-brand-super-pink transition-colors cursor-pointer" />
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
