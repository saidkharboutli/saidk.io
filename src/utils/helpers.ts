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
