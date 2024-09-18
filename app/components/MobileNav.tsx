'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';
import ServiceLink from './ServiceLink';

export default function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`p-4 md:max-w-[684px] mx-auto h-screen overflow-auto inset-[0_0_auto_0] fixed flex flex-col items-center lg:hidden w-full z-[10000] ${isMenuOpen ? 'bg-foundation-primary-blue-primary-blue-50 h-full' : ''}`}
    >
      <div
        className={`flex w-full justify-between items-center py-4 px-5 ${!isMenuOpen ? '[backdrop-filter:blur(320px)] rounded-full shadow border border-white' : ''}`}
      >
        <Link href="/">
          <Image
            src="/logo 6.svg"
            alt="Logo"
            width={112}
            height={18}
            className="w-20 md:w-28 h-[1.125rem]"
          />
        </Link>
        <button onClick={toggleMenu}>
          {!isMenuOpen ? (
            <FiMenu className="w-6 h-6" />
          ) : (
            <FiX className="w-6 h-6 " />
          )}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:h-auto h-full w-full py-10 flex flex-col justify-between">
          <div className="flex sticky top-0 flex-col items-center justify-center gap-6 md:h-auto text-[2rem] text-foundation-grey-grey-500 font-body-2">
            <Link
              href="/about"
              className="rounded-81xl text-foundation-grey-grey-500   no-underline"
              onClick={toggleMenu}
            >
              About us
            </Link>
            <div
              onClick={() => setIsServiceMenuOpen((prev) => !prev)}
              className="rounded-81xl text-black text-center no-underline"
            >
              Our services
              <motion.div
                layout
                className="text-start grid gap-4 origin-top"
                initial={{ height: 0, opacity: 1, marginTop: 0 }}
                animate={{
                  height: isServiceMenuOpen ? 'auto' : 0,
                  opacity: isServiceMenuOpen ? 1 : 0,
                  marginTop: isServiceMenuOpen ? '1em' : 0,
                }}
              >
                <ServiceLink to="Hull Cleaning" />
                <ServiceLink to="Remotely Operated Vehicle (ROV)" />
                <ServiceLink to="Procurement and equipment rental" />
                <ServiceLink to="Offshore support" />
                <ServiceLink to="Offshore support" />
              </motion.div>
            </div>
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
          <div className="">
            <Link
              href="/contact"
              className="no-underline rounded-81xl px-6 py-4 my-4 bg-foundation-rust-accent-rust-accent-500 block text-base text-linen"
            >
              Let&apos;s talk
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
