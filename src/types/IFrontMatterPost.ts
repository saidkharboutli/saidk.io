import type { MarkdownInstance, Page } from 'astro';

export interface IFrontmatterPost {
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

export type FrontmatterPostPage = Page<MarkdownInstance<IFrontmatterPost>>;
