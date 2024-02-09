import { BlogGallery } from '@/features/BlogPostViews/BlogGallery';
import { GradientText } from '@/features/shared/GradientText';
import { getNameFromSlug } from '@/utils/helpers';

type ITopicsViewProps = {
  topicData: {
    topic: string;
    posts: any[];
  }[];
};

const TopicsView = (props: ITopicsViewProps) => (
  <div className="mx-auto mt-4 flex max-w-screen-lg flex-row flex-wrap justify-center gap-3 px-3 py-6 text-2xl">
    {props.topicData &&
      props.topicData
        .sort((a, b) => a.topic.localeCompare(b.topic))
        .map((topicDatum) => (
          <div className="flex flex-col pb-8">
            <div className="flex flex-row">
              <div className="flex w-1/2">
                <a
                  href={`/blog/topics/${topicDatum.topic}/`}
                  className="px-1.5 py-0.5 font-bold transition-all duration-150 hover:scale-110"
                >
                  <GradientText>
                    {getNameFromSlug(topicDatum.topic)}
                  </GradientText>
                </a>
              </div>
              <div className="flex w-1/2 items-end justify-end gap-1">
                <span className="text-xs">
                  ({topicDatum.posts.slice(0, 3).length} of{' '}
                  {topicDatum.posts.length})
                </span>
                <span className="text-sm">Latest ↓</span>
              </div>
            </div>
            <hr className="mt-0.5 pt-4"></hr>
            <BlogGallery postList={topicDatum.posts.slice(0, 3)} />
          </div>
        ))}
  </div>
);

export { TopicsView };
