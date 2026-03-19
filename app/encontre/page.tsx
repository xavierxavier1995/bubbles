'use client';

import { Figtree } from 'next/font/google';
import { Search, Crosshair, MessageCircle, MapPin, Phone, Copy, ArrowRight } from 'lucide-react';
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
const STATE_CENTROIDS: Record<string, { x: number, y: number }> = {
  'AC': { x: 150, y: 380 }, 'AL': { x: 880, y: 350 }, 'AM': { x: 280, y: 220 }, 'AP': { x: 550, y: 100 },
  'BA': { x: 750, y: 420 }, 'CE': { x: 820, y: 220 }, 'DF': { x: 620, y: 500 }, 'ES': { x: 820, y: 600 },
  'GO': { x: 580, y: 520 }, 'MA': { x: 680, y: 220 }, 'MG': { x: 720, y: 580 }, 'MS': { x: 480, y: 620 },
  'MT': { x: 450, y: 420 }, 'PA': { x: 520, y: 220 }, 'PB': { x: 900, y: 280 }, 'PE': { x: 880, y: 310 },
  'PI': { x: 720, y: 280 }, 'PR': { x: 550, y: 750 }, 'RJ': { x: 780, y: 680 }, 'RN': { x: 920, y: 240 },
  'RO': { x: 300, y: 420 }, 'RR': { x: 350, y: 80 },  'RS': { x: 500, y: 880 }, 'SC': { x: 580, y: 820 },
  'SE': { x: 860, y: 380 }, 'SP': { x: 620, y: 680 }, 'TO': { x: 620, y: 350 }
};

