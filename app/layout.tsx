import type {Metadata} from 'next';
import { Figtree } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-figtree',
});

export const metadata: Metadata = {
  title: 'Bubbles Pet Profissional',
  description: 'Cosmética Pet Profissional de alta performance.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={figtree.variable} suppressHydrationWarning>
      <body className="font-sans antialiased flex flex-col min-h-screen" suppressHydrationWarning>
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
