import type { ReactNode } from 'react';

type INavMenuProps = {
  children: ReactNode;
};

const NavMenu = (props: INavMenuProps) => (
  <nav>
    <ul className="flex gap-x-8 font-bold text-gray-200">{props.children}</ul>
  </nav>
);

export { NavMenu };
