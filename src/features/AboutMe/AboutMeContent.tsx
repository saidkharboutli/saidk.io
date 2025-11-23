import type { CollectionEntry } from 'astro:content';

import { AboutMeEducation } from '@/features/AboutMe/AboutMeEducation';
import { AboutMeFacts } from '@/features/AboutMe/AboutMeFacts';
import { AboutMeSkills } from '@/features/AboutMe/AboutMeSkills';
import { ReviewGalleryMin } from '@/features/Reviews/ReviewGalleryMin';
import { GradientText } from '@/features/shared/GradientText';
import { Section } from '@/features/shared/Section';

interface IAboutMeContentProps {
  movies: CollectionEntry<'reviews'>[];
  shows: CollectionEntry<'reviews'>[];
  albums: CollectionEntry<'reviews'>[];
  games: CollectionEntry<'reviews'>[];
}

const AboutMeContent = (props: IAboutMeContentProps) => {
  const favoriteLangs = [
    { skill: 'C/C++', level: 2 },
    { skill: 'Python', level: 2 },
    { skill: 'TypeScript', level: 2 },
    { skill: 'VHDL', level: 2 },
    { skill: 'RISC-V', level: 1 },
    { skill: 'Go', level: 1 },
    { skill: 'Rust', level: 1 },
    { skill: 'Java', level: 0 },
  ];
  const webFrameworks = [
    { skill: 'NestJS', level: 2 },
    { skill: 'NodeJS', level: 2 },
    { skill: 'Express', level: 2 },
    { skill: 'Astro', level: 1 },
    { skill: 'React', level: 1 },
    { skill: 'Bootstrap', level: 1 },
  ];
  const otherFrameworks = [
    { skill: 'SDL2 (C)', level: 2 },
    { skill: 'AWS SDK (JS)', level: 2 },
    { skill: 'MongoDB & NoSQL', level: 2 },
    { skill: 'OpenCV (C + Python)', level: 1 },
    { skill: 'ROS (C)', level: 1 },
  ];
  const miscSkills = [
    { skill: 'Linux/Unix', level: 2 },
    { skill: 'AWS', level: 2 },
    { skill: 'Computer Hardware', level: 2 },
    { skill: 'Agile Project Management', level: 2 },
    { skill: 'Machine Learning', level: 1 },
    { skill: 'Homelab/Networking', level: 1 },
  ];

  const education = {
    school: 'Rutgers—New Brunswick',
    degree: 'B.S., Computer Engineering',
    year: '2018-2022',
    minors: ['Computer Science', 'Military Science'],
  };

  const facts = [
    {
      question: 'Weightlifting PRs',
      answer:
        "Currently my bench PR is 315x1 and my deadlift PR is 445x5. I don't barbell squat (too many injuries in the past).",
    },
    {
      question: 'Gym Goals',
      answer:
        '315x1 is likely the last major goal I will hit for bench press (no juice in my future). I am still training to hit 500x1 on deadlift.',
    },
    {
      question: 'Gym Stack & Split',
      answer:
        'Push-Pull-Legs split until the day I die. Myprotein Whey Isolate, Creatine, and Pre-Workout. Metamucil for fiber.',
    },
    {
      question: 'PC Specs',
      answer:
        'I just built a PC off the 2023 holiday sales. Ryzen 7 7800X3D, XFX Speedster 7900XTX, 32GB DDR5-6000, and all NVMe storage.',
    },
    {
      question: 'Operating Systems',
      answer:
        "I use Arch Linux on my PC and Ubuntu on my laptop. My PC is dual booted with Windows for gaming. Switching away from Ubuntu due to Canonical's recent decisions.",
    },
    {
      question: 'Competitive Games',
      answer:
        'While it isn\'t my "favorite game" per se, I have played more Counter Strike than any other game. I also enjoy CoD: Warzone.',
    },
    {
      question: 'Career Goals',
      answer:
        'Blessed to be working in a PM/SM role early in my career, so I am hoping to get my PMP and CSM certifications in 2024 & 2025 to continue down this path.',
    },
    {
      question: 'Current Project Goals',
      answer:
        'Currently, I am working on an emulator and possibly a game. Generally prefer working on low-level projects over web-dev.',
    },
    {
      question: 'Cars',
      answer:
        'I love ALL types of cars. I currently drive an Alfa Romeo Giulia, but JDM is my usual preference. Favorites are basic: Nissan Skyline R34 & Honda S2000.',
    },
  ];

  return (
    <Section>
      {/* Technical Skills */}
      <div className="flex flex-col text-center">
        <h1 className="text-2xl font-bold">
          <GradientText>Technical Skills</GradientText>
        </h1>
        <div className="flex flex-col md:flex-row md:text-left">
          <AboutMeSkills skills={favoriteLangs} title={'Favorite Languages'} />
          <AboutMeSkills skills={webFrameworks} title={'Web Frameworks'} />
          <AboutMeSkills skills={otherFrameworks} title={'Other Frameworks & Libraries'} />
          <AboutMeSkills skills={miscSkills} title={'Miscellaneous Skills'} />
        </div>
      </div>

      {/* Education */}
      <div>
        <div className="flex flex-col text-center">
          <h1 className="text-2xl font-bold">
            <GradientText>Education</GradientText>
          </h1>
          <AboutMeEducation {...education} />
        </div>
      </div>

      {/* TV Shows */}
      <div className="mt-10">
        <div className="flex flex-col text-center">
          <h1 className="mb-4 text-2xl font-bold">
            <a href="/reviews/tv-shows/">
              <GradientText>Favorite TV Shows</GradientText>
            </a>
          </h1>
          <ReviewGalleryMin reviews={props.shows.slice(0, 3)} />
        </div>
      </div>

      {/* Movies */}
      <div className="mt-4">
        <div className="flex flex-col text-center">
          <h1 className="mb-4 text-2xl font-bold">
            <a href="/reviews/movies/">
              <GradientText>Favorite Movies</GradientText>
            </a>
          </h1>
          <ReviewGalleryMin reviews={props.movies.slice(0, 3)} />
        </div>
      </div>

      {/* Albums */}
      <div className="mt-4">
        <div className="flex flex-col text-center">
          <h1 className="mb-4 text-2xl font-bold">
            <a href="/reviews/albums/">
              <GradientText>Favorite Albums</GradientText>
            </a>
          </h1>
          <ReviewGalleryMin reviews={props.albums.slice(0, 3)} />
        </div>
      </div>

      {/* Games */}
      <div className="mt-4">
        <div className="flex flex-col text-center">
          <h1 className="mb-4 text-2xl font-bold">
            <a href="/reviews/games/">
              <GradientText>Favorite Games</GradientText>
            </a>
          </h1>
          <ReviewGalleryMin reviews={props.games.slice(0, 3)} />
        </div>
      </div>

      {/* Fun Facts */}
      <div className="mb-8 mt-4 flex">
        <div className="flex flex-col text-center">
          <h1 className="mb-4 text-2xl font-bold">
            <GradientText>Facts About Me</GradientText>
          </h1>
          <AboutMeFacts facts={facts} />
        </div>
      </div>
    </Section>
  );
};

export { AboutMeContent };
