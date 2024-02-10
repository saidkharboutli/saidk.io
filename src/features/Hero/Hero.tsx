import { HeroAvatar } from '@/features/Hero/components/HeroAvatar';
import { HeroSocial } from '@/features/Hero/components/HeroSocial';
import ParticlesBackrgound from '@/features/Hero/components/ParticlesBackground';
import { GradientText } from '@/features/shared/GradientText';
import { Page } from '@/features/shared/Page';

const Hero = () => (
  <Page>
    <ParticlesBackrgound />
    <div>
      <div className="flex min-h-[calc(100vh-74px)] w-full flex-col justify-center overflow-hidden">
        <HeroAvatar
          title={
            <>
              Hi, I'm <GradientText>Sa'id</GradientText>
            </>
          }
          avatar={
            <img
              className="h-80 rounded-3xl"
              src="/images/site/portrait.avif"
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
              <a href="https://twitter.com/saidkio/">
                <HeroSocial
                  src="/images/site/twitter-pixelated.png"
                  alt="Twitter Icon"
                />
              </a>
            </>
          }
        />
      </div>
    </div>
  </Page>
);

export { Hero };
