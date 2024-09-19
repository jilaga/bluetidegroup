'use client';
import { useState, useEffect, useMemo, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, animate, motionValue } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import MobileNav from './MobileNav';
import { twMerge } from 'tailwind-merge';
import ServiceLink from './ServiceLink';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [areServicesOpen, setAreServicesOpen] = useState(false);

  const serviceMenuRef = useRef<HTMLDivElement>(null);

  const opacity = useMemo(() => motionValue(0), []);
  const handleOuterClick: (this: Document, ev: MouseEvent) => any = function (
    e
  ) {
    if (!serviceMenuRef.current!.contains(e.target as Node)) {
      setAreServicesOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOuterClick, true);
  }, []);
  useEffect(() => {
    if (areServicesOpen) {
      animate(opacity, 1, { duration: 0.3 });
      console.log('to 1');
      return;
    }
    console.log('to 0');
    animate(opacity, 0, { duration: 0.3 });
  }, [areServicesOpen]);

  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <MobileNav />
      <nav className="w-full hidden mx-auto lg:flex justify-center items-center p-4 top-0 fixed z-50  text-nowrap">
        <motion.div
          style={{ opacity }}
          ref={serviceMenuRef}
          className="flex flex-wrap items-stretch p-4 max-w-[1040px] mx-auto justify-center gap-4 absolute inset-[auto_0_0_0] translate-y-full bg-[#FFFFFFCC] rounded-xl backdrop-blur-md"
        >
          <ServiceLink to="Hull Cleaning" />
          <ServiceLink to="Remotely Operated Vehicle (ROV)" />
          <ServiceLink to="Procurement and equipment rental" />
          <ServiceLink to="Offshore support" />
          <ServiceLink to="Offshore support" />
        </motion.div>
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
