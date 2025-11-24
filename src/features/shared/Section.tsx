import type { ReactNode } from 'react';

type ISectionProps = {
  title?: ReactNode;
  children: ReactNode;
};

const Section = (props: ISectionProps) => (
  <div className="4k:max-w-screen-xl mx-auto max-w-(--breakpoint-lg) px-8 py-6 md:px-3">
    {props.title && <div className="mb-6 text-2xl font-bold">{props.title}</div>}

    {props.children}
  </div>
);

export { Section };
