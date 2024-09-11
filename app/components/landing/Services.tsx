'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HiArrowUpRight } from 'react-icons/hi2';
import Image from 'next/image';
import ResponsiveScrollSwipe from '@/utils/ResponsiveScrollSwipe';

const ServiceCard: React.FC<{
  title: string;
  description: string;
  imageSrc: string;
  delay: number;
}> = ({ title, description, imageSrc, delay }) => {
  return (
    <ResponsiveScrollSwipe delay={delay / 1000}>
      <motion.div
        className=" w-full rounded-2xl h-[20rem] md:h-[650px] md:w-[600px] flex flex-col items-end justify-end p-4 md:pt-[2.5rem] sm:pb-[3rem] sm:pl-[3rem] sm:pr-[2.5rem] 
          box-border gap-[0.5rem] bg-cover object-fit bg-[top] relative overflow-hidden
          transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl "
        style={{ backgroundImage: `url(${imageSrc})` }}
      >
        <div className="relative flex justify-end z-10">
          <div className="relative cursor-pointer p-2 rounded-full z-10 bg-[#FF6700]">
            <HiArrowUpRight className="size-6 sm:size-8 overflow-hidden shrink-0 fill-white" />
          </div>
        </div>
        <div className="self-stretch flex-1 flex flex-col items-center justify-end gap-[1rem] relative z-10">
          <div className="self-stretch relative leading-[130%] font-semibold text-[1.5rem] sm:text-[2.25rem] text-foundation-rust-accent-rust-accent-50">
            {title}
          </div>
          <div className="self-stretch relative text-[1rem] sm:text-[1.25rem] leading-[140%] font-body-1 text-foundation-rust-accent-rust-accent-50">
            {description}
          </div>
        </div>
      </motion.div>
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

  return (
    <div
      ref={containerRef}
      className="relative flex top-4 flex-col justify-start items-center text-left text-[2.25rem] m-4 md:m-20 gap-4 md:gap-10 "
    >
      <div className="sticky top-0 w-full h-[100vh] min-h-screen">
        <motion.div
          style={{
            width: size,
            height: size,
            opacity: size,
          }}
          className="absolute inset-[50%_50%_auto_auto] translate-x-1/2 -translate-y-1/2"
        >
          <Image
            src="/service/bg.png"
            width={1440}
            height={1000}
            alt="service bg image"
            className="w-full h-full object-cover "
          />
        </motion.div>
      </div>
      <div className="w-full relative flex flex-col md:flex-row gap-[2rem] md:gap-[5rem] p-4  ">
        <div className="w-full relative flex flex-col gap-[2rem] md:gap-[5rem]">
          <ResponsiveScrollSwipe>
            <div
              className="self-stretch h-[20rem] md:h-[650px] min-w-[18rem] md:w-[600px] rounded-2xl flex flex-col items-start justify-start p-5 box-border gap-4 md:gap-6 bg-cover relative
             bg-[#FF8533] hover:bg-orange-500 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
            >
              <p className="text-[2rem] md:text-[2.5rem] md:mb-4 self-stretch relative leading-[130%] font-semibold md:font-normal text-foundation-rust-accent-rust-accent-50 font-clash">
                Our services
              </p>
              <div className="h-full flex flex-col justify-between text-[1.25rem] md:text-[1.5rem]">
                <p className="leading-[140%] text-foundation-rust-accent-rust-accent-50">
                  Our services are highly exclusive but not limited to
                  procurement, marine transportation, logistics and general
                  offshore/onshore support services in the industry.
                </p>
                <br />
                <p className="leading-[140%] text-foundation-rust-accent-rust-accent-50">
                  Our specialization places us in advantageous position to
                  render the following services.
                </p>
              </div>
            </div>
          </ResponsiveScrollSwipe>
          <ServiceCard
            title="Remotely Operated Vehicle (ROV)"
            description="High quality underwater repair and underwater maintenance of ship hulls"
            imageSrc="/service/serv1.png"
            delay={0}
          />

          <ServiceCard
            title="Electrical Installation"
            description="Expert electrical installation services for marine vessels"
            imageSrc="/service/serv3.png"
            delay={400}
          />
        </div>
        <div className="w-full relative flex flex-col pt-[0] md:pt-[10rem] gap-[2rem] md:gap-[5rem]">
          <ServiceCard
            title="Remotely Operated Vehicle (ROV)"
            description="High quality underwater repair and underwater maintenance of ship hulls"
            imageSrc="/service/serv1.png"
            delay={0}
          />
          <ServiceCard
            title="Hull Cleaning"
            description="Professional hull cleaning services to improve vessel performance"
            imageSrc="/service/serv1.png"
            delay={600}
          />
          <ServiceCard
            title="Equipment Procurement"
            description="Sourcing of high-quality marine equipment for various operations"
            imageSrc="/service/serv2.png"
            delay={800}
          />
        </div>
      </div>
    </div>
  );
}
