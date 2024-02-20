import type { ReactNode } from 'react';

const nameToImageMap: { [key: string]: string } = {
  /* Language Icons */
  C: '/images/site/project_logos/c.svg',
  'C++': '/images/site/project_logos/cpp.svg',
  JAVASCRIPT: '/images/site/project_logos/javascript.svg',
  TYPESCRIPT: '/images/site/project_logos/typescript.svg',
  PYTHON: '/images/site/project_logos/python.svg',
  JAVA: '/images/site/project_logos/java.svg',
  RUST: '/images/site/project_logos/rust.svg',
  GO: '/images/site/project_logos/go.svg',

  /* Tech Stack Icons */
  REACT: '/images/site/project_logos/react.svg',
  'NODE.JS': '/images/site/project_logos/nodejs.svg',
  EXPRESS: '/images/site/project_logos/express.svg',
  NESTJS: '/images/site/project_logos/nestjs.svg',
  SDL2: '/images/site/project_logos/sdl2.svg',
  ASTRO: '/images/site/project_logos/astro.svg',
  MONGODB: '/images/site/project_logos/mongodb.svg',

  /* Platform Icons */
  WEB: '/images/site/project_logos/web.svg',
  ANDROID: '/images/site/project_logos/android.svg',
  IOS: '/images/site/project_logos/ios.svg',
  WINDOWS: '/images/site/project_logos/windows.svg',
  LINUX: '/images/site/project_logos/linux.svg',
  MACOS: '/images/site/project_logos/macos.svg',

  DEFAULT: '/images/site/profile.png',
};

type IProjectTagProps = {
  children: ReactNode;
};

const ProjectIcon = (props: IProjectTagProps) => (
  <div className="flex size-8 items-center rounded-md">
    <img
      alt={`${props.children.toString()} icon`}
      src={`${nameToImageMap[props.children?.toString().toUpperCase()] || nameToImageMap.DEFAULT}`}
    ></img>
  </div>
);

export { ProjectIcon };
