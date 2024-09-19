'use client';

import Image from 'next/image';
import ArticleCard from './articleCard';
import * as articles from './articles.json';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

const tags = [...new Set([...articles.map((article) => article.tags).flat()])];
const tagStart = Math.round(Math.random() * (tags.length - 4));

function Page() {
  const [selectedTags, setSelectedTags] = useState(['all']);

  return (
    <div className="w-full p-4 pt-36 max-w-[1100px] mx-auto">
      <div className="text-start flex flex-wrap items-center justify-between gap-4">
        <p className="text-[#B9B9B9] uppercase">stories that touch</p>
        <div className="flex items-center flex-wrap gap-3 w-max text-sm">
          <p
            onClick={() => setSelectedTags(['all'])}
            className={twMerge(
              'px-6 py-2 rounded-[100vh] w-max cursor-pointer text-[#151515] font-medium',
              selectedTags.includes('all') ? 'bg-[#FFF0E6]' : 'bg-[#E6F1FD]'
            )}
          >
            all
          </p>
          {tags.slice(tagStart, tagStart + 4).map((tag) => (
            <p
              key={tag}
              onClick={() => {
                setSelectedTags((prev) => {
                  if (prev.includes(tag)) {
                    return prev.filter((selected) => selected !== tag);
                  }
                  return [
                    ...prev.filter((selected) => selected !== 'all'),
                    tag,
                  ];
                });
              }}
              className={twMerge(
                'px-6 py-2 rounded-[100vh] cursor-pointer w-max text-[#151515] font-medium',
                selectedTags.includes(tag) ? 'bg-[#FFF0E6]' : 'bg-[#E6F1FD]'
              )}
            >
              {tag}
            </p>
          ))}
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
              className="pr-5 py-5 outline-none border-b bg-[#FAFAFA] border-[#686868] w-full"
            />
            <div className="w-11 h-11 grid place-items-center bg-[#FF6700] rounded-full absolute inset-[50%_1em_auto_auto] translate-y-[-50%]">
              <Image
                width={18}
                height={18}
                src="stories/search.svg"
                alt="search"
              />
            </div>
          </label>
          {articles
            .filter((article) => {
              if (selectedTags[0] === 'all') return true;
              return selectedTags.every((tag) => article.tags.includes(tag));
            })
            .map((article) => (
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

export default Page;
