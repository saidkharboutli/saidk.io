import type { IProjectAndPost } from '@/types/IProjectAndPost';

import { ProjectCard } from './components/ProjectCard';

type IRecentProjectsProps = {
  projectPostPair: IProjectAndPost[];
};

const ProjectGallery = (props: IRecentProjectsProps) => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
    {props.projectPostPair.map((elt) => (
      <ProjectCard key={elt.project.id} project={elt.project} latestPost={elt.post} />
    ))}
  </div>
);

export { ProjectGallery };
