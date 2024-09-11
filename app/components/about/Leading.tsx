import React from 'react';
import Image from 'next/image';
import ScrollFade from '@/utils/SlideFade';

export default function Leading() {
  return (
    <ScrollFade
      threshold={0.1}
      duration={0.2}
      delay={0.2}
      className="w-full relative flex flex-col items-center justify-start px-4 sm:px-20 pb-20 pt-[3rem] sm:py-30 text-left font-body-1"
    >
      <div className="w-full max-w-7xl">
        <Image
          src="/about/about.png"
          alt="About image"
          width={1280}
          height={780}
          className="w-full rounded-xl sm:rounded-3xl object-cover h-[280px] sm:h-[780px]"
        />

        <ScrollFade
          threshold={0.1}
          duration={0.2}
          delay={0.2}
          className="mt-10 sm:mt-20 flex flex-col sm:flex-row items-start justify-between gap-10 sm:gap-40"
        >
          <h2 className="text-[1.25rem] sm:text-4xl body-2 font-semibold leading-tight sm:w-1/2 text-[#1E1E1E]">
            we are a leading subsea support company committed to providing
            unique top-tier solutions and equipment rentals for the offshore
            industry.
          </h2>

          <ScrollFade
            threshold={0.1}
            duration={0.2}
            delay={0.2}
            className="text-[1.25rem] sm:text-xl leading-relaxed text-[#1E1E1E] sm:w-1/2"
          >
            <p className="mb-4">
              With a strong foothold in Nigeria and a strategic focus on West
              Africa, supported by our UK office, we ensure fast response times
              and expert technical support to meet the needs of organizations
              across the region.
            </p>
            <p className="mb-4">
              Our dedication to quality and efficiency makes us the preferred
              partner for offshore operations. A 100% indigenous company with
              visionary insights, highly skilled experts, and partners with many
              years of practical experience and in-depth knowledge of our
              services.
            </p>
            <p>
              We have an array of multi-disciplinary professional personnel and
              partners both International and local and it is our prerogative to
              give you the utmost best.
            </p>
          </ScrollFade>
        </ScrollFade>
      </div>
    </ScrollFade>
  );
}
