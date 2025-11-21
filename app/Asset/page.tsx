'use client';
import React from 'react';
import TiltImage from '../components/Assets/TiltCard';
import ScrollFade from '@/utils/SlideFade';

export default function Asset() {
  return (
    <ScrollFade
      threshold={0}
      className="h-screen w-[800px] flex  flex-col justify-center items-center my-96 border shadow "
    >
      <TiltImage
        src="/partners/partners.webp"
        alt="Description of the image"
        className="w-full "
        // You can now also pass any valid motion.div prop
        animate={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
      />
    </ScrollFade>
  );
}
