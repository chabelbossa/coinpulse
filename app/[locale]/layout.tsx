import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '../globals.css';
import Header from '@/components/Header';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'CoinPulse - Real-time Crypto Intelligence',
    template: '%s | CoinPulse',
  },
  description:
    'Suivez les marchés crypto en temps réel avec CoinPulse. Dashboard avancé, graphiques en direct, analyses de marché et terminal haute fréquence pour traders et investisseurs.',
  keywords: [
    'crypto',
    'bitcoin',
    'ethereum',
    'trading',
    'dashboard',
    'temps réel',
    'analyse',
    'marché',
    'blockchain',
  ],
  authors: [{ name: 'CoinPulse Team' }],
  creator: 'CoinPulse',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    alternateLocale: 'en_US',
    title: 'CoinPulse - Real-time Crypto Intelligence',
    description:
      'Suivez les marchés crypto en temps réel avec CoinPulse. Dashboard avancé et terminal haute fréquence.',
    siteName: 'CoinPulse',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CoinPulse - Real-time Crypto Intelligence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CoinPulse - Real-time Crypto Intelligence',
    description: 'Dashboard crypto temps réel avec analyses de marché et terminal haute fréquence.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
