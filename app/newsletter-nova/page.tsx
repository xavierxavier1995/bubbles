'use client';

export default function NewsletterNovaPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col">
      <div className="flex-grow py-12 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold text-gray-500 tracking-widest uppercase mb-2">Opção 03</h2>
            <p className="text-gray-400">Texto 02 (Cashback) + Layout 02 (Duas Colunas)</p>
          </div>

          <section className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8 sm:p-12 lg:p-16 bg-[#F9F5F4] flex flex-col justify-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1F2C] mb-4 leading-tight">
                  Receba Cashback em todas as compras
                </h2>
                <p className="text-[#4A5568] text-lg leading-relaxed">
                  Ganhe <strong className="font-bold text-[#1A1F2C]">5%</strong> de volta em cada pedido e ofertas exclusivas direto no e-mail.
                </p>
              </div>
              <div className="md:w-1/2 p-8 sm:p-12 lg:p-16 flex items-center">
                <form className="w-full space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#4A5568] mb-2">E-mail de acesso</label>
                    <input 
                      id="email"
                      type="email" 
                      placeholder="coloque aqui seu melhor e-mail" 
                      required
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#F4CDD4] transition-all text-gray-900 placeholder-gray-400"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-4 rounded-xl bg-black text-white font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                  >
                    Garantir meu Cashback
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
