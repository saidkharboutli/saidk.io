import type { MarkdownInstance } from 'astro';

import type { IFrontmatterPost } from '@/types/IFrontMatterPost';

export const sortByDate = (posts: MarkdownInstance<IFrontmatterPost>[]) => {
  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.pubDate).valueOf() -
      new Date(a.frontmatter.pubDate).valueOf(),
  );
};
