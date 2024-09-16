'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
// import { Button } from 'antd';
import { HiOutlineArrowDownCircle } from 'react-icons/hi2';
// import HeroImg from './../../public/hero.png';
// import ScrollFade from '@/utils/SlideFade.jsx';

export default function Newsec() {
  return (
    <section className=" h-[100dvh] w-full p-4 grid relative isolate pb-[5rem]">
      <div className="absolute inset-0 bg-[#0050AA] -z-[1]">
        <Image
          src="/hero.png"
          alt="Hero background"
          className="h-full w-full object-cover opacity-[63%]"
          width={1280}
          height={960}
        />
      </div>
      <div className="mt-auto max-w-[394px] mx-auto sm:max-w-[unset] sm:mx-0  md:mx-auto w-full">
        <motion.p
          initial={{ y: '25px', opacity: 0 }}
          whileInView={{ y: '0px', opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="font-clash font-semibold sm:mx-[40px] text-4xl sm:text-[3rem] sm:max-w-[555px] md:max-w-[615px] md:text-[3.5rem] leading-[1.4] tracking-wide text-white"
        >
          Expertise You Can Trust, Excellence You Can See.
        </motion.p>
        <motion.div
          initial={{ y: '25px', opacity: 0 }}
          whileInView={{ y: '0px', opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-white font-bold mt-6 sm:max-w-[315px] ml-auto">
            Delivering superior solutions for{' '}
            <span className="text-[#FF8533]">
              Underwater Hull Cleaning, Diving
            </span>{' '}
            and <span className="text-[#FF8533]">ROV Services</span>.
            <button className="gap-2 hidden sm:flex flex-row items-center justify-center box-border text-left text-[1rem] text-linen mt-4">
              Explore more
              <HiOutlineArrowDownCircle className="w-6 h-6" />
            </button>
          </p>
          <button className="bg-[#FF6700] border-none outline-none cursor-pointer text-white px-5 py-4 w-full rounded-full mt-4 sm:hidden">
            Let&apos;s talk
          </button>
        </motion.div>
      </div>
    </section>
  );
}