const STATE_PATHS = [
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

const STATE_COORDS_PERCENT: Record<string, { x: number, y: number }> = {
  'AC': { x: 15, y: 45 }, 'AL': { x: 88, y: 38 }, 'AM': { x: 30, y: 25 }, 'AP': { x: 58, y: 12 },
  'BA': { x: 75, y: 48 }, 'CE': { x: 83, y: 25 }, 'DF': { x: 62, y: 52 }, 'ES': { x: 82, y: 62 },
  'GO': { x: 58, y: 52 }, 'MA': { x: 68, y: 25 }, 'MG': { x: 72, y: 58 }, 'MS': { x: 48, y: 62 },
  'MT': { x: 45, y: 42 }, 'PA': { x: 52, y: 25 }, 'PB': { x: 90, y: 30 }, 'PE': { x: 88, y: 34 },
  'PI': { x: 72, y: 30 }, 'PR': { x: 55, y: 75 }, 'RJ': { x: 78, y: 68 }, 'RN': { x: 92, y: 26 },
  'RO': { x: 30, y: 45 }, 'RR': { x: 35, y: 10 },  'RS': { x: 50, y: 88 }, 'SC': { x: 55, y: 82 },
  'SE': { x: 86, y: 40 }, 'SP': { x: 62, y: 68 }, 'TO': { x: 62, y: 38 }
};

const MapComponent = ({ activeStates, selectedState, onStateClick }: { activeStates: string[], selectedState: string | null, onStateClick: (state: string) => void }) => {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-square">
      <svg viewBox="0 0 1000 1000" className="w-full h-full drop-shadow-sm">
        <g stroke="#FFFFFF" strokeWidth="4" fill="#F3F4F6">
          {STATE_PATHS.map((state) => (
            <path key={`path-${state.id}`} d={state.d} className="transition-colors duration-300 cursor-pointer hover:fill-gray-200" onClick={() => onStateClick(state.id)} />
          ))}
        </g>
        {Object.entries(STATE_CENTROIDS).map(([id, coords]) => {
          if (!activeStates.includes(id)) return null;
          const isSelected = selectedState === id;
          return (
            <g key={`pin-${id}`} transform={`translate(${coords.x}, ${coords.y})`} onClick={() => onStateClick(id)} className="cursor-pointer group">
              <path d="M0,-30 C12,-30 20,-20 20,-10 C20,5 0,20 0,20 C0,20 -20,5 -20,-10 C-20,-20 -12,-30 0,-30 Z" fill={isSelected ? '#0D0C0D' : '#F4CDD4'} className="transition-all duration-300 group-hover:fill-[#0D0C0D] shadow-lg" />
              <circle cx="0" cy="-12" r="6" fill="#FFFFFF" />
            </g>
          );
        })}
      </svg>
    </div>
  );
};

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const DistributorCard = ({ dist }: { dist: any }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(dist.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappMessage = encodeURIComponent(`Olá! Vi no site da Bubbles que você é fornecedor e gostaria de comprar produtos para meu estabelecimento.`);
  const whatsappLink = `https://wa.me/${dist.phone}?text=${whatsappMessage}`;
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${dist.lat},${dist.lng}`;

  const visibleCities = isExpanded ? dist.cities : dist.cities.slice(0, 3);
  const hiddenCount = dist.cities.length - 3;

  return (
    <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#F4CDD4] transition-all flex flex-col h-full">
      <h3 className="text-base font-bold text-[#0D0C0D] leading-tight mb-2 line-clamp-2" title={dist.name}>
        {dist.name}
      </h3>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {visibleCities.map((city: string) => (
          <span key={city} className="text-[10px] font-bold bg-[#F4CDD4]/20 text-[#0D0C0D] px-2 py-1 rounded">
            {city}
          </span>
        ))}
        {!isExpanded && hiddenCount > 0 && (
          <button 
            onClick={() => setIsExpanded(true)}
            className="text-[10px] font-bold bg-[#0D0C0D] text-white px-2 py-1 rounded transition-colors"
          >
            +{hiddenCount} CIDADES
          </button>
        )}
        {isExpanded && hiddenCount > 0 && (
          <button 
            onClick={() => setIsExpanded(false)}
            className="text-[10px] font-bold bg-gray-100 text-gray-600 hover:bg-gray-200 px-2 py-1 rounded transition-colors"
          >
            Ocultar
          </button>
        )}
      </div>

      <div className="mt-auto space-y-3">
        <div className="flex items-center justify-between">
          <div 
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-[#0D0C0D] cursor-pointer transition-colors"
            title="Clique para copiar"
          >
            <Phone className="w-3 h-3" />
            <span className="font-mono">{dist.phone}</span>
            {copied ? <span className="text-green-600 text-[10px] font-bold ml-1">Copiado!</span> : <Copy className="w-3 h-3 ml-1 opacity-50" />}
          </div>
          <a 
            href={mapsLink} 
            target="_blank" 
            rel="nofollow noopener noreferrer"
            className="text-gray-400 hover:text-[#0D0C0D] text-[10px] underline decoration-gray-200 underline-offset-2 transition-colors flex items-center gap-1"
          >
            <MapPin className="w-3 h-3" /> Maps
          </a>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <a 
            href={`tel:+${dist.phone}`}
            className="w-full bg-gray-50 text-[#0D0C0D] border border-gray-200 font-bold px-2 py-2 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-1.5 text-xs"
          >
            <Phone className="w-3.5 h-3.5" />
            Ligar
          </a>
          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="nofollow noopener noreferrer"
            className="w-full bg-[#25D366] text-white font-bold px-2 py-2 rounded-lg hover:bg-[#20bd5a] transition-colors flex items-center justify-center gap-1.5 shadow-sm text-xs"
          >
            <WhatsAppIcon className="w-3.5 h-3.5" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default function StoreLocator() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);

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
    const stateWeights: Record<string, number> = {
      'SP': 1, 'MG': 2, 'RJ': 3, 'BA': 4, 'PR': 5, 'RS': 6, 'PE': 7, 'CE': 8, 'PA': 9, 'SC': 10
    };

    const filtered = DISTRIBUTORS.filter(d => {
      const matchesSearch = 
        d.cities.some(city => city.toLowerCase().includes(searchQuery.toLowerCase())) || 
        d.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.name.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesState = selectedState ? d.state === selectedState : true;

      return matchesSearch && matchesState;
    });

    return filtered.sort((a, b) => {
      const weightA = stateWeights[a.state] || 99;
      const weightB = stateWeights[b.state] || 99;
      return weightA - weightB;
    });
  }, [searchQuery, selectedState]);

  const visibleDistributors = filteredDistributors.slice(0, visibleCount);
  const hasMore = visibleCount < filteredDistributors.length;

  return (
    <div className={`min-h-screen bg-white text-[#0D0C0D] ${figtree.className} selection:bg-[#F4CDD4] selection:text-[#0D0C0D]`}>
      
      {/* Header Slim */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm py-3 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4">
          
          {/* Barra de Busca Horizontal e Compacta */}
          <div className="w-full max-w-3xl flex flex-row items-center bg-gray-50 border border-gray-200 rounded-xl p-1 shadow-inner gap-1">
            <div className="relative flex-1 min-w-[150px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Encontre o distribuidor mais próximo (Digite sua cidade)..." 
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(6);
                }}
                className="w-full bg-transparent pl-9 pr-3 py-1.5 text-sm md:text-base text-[#0D0C0D] placeholder:text-gray-500 focus:outline-none"
              />
            </div>
            
            <div className="w-px h-5 bg-gray-200 mx-1"></div>
            
            <select 
              value={selectedState || ''}
              onChange={(e) => {
                setSelectedState(e.target.value || null);
                setVisibleCount(6);
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

        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Interactive Map Section */}
          <div className="order-2 lg:order-1 lg:col-span-5 lg:sticky lg:top-24 w-full">
            <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100 shadow-sm">
              <div className="text-center mb-4">
                <h2 className="text-lg font-bold tracking-tight">Nossa Cobertura</h2>
                <p className="text-xs text-gray-500 mt-1">
                  {selectedState ? `Mostrando parceiros em ${selectedState}` : 'Selecione uma bolha no mapa para filtrar'}
                </p>
              </div>
              
              <MapComponent 
                activeStates={activeStates} 
                selectedState={selectedState} 
                onStateClick={(state: string) => {
                  setSelectedState(state === selectedState ? null : state);
                  setVisibleCount(6);
                }} 
              />

              {selectedState && (
                <button 
                  onClick={() => {
                    setSelectedState(null);
                    setVisibleCount(6);
                  }}
                  className="mt-4 w-full py-2.5 text-sm font-bold bg-[#F4CDD4] text-[#0D0C0D] rounded-xl hover:bg-[#e8b8c2] transition-colors shadow-sm"
                >
                  Ver todos os distribuidores
                </button>
              )}
            </div>
          </div>

          {/* Distributors Grid */}
          <div className="order-1 lg:order-2 lg:col-span-7 space-y-6 w-full">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-bold tracking-tight">Resultados da Busca</h2>
              <span className="text-xs font-bold bg-[#F4CDD4]/30 text-[#0D0C0D] px-3 py-1.5 rounded-full">
                {filteredDistributors.length} {filteredDistributors.length === 1 ? 'parceiro' : 'parceiros'}
              </span>
            </div>

            {filteredDistributors.length === 0 ? (
              <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 text-center shadow-sm flex flex-col items-center">
                <MapPin className="w-12 h-12 text-gray-300 mb-4" />
                <h3 className="text-xl font-bold text-[#0D0C0D] mb-2">Nenhum distribuidor encontrado na sua região</h3>
                <p className="text-gray-600 mb-8 max-w-md">
                  Não se preocupe! Você pode comprar diretamente conosco no whatsapp com condições especiais exclusivas.
                </p>
                <a 
                  href={`https://wa.me/5511999999999?text=${encodeURIComponent('Olá! Busquei por um distribuidor na minha cidade e não encontrei. Gostaria de saber mais sobre as condições especiais para comprar diretamente com vocês.')}`}
                  target="_blank" 
                  rel="nofollow noopener noreferrer"
                  className="bg-[#25D366] text-white font-bold px-6 py-3.5 rounded-xl hover:bg-[#20bd5a] transition-colors flex items-center gap-2 shadow-sm shadow-[#25D366]/20"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Comprar com Condição Especial
                </a>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {visibleDistributors.map((dist) => (
                    <DistributorCard key={dist.id} dist={dist} />
                  ))}
                </div>
                
                {hasMore && (
                  <div className="pt-8 pb-4 text-center">
                    <button 
                      onClick={() => setVisibleCount(prev => prev + 6)}
                      className="bg-[#F4CDD4] text-[#0D0C0D] font-extrabold px-8 py-3.5 rounded-xl hover:bg-[#e8b8c2] transition-all shadow-sm hover:shadow-md text-sm md:text-base"
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
      <section className="max-w-6xl mx-auto px-6 md:px-12 mt-8 mb-16">
        <div className="bg-[#FCF8F9] rounded-[2rem] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-5 md:gap-6">
            <div className="bg-white w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-[1.5rem] flex items-center justify-center shadow-sm shrink-0">
              <MessageCircle className="w-8 h-8 md:w-10 md:h-10 text-[#0D0C0D]" strokeWidth={1.5} />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-[#0D0C0D] mb-1 md:mb-2">
                Quer ser um distribuidor?
              </h2>
              <p className="text-[#0D0C0D]/70 text-base md:text-lg">
                Nossa equipe está pronta para ajudar você a ser um parceiro oficial.
              </p>
            </div>
          </div>
          <button className="shrink-0 bg-[#0D0C0D] text-white font-semibold px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl hover:bg-gray-800 transition-colors flex items-center gap-2 md:gap-3 text-base md:text-lg">
            Fale com nossa equipe <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
