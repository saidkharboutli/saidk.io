/* eslint-disable no-useless-escape */
/*
  Thanks to https://github.com/littlesticks/astro-101
*/

type ITagData = {
  name: string;
  slug: string;
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

function titleCase(str: string) {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => {
      return word.replace(word[0]!, word[0]!.toUpperCase());
    })
    .join(' ');
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

export function getNameFromSlug(slug: string) {
  return titleCase(slug.replaceAll('-', ' ').replaceAll('and', '&'));
}

export function getTopicFromUrl(url: string) {
  const slugs = url.split('/');
  return slugs[
    slugs.findIndex((path) => {
      return path === 'topics';
    }) + 1
  ];
}
