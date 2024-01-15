import { format } from 'date-fns';

import type { IFrontmatter } from '@/types/IFrontMatter';

type IPostHeaderProps = {
  content: IFrontmatter;
  author: string;
};

const PostHeader = (props: IPostHeaderProps) => (
  <>
    <h1 className="text-center text-3xl font-bold">{props.content.title}</h1>

    <div className="mt-2 text-center text-sm text-gray-400">
      By {props.author} on{' '}
      {format(new Date(props.content.pubDate), 'LLL d, yyyy')}
      {props.content.updatedDate && <br></br>}
      {props.content.updatedDate && (
        <i>
          Updated {format(new Date(props.content.updatedDate), 'LLL d, yyyy')}
        </i>
      )}
    </div>
  </>
);

export { PostHeader };
