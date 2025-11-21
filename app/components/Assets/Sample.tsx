import React from 'react';
import TiltImage from './TiltCard';

export default function Sample() {
  return (
    <div>
      <TiltImage
        src="/brands/Kreuz.webp"
        alt="Description of the image"
        className="w-72 h-96"
        // You can now also pass any valid motion.div prop
        animate={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
}
