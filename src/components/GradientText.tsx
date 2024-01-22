import type { ReactNode } from 'react';

type IGradientTextProps = {
  children: ReactNode;
};

const GradientText = (props: IGradientTextProps) => (
  <span className="bg-gradient-to-br from-red-500 to-yellow-300 bg-clip-text text-transparent">
    {props.children}
  </span>
);

export { GradientText };