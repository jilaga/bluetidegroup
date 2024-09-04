'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiArrowUpRight } from 'react-icons/hi2';
import Image from 'next/image';
import ResponsiveScrollSwipe from '@/utils/ResponsiveScrollSwipe';
import { useMediaQuery } from 'react-responsive';

const ServiceCard: React.FC<{
  title: string;
  description: string;
  imageSrc: string;
  delay: number;
}> = ({ title, description, imageSrc, delay }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <ResponsiveScrollSwipe delay={delay / 1000}>
      <motion.div
        className="rounded-2xl h-[20rem] sm:h-[40.625rem] flex flex-col items-end justify-end p-4 sm:pt-[2.5rem] sm:pb-[3rem] sm:pl-[3rem] sm:pr-[2.5rem] 
          box-border gap-[0.5rem] bg-cover object-fit bg-[top] relative overflow-hidden
           "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.5, delay: delay / 1000 }}
        style={{ backgroundImage: `url(${imageSrc})` }}
      >
        <div className="relative flex justify-end z-10">
          <div className="relative border p-2 rounded-full z-10 ">
            <HiArrowUpRight className="size-6 sm:size-8 overflow-hidden shrink-0" />
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
  return (
    <div className="relative flex top-4 flex-col justify-start items-center text-left text-[2.25rem] text-accent font-h5-semibold">
      <Image
        src="/service/bg.png"
        width={1440}
        height={1000}
        alt="service bg image"
        className="sticky top-0 w-full h-[100vh] min-h-screen object-cover bg-black"
      />
      <div className="w-full relative flex flex-col sm:flex-row gap-[2rem] sm:gap-[5rem] p-4 sm:p-[5rem] ">
        <div className="w-full relative flex flex-col  gap-[2rem] sm:gap-[5rem]">
          <ResponsiveScrollSwipe>
            <div
              className="self-stretch h-[20rem] sm:h-[40.625rem] rounded-2xl flex flex-col items-start justify-start p-5 sm:p-[4rem] box-border gap-4 sm:gap-6 bg-cover relative
             bg-foundation-rust-accent-rust-accent-500 hover:bg-orange-500 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
            >
              <b className="text-[2rem] sm:text-[3rem] self-stretch relative leading-[130%] font-semibold title-1-semibold text-foundation-rust-accent-rust-accent-50">
                Our services
              </b>
              <div className="h-full  flex flex-col justify-between">
                <p className=" text-[1.2rem] sm:text-[2rem] leading-[140%] text-normal text-foundation-rust-accent-rust-accent-50">
                  Our services are highly exclusive but not limited to
                  procurement, marine transportation, logistics and general
                  offshore/onshore support services in the industry.
                </p>
                <p className=" text-[1.2rem] sm:text-[2rem] leading-[140%] text-normal text-foundation-rust-accent-rust-accent-50">
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
        <div className="w-full relative flex flex-col pt-[0] sm:pt-[10rem] gap-[2rem] sm:gap-[5rem]">
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
