import type { MarkdownInstance } from 'astro';

import type { IFrontMatterPost } from '@/types/IFrontMatterPost';
import { formatDate, getNameFromSlug, getTopicFromUrl } from '@/utils/helpers';

type IBlogCardProps = {
  instance: MarkdownInstance<IFrontMatterPost>;
  includeImage?: boolean;
};

const BlogCardMin = (props: IBlogCardProps) => (
  <div className="overflow-hidden rounded-md bg-cod-900 delay-150 duration-300 hover:scale-105">
    {!(props.includeImage === false) && (
      <div>
        <a href={props.instance.url}>
          <img
            className="object-cover object-center hover:opacity-50"
            src={props.instance.frontmatter.imgSrc}
            alt={props.instance.frontmatter.imgAlt}
            loading="lazy"
          />
        </a>
      </div>
    )}

    <div className="flex flex-col px-3 py-4">
      {/* Topic */}
      <div>
        <h2 className="text-sm font-semibold text-indigo-400 hover:text-slate-200">
          <a
            className="hover:translate-y-1"
            href={`/blog/topics/${getTopicFromUrl(props.instance.url!)}/`}
          >
            {getNameFromSlug(getTopicFromUrl(props.instance.url!)!)}
          </a>
        </h2>
      </div>

      {/* Title */}
      <div>
        <h2 className="text-xl font-semibold hover:text-purple-400">
          <a className="hover:translate-y-1" href={props.instance.url}>
            {props.instance.frontmatter.title}
          </a>
        </h2>
      </div>

      {/* Pub Date */}
      <div className="mt-1 text-xs text-gray-400">
        <span className="align-bottom">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-1 inline size-4 align-bottom"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            ></path>
          </svg>
          {formatDate(props.instance.frontmatter.pubDate)}
        </span>
      </div>
    </div>
  </div>
);

export { BlogCardMin };
