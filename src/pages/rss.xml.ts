import rss from '@astrojs/rss';
// @ts-ignore
import sanitizeHtml from 'sanitize-html';

import type { IFrontMatterPost } from '@/types/IFrontMatterPost';
import { AppConfig } from '@/utils/AppConfig';
import { getNameFromSlug, getTopicFromUrl } from '@/utils/helpers';

interface Posts {
  url: string;
  file: string;
  frontmatter: IFrontMatterPost;
  compiledContent: () => string;
}

export async function GET() {
  const posts: Posts[] = Object.values(
    import.meta.glob('./blog/**/*.md', {
      eager: true,
    }),
  ) as Posts[];

  const categories = [
    ...new Set(posts.map((post) => getNameFromSlug(getTopicFromUrl(post.url)))),
  ];

  const items = posts
    .sort(
      (a, b) =>
        Date.parse(b.frontmatter.pubDate) - Date.parse(a.frontmatter.pubDate),
    )
    .map((post) => ({
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      link: `${import.meta.env.SITE}${post.url}`,
      pubDate: new Date(post.frontmatter.pubDate),
      content: sanitizeHtml(post.compiledContent()),
      author: 'said@saidk.io (Said K)',
      caetgory: getTopicFromUrl(post.url),
      customData: `${post.frontmatter.updatedDate && `<atom:updated>${new Date(post.frontmatter.updatedDate)}</atom:updated>`}
                  <category>${getTopicFromUrl(post.url)}</category>
                  <media:thumbnail url="${import.meta.env.SITE}${post.frontmatter.imgSrc}"/>`,
    }));

  return rss({
    // stylesheet: '/rss/rss-styles.xsl',
    customData: `${categories.map((category) => `<category>${category}</category>`)}
                 <atom:link href="${import.meta.env.SITE}/rss.xml" rel="self" type="application/rss+xml" />
                 <language>en-us</language>
                 <image>
                    <url>
                      https://saidk.io/images/site/rss-logo.jpg
                    </url>
                    <title>${AppConfig.feed_title}</title>
                    <link>${import.meta.env.SITE}/</link>
                  </image>`,
    title: `${AppConfig.feed_title}`,
    description: AppConfig.description,
    site: import.meta.env.SITE,
    xmlns: {
      media: 'http://search.yahoo.com/mrss/',
      atom: 'http://www.w3.org/2005/Atom',
    },
    items,
  });
}
