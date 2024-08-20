"use client"

import { useState } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar: NextPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <section className='w-full  flex justify-center items-center p-4 top-0 fixed z-50 '>
      <nav className="w-full max-w-[70rem] [backdrop-filter:blur(320px)] rounded-full shadow border-2 border-white 
       bg-white/50 overflow-hidden flex flex-row items-center justify-between py-3 px-4 pl-6  box-border text-center text-xl text-foundation-grey-grey-500">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo 6.svg"
            alt="Logo"
            width={112}
            height={18}
            className="w-28 h-[1.125rem]"
          />
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/about" className="hover:text-foundation-rust-accent-rust-accent-500">About us</Link>
          <Link href="/services" className="hover:text-foundation-rust-accent-rust-accent-500">Our services</Link>
          <Link href="/stories" className="hover:text-foundation-rust-accent-rust-accent-500">Stories</Link>
          <Link href="/gallery" className="hover:text-foundation-rust-accent-rust-accent-500">Gallery</Link>
        </div>

		<Link href="/contact" className="self-stretch rounded-full md:flex bg-foundation-rust-accent-rust-accent-500 items-center justify-center py-4 px-6 hidden text-base  text-linen">
			{`Let's talk`}
		</Link>

        <button onClick={toggleMenu} className="md:hidden">
          <FiMenu className="w-6 h-6" />
        </button>
		
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-foundation-primary-blue-primary-blue-50 z-50 md:hidden">
          <div className="flex flex-col h-full px-[1.125rem] py-[2.25rem]">
            <div className="flex justify-between items-center mb-8">
              <Image
                src="/logo 6.svg"
                alt="Logo"
                width={112}
                height={18}
                className="w-28 h-[1.125rem]" 
              />
              <button onClick={toggleMenu}>
                <FiX className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-grow flex flex-col items-center justify-center space-y-6 text-[2rem] text-foundation-grey-grey-500 font-body-2">
              <Link href="/about" className="rounded-81xl py-4 px-8" onClick={toggleMenu}>About us</Link>
              <Link href="/services" className="rounded-81xl py-4 px-8" onClick={toggleMenu}>Our services</Link>
              <Link href="/stories" className="rounded-81xl py-4 px-8" onClick={toggleMenu}>Stories</Link>
              <Link href="/gallery" className="rounded-81xl py-4 px-8" onClick={toggleMenu}>Gallery</Link>
            </div>
            <Link href="/contact" className="self-stretch rounded-81xl bg-foundation-rust-accent-rust-accent-500 flex items-center justify-center py-4 px-6 text-base text-linen">
              {`Let's talk`}
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};

export default Navbar;