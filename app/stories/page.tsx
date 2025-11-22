'use client';

import { useState, useEffect, useMemo } from 'react';

import Link from 'next/link';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import { twMerge } from 'tailwind-merge';

import { estimateReadingTime } from '@/utils/articleReadTime';

import articles from './articles.json';
import ArticleCard from './articleCard';
import './pulse-animation.css';

const tags = [
  ...new Set([...articles.flatMap((article) => article.tags)]),
].reverse();

const displayedTags = [
  'Underwater hull cleaning',
  'Oil and gas',
  'ROV',
  'Marine operations',
];

// Deterministic "featured" stories based on article IDs (not random)
// This ensures consistent server/client rendering and better caching
const featuredStoryIds = [
  articles.length - 1, // Most recent
  articles.length - 2, // Second most recent
  articles.length - 3, // Third most recent
].filter((id) => id >= 0);

function Page() {
  const [selectedTags, setSelectedTags] = useState(['all']);
  const [articleLimit, setArticleLimit] = useState(4);
  const [searchQuery, setSearchQuery] = useState('');

  // Memoize normalized search query
  const normalizedQuery = useMemo(
    () => searchQuery.toLowerCase().trim(),
    [searchQuery]
  );

  // Memoize filtered articles to prevent recalculation on every render
  const filteredArticles = useMemo(() => {
    return articles
      .filter((article) => {
        if (selectedTags[0] === 'all') return true;
        if (normalizedQuery === '')
          return selectedTags.some((tag) => article.tags.includes(tag));
        return (
          selectedTags.some((tag) => article.tags.includes(tag)) ||
          article.title.toLowerCase().includes(normalizedQuery)
        );
      })
      .reverse();
  }, [selectedTags, normalizedQuery]);

  // Memoize matching tags for search
  const matchingTags = useMemo(() => {
    if (normalizedQuery === '') return ['all'];
    return tags.filter((tag) =>
      tag.toLowerCase().includes(normalizedQuery)
    );
  }, [normalizedQuery]);

  useEffect(() => {
    setSelectedTags(matchingTags);
  }, [matchingTags]);

  const isLoadMoreDisabled = filteredArticles.length <= articleLimit;

  return (
    <div className="w-full p-4 pt-60 max-w-[1200px] mx-auto">
      <div className=" min-[720px]:grid min-[720px]:mt-16 grid-cols-[max-content_1fr] grid-rows-[auto_auto] gap-6 min-[1000px]:gap-16">
        <p className="text-[#B9B9B9] uppercase col-start-1 col-end-2 row-start-1">
          stories that touch
        </p>
        <div className="flex flex-wrap items-center gap-3 mt-4 mb-8 min-[720px]:mt-0 min-[720px]:mb-0 col-start-2 col-end-3 row-start-1">
          <button
            type="button"
            onClick={() => setSelectedTags(['all'])}
            className={twMerge(
              'px-6 py-2 rounded-[100vh] w-max cursor-pointer text-[#151515] text-sm font-medium',
              selectedTags.includes('all') ? 'bg-[#FFF0E6]' : 'bg-[#E6F1FD]'
            )}
          >
            all
          </button>
          {displayedTags.map((tag) => (
            <button
              type="button"
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
            </button>
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
              <HiMagnifyingGlass className="w-5 h-5 text-white" />
            </div>
          </label>
          {filteredArticles.slice(0, articleLimit).map((article, index) => (
            <ArticleCard
              key={article.id}
              {...article}
              readDuration={`${estimateReadingTime(article.content.split(' ').length)} mins`}
              priority={index < 2}
            />
          ))}
        </div>
        <div className="w-fit hidden md:block max-w-[250px] min-[900px]:max-w-[300px] col-start-1 col-end-2 row-start-2">
          <p className="uppercase font-semibold text-lg mb-2">
            featured stories:
          </p>
          {featuredStoryIds.map((idx) => (
            <Link
              key={articles[idx].id}
              className="block text-[#0070EF] mt-4"
              href={`stories/${articles[idx].id}`}
            >
              {articles[idx].title}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex w-full justify-center items-center ">
        <button
          type="button"
          disabled={isLoadMoreDisabled}
          onClick={() => setArticleLimit((prev) => prev + 4)}
          className="bg-[#FF9954] relative isolate w-16 h-16 grid place-content-center text-3xl disabled:bg-[#d3d3d3] group disabled:cursor-not-allowed capitalize mx-auto mt-20 mb-8 text-white border-none outline-none p-4 rounded-full cursor-pointer"
        >
          +
          <span
            className="pulse-ring absolute inset-0 bg-[#FF9954] rounded-full -z-10 group-disabled:hidden"
            style={{ animationDelay: '0s' }}
          />
          <span
            className="pulse-ring absolute inset-0 bg-[#FF9954] rounded-full -z-10 group-disabled:hidden"
            style={{ animationDelay: '1.33s' }}
          />
          <span
            className="pulse-ring absolute inset-0 bg-[#FF9954] rounded-full -z-10 group-disabled:hidden"
            style={{ animationDelay: '2.66s' }}
          />
        </button>
      </div>
    </div>
  );
}

export default Page;
