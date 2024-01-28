/* eslint-disable no-useless-escape */
/*
  Thanks to https://github.com/littlesticks/astro-101
*/

import type { MarkdownInstance } from 'astro';

import type { IFrontmatterPost } from '@/types/IFrontMatterPost';
import type { IFrontmatterProject } from '@/types/IFrontMatterProject';

type ITagData = {
  name: string;
  slug: string;
};

function titleCase(str: string) {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => {
      return word.replace(word[0]!, word[0]!.toUpperCase());
    })
    .join(' ');
}

export const sortProjectsByDate = (
  posts: MarkdownInstance<IFrontmatterProject>[],
) => {
  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.startDate).valueOf() -
      new Date(a.frontmatter.startDate).valueOf(),
  );
};

export const sortPostsByDate = (
  posts: MarkdownInstance<IFrontmatterPost>[],
) => {
  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.pubDate).valueOf() -
      new Date(a.frontmatter.pubDate).valueOf(),
  );
};

export function generateSlug(baseStr: string) {
  return baseStr
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

export function getNameFromSlug(slug: string) {
  return titleCase(slug.replaceAll('-', ' ').replaceAll('and', '&'));
}

export function tagDataFromString(tags: string) {
  const tagData: ITagData[] = [];
  tags.split(', ').forEach((tag) => {
    tagData.push({
      name: tag,
      slug: `${generateSlug(tag)}`,
    });
  });
  return tagData;
}

export function tagDataFromArr(tags: string[] | Set<string>) {
  const tagData: ITagData[] = [];
  tags.forEach((tag) => {
    tagData.push({
      name: tag,
      slug: `${generateSlug(tag)}`,
    });
  });
  return tagData;
}

export function getTopicFromUrl(url: string) {
  const slugs = url.split('/');
  return slugs[
    slugs.findIndex((path) => {
      return path === 'topics';
    }) + 1
  ];
}
