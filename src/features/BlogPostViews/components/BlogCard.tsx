import type { MarkdownInstance } from 'astro';

import type { IFrontMatterPost } from '@/types/IFrontMatterPost';
import {
  formatDate,
  getNameFromSlug,
  getTopicFromUrl,
  tagDataFromString,
} from '@/utils/helpers';

type IBlogCardProps = {
  instance: MarkdownInstance<IFrontMatterPost>;
};

const BlogCard = (props: IBlogCardProps) => (
  <div className="overflow-hidden rounded-md bg-cod-900 delay-150 duration-300 hover:scale-105">
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
        <h2 className="text-xl font-semibold hover:text-primary">
          <a className="hover:translate-y-1" href={props.instance.url}>
            {props.instance.frontmatter.title}
          </a>
        </h2>
      </div>

      {/* Pub Date */}
      <div className="mt-1 text-xs text-gray-400">
        <span className="align-middle">
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

      {/* Updated Date (conditional) */}
      {props.instance.frontmatter.updatedDate && (
        <div className="mt-1 text-xs text-gray-400">
          <span className="align-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1 inline size-4 align-bottom"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon>
            </svg>
            Updated {formatDate(props.instance.frontmatter.updatedDate)}
          </span>
        </div>
      )}

      {/* Description */}
      <div className="mt-2 text-sm">
        {props.instance.frontmatter.description}
      </div>

      {/* Tags */}
      <div className="mt-4 flex flex-row flex-wrap gap-1 text-xs">
        {props.instance.frontmatter.tags &&
          tagDataFromString(props.instance.frontmatter.tags).map((item) => (
            <a
              href={`/blog/tags/${item.slug}/`}
              className="rounded-md bg-cod-700 px-1.5 py-0.5 outline outline-1 outline-cod-400 transition-all duration-150 hover:bg-cod-600 hover:scale-105"
              key={item.slug}
            >
              {item.name}
            </a>
          ))}
      </div>
    </div>
  </div>
);

export { BlogCard };
