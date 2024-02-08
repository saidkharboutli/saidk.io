import type { MarkdownHeading } from 'astro';

export interface ITocItem extends MarkdownHeading {
  children: ITocItem[];
}
