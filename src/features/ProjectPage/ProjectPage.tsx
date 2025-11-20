import type { CollectionEntry } from 'astro:content';
import type { ReactNode } from 'react';

import { ProjectContent } from '@/features/ProjectPage/components/ProjectContent';
import { ProjectFooter } from '@/features/ProjectPage/components/ProjectFooter';
import { ProjectHeader } from '@/features/ProjectPage/components/ProjectHeader';
import { Section } from '@/features/shared/Section';

type IProjectPageProps = {
  projectData: CollectionEntry<'projects'>['data'];
  path: string;
  posts: CollectionEntry<'blog'>[];
  children: ReactNode;
};

const ProjectPage = (props: IProjectPageProps) => (
  <Section>
    <ProjectHeader projectData={props.projectData} path={props.path} />

    <ProjectContent projectData={props.projectData}>{props.children}</ProjectContent>

    <ProjectFooter projectData={props.projectData} path={props.path} posts={props.posts} />
  </Section>
);

export { ProjectPage };
