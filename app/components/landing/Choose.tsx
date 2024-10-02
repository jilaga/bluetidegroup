'use client';

import * as motion from 'framer-motion/client';
import ScrollFade from '@/utils/SlideFade';
import { HiOutlineArrowRight } from 'react-icons/hi2';

export default function Choose() {
  return (
    <ScrollFade className="w-full relative overflow-hidden flex flex-col items-center justify-center py-20 sm:pt-60 px-6 sm:px-10 lg:px-20 box-border animate-fade-in-up max-w-[1440px] mx-auto">
      <div className="w-full flex flex-col items-start justify-start gap-8 ">
        <div className="relative flex flex-col gap-2 sm:gap-5 lg:gap-7 font-semibold text-left text-gray">
          <ScrollFade className="m-0 lg:w-[65.75rem] font-clash text-3xl sm:leading-[140%] sm:text-[3.2rem] lg:text-7xl">
            Let&apos;s support your operations with expert care and precision.
          </ScrollFade>
        </div>
        <ScrollFade>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-max"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-max cursor-pointer no-underline gap-3 flex items-center relative px-4 sm:px-4 py-3 sm:py-4 text-center border rounded-full  justify-center  text-[1.25rem] leading-[140%] font-medium font-montserrat  text-accent border-accent"
              onClick={() => {
                window.scrollTo({
                  top: 9999999,
                  behavior: 'smooth',
                });
              }}
            >
              Let&apos;s talk
              <HiOutlineArrowRight className="size-6 " />
            </motion.div>
          </motion.div>
        </ScrollFade>
      </div>
    </ScrollFade>
  );
}
