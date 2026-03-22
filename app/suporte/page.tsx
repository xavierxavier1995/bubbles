import { Metadata } from 'next';
import SupportBanner from '@/components/SupportBanner';
import FAQClient from './FAQClient';
import { faqData } from './data';

export const metadata: Metadata = {
  title: 'Central de Ajuda e Suporte Técnico Bubbles | Estética Pet de Alta Performance',
  description: 'Encontre respostas técnicas sobre diluição de produtos, protocolos de banho e tosa, logística de entrega e políticas de troca da Bubbles. Suporte especializado para profissionais.',
};

export default function FAQPage() {
  // Generate JSON-LD Schema
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.flatMap(category => 
      category.questions.map(q => ({
        "@type": "Question",
        "name": q.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": q.answer
        }
      }))
    )
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      
      {/* Header Section */}
      <section className="pt-24 pb-12 px-6 bg-gradient-to-b from-white to-[#FAFAFA]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight">
            Suporte Técnico e Perguntas Frequentes
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Nossa plataforma foi construída para ajudar você a trabalhar de forma mais inteligente. Encontre respostas técnicas sobre nossos produtos, protocolos e logística.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <FAQClient />
        </div>
      </section>

      <SupportBanner pageName="Suporte Técnico" />
    </div>
  );
}
