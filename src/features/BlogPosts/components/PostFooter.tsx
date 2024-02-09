import { BlogCardMin } from '@/features/BlogPostViews/components/BlogCardMin';
import type { IFrontMatterPost } from '@/types/IFrontMatterPost';

type IPostFooterProps = {
  content: IFrontMatterPost;
  path: string;
  prevNextInSeries: any;
  author: string;
};

const PostFooter = (props: IPostFooterProps) => (
  <>
    {(props.prevNextInSeries.previous || props.prevNextInSeries.next) && (
      <div className="mt-8 flex flex-row justify-center gap-12">
        {props.prevNextInSeries.previous && (
          <div className="flex w-1/2 flex-col text-center md:w-1/5">
            <div className="flex text-center md:text-left">
              <BlogCardMin instance={props.prevNextInSeries.previous} />
            </div>
            <h2>
              ← Previous Post in{' '}
              {props.content.isProject ? 'Project' : 'Series'}
            </h2>
          </div>
        )}

        {props.prevNextInSeries.next && (
          <div className="flex w-1/2 flex-col text-center md:w-1/5">
            <div className="flex text-center md:text-left">
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
