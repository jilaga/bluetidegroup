import ScrollFade from '@/utils/SlideFade';
import React from 'react';
import Smallie from '../../Smallie';

export default function HeroSec() {
  return (
    <section className="w-full flex justify-center items-center">
      <ScrollFade
        threshold={0.1}
        duration={0.2}
        delay={0.2}
        className="w-full relative flex sm:flex-row flex-col items-start 
          pt-[20rem] px-[1.5rem] md:px-[2.5rem] lg:px-[5rem] pb-[2.5rem]
          gap-[2rem] md:gap-[2.55rem] lg:gap-[7.5rem] text-left text-foundation-grey-grey-100 font-clash"
      >
        <div className=" relative tracking-[0.03em] leading-[140%] uppercase font-medium ">
          <Smallie
            text="Procurement and equipment rental"
            className="mt-5 max-w-[232px]"
          />
        </div>
        <ScrollFade
          threshold={0.1}
          duration={0.3}
          delay={0.4}
          className="w-full flex flex-col items-start justify-start gap-[2.5rem] text-foundation-grey-grey-400 font-satoshi"
        >
          <ScrollFade
            threshold={0.1}
            duration={0.3}
            delay={0.6}
            className="relative text-[1.5rem] md:text-[2rem] lg:text-[3.25rem] leading-[130%] lg:leading-[140%] font-semibold font-clash whitespace-pre-wrap"
          >
            We provide rental services for a wide array of specialized subsea
            equipment, including:
          </ScrollFade>
        </ScrollFade>
      </ScrollFade>
    </section>
  );
}
