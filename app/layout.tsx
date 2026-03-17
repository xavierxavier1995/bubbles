import type {Metadata} from 'next';
import { Figtree } from 'next/font/google';
import './globals.css';

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-figtree',
});

export const metadata: Metadata = {
  title: 'Política de Frete e Entrega | Bubbles Pet Profissional',
  description: 'Saiba tudo sobre as entregas da Bubbles. Frete grátis por região, despacho em 3 dias e rastreio via Mandaê.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={figtree.variable} suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
