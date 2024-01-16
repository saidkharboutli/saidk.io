import type { MarkdownInstance, Page } from 'astro';

export interface IFrontmatter {
  title: string;
  description: string;
  pubDate: string;
  updatedDate: string;
  imgSrc: string;
  imgAlt: string;
  draft: boolean;
  tags: string;
}

export type FrontmatterPage = Page<MarkdownInstance<IFrontmatter>>;
