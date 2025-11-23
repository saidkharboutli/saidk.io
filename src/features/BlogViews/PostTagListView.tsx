import { tagDataFromArr } from '@/utils/helpers';

type ITagListProps = {
  tags: Set<string>;
};

const TagList = (props: ITagListProps) => (
  <div className="mx-auto mt-4 flex max-w-screen-lg flex-row flex-wrap justify-center gap-3 px-3 py-6 text-2xl">
    {props.tags &&
      tagDataFromArr([...props.tags])
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((item) => (
          <a
            key={item.slug}
            href={`/blog/tags/${item.slug}/`}
            className="rounded-md bg-cod-800 px-1.5 py-0.5 outline outline-1 transition-all duration-150 hover:bg-cod-900 hover:text-primary hover:scale-110"
          >
            {item.name}
          </a>
        ))}
  </div>
);

export { TagList };
