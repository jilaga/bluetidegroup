import ScrollFade from '@/utils/SlideFade';
import React from 'react';

export default function HeroSec() {
  return (
    <section className="w-full h-screen flex justify-center items-center">
      <ScrollFade
        threshold={0.1}
        duration={0.2}
        delay={0.2}
        className="w-full relative flex sm:flex-row flex-col items-start justify-center pt-[16rem] px-[1.5rem] sm:px-[5rem] pb-[3rem] sm:pb-[5rem] box-border gap-[2.5rem] sm:gap-[7.75rem] text-left  text-foundation-grey-grey-100 font-h1-semibold "
      >
        <div className="w-full sm:w-[14rem] relative tracking-[0.03em] leading-[140%] uppercase font-medium ">
          <p className="mt-5 sm:text-[1.25rem] text-[0.875rem] text-nowrap">
            Subsea Equipment Rental
          </p>
        </div>
        <div className="w-full  flex flex-col items-start justify-start gap-[2.5rem] text-[2rem] sm:text-[4.5rem] text-foundation-grey-grey-400 font-satoshi">
          <b className="self-stretch relative leading-[140%] font-semibold font-h1-semibold whitespace-pre-wrap">
            We provide rental services for a wide array of specialized subsea
            equipment, including:
          </b>
        </div>
      </ScrollFade>
    </section>
  );
}
