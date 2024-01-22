import { tagDataFromArr } from '@/utils/helpers';

type ITagListProps = {
  tags: Set<any>;
};

const TagList = (props: ITagListProps) => (
  <div className="mx-auto mt-4 flex max-w-screen-lg flex-row flex-wrap justify-center gap-3 px-3 py-6 text-2xl">
    {props.tags &&
      tagDataFromArr([...props.tags])
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((item) => (
          <a
            href={`/blog/tags/${item.slug}/`}
            className="rounded-md bg-slate-900 px-1.5 py-0.5 outline outline-1 hover:text-purple-400 hover:outline-purple-400 hover:translate-y-px"
          >
            {item.name}
          </a>
        ))}
  </div>
);

export { TagList };