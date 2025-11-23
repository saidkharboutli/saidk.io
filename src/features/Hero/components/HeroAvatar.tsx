import { type ReactNode } from 'react';

import { HeroTerminal } from '@/features/Hero/components/HeroTerminal';

type IHeroAvatarProps = {
  title: ReactNode;
  avatar: ReactNode;
  socialButtons: ReactNode;
};

const HeroAvatar = (props: IHeroAvatarProps) => (
  <div className="flex size-full flex-col items-center md:flex-row md:justify-between md:gap-x-16 lg:gap-x-36">
    <div className="flex size-full flex-col items-center text-center md:items-start md:text-left">
      <h1 className="mb-4 hidden text-3xl font-bold md:mb-2 md:block">{props.title}</h1>
      <div className="h-[23rem] w-full overflow-visible md:h-[21rem]">
        <HeroTerminal />
      </div>
      <div className="mt-4 flex gap-3 md:ml-2">{props.socialButtons}</div>
    </div>
    <div className="my-4 shrink-0 md:mt-2">{props.avatar}</div>
  </div>
);

export { HeroAvatar };
