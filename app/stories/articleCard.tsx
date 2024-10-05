import Image from 'next/image';
import Link from 'next/link';

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
    <div className="my-4 border-b border-b-[#B2B2B2] pb-6 mt-8 max-w-[385px] min-[720px]:max-w-[unset] mx-auto">
      <Image
        width={327}
        height={280}
        src={previewImg}
        alt="company"
        className="w-full min-[720px]:aspect-[872/522] min-[720px]:object-cover min-[720px]:rounded-lg"
      />
      <div className="flex flex-wrap items-center gap-3 mt-4">
        {tags
          .sort((a, b) => b.length - a.length)
          .map((tag) => {
            const backgroundColor = getRandomHexColor();

            return (
              <p
                key={tag}
                className="px-6 py-2 rounded-[100vh] w-max text-[#151515] font-medium text-sm"
                style={{
                  backgroundColor,
                }}
              >
                {tag}
              </p>
            );
          })}
        <p className="text-[#686868] uppercase grow text-end">
          {readDuration} read
        </p>
      </div>
      <p className="text-2xl font-semibold mt-4">{title}</p>
      <div>
        <p className="whitespace-pre-line text-[#1E1E1E] mt-4">{preview}</p>
        <Link
          href={`/stories/${id}`}
          className="text-[#FF9954] border-[#FF9954] border outline-none flex items-center gap-3 px-5 py-3 rounded-[100vh] mt-4 cursor-pointer w-max"
        >
          Read more
          <Image src="/stories/arrow.svg" alt="arrow" width={30} height={30} />
        </Link>
      </div>
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
