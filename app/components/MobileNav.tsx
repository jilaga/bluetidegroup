'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

import ServiceLink from './ServiceLink';

export default function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false);
  const mobileNav = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // biome-ignore lint/correctness/useExhaustiveDependencies: pathname change should trigger menu close
  useEffect(() => {
    setIsServiceMenuOpen(false);
  }, [pathname]);

  const handleOuterClick = useCallback((e: MouseEvent) => {
    if (!mobileNav.current) return;
    if (!mobileNav.current.contains(e.target as Node)) {
      setIsMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleOuterClick, true);
    return () => {
      document.removeEventListener('click', handleOuterClick, true);
    };
  }, [handleOuterClick]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`p-4 md:max-w-[684px] mx-auto sm:h-auto rounded-2xl overflow-auto inset-[0_0_auto_0] fixed flex flex-col items-center lg:hidden w-full z-[10000] ${isMenuOpen ? 'bg-foundation-primary-blue-primary-blue-50 h-screen' : ''}`}
    >
      <div
        className={`flex w-full justify-between items-center py-4 px-5 ${!isMenuOpen ? '[backdrop-filter:blur(320px)] rounded-full shadow border border-white bg-white/50' : ''}`}
      >
        <Link href="/">
          <Image
            src="/logo 6.svg"
            alt="Bluetide Group - Marine Services and Offshore Solutions"
            width={112}
            height={18}
            className="w-20 md:w-28 h-[1.125rem]"
          />
        </Link>
        <button type="button" onClick={toggleMenu} aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}>
          {!isMenuOpen ? (
            <FiMenu className="w-6 h-6" />
          ) : (
            <FiX className="w-6 h-6 " />
          )}
        </button>
      </div>
      {isMenuOpen && (
        <div
          ref={mobileNav}
          className=" w-full py-10 flex flex-col justify-between h-[90dvh]"
        >
          <div className=" flex sticky top-0 flex-col items-center justify-center gap-6 md:h-auto text-[2rem] text-foundation-grey-grey-500 font-body-2">
            <Link
              href="/about"
              className="rounded-81xl text-foundation-grey-grey-500   no-underline"
              onClick={toggleMenu}
            >
              About us
            </Link>
            <button
              type="button"
              onClick={() => setIsServiceMenuOpen((prev) => !prev)}
              className="rounded-81xl text-black text-center no-underline bg-transparent border-none cursor-pointer text-[2rem] font-body-2"
            >
              Our services
              <motion.div
                layout
                className="flex flex-wrap items-stretch p-4 bg-[#FFFFFFCC] rounded-xl backdrop-blur-md mx-auto justify-center gap-4 origin-top overflow-hidden"
                initial={{ height: 0, opacity: 1, marginTop: 0, padding: 0 }}
                animate={{
                  height: isServiceMenuOpen ? 'auto' : 0,
                  opacity: isServiceMenuOpen ? 1 : 0,
                  marginTop: isServiceMenuOpen ? '1em' : 0,
                  padding: isServiceMenuOpen ? '1em' : 0,
                }}
              >
                <ServiceLink
                  toggleMenu={toggleMenu}
                  href="/Services/1"
                  to="ROV Inspection"
                />
                <ServiceLink
                  toggleMenu={toggleMenu}
                  href="/Services/2"
                  to="Air diving"
                />
                <ServiceLink
                  toggleMenu={toggleMenu}
                  href="/Services/3"
                  to="Subsea survey and Positioning"
                />
                <ServiceLink
                  toggleMenu={toggleMenu}
                  href="/Services/4"
                  to="Hull Cleaning"
                />
                <ServiceLink
                  toggleMenu={toggleMenu}
                  href="/Services/5"
                  to="3rd party IMCA ROV and Diving System audits"
                />
                <ServiceLink
                  toggleMenu={toggleMenu}
                  href="/Services/6"
                  to="Electrical Instrumentation"
                />
                <ServiceLink
                  toggleMenu={toggleMenu}
                  href="/equipments"
                  to="Procurement and equipment rental"
                />
              </motion.div>
            </button>
            <Link
              href="/stories"
              className="rounded-81xl text-black  no-underline"
              onClick={toggleMenu}
            >
              Stories
            </Link>
            <Link
              href="/gallery"
              className="rounded-81xl text-black   no-underline "
              onClick={toggleMenu}
            >
              Gallery
            </Link>
          </div>
          <div className=" flex w-full justify-center pt-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full cursor-pointer no-underline self-stretch rounded-full flex bg-foundation-rust-accent-rust-accent-500 items-center justify-center py-4 px-6 text-base  text-linen"
              onClick={() => {
                window.scrollTo({
                  top: 9999999,
                  behavior: 'smooth',
                });
              }}
            >
              Let&apos;s talk
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
}
