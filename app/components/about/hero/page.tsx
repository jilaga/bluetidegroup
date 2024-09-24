import ScrollFade from '@/utils/SlideFade';
import React from 'react';

export default function HeroSec() {
  return (
    <section className="w-full flex justify-center items-center">
      <ScrollFade
        threshold={0.1}
        duration={0.2}
        delay={0.2}
        className="w-full relative flex sm:flex-row flex-col items-start justify-between 
          pt-[20rem] px-[1.5rem] md:px-[2.5rem] lg:px-[5rem] pb-[2.5rem]
          gap-[2rem] sm:gap-[2.55rem] lg:gap-[7.5rem] text-left text-foundation-grey-grey-100 font-clash"
      >
        <div className="pr-5 md:pr-8 lg:pr-8 relative tracking-[0.03em] leading-[140%] uppercase font-medium ">
          <p className="mt-2 lg:mt-5 text-[0.875rem] md:text-[1rem] lg:text-[1.5rem]  text-nowrap font-medium font-title-1-semibold">
            company history
          </p>
        </div>
        <ScrollFade className="w-full flex flex-col items-start justify-start gap-[2.5rem] text-foundation-grey-grey-400 font-satoshi">
          <b className="relative text-[2.25rem] lg:text-[4.5rem] leading-[130%] lg:leading-[140%] font-semibold font-clash whitespace-pre-wrap">
            We have successfully and skillfully managed all operations and
            services in line with the highest industry standards.
          </b>
        </ScrollFade>
      </ScrollFade>
    </section>
  );
}
