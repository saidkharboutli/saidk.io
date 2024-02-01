import type { MarkdownInstance, Page } from 'astro';

export interface IFrontMatterPost {
  title: string;
  description: string;
  pubDate: string;
  updatedDate: string;
  imgSrc: string;
  imgAlt: string;
  draft: boolean;
  tags: string;
  series: string;
  isProject: string;
}

export type FrontMatterPostPage = Page<MarkdownInstance<IFrontMatterPost>>;
