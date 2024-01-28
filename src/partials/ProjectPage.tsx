import type { MarkdownInstance } from 'astro';
import type { ReactNode } from 'react';

import { ProjectContent } from '@/components/ProjectPage/ProjectContent';
import { ProjectFooter } from '@/components/ProjectPage/ProjectFooter';
import { ProjectHeader } from '@/components/ProjectPage/ProjectHeader';
import { Section } from '@/components/Section';
import type { IFrontmatterPost } from '@/types/IFrontMatterPost';
import type { IFrontmatterProject } from '@/types/IFrontMatterProject';

type IProjectPageProps = {
  frontmatter: IFrontmatterProject;
  path: string;
  posts: MarkdownInstance<IFrontmatterPost>[];
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
