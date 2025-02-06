import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Blackrose Club - Metaverse Business & Leisure Platform',
  description: 'Seize early opportunities in the Metaverse for business and leisure. Join and organize cultural and sports events, sell products in your own metaverse.',
  openGraph: {
    title: 'Blackrose Club - Metaverse Business & Leisure Platform',
    description: 'Seize early opportunities in the Metaverse for business and leisure',
    images: ['/og-image.jpg'],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} relative min-h-screen`}>
        <div className="fixed inset-0 wave-pattern opacity-30" />
        <div className="fixed inset-0 grid-pattern opacity-10" />
        <div className="fixed inset-0 glow-effect" />
        <div className="relative z-10">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}