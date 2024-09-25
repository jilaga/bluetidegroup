import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import localFont from 'next/font/local';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';

import Navbar from './components/Header';
import Footer from './components/Footer';
import Choose from './components/landing/Choose';
import './globals.css';

const montserrat = Montserrat({ subsets: ['latin'] });

const clash = localFont({
  variable: '--font-clash',
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
  title: 'Bluetide Group',
  description:
    'Delivering superior solutions for Underwater Hull Cleaning, Diving and ROV Services',
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
          clash.variable,
          satoshi.variable,
          'flex flex-col w-full justify-center items-center  '
        )}
      >
        <Navbar />
        {children}
        <Choose />
        <Footer />
        <a
          className="fixed inset-[auto_1em_1em_auto]"
          href="https://wa.me/+2348097140374"
        >
          <Image src="/whatsapp.svg" alt="whatsapp" width={35} height={35} />
        </a>
      </body>
    </html>
  );
}
