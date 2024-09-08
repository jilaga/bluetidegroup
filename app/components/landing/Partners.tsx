import React, { ComponentPropsWithoutRef } from 'react';
import Image from 'next/image';
import * as motion from 'framer-motion/client';

const Partners: React.FC = () => {
  const list = [
    '/partners/partners-1.png',
    '/partners/partners-2.png',
    '/partners/partners-3.png',
    '/partners/partners-4.png',
    '/partners/partners-5.png',
    '/partners/partners-6.png',
    '/partners/partners.png',
  ];

  return (
    <section className="mx-auto w-full flex flex-col gap-6 sm:gap-10 pb-10 sm:pb-20">
      <p className="text-[0.875rem] sm:text-[1rem] tracking-[0.03em] sm:tracking-[0.05em] leading-[140%] uppercase font-medium font-clash-display text-foundation-grey-grey-100 text-center">
        our partners trust us
      </p>
      <motion.div className="overflow-hidden flex items-center gap-4">
        <motion.div
          initial={{ x: '0' }}
          animate={{ x: '-100%' }}
          transition={{
            repeat: Infinity,
            type: 'tween',
            duration: 20,
            repeatType: 'loop',
            ease: 'linear',
          }}
          className="flex shrink-0 items-center gap-4"
        >
          {list.map((src) => (
            <ScrollItem key={src} src={src} className="shrink-0" />
          ))}
        </motion.div>
        <motion.div
          initial={{ x: '0' }}
          animate={{ x: '-100%' }}
          transition={{
            repeat: Infinity,
            type: 'tween',
            duration: 20,
            repeatType: 'loop',
            ease: 'linear',
          }}
          className="flex shrink-0 items-center gap-4"
        >
          {list.map((src) => (
            <ScrollItem key={src + 1} src={src} className="shrink-0" />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

const ScrollItem = function ({
  src,
  ...props
}: {
  src: string;
} & ComponentPropsWithoutRef<'div'>) {
  return (
    <div {...props}>
      <Image
        src={src}
        alt="Brand image"
        width={400}
        height={148}
        className="w-full"
      />
    </div>
  );
};

export default Partners;
