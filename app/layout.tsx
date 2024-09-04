import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { twMerge } from 'tailwind-merge';
import Navbar from './components/Header';
import Footer from './components/Footer';
import Choose from './components/landing/Choose';

const montserrat = Montserrat({ subsets: ['latin'] });

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
          'flex flex-col w-full justify-center items-center  '
        )}
      >
        <Navbar />
        {children}
        <Choose />
        <Footer />
      </body>
    </html>
  );
}
