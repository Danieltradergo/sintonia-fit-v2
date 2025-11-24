'use client';

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SintoniaFit - Transformação Corporal Inteligente',
  description: 'Webapp inteligente para pessoas em tratamento com Mounjaro',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-bg text-gray-text font-sans">
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
