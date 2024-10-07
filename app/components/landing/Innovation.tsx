'use client';

import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import Why from './Why';

export default function Innovation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['end start', 'start end'],
  });
  const x = useTransform(scrollYProgress, [0, 1], ['-150%', '0%']);

  return (
    <div className="grid w-full">
      <div className="sticky top-0 flex flex-col h-screen overflow-hidden mb-auto">
        <p className="text-[#FFB98A] text-xl md:text-2xl font-normal mt-auto text-center">
          To our clients and partners
        </p>
        <div className="w-full font-clash mb-auto flex py-4">
          <div className="text-center font-medium shrink-0 w-full mt-4 translate-x-full">
            <motion.p
              style={{ x }}
              className="text-nowrap w-max min-w-full px-4 text-[#FF6700] text-2xl md:text-4xl font-semibold"
            >
              we offer innovative technology and efficient services to
              consistently deliver exceptional excellence.
            </motion.p>
          </div>
        </div>
      </div>
      <div ref={containerRef} className="min-h-[200vh]" />
      <Why />
    </div>
  );
}
