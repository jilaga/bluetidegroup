import type { NextPage } from 'next';
import Image from 'next/image';
import { HiOutlineArrowUpCircle } from 'react-icons/hi2';

const Footer: NextPage = () => {
  return (
    <footer className=" mx-auto w-full relative bg-[#E6F1FD] overflow-hidden flex flex-col items-start justify-end py-[2rem] sm:py-[7.5rem] px-[1rem] sm:px-[5rem] box-border text-left text-[1rem] text-foundation-grey-grey-700">
      <div className=" w-full flex flex-col sm:flex-row items-start justify-between gap-[2.5rem]">
        <div className="overflow-hidden flex flex-col items-start justify-start gap-[1rem] sm:gap-[1.5rem]">
          <div className="relative text-[1.5rem] leading-[150%] font-semibold">
            Call
          </div>
          <div className="flex flex-col gap-[0.5rem] sm:gap-[0.8rem]">
            <div className="relative leading-[150%] inline-block">
              (NG) +234 906 376 6251
            </div>
            <div className="relative leading-[150%]">(UK) +44 738 0341 592</div>
          </div>
        </div>
        <div className="overflow-hidden flex flex-col items-start justify-start gap-[1rem] sm:gap-[1.5rem]">
          <div className="relative text-[1.5rem] leading-[150%] font-semibold">
            PH OFFICE
          </div>
          <div className="w-[11.313rem] relative leading-[150%] inline-block">
            <p className="m-0">14 Ohaeto street, D/Line,</p>
            <p className="m-0">Port Harcourt.</p>
            <p className="m-0">Rivers State.</p>
            <p className="m-0">Nigeria</p>
          </div>
          <div className="w-[11.313rem] relative leading-[150%] font-medium hidden">
            (NG)+2349063766251
          </div>
        </div>
        <div className="overflow-hidden flex flex-col items-start justify-start gap-[1rem] sm:gap-[1.5rem] ">
          <div className="relative text-[1.5rem] leading-[150%] font-semibold">
            LAGOS OFFICE
          </div>
          <div className="relative text-[1rem] leading-[150%]">
            <p className="m-0">{`Plot 9 Flat5 Oba Elegusi Rd, `}</p>
            <p className="m-0">{`Ikoyi. `}</p>
            <p className="m-0">{`Lagos State. `}</p>
            <p className="m-0">Nigeria.</p>
          </div>
        </div>
        <div className="overflow-hidden flex flex-col items-start justify-start gap-[1rem] sm:gap-[1.5rem]">
          <div className="relative text-[1.5rem] leading-[150%] font-semibold">
            UK OFFICE
          </div>
          <div className=" relative leading-[150%] ">
            <p className="m-0">{`Unit F Winston Business Park. `}</p>
            <p className="m-0">Churchill Way Sheffield, </p>
            <p className="m-0">{`United Kingdom, `}</p>
            <p className="m-0">S35 2PS</p>
          </div>
          <div className="w-[14rem] relative leading-[150%] font-medium hidden">
            (UK)+447380341592 
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[2.25rem] text-[5rem] sm:text-[18.599rem] text-darkslategray">
        <Image
          src="/bluetide-footer.svg"
          alt="bluetide"
          width={1280}
          height={206}
          className="w-full mt-8 mb-4"
        />
        <div className=" border-foundation-white-white-900 border-t-[1px] border-solid flex flex-col-reverse sm:flex-row items-center justify-between w-full gap-5 pt-[3rem] sm:pt-[2rem] px-[2rem] text-[1rem] text-foundation-grey-grey-500 font-body-2">
          <div className="sm:w-1/3 flex flex-row items-center justify-start gap-[0.5rem] ">
            <HiOutlineArrowUpCircle
              className="size-4 sm:size-6"
              style={{ strokeWidth: 0.5 }}
            />
            <div className="w-full leading-[140%] ">Back to top</div>
          </div>
          <div className=" sm:w-1/3 leading-[140%] items-center justify-center flex ">
            copyright © Bluetidegroup 2024.
          </div>
          <div className="sm:w-1/3 flex sm:justify-end items-center space-x-4">
            <Image
              src="/socials/facebook.svg"
              width={32}
              height={32}
              alt="social Logo"
            />
            <Image
              src="/socials/instagram.svg"
              width={32}
              height={32}
              alt="social Logo"
            />
            <Image
              src="/socials/twitter.svg"
              width={32}
              height={32}
              alt="social Logo"
            />
            <Image
              src="/socials/linkedin.svg"
              width={32}
              height={32}
              alt="social Logo"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
