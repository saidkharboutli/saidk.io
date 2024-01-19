import type { MarkdownInstance, Page } from 'astro';

export interface IFrontmatterProject {
  imgSrc: string;
  imgAlt: string;

  projectName: string;
  description: string;
  startDate: string;
  status: string;

  github: string;

  language: string;
  techStack: string[];
  platform: string[];

  series: string;
}

export type FrontmatterProjectPage = Page<
  MarkdownInstance<IFrontmatterProject>
>;
