import type { Metadata } from 'next';

import { Montserrat } from 'next/font/google';
import localFont from 'next/font/local';
import Script from 'next/script';
import { twMerge } from 'tailwind-merge';

import { CoreWebVitalsMonitoring, PerformanceBudgetMonitor } from './components/analytics/CoreWebVitals';
import { GoogleAnalytics } from './components/analytics/GoogleAnalytics';
import Footer from './components/Footer';
import Navbar from './components/Header';
import Choose from './components/landing/Choose';
import { OptimizedImage } from './components/OptimizedImage';
import { INPOptimization, InteractionFeedback } from './components/performance/INPOptimization';

import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap', // CRITICAL for performance
  variable: '--font-montserrat',
});

const clash = localFont({
  variable: '--font-clash',
  display: 'swap', // CRITICAL for performance
  src: [
    {
      path: './fonts/Clash/ClashDisplay-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Clash/ClashDisplay-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Clash/ClashDisplay-Semibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Clash/ClashDisplay-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
});

const satoshi = localFont({
  variable: '--font-satoshi',
  display: 'swap', // CRITICAL for performance
  src: [
    {
      path: './fonts/Satoshi/Satoshi-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Satoshi/Satoshi-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Satoshi/Satoshi-Black.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Satoshi/Satoshi-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.bluetidegroup.com'),
  title: {
    default: 'Bluetide Group - Expert Marine Services | ROV, Diving & Hull Cleaning',
    template: '%s | Bluetide Group',
  },
  description: 'Leading marine services company in Nigeria. Expert underwater hull cleaning, diving services, ROV inspection, and subsea positioning. Trusted by oil & gas industry. ISO certified.',
  keywords: [
    'marine services Nigeria',
    'underwater hull cleaning',
    'ROV inspection services',
    'diving services Lagos',
    'subsea positioning',
    'hull cleaning Nigeria',
    'marine diving contractor',
    'offshore diving services',
    'underwater inspection',
    'marine equipment rental'
  ],
  authors: [{ name: 'Bluetide Group' }],
  creator: 'Bluetide Group',
  publisher: 'Bluetide Group',

  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.bluetidegroup.com',
    siteName: 'Bluetide Group',
    title: 'Bluetide Group - Expert Marine Services | ROV, Diving & Hull Cleaning',
    description: 'Leading marine services company in Nigeria. Expert underwater hull cleaning, diving services, ROV inspection, and subsea positioning.',
    images: [
      {
        url: 'https://www.bluetidegroup.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bluetide Group - Marine Services Experts',
        type: 'image/jpeg',
      },
    ],
  },

  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Bluetide Group - Expert Marine Services',
    description: 'Leading marine services company in Nigeria. Expert underwater hull cleaning, diving services, ROV inspection.',
    images: ['https://www.bluetidegroup.com/og-image.jpg'],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Icons
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.webp',
  },

  // Manifest for PWA
  manifest: '/manifest.json',

  // Search Console Verification
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION_ID || '',
  },

  // Additional verification methods and Facebook
  other: {
    'google-site-verification': process.env.NEXT_PUBLIC_GSC_VERIFICATION_ID || '',
    'msvalidate.01': process.env.NEXT_PUBLIC_BING_VERIFICATION_ID || '',
    'yandex-verification': process.env.NEXT_PUBLIC_YANDEX_VERIFICATION_ID || '',
    'fb:app_id': process.env.NEXT_PUBLIC_FB_APP_ID || '',
  },

  // Other
  category: 'Marine Services',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" ">
      <body
        className={twMerge(
          montserrat.className,
          montserrat.variable,
          clash.variable,
          satoshi.variable,
          'flex flex-col w-full justify-center items-center'
        )}
      >
        <Navbar />
        {children}
        <Choose />
        <Footer />
        <a
          className="fixed inset-[auto_2em_2em_auto] "
          href="https://wa.me/+2347065382326"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
        >
          <OptimizedImage
            src="/whatsapp.svg"
            alt="Contact Bluetide Group on WhatsApp"
            width={48}
            height={48}
            className="rounded"
            priority={false}
          />
        </a>

        {/* Enhanced Google Analytics with Core Web Vitals */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}

        {/* Core Web Vitals Monitoring */}
        <CoreWebVitalsMonitoring />

        {/* Performance Budget Monitoring (Development) */}
        <PerformanceBudgetMonitor />

        {/* INP Optimization for 2025 Standards */}
        <INPOptimization />

        {/* Interaction Feedback (Development) */}
        {process.env.NODE_ENV === 'development' && <InteractionFeedback />}

        {/* Google Tag Manager - Ready for tracking ID */}
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <Script id="gtm" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
            `}
          </Script>
        )}
      </body>
    </html>
  );
}
