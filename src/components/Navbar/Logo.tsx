import type { ReactNode } from 'react';

type ILogoProps = {
  icon: ReactNode;
  name: ReactNode;
};

const Logo = (props: ILogoProps) => (
  <div className="group flex items-center bg-gradient-to-br from-purple-500 to-red-300 bg-clip-text text-2xl font-bold text-transparent transition-all duration-200 hover:scale-105">
    <div className="flex transition-all delay-300 duration-300 group-hover:scale-125">
      {props.icon}
    </div>

    {props.name}
  </div>
);

export { Logo };
