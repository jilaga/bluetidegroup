'use client';
import { ReactNode, useRef } from 'react';
import { motion, HTMLMotionProps, useInView } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

const ImageReveal = function ({
  children,
  className,
  ...props
}: { className?: string; children: ReactNode } & HTMLMotionProps<'div'>) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.8 });
  return (
    <motion.div
      ref={ref}
      layout
      initial={{ scale: 0.8, opacity: 0, borderRadius: '0px' }}
      animate={{
        scale: isInView ? 1 : 0.8,
        opacity: isInView ? 1 : 0,
        borderRadius: isInView ? '16px' : '0px',
      }}
      transition={{ duration: 0.6 }}
      className={twMerge('origin-center overflow-hidden', className)}
      {...props}
    >
      <motion.div
        initial={{ scale: 1.3 }}
        animate={{ scale: isInView ? 1 : 1.3 }}
        transition={{ duration: 0.6 }}
        className="origin-center"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default ImageReveal;
