import type { LegacyRef } from 'react';
import React from 'react';

interface IFadeInProps {
  children: React.ReactNode;
}

const FadeIn = (props: IFadeInProps) => {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef<HTMLDivElement>();
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && setVisible(true));
    });
    observer.observe(domRef.current!);
    return () => observer.unobserve(domRef.current!);
  }, []);
  return (
    <div
      ref={domRef as LegacyRef<HTMLDivElement>}
      className={`${
        isVisible
          ? 'visible opacity-100 transition-all duration-700'
          : 'invisible opacity-0'
      }`}
    >
      {props.children}
    </div>
  );
};

export { FadeIn };
