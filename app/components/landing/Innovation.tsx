'use client';

import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';

export default function Innovation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['end end', 'start start'],
  });
  const x = useTransform(() => `-${scrollYProgress.get() * 200}%`);

  return (
    <div ref={containerRef} className="grid w-full h-[300vh] ">
      <div className="sticky top-0 flex items-center h-screen overflow-hidden">
        <motion.div className="flex w-full font-clash" style={{ x }}>
          <div className="p-4 grid min-h-80 place-content-center text-center font-medium w-full shrink-0">
            <p className="text-[#FFB98A] text-xl md:text-2xl font-normal">
              To our clients and partners
            </p>
            <p className="text-[#FF6700] text-2xl md:text-4xl font-semibold">
              we offer COMPETENCE & INTEGRITY
            </p>
          </div>
          <div className="p-4 grid min-h-80 place-content-center text-center font-medium w-full shrink-0">
            <p className="text-[#FFB98A] text-xl md:text-2xl font-normal">
              To our clients and partners
            </p>
            <p className="text-[#FF6700] text-2xl md:text-4xl font-semibold">
              we offer COMPETENCE & INTEGRITY
            </p>
          </div>
          <div className="p-4 grid min-h-80 place-content-center text-center font-medium w-full shrink-0">
            <p className="text-[#FFB98A] text-xl md:text-2xl font-normal">
              To our clients and partners
            </p>
            <p className="text-[#FF6700] text-2xl md:text-4xl font-semibold">
              we offer COMPETENCE & INTEGRITY
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
