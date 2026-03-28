import Link from 'next/link';

export default function CatchAll() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h2 className="text-4xl font-bold text-[#2A2A2A] mb-4">Página não encontrada</h2>
      <p className="text-[#666666] mb-8">A página que você está procurando não existe ou foi movida.</p>
      <Link 
        href="/"
        className="bg-[#2A2A2A] text-white px-6 py-3 rounded-full hover:bg-[#404040] transition-colors"
      >
        Voltar para a Home
      </Link>
    </div>
  );
}
