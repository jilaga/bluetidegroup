import React, { useState, useEffect, useRef, ReactNode } from 'react';
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
  PanInfo,
} from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

interface ResponsiveScrollSwipeProps {
  children: ReactNode;
  threshold?: number;
  delay?: number;
  duration?: number;
  className?: string;
}

const ResponsiveScrollSwipe: React.FC<ResponsiveScrollSwipeProps> = ({
  children,
  threshold = 0.3,
  delay = 0.5,
  duration = 0.5,
  className = '',
}) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const x = useMotionValue(0);
  const rotate = useTransform(x, [-100, 100], [-10, 10]);
  const opacity = useTransform(x, [-100, -50, 0, 50, 100], [0, 1, 1, 1, 0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
            controls.start({ opacity: 1, y: 0 });
          }, delay * 1000);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls, delay, threshold]);

  const handleDragEnd = (_: never, info: PanInfo) => {
    if (info.offset.x < -100) {
      controls.start({ x: -200, opacity: 0 });
    } else if (info.offset.x > 100) {
      controls.start({ x: 200, opacity: 0 });
    } else {
      controls.start({ x: 0, opacity: 1 });
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration }}
      style={{
        x: isMobile ? x : 0,
        rotate: isMobile ? rotate : 0,
        opacity: isMobile ? opacity : 1,
      }}
      drag={isMobile ? 'x' : false}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      className={`w-full ${isMobile ? 'mb-4' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default ResponsiveScrollSwipe;
