import type { ReactNode } from 'react';

type ILogoProps = {
  icon: ReactNode;
  name: ReactNode;
};

const Logo = (props: ILogoProps) => (
  <div className="flex items-center bg-gradient-to-br from-purple-500 to-red-300 bg-clip-text text-2xl font-bold text-transparent">
    {props.icon}

    {props.name}
  </div>
);

export { Logo };
