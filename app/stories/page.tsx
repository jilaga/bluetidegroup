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
      <div className="min-[720px]:grid min-[720px]:mt-16 grid-cols-[max-content_1fr] grid-rows-[auto_auto] gap-6 min-[1000px]:gap-16">
        <p className="text-[#B9B9B9] uppercase col-start-1 col-end-2 row-start-1">
          stories that touch
        </p>
        <div className="flex flex-wrap items-center gap-3 mt-4 mb-8 min-[720px]:mt-0 min-[720px]:mb-0 col-start-2 col-end-3 row-start-1">
          <p
            onClick={() => setSelectedTags(['all'])}
            className={twMerge(
              'px-6 py-2 rounded-[100vh] w-max cursor-pointer text-[#151515] font-medium',
              selectedTags.includes('all') ? 'bg-[#FFF0E6]' : 'bg-[#E6F1FD]'
            )}
          >
            all
          </p>
          {tags.slice(0, 4).map((tag) => (
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
                src="stories/search.svg"
                alt="search"
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
        <div className="w-fit max-w-[250px] min-[900px]:max-w-[300px] col-start-1 col-end-2 row-start-2">
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
    </div>
  );
}

export default Page;
