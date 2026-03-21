import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Newsletter | Bubbles® Cosméticos Pet Profissionais',
  description: 'Inscreva-se na nossa newsletter e receba dicas de banho e tosa, ofertas exclusivas e novidades da Bubbles Cosméticos Pet.',
};

export default function NewsletterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Newsletter | Bubbles® Cosméticos Pet Profissionais",
    "description": "Inscreva-se na nossa newsletter e receba dicas de banho e tosa, ofertas exclusivas e novidades da Bubbles Cosméticos Pet.",
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
