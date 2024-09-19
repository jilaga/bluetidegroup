'use client';

import Image from 'next/image';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

import ArticleCard from './articleCard';
import * as articles from './articles.json';

const tags = [...new Set([...articles.map((article) => article.tags).flat()])];
const tagStart = Math.round(Math.random() * (tags.length - 4));

function Page() {
  const [selectedTags, setSelectedTags] = useState(['all']);
  const [articleLimit, setArticleLimit] = useState(4);

  const filteredArticles = articles.filter((article) => {
    if (selectedTags[0] === 'all') return true;
    return selectedTags.some((tag) => article.tags.includes(tag));
  });

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
                    if (prev.length === 1) return ['all'];
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
              onInput={(e) => {
                const input = (e.target as HTMLInputElement).value
                  .toLowerCase()
                  .trim();
                let value: string[] = [];
                if (input === '') {
                  value = ['all'];
                } else {
                  value = tags.filter((tag) =>
                    tag.toLowerCase().trim().includes(input)
                  );
                }
                setSelectedTags(value);
              }}
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
          {filteredArticles.slice(0, articleLimit).map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={filteredArticles.length <= articleLimit}
            onClick={() => setArticleLimit((prev) => prev + 4)}
            className="bg-[#FF9954] disabled:bg-[#d3d3d3] disabled:cursor-not-allowed block capitalize mx-auto mt-4 text-white border-none outline-none px-12 py-4 rounded-full"
          >
            read more
          </motion.button>
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
