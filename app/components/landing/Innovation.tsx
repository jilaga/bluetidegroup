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
      <div className="sticky top-0 flex flex-col h-screen overflow-hidden">
        <p className="text-[#FFB98A] text-xl md:text-2xl font-normal mt-auto text-center">
          To our clients and partners
        </p>
        <motion.div className="flex w-full font-clash mb-auto" style={{ x }}>
          <div className="p-4 grid place-content-center text-center font-medium w-full shrink-0">
            <p className="text-[#FF6700] text-2xl md:text-4xl font-semibold">
              we offer COMPETENCE & INTEGRITY
            </p>
          </div>
          <div className="p-4 grid place-content-center text-center font-medium w-full shrink-0">
            <p className="text-[#FF6700] text-2xl md:text-4xl font-semibold">
              we offer INNOVATION and EFFICIENCY to deliver a superior level of
              excellence.
            </p>
          </div>
          <div className="p-4 grid place-content-center text-center font-medium w-full shrink-0">
            <p className="text-[#FF6700] text-2xl md:text-4xl font-semibold">
              we offer COMPETENCE & INTEGRITY
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
