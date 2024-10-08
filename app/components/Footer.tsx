'use client';
import ScrollFade from '@/utils/SlideFade';
import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import Image from 'next/image';
import { HiOutlineArrowUpCircle } from 'react-icons/hi2';

const Footer: NextPage = () => {
  return (
    <footer
      className=" mx-auto w-full relative bg-[#E6F1FD] overflow-hidden flex flex-col items-start justify-end
       py-[2rem] sm:py-[7.5rem] px-[1rem] sm:px-[2.5rem] lg:px-[5rem] box-border text-left sm:text-[0.625rem] text-[1rem] md:text-[1rem] text-foundation-grey-grey-700"
    >
      <div className="max-w-[1440px] mx-auto">
        <ScrollFade className=" w-full  sm:h-[18.125rem] min-h-[16rem] flex flex-col sm:flex-row items-start justify-end gap-[1.5rem]">
          <ScrollFade
            threshold={0.1}
            duration={0.3}
            delay={0.2}
            className="overflow-hidden flex flex-col items-start justify-start gap-[1rem] sm:gap-[1.5rem]"
          >
            <p className="relative font-clash text-[1rem] lg:text-[1.5rem] leading-[150%] font-semibold">
              Call
            </p>
            <div className="flex flex-col gap-[0.5rem] sm:gap-[0.8rem]">
              <div className="relative leading-[150%] i">
                (NG) +234 906 376 6251
              </div>
              <div className="relative leading-[150%]">
                (UK) +44 738 0341 592
              </div>
            </div>
          </ScrollFade>
          <ScrollFade
            threshold={0.1}
            duration={0.3}
            delay={0.4}
            className="overflow-hidden flex flex-col items-start justify-start gap-[1rem] sm:gap-[1.5rem]"
          >
            <p className="relative font-clash text-[1rem] lg:text-[1.5rem] leading-[150%] font-semibold">
              PH Office
            </p>
            <div className="w-[11.313rem] relative leading-[150%] inline-block">
              <p className="m-0">14 Ohaeto street, D/Line,</p>
              <p className="m-0">Port Harcourt.</p>
              <p className="m-0">Rivers State.</p>
              <p className="m-0">Nigeria</p>
            </div>
            <div className="w-[11.313rem] relative leading-[150%] font-medium hidden">
              (NG)+2349063766251
            </div>
          </ScrollFade>
          <ScrollFade
            threshold={0.1}
            duration={0.4}
            delay={0.6}
            className="overflow-hidden flex flex-col items-start justify-start gap-[1rem] sm:gap-[1.5rem] "
          >
            <p className="relative font-clash text-[1rem] lg:text-[1.5rem] leading-[150%] font-semibold">
              Lagos Office
            </p>
            <div className="relative text-[1rem] leading-[150%]">
              <p className="m-0">{`Plot 9 Flat5 Oba Elegusi Rd, `}</p>
              <p className="m-0">{`Ikoyi. `}</p>
              <p className="m-0">{`Lagos State. `}</p>
              <p className="m-0">Nigeria.</p>
            </div>
          </ScrollFade>
          <ScrollFade
            threshold={0.1}
            duration={0.5}
            delay={0.8}
            className="overflow-hidden flex flex-col items-start justify-start gap-[1rem] sm:gap-[1.5rem]"
          >
            <p className="relative font-clash text-[1rem] lg:text-[1.5rem] leading-[150%] font-semibold">
              UK Office
            </p>
            <div className=" relative leading-[150%] ">
              <p className="m-0">{`Unit F Winston Business Park. `}</p>
              <p className="m-0">Churchill Way Sheffield, </p>
              <p className="m-0">{`United Kingdom, `}</p>
              <p className="m-0">S35 2PS</p>
            </div>
            <div className="w-[14rem] relative leading-[150%] font-medium hidden">
              (UK)+447380341592
            </div>
          </ScrollFade>
        </ScrollFade>
        <ScrollFade
          threshold={0.1}
          duration={0.3}
          delay={0.4}
          className="flex flex-col items-start justify-start gap-[2.25rem] text-[5rem] sm:text-[18.599rem] text-darkslategray"
        >
          <Image
            src="/bluetide-footer.svg"
            alt="bluetide"
            width={1280}
            height={206}
            className="w-full mt-8 mb-4"
          />
          <ScrollFade
            threshold={0.1}
            duration={0.4}
            delay={0.6}
            className="border-foundation-white-white-900 border-t-[1px] border-solid flex flex-col-reverse
             sm:flex-row items-center justify-between w-full gap-5 pt-[3rem] sm:pt-[2rem] lg:px-[2rem]  
             text-nowrap text-[1rem] text-foundation-grey-grey-500 "
          >
            <ScrollFade
              threshold={0.1}
              duration={0.3}
              delay={0.5}
              className="sm:w-1/3 flex flex-row font items-center justify-start gap-[0.5rem] "
            >
              <HiOutlineArrowUpCircle
                className="size-4 sm:size-6"
                style={{ strokeWidth: 0.5 }}
              />
              <motion.p
                whileTap={{ scale: 0.95 }}
                className="w-full leading-[140%] cursor-pointer"
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  });
                }}
              >
                Back to top
              </motion.p>
            </ScrollFade>
            <ScrollFade className="sm:w-1/3 leading-[140%] items-center justify-center flex">
              copyright © Bluetidegroup 2024.
            </ScrollFade>
            <ScrollFade
              threshold={0.1}
              duration={0.4}
              delay={0.6}
              className="sm:w-1/3 flex sm:justify-end items-center opacity-40 space-x-4"
            >
              <a href="https://web.facebook.com/BlueTideIntegratedServicesLtd">
                <Image
                  src="/socials/facebook.svg"
                  width={32}
                  height={32}
                  alt="social Logo"
                />
              </a>
              <a href="https://www.instagram.com/bluetidegroup">
                <Image
                  src="/socials/instagram.svg"
                  width={32}
                  height={32}
                  alt="social Logo"
                />
              </a>
              <a
                href="https://x.com/bluetide_group"
                className="bg-[#FF6700] w-8 h-8 rounded-full grid"
              >
                <Image
                  className="m-auto"
                  src="/socials/x.svg"
                  width={18}
                  height={18}
                  alt="social Logo"
                />
              </a>
              <a href="https://www.linkedin.com/company/bluetide-integrated-services-ltd">
                <Image
                  src="/socials/linkedin.svg"
                  width={32}
                  height={32}
                  alt="social Logo"
                />
              </a>
            </ScrollFade>
          </ScrollFade>
        </ScrollFade>
      </div>
    </footer>
  );
};

export default Footer;
