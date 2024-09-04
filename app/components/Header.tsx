'use client';

import { useState } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import MobileNav from './MobileNav';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <MobileNav />
      <nav className="w-full hidden mx-auto lg:flex justify-center items-center p-4 top-0 fixed z-50  text-nowrap ">
        <div
          className="w-full max-w-[70rem] [backdrop-filter:blur(320px)] rounded-full shadow border border-white 
       bg-white/50 overflow-hidden flex flex-row items-center justify-between py-3 px-4 pl-6  box-border text-center text-xl text-foundation-grey-grey-500"
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
              className="hover:text-foundation-rust-accent-rust-accent-500  no-underline"
            >
              About us
            </Link>
            <Link
              href="/Services"
              className="hover:text-foundation-rust-accent-rust-accent-500 no-underline"
            >
              Our services
            </Link>
            <Link
              href="/stories"
              className="hover:text-foundation-rust-accent-rust-accent-500 no-underline"
            >
              Stories
            </Link>
            <Link
              href="/gallery"
              className="hover:text-foundation-rust-accent-rust-accent-500 no-underline"
            >
              Gallery
            </Link>
          </div>

          <Link
            href="/contact"
            className="no-underline self-stretch rounded-full md:flex bg-foundation-rust-accent-rust-accent-500 items-center justify-center py-4 px-6 hidden text-base  text-linen"
          >
            {`Let's talk`}
          </Link>

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
