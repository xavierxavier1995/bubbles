import { Metadata } from 'next';
import FAQClient from './FAQClient';

export const metadata: Metadata = {
  title: 'Central de Ajuda e Suporte Técnico Bubbles | Estética Pet de Alta Performance',
  description: 'Encontre respostas técnicas sobre diluição de produtos, protocolos de banho e tosa, logística de entrega e políticas de troca da Bubbles. Suporte especializado para profissionais.',
};

export default function FAQPage() {
  return <FAQClient />;
}
