import Image from 'next/image';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi2';
import { twMerge } from 'tailwind-merge';

export interface ArticleCardProps {
  title: string;
  tags: string[];
  readDuration: string;
  preview: string;
  previewImg: string;
  id: number;
}

const ArticleCard = function ({
  title,
  tags,
  readDuration,
  preview,
  previewImg,
  id,
}: ArticleCardProps) {
  return (
    <div className="my-4 border-b border-b-[#B2B2B2] pb-8 md:pb-16 mt-16 max-w-[385px] min-[720px]:max-w-[unset] mx-auto">
      <a
        href={`/stories/${id}`}
        className="mx-auto"
      >
        <Image
          width={327}
          height={280}
          src={previewImg}
          alt={`${title} - Marine services and offshore operations story`}
          className="w-full min-[720px]:aspect-[872/522] min-[720px]:object-cover min-[720px]:rounded-lg"
        />
        <div className="flex flex-wrap items-center gap-3 mt-5 md:mt-10">
          {tags
            .sort((a, b) => b.length - a.length)
            .map((tag, idx, arr) => {
              const backgroundColor = getRandomHexColor();

              return (
                <p
                  key={tag}
                  className={twMerge(
                    'px-6 py-2 rounded-[100vh] w-max text-[#151515] font-medium text-sm',
                    idx === 0 ? 'mr-auto md:mr-0' : '',
                    idx !== 0 ? 'hidden md:block' : '',
                    idx === arr.length - 1 ? '!mr-auto' : ''
                  )}
                  style={{
                    backgroundColor,
                  }}
                >
                  {tag}
                </p>
              );
            })}
          <p className="text-[#686868] uppercase">{readDuration} read</p>
        </div>
        <p className="text-xl md:text-4xl font-bold mt-5 md:mt-10">{title}</p>
        <div className="hidden md:block">
          <p className="whitespace-pre-line text-[#1E1E1E] mt-4">{preview}</p>
          <Link
            href={`/stories/${id}`}
            className="text-[#FF9954] border-[#FF9954] border outline-none flex items-center gap-3 px-5 py-3 rounded-[100vh] mt-4 cursor-pointer w-max"
          >
            Read more
            <HiArrowRight className="w-6 h-6 text-[#FF9954]" />
          </Link>
        </div>
      </a>
    </div>
  );
};

export function getRandomHexColor() {
  // Generate a random number between 0 and 16777215 (decimal equivalent of #FFFFFF)
  let randomNum = Math.round(Math.random() * 2) + 1;

  const hexColor =
    randomNum === 1 ? '#E6F1FD' : randomNum === 2 ? '#FFF0E6' : '#E8EAF9';

  return hexColor;
}

export default ArticleCard;
