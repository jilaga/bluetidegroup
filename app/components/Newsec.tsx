'use client';

import Image from 'next/image';
import React from 'react';
import { Button } from 'antd';
import { HiOutlineArrowDownCircle } from 'react-icons/hi2';
import HeroImg from './../../public/hero.png';
import ScrollFade from '@/utils/SlideFade.jsx';

export default function Newsec() {
  return (
    <section className="w-full relative h-[100dvh] flex flex-col items-center justify-center px-[1rem] md:px-[3rem] sm:px-[5rem] pb-[20dvh] sm:pb-[5rem]">
      <div className="absolute inset-[0_auto_auto_0] w-full h-full -z-[1]">
        <Image
          src={HeroImg}
          alt="Hero background"
          width={1280}
          height={960}
          object-fit="cover"
          className="h-screen w-full z-1 "
        />
      </div>
      <div className="w-full h-full flex flex-col max-w-[1100px] pt-8">
        <ScrollFade
          threshold={0.2}
          duration={0.7}
          delay={0.1}
          className="flex flex-col w-full h-full justify-end gap-10 "
        >
          <h1 className="flex items-end w-full max-w-[344px] sm:max-w-[855px] text-[2.5rem] sm:text-[4.5rem] leading-[140%] font-semibold font-h1-semibold text-foundation-rust-accent-rust-accent-50">
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
    </section>
  );
}
