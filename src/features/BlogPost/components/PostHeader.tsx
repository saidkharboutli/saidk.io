import type { ReactNode } from 'react';

import type { IFrontMatterPost } from '@/types/IFrontMatterPost';
import {
  formatDate,
  generateSlug,
  getNameFromSlug,
  getTopicFromUrl,
  tagDataFromString,
} from '@/utils/helpers';

type IPostHeaderProps = {
  content: IFrontMatterPost;
  path: string;
  author: string;
  views?: ReactNode;
};

const PostHeader = (props: IPostHeaderProps) => (
  <>
    <div className="flex flex-col items-center">
      {/* Topic */}
      <div>
        <h2 className="text-sm font-semibold text-indigo-400 hover:text-slate-200">
          <a
            className="hover:translate-y-1"
            href={`/blog/topics/${getTopicFromUrl(props.path)}/`}
          >
            {getNameFromSlug(getTopicFromUrl(props.path)!)}
          </a>
        </h2>
      </div>

      {/* Title */}
      <h1 className="text-center text-3xl font-bold">{props.content.title}</h1>

      {/* Series */}
      {props.content.series && (
        <span className="mt-1 text-sm">
          {props.content.isProject ? 'Project: ' : 'Series: '}
          <a
            href={`/blog/${props.content.isProject ? 'projects' : 'series'}/${generateSlug(props.content.series)}/`}
            className="font-bold text-cyan-500 hover:text-slate-200"
          >
            {props.content.series}
          </a>
        </span>
      )}

      {/* Upload Details */}
      <div
        className="mt-1 flex flex-row items-center"
        data-pagefind-ignore="all"
      >
        {/* Profile */}
        <img
          src="/images/site/profile.png"
          alt="My face (pixelated)"
          className="size-10 rounded-full"
        />

        {/* Details */}
        <div className="ml-4 text-left text-sm text-gray-400">
          By {props.author} on {formatDate(props.content.pubDate)}
          {props.content.updatedDate && <br></br>}
          {props.content.updatedDate && (
            <i>Updated {formatDate(props.content.updatedDate)}</i>
          )}
        </div>

        {/* Views */}
        <div
          className="ml-4 text-left text-sm text-gray-400"
          data-pagefind-ignore="all"
        >
          {props.views}
        </div>
      </div>

      {/* Tags */}
      <div className="mt-4 flex flex-row flex-wrap gap-1 text-xs">
        {props.content.tags &&
          tagDataFromString(props.content.tags).map((item) => (
            <a
              href={`/blog/tags/${item.slug}/`}
              className="rounded-md bg-cod-700 px-1.5 py-0.5 outline outline-1 outline-cod-400 transition-all duration-100 hover:bg-cod-600 hover:scale-105"
              key={item.slug}
            >
              {item.name}
            </a>
          ))}
      </div>
    </div>
  </>
);

export { PostHeader };
