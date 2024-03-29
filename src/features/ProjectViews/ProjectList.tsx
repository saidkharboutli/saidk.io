import type { MarkdownInstance } from 'astro';

import { ProjectGallery } from '@/features/ProjectViews/ProjectGallery';
import { GradientText } from '@/features/shared/GradientText';
import { Section } from '@/features/shared/Section';
import type { IFrontMatterPost } from '@/types/IFrontMatterPost';
import type { IFrontMatterProject } from '@/types/IFrontMatterProject';

type IProjectListProps = {
  projectList: {
    project: MarkdownInstance<IFrontMatterProject>;
    post: MarkdownInstance<IFrontMatterPost>;
  }[];
};

const ProjectList = (props: IProjectListProps) => (
  <Section
    title={
      <div className="flex items-baseline justify-between">
        <div>
          Recent <GradientText>Projects</GradientText>
        </div>

        <div className="text-sm transition-all duration-150 hover:text-primary hover:scale-110">
          <a href="/projects/">View All Projects →</a>
        </div>
      </div>
    }
  >
    <ProjectGallery projectList={props.projectList.slice(0, 3)} />
  </Section>
);

export { ProjectList };
