import fs from 'fs/promises';
import path from 'path';
import Markdown from 'react-markdown';

import { ArticleCardProps, getRandomHexColor } from '../articleCard';
import './markdown.css';

export function generateStaticParams() {
  const articleCount = 15; //NOTE this should always be the same length as the articles array
  const ids = Array(articleCount).map((_, idx) => ({ id: `${idx + 1}` }));
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
}

async function page({ params }: { params: { id: string } }) {
  const url = path.join('./', 'app/stories/articles.json');
  const file = await fs.readFile(url, 'utf-8');
  const articles: (ArticleCardProps & { content: string })[] = JSON.parse(file);

  const article = articles.find((article) => `${article.id}` === params.id);

  if (!article) {
    return <div>Empty page</div>;
  }

  return (
    <div className="p-4 pt-36 max-w-[1100px] mx-auto">
      <header className="text-start flex flex-wrap items-center justify-between gap-4 mb-4">
        <p>stories that touch</p>
        <div className="flex flex-wrap items-center gap-3 mt-4">
          {article.tags
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
            {article.readDuration} read
          </p>
        </div>
      </header>
      <div className="min-[720px]:grid min-[720px]:mt-16 grid-cols-[max-content_1fr] grid-rows-[1fr] gap-6 min-[1000px]:gap-16">
        <div className="text-[#1E1E1E] col-start-2 col-end-3">
          <h1 className="text-[#B9B9B9] font-semibold text-2xl mb-4">
            {article.title}
          </h1>
          <Markdown className="markdown-wrapper">{article.content}</Markdown>
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
