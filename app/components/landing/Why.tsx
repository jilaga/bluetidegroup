"use client"
import React, { useEffect, useRef, useCallback } from 'react';
import { NextPage } from 'next';

const Why: NextPage = () => {
  const boxRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setBoxRef = useCallback((el: HTMLDivElement | null, index: number) => {
    boxRefs.current[index] = el;
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    boxRefs.current.forEach((box) => {
      if (box) observer.observe(box);
    });

    return () => observer.disconnect();
  }, []);

  const boxes = [
    { title: "Why us?", type: "title" },
    { quote: "They're a reliable partner, delivering exceptional results every time.", author: "John Doe", company: "CEO of Marine Ltd." },
    { stat: "08+", description: "years of experience" },
    { stat: "300+", description: "Projects completed" },
    { quote: "They're a reliable partner, delivering exceptional results every time.", author: "John Doe", company: "CEO of Marine Ltd." },
    { quote: "They're a reliable partner, delivering exceptional results every time.", author: "John Doe", company: "CEO of Marine Ltd." },
    { quote: "They're a reliable partner, delivering exceptional results every time.", author: "John Doe", company: "CEO of Marine Ltd." },
    { stat: "300+", description: "Equipment leased" },
    { quote: "They're a reliable partner, delivering exceptional results every time.", author: "John Doe", company: "CEO of Marine Ltd." },
  ];

  return (
    <div className="w-full relative py-12 px-4 sm:px-8 lg:px-20 box-border text-left text-base text-foundation-grey-grey-500 font-body-1">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {boxes.map((box, index) => (
          <div
            key={index}
            ref={(el) => setBoxRef(el, index)}
            className={`rounded-3xl overflow-hidden transition-all duration-300 ease-in-out opacity-0 transform translate-y-4 hover:shadow-lg ${
              box.title
                ? 'bg-foundation-rust-accent-rust-accent-500 text-foundation-rust-accent-rust-accent-50'
                : box.stat
                ? 'bg-foundation-rust-accent-rust-accent-50 text-foundation-rust-accent-rust-accent-500'
                : 'bg-foundation-rust-accent-rust-accent-100'
            }`}
          >
            <div className="p-6 h-full flex flex-col justify-between">
              {box.title && (
                <h2 className="text-4xl font-semibold leading-tight">{box.title}</h2>
              )}
              {box.quote && (
                <>
                  <p className="mb-4">{box.quote}</p>
                  <p className="text-sm font-medium tracking-wider uppercase">
                    {box.author}, <br />
                    {box.company}
                  </p>
                </>
              )}
              {box.stat && (
                <>
                  <p className="text-5xl font-semibold mb-2">{box.stat}</p>
                  <p className="text-lg uppercase text-foundation-grey-grey-500">
                    {box.description}
                  </p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Why;