import type { MarkdownInstance } from 'astro';

import type { IFrontmatterProject } from '@/types/IFrontMatterProject';

export const sortProjectsByDate = (
  posts: MarkdownInstance<IFrontmatterProject>[],
) => {
  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.startDate).valueOf() -
      new Date(a.frontmatter.startDate).valueOf(),
  );
};
