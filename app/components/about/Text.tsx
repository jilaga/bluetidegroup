'use client';

import { useScroll, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export function Text() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });
  const length = text.filter((el) => el !== ' ').length;
  useEffect(
    () =>
      scrollYProgress.on('change', (latest) => {
        console.log(latest);
        setScrollProgress(Math.floor(latest * length));
      }),
    []
  );
  // console.log(scrollProgress, length);
  // const size = useTransform(() => `${scrollYProgress.get() * 100}%`);

  return (
    <section
      className=" w-full relative bg-foundation-rust-accent-rust-accent-50 flex flex-col items-start justify-start sm:py-[7.5rem] sm:px-[5rem] py-[2.5rem] px-[1.5rem] font-semibold font-clash"
      ref={containerRef}
    >
      <div className="w-full relative text-[2.25rem] sm:text-[4.5rem] font-semibold font-clash text-left text-orangered flex flex-wrap text-[#1C1C1C59]">
        {/* Our mission is to provide our clients with innovative subsea solutions,
        exceptional service, and unmatched support, ensuring their success in
        the offshore industry. We are committed to delivering excellence and
        ensuring that every operation meets the highest quality and safety
        standards. */}
        {texts
          .map((arr) =>
            arr.map((el) => {
              return (
                <motion.span
                  style={{
                    color: scrollProgress >= el.idx ? '#FF6700' : '#1C1C1C59',
                  }}
                  key={el.idx}
                >
                  {el.val}
                </motion.span>
              );
            })
          )
          .map((span, idx) => (
            <p key={idx} className="ml-5">
              {span}
            </p>
          ))}
      </div>
    </section>
  );
}

const text = [
  'O',
  'u',
  'r',
  ' ',
  'm',
  'i',
  's',
  's',
  'i',
  'o',
  'n',
  ' ',
  'i',
  's',
  ' ',
  't',
  'o',
  ' ',
  'p',
  'r',
  'o',
  'v',
  'i',
  'd',
  'e',
  ' ',
  'o',
  'u',
  'r',
  ' ',
  'c',
  'l',
  'i',
  'e',
  'n',
  't',
  's',
  ' ',
  'w',
  'i',
  't',
  'h',
  ' ',
  'i',
  'n',
  'n',
  'o',
  'v',
  'a',
  't',
  'i',
  'v',
  'e',
  ' ',
  's',
  'u',
  'b',
  's',
  'e',
  'a',
  ' ',
  's',
  'o',
  'l',
  'u',
  't',
  'i',
  'o',
  'n',
  's',
  ',',
  ' ',
  'e',
  'x',
  'c',
  'e',
  'p',
  't',
  'i',
  'o',
  'n',
  'a',
  'l',
  ' ',
  's',
  'e',
  'r',
  'v',
  'i',
  'c',
  'e',
  ',',
  ' ',
  'a',
  'n',
  'd',
  ' ',
  'u',
  'n',
  'm',
  'a',
  't',
  'c',
  'h',
  'e',
  'd',
  ' ',
  's',
  'u',
  'p',
  'p',
  'o',
  'r',
  't',
  ',',
  ' ',
  'e',
  'n',
  's',
  'u',
  'r',
  'i',
  'n',
  'g',
  ' ',
  't',
  'h',
  'e',
  'i',
  'r',
  ' ',
  's',
  'u',
  'c',
  'c',
  'e',
  's',
  's',
  ' ',
  'i',
  'n',
  ' ',
  't',
  'h',
  'e',
  ' ',
  'o',
  'f',
  'f',
  's',
  'h',
  'o',
  'r',
  'e',
  ' ',
  'i',
  'n',
  'd',
  'u',
  's',
  't',
  'r',
  'y',
  '.',
  ' ',
  'W',
  'e',
  ' ',
  'a',
  'r',
  'e',
  ' ',
  'c',
  'o',
  'm',
  'm',
  'i',
  't',
  't',
  'e',
  'd',
  ' ',
  't',
  'o',
  ' ',
  'd',
  'e',
  'l',
  'i',
  'v',
  'e',
  'r',
  'i',
  'n',
  'g',
  ' ',
  'e',
  'x',
  'c',
  'e',
  'l',
  'l',
  'e',
  'n',
  'c',
  'e',
  ' ',
  'a',
  'n',
  'd',
  ' ',
  'e',
  'n',
  's',
  'u',
  'r',
  'i',
  'n',
  'g',
  ' ',
  't',
  'h',
  'a',
  't',
  ' ',
  'e',
  'v',
  'e',
  'r',
  'y',
  ' ',
  'o',
  'p',
  'e',
  'r',
  'a',
  't',
  'i',
  'o',
  'n',
  ' ',
  'm',
  'e',
  'e',
  't',
  's',
  ' ',
  't',
  'h',
  'e',
  ' ',
  'h',
  'i',
  'g',
  'h',
  'e',
  's',
  't',
  ' ',
  'q',
  'u',
  'a',
  'l',
  'i',
  't',
  'y',
  ' ',
  'a',
  'n',
  'd',
  ' ',
  's',
  'a',
  'f',
  'e',
  't',
  'y',
  ' ',
  's',
  't',
  'a',
  'n',
  'd',
  'a',
  'r',
  'd',
  's',
  '.',
  ' ',
];
const texts = text.reduce(
  // @ts-ignore
  (acc, curr, idx, arr) => {
    if (curr !== ' ') return acc;
    let index = acc[1].findIndex((el) => el === ' ');

    if (index === -1) {
      index = idx;

      const precedingElements = arr.slice(0, index);
      const succeedingElements = arr.slice(index + 1);

      return [
        [
          ...acc[0],
          precedingElements.map((val, i, arr) => ({
            val,
            idx: idx - (arr.length - i) - acc[0].length,
          })),
        ],
        succeedingElements,
      ];
    }

    const precedingElements = acc[1].slice(0, index);
    const succeedingElements = acc[1].slice(index + 1);

    return [
      [
        ...acc[0],
        precedingElements.map((val, i, arr) => ({
          val,
          idx: idx - (arr.length - i) - acc[0].length,
        })),
      ],
      succeedingElements,
    ];
  },
  [[], []]
)[0] as unknown as { val: string; idx: number }[][];
