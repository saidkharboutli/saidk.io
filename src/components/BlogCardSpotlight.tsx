import type { MarkdownInstance } from 'astro';
import { format } from 'date-fns';

import type { IFrontmatter } from '@/types/IFrontMatter';
import {
  getNameFromSlug,
  getTopicFromUrl,
  tagDataFromString,
} from '@/utils/helpers';

type IBlogCardProps = {
  instance: MarkdownInstance<IFrontmatter>;
};

const BlogCardSpotlight = (props: IBlogCardProps) => (
  <div className="mb-8 flex flex-row items-center overflow-hidden hover:translate-y-1">
    <div>
      <a className="w-3/5" href={props.instance.url}>
        <img
          className="h-96 rounded-2xl object-cover object-center hover:opacity-50"
          src={props.instance.frontmatter.imgSrc}
          alt={props.instance.frontmatter.imgAlt}
          loading="lazy"
        />
      </a>
    </div>

    <div className="flex w-2/5 flex-col px-3 pb-6 pt-4 text-left">
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
        <h2 className="text-2xl font-semibold hover:text-purple-400">
          <a className="w-3/5 hover:translate-y-1" href={props.instance.url}>
            {props.instance.frontmatter.title}
          </a>
        </h2>
      </div>

      {/* Pub Date */}
      <div className="mt-1 inline-flex text-xs text-gray-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mr-1 h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          ></path>
        </svg>
        {format(new Date(props.instance.frontmatter.pubDate), 'LLL d, yyyy')}
      </div>

      {/* Updated Date (conditional) */}
      {props.instance.frontmatter.updatedDate && (
        <div className="mt-1 inline-flex text-xs text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-1 h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon>
          </svg>
          <i>
            Updated{' '}
            {format(
              new Date(props.instance.frontmatter.updatedDate),
              'LLL d, yyyy',
            )}
          </i>
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
              className="rounded-md bg-slate-900 px-1.5 py-0.5 outline outline-1 hover:translate-y-px hover:text-purple-400 hover:outline-purple-400"
            >
              {item.name}
            </a>
          ))}
      </div>
    </div>
  </div>
);

export { BlogCardSpotlight };
