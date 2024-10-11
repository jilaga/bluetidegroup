import React, { ComponentPropsWithoutRef } from 'react';
import Image from 'next/image';
import * as motion from 'framer-motion/client';

const Brands: React.FC = () => {
  const items = [
    '/brands/Allison.png',
    '/brands/CESL.png',
    '/brands/desicon.png',
    '/brands/Exon.png',
    '/brands/geodetic.png',
    '/brands/Hydrodive.png',
    '/brands/James.png',
    '/brands/Kreuz.png',
    '/brands/NPA.png',
    '/brands/petrostuff.png',
    '/brands/TElogo.png',
  ];

  return (
    <div className="w-full overflow-hidden">
      <div className="flex items-center w-full mb-4 sm:mb-8">
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
          className="flex shrink-0 items-center"
        >
          {items.slice(0, 4).map((src) => (
            <ScrollItem key={src} src={src} className="shrink-0 ml-4 sm:ml-8" />
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
          className="flex shrink-0 items-center"
        >
          {items.slice(0, 4).map((src) => (
            <ScrollItem
              key={src + 1}
              src={src}
              className="shrink-0 ml-4 sm:ml-8"
            />
          ))}
        </motion.div>
      </div>
      <div className="flex items-center w-full -translate-x-[928px] md:-translate-x-[1728px]">
        <motion.div
          initial={{ x: '0' }}
          animate={{ x: '100%' }}
          transition={{
            repeat: Infinity,
            type: 'tween',
            duration: 20,
            repeatType: 'loop',
            ease: 'linear',
          }}
          className="flex shrink-0 items-center"
        >
          {items.slice(4, 8).map((src) => (
            <ScrollItem key={src} src={src} className="shrink-0 ml-4 sm:ml-8" />
          ))}
        </motion.div>
        <motion.div
          initial={{ x: '0' }}
          animate={{ x: '100%' }}
          transition={{
            repeat: Infinity,
            type: 'tween',
            duration: 20,
            repeatType: 'loop',
            ease: 'linear',
          }}
          className="flex shrink-0 items-center"
        >
          {items.slice(4, 8).map((src) => (
            <ScrollItem
              key={src + 1}
              src={src}
              className="shrink-0 ml-4 sm:ml-8"
            />
          ))}
        </motion.div>
      </div>
      <div className="flex items-center w-full mt-4 sm:mt-8">
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
          className="flex shrink-0 items-center"
        >
          {items.slice(8, 12).map((src) => (
            <ScrollItem key={src} src={src} className="shrink-0 ml-4 sm:ml-8" />
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
          className="flex shrink-0 items-center"
        >
          {items.slice(8, 12).map((src) => (
            <ScrollItem
              key={src + 1}
              src={src}
              className="shrink-0 ml-4 sm:ml-8 "
            />
          ))}
        </motion.div>
      </div>
    </div>
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
        loading="eager"
        className="max-w-[200px] md:max-w-[400px] w-full"
      />
    </div>
  );
};

export default Brands;
