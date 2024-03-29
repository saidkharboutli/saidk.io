import type { ReactNode } from 'react';

type IGradientTextProps = {
  children: ReactNode;
};

const GradientText = (props: IGradientTextProps) => (
  <span className="bg-gradient-to-br from-primary to-[#d4b4fe] bg-clip-text text-transparent">
    {props.children}
  </span>
);

export { GradientText };
