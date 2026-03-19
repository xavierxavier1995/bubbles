'use client';

import { Figtree } from 'next/font/google';
import { Search, Crosshair, MessageCircle, Instagram, MapPin, Phone, Copy, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { useState, useMemo } from 'react';

const figtree = Figtree({ subsets: ['latin'] });

// Simulação de 90+ Distribuidores
const generateDistributors = () => {
  const base = [
    { id: 1, name: 'Bubbles Distribuidora Bauru Oficial', state: 'SP', cities: ['Bauru', 'Agudos', 'Pederneiras', 'Piratininga', 'Arealva', 'Duartina'], phone: '5514999999991', instagram: 'bubbles.bauru1', lat: -22.3145, lng: -49.0587 },
    { id: 2, name: 'Bubbles Bauru Centro', state: 'SP', cities: ['Bauru'], phone: '5514999999992', instagram: 'bubbles.bauru2', lat: -22.3245, lng: -49.0687 },
    { id: 3, name: 'Bubbles Bauru Sul', state: 'SP', cities: ['Bauru', 'Avaí'], phone: '5514999999993', instagram: 'bubbles.bauru3', lat: -22.3345, lng: -49.0787 },
    { id: 4, name: 'Bubbles Lençóis Paulista Alpha', state: 'SP', cities: ['Lençóis Paulista', 'Macatuba', 'Borebi', 'Igaraçu do Tietê', 'Barra Bonita'], phone: '5514999999994', instagram: 'bubbles.lencois1', lat: -22.5986, lng: -48.8003 },
    { id: 5, name: 'Bubbles Lençóis Paulista Beta', state: 'SP', cities: ['Lençóis Paulista', 'Areiópolis'], phone: '5514999999995', instagram: 'bubbles.lencois2', lat: -22.6086, lng: -48.8103 },
  ];
  
  const states = ['RJ', 'MG', 'PR', 'SC', 'RS', 'BA', 'GO', 'DF', 'PE', 'CE', 'PA', 'AM', 'MT', 'MS', 'ES'];
  for(let i=6; i<=95; i++) {
    const st = states[i % states.length];
    const cityCount = 2 + Math.floor(Math.random() * 6); // 2 to 7 cities
    const cities = Array.from({length: cityCount}, (_, idx) => `Cidade ${idx+1} ${st}`);
    base.push({
      id: i,
      name: `Bubbles Distribuidora ${st} ${i} - Representação Oficial`,
      state: st,
      cities: cities,
      phone: `55119999900${i.toString().padStart(2, '0')}`,
      instagram: `bubbles.${st.toLowerCase()}${i}`,
      lat: -20 + (Math.random() * 10),
      lng: -50 + (Math.random() * 10),
    });
  }
  return base;
};

const DISTRIBUTORS = generateDistributors();

// Mapa SVG do Brasil Simplificado
const BrazilMapSVG = ({ activeStates, selectedState, onStateClick }: { activeStates: string[], selectedState: string | null, onStateClick: (state: string) => void }) => {
  const stateCentroids: Record<string, { x: number, y: number }> = {
    'AC': { x: 150, y: 380 }, 'AL': { x: 880, y: 350 }, 'AM': { x: 280, y: 220 }, 'AP': { x: 550, y: 100 },
    'BA': { x: 750, y: 420 }, 'CE': { x: 820, y: 220 }, 'DF': { x: 620, y: 500 }, 'ES': { x: 820, y: 600 },
    'GO': { x: 580, y: 520 }, 'MA': { x: 680, y: 220 }, 'MG': { x: 720, y: 580 }, 'MS': { x: 480, y: 620 },
    'MT': { x: 450, y: 420 }, 'PA': { x: 520, y: 220 }, 'PB': { x: 900, y: 280 }, 'PE': { x: 880, y: 310 },
    'PI': { x: 720, y: 280 }, 'PR': { x: 550, y: 750 }, 'RJ': { x: 780, y: 680 }, 'RN': { x: 920, y: 240 },
    'RO': { x: 300, y: 420 }, 'RR': { x: 350, y: 80 },  'RS': { x: 500, y: 880 }, 'SC': { x: 580, y: 820 },
    'SE': { x: 860, y: 380 }, 'SP': { x: 620, y: 680 }, 'TO': { x: 620, y: 350 }
  };

  const statePaths = [
    { id: 'AC', d: 'M100,350 L200,350 L200,400 L100,400 Z' },
    { id: 'AM', d: 'M200,150 L400,150 L400,350 L200,350 Z' },
    { id: 'RR', d: 'M300,50 L400,50 L400,150 L300,150 Z' },
    { id: 'RO', d: 'M250,350 L350,350 L350,450 L250,450 Z' },
    { id: 'PA', d: 'M400,150 L600,150 L600,350 L400,350 Z' },
    { id: 'AP', d: 'M500,50 L600,50 L600,150 L500,150 Z' },
    { id: 'MT', d: 'M350,350 L550,350 L550,550 L350,550 Z' },
    { id: 'MS', d: 'M400,550 L550,550 L550,700 L400,700 Z' },
    { id: 'GO', d: 'M550,450 L650,450 L650,600 L550,600 Z' },
    { id: 'TO', d: 'M550,300 L650,300 L650,450 L550,450 Z' },
    { id: 'MA', d: 'M600,150 L720,150 L720,300 L600,300 Z' },
    { id: 'PI', d: 'M680,250 L760,250 L760,380 L680,380 Z' },
    { id: 'CE', d: 'M760,180 L860,180 L860,260 L760,260 Z' },
    { id: 'RN', d: 'M860,200 L950,200 L950,260 L860,260 Z' },
    { id: 'PB', d: 'M860,260 L950,260 L950,300 L860,300 Z' },
    { id: 'PE', d: 'M800,300 L950,300 L950,340 L800,340 Z' },
    { id: 'AL', d: 'M840,340 L920,340 L920,370 L840,370 Z' },
    { id: 'SE', d: 'M840,370 L900,370 L900,400 L840,400 Z' },
    { id: 'BA', d: 'M680,380 L840,380 L840,520 L680,520 Z' },
    { id: 'MG', d: 'M650,520 L800,520 L800,650 L650,650 Z' },
    { id: 'ES', d: 'M800,550 L860,550 L860,650 L800,650 Z' },
    { id: 'RJ', d: 'M750,650 L820,650 L820,720 L750,720 Z' },
    { id: 'SP', d: 'M550,600 L750,600 L750,720 L550,720 Z' },
    { id: 'PR', d: 'M500,700 L650,700 L650,800 L500,800 Z' },
    { id: 'SC', d: 'M520,800 L650,800 L650,850 L520,850 Z' },
    { id: 'RS', d: 'M450,850 L600,850 L600,980 L450,980 Z' },
    { id: 'DF', d: 'M600,480 L630,480 L630,510 L600,510 Z' },
  ];

  return (
    <div className="relative w-full max-w-md mx-auto aspect-square">
      <svg viewBox="0 0 1000 1000" className="w-full h-full drop-shadow-sm">
        <g stroke="#FFFFFF" strokeWidth="4" fill="#F3F4F6">
          {statePaths.map((state) => (
            <path 
              key={`path-${state.id}`} 
              d={state.d} 
              className="transition-colors duration-300 cursor-pointer hover:fill-gray-200"
              onClick={() => onStateClick(state.id)}
            />
          ))}
        </g>

        {Object.entries(stateCentroids).map(([id, coords]) => {
          const hasDistributor = activeStates.includes(id);
          const isSelected = selectedState === id;
          
          if (!hasDistributor) return null;

          return (
            <g 
              key={`bubble-${id}`} 
              transform={`translate(${coords.x}, ${coords.y})`}
              onClick={() => onStateClick(id)}
              className="cursor-pointer group"
            >
              {isSelected && (
                <circle cx="0" cy="0" r="35" fill="#0D0C0D" opacity="0.1" className="animate-ping" />
              )}
              <circle 
                cx="0" cy="0" r={isSelected ? "25" : "18"} 
                fill={isSelected ? '#0D0C0D' : '#F4CDD4'} 
                className="transition-all duration-300 group-hover:fill-[#0D0C0D] shadow-lg"
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
};

const DistributorCard = ({ dist }: { dist: any }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(dist.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const truncateTitle = (title: string) => title.length > 35 ? title.substring(0, 32) + '...' : title;
  const whatsappMessage = encodeURIComponent(`Olá! Vi no site da Bubbles que você é fornecedor e gostaria de comprar produtos para meu banho e tosa.`);
  const whatsappLink = `https://wa.me/${dist.phone}?text=${whatsappMessage}`;
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${dist.lat},${dist.lng}`;

  const visibleCities = isExpanded ? dist.cities : dist.cities.slice(0, 4);
  const hiddenCount = dist.cities.length - 4;

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#F4CDD4] transition-all flex flex-col h-full">
      <h3 className="text-lg font-bold text-[#0D0C0D] leading-tight mb-3" title={dist.name}>
        {truncateTitle(dist.name)}
      </h3>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {visibleCities.map((city: string) => (
          <span key={city} className="text-[11px] font-bold bg-[#F4CDD4]/20 text-[#0D0C0D] px-2.5 py-1 rounded-md">
            {city}
          </span>
        ))}
        {!isExpanded && hiddenCount > 0 && (
          <button 
            onClick={() => setIsExpanded(true)}
            className="text-[11px] font-bold bg-gray-100 text-gray-600 hover:bg-gray-200 px-2.5 py-1 rounded-md transition-colors flex items-center gap-1"
          >
            +{hiddenCount} cidades <ChevronDown className="w-3 h-3" />
          </button>
        )}
        {isExpanded && hiddenCount > 0 && (
          <button 
            onClick={() => setIsExpanded(false)}
            className="text-[11px] font-bold bg-gray-100 text-gray-600 hover:bg-gray-200 px-2.5 py-1 rounded-md transition-colors flex items-center gap-1"
          >
            Ver menos <ChevronUp className="w-3 h-3" />
          </button>
        )}
      </div>

      <div className="space-y-3 mt-auto">
        <div className="grid grid-cols-2 gap-2">
          <a 
            href={`tel:+${dist.phone}`}
            className="w-full bg-gray-50 text-[#0D0C0D] border border-gray-200 font-bold px-3 py-2.5 rounded-xl hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 text-sm"
          >
            <Phone className="w-4 h-4" />
            Ligar
          </a>
          <button 
            onClick={handleCopy}
            className="w-full bg-gray-50 text-[#0D0C0D] border border-gray-200 font-bold px-3 py-2.5 rounded-xl hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 text-sm"
          >
            {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
            {copied ? 'Copiado!' : 'Copiar'}
          </button>
        </div>

        <a 
          href={whatsappLink} 
          target="_blank" 
          rel="nofollow noopener noreferrer"
          className="w-full bg-[#F4CDD4] text-[#0D0C0D] font-bold px-4 py-3 rounded-xl hover:bg-[#e8b8c2] transition-colors flex items-center justify-center gap-2 shadow-sm text-sm"
        >
          <MessageCircle className="w-4 h-4 text-white fill-white" />
          WhatsApp
        </a>
        
        <div className="flex items-center justify-between pt-2">
          <a 
            href={`https://instagram.com/${dist.instagram}`} 
            target="_blank" 
            rel="nofollow noopener noreferrer"
            className="text-gray-500 hover:text-[#0D0C0D] transition-colors flex items-center gap-1.5 text-xs font-bold"
          >
            <Instagram className="w-4 h-4" />
            @{dist.instagram}
          </a>
          <a 
            href={mapsLink} 
            target="_blank" 
            rel="nofollow noopener noreferrer"
            className="text-gray-400 hover:text-[#0D0C0D] text-[11px] underline decoration-gray-200 underline-offset-2 transition-colors flex items-center gap-1"
          >
            <MapPin className="w-3 h-3" />
            Ver no Maps
          </a>
        </div>
      </div>
    </div>
  );
};

export default function StoreLocator() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(10);

  const activeStates = useMemo(() => Array.from(new Set(DISTRIBUTORS.map(d => d.state))), []);

  const handleLocationRequest = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        () => alert('Localização obtida! Em produção, isso ordenaria a lista por proximidade.'),
        () => alert('Não foi possível obter sua localização. Por favor, digite sua cidade ou CEP.')
      );
    }
  };

  const filteredDistributors = useMemo(() => {
    return DISTRIBUTORS.filter(d => {
      const matchesSearch = 
        d.cities.some(city => city.toLowerCase().includes(searchQuery.toLowerCase())) || 
        d.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.name.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesState = selectedState ? d.state === selectedState : true;

      return matchesSearch && matchesState;
    });
  }, [searchQuery, selectedState]);

  const visibleDistributors = filteredDistributors.slice(0, visibleCount);
  const hasMore = visibleCount < filteredDistributors.length;

  return (
    <div className={`min-h-screen bg-white text-[#0D0C0D] ${figtree.className} selection:bg-[#F4CDD4] selection:text-[#0D0C0D]`}>
      
      {/* Header Slim */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm py-3 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-extrabold text-2xl tracking-tighter text-[#0D0C0D] shrink-0">
            Bubbles
          </div>
          
          {/* Barra de Busca Horizontal e Compacta */}
          <div className="flex-1 w-full max-w-3xl flex flex-row items-center bg-gray-50 border border-gray-200 rounded-xl p-1 shadow-inner gap-1">
            <div className="relative flex-1 min-w-[150px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Cidade ou CEP..." 
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(10);
                }}
                className="w-full bg-transparent pl-9 pr-3 py-1.5 text-sm text-[#0D0C0D] placeholder:text-gray-500 focus:outline-none"
              />
            </div>
            
            <div className="w-px h-5 bg-gray-200 mx-1"></div>
            
            <select 
              value={selectedState || ''}
              onChange={(e) => {
                setSelectedState(e.target.value || null);
                setVisibleCount(10);
              }}
              className="bg-transparent text-sm font-medium text-[#0D0C0D] py-1.5 pl-2 pr-6 outline-none cursor-pointer max-w-[120px]"
            >
              <option value="">Todos</option>
              {activeStates.map(st => (
                <option key={st} value={st}>{st}</option>
              ))}
            </select>
            
            <button 
              onClick={handleLocationRequest}
              title="Usar minha localização"
              className="p-1.5 bg-white rounded-lg border border-gray-200 text-gray-500 hover:text-[#0D0C0D] hover:border-[#F4CDD4] transition-all shadow-sm shrink-0 ml-1"
            >
              <Crosshair className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 md:px-12 py-10">
        
        {/* Copywriting Persuasivo */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Encontre um Distribuidor Oficial
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            A Bubbles® está presente em todas as regiões do Brasil. Temos sempre uma distribuidora parceira pronta para atender seu banho e tosa com agilidade e consultoria técnica.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Interactive Map Section */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100 shadow-sm">
              <div className="text-center mb-4">
                <h2 className="text-lg font-bold tracking-tight">Nossa Cobertura</h2>
                <p className="text-xs text-gray-500 mt-1">
                  {selectedState ? `Mostrando parceiros em ${selectedState}` : 'Selecione uma bolha no mapa para filtrar'}
                </p>
              </div>
              
              <BrazilMapSVG 
                activeStates={activeStates} 
                selectedState={selectedState} 
                onStateClick={(state: string) => {
                  setSelectedState(state === selectedState ? null : state);
                  setVisibleCount(10);
                }} 
              />

              {selectedState && (
                <button 
                  onClick={() => {
                    setSelectedState(null);
                    setVisibleCount(10);
                  }}
                  className="mt-4 w-full py-2 text-xs font-bold text-gray-500 hover:text-[#0D0C0D] transition-colors"
                >
                  Ver todos os distribuidores
                </button>
              )}
            </div>
          </div>

          {/* Distributors Grid */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-bold tracking-tight">Resultados da Busca</h2>
              <span className="text-xs font-bold bg-[#F4CDD4]/30 text-[#0D0C0D] px-3 py-1.5 rounded-full">
                {filteredDistributors.length} {filteredDistributors.length === 1 ? 'parceiro' : 'parceiros'}
              </span>
            </div>

            {filteredDistributors.length === 0 ? (
              <div className="bg-gray-50 rounded-3xl p-12 border border-gray-100 text-center shadow-sm">
                <MapPin className="w-10 h-10 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Nenhum distribuidor encontrado</h3>
                <p className="text-sm text-gray-500">
                  Tente buscar por outra cidade ou estado, ou limpe os filtros.
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-5">
                  {visibleDistributors.map((dist) => (
                    <DistributorCard key={dist.id} dist={dist} />
                  ))}
                </div>
                
                {hasMore && (
                  <div className="pt-6 text-center">
                    <button 
                      onClick={() => setVisibleCount(prev => prev + 10)}
                      className="bg-white border-2 border-gray-200 text-[#0D0C0D] font-bold px-6 py-3 rounded-xl hover:border-[#F4CDD4] transition-colors shadow-sm"
                    >
                      Ver mais distribuidores
                    </button>
                  </div>
                )}
              </>
            )}
          </div>

        </div>
      </main>

      {/* Footer CTA: Quero ser um Distribuidor */}
      <section className="bg-[#F4CDD4] mt-12 py-16 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D0C0D] tracking-tight">
            Leve a revolução da cosmética pet para sua região
          </h2>
          <p className="text-[#0D0C0D]/80 text-lg leading-relaxed max-w-2xl mx-auto">
            Seja um parceiro oficial Bubbles e ofereça o melhor rendimento e tecnologia para os groomers da sua cidade.
          </p>
          <button className="bg-[#0D0C0D] text-white font-bold px-8 py-4 rounded-xl hover:bg-gray-800 transition-colors shadow-lg shadow-black/10 text-lg">
            Quero ser Distribuidor
          </button>
        </div>
      </section>
    </div>
  );
}
