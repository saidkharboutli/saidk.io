import { AboutMeEducation } from '@/components/AboutMe/AboutMeEducation';
import { AboutMeSkills } from '@/components/AboutMe/AboutMeSkills';
import { GradientText } from '@/components/GradientText';
import { Section } from '@/components/Section';

const AboutMeContent = () => {
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
          <AboutMeSkills
            skills={otherFrameworks}
            title={'Other Frameworks & Libraries'}
          />
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

      {/* Hobbies */}

      {/*
        Hobbies
        TV Shows & Movies
        Books
        Fun Facts
          PC Specs
        Contact Me
      */}
    </Section>
  );
};

export { AboutMeContent };
