import type { MarkdownInstance } from 'astro';

import { BlogGallery } from '@/features/BlogViews/BlogGallery';
import { Section } from '@/features/shared/Section';
import type { IFrontMatterPost } from '@/types/IFrontMatterPost';
import type { IFrontMatterProject } from '@/types/IFrontMatterProject';
import { generateSlug } from '@/utils/helpers';

type IProjectFooterProps = {
  content: IFrontMatterProject;
  path: string;
  posts: MarkdownInstance<IFrontMatterPost>[];
};

const ProjectFooter = (props: IProjectFooterProps) => (
  <Section
    title={
      <div className="flex items-baseline justify-between">
        <div>Recent Project Posts</div>

        <div className="text-sm transition-all duration-150 hover:text-primary hover:scale-110">
          <a href={`/blog/projects/${generateSlug(props.content.series)}`}>
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
