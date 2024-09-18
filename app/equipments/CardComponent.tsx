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
    <section className="w-full overflow-hidden flex flex-col items-start justify-center gap-0rem]">
      <div className="w-full h-full flex overflow-hidden">
        <motion.div
          style={{
            scale,
          }}
          ref={targetRef}
          className="relative overflow-hidden rounded-3xl flex"
        >
          <Image
            className="w-full md:w-[400px] h-full md:h-[400px] flex"
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
      <div className="w-full flex flex-col items-start justify-start py-[0rem] px-[1.5rem] gap-[1rem] md:w-[400px]">
        <b className="leading-[130%] w-full font-semibold h1-semibold text-[1.5rem] md:text-[2rem] h-[88px] sm:h-auto uppercase text-foundation-grey-grey-500 ">
          {title}
        </b>
        <p className="text-[1.25rem] md:block hidden w-full leading-[140%] font-body-1 text-foundation-grey-grey-500">
          {description}
        </p>
      </div>
    </section>
  );
};
