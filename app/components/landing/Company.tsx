import React from 'react';
import Image from 'next/image';
import { HiOutlineArrowRightCircle } from 'react-icons/hi2';
import CustomButton from '../Button';
import ScrollFade from '@/utils/SlideFade';
function Company() {
  return (
    <section className="w-full flex justify-center items-center py-20 px-4 sm:px-20 ">
      <ScrollFade className="w-full flex flex-col sm:flex-row gap-10 sm:gap-32 ">
        <div className="">
          <p className="w-40 text-nowrap text-[0.875rem] uppercase font-medium font-clash-display text-foundation-grey-grey-100 text-left ">
            Our Company
          </p>
        </div>
        <div className="w-full flex justify-center items-center gap-10 sm:gap-[7.75rem] ">
          <div className="w-full flex flex-col-reverse md:flex-row relative text-gray gap-10 sm:gap-[7.75rem] ">
            <div className="w-full max-w-[496px] flex flex-col gap-10 ">
              <ScrollFade className="text-[1.25rem] sm:text-[2rem] text-h4-semibold leading-[140%] font-semibold text-gray text-left inline-block">
                We excel in managing every aspect of our operations with
                precision and expertise, ensuring top-notch service delivery
                that meets and exceeds client expectations
              </ScrollFade>
              <p className="text-[1rem] sm:text-[1.25rem] leading-[140%] tracking-wider text-foundation-grey-grey-500">
                Our strength lie in our unparalleled multi-disciplinary
                approach, integrating both international and Nigerian
                professionals across the Marine, Construction, Oil and Gas, and
                Power sectors.
                <span className="flex pt-4">
                  {' '}
                  From skilled divers and technicians to senior engineers and
                  management, our diverse team is committed to innovation,
                  integrity, efficiency, and competence.
                </span>
              </p>
              <CustomButton
                bgColor=""
                borderColor="border-accent"
                textColor="text-accent"
                iconColor="text-accent"
                buttonText="Read more"
              />
            </div>
            <Image
              src="/Company.png"
              alt="Hero background"
              width={360}
              height={300}
              className="object-cover rounded-xl max-w-[380px] max-h-[310px]"
            />
          </div>
        </div>
      </ScrollFade>
    </section>
  );
}

export default Company;