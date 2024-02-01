import { Section } from '../Section';

interface ISkillRankingCardProps {
  skill: string;
  level: number;
}

interface IAboutMeSkillsProps {
  title: string;
  skills: ISkillRankingCardProps[];
}

const SkillRankingCard = (props: ISkillRankingCardProps) => {
  let rating;
  if (props.level === 2) {
    rating = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
      </svg>
    ); // Thumbs up for high proficiency
  } else if (props.level === 1) {
    rating = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    ); // Hand flat for medium proficiency
  } else {
    rating = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>
      </svg>
    ); // Thumbs down for low proficiency
  }

  const colors = ['text-red-600', 'text-yellow-600', 'text-green-600'];

  return (
    <div className="overflow-hidden rounded">
      <div className="flex items-center gap-3">
        <p className={`text-base ${colors[props.level]}`}>{rating}</p>
        <div className="">{props.skill}</div>
      </div>
    </div>
  );
};

const AboutMeSkills = (props: IAboutMeSkillsProps) => (
  <Section>
    <h2 className="mb-2 text-lg font-bold">{props.title}</h2>
    <div className="flex flex-col gap-2 text-lg">
      {props.skills.map(({ skill, level }) => (
        <SkillRankingCard key={skill} skill={skill} level={level} />
      ))}
    </div>
  </Section>
);

export { AboutMeSkills, SkillRankingCard };
