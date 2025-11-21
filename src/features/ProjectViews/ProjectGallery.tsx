import type { IProjectAndPost } from '@/types/IProjectAndPost';

import { ProjectCard } from './components/ProjectCard';

type IRecentProjectsProps = {
  projectPostPairs: IProjectAndPost[];
};

const ProjectGallery = (props: IRecentProjectsProps) => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
    {props.projectPostPairs.map((projectPostPair) => (
      <ProjectCard
        key={projectPostPair.project.slug}
        project={projectPostPair.project}
        latestPost={projectPostPair.post}
      />
    ))}
  </div>
);

export { ProjectGallery };
