import Link from 'next/link';
import { Package } from 'lucide-react';
import { Metadata } from 'next';
import SupportBanner from '@/components/SupportBanner';

export const metadata: Metadata = {
  title: 'Rodapé | Bubbles® Cosméticos Pet Profissionais',
  description: 'Rodapé da Bubbles Cosméticos Pet Profissionais.',
};

export default function FooterPreview() {
  return (
    <div className="bg-[#F9FAFB] flex flex-col font-sans selection:bg-[#F4CDD4] selection:text-[#0D0C0D]">
      
      {/* Spacer to simulate page content */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-4 py-32">
        <div className="w-16 h-16 bg-[#F4CDD4]/30 rounded-full flex items-center justify-center mb-4">
          <Package className="w-8 h-8 text-[#0D0C0D]" />
        </div>
        <h1 className="text-3xl font-bold text-[#0D0C0D]">Conteúdo da Loja</h1>
        <p className="text-gray-500 max-w-md">Role para baixo para visualizar o novo rodapé projetado com foco em conversão, autoridade e usabilidade mobile. Ele agora é global e aparece em todas as páginas!</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-16 w-full">
        <SupportBanner pageName="Rodapé" />
      </div>

    </div>
  );
}
