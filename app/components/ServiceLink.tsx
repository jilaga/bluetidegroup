import { HiMiniArrowUpRight } from 'react-icons/hi2';
import Link from 'next/link';

const ServiceLink = function ({ to, href }: { to: string; href: string }) {
  return (
    <Link
      href={href}
      className="flex text-start items-center bg-white gap-2 p-4 rounded-2xl text-foundation-grey-grey-400  w-[300px] justify-between group  hover:scale-105 hover:text-accent transition-[transform]"
    >
      <p className="text-[1rem] break-words leading-[140%] capitalize font-medium font-montserrat whitespace-pre-wrap text-left ">
        {to}
      </p>
      <div className="w-[35px] h-[35px] rounded-full border  flex justify-center items-center">
        <HiMiniArrowUpRight className=" text-2xl group-hover:rotate-45 transition-[transform]" />
      </div>
    </Link>
  );
};

export default ServiceLink;
