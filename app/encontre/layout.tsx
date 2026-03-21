import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Encontre um Distribuidor | Bubbles® Cosméticos Pet Profissionais',
  description: 'Encontre o distribuidor Bubbles mais próximo de você. Produtos profissionais para banho e tosa com alto rendimento e segurança vegana.',
};

export default function EncontreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Encontre um Distribuidor | Bubbles® Cosméticos Pet Profissionais",
    "description": "Encontre o distribuidor Bubbles mais próximo de você. Produtos profissionais para banho e tosa com alto rendimento e segurança vegana.",
    "publisher": {
      "@type": "Organization",
      "name": "Bubbles",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bubbles.com.br/logo.png"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
