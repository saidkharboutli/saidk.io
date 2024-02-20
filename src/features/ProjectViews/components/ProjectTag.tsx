import type { ReactNode } from 'react';

const colorToClassMap: { [key: string]: string } = {
  /* Status Tags */
  PREP: 'bg-amber-900',
  IN_DEVELOPMENT: 'bg-blue-900',
  'TESTING & DEBUGGING': 'bg-teal-900',
  'POST-MVP (ONGOING)': 'bg-emerald-900',
  COMPLETE: 'bg-green-900',
  DEFAULT: 'bg-cod-900',
};

type IProjectTagProps = {
  children: ReactNode;
};

const ProjectTag = (props: IProjectTagProps) => (
  <div
    className={`rounded-md px-2 py-1 font-semibold ${
      colorToClassMap[props.children?.toString().toUpperCase() || 'DEFAULT'] ||
      colorToClassMap.DEFAULT
    }`}
  >
    {props.children}
  </div>
);

export { ProjectTag };
