import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

interface CardProps {
  imgUrl: string;
  title: string;
  description: string;
}

const IMG_PADDING = 12;

export const CardComponent: React.FC<CardProps> = ({
  imgUrl,
  title,
  description,
}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section className="w-full md:w-[320px] lg:w-[400px] overflow-hidden flex flex-col items-start justify-start h-[280px] sm:h-[600px] lg:h-[664px] pb-4">
      <div className=" w-full flex items-start justify-start overflow-hidden">
        <motion.div
          style={{
            scale,
          }}
          ref={targetRef}
          className="relative w-full  overflow-hidden sm:rounded-3xl rounded-xl flex"
        >
          <Image
            className="w-full  flex"
            src={imgUrl}
            width={600}
            height={600}
            alt={title}
          />
          <motion.div
            className="absolute inset-0 bg-neutral-950/70"
            style={{
              opacity,
            }}
          />
        </motion.div>
      </div>
      <div className="w-full flex flex-col items-center justify-center py-[0rem] md:px-[1.5rem] px-[0.5rem] gap-[1rem] ">
        <b className="leading-[130%] w-full  font-clash text-[1rem] md:text-[2rem] min:h-[88px] sm:h-auto text-darkslategray lg:text-[2.25rem] font-semibold font-h5-semibold text-left">
          {title}
        </b>
        <p className="text-[1.25rem] md:block hidden w-full leading-[140%] text-darkslategray">
          {description}
        </p>
      </div>
    </section>
  );
};
