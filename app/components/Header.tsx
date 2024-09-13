'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import MobileNav from './MobileNav';
import { twMerge } from 'tailwind-merge';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <MobileNav />
      <nav className="w-full hidden mx-auto lg:flex justify-center items-center p-4 top-0 fixed z-50  text-nowrap">
        <div
          className="w-full max-w-[1040px] [backdrop-filter:blur(320px)] rounded-full shadow border border-white 
       bg-white/50 overflow-hidden flex flex-row items-center justify-between py-3 px-4 pl-6  box-border text-center text-xl text-foundation-grey-grey-500 h-max"
        >
          <Link href="/" className="flex items-center ">
            <Image
              src="/logo 6.svg"
              alt="Logo"
              width={112}
              height={18}
              className="w-28 h-[1.125rem]"
            />
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link
              href="/about"
              className={twMerge(
                'hover:text-foundation-rust-accent-rust-accent-500 no-underline',
                pathname === '/about'
                  ? 'font-semibold text-foundation-rust-accent-rust-accent-500'
                  : ''
              )}
            >
              About us
            </Link>
            <Link
              href="/Services"
              className={twMerge(
                'hover:text-foundation-rust-accent-rust-accent-500 no-underline',
                pathname === '/Services'
                  ? 'font-semibold text-foundation-rust-accent-rust-accent-500'
                  : ''
              )}
            >
              Our services
            </Link>
            <Link
              href="/stories"
              className={twMerge(
                'hover:text-foundation-rust-accent-rust-accent-500 no-underline',
                pathname === '/stories'
                  ? 'font-semibold text-foundation-rust-accent-rust-accent-500'
                  : ''
              )}
            >
              Stories
            </Link>
            <Link
              href="/gallery"
              className={twMerge(
                'hover:text-foundation-rust-accent-rust-accent-500 no-underline',
                pathname === '/gallery'
                  ? 'font-semibold text-foundation-rust-accent-rust-accent-500'
                  : ''
              )}
            >
              Gallery
            </Link>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-max"
          >
            <Link
              href="/contact"
              className="no-underline self-stretch rounded-full md:flex bg-foundation-rust-accent-rust-accent-500 items-center justify-center py-4 px-6 hidden text-base  text-linen"
            >
              Let&apos;s talk
            </Link>
          </motion.div>

          <button onClick={toggleMenu} className="md:hidden">
            {!isMenuOpen ? (
              <FiMenu className="w-6 h-6" />
            ) : (
              <FiX className="w-6 h-6 " />
            )}
          </button>
        </div>
      </nav>
    </>
  );
}
