import { HeroSocial } from '@/features/Hero/components/HeroSocial';
import { GradientText } from '@/features/shared/GradientText';
import { Section } from '@/features/shared/Section';

const AboutMeHeader = () => (
  <Section>
    <div className="text-center">
      <h1 className="text-3xl font-bold">
        <GradientText>About Me</GradientText>
      </h1>
    </div>

    <div className="flex flex-col items-center md:flex-row md:justify-between md:gap-x-24">
      <div>
        <p className="mt-4 text-lg leading-7 tracking-normal">
          <>
            Hello! I&apos;m a Software Engineer & Project Management consultant working for{' '}
            <a className="text-pyyne hover:underline" href="https://www.pyyne.com">
              PYYNE Digital
            </a>{' '}
            &{' '}
            <a className="text-inveterate hover:underline" href="https://www.inveterate.com">
              Inveterate
            </a>
            . Recently, my professional experience has been primarily in AWS serverless APIs and
            NestJS monolith APIs. Previously, I&apos;ve worked on a number of projects, mostly for{' '}
            <a className="text-amber-500 hover:underline" href="https://www.socom.mil/">
              USSOCOM
            </a>
            , using a variety of ML solutions (computer vision, NLP, etc...). <br />
            <br />
            On my own time, I work on few different kinds of projects, most being lower-level than
            my professional work. Recently, I&apos;ve been especially interested in emulators,
            compilers, and operating systems (RISC-V). My hope is to capture my development work on
            this site to help others that may be interested in working on similar projects.
            <br />
            <br />
            Beyond software, I enjoy cars, video games, weightlifting, and running. I tried to
            capture more details on my interests below.
          </>
        </p>

        <div className="mt-2 flex justify-center gap-3 md:justify-start">
          <>
            <a href="https://github.com/saidkharboutli">
              <HeroSocial src="/images/site/dark-github-pixelated.png" alt="GitHub Icon" />
            </a>
            <a href="https://www.linkedin.com/in/sa-id-kharboutli-428785119/">
              <HeroSocial src="/images/site/linkedin-pixelated.avif" alt="LinkedIn Icon" />
            </a>
            <a href="https://twitter.com/saidkio/">
              <HeroSocial src="/images/site/twitter-pixelated.avif" alt="Twitter Icon" />
            </a>
          </>
        </div>
      </div>

      <div className="shrink-0">
        <img
          className="mt-4 h-80 rounded-3xl md:mt-0"
          src="/images/site/portrait.avif"
          alt="Portrait of me"
          loading="lazy"
        />
      </div>
    </div>
  </Section>
);

export { AboutMeHeader };
