import type { ReactNode } from 'react';

const colorToClassMap: { [key: string]: string } = {
  /* Status Tags */
  PREP: 'bg-amber-400 text-amber-900',
  IN_DEVELOPMENT: 'bg-blue-400 text-blue-900',
  'TESTING & DEBUGGING': 'bg-teal-400 text-teal-900',
  'POST-MVP (ONGOING)': 'bg-lime-400 text-lime-900',
  COMPLETE: 'bg-green-400 text-green-900',

  /* Language Colors */
  C: 'bg-slate-400 text-slate-900',
  'C++': 'bg-sky-400 text-sky-900',
  JAVASCRIPT: 'bg-amber-400 text-amber-900',
  TYPESCRIPT: 'bg-blue-400 text-blue-900',
  PYTHON: 'bg-green-400 text-green-900',
  JAVA: 'bg-red-400 text-red-900',
  RUST: 'bg-orange-400 text-orange-900',
  GO: 'bg-teal-400 text-teal-900',

  /* Tech Stack Colors */
  REACT: 'bg-blue-400 text-blue-900',
  'NODE.JS': 'bg-emerald-400 text-emerald-900',
  EXPRESS: 'bg-gray-400 text-gray-900',
  NESTJS: 'bg-red-400 text-red-900',
  SDL2: 'bg-indigo-400 text-indigo-900',
  ASTRO: 'bg-purple-400 text-purple-900',
  MONGODB: 'bg-lime-400 text-lime-900',

  /* Platform Colors */
  WEB: 'bg-sky-400 text-sky-900',
  ANDROID: 'bg-green-400 text-green-900',
  IOS: 'bg-gray-400 text-gray-900',
  WINDOWS: 'bg-blue-400 text-blue-900',
  LINUX: 'bg-slate-400 text-slate-900',
  MACOS: 'bg-gray-400 text-gray-900',

  DEFAULT: 'bg-gray-400 text-gray-900',
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
