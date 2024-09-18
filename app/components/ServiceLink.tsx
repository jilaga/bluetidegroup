import { HiMiniArrowUpRight } from 'react-icons/hi2';
import Link from 'next/link';

const ServiceLink = function ({ to, href }: { to: string; href: string }) {
  return (
    <Link
      href={href}
      className="grid items-center grid-cols-[1fr_auto] grid-rows-[1fr] bg-white gap-2 p-6 rounded-2xl text-[#1E1E1E] font-clash font-medium w-[313px] justify-between"
    >
      <p className="row-start-1 col-start-1 col-end-2 break-words whitespace-normal text-lg">
        {to}
      </p>
      <div className="w-[35px] h-[35px] row-start-1 col-start-2 col-end-3 rounded-full border border-[#1E1E1E] grid place-content-center">
        <HiMiniArrowUpRight className="text-[#1E1E1E] text-2xl" />
      </div>
    </Link>
  );
};

export default ServiceLink;
