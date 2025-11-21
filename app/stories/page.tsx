'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';
import Link from 'next/link';

import ArticleCard from './articleCard';
import articles from './articles.json';
import { estimateReadingTime } from '@/utils/articleReadTime';

const tags = [
  ...new Set([...articles.map((article) => article.tags).flat()]),
].reverse();

const displayedTags = [
  'Underwater hull cleaning',
  'Oil and gas',
  'ROV',
  'Marine operations',
];

const genRandNum = function () {
  return Math.floor(Math.random() * (articles.length - 1));
};
const relatedStories = [genRandNum(), genRandNum(), genRandNum()];

function Page() {
  const [selectedTags, setSelectedTags] = useState(['all']);
  const [articleLimit, setArticleLimit] = useState(4);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = articles
    .filter((article) => {
      if (selectedTags[0] === 'all') return true;
      if (searchQuery.trim() === '')
        return selectedTags.some((tag) => article.tags.includes(tag));
      return (
        selectedTags.some((tag) => article.tags.includes(tag)) ||
        article.title.toLowerCase().includes(searchQuery.trim().toLowerCase())
      );
    })
    .reverse();

  useEffect(() => {
    const input = searchQuery.toLowerCase().trim();
    let value: string[] = [];
    if (input === '') {
      value = ['all'];
    } else {
      value = tags.filter((tag) => tag.toLowerCase().trim().includes(input));
    }
    setSelectedTags(value);
  }, [searchQuery]);

  return (
    <div className="w-full p-4 pt-60 max-w-[1200px] mx-auto">
      <div className=" min-[720px]:grid min-[720px]:mt-16 grid-cols-[max-content_1fr] grid-rows-[auto_auto] gap-6 min-[1000px]:gap-16">
        <p className="text-[#B9B9B9] uppercase col-start-1 col-end-2 row-start-1">
          stories that touch
        </p>
        <div className="flex flex-wrap items-center gap-3 mt-4 mb-8 min-[720px]:mt-0 min-[720px]:mb-0 col-start-2 col-end-3 row-start-1">
          <p
            onClick={() => setSelectedTags(['all'])}
            className={twMerge(
              'px-6 py-2 rounded-[100vh] w-max cursor-pointer text-[#151515] text-sm font-medium',
              selectedTags.includes('all') ? 'bg-[#FFF0E6]' : 'bg-[#E6F1FD]'
            )}
          >
            all
          </p>
          {displayedTags.map((tag) => (
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
                'px-6 py-2 rounded-[100vh] text-sm cursor-pointer w-max text-[#151515] font-medium',
                selectedTags.includes(tag) ? 'bg-[#FFF0E6]' : 'bg-[#E6F1FD]'
              )}
            >
              {tag}
            </p>
          ))}
        </div>
        <div className="col-start-2 col-end-3 row-start-2">
          <label
            htmlFor="search"
            className="block mt-4 relative min-[720px]:mt-0"
          >
            <input
              type="text"
              name="search"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery((e.target as HTMLInputElement).value);
              }}
              placeholder="Discover a topic..."
              className="pr-5 py-5 outline-none border-b bg-[#FAFAFA] border-[#686868] w-full"
            />
            <div className="w-11 h-11 grid place-items-center bg-[#FF6700] rounded-full absolute inset-[50%_1em_auto_auto] translate-y-[-50%]">
              <Image
                width={18}
                height={18}
                src="/stories/search.svg"
                alt="Search stories icon"
              />
            </div>
          </label>
          {filteredArticles.slice(0, articleLimit).map((article) => (
            <ArticleCard
              key={article.id}
              {...article}
              readDuration={`${estimateReadingTime(article.content.split(' ').length)} mins`}
            />
          ))}
        </div>
        <div className="w-fit hidden md:block max-w-[250px] min-[900px]:max-w-[300px] col-start-1 col-end-2 row-start-2">
          <p className="uppercase font-semibold text-lg mb-2">
            related stories:
          </p>
          {relatedStories.map((num) => (
            <Link
              key={num}
              className="block text-[#0070EF] mt-4"
              href={`stories/${num}`}
            >
              {articles[num].title}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex w-full justify-center items-center ">
        <motion.button
          disabled={filteredArticles.length <= articleLimit}
          onClick={() => setArticleLimit((prev) => prev + 4)}
          className="bg-[#FF9954] relative isolate w-16 h-16 grid place-content-center text-3xl disabled:bg-[#d3d3d3] group disabled:cursor-not-allowed capitalize mx-auto mt-20 mb-8 text-white border-none outline-none p-4 rounded-full"
        >
          +
          <motion.span
            className="absolute inset-0 group-disabled:!opacity-0 group-disabled:!transform-none bg-inherit rounded-full -z-10"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: [0, 0.6, 0], scale: 2 }}
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              duration: 4,
              times: [0, 0.1, 1],
            }}
          />
          <motion.span
            className="absolute inset-0 group-disabled:!opacity-0 group-disabled:!transform-none bg-inherit rounded-full -z-10"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: [0, 0.6, 0], scale: 2 }}
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              delay: 1,
              duration: 4,
              times: [0, 0.1, 1],
            }}
          />
          <motion.span
            className="absolute inset-0 group-disabled:!opacity-0 group-disabled:!transform-none bg-inherit rounded-full -z-10"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: [0, 0.6, 0], scale: 2 }}
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              delay: 2,
              duration: 4,
              times: [0, 0.1, 1],
            }}
          />
          {/* <motion.span
              className="absolute inset-0 group-disabled:!opacity-0 group-disabled:!transform-none bg-inherit rounded-full -z-10"
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: [0, 0.6, 0], scale: 2 }}
              transition={{
                repeat: Infinity,
                repeatType: 'loop',
                delay: 3,
                duration: 4,
                times: [0, 0.1, 1],
              }}
            /> */}
        </motion.button>
      </div>
    </div>
  );
}

export default Page;
