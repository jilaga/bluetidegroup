'use client';

import Image from 'next/image';
import React from 'react';
import { Button } from 'antd';
import { HiOutlineArrowDownCircle } from 'react-icons/hi2';
import HeroImg from './../../public/hero.png';
import ScrollFade from '@/utils/SlideFade.jsx';

export default function Newsec() {
  return (
    <section className="h-[100dvh] w-full p-4 grid relative isolate pb-[5rem]">
      <div className="absolute inset-0 bg-[#0050AA] -z-[1]">
        <Image
          src="/hero.png"
          alt="Hero background"
          className="h-full w-full object-cover opacity-[63%]"
          width={1280}
          height={960}
        />
      </div>
      <div className="mt-auto max-w-[394px] mx-auto sm:max-w-[unset] sm:mx-0 md:px-[80px] md:mx-auto w-full">
        <p className="font-clash font-semibold text-4xl sm:text-[3rem] sm:max-w-[555px] md:max-w-[615px] md:text-[3.5rem] leading-[1.4] text-white">
          Expertise You Can Trust, Excellence You Can See.
        </p>
        <div>
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
        </div>
      </div>
    </section>
  );
}

{
  /* <section className="w-full grid grid-cols-[1fr] grid-rows-[1fr] relative h-[100dvh] px-[1rem] md:px-[3rem] sm:px-[5rem] pb-[20dvh] sm:pb-[5rem]">
      <div className="absolute inset-[0_0_0_0] -z-[1] bg-[#0050AA]">
        <Image
          src={HeroImg}
          alt="Hero background"
          width={1280}
          height={960}
          object-fit="cover"
          className="h-full w-full object-cover z-1 opacity-[63%]"
        />
      </div>
      <div className="max-w-[1100px] mt-auto row-start-1 col-start-1">
        <ScrollFade
          threshold={0.2}
          duration={0.7}
          delay={0.1}
          className="flex flex-col w-full h-full justify-end gap-10 "
        >
          <h1 className="flex items-end w-full max-w-[344px] sm:max-w-[855px] text-[2.5rem] sm:text-[4.5rem] leading-[140%] font-semibold font-clash text-foundation-rust-accent-rust-accent-50">
            Expertise You Can Trust, Excellence You Can See
          </h1>
          <div className="w-full flex justify-start sm:justify-end items-center pb-[40px] ">
            <div className="flex flex-col justify-center items-start sm:items-start w-[24rem] md:w-[400px] gap-4 ">
              <p className="w-[270px] pl-1 text-[1rem] leading-normal tracking-wide text-foundation-rust-accent-rust-accent-50 text-left font-semibold">
                Delivering superior solutions for
                <span className="text-[#ec9762]">
                  {' '}
                  Underwater Hull Cleaning, Diving
                </span>{' '}
                and
                <span className="text-[#ec9762]"> ROV Services.</span>
              </p>
              <button className="gap-2 hidden sm:flex flex-row items-center justify-center box-border text-left text-[1rem] text-linen ">
                Explore more
                <HiOutlineArrowDownCircle className="w-6 h-6" />
              </button>
              <Button
                href="#"
                size="large"
                className="w-full h-[4.5rem] rounded-[99px] sm:hidden bg-foundation-rust-accent-rust-accent-500 text-[20px] text-linen"
              >
                Let’s talk
              </Button>
            </div>
          </div>
        </ScrollFade>
      </div>
    </section> */
}
