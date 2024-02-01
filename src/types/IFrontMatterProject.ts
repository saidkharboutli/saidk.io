import type { MarkdownInstance, Page } from 'astro';

export interface IFrontMatterProject {
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

export type FrontMatterProjectPage = Page<
  MarkdownInstance<IFrontMatterProject>
>;
