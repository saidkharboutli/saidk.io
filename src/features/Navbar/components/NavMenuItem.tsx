import type { ReactNode } from 'react';

type INavMenuItemProps = {
  href: string;
  children: string | ReactNode;
  target?: '_blank' | '_self' | '_parent' | '_top' | string;
};

const NavMenuItem = (props: INavMenuItemProps) => (
  <li className="transition-all duration-200 hover:text-white hover:scale-110">
    <a href={props.href} target={props.target || '_self'}>
      {props.children}
    </a>
  </li>
);

export { NavMenuItem };
