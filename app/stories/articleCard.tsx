import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi2';
import { twMerge } from 'tailwind-merge';

import { OptimizedImage } from '@/app/components/OptimizedImage';

export interface ArticleCardProps {
  title: string;
  tags: string[];
  readDuration: string;
  preview: string;
  previewImg: string;
  id: number;
  priority?: boolean;
}

const ArticleCard = function ({
  title,
  tags,
  readDuration,
  preview,
  previewImg,
  id,
  priority = false,
}: ArticleCardProps) {
  return (
    <div className="my-4 border-b border-b-[#B2B2B2] pb-8 md:pb-16 mt-16 max-w-[385px] min-[720px]:max-w-[unset] mx-auto">
      <Link
        href={`/stories/${id}`}
        className="mx-auto block"
      >
        <OptimizedImage
          width={872}
          height={522}
          src={previewImg}
          alt={`${title} - Marine services and offshore operations story`}
          className="w-full min-[720px]:aspect-[872/522] min-[720px]:object-cover min-[720px]:rounded-lg"
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 872px"
        />
        <div className="flex flex-wrap items-center gap-3 mt-5 md:mt-10">
          {tags
            .sort((a, b) => b.length - a.length)
            .map((tag, idx, arr) => {
              const backgroundColor = getColorForTag(tag);

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
          <span className="text-[#FF9954] border-[#FF9954] border outline-none flex items-center gap-3 px-5 py-3 rounded-[100vh] mt-4 cursor-pointer w-max">
            Read more
            <HiArrowRight className="w-6 h-6 text-[#FF9954]" />
          </span>
        </div>
      </Link>
    </div>
  );
};

// Deterministic color based on tag string hash
// This prevents color flashing on re-renders and ensures consistent colors
const TAG_COLORS = ['#E6F1FD', '#FFF0E6', '#E8EAF9'];

export function getColorForTag(tag: string): string {
  const hash = tag.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return TAG_COLORS[hash % TAG_COLORS.length];
}

// Keep for backwards compatibility but mark as deprecated
/** @deprecated Use getColorForTag instead for deterministic colors */
export function getRandomHexColor() {
  const randomNum = Math.round(Math.random() * 2) + 1;
  const hexColor =
    randomNum === 1 ? '#E6F1FD' : randomNum === 2 ? '#FFF0E6' : '#E8EAF9';
  return hexColor;
}

export default ArticleCard;
