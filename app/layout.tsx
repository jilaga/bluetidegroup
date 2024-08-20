import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {twMerge} from "tailwind-merge";
import Navbar from './components/Header';
import Footer from "./components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bluetide Group",
  description: "Well... no Meta for you yet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="mx-auto w-full max-w-[1440px] justify-center items-center ">
      <Navbar />
      <body className= {twMerge(inter.className, "antialiased w-full")}>
        {children}
      </body>
      <Footer />
    </html>
  );
};
