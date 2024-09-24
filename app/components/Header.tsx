'use client';
import { useState, useEffect, useMemo, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import MobileNav from './MobileNav';
import { twMerge } from 'tailwind-merge';
import ServiceLink from './ServiceLink';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [areServicesOpen, setAreServicesOpen] = useState(false);

  const serviceMenuRef = useRef<HTMLDivElement>(null);

  const handleOuterClick: (this: Document, ev: MouseEvent) => any = function (
    e
  ) {
    if (!serviceMenuRef.current) return;
    if (!serviceMenuRef.current.contains(e.target as Node)) {
      setAreServicesOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOuterClick, true);

    document.addEventListener('scroll', () => setAreServicesOpen(false));
  }, []);

  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <MobileNav />
      <nav className="w-full hidden mx-auto lg:flex justify-center items-center p-4 top-0 fixed z-50  text-nowrap">
        <AnimatePresence>
          {areServicesOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                ref={serviceMenuRef}
                className="flex flex-wrap items-stretch p-4 max-w-[1040px] mx-auto justify-center gap-4 absolute inset-[auto_0_0_0] translate-y-full bg-[#FFFFFFCC] z-[70] rounded-xl backdrop-blur-md"
              >
                <ServiceLink href="/Services/1" to="Hull Cleaning" />
                <ServiceLink
                  href="/Services/2"
                  to="Remotely Operated Vehicle (ROV)"
                />
                <ServiceLink
                  href="/Services/3"
                  to="Procurement and equipment rental"
                />
                <ServiceLink href="/Services/4" to="Offshore support" />
                <ServiceLink href="/Services/5" to="Offshore support" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 z-[60]"
              />
            </>
          )}
        </AnimatePresence>
        <div
          className="w-full max-w-[1040px] [backdrop-filter:blur(320px)] rounded-full shadow border border-white 
       bg-white/50 overflow-hidden flex flex-row items-center justify-between py-3 px-4 pl-6  box-border text-center text-base text-foundation-grey-grey-500 h-max"
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
                  ? ' text-foundation-rust-accent-rust-accent-500'
                  : ''
              )}
            >
              About us
            </Link>
            <div
              onClick={() => setAreServicesOpen((prev) => !prev)}
              className={twMerge(
                'hover:text-foundation-rust-accent-rust-accent-500 relative no-underline cursor-pointer',
                areServicesOpen
                  ? ' text-foundation-rust-accent-rust-accent-500'
                  : ''
              )}
            >
              Our services
            </div>
            <Link
              href="/stories"
              className={twMerge(
                'hover:text-foundation-rust-accent-rust-accent-500 no-underline',
                pathname === '/stories'
                  ? ' text-foundation-rust-accent-rust-accent-500'
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
                  ? ' text-foundation-rust-accent-rust-accent-500'
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
