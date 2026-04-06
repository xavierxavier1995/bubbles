'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  Users, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  Truck, 
  Target, 
  ArrowRight,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import Header from '@/components/Header';

export default function SejaUmDistribuidor() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    experience: 'Sim',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for form submission
    console.log('Form submitted:', formData);
    alert('Obrigado pelo seu interesse! Nossa equipe entrará em contato em breve.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Alta Rentabilidade',
      description: 'Margens competitivas e produtos de alto giro no mercado pet profissional.'
    },
    {
      icon: ShieldCheck,
      title: 'Exclusividade Regional',
      description: 'Proteção de área para que você possa crescer com segurança e foco.'
    },
    {
      icon: Sparkles,
      title: 'Suporte de Marketing',
      description: 'Materiais de PDV, treinamentos e campanhas digitais para impulsionar suas vendas.'
    },
    {
      icon: Truck,
      title: 'Logística Eficiente',
      description: 'Processos otimizados para garantir que o produto chegue rápido ao seu estoque.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-[#0D0C0D] font-sans">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-[#FCEEF1]">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <Users className="w-full h-full text-[#F4CDD4]" />
        </div>
        
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F4CDD4]/30 text-[#0D0C0D] text-sm font-bold mb-6">
              <Target className="w-4 h-4" />
              <span>OPORTUNIDADE DE NEGÓCIO B2B</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none mb-6">
              Seja um Distribuidor <span className="text-[#E8649A]">Bubbles Pet</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl">
              Leve a marca que mais cresce no mercado pet profissional para a sua região. Produtos de alta performance, suporte total e rentabilidade garantida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#formulario" className="btn-primary-green btn-lg">
                Quero ser distribuidor
              </a>
              <a href="#beneficios" className="btn-outline-dark btn-lg">
                Ver benefícios
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section id="beneficios" className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Por que escolher a Bubbles?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Oferecemos muito mais que produtos. Oferecemos uma parceria sólida para o seu crescimento.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-8 rounded-3xl border border-gray-100 bg-gray-50 hover:border-[#F4CDD4] hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-[#F4CDD4]/20 rounded-2xl flex items-center justify-center text-[#E8649A] mb-6">
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="formulario" className="py-20 bg-[#0D0C0D] text-white">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                Pronto para dar o <span className="text-[#F4CDD4]">próximo passo?</span>
              </h2>
              <p className="text-gray-400 text-lg mb-10">
                Preencha o formulário abaixo e nossa equipe de expansão entrará em contato para apresentar nosso modelo de negócio e condições exclusivas.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-[#F4CDD4]" />
                  </div>
                  <div>
                    <h4 className="font-bold">Análise de Perfil</h4>
                    <p className="text-gray-400 text-sm">Avaliamos cada proposta individualmente para garantir o sucesso da parceria.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-[#F4CDD4]" />
                  </div>
                  <div>
                    <h4 className="font-bold">Atendimento Personalizado</h4>
                    <p className="text-gray-400 text-sm">Um consultor dedicado entrará em contato em até 48 horas úteis.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-8 md:p-12 text-[#0D0C0D]">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Nome Completo</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      className="input-bubbles" 
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500">E-mail Corporativo</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      className="input-bubbles" 
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500">WhatsApp / Telefone</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      className="input-bubbles" 
                      placeholder="(00) 00000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Já atua no mercado pet?</label>
                    <select 
                      name="experience"
                      className="input-bubbles"
                      value={formData.experience}
                      onChange={handleChange}
                    >
                      <option value="Sim">Sim, já sou distribuidor</option>
                      <option value="Loja">Sim, tenho loja/banho e tosa</option>
                      <option value="Nao">Não, estou começando agora</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Cidade</label>
                    <input 
                      type="text" 
                      name="city"
                      required
                      className="input-bubbles" 
                      placeholder="Sua cidade"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Estado</label>
                    <input 
                      type="text" 
                      name="state"
                      required
                      className="input-bubbles" 
                      placeholder="UF"
                      value={formData.state}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Mensagem (Opcional)</label>
                  <textarea 
                    name="message"
                    rows={4}
                    className="input-bubbles resize-none" 
                    placeholder="Conte-nos um pouco sobre sua operação..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                
                <button type="submit" className="btn-primary-green btn-full">
                  Enviar Solicitação <ArrowRight className="w-5 h-5" />
                </button>
                
                <p className="text-[10px] text-center text-gray-400 mt-4">
                  Ao enviar este formulário, você concorda com nossa Política de Privacidade e Termos de Uso.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-12">Marcas que confiam na Bubbles</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Logos would go here */}
            <div className="h-12 w-32 bg-gray-300 rounded flex items-center justify-center font-bold text-gray-500">LOGO 1</div>
            <div className="h-12 w-32 bg-gray-300 rounded flex items-center justify-center font-bold text-gray-500">LOGO 2</div>
            <div className="h-12 w-32 bg-gray-300 rounded flex items-center justify-center font-bold text-gray-500">LOGO 3</div>
            <div className="h-12 w-32 bg-gray-300 rounded flex items-center justify-center font-bold text-gray-500">LOGO 4</div>
          </div>
        </div>
      </section>
    </div>
  );
}
