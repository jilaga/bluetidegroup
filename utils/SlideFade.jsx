'use client';
import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ScrollFade = ({
  children,
  className = '',
  threshold = 0.3,
  delay = 0,
  duration = 0.5,
  initialOpacity = 0,
  finalOpacity = 1,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: threshold });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 20,
      }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollFade;
