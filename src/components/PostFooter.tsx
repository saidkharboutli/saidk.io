import type { IFrontmatter } from '@/types/IFrontMatter';

import { BlogCardMin } from './BlogCardMin';

type IPostFooterProps = {
  content: IFrontmatter;
  path: string;
  prevNextInSeries: any;
  author: string;
};

const PostFooter = (props: IPostFooterProps) => (
  <>
    {(props.prevNextInSeries.previous || props.prevNextInSeries.next) && (
      <div className="mt-8 flex flex-row justify-center gap-12">
        {props.prevNextInSeries.previous && (
          <div className="flex w-1/4 flex-col text-center">
            <div className="flex text-left">
              <BlogCardMin instance={props.prevNextInSeries.previous} />
            </div>
            <h2>
              ← Previous Post in{' '}
              {props.content.isProject ? 'Project' : 'Series'}
            </h2>
          </div>
        )}

        {props.prevNextInSeries.next && (
          <div className="flex w-1/4 flex-col text-center">
            <div className="flex text-left">
              <BlogCardMin instance={props.prevNextInSeries.next} />
            </div>
            <h2>
              Next Post in {props.content.isProject ? 'Project' : 'Series'} →
            </h2>
          </div>
        )}
      </div>
    )}
  </>
);

export { PostFooter };
