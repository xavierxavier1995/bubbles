'use client';

import Link from 'next/link';
import { PackageX, Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FDF2F4] flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative Bubbles */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#F4CDD4]/40 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-[#E8649A]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="text-center z-10 max-w-md bg-white p-10 rounded-3xl shadow-xl border border-[#F4CDD4]/50">
        <div className="mb-6 flex justify-center">
          <div className="w-24 h-24 bg-[#FCEEF1] rounded-full flex items-center justify-center">
            <PackageX className="w-12 h-12 text-[#E8649A]" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-black text-[#0D0C0D] mb-4 uppercase tracking-tight">404</h1>
        <h2 className="text-xl font-bold text-[#666666] mb-4">Página Não Encontrada</h2>
        
        <p className="text-[#999999] mb-8 text-sm md:text-base">
          Parece que esta página evaporou! Não conseguimos encontrar o que você estava procurando.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary-green flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm">
            <Home className="w-4 h-4" />
            IR PARA HOME
          </Link>
          <button onClick={() => window.history.back()} className="btn-outline-pink flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm">
            <ArrowLeft className="w-4 h-4" />
            VOLTAR
          </button>
        </div>
      </div>
    </div>
  );
}
