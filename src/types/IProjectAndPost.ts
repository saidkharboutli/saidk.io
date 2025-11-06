import type { CollectionEntry } from 'astro:content';

export type ProjectAndPost = {
  project: CollectionEntry<'projects'>;
  post: CollectionEntry<'blog'> | null;
};
