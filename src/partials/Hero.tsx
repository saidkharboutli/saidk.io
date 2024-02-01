import { GradientText } from '@/components/GradientText';
import { HeroAvatar } from '@/components/Hero/HeroAvatar';
import { HeroSocial } from '@/components/Hero/HeroSocial';
import { Page } from '@/components/Page';
import ParticlesBackrgound from '@/components/ParticlesBackground';

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
      </div>
    </div>
  </Page>
);

export { Hero };
