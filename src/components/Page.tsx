import type { ReactNode } from 'react';

type IPageProps = {
  title?: ReactNode;
  children: ReactNode;
};

const Page = (props: IPageProps) => (
  <div className="mx-auto min-h-[calc(100vh-74px)] max-w-screen-lg">
    {props.title && (
      <div className="mb-6 text-2xl font-bold">{props.title}</div>
    )}

    {props.children}
  </div>
);

export { Page };
