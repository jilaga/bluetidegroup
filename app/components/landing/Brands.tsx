"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

const Brands: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const containers = scrollContainerRef.current?.children;
    if (containers) {
      Array.from(containers).forEach((container: Element) => {
        const firstChild = container.children[0] as HTMLElement;
        const containerWidth =
          firstChild.clientWidth * container.children.length +
          parseFloat(getComputedStyle(container as HTMLElement).gap) *
            (container.children.length - 1);

        (container as HTMLElement).style.setProperty("--container-width", `${containerWidth}px`);
      });
    }
  }, []);

  const items = [
    "/brands/Allison.png",
    "/brands/CESL.png",
    "/brands/Coat.png",
    "/brands/desicon.png",
    "/brands/Exon.png",
    "/brands/Hydrodive.png",
    "/brands/Kreuz.png",
    "/brands/petrostuff.png",
    "/brands/TElogo.png",
  ];

  const scrollRows = [
    { reverse: false, duration: "30s" },
    { reverse: true, duration: "50s" },
    { reverse: false, duration: "70s" },
  ];

  return (
    <section className="w-full py-20">
      <div className="scroll-rows-container overflow-hidden" ref={scrollContainerRef}>
        {scrollRows.map((row, index) => (
          <div
            key={index}
            className={`scroll-container ${row.reverse ? "reverse" : ""}`}
            style={{
              "--spacing": "32px",
              "--scroll-duration": row.duration,
              "--container-width": "auto",
              "--height": "148px",
            } as React.CSSProperties}
          >
            {items.concat(items).map((src, idx) => (
              <div key={`${index}-${idx}`} className="scroll-item py-4">
                <Image 
                  src={src} 
                  alt={`Brand ${idx + 1}`} 
                  width={400} 
                  height={148} 
                  objectFit="contain"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brands;