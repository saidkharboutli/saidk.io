import type { Page } from 'astro';
import type { CollectionEntry } from 'astro:content';

type INewerOlderPaginationProps = {
  page: Page<CollectionEntry<'blog'>>;
};

const NewerOlderPagination = (props: INewerOlderPaginationProps) => (
  <div className="flex justify-center gap-8">
    {props.page.url.prev && <a href={props.page.url.prev}>← Newer Posts</a>}
    {props.page.url.next && <a href={props.page.url.next}>Older Posts →</a>}
  </div>
);

export { NewerOlderPagination };
