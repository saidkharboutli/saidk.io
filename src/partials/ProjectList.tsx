import type { MarkdownInstance } from 'astro';

import { GradientText } from '@/components/GradientText';
import { ProjectGallery } from '@/components/Project/ProjectGallery';
import { Section } from '@/components/Section';
import type { IFrontmatterPost } from '@/types/IFrontMatterPost';
import type { IFrontmatterProject } from '@/types/IFrontMatterProject';

type IProjectListProps = {
  projectList: {
    project: MarkdownInstance<IFrontmatterProject>;
    post: MarkdownInstance<IFrontmatterPost>;
  }[];
};

const ProjectList = (props: IProjectListProps) => (
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
    <ProjectGallery projectList={props.projectList.slice(0, 3)} />
  </Section>
);

export { ProjectList };
