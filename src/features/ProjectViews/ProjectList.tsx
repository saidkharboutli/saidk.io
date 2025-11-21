import { ProjectGallery } from '@/features/ProjectViews/ProjectGallery';
import { GradientText } from '@/features/shared/GradientText';
import { Section } from '@/features/shared/Section';
import type { IProjectAndPost } from '@/types/IProjectAndPost';

type IProjectListProps = {
  projectPostPairs: IProjectAndPost[];
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
    <ProjectGallery projectPostPairs={props.projectPostPairs.slice(0, 3)} />
  </Section>
);

export { ProjectList };
