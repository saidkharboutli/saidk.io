import type { ReactNode } from 'react';

import { PostContent } from '@/components/PostContent';
import { PostHeader } from '@/components/PostHeader';
import { Section } from '@/components/Section';
import type { IFrontmatter } from '@/types/IFrontMatter';
import { AppConfig } from '@/utils/AppConfig';

type IBlogPostProps = {
  frontmatter: IFrontmatter;
  path: string;
  children: ReactNode;
};

const BlogPost = (props: IBlogPostProps) => (
  <Section>
    <PostHeader
      content={props.frontmatter}
      author={AppConfig.author}
      path={props.path}
    />

    <PostContent content={props.frontmatter}>{props.children}</PostContent>
  </Section>
);

export { BlogPost };
