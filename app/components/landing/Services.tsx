'use client';
import React, { PropsWithoutRef, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HiArrowUpRight } from 'react-icons/hi2';
import Image from 'next/image';
import Link from 'next/link';
import ResponsiveScrollSwipe from '@/utils/ResponsiveScrollSwipe';
import { twMerge } from 'tailwind-merge';
import Smallie from '@/app/components/Smallie';

const ServiceCard: React.FC<{
  title: string;
  description: string;
  imageSrc?: string;
  delay: number;
  bgColor: string;
  href: string;
}> = ({ title, description, href, delay, bgColor }) => {
  return (
    <ResponsiveScrollSwipe className=" mb-0" delay={delay / 1000}>
      <Link href={href}>
        <motion.div
          className={twMerge(
            'rounded-2xl flex flex-col items-end justify-end w-full h-[25rem] lg:w-[600px] lg:h-[26.25rem] aspect-[600/420] p-6 lg:p-10 box-border gap-[0.5rem] bg-cover object-fit bg-[top] relative isolate overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl group cursor-pointer',
            `bg-[${bgColor}]`
          )}
        >
          <div className="relative flex justify-end z-10">
            <div className="relative cursor-pointer p-2 rounded-full z-10 border-black border group-hover:bg-[#FF6700] group-hover:border-none transition-[background-color]">
              <HiArrowUpRight className="size-6 sm:size-8 overflow-hidden shrink-0 fill-[#1E1E1E] group-hover:fill-white group-hover:rotate-45 transition-[transform,_fill]" />
            </div>
          </div>
          <div className="self-stretch flex-1 flex flex-col items-center justify-end gap-[1rem] relative z-10">
            <div className="self-stretch relative leading-[130%] font-semibold text-[1.5rem] font-clash md:text-[1.75rem] lg:text-[2.25rem] text-[#1E1E1E]">
              {title}
            </div>
            <div className="self-stretch relative md:text-[1.25rem] text-[1.5rem] leading-[140%] font-body-1 text-[#1E1E1E]">
              {description}
            </div>
          </div>
        </motion.div>
      </Link>
    </ResponsiveScrollSwipe>
  );
};

export default function OurServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['end end', 'start start'],
  });
  const size = useTransform(() => `${scrollYProgress.get() * 100}%`);
  const y = useTransform(() => `-${(1 - scrollYProgress.get()) * 40}%`);

  return (
    <div
      ref={containerRef}
      className="relative w-full mx-auto max-w-[1440px] flex top-4 flex-col justify-start items-center text-left text-[2.25rem] m-4 md:m-20 gap-4 md:gap-10"
    >
      <div className="sticky top-0 w-full h-[100vh] min-h-screen">
        <motion.div
          style={{ width: size, height: size, opacity: size, y }}
          className="absolute inset-0 mx-auto"
        >
          <div
            className="w-full h-full absolute"
            style={{
              backgroundColor: 'rgba(0, 112, 239, 0.56)',
            }}
          ></div>
          <Image
            src="/service/bg.webp"
            width={1440}
            height={1000}
            alt="Underwater marine operations and offshore services background"
            className="w-full h-full object-cover "
          />
        </motion.div>
      </div>
      <div className="w-full relative flex flex-col justify-center md:flex-row gap-[2rem] md:gap-12 min-[1320px]:gap-16 p-6 md:px-[40px] lg:px-[80px]">
        <div className="w-full sm:w-[300px] lg:w-full relative flex flex-col gap-[2rem] md:gap-12 min-[1320px]:gap-16 ">
          <ResponsiveScrollSwipe>
            <div
              className="self-stretch w-full h-[25rem]  lg:h-[26.25rem] rounded-2xl flex flex-col items-start justify-between  p-6 lg:p-10 box-border bg-cover relative
             bg-[#FF8533] hover:bg-orange-500 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
            >
              <Smallie
                text=" Our services"
                className=" text-foundation-rust-accent-rust-accent-100  "
              />
              <div className="w-full flex flex-col justify-end text-[1.5rem] lg:text-[2rem]">
                <p className=" w-full leading-[140%] text-foundation-rust-accent-rust-accent-50">
                  We are highly exclusive but not limited to Hydrographic
                  surveys, ROV/Diving services, offshore services, procurement
                  amongst others.
                </p>
              </div>
            </div>
          </ResponsiveScrollSwipe>
          <ServiceCard
            bgColor="#E6F1FD"
            title="Hull Cleaning"
            description="We provide expert hull cleaning services for vessels, ensuring optimal performance, efficiency, and environmental compliance."
            
            href="/Services/1"
            delay={100}
          />

          <ServiceCard
            bgColor="#FFF0E6"
            title="Equipment procurement and hire"
            description="We provide rental services for a wide array of specialized subsea equipment."
            href="/Services/2"
            delay={300}
          />
        </div>
        <div className="w-full sm:w-[300px] lg:w-full relative flex flex-col pt-[0] md:pt-[10rem] gap-[2rem] md:gap-12 min-[1320px]:gap-16 ">
          <ServiceCard
            bgColor="#E6F1FD"
            title="ROV Inspection"
            description="We provide specialized inspection and maintenance services for Remotely Operated Vehicles (ROVs)."
            href="/Services/3"
            delay={500}
          />

          <ServiceCard
            bgColor="#FFF0E6"
            title="Air diving"
            description="We offer comprehensive air diving services tailored to meet the unique needs of our clients."
            href="/Services/4"
            delay={700}
          />

          <ServiceCard
            bgColor="#E6F1FD"
            title="Subsea survey and Positioning"
            description="We specialize in delivering expert subsea positioning and survey solutions to empower our clients to achieve accurate and efficient underwater operations."
            href="/Services/5"
            delay={900}
          />
        </div>
      </div>
    </div>
  );
}
