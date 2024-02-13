import type { MarkdownInstance } from 'astro';
import type { ReactNode } from 'react';

import { ProjectContent } from '@/features/ProjectPage/components/ProjectContent';
import { ProjectFooter } from '@/features/ProjectPage/components/ProjectFooter';
import { ProjectHeader } from '@/features/ProjectPage/components/ProjectHeader';
import { Section } from '@/features/shared/Section';
import type { IFrontMatterPost } from '@/types/IFrontMatterPost';
import type { IFrontMatterProject } from '@/types/IFrontMatterProject';

type IProjectPageProps = {
  frontmatter: IFrontMatterProject;
  path: string;
  posts: MarkdownInstance<IFrontMatterPost>[];
  children: ReactNode;
};

const ProjectPage = (props: IProjectPageProps) => (
  <Section>
    <ProjectHeader content={props.frontmatter} path={props.path} />

    <ProjectContent content={props.frontmatter}>
      {props.children}
    </ProjectContent>

    <ProjectFooter
      content={props.frontmatter}
      path={props.path}
      posts={props.posts}
    />
  </Section>
);

export { ProjectPage };
