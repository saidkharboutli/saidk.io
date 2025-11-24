import type { ReactNode } from 'react';

type ILogoProps = {
  icon: ReactNode;
  name: ReactNode;
};

const Logo = (props: ILogoProps) => (
  <div className="group from-primary flex items-center bg-linear-to-br to-red-300 bg-clip-text text-2xl font-bold text-transparent transition-all duration-200 hover:scale-105">
    <div className="flex transition-all delay-500 duration-500 group-hover:scale-150">
      {props.icon}
    </div>

    {props.name}
  </div>
);

export { Logo };
