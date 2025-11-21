'use client';
import { useState, useEffect, useMemo, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// Removed framer-motion for better performance
import { FiMenu, FiX } from 'react-icons/fi';
import MobileNav from './MobileNav';
import { twMerge } from 'tailwind-merge';
import ServiceLink from './ServiceLink';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [areServicesOpen, setAreServicesOpen] = useState(false);
  const pathname = usePathname();

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

  useEffect(() => {
    setAreServicesOpen(false);
  }, [pathname]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full">
      <MobileNav />
      <nav className="w-full hidden mx-auto lg:flex justify-center items-center p-4 top-0 fixed z-50  text-nowrap">
        {areServicesOpen && (
          <div>
            <div
              ref={serviceMenuRef}
              className="services-dropdown flex flex-wrap items-stretch p-4 max-w-[1040px] mx-auto justify-center gap-4 absolute inset-[auto_0_0_0] translate-y-full bg-[#FFFFFFCC] z-[70] rounded-xl backdrop-blur-md transition-all duration-200 ease-out"
            >
              <ServiceLink href="/Services/1" to="ROV Inspection" />
              <ServiceLink href="/Services/2" to="Air diving" />
              <ServiceLink
                href="/Services/3"
                to="Subsea survey and Positioning"
              />
              <ServiceLink href="/Services/4" to="Hull Cleaning" />
              <ServiceLink
                href="/Services/5"
                to="3rd party IMCA ROV and Diving System audits"
              />
              <ServiceLink
                href="/Services/6"
                to="Electrical Instrumentation"
              />
              <ServiceLink
                href="/equipments"
                to="Procurement and equipment rental"
              />
            </div>
            <div className="services-overlay fixed inset-0 bg-black/50 z-[60] transition-opacity duration-200 ease-out" />
          </div>
        )}

        <style jsx>{`
          .services-dropdown {
            animation: dropdownSlideIn 0.2s ease-out forwards;
          }

          .services-overlay {
            animation: overlayFadeIn 0.2s ease-out forwards;
          }

          @keyframes dropdownSlideIn {
            from {
              opacity: 0;
              transform: translateY(calc(100% - 10px));
            }
            to {
              opacity: 1;
              transform: translateY(100%);
            }
          }

          @keyframes overlayFadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}</style>
        <div
          className="w-full max-w-[1040px] [backdrop-filter:blur(320px)] bg-foundation-primary-blue-primary-blue-50 rounded-full shadow border border-white 
       bg-white/50 overflow-hidden flex  items-center justify-between py-3 px-4 pl-6  box-border text-center text-base text-foundation-grey-grey-500 h-max"
        >
          <Link href="/" className="flex items-center ">
            <Image
              src="/logo 6.svg"
              alt="Bluetide Group - Marine Services and Offshore Solutions"
              width={112}
              height={18}
              className="w-28 h-[1.125rem]"
            />
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link
              href="/about"
              className={twMerge(
                'hover:text-[#FF8533] no-underline',
                pathname === '/about' ? 'text-[#FF8533]' : ''
              )}
            >
              About us
            </Link>
            <div
              onClick={() => setAreServicesOpen((prev) => !prev)}
              className={twMerge(
                'hover:text-[#FF8533] relative no-underline cursor-pointer',
                pathname.startsWith('/Services') ? ' text-[#FF8533]' : ''
              )}
            >
              Our services
            </div>
            <Link
              href="/stories"
              className={twMerge(
                'hover:text-[#FF8533] no-underline',
                pathname === '/stories' ? ' text-[#FF8533]' : ''
              )}
            >
              Stories
            </Link>
            <Link
              href="/gallery"
              className={twMerge(
                'hover:text-[#FF8533] no-underline',
                pathname === '/gallery' ? ' text-[#FF8533]' : ''
              )}
            >
              Gallery
            </Link>
          </div>
          <button
            className="header-cta-button w-max cursor-pointer no-underline self-stretch rounded-full md:flex bg-[#FF6700] items-center justify-center py-4 px-6 hidden text-base text-linen transition-transform duration-200 ease-out hover:scale-105 active:scale-95"
            onClick={() => {
              window.scrollTo({
                top: 9999999,
                behavior: 'smooth',
              });
            }}
          >
            Let&apos;s talk
          </button>
          <button onClick={toggleMenu} className="md:hidden">
            {!isMenuOpen ? (
              <FiMenu className="w-6 h-6" />
            ) : (
              <FiX className="w-6 h-6 " />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
