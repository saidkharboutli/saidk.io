import type { ReactNode } from 'react';

type ISectionProps = {
  title?: ReactNode;
  children: ReactNode;
};

const BlogSection = (props: ISectionProps) => (
  <div className="mx-auto px-3 py-6 lg:max-w-(--breakpoint-2xl)">
    {props.title && <div className="mb-6 text-2xl font-bold">{props.title}</div>}

    {props.children}
  </div>
);

export { BlogSection };
