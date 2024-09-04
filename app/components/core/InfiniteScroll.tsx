// ./core/InfiniteScroll.tsx
import React, { useEffect, useRef } from 'react';

interface InfiniteScrollProps {
  items: React.ReactNode[];
  direction?: 'left' | 'right';
  speed?: number;
  gap?: number;
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  items,
  direction = 'left',
  speed = 50,
  gap = 20,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollContent = scrollContainer.firstChild as HTMLElement;
    const scrollWidth = scrollContent.offsetWidth;
    let scrollPos = 0;

    const scroll = () => {
      scrollPos += ((direction === 'left' ? 1 : -1) * speed) / 60;
      if (scrollPos > scrollWidth) scrollPos -= scrollWidth;
      if (scrollPos < 0) scrollPos += scrollWidth;
      scrollContainer.scrollLeft = scrollPos;
      requestAnimationFrame(scroll);
    };

    const animation = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animation);
  }, [direction, speed]);

  return (
    <div ref={scrollRef} className="overflow-hidden">
      <div className="inline-flex" style={{ gap: `${gap}px` }}>
        {items}
        {items}
      </div>
    </div>
  );
};

export default InfiniteScroll;
