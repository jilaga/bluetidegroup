import { HiMiniArrowUpRight } from 'react-icons/hi2';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

const ServiceLink = function ({
  to,
  href,
  toggleMenu,
}: {
  to: string;
  href: string;
  toggleMenu?: () => void;
}) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      onClick={toggleMenu}
      className={twMerge(
        'flex text-start items-center bg-white gap-2 p-4 rounded-2xl text-foundation-grey-grey-400  w-[300px] justify-between group  hover:scale-105 hover:text-accent transition-[transform]',
        pathname === href ? ' text-foundation-rust-accent-rust-accent-500' : ''
      )}
    >
      <p className="text-[1rem] break-words leading-[140%] capitalize font-medium font-montserrat whitespace-pre-wrap text-left ">
        {to}
      </p>
      <div className="rounded-full border  flex justify-center items-center">
        <HiMiniArrowUpRight className="text-2xl group-hover:rotate-45 transition-[transform] m-2 w-[24px] h-[24px] aspect-24/24" />
      </div>
    </Link>
  );
};

export default ServiceLink;
