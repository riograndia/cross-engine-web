import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Cross Engine — Enterprise GPU Cloud",
  description: "High-performance GPU infrastructure for AI inference, LLM, visual workloads and enterprise applications.",
  icons: {
    icon: [
      { url: '/images/logos/cross-engine-navbar.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/logos/cross-engine-navbar.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/logos/cross-engine-navbar.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: '/images/logos/cross-engine-navbar.png',
  },
  keywords: ["GPU Cloud", "AI Infrastructure", "Machine Learning", "NVIDIA", "Enterprise Cloud", "GPU Rental", "คลาวด์ GPU", "โครงสร้างพื้นฐาน AI"],
  authors: [{ name: "Cross Engine" }],
  creator: "Cross Engine",
  publisher: "Cross Engine",
  robots: "index, follow",
  alternates: {
    languages: {
      'en': 'https://crossengine.com',
      'th': 'https://crossengine.com/th',
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://crossengine.com",
    siteName: "Cross Engine",
    title: "Cross Engine — Enterprise GPU Cloud",
    description: "High-performance GPU infrastructure for AI inference, LLM, visual workloads and enterprise applications.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cross Engine GPU Cloud",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cross Engine — Enterprise GPU Cloud",
    description: "High-performance GPU infrastructure for AI inference, LLM, visual workloads and enterprise applications.",
    images: ["/images/og-image.jpg"],
    creator: "@crossengine",
  },
  metadataBase: new URL("https://crossengine.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
        <link rel="icon" href="/images/logos/cross-engine-navbar.png?v=2" sizes="any" type="image/png" />
        <link rel="apple-touch-icon" href="/images/logos/cross-engine-navbar.png?v=2" />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col font-sans antialiased`}>
        <SiteHeader />
        <main className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
