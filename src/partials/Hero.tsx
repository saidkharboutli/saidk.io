import { GradientText } from '@/components/GradientText';
import { HeroAvatar } from '@/components/HeroAvatar';
import { HeroSocial } from '@/components/HeroSocial';
import { Section } from '@/components/Section';

const Hero = () => (
  <Section>
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
          . My professional experience is primarily in AWS serverless backend
          development. On my own time I work on a range of tech projects from
          emulators to home-labs. I document my work here!
        </>
      }
      avatar={
        <img
          className="h-80 rounded-3xl"
          src="/public/images/site/portrait.jpg"
          alt="Portrait of me"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://github.com/saidkharboutli">
            <HeroSocial
              src="/public/images/site/github-icon.png"
              alt="GitHub Icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/sa-id-kharboutli-428785119/">
            <HeroSocial
              src="/public/images/site/linkedin-icon.png"
              alt="LinkedIn Icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
