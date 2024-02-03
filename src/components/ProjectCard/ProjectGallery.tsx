import type { MarkdownInstance } from 'astro';

import type { IFrontMatterPost } from '@/types/IFrontMatterPost';
import type { IFrontMatterProject } from '@/types/IFrontMatterProject';

import { ProjectCard } from './ProjectCard';

type IRecentProjectsProps = {
  projectList: {
    project: MarkdownInstance<IFrontMatterProject>;
    post: MarkdownInstance<IFrontMatterPost>;
  }[];
};

const ProjectGallery = (props: IRecentProjectsProps) => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
    {props.projectList.map((elt) => (
      <ProjectCard
        key={elt.project.url}
        instance={elt.project}
        latestPost={elt.post}
      />
    ))}
  </div>
);

export { ProjectGallery };
