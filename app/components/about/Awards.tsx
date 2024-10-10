import { div } from 'framer-motion/client';
import Smallie from '@/app/components/Smallie';

interface BrandProps {
  text: string;
}

const Brand: React.FC<BrandProps> = ({ text }) => {
  return (
    <div
      className="w-[400px] sm:w-[400px] h-[9.25rem] flex relative leading-[140%] uppercase font-medium  p-[1.5rem] justify-center items-center
      rounded-lg bg-foundation-white-white-500 hover:shadow hover:scale-110 transition-transform  border-foundation-grey-grey-50 border-[0.5px] border-solid box-border overflow-hidden
       text-center text-[0.875rem] text-foundation-grey-grey-500 font-caption-1"
    >
      {text}
    </div>
  );
};

const Brands: React.FC = () => {
  const items = [
    'IECEx (International Electrotechnical Commission)',
    'SOLAS (Safety of Life at Sea)',
    'ATEX (Atmospheres Explosible)',
    'IMO (International Maritime Organization)',
  ];

  return (
    <div
      className="w-full max-w-[1440px] items-center justify-center flex flex-col py-[7.5rem] 
       px-[1.5rem] md:px-[2.5rem] lg:px-[5rem] pb-[2.5rem] 
        gap-[2rem] md:gap-[2.5rem] overflow-hidden "
    >
      <Smallie
        text="Awards & certifications"
        className="w-full text-center flex justify-center"
      />
      <div className="  flex gap-4 w-full sm:gap-8 py-4   ">
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex w-full relative  "
            style={{
              animation: `scroll 50s linear infinite`,
              animationDelay: `${index * 100}ms`,
            }}
          >
            <Brand text={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
