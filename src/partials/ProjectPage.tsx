import type { MarkdownInstance } from 'astro';
import type { ReactNode } from 'react';

import { ProjectContent } from '@/components/ProjectPage/ProjectContent';
import { ProjectFooter } from '@/components/ProjectPage/ProjectFooter';
import { ProjectHeader } from '@/components/ProjectPage/ProjectHeader';
import { Section } from '@/components/Section';
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
