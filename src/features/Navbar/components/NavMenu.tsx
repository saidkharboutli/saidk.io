import type { ReactNode } from 'react';

type INavMenuProps = {
  children: ReactNode;
};

const NavMenu = (props: INavMenuProps) => {
  return (
    <>
      <nav className="hidden md:block">
        <ul className="flex gap-x-6 font-bold text-gray-200">
          {props.children}
        </ul>
      </nav>

      <div className="md:hidden">
        <div className="peer/parent relative z-40 flex h-[20px] w-[25px] items-center  justify-center overflow-hidden p-0.5 transition-all duration-200">
          <div className="flex size-full origin-center flex-col justify-between overflow-hidden transition-all duration-300">
            <label htmlFor="nav-toggle" className="hidden">
              Hamburger Menu
            </label>
            <input
              className="peer absolute left-0 top-0 z-50 size-full cursor-pointer opacity-0"
              type="checkbox"
              id="nav-toggle"
            />

            <div className="h-[2px] origin-left bg-white transition-all duration-300 peer-checked:-translate-x-10"></div>
            <div className="h-[2px] rounded bg-white transition-all delay-75 duration-300 peer-checked:-translate-x-10"></div>
            <div className="h-[2px] origin-left bg-white transition-all delay-150 duration-200 peer-checked:-translate-x-10"></div>

            <div className="absolute top-2.5 flex w-0 items-center justify-between transition-all duration-300 translate-x-10 peer-checked:w-12 peer-checked:translate-x-0">
              <div className="absolute h-[2px] w-[20px] bg-white transition-all delay-200 duration-300 rotate-0 [.peer:checked~*_&]:rotate-45"></div>
              <div className="absolute h-[2px] w-[20px] bg-white transition-all delay-200 duration-300 -rotate-0 [.peer:checked~*_&]:-rotate-45"></div>
            </div>
          </div>
        </div>

        <div className="invisible fixed left-0 top-0 z-20 size-full bg-cod-900 opacity-0 transition-all duration-300 peer-has-[:checked]/parent:visible peer-has-[:checked]/parent:opacity-80" />
        <div className="invisible fixed top-0 z-30 h-screen w-40 rounded-md p-8 text-right transition-all delay-100 duration-300 translate-x-16 peer-has-[:checked]/parent:visible peer-has-[:checked]/parent:-translate-x-24">
          <nav className="mt-12">
            <ul className="flex flex-col gap-y-6 font-bold text-gray-200">
              {props.children}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
export { NavMenu };
