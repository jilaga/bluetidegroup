import React, { useRef, CSSProperties } from 'react';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  MotionProps,
} from 'framer-motion';
import Image from 'next/image';

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

interface TiltImageProps extends Omit<MotionProps, 'style'> {
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
}

const TiltImage: React.FC<TiltImageProps> = ({
  src,
  alt,
  className = '',
  style = {},
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        transform,
        ...style,
      }}
      className={`relative overflow-hidden rounded-xl  ${className}`}
      {...props}
    >
      <Image
        src={src}
        alt={alt}
        width={400}
        height={400}
        className="w-full h-full object-cover"
        style={{
          transform: 'translateZ(75px)',
          transformStyle: 'preserve-3d',
        }}
      />
    </motion.div>
  );
};

export default TiltImage;
