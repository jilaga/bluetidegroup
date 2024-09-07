'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`p-4  top-0 left-0 fixed flex flex-col items-center h-max jutify-between lg:hidden w-full z-[10000] ${isMenuOpen ? 'bg-foundation-primary-blue-primary-blue-50 h-full' : ''}`}
    >
      <div
        className={`flex w-full justify-between items-center  p-5   ${!isMenuOpen ? '[backdrop-filter:blur(320px)] rounded-full shadow border border-white' : ''}`}
      >
        <Image
          src="/logo 6.svg"
          alt="Logo"
          width={112}
          height={18}
          className="w-28 h-[1.125rem]"
        />
        <button onClick={toggleMenu}>
          {!isMenuOpen ? (
            <FiMenu className="w-6 h-6" />
          ) : (
            <FiX className="w-6 h-6 " />
          )}
        </button>
      </div>
      {isMenuOpen && (
        <div className=" md:h-auto h-full   w-full flex flex-col justify-between">
          <div className="flex flex-col items-center justify-center gap-6 py-10 h-full md:h-auto text-[2rem] text-foundation-grey-grey-500 font-body-2">
            <Link
              href="/about"
              className="rounded-81xl text-foundation-grey-grey-500   no-underline"
              onClick={toggleMenu}
            >
              About us
            </Link>
            <Link
              href="/services"
              className="rounded-81xl text-black  no-underline"
              onClick={toggleMenu}
            >
              Our services
            </Link>
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
              className=" no-underline rounded-81xl px-6 py-4  my-4 bg-foundation-rust-accent-rust-accent-500 flex items-center justify-center text-base text-linen"
            >
              {`Let's talk`}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
