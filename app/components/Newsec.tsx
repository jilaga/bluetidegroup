'use client';

import { OptimizedImage } from './OptimizedImage';
import React from 'react';
import { HiOutlineArrowDownCircle } from 'react-icons/hi2';

export default function Newsec() {
  return (
    <section className=" h-[100dvh] w-full p-4 grid relative isolate pb-[5rem]">
      <div className="absolute inset-0 bg-[#0050AA] -z-[1]">
        <div
          className="w-full h-full absolute"
          style={{
            backgroundColor: 'rgba(0, 80, 170, 0.63)',
          }}
        ></div>
        <OptimizedImage
          src="/hero.JPG"
          alt="Bluetide Group marine services - professional diving and ROV operations"
          className="h-full w-full object-cover"
          priority={true}
          fill={true}
          sizes="100vw"
        />
      </div>
      <div className="mt-auto max-w-[394px] mx-auto sm:max-w-[unset] sm:mx-0  md:mx-auto w-full mb-10">
        <p className="hero-text-animate font-clash font-semibold sm:mx-[40px] text-4xl sm:text-[3rem] sm:max-w-[555px] md:max-w-[615px] md:text-[3.5rem] leading-[1.4] tracking-wide text-white">
          Expertise You Can Trust, Excellence You Can See.
        </p>
        <div className="hero-content-animate">
          <p className="text-white font-bold mt-6 sm:max-w-[315px] ml-auto">
            Delivering superior solutions for{' '}
            <span className="text-[#FF8533]">
              Underwater Hull Cleaning, Diving
            </span>{' '}
            and <span className="text-[#FF8533]">ROV Services</span>.
            <button className="gap-2 hidden sm:flex flex-row items-center justify-center box-border text-left text-[1rem] text-linen mt-4">
              Explore more
              <HiOutlineArrowDownCircle className="w-6 h-6" />
            </button>
          </p>
          <button
            className="hero-button bg-[#FF6700] border-none outline-none cursor-pointer text-white px-5 py-4 w-full rounded-full mt-4 sm:hidden flex justify-center items-center transition-transform duration-200 hover:scale-105 active:scale-95"
            onClick={() => {
              window.scrollTo({
                top: 9999999,
                behavior: 'smooth',
              });
            }}
          >
            Let&apos;s talk
          </button>
        </div>

        <style jsx>{`
          .hero-text-animate {
            animation: slideInUp 0.8s ease-out forwards;
            animation-delay: 0.2s;
            opacity: 0;
            transform: translateY(25px);
          }

          .hero-content-animate {
            animation: slideInUp 0.8s ease-out forwards;
            animation-delay: 0.4s;
            opacity: 0;
            transform: translateY(25px);
          }

          @keyframes slideInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .hero-button {
            will-change: transform;
          }
        `}</style>
      </div>
    </section>
  );
}
