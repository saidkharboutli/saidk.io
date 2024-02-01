type IHeroSocialProps = {
  src: string;
  alt: string;
};

const HeroSocial = (props: IHeroSocialProps) => (
  <img
    className="size-9 transition-all duration-150 hover:scale-110"
    src={props.src}
    alt={props.alt}
    loading="lazy"
  />
);

export { HeroSocial };
