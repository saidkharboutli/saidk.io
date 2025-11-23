import type { CollectionEntry } from 'astro:content';

import { BlogGallery } from '@/features/BlogViews/BlogGallery';
import { Section } from '@/features/shared/Section';
import { generateSlug } from '@/utils/helpers';

type IProjectFooterProps = {
  projectData: CollectionEntry<'projects'>['data'];
  path: string;
  posts: CollectionEntry<'blog'>[];
};

const ProjectFooter = (props: IProjectFooterProps) => (
  <Section
    title={
      <div className="flex items-baseline justify-between">
        <div>Recent Project Posts</div>

        <div className="text-sm transition-all duration-150 hover:text-primary hover:scale-110">
          <a href={`/blog/projects/${generateSlug(props.projectData.series)}`}>
            View All Posts for this Project →
          </a>
        </div>
      </div>
    }
  >
    {props.posts[0] ? (
      <BlogGallery postList={props.posts.slice(0, 3)} />
    ) : (
      <div>
        <h2>No Posts Yet!</h2>
      </div>
    )}
  </Section>
);

export { ProjectFooter };
