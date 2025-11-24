import Smallie from '@/app/components/Smallie';

interface BrandProps {
  text: string;
}

const Brand: React.FC<BrandProps> = ({ text }) => {
  return (
    <div
      className="w-full h-[9.25rem] flex relative leading-[140%] uppercase font-medium  p-[1.5rem] justify-center items-center
      rounded-lg bg-foundation-white-white-500 hover:shadow hover:scale-110 transition-transform  border-foundation-grey-grey-50 border-[0.5px] border-solid box-border overflow-hidden
       text-center text-xl text-foundation-grey-grey-500 font-caption-1"
    >
      {text}
    </div>
  );
};

const Brands: React.FC = () => {
  const items = [
    'ISO 45001:2018 Cerified',
    'ISO 9001:2015 Certified',
  ];

  return (
    <div
      className="w-full max-w-[1440px] items-start justify-center flex flex-col py-[7.5rem] 
       px-[1.5rem] md:px-[2.5rem] lg:px-[5rem] pb-[2.5rem] 
        gap-[2rem] md:gap-[2.5rem] overflow-hidden "
    >
      <Smallie
        text="Awards & certifications"
        className="w-full text-center flex justify-center"
      />
      <div className="  flex gap-2 w-full sm:gap-4 py-4   ">
        {items.map((item, index) => (
          <div
            key={item}
            className="flex w-full px-4 relative  "
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
