import type { MarkdownInstance } from 'astro';

import { BlogCardSpotlight } from '@/components/BlogCardSpotlight';
import { BlogGallery } from '@/components/BlogGallery';
import { GradientText } from '@/components/GradientText';
import { Section } from '@/components/Section';
import type { IFrontmatter } from '@/types/IFrontMatter';

type IRecentPostsProps = {
  postList: MarkdownInstance<IFrontmatter>[];
};

const RecentPosts = (props: IRecentPostsProps) => (
  <Section
    title={
      <div className="flex items-baseline justify-between">
        <div>
          Recent <GradientText>Posts</GradientText>
        </div>

        <div className="text-sm">
          <a href="/blog/">View all Posts →</a>
        </div>
      </div>
    }
  >
    {props.postList[0] && <BlogCardSpotlight instance={props.postList[0]} />}

    {props.postList[1] && <BlogGallery postList={props.postList.slice(1)} />}
  </Section>
);

export { RecentPosts };
