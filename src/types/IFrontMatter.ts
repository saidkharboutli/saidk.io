import type { MarkdownInstance, Page } from 'astro';

export interface IFrontmatter {
  title: string;
  description: string;
  pubDate: string;
  updatedDate: string;
  imgSrc: string;
  imgAlt: string;
  draft: boolean;
}

// Workaround to import Astro type. Otherwise, it'll have some compilation errors
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
export type FrontmatterPage = Page<MarkdownInstance<IFrontmatter>>;
