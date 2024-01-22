import React from 'react';
import Typed from 'typed.js';

import { GradientText } from '@/components/GradientText';
import { HeroAvatar } from '@/components/Hero/HeroAvatar';
import { HeroSocial } from '@/components/Hero/HeroSocial';
import { Section } from '@/components/Section';

const Hero = () => {
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['hello world', 'hello world 2'],
      typeSpeed: 50,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Section>
      <span ref={el}></span>
      <HeroAvatar
        title={
          <>
            Hi, I'm <GradientText>Sa'id</GradientText>
          </>
        }
        description={
          <>
            I am a software engineer/PM/consultant working for{' '}
            <a
              className="text-green-500 hover:underline"
              href="https://www.pyyne.com"
            >
              PYYNE Digital
            </a>{' '}
            &{' '}
            <a
              className="text-purple-500 hover:underline"
              href="https://www.inveterate.com"
            >
              Inveterate
            </a>
            . Recently, my professional experience has been primarily in AWS
            serverless APIs and NestJS monolith APIs. Previously, I've worked on
            a number of projects, mostly for{' '}
            <a
              className="text-amber-500 hover:underline"
              href="https://www.socom.mil/"
            >
              USSOCOM
            </a>
            , using different ML solutions (computer vision, NLP, etc...).{' '}
            <br></br>
            On my own time I work on a range of tech projects from emulators to
            home-labs. I document my work here!
          </>
        }
        avatar={
          <img
            className="h-80 rounded-3xl"
            src="/images/site/portrait.jpg"
            alt="Portrait of me"
            loading="lazy"
          />
        }
        socialButtons={
          <>
            <a href="https://github.com/saidkharboutli">
              <HeroSocial
                src="/images/site/dark-github-pixelated.png"
                alt="GitHub Icon"
              />
            </a>
            <a href="https://www.linkedin.com/in/sa-id-kharboutli-428785119/">
              <HeroSocial
                src="/images/site/linkedin-pixelated.png"
                alt="LinkedIn Icon"
              />
            </a>
          </>
        }
      />
    </Section>
  );
};
export { Hero };
