import type { ReactNode } from 'react';

import type { IFrontMatterPost } from '@/types/IFrontMatterPost';

type IPostContentProps = {
  content: IFrontMatterPost;
  children: ReactNode;
  toc?: ReactNode;
};

const PostContent = (props: IPostContentProps) => (
  <div>
    {/* `props.toc` is the Table of Contents Astro component passed through */}
    {props.toc}

    {/* Below is the actual blog content */}
    <div className="mx-auto mt-5 max-w-[70ch] 2xl:max-w-[85ch]">
      <div className="aspect-h-2 aspect-w-3">
        <img
          className="rounded-lg object-cover object-center"
          src={props.content.imgSrc}
          alt={props.content.imgAlt}
          loading="lazy"
        />
      </div>

      <div
        className="prose prose-indigo prose-invert mt-8 max-w-none xl:prose-lg
        prose-headings:text-cod-100 prose-h2:text-3xl prose-h3:text-2xl 
        prose-h4:text-lg prose-p:text-cod-200 prose-strong:text-cod-200
        prose-th:text-cod-200 prose-td:text-cod-200 prose-img:rounded-lg
        prose-inline-code:whitespace-nowrap prose-inline-code:rounded-md 
        prose-inline-code:bg-cod-900 prose-inline-code:px-1
        prose-inline-code:py-0.5 prose-inline-code:text-cod-200
        prose-inline-code:before:hidden prose-inline-code:after:hidden"
      >
        <article>{props.children}</article>
      </div>
    </div>
  </div>
);

export { PostContent };
