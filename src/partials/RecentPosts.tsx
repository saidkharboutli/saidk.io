import type { MarkdownInstance } from 'astro';

import { BlogCardSpotlight } from '@/components/BlogCard/BlogCardSpotlight';
import { BlogGallery } from '@/components/BlogCard/BlogGallery';
import { GradientText } from '@/components/GradientText';
import { Section } from '@/components/Section';
import type { IFrontMatterPost } from '@/types/IFrontMatterPost';

type IRecentPostsProps = {
  postList: MarkdownInstance<IFrontMatterPost>[];
};

const RecentPosts = (props: IRecentPostsProps) => (
  <Section
    title={
      <div className="flex items-baseline justify-between">
        <div>
          Recent <GradientText>Posts</GradientText>
        </div>

        <div className="text-sm transition-all duration-150 hover:text-purple-400 hover:scale-110">
          <a href="/blog/">View All Posts →</a>
        </div>
      </div>
    }
  >
    {props.postList[0] && <BlogCardSpotlight instance={props.postList[0]} />}

    {props.postList[1] && <BlogGallery postList={props.postList.slice(1)} />}
  </Section>
);

export { RecentPosts };
