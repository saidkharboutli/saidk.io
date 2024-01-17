import type { ReactNode } from 'react';

type IHeroAvatarProps = {
  title: ReactNode;
  description: ReactNode;
  avatar: ReactNode;
  socialButtons: ReactNode;
};

const HeroAvatar = (props: IHeroAvatarProps) => (
  <div className="flex flex-col items-center md:flex-row md:justify-between md:gap-x-24">
    <div>
      <h1 className="text-3xl font-bold">{props.title}</h1>

      <p className="mt-4 text-lg leading-7 tracking-normal">
        {props.description}
      </p>

      <div className="mt-2 flex gap-3">{props.socialButtons}</div>
    </div>

    <div className="shrink-0">{props.avatar}</div>
  </div>
);

export { HeroAvatar };
