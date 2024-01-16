import { format } from 'date-fns';

import type { IFrontmatter } from '@/types/IFrontMatter';
import { tagDataFromString } from '@/utils/helpers';

type IPostHeaderProps = {
  content: IFrontmatter;
  author: string;
};

const PostHeader = (props: IPostHeaderProps) => (
  <>
    <div className="flex flex-col items-center">
      <h1 className="text-center text-3xl font-bold">{props.content.title}</h1>

      <div className="mt-4 flex flex-row items-center">
        <img
          src="/images/site/profile.png"
          alt="My face (pixelated)"
          className="h-10 w-10 rounded-full"
        />
        <div className=" ml-4 text-left text-sm text-gray-400">
          By {props.author} on{' '}
          {format(new Date(props.content.pubDate), 'LLL d, yyyy')}
          {props.content.updatedDate && <br></br>}
          {props.content.updatedDate && (
            <i>
              Updated{' '}
              {format(new Date(props.content.updatedDate), 'LLL d, yyyy')}
            </i>
          )}
        </div>
      </div>
      <div className="mt-4 flex flex-row flex-wrap gap-1 text-xs">
        {props.content.tags &&
          tagDataFromString(props.content.tags).map((item) => (
            <a
              href={`/blog/tags/${item.slug}/`}
              className="rounded-md bg-slate-900 px-1.5 py-0.5 outline outline-1 hover:translate-y-px hover:text-purple-400 hover:outline-purple-400"
            >
              {item.name}
            </a>
          ))}
      </div>
    </div>
  </>
);

export { PostHeader };
