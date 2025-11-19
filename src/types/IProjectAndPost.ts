import type { CollectionEntry } from 'astro:content';

export type IProjectAndPost = {
  project: CollectionEntry<'projects'>;
  post: CollectionEntry<'blog'> | null;
};
