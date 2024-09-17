import Image from 'next/image';
import fs from 'fs/promises';
import path from 'path';
import ArticleCard, { ArticleCardProps } from './articleCard';

async function page() {
  const url = path.join('./', 'app/stories/articles.json');
  const file = await fs.readFile(url, 'utf-8');
  const articles: ArticleCardProps[] = JSON.parse(file);

  return (
    <div className="w-full p-4 pt-36 max-w-[1100px] mx-auto">
      <div className="text-start flex flex-wrap items-center justify-between gap-4">
        <p className="text-[#B9B9B9] uppercase">stories that touch</p>
        <div className="flex items-center flex-wrap gap-3 w-max">
          <p className="px-6 py-2 bg-[#FFF0E6] rounded-[100vh] w-max text-[#151515] font-medium">
            all
          </p>
          <p className="px-6 py-2 bg-[#E6F1FD] rounded-[100vh] w-max text-[#151515] font-medium">
            ROV
          </p>
          <p className="px-6 py-2 bg-[#E8EAF9] rounded-[100vh] w-max text-[#151515] font-medium">
            underwater hull cleaning
          </p>
          <p className="px-6 py-2 bg-[#E6F1FD] rounded-[100vh] w-max text-[#151515] font-medium">
            marine operations
          </p>
          <p className="px-6 py-2 bg-[#FFF0E6] rounded-[100vh] w-max text-[#151515] font-medium">
            oil and gas
          </p>
        </div>
      </div>
      <div className="min-[720px]:grid min-[720px]:mt-16 grid-cols-[max-content_1fr] grid-rows-[1fr] gap-6 min-[1000px]:gap-16">
        <div className="col-start-2 col-end-3">
          <label
            htmlFor="search"
            className="block mt-4 relative min-[720px]:mt-0"
          >
            <input
              type="text"
              name="search"
              placeholder="Discover a topic..."
              className="py-[12px] bg-[#FAFAFA] border-b border-b-[#686868] w-full"
            />
            <div className="w-8 h-8 grid place-items-center bg-[#FF6700] rounded-full absolute inset-[50%_1em_auto_auto] translate-y-[-50%]">
              <Image
                width={15}
                height={15}
                src="stories/search.svg"
                alt="search"
              />
            </div>
          </label>
          {articles.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
        <div className="w-fit max-w-[250px] min-[900px]:max-w-[300px] col-start-1 col-end-2 row-start-1">
          <p className="uppercase font-semibold text-lg mb-2">
            related stories:
          </p>
          <a className="block text-[#0070EF] mt-4" href="#">
            Comprehensive Guide to Underwater Inspection and Maintenance for
            Offshore Structures
          </a>
          <a className="block text-[#0070EF] mt-4" href="#">
            Advancements in Underwater Hull Cleaning Techniques
          </a>
          <a className="block text-[#0070EF] mt-4" href="#">
            Importance of ROV Services in Modern Marine Operations
          </a>
        </div>
      </div>
    </div>
  );
}

export default page;
