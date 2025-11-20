import type { CollectionEntry } from 'astro:content';

import { BlogCardMin } from '@/features/BlogViews/components/BlogCardMin';

type IPostFooterProps = {
  content: CollectionEntry<'blog'>['data'];
  path: string;
  prevNextInSeries: {
    previous: CollectionEntry<'blog'> | null;
    next: CollectionEntry<'blog'> | null;
  };
  author: string;
};

const PostFooter = (props: IPostFooterProps) => (
  <>
    {(props.prevNextInSeries.previous || props.prevNextInSeries.next) && (
      <div className="mt-8 flex flex-row justify-center gap-12">
        {props.prevNextInSeries.previous && (
          <div className="flex w-1/2 flex-col text-center md:w-1/5">
            <div className="flex text-center md:text-left">
              <BlogCardMin post={props.prevNextInSeries.previous} />
            </div>
            <h2>← Previous Post in {props.content.isProject ? 'Project' : 'Series'}</h2>
          </div>
        )}

        {props.prevNextInSeries.next && (
          <div className="flex w-1/2 flex-col text-center md:w-1/5">
            <div className="flex text-center md:text-left">
              <BlogCardMin post={props.prevNextInSeries.next} />
            </div>
            <h2>Next Post in {props.content.isProject ? 'Project' : 'Series'} →</h2>
          </div>
        )}
      </div>
    )}
  </>
);

export { PostFooter };
